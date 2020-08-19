<template>
  <div class="s-table"
       :class="[{
      's-table-fit': fit,
      's-table-striped': stripe,
      's-table-border': border || isGroup,
      's-table-hidden': isHidden,
      's-table-group': isGroup,
      's-table-fluid-height': maxHeight,
      's-table-enable-row-hover': !store.states.isComplex,
      's-table-enable-row-transition': (store.states.data || []).length !== 0 && (store.states.data || []).length < 100
    }, tableSize ? `s-table-${ tableSize }` : '']"
       @mouseleave="handleMouseLeave($event)">
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <div class="s-table-header-wrapper" ref="headerWrapper" v-if="showHeader">
      <table-header
        ref="tableHeader"
        :store="store"
        :layout="layout"
        :border="border"
        :default-sort="defaultSort"
        :style="{ width: layout.bodyWidth ? layout.bodyWidth + 'px' : '' }">
      </table-header>
    </div>
    <div
            class="s-table-body-wrapper"
            ref="bodyWrapper"
            :class="[`is-scroll-${scrollPosition}`]"
    >
      <scrollbar :wrap-style="[scrollBodyHeight]">
        <table-body
          :pageSize="pageSize"
          :currentPage="currentPage"
          :context="context"
          :store="store"
          :stripe="stripe"
          :layout="layout"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :highlight="highlightCurrentRow"
          :style="{ width: bodyWidth }"
          @data-length-change="handleDLChange">
        </table-body>
        <div :style="{ width: bodyWidth }" class="s-table-empty-block" v-if="!data || data.length === 0 || store.states.data.length === 0">
          <span class="s-table-empty-text"><slot name="empty">{{ emptyText || t('el.table.emptyText') }}</slot></span>
        </div>
        <div class="s-table-append-wrapper" ref="appendWrapper" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </scrollbar>
    </div>
    <div class="s-table-footer-wrapper" ref="footerWrapper" v-if="showSummary" v-show="data && data.length > 0">
      <table-footer
        :store="store"
        :layout="layout"
        :border="border"
        :sum-text="sumText || t('el.table.sumText')"
        :summary-method="summaryMethod"
        :default-sort="defaultSort"
        :style="{ width: layout.bodyWidth ? layout.bodyWidth + 'px' : '' }">
      </table-footer>
    </div>
    <div class="s-table-fixed" ref="fixedWrapper"
         v-if="fixedColumns.length > 0"
         :style="[
        { width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' },
        fixedHeight
      ]">
      <div class="s-table-fixed-header-wrapper" ref="fixedHeaderWrapper" v-if="showHeader">
        <table-header
          ref="fixedTableHeader"
          fixed="left"
          :border="border"
          :store="store"
          :layout="layout"
          :style="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }"></table-header>
      </div>
      <div
        class="s-table-fixed-body-wrapper"
        ref="fixedBodyWrapper"
        :style="[
          { top: layout.headerHeight + 'px' },
          fixedBodyHeight
        ]">
        <table-body
          fixed="left"
          :store="store"
          :stripe="stripe"
          :layout="layout"
          :highlight="highlightCurrentRow"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :style="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }">
        </table-body>
        <div class="s-table-append-gutter" :style="{ height: layout.appendHeight + 'px' }" v-if="$slots.append"></div>
      </div>
      <div class="s-table-fixed-footer-wrapper" ref="fixedFooterWrapper" v-if="showSummary" v-show="data && data.length > 0">
        <table-footer
          fixed="left"
          :border="border"
          :sum-text="sumText || t('el.table.sumText')"
          :summary-method="summaryMethod"
          :store="store"
          :layout="layout"
          :style="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }"></table-footer>
      </div>
    </div>
    <div class="s-table-fixed-right" ref="rightFixedWrapper"
         v-if="rightFixedColumns.length > 0"
         :style="[
        { width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' },
        { right: layout.scrollY ? 0 + 'px' : '' },
        fixedHeight
      ]">
      <div class="s-table-fixed-header-wrapper" ref="rightFixedHeaderWrapper" v-if="showHeader">
        <table-header
          ref="rightFixedTableHeader"
          fixed="right"
          :border="border"
          :store="store"
          :layout="layout"
          :style="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }"></table-header>
      </div>
      <div class="s-table-fixed-body-wrapper" ref="rightFixedBodyWrapper"
           :style="[
          { top: layout.headerHeight + 'px' },
          fixedBodyHeight
        ]">
        <table-body
          fixed="right"
          :store="store"
          :stripe="stripe"
          :layout="layout"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :highlight="highlightCurrentRow"
          :style="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }">
        </table-body>
      </div>
      <div class="s-table-fixed-footer-wrapper" ref="rightFixedFooterWrapper" v-if="showSummary" v-show="data && data.length > 0">
        <table-footer
          fixed="right"
          :border="border"
          :sum-text="sumText || t('el.table.sumText')"
          :summary-method="summaryMethod"
          :store="store"
          :layout="layout"
          :style="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }"></table-footer>
      </div>
    </div>
    <div class="s-table-fixed-right-patch"
         v-if="rightFixedColumns.length > 0"
         :style="{ width: layout.scrollY ? layout.gutterWidth + 'px' : '0', height: layout.headerHeight + 'px' }"></div>
    <div class="s-table-column-resize-proxy" ref="resizeProxy" v-show="resizeProxyVisible"></div>
  </div>
