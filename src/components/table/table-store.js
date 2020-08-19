import Vue from 'vue';
import debounce from 'throttle-debounce/debounce';
import merge from '../extra/utils/merge';
import { orderBy, getColumnById, getRowIdentity } from './util';

const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data;
  }
  return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};

const filterData = (data, states) => {
  Object.keys(states.filters).forEach((columnId) => {
    const values = states.filters[columnId];
    const column = getColumnById(states, columnId);
    if (column && column.filterMethod) {
      data = data.filter((row) => {
        return values.some((value) => {
          let result = column.filterMethod.call(null, value, row);
          if (typeof result === 'boolean') {
            return result;
          } else {
            throw(new Error('filter-method 错误'));
          }
        })
      });
    }
  });
  return data;
}

const searchData = (data, states) => {
  if (states.searchProps.length > 0) { // 按props查询
    data = data.filter((row) => {
      return states.searchProps.some(value => {
        if (row[value] !== null && row[value] !== undefined) {
          return String(row[value]).toLowerCase().indexOf(states.searchKey.toLowerCase()) > -1
        } else {
          return false;
        }
      });
    });
  } else { // 按自定义fun查询
    data = data.filter((row) => {
      return states.searchFun.call(null, states.searchKey, row);
    });
  }
  return data;
}

const getKeysMap = function(array, rowKey) {
  const arrayMap = {};
  (array || []).forEach((row, index) => {
    arrayMap[getRowIdentity(row, rowKey)] = { row, index };
  });
  return arrayMap;
};

const toggleRowSelection = function(states, row, selected) {
  let changed = false;
  const selection = states.selection;
  const index = selection.indexOf(row);
  if (typeof selected === 'undefined') {
    if (index === -1) {
      selection.push(row);
      changed = true;
    } else {
      selection.splice(index, 1);
      changed = true;
    }
  } else {
    if (selected && index === -1) {
      selection.push(row);
      changed = true;
    } else if (!selected && index > -1) {
      selection.splice(index, 1);
      changed = true;
    }
  }

  return changed;
};

const toggleRowExpansion = function(states, row, expanded) {
  let changed = false;
  const expandRows = states.expandRows;
  if (typeof expanded !== 'undefined') {
    const index = expandRows.indexOf(row);
    if (expanded) {
      if (index === -1) {
        expandRows.push(row);
        changed = true;
      }
    } else {
      if (index !== -1) {
        expandRows.splice(index, 1);
        changed = true;
      }
    }
  } else {
    const index = expandRows.indexOf(row);
    if (index === -1) {
      expandRows.push(row);
      changed = true;
    } else {
      expandRows.splice(index, 1);
      changed = true;
    }
  }

  return changed;
};

// 筛选条件是否为空
const isFilter = function(states) {
  return Object.keys(states.filters).some((columnId) => {
    const values = states.filters[columnId];
    return values && (values.length > 0);
  });
}

