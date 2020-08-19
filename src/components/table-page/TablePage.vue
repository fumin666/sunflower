<template>
  <div class="s-table-page">
    <s-row class="s-table-page-header" type="flex">
      <s-col
        :span="innerHeaderActions.width"
        :offset="innerHeaderActions.offset">
        <s-button
          v-for="action in innerHeaderActions.actions"
          :key="action.name"
          :icon="action.icon"
          @click="action.click"
          style="margin-right: 4px; marginBottom: 12px">{{action.name}}</s-button>
        <s-checkbox
          v-model="showSelection"
          v-if="showHeaderCheckbox"
          @change="handleCheckboxChange"
          style="margin-top: 6px; margin-bottom: 12px;" >显示已选</s-checkbox>
      </s-col>
      <s-col
        :span="innerHeaderSearch.width"
        :offset="searchOffset"
        v-if="(innerHeaderSearch.searchProps.length > 0) || innerHeaderSearch.searchFun"
        style="margin-bottom: 12px;text-align: right;">
        <template v-if="innerHeaderSearch.placeholder.length > 16">
          <div style="display: flex;flex-flow: row;">
           <div style="flex: 1">
          <s-input
                  :placeholder="placeHolder"
                  icon="magnifier"
                  v-model.trim="searchKey" style="max-width: 280px;"/>
           </div>
         <div style="width: 28px;line-height: 28px">
          <s-tooltip :content="innerHeaderSearch.placeholder" v-if="innerHeaderSearch.placeholder">
            <i class="iconfont icon-help"></i>
          </s-tooltip>
         </div>
          </div>
        </template>
        <template v-else>
          <s-input
                  :placeholder="innerHeaderSearch.placeholder"
                  icon="magnifier"
                  v-model.trim="searchKey" style="max-width: 280px;"/>
        </template>
      </s-col>
    </s-row>
    <s-table
      ref="s-table-page"
      :data="data"
      :row-height="rowHeight"
      :use-row-key="useRowKey"
      :row-key="rowKey" 
      :useVirtual="useVirtual"
      :excess-rows="excessRows"
      :search="innerHeaderSearch"
      :row-class-name="rowClassName"
      :height="height"
      :max-height="maxHeight"
      :border="border"
      :fit="fit"
      :stripe="stripe"
      style="width: 100%"
      :default-sort="defaultSort"
      :highlight-current-row="highlightCurrentRow"
      @row-click="handleRowClick"
      @filter-change="handleFilterChange"
      @data-length-change="handleDataLengthChange"
      @selection-change="handleSelectionChange">
      <slot></slot>
      <s-table-column
        :label="actionsColLabel"
        :min-width="actionsColWidth"
        :show-overflow-tooltip="false"
        v-if="rowActions.length > 0"
      >
        <template slot-scope="scope">
          <template v-for="action in rowActions">
            <i
              v-if="action.show ? action.show(scope.row) : true"
              :title="action.name"
              :class="`iconfont icon-${action.icon}`"
              @click="action.click(scope.row)"/>
          </template>
        </template>
      </s-table-column>
    </s-table>
    <s-pagination
      :noBorder="noBorder"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      :layout="pageLayout"
      :page-sizes="pageSizes"
      @current-change="handleCurrentPageChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script>
  import {sTable} from '../table';
  import sPagination from '../pagination';
  import {debounce} from 'lodash';
  import Tooltip from '../tooltip';

  export default {
    name: 's-table-page',
    components: {
      's-table': sTable,
      's-pagination': sPagination,
      's-tooltip': Tooltip
    },
    props: {
      rowKey: [String, Function],
      useVirtual: {
        type: Boolean,
        default: false
      },
      rowHeight: {
        type: Number,
        default: 48
      },
      useRowKey: {
        type: Boolean,
        default: false
      },
      excessRows: {
        type: Number,
        default: 10
      },
      // 操作栏
      headerActions: {
        type: Object,
        default: function() {
          return {};
        }
      },
      showHeaderCheckbox: {
        type: Boolean,
        default: false
      },
      headerSearch: {
        type: Object,
        default: function() {
          return {}
        }
      },
      // s-table
      data: {
        type: Array,
        default: function() {
          return [];
        }
      },
      rowActions: { // 操作列内容
        type: Array,
        default: function() {
          return [];
        }
      },
      actionsColWidth: { // 操作列宽度
        type: String,
        default: '100'
      },
      actionsColLabel: { // 操作列的label
        type: String,
        default: '操作'
      },
      rowClassName: [String, Function],
      // 分页部分
      initPageNumber: { // 初始页码
        type: Number,
        default: 1
      },
      initPageSize: { // 每页默认显示10条数据
        type: Number,
        default: 10
      },
      pageLayout: { // 分页布局
        type: String,
        default: 'total, sizes, prev, pager, next, jumper'
      },
      pageSizes: { // 设置每页显示条数的数组
        type: Array,
        default: function() {
          return [10, 20, 50, 100]
        }
      },
      noBorder: { // 分页不显示边框
        type: Boolean,
        default: false
      },
      border: {
        type: Boolean,
        default: false
      },
      fit: {
        type: Boolean,
        default: true
      },
      stripe: {
        type: Boolean,
        default :false
      },
      maxHeight: [String, Number],
      height: {
        type: [String, Number],
        default: 0
      },
      defaultSort: Object,
      highlightCurrentRow: Boolean,
    },
    data() {
      return {
        currentPage: this.initPageNumber,
        pageSize: this.initPageSize,
        total: 0,
        searchKey: '',
        showSelection: false,
        placeHolder: '请根据右侧提示进行查询'
      }
    },
    computed: {
      searchOffset: function() {
        return 24 - this.innerHeaderActions.offset - this.innerHeaderActions.width - this.innerHeaderSearch.width;
      }
    },
    created() {
      this.handleDataLengthChange(this.data.length);
      this.innerHeaderActions = Object.assign({}, {
        actions: [],
        width: 12,
        offset: 0
      }, this.headerActions);
      this.innerHeaderSearch = Object.assign({}, {
        width: 6,
        placeholder: '请输入查询内容',
        searchProps: [],
        searchFun: null
      }, this.headerSearch);
    },
    mounted() {
      this.$refs['s-table-page'].setPage({
        pageSize: this.pageSize,
        currentPage: this.currentPage
      });
    },
    watch: {
      searchKey: debounce(function() {
        this.showSelection = false; // 搜索条件发生变化时，去掉头部checkbox显示已选的勾选状态
        this.$refs['s-table-page'].store.commit('searchChange', this.searchKey);
      }, 500),
      data(newVal) {
          this.searchKey = '';
      }
    },
    methods: {
      handleDataLengthChange(length) {
        this.total = length;
      },
      handleCurrentPageChange(val) {
        this.currentPage = val;
        this.$emit('current-change', val);
        this.$refs['s-table-page'].setPage({
          pageSize: this.pageSize,
          currentPage: val
        });
        this.$refs['s-table-page'].store.commit('changePage');
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.$refs['s-table-page'].setPage({
          pageSize: val,
          currentPage: this.currentPage
        });
        this.$refs['s-table-page'].store.commit('changePage');
        this.$nextTick(()=>{
          this.$refs['s-table-page'].doLayout();
        })
      },
      handleCheckboxChange(val) {
        this.$refs['s-table-page'].store.commit('showAllSelection', val);
      },
      getAllSelectedData() {
        return this.$refs['s-table-page'].store.states.selection;
      },
      setAllSelectedData(arr) {
        this.$refs['s-table-page'].store.commit('setAllSelection', arr);
      },
      toggleRowSelection(row) {
        this.$refs['s-table-page'].toggleRowSelection(row);
      },
      handleSelectionChange(val) {
        this.$emit('selection-change', val);
      },
      handleFilterChange(filters) {
        this.$emit('filter-change', filters)
      },
      handleRowClick(row, event, column) {
        this.$emit('row-click', row, event, column)
      }
    }
  }
</script>

<style>

</style>
