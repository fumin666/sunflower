<script>
  import sPager from './Pager';
  import sSelect from '../select/Select';
  import sOption from '../select/Option';
  import SInput from '../input';
  import Locale from '../extra/mixins/locale';
  import { valueEquals } from '../extra/utils/util';

  export default {
    name: 'sPagination',

    data() {
      return {
        internalCurrentPage: 1,
        internalPageSize: 0
      };
    },

    props: {
      noBorder: {
        type: Boolean,
        default: false
      },
      pageSize: {
        type: Number,
        default: 10
      },

      small: Boolean,

      total: Number,

      pageCount: Number,

      currentPage: {
        type: Number,
        default: 1
      },

      layout: {
        default: 'prev, pager, next, jumper, ->, total'
      },

      pageSizes: {
        type: Array,
        default() {
          return [10, 20, 30, 40, 50, 100];
        }
      },

      infinite: {
        type: Boolean,
        default: false
      },

      popperClass: String,

      prevText: String,

      nextText: String,

      totalText: String,

      showText: String,

      unitText: String,

      hasNext: {
        type: Boolean,
        default: true
      }
    },

    render(h) {
      let template = <div class='s-pagination'></div>;
      const layout = this.infinite ? 'sizes, prev, pager, next' : (this.layout || '');
      if (!layout) return;
      const TEMPLATE_MAP = {
        prev: <prev></prev>,
        jumper: <jumper></jumper>,
        pager: <s-pager noBorder={this.noBorder} currentPage={ this.internalCurrentPage } pageCount={ this.internalPageCount } infinite={ this.infinite } hasNext={ this.hasNext } showAnotherPage={ this.showAnotherPage } on-change={ this.handleCurrentChange }></s-pager>,
        next: <next></next>,
        sizes: <sizes pageSizes={ this.pageSizes }></sizes>,
        slot: <my-slot></my-slot>,
        total: <total></total>
    };
      const components = layout.split(',').map((item) => item.trim());
      const rightWrapper = <div class="s-pagination__rightwrapper"></div>;
      let haveRightWrapper = false;

      if (this.small) {
        template.data.class += ' s-pagination--small';
      }

      template.children = template.children || [];
      rightWrapper.children = rightWrapper.children || [];

      components.forEach(compo => {
        if (compo === '->') {
          haveRightWrapper = true;
          return;
        }

        if (!haveRightWrapper) {
          template.children.push(TEMPLATE_MAP[compo]);
        } else {
          rightWrapper.children.push(TEMPLATE_MAP[compo]);
        }
      });

      if (haveRightWrapper) {
        template.children.unshift(rightWrapper);
      }

      return template;
    },

    components: {
      MySlot: {
        render(h) {
          return (
            this.$parent.$slots.default
              ? this.$parent.$slots.default[0]
              : ''
          );
        }
      },
      Prev: {
        render(h) {
          return (
            <button
              type="button"
              class={['btn-prev', { disabled: this.$parent.internalCurrentPage <= 1 },{noborder:this.$parent.noBorder}]}
              on-click={ this.$parent.prev }>
              {
                this.$parent.prevText
                  ? <span>{ this.$parent.prevText }</span>
                  : <i class="iconfont icon-left"></i>
              }
            </button>
        );
        }
      },

      Next: {
        render(h) {
          let nextDisable = false;
          if (this.$parent.infinite) {
            if (!this.$parent.hasNext && this.$parent.internalCurrentPage === this.$parent.internalPageCount) {
              nextDisable = true;
            }
          } else {
            if (this.$parent.internalCurrentPage === this.$parent.internalPageCount) {
              nextDisable = true;
            }
          }
          return (
            <button
              type="button"
              class={['btn-next',
                { disabled: nextDisable || this.$parent.internalPageCount === 0 },
                {noborder:this.$parent.noBorder}
              ]}
              on-click={ this.$parent.next }>
              {
                this.$parent.nextText
                  ? <span>{ this.$parent.nextText }</span>
                  : <i class="iconfont icon-right"></i>
              }
            </button>
          );
        }
      },

      Sizes: {
        mixins: [Locale],

        props: {
          pageSizes: Array,
        },

        watch: {
          pageSizes: {
            immediate: true,
            handler(newVal, oldVal) {
              if (valueEquals(newVal, oldVal)) return;
              if (Array.isArray(newVal)) {
                this.$parent.internalPageSize = newVal.indexOf(this.$parent.pageSize) > -1
                  ? this.$parent.pageSize
                  : this.pageSizes[0];
              }
            }
          }
        },

        render(h) {
          if(this.$parent.infinite){
            return (
              <span class="s-pagination__sizes">
                  { this.$parent.showText || '显示' } <s-select
                value={ this.$parent.internalPageSize }
                popperClass={ `${this.$parent.popperClass || ''} is-arrow-fixed` }
                on-input={ this.handleChange }>
                {
                  this.pageSizes.map(item =>
                  <s-option
                  value={ item }
                  label={ item + ' ' + this.t('s.pagination.pagesize') }>
                    </s-option>
                )
                }
              </s-select> { this.$parent.unitText || '条' }
              </span>
            );
          }
          return (
            <span class="s-pagination__sizes">
              { this.$parent.showText || '显示' } <s-select
              value={ this.$parent.internalPageSize }
              popperClass={ `${this.$parent.popperClass || ''} is-arrow-fixed` }
              on-input={ this.handleChange }>
              {
                this.pageSizes.map(item =>
                    <s-option
                    value={ item }
                    label={ item + ' ' + this.t('s.pagination.pagesize') }>
                      </s-option>
                  )
              }
            </s-select> { this.$parent.unitText || '条' }
            </span>
          );
        },

        components: {
          sSelect,
          sOption
        },

        methods: {
          handleChange(val) {
            if (val !== this.$parent.internalPageSize) {
              this.$parent.internalPageSize = val = parseInt(val, 10);
              this.$parent.$emit('size-change', val);
            }
          }
        }
      },

      Jumper: {
        mixins: [Locale],

        data() {
          return {
            oldValue: null
          };
        },

        components: { SInput },

        methods: {
          handleFocus(event) {
            this.oldValue = event.target.value;
          },
          handleBlur({ target }) {
            this.reassignMaxValue(target);
          },
          handleKeyUp(event) {
            const key = event.key || '';
            const keyCode = event.keyCode || '';
            if ((key && key === 'Enter') || (keyCode && keyCode === 13)) {
              this.reassignMaxValue(event.target);
              this.handleChange(event.target.value);
            }
          },
          handleChange(value) {
            this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(value);
            this.oldValue = null;
          },
          reassignMaxValue(target) {
            if (+target.value > this.$parent.internalPageCount) {
              target.value = this.$parent.internalPageCount;
            }
            if (this.$parent.internalPageCount === 0) {
              target.value = 1;
            }
          }
        },

        render(h) {
          return (
            <span class="s-pagination__jump">
              { this.t('s.pagination.goto') }
              <s-input
              class="s-pagination__editor is-in-pagination"
              type="number"
              min={ 1 }
              max={ this.$parent.internalPageCount }
              value={ this.$parent.internalCurrentPage }
              domProps-value={ this.$parent.internalCurrentPage }
              on-change={ this.handleChange }
              on-focus={ this.handleFocus }
              onBlur={ this.handleBlur }
              nativeOnKeyup={ this.handleKeyUp }/>
              { this.t('s.pagination.pageClassifier') }
            </span>
          );
        }
      },

      Total: {
        mixins: [Locale],

        render(h) {
            if (this.$parent.totalText) {
                return (
                    typeof this.$parent.total === 'number'
                        ? <span class="s-pagination__total">{ this.$parent.totalText.replace(/{total}/, this.$parent.total) } {this.$parent.layout.indexOf('sizes') !== -1 ? '，' : ''}</span>
                        : ''
                );
            }
            else
                return (
            typeof this.$parent.total === 'number'
            ? <span class="s-pagination__total">{ this.t('el.pagination.total', { total: this.$parent.total }) } {this.$parent.layout.indexOf('sizes') !== -1 ? '，' : ''}</span>
            : ''
          );
        }
      },

      sPager
    },

    methods: {
      handleCurrentChange(val) {
        this.internalCurrentPage = this.getValidCurrentPage(val);
      },

      prev() {
        const newVal = this.internalCurrentPage - 1;
        this.internalCurrentPage = this.getValidCurrentPage(newVal);
      },

      next() {
        const newVal = this.internalCurrentPage + 1;
        this.internalCurrentPage = this.getValidCurrentPage(newVal);
      },

      getValidCurrentPage(value) {
        value = parseInt(value, 10);

        const havePageCount = typeof this.internalPageCount === 'number';

        let resetValue;
        if (!havePageCount) {
          if (isNaN(value) || value < 1) resetValue = 1;
        } else {
          if (value < 1) {
            resetValue = 1;
          } else if (value > this.internalPageCount) {
            resetValue = this.internalPageCount;
          }
        }

        if (resetValue === undefined && isNaN(value)) {
          resetValue = 1;
        } else if (resetValue === 0) {
          resetValue = 1;
        }

        if (this.infinite && this.hasNext && (isNaN(value) || value < 1)) {
          return 1;
        }
        return (resetValue === undefined || (this.infinite && this.hasNext)) ? value : resetValue;
      }
    },

    computed: {
      internalPageCount() {
        if (typeof this.total === 'number') {
          return Math.ceil(this.total / this.internalPageSize);
        } else if (typeof this.pageCount === 'number') {
          return this.pageCount;
        }
        return null;
      },
      showAnotherPage() {
        if (this.infinite) {
          if (this.total % this.internalPageSize !== 0) {
            return false;
          }
        }
        return true;
      }
    },

    watch: {
      currentPage: {
        immediate: true,
        handler(val) {
          this.internalCurrentPage = val;
        }
      },

      pageSize: {
        immediate: true,
        handler(val) {
          this.internalPageSize = val;
        }
      },

      internalCurrentPage(newVal, oldVal) {
        newVal = parseInt(newVal, 10);

        /* istanbul ignore if */
        if (isNaN(newVal)) {
          newVal = oldVal || 1;
        } else {
          newVal = this.getValidCurrentPage(newVal);
        }

        if (newVal !== undefined) {
          this.$nextTick(() => {
            this.internalCurrentPage = newVal;
            if (oldVal !== newVal) {
              this.$emit('update:currentPage', newVal);
              this.$emit('current-change', this.internalCurrentPage);
            }
          });
        } else {
          this.$emit('update:currentPage', newVal);
          this.$emit('current-change', this.internalCurrentPage);
        }
      },

      internalPageCount(newVal) {
        /* istanbul ignore if */
        if (!this.infinite) {
          const oldPage = this.internalCurrentPage;
          if (newVal > 0 && oldPage === 0) {
            this.internalCurrentPage = 1;
          } else if (oldPage > newVal) {
            this.internalCurrentPage = newVal === 0 ? 1 : newVal;
          }
        }
      }
    }
  };
</script>