// 构造函数模式
const TableStore = function(table, initialState = {}) {
  if (!table) {
    throw new Error('Table is required.');
  }
  this.table = table;

  this.states = {
    rowKey: null,
    _columns: [],
    originColumns: [],
    columns: [],
    fixedColumns: [],
    rightFixedColumns: [],
    leafColumns: [],
    fixedLeafColumns: [],
    rightFixedLeafColumns: [],
    isComplex: false,
    _data: null,
    data: null,
    sortingColumn: null,
    sortProp: null,
    sortOrder: null,
    isAllSelected: false,
    selection: [],
    beforeSelectionData: [],
    reserveSelection: false,
    selectable: null,
    currentRow: null,
    hoverRow: null,
    filters: {},
    expandRows: [],
    defaultExpandAll: false,
    searchProps: null,      // 搜索字段
    searchFun: null,        // 自定义搜索方法
    searchKey: null,        // 搜索值
    filterSearchData: null  // 存储筛选搜索后的数据，供排序使用
  };
  // 合并实例属性
  for (let prop in initialState) {
    if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
      this.states[prop] = initialState[prop];
    }
  }
};
// 原型模式
TableStore.prototype.mutations = {
  setData(states, data) {
    const dataInstanceChanged = states._data !== data;
    states._data = data;

    Object.keys(states.filters).forEach((columnId) => {
      const values = states.filters[columnId];
      if (!values || values.length === 0) return;
      const column = getColumnById(this.states, columnId);
      if (column && column.filterMethod) {
        data = data.filter((row) => {
          return values.some(value => column.filterMethod.call(null, value, row));
        });
      }
    });

    states.filterSearchData = data;
    states.data = sortData((data || []), states)

    this.updateCurrentRow();

    if (!states.reserveSelection) {
      if (dataInstanceChanged) {
        this.clearSelection();
      } else {
        this.cleanSelection();
      }
      this.updateAllSelected();
    } else {
      const rowKey = states.rowKey;
      if (rowKey) {
        const selection = states.selection;
        const selectedMap = getKeysMap(selection, rowKey);

        states.data.forEach((row) => {
          const rowId = getRowIdentity(row, rowKey);
          const rowInfo = selectedMap[rowId];
          if (rowInfo) {
            selection[rowInfo.index] = row;
          }
        });

        this.updateAllSelected();
      } else {
        console.warn('WARN: rowKey is required when reserve-selection is enabled.');
      }
    }

    const defaultExpandAll = states.defaultExpandAll;
    if (defaultExpandAll) {
      this.states.expandRows = (states.data || []).slice(0);
    }

    Vue.nextTick(() => this.table.updateScrollY());
  },

  changeSortCondition(states, options) {
    states.data = sortData((states.filterSearchData || states._data || []), states);

    if (!options || !options.silent) {
      this.table.$emit('sort-change', {
        column: this.states.sortingColumn,
        prop: this.states.sortProp,
        order: this.states.sortOrder
      });
    }

    Vue.nextTick(() => this.table.updateScrollY());
  },

  filterChange(states, options) {
    let { column, values, silent } = options;
    const prop = column.property;
    const filters = {};

    if (prop) {
      states.filters[column.id] = values;
      filters[column.columnKey || column.id] = values;
    }
    if (values.length === 0) { // 若筛选为空
      if (states.searchKey === null) { // 筛选和搜索都为空
        states.filterSearchData = [];
        states.data = sortData([], states);
      } else { // 显示 搜索-排序 后的数据
        let data = searchData(states._data, states);
        states.filterSearchData = data;
        states.data = sortData(data, states);
      }
    } else { // 筛选不为空
      if (states.searchKey === null) {  // 筛选条件不为空，搜索条件为空
        let data = filterData(states._data, states);
        states.filterSearchData = data;
        states.data = sortData(data, states);
      } else { // 筛选条件和搜索条件都不为空，先搜索，再筛选
        let _data = searchData(states._data, states);
        let data = filterData(_data, states);
        states.filterSearchData = data;
        states.data = sortData(data, states);
      }
    }
    if (!silent) {
      this.table.$emit('filter-change', filters);
    }

    Vue.nextTick(() => this.table.updateScrollY());
  },

  searchChange(states, searchKey) {
    if (isFilter(states)) { // 筛选条件不为空
      if (searchKey.length === 0) { // 搜索条件为空
        states.searchKey = null;
        let data = filterData(states._data, states);
        states.filterSearchData = data;
        states.data = sortData(data, states);
      } else { // 筛选-搜索
        states.searchKey = searchKey;
        let _data = filterData(states._data, states);
        let data = searchData(_data, states);
        states.filterSearchData = data;
        states.data = sortData(data, states);
      }
    } else { // 筛选条件为空
      if (searchKey.length === 0) { // 搜索也为空
        states.searchKey = null;
        states.filterSearchData = states._data;
        states.data = sortData(states._data, states);
      } else { // 搜索-排序
        states.searchKey = searchKey;
        let data = searchData(states._data, states);
        states.filterSearchData = data;
        states.data = sortData(data, states);
      }
    }
    this.updateAllSelected(); // 表格搜索时判断全选情况
  },

  insertColumn(states, column, index, parent) {
    let array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }

    if (typeof index !== 'undefined') {
      array.splice(index, 0, column);
    } else {
      array.push(column);
    }

    if (column.type === 'selection') {
      states.selectable = column.selectable;
      states.reserveSelection = column.reserveSelection;
    }

    this.updateColumns();  // hack for dynamics insert column
    this.scheduleLayout();
  },

  removeColumn(states, column) {
    let _columns = states._columns;
    if (_columns) {
      _columns.splice(_columns.indexOf(column), 1);
    }

    this.updateColumns();  // hack for dynamics remove column
    this.scheduleLayout();
  },

  setHoverRow(states, row) {
    states.hoverRow = row;
  },

  setCurrentRow(states, row) {
    const oldCurrentRow = states.currentRow;
    states.currentRow = row;

    if (oldCurrentRow !== row) {
      this.table.$emit('current-change', row, oldCurrentRow);
    }
  },

  rowSelectedChanged(states, row) {
    const changed = toggleRowSelection(states, row);
    const selection = states.selection;

    if (changed) {
      const table = this.table;
      table.$emit('selection-change', selection);
      table.$emit('select', selection, row);
    }

    this.updateAllSelected();
  },
  changePage () {
    if (this.table.currentPage && this.table.pageSize) {
      this.updateAllSelected();
    }
  },
  toggleAllSelection: debounce(10, function(states) {
    var data = states.data || [];
    if (this.table.currentPage && this.table.pageSize) {
      let from = this.table.pageSize * (this.table.currentPage - 1);
      let to = from + this.table.pageSize;
      data = data.slice(from, to);
    }
    const value = !states.isAllSelected;
    const selection = this.states.selection;
    let selectionChanged = false;

    data.forEach((item, index) => {
      if (states.selectable) {
        if (states.selectable.call(null, item, index) && toggleRowSelection(states, item, value)) {
          selectionChanged = true;
        }
      } else {
        if (toggleRowSelection(states, item, value)) {
          selectionChanged = true;
        }
      }
    });

    const table = this.table;
    if (selectionChanged) {
      table.$emit('selection-change', selection);
    }
    table.$emit('select-all', selection);
    states.isAllSelected = value;
  }),

  showAllSelection(states, bool) {
    if (bool) {
      if (states.selection.length > 0) {
        states.isAllSelected = true;
      }
      states.beforeSelectionData = [];
      states.data.forEach(item => {
        states.beforeSelectionData.push(item);
      });
      states.data = [];
      states.selection.forEach(item => {
        states.data.push(item);
      });
    } else {
      if (states.beforeSelectionData.length > states.selection.length) {
        states.isAllSelected = false;
      }
      states.data = [];
      states.beforeSelectionData.forEach(item => {
        states.data.push(item);
      });
    }
  },

  setAllSelection(states, arr) {
    states.selection = arr;
  },

  checkFilters(states) {
    states.columns.forEach((column) => {
      column.filteredValue = [];
    });
    Object.keys(states.filters).forEach((columnId) => {
      const values = states.filters[columnId];
      const column = getColumnById(states, columnId);
      column.filteredValue = values;
    });
  }
};

const doFlattenColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};

TableStore.prototype.updateColumns = function() {
  const states = this.states;
  const _columns = states._columns || [];
  states.fixedColumns = _columns.filter((column) => column.fixed === true || column.fixed === 'left');
  states.rightFixedColumns = _columns.filter((column) => column.fixed === 'right');

  if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
    _columns[0].fixed = true;
    states.fixedColumns.unshift(_columns[0]);
  }

  const notFixedColumns = _columns.filter(column => !column.fixed);
  states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns);

  const leafColumns = doFlattenColumns(notFixedColumns);
  const fixedLeafColumns = doFlattenColumns(states.fixedColumns);
  const rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns);

  states.leafColumnsLength = leafColumns.length;
  states.fixedLeafColumnsLength = fixedLeafColumns.length;
  states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length;

  states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns);
  states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
};

TableStore.prototype.isSelected = function(row) {
  return (this.states.selection || []).indexOf(row) > -1;
};

TableStore.prototype.clearSelection = function() {
  const states = this.states;
  states.isAllSelected = false;
  const oldSelection = states.selection;
  states.selection = [];
  if (oldSelection.length > 0) {
    this.table.$emit('selection-change', states.selection);
  }
};

TableStore.prototype.setExpandRowKeys = function(rowKeys) {
  const expandRows = [];
  const data = this.states.data;
  const rowKey = this.states.rowKey;
  if (!rowKey) throw new Error('[Table] prop row-key should not be empty.');
  const keysMap = getKeysMap(data, rowKey);
  rowKeys.forEach((key) => {
    const info = keysMap[key];
    if (info) {
      expandRows.push(info.row);
    }
  });

  this.states.expandRows = expandRows;
};

TableStore.prototype.toggleRowSelection = function(row, selected) {
  const changed = toggleRowSelection(this.states, row, selected);
  if (changed) {
    this.table.$emit('selection-change', this.states.selection);
  }
};

