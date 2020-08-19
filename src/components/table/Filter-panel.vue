<template>
  <transition name="s-zoom-in-top">
    <div class="s-table-filter" v-if="multiple" v-show="showPopper">
      <div class="s-table-filter-content">
        <s-checkbox-group class="s-table-filter-checkbox-group" v-model="filteredValue">
          <s-checkbox
            v-for="filter in filters"
            :key="filter.value"
            :label="filter.value">{{ filter.text }}</s-checkbox>
        </s-checkbox-group>
      </div>
      <div class="s-table-filter-bottom">
        <button @click="handleAll">{{ t('el.table.all') }}</button>
        <button @click="handleClear">{{ t('el.table.clear') }}</button>
        <!--<button @click="handleReset">{{ t('el.table.resetFilter') }}</button>-->
        <button @click="handleConfirm"
                :class="{ 'is-disabled': filteredValue.length === 0 }"
                :disabled="filteredValue.length === 0">
          {{ t('el.table.confirmFilter') }}
        </button>
      </div>
    </div>
    <div class="s-table-filter" v-else v-show="showPopper">
      <ul class="s-table-filter-list">
        <li class="s-table-filter-list-item"
            :class="{ 'is-active': filterValue === undefined || filterValue === null }"
            @click="handleSelect(null)">{{ t('el.table.clearFilter') }}</li>
        <li class="s-table-filter-list-item"
            v-for="filter in filters"
            :label="filter.value"
            :key="filter.value"
            :class="{ 'is-active': isActive(filter) }"
            @click="handleSelect(filter.value)" >{{ filter.text }}</li>
      </ul>
    </div>
  </transition>
</template>

<script type="text/babel">
  import Popper from '../extra/utils/vue-popper';
  import { PopupManager } from '../extra/utils/popup';
  import Locale from '../extra/mixins/locale';
  import Clickoutside from '../extra/utils/clickoutside';
  import Dropdown from './dropdown';
  import {Checkbox, CheckboxGroup} from '../checkbox';

  export default {
    name: 's-table-filter-panel',
    mixins: [Popper, Locale],
    directives: {
      Clickoutside
    },
    components: {
      's-checkbox': Checkbox,
      's-checkbox-group': CheckboxGroup
    },
    props: {
      placement: {
        type: String,
        default: 'bottom-end'
      }
    },
    customRender(h) {
      return (<div class="s-table-filter">
        <div class="s-table-filter-content">
        </div>
        <div class="s-table-filter-bottom">
          <button on-click={ this.handleConfirm }>{ this.t('el.table.confirmFilter') }</button>
          <button on-click={ this.handleReset }>{ this.t('el.table.resetFilter') }</button>
        </div>
      </div>);
    },
    methods: {
      isActive(filter) {
        return filter.value === this.filterValue;
      },
      handleOutsideClick() {
        this.showPopper = false;
        // this.table.store.commit('checkFilters');
      },
      handleConfirm() {
        this.confirmFilter(this.filteredValue);
        this.showPopper = false;
      },
      handleReset() {
        // this.filteredValue = [];
        // this.confirmFilter(this.filteredValue);
      },
      handleClear() { // 清空
        this.filteredValue = [];
        // this.confirmFilter(this.filteredValue);
      },
      handleSelect(filterValue) {
        this.filterValue = filterValue;
        // if ((typeof filterValue !== 'undefined') && (filterValue !== null)) {
        //   this.confirmFilter(this.filteredValue);
        // } else {
        //   this.confirmFilter([]);
        // }
      },
      confirmFilter(filteredValue) {
        this.table.showSelection = false; // 筛选条件发生变化时，去掉头部checkbox显示已选的勾选状态
        this.table.store.commit('filterChange', {
          column: this.column,
          values: filteredValue
        });
      },
      handleAll(){
        let arr=this.filters.map(function(item){
          return item.value
        });
        this.filteredValue = arr;
        // if ((typeof arr !== 'undefined') && (arr !== null)) {
        //   this.confirmFilter(this.filteredValue);
        // }
      },
    },
    data() {
      return {
        table: null,
        cell: null,
        column: null
      };
    },
    computed: {
      filters() {
        return this.column && this.column.filters;
      },
      filterValue: {
        get() {
          return (this.column.filteredValue || [])[0];
        },
        set(value) {
          if (this.filteredValue) {
            if ((typeof value !== 'undefined') && (value !== null)) {
              this.filteredValue.splice(0, 1, value);
            } else {
              this.filteredValue.splice(0, 1);
            }
          }
        }
      },
      filteredValue: {
        get() {
          if (this.column) {
            return this.column.filteredValue || [];
          }
          return [];
        },
        set(value) {
          if (this.column) {
            this.column.filteredValue = value;
          }
        }
      },
      multiple() {
        if (this.column) {
          return this.column.filterMultiple;
        }
        return true;
      }
    },
    mounted() {
      let arr=this.filters.map(function(item){
        return item.value
      });
      this.filteredValue = this.filteredValue.length ? this.filteredValue : arr;
      this.popperElm = this.$el;
      this.referenceElm = this.cell;
      this.table.bodyWrapper.addEventListener('scroll', () => {
        this.updatePopper();
      });
      this.$watch('showPopper', (value) => {
        if (this.column) this.column.filterOpened = value;
        if (value) {
          Dropdown.open(this);
        } else {
          Dropdown.close(this);
        }
      });
      // this.handleAll()
    },
    watch: {
      showPopper(val) {
        if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < PopupManager.zIndex) {
          this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
        }
      }
    }
  };
</script>