</template>

<script type="text/babel">
  import {Checkbox} from '../checkbox';
  import throttle from 'throttle-debounce/throttle';
  import debounce from 'throttle-debounce/debounce';
  import { addResizeListener, removeResizeListener } from '../extra/utils/resize-event';
  import Locale from '../extra/mixins/locale';
  import Migrating from '../extra/mixins/migrating';
  import TableStore from './table-store';
  import TableLayout from './table-layout';
  import TableBody from './table-body';
  import TableHeader from './table-header';
  import TableFooter from './table-footer';
  import { mousewheel } from './util';
  import Scrollbar from '../scrollbar';

  let tableIdSeed = 1;
  export default {
    name: 's-table',
    mixins: [Locale, Migrating],
    props: {
      data: {
        type: Array,
        default: function() {
          return [];
        }
      },

      size: String,

      width: [String, Number],
      height: [String, Number],
      maxHeight: [String, Number],
      fit: {
        type: Boolean,
        default: true
      },
      stripe: {
        type: Boolean,
        default :false
      },
      border: Boolean,
      rowKey: [String, Function],
      context: {},
      showHeader: {
        type: Boolean,
        default: true
      },
      showSummary: Boolean,
      sumText: String,
      summaryMethod: Function,
      rowClassName: [String, Function],
      rowStyle: [Object, Function],

      cellClassName: [String, Function],

      cellStyle: [Object, Function],

      headerRowClassName: [String, Function],

      headerRowStyle: [Object, Function],

      headerCellClassName: [String, Function],

      headerCellStyle: [Object, Function],

      highlightCurrentRow: Boolean,
      currentRowKey: [String, Number],
      emptyText: String,
      expandRowKeys: Array,
      defaultExpandAll: Boolean,
      defaultSort: Object,

      tooltipEffect: String,

      spanMethod: Function,
      search: {
        type: Object,
        default: function() {
          return {
            searchProps: [],
            searchFun: null
          }
        }
      }
    },
    components: {
      TableHeader,
      TableFooter,
      TableBody,
      Checkbox,
      Scrollbar
    },
    methods: {
      getMigratingConfig() {
        return {
          events: {
            expand: 'expand is renamed to expand-change'
          }
        };
      },

      setCurrentRow(row) {
        this.store.commit('setCurrentRow', row);
      },
      toggleRowSelection(row, selected) {
        this.store.toggleRowSelection(row, selected);
        this.store.updateAllSelected();
      },

      toggleRowExpansion(row, expanded) {
        this.store.toggleRowExpansion(row, expanded);
      },

      clearSelection() {
        this.store.clearSelection();
      },

      clearFilter() {
        this.store.clearFilter();
      },

      clearSort() {
        this.store.clearSort();
      },

      handleMouseLeave() {
        this.store.commit('setHoverRow', null);
        if (this.hoverState) this.hoverState = null;
      },
      updateScrollY() {
        this.layout.updateScrollY();
      },
      bindEvents() {
        const { headerWrapper, footerWrapper } = this.$refs;
        const refs = this.$refs;
        let self = this;
        let scrollEle = this.bodyWrapper.childNodes[0].childNodes[0];
        scrollEle.addEventListener('scroll', function() {
          if (headerWrapper) headerWrapper.scrollLeft = this.scrollLeft;
          if (footerWrapper) footerWrapper.scrollLeft = this.scrollLeft;
          if (refs.fixedBodyWrapper) refs.fixedBodyWrapper.scrollTop = this.scrollTop;
          if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
          const maxScrollLeftPosition = this.scrollWidth - this.offsetWidth - 1;
          const scrollLeft = this.scrollLeft;
          if (scrollLeft >= maxScrollLeftPosition) {
            self.scrollPosition = 'right';
          } else if (scrollLeft === 0) {
            self.scrollPosition = 'left';
          } else {
            self.scrollPosition = 'middle';
          }
        });
        const scrollBodyWrapper = event => {
          const { deltaX, deltaY } = event;

          if (Math.abs(deltaX) < Math.abs(deltaY)) return;

          if (deltaX > 0) {
            this.bodyWrapper.scrollLeft += 10;
          } else if (deltaX < 0) {
            this.bodyWrapper.scrollLeft -= 10;
          }
        };
        if (headerWrapper) {
          mousewheel(headerWrapper, throttle(16, scrollBodyWrapper));
        }
        if (footerWrapper) {
          mousewheel(footerWrapper, throttle(16, scrollBodyWrapper));
        }
        if (this.fit) {
          this.windowResizeListener = throttle(50, () => {
            if (this.$ready) this.doLayout();
          });
          addResizeListener(this.$el, this.windowResizeListener);
        }
      },
      doLayout() {
        this.store.updateColumns();
        this.updateScrollY();
        this.layout.update();
        this.$nextTick(() => {
          if (this.height) {
            if (this.useVirtual){
              if (!this.virtualBodyHeight) {
                this.layout.setHeight(105);
              } else if ((this.virtualBodyHeight) < parseInt(this.height)) {
                this.layout.setHeight(this.virtualBodyHeight+this.rowHeight);
              } else {
                this.layout.setHeight(this.height);
              }
            }else{
              this.layout.setHeight(this.height);
            }
          } else if (this.maxHeight) {
            this.layout.setMaxHeight(this.maxHeight);
          } else if (this.shouldUpdateHeight) {
            this.layout.updateHeight();
          }
        });
      },
      setPage({pageSize, currentPage}) {
        this.pageSize = pageSize;
        this.currentPage = currentPage;
      },
      handleDLChange(val) {
        this.$emit('data-length-change', val);
      }
    },
    created() {
      this.tableId = 's-table-' + tableIdSeed + '-';
      this.debouncedLayout = debounce(50, () => this.doLayout());
    },
    computed: {
      tableSize() {
        return this.size || (this.$ELEMENT || {}).size;
      },

      bodyWrapper() {
        return this.$refs.bodyWrapper;
      },
      shouldUpdateHeight() {
        return typeof this.height === 'number' ||
          this.fixedColumns.length > 0 ||
          this.rightFixedColumns.length > 0;
      },
      selection() {
        return this.store.states.selection;
      },
      columns() {
        return this.store.states.columns;
      },
      tableData() {
        return this.store.states.data;
      },
      fixedColumns() {
        return this.store.states.fixedColumns;
      },
      rightFixedColumns() {
        return this.store.states.rightFixedColumns;
      },
      bodyHeight() {
        let style = {};
        if (this.height) {
          style = {
            height: this.layout.bodyHeight ? this.layout.bodyHeight + 'px' : ''
          };
        } else if (this.maxHeight) {
          style = {
            'max-height': (this.showHeader
              ? this.maxHeight - this.layout.headerHeight - this.layout.footerHeight
              : this.maxHeight - this.layout.footerHeight) + 'px'
          };
        }
        return style;
      },
      scrollBodyHeight() {
        let style = {};
        if (this.height) {
          style = {
            height: this.layout.bodyHeight ? this.layout.bodyHeight + 17 + 'px' : ''
          };
        } else if (this.maxHeight) {
          style = {
            'max-height': (this.showHeader
              ? this.maxHeight - this.layout.headerHeight - this.layout.footerHeight
              : this.maxHeight - this.layout.footerHeight) + 'px'
          };
        }
        return style;
      },
      bodyWidth() {
        const { bodyWidth, scrollY, gutterWidth } = this.layout;
//        return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
        return bodyWidth ? bodyWidth - 0 + 'px' : '';
      },
      fixedBodyHeight() {
        let style = {};
        if (this.height) {
          style = {
            height: this.layout.bodyHeight ? this.layout.bodyHeight + 'px' : ''
          };
        } else if (this.maxHeight) {
          let maxHeight = this.layout.scrollX ? this.maxHeight - this.layout.gutterWidth : this.maxHeight;
          if (this.showHeader) {
            maxHeight -= this.layout.headerHeight;
          }
          style = {
            'max-height': maxHeight + 'px'
          };
        }
        return style;
      },
      fixedHeight() {
        let style = {};
        if (this.maxHeight) {
          style = {
//            bottom: (this.layout.scrollX && this.data.length) ? this.layout.gutterWidth + 'px' : ''
            bottom: (this.layout.scrollX && this.data.length) ? 0 + 'px' : ''
          };
        } else {
          style = {
            height: this.layout.tableHeight ? this.layout.tableHeight + 'px' : ''
          };
        }
        return style;
      }
    },
    watch: {
      height(value) {
        this.layout.setHeight(value);
      },

      maxHeight(value) {
        this.layout.setMaxHeight(value);
      },

      currentRowKey(newVal) {
        this.store.setCurrentRowKey(newVal);
      },
      data: {
        immediate: true,
        handler(val) {
          this.store.commit('setData', val);
          if (this.$ready) this.doLayout();
        }
      },

      expandRowKeys: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            this.store.setExpandRowKeys(newVal);
          }
        }
      }
    },
    destroyed() {
      if (this.windowResizeListener) removeResizeListener(this.$el, this.windowResizeListener);
    },
    mounted() {
      this.bindEvents();
      this.doLayout('mounted');
      // init filters
      this.store.states.columns.forEach(column => {
        if (column.filteredValue && column.filteredValue.length) {
          this.store.commit('filterChange', {
            column,
            values: column.filteredValue,
            silent: true
          });
        }
      });
      this.$ready = true;
    },
    data() {
      const store = new TableStore(this, {
        searchProps: this.search.searchProps,
        searchFun: this.search.searchFun,
        rowKey: this.rowKey,
        defaultExpandAll: this.defaultExpandAll
      });
      const layout = new TableLayout({
        store,
        table: this,
        fit: this.fit,
        showHeader: this.showHeader
      });
      return {
        store,
        layout,
        isHidden: false,
        renderExpanded: null,
        resizeProxyVisible: false,
        // 是否拥有多级表头
        isGroup: false,
        scrollPosition: 'left',
        pageSize: null,
        currentPage: null
      };
    }
  };
</script>