TableStore.prototype.toggleRowExpansion = function(row, expanded) {
  const changed = toggleRowExpansion(this.states, row, expanded);
  if (changed) {
    this.table.$emit('expand-change', row, this.states.expandRows);
  }
};

TableStore.prototype.cleanSelection = function() {
  const selection = this.states.selection || [];
  const data = this.states.data;
  const rowKey = this.states.rowKey;
  let deleted;
  if (rowKey) {
    deleted = [];
    const selectedMap = getKeysMap(selection, rowKey);
    const dataMap = getKeysMap(data, rowKey);
    for (let key in selectedMap) {
      if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
        deleted.push(selectedMap[key].row);
      }
    }
  } else {
    deleted = selection.filter((item) => {
      return data.indexOf(item) === -1;
    });
  }

  deleted.forEach((deletedItem) => {
    selection.splice(selection.indexOf(deletedItem), 1);
  });

  if (deleted.length) {
    this.table.$emit('selection-change', selection);
  }
};

TableStore.prototype.clearFilter = function() {
  const states = this.states;
  const { tableHeader, fixedTableHeader, rightFixedTableHeader } = this.table.$refs;
  let panels = {};

  if (tableHeader) panels = merge(panels, tableHeader.filterPanels);
  if (fixedTableHeader) panels = merge(panels, fixedTableHeader.filterPanels);
  if (rightFixedTableHeader) panels = merge(panels, rightFixedTableHeader.filterPanels);

  const keys = Object.keys(panels);
  if (!keys.length) return;

  keys.forEach(key => {
    panels[key].filteredValue = [];
  });

  states.filters = {};

  this.commit('filterChange', {
    column: {},
    values: [],
    silent: true
  });
};

TableStore.prototype.clearSort = function() {
  const states = this.states;
  if (!states.sortingColumn) return;
  states.sortingColumn.order = null;
  states.sortProp = null;
  states.sortOrder = null;

  this.commit('changeSortCondition', {
    silent: true
  });
};

TableStore.prototype.updateAllSelected = function() {
  const states = this.states;
  const { selection, rowKey, selectable, data } = states;
  let newData = states.data;
  if (this.table.currentPage && this.table.pageSize) {
    let from = this.table.pageSize * (this.table.currentPage - 1);
    let to = from + this.table.pageSize;
    newData = newData.slice(from, to);
  }
  if (!newData || newData.length === 0) {
    states.isAllSelected = false;
    return;
  }

  let selectedMap;
  if (rowKey) {
    selectedMap = getKeysMap(states.selection, rowKey);
  }

  const isSelected = function(row) {
    if (selectedMap) {
      return !!selectedMap[getRowIdentity(row, rowKey)];
    } else {
      return selection.indexOf(row) !== -1;
    }
  };

  let isAllSelected = true;
  let selectedCount = 0;
  for (let i = 0, j = newData.length; i < j; i++) {
    const item = newData[i];
    if (selectable) {
      const isRowSelectable = selectable.call(null, item, i);
      if (isRowSelectable) {
        if (!isSelected(item)) {
          isAllSelected = false;
          break;
        } else {
          selectedCount++;
        }
      }
    } else {
      if (!isSelected(item)) {
        isAllSelected = false;
        break;
      } else {
        selectedCount++;
      }
    }
  }

  if (selectedCount === 0) isAllSelected = false;

  states.isAllSelected = isAllSelected;
};

TableStore.prototype.scheduleLayout = function() {
  this.table.debouncedLayout();
};

TableStore.prototype.setCurrentRowKey = function(key) {
  const states = this.states;
  const rowKey = states.rowKey;
  if (!rowKey) throw new Error('[Table] row-key should not be empty.');
  const data = states.data || [];
  const keysMap = getKeysMap(data, rowKey);
  const info = keysMap[key];
  if (info) {
    states.currentRow = info.row;
  }
};

TableStore.prototype.updateCurrentRow = function() {
  const states = this.states;
  const table = this.table;
  const data = states.data || [];
  const oldCurrentRow = states.currentRow;

  if (data.indexOf(oldCurrentRow) === -1) {
    states.currentRow = null;

    if (states.currentRow !== oldCurrentRow) {
      table.$emit('current-change', null, oldCurrentRow);
    }
  }
};

TableStore.prototype.commit = function(name, ...args) {
  const mutations = this.mutations;
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args));
  } else {
    throw new Error(`Action not found: ${name}`);
  }
};

export default TableStore;
