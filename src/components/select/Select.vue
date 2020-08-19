<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-11 13:28:52
 * @LastEditTime: 2020-06-30 18:50:45
 * @LastEditors: mybells
 -->
<template>
    <div
            class="s-select"
            :class="[selectSize ? 's-select-' + selectSize : '']"
            v-clickoutside="handleClose">
        <div
                class="s-select-tags"
                v-if="multiple"
                @click.stop="toggleMenu"
                ref="tags"
                :style="{ 'max-width': inputWidth - 27 + 'px'}">
            <input
                    type="text"
                    style="width: 100%"
                    class="s-select-input"
                    :class="[selectSize ? `is-${ selectSize }` : '']"
                    :disabled="disabled"
                    @focus="handleFocus"
                    @blur="handleInputBlur"
                    @click.stop
                    @keyup="managePlaceholder"
                    @keydown="resetInputState"
                    @keydown.down.prevent="navigateOptions('next')"
                    @keydown.up.prevent="navigateOptions('prev')"
                    @keydown.enter.prevent="selectOption"
                    @keydown.esc.stop.prevent="visible = false"
                    @keydown.delete="deletePrevTag"
                    v-model="query"
                    @input="e => handleQueryChange(e.target.value)"
                    :debounce="remote ? 300 : 0"
                    v-if="filterable"
                    v-show="visible"
                    ref="input">
            <span class="s-select-multiple-text"
                  v-if="collapseTags"
                  :title="multipleText">{{ multipleText }}
          </span>
            <transition-group @after-leave="resetInputHeight" v-if="!collapseTags">
                <s-tag
                        v-for="item in selected"
                        :key="getValueKey(item)"
                        :closable="!disabled"
                        size="small"
                        :hit="item.hitState"
                        @close="deleteTag($event, item)"
                        class="multiple-tag"
                        disable-transitions>
              <span class="s-select-tags-text ellipsis"
                    :style="{ width: (item.currentLabel&&item.currentLabel.length * 15) + 'px', 'max-width': inputWidth - 80 + 'px' }"
                    :title="item.currentLabel">{{ item.currentLabel }}</span>
                </s-tag>
            </transition-group>
        </div>
        <s-input
                ref="reference"
                v-model="selectedLabel"
                type="text"
                :placeholder="currentPlaceholder"
                :name="name"
                :id="id"
                :size="selectSize"
                :disabled="disabled"
                :readonly="!filterable || multiple"
                :validate-event="false"
                :class="{ 'is-focus': visible }"
                @focus="handleFocus"
                @blur="handleBlur"
                @mousedown.native="handleMouseDown"
                @input="debouncedOnInputChange"
                @keyup.native="debouncedOnInputChange"
                @keydown.native.down.prevent="navigateOptions('next')"
                @keydown.native.up.prevent="navigateOptions('prev')"
                @keydown.native.enter.prevent="selectOption"
                @keydown.native.esc.stop.prevent="visible = false"
                @keydown.native.tab="visible = false"
                @paste.native="debouncedOnInputChange"
                @mouseenter.native="inputHovering = true"
                @mouseleave.native="inputHovering = false">
            <i slot="suffix" v-if='flag'
               :class="['s-select-caret', 's-input-icon', 'iconfont', 'icon-' + iconClass]"
               @click="handleIconClick"
            ></i>
            <i slot="suffix" v-if='!flag' class="s-input-icon icon iconfont icon-error" style="cursor: pointer;"
               @click="delError"></i>
        </s-input>
        <transition
                name="s-zoom-in-top"
                @before-enter="handleMenuEnter"
                @after-leave="doDestroy">
            <s-select-menu
                    ref="popper"
                    :append-to-table="appendToTable"
                    v-show="visible && emptyText !== false">
                <s-scrollbar
                        tag="ul"
                        wrap-class="s-select-dropdown-wrap"
                        view-class="s-select-dropdown-list"
                        :class="{ 'is-empty': !allowCreate && query && filteredOptionsCount === 0 }"
                        v-show="options.length > 0 && !loading">
                    <s-option
                            :value="query"
                            created
                            v-if="showNewOption">
                    </s-option>
                    <slot></slot>
                </s-scrollbar>
                <p class="s-select-dropdown-empty"
                   v-if="emptyText && (allowCreate && options.length === 0 || !allowCreate)">{{ emptyText }}</p>
            </s-select-menu>
        </transition>
    </div>
</template>

<script type="text/babel">
  import Emitter from '../extra/mixins/emitter';
  import Focus from '../extra/mixins/focus';
  import Locale from '../extra/mixins/locale';
  import SInput from '../input';
  import SSelectMenu from './Select-dropdown';
  import SOption from './Option';
  import STag from '../tag';
  import SScrollbar from '../scrollbar';
  import debounce from 'throttle-debounce/debounce';
  import Clickoutside from '../extra/utils/clickoutside';
  import {addClass, removeClass, hasClass} from '../extra/utils/dom';
  import {addResizeListener, removeResizeListener} from '../extra/utils/resize-event';
  import {t} from '../extra/locale';
  import scrollIntoView from '../extra/utils/scroll-into-view';
  import {getValueByPath} from '../extra/utils/util';
  import {valueEquals} from '../extra/utils/util';
  import NavigationMixin from './navigation-mixin';
  import de from "../extra/locale/lang/de";

  const sizeMap = {
    'large': 36,
    'small': 32,
    'mini': 28
  };
  export default {
    mixins: [Emitter, Locale, Focus('reference'), NavigationMixin],
    name: 'SSelect',
    componentName: 'SSelect',
    inject: {
      elFormItem: {
        default: ''
      }
    },
    provide() {
      return {
        'select': this
      };
    },
    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      iconClass() {
        let criteria = this.clearable &&
          !this.disabled &&
          this.inputHovering &&
          !this.multiple &&
          this.value !== undefined &&
          this.value !== '';
        return criteria ? 'error is-show-close' : (this.remote && this.filterable ? '' : 'bottom');
      },
      debounce() {
        return this.remote ? 300 : 0;
      },
      emptyText() {
        if (this.loading) {
          return this.loadingText || this.t('el.select.loading');
        } else {
          if (this.remote && this.query === '' && this.options.length === 0) return false;
          if (this.filterable && this.query && this.options.length > 0 && this.filteredOptionsCount === 0) {
            return this.noMatchText || this.t('el.select.noMatch');
          }
          if (this.options.length === 0) {
            return this.noDataText || this.t('el.select.noData');
          }
        }
        return null;
      },
      showNewOption() {
        let hasExistingOption = this.options.filter(option => !option.created)
          .some(option => option.currentLabel === this.query);
        return this.filterable && this.allowCreate && this.query !== '' && !hasExistingOption;
      },

      selectSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
      multipleText() {
        const selected = this.selected;
        if (!selected || !selected.length) return '';
        const length = selected.length;
        const countText = length > 1 ? `(+${selected.length - 1})` : '';
        if (length > 0) {
          this.flag = false
        } else {
          this.flag = true
        }
        return `${selected[0].currentLabel} ${countText}`;
      }
    },
    components: {
      SInput,
      SSelectMenu,
      SOption,
      STag,
      SScrollbar
    },
    directives: {Clickoutside},
    props: {
      autoOpen:{
        type:Boolean,
        default:false,
      },
      name: String,
      id: String,
      value: {
        required: true
      },
      size: String,
      disabled: Boolean,
      clearable: Boolean,
      filterable: Boolean,
      allowCreate: Boolean,
      loading: Boolean,
      popperClass: String,
      remote: Boolean,
      loadingText: String,
      noMatchText: String,
      noDataText: String,
      remoteMethod: Function,
      filterMethod: Function,
      multiple: Boolean,
      multipleLimit: {
        type: Number,
        default: 0
      },
      placeholder: {
        type: String,
        default() {
          return t('el.select.placeholder');
        }
      },
      defaultFirstOption: Boolean,
      reserveKeyword: Boolean,
      valueKey: {
        type: String,
        default: 'value'
      },
      collapseTags: Boolean,
      popperAppendToBody: {
        type: Boolean,
        default: true
      },
      appendToTable: {
        type: String,
        default: ''
      },
      anonLabel: ''
    },
    data() {
      return {
        options: [],
        cachedOptions: [],
        createdLabel: null,
        createdSelected: false,
        selected: this.multiple ? [] : {},
        inputLength: 20,
        inputWidth: 0,
        cachedPlaceHolder: '',
        optionsCount: 0,
        filteredOptionsCount: 0,
        visible: false,
        selectedLabel: '',
        hoverIndex: -1,
        query: '',
        previousQuery: '',
        inputHovering: false,
        currentPlaceholder: '',
        flag: true,
        delvalue: []
      };
    },
    watch: {
      disabled() {
        this.$nextTick(() => {
          this.resetInputHeight();
        });
      },

      placeholder(val) {
        this.cachedPlaceHolder = this.currentPlaceholder = val;
      },
      value(val) {
        if (this.multiple) {
          this.resetInputHeight();
          if (val.length > 0 || (this.$refs.input && this.query !== '')) {
            this.currentPlaceholder = '';
          } else {
            this.currentPlaceholder = this.cachedPlaceHolder;
          }
          if (this.filterable && !this.reserveKeyword) {
            this.query = '';
            this.handleQueryChange(this.query);
          }
        }
        this.setSelected();
        if (this.filterable && !this.multiple) {
          this.inputLength = 20;
        }
        /*this.$emit('change', val);
        this.dispatch('SFormItem', 'el.form.change', val);*/
      },

      visible(val) {
        if (!val) {
          this.$refs.reference.$el.querySelector('input').blur();
          this.handleIconHide();
          this.broadcast('SSelectDropdown', 'destroyPopper');
          if (this.$refs.input) {
            this.$refs.input.blur();
          }
          this.query = '';
          this.selectedLabel = '';
          this.inputLength = 20;
          this.resetHoverIndex();
          this.$nextTick(() => {
            if (this.$refs.input &&
              this.$refs.input.value === '' &&
              this.selected.length === 0) {
              this.currentPlaceholder = this.cachedPlaceHolder;
            }
          });
          if (!this.multiple) {
            if (this.selected) {
              if (this.filterable && this.allowCreate &&
                this.createdSelected && this.createdOption) {
                this.selectedLabel = this.createdLabel;
              } else {
                this.selectedLabel = this.selected.currentLabel;
              }
              if (this.filterable) this.query = this.selectedLabel;
            }
          }
        } else {
          this.handleIconShow();
          this.broadcast('SSelectDropdown', 'updatePopper');
          if (this.filterable) {
            this.query = this.remote ? '' : this.selectedLabel;
            this.handleQueryChange(this.query);
            if (this.multiple) {
              this.$refs.input.focus();
            } else {
              if (!this.remote) {
                this.broadcast('SOption', 'queryChange', '');
                this.broadcast('SOptionGroup', 'queryChange');
              }
              this.broadcast('SInput', 'inputSelect');
            }
          }
        }
        this.resetInputHeight();
        this.$emit('visible-change', val);
      },

      options() {
        if (this.$isServer) return;
        if (this.multiple) {
          this.resetInputHeight();
        }
        let inputs = this.$el.querySelectorAll('input');
        if ([].indexOf.call(inputs, document.activeElement) === -1) {
          this.setSelected();
        }
        if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
          this.checkDefaultFirstOption();
        }
      }
    },

    methods: {
      handleQueryChange(val) {
        if (this.previousQuery === val) return;
        this.previousQuery = val;
        this.$nextTick(() => {
          if (this.visible) this.broadcast('SSelectDropdown', 'updatePopper');
        });
        this.hoverIndex = -1;
        if (this.multiple && this.filterable) {
          this.inputLength = this.$refs.input.value.length * 15 + 20;
          this.managePlaceholder();
          this.resetInputHeight();
        }
        if (this.remote && typeof this.remoteMethod === 'function') {
          this.hoverIndex = -1;
          this.remoteMethod(val);
        } else if (typeof this.filterMethod === 'function') {
          this.filterMethod(val);
          this.broadcast('SOptionGroup', 'queryChange');
        } else {
          this.filteredOptionsCount = this.optionsCount;
          this.broadcast('SOption', 'queryChange', val);
          this.broadcast('SOptionGroup', 'queryChange');
        }
        if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
          this.checkDefaultFirstOption();
        }
      },
      delError() {
        this.$emit('input', []);
        this.emitChange([]);
        this.flag = true
        this.$emit('clear');
      },
      handleIconHide() {
        let icon = this.$el.querySelector('.s-input-icon');
        if (icon) {
          removeClass(icon, 'is-reverse');
        }
      },
      handleIconShow() {
        let icon = this.$el.querySelector('.s-input-icon');
        if (icon && !hasClass(icon, 'icon-error')) {
          addClass(icon, 'is-reverse');
        }
      },

      scrollToOption(option) {
        const target = Array.isArray(option) && option[0] ? option[0].$el : option.$el;
        if (this.$refs.popper && target) {
          const menu = this.$refs.popper.$el.querySelector('.s-select-dropdown-wrap');
          scrollIntoView(menu, target);
        }
      },

      handleMenuEnter() {
        this.$nextTick(() => this.scrollToOption(this.selected));
      },

      emitChange(val) {
        if (!valueEquals(this.value, val)) {
          this.$emit('change', val);
          this.dispatch('SFormItem', 'el.form.change', val);
        }
      },

      getOption(value) {
        let option;
        const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
        for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
          const cachedOption = this.cachedOptions[i];
          const isEqual = isObject
            ? getValueByPath(cachedOption.value, this.valueKey) === getValueByPath(value, this.valueKey)
            : cachedOption.value === value;
          if (isEqual) {
            option = cachedOption;
            break;
          }
        }
        if (option) return option;
        const label = !isObject
          ? value ? this.anonLabel : '' : '';
        let newOption = {
          value: value,
          currentLabel: label
        };
        if (this.multiple) {
          newOption.hitState = false;
        }
        return newOption;
      },
      setSelected() {
        if (!this.multiple) {
          let option = this.getOption(this.value);
          if (option.created) {
            this.createdLabel = option.currentLabel;
            this.createdSelected = true;
          } else {
            this.createdSelected = false;
          }
          this.selectedLabel = option.currentLabel;
          this.selected = option;
          if (this.filterable) this.query = this.selectedLabel;
          return;
        }
        let result = [];
        if (Array.isArray(this.value)) {
          this.value.forEach(value => {
            result.push(this.getOption(value));
          });
        }
        this.selected = result;
        this.$nextTick(() => {
          this.resetInputHeight();
        });
      },


      handleFocus(event) {
        this.visible = true;
        this.$emit('focus', event);
      },
      handleInputBlur() {
      },

      handleBlur(event) {
        this.selectMultipleText = true;
        this.$emit('blur', event);
      },

      handleIconClick(event) {
        if (this.iconClass.indexOf('error') > -1) {
          this.deleteSelected(event);
        } else {
          this.toggleMenu();
        }
      },
      handleMouseDown(event) {
        if (event.target.tagName !== 'INPUT') return;
        if (this.visible) {
          this.handleClose();
          event.preventDefault();
        }
      },
      doDestroy() {
        this.$refs.popper && this.$refs.popper.doDestroy();
      },
      handleClose() {
        this.visible = false;
      },
      toggleLastOptionHitState(hit) {
        if (!Array.isArray(this.selected)) return;
        const option = this.selected[this.selected.length - 1];
        if (!option) return;
        if (hit === true || hit === false) {
          option.hitState = hit;
          return hit;
        }
        option.hitState = !option.hitState;
        return option.hitState;
      },
      deletePrevTag(e) {
        if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
          const value = this.value.slice();
          value.pop();
          this.$emit('input', value);
          this.emitChange(value);
        }
      },
      managePlaceholder() {
        if (this.currentPlaceholder !== '') {
          this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
        }
      },
      resetInputState(e) {
        if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
        this.inputLength = this.$refs.input.value.length * 15 + 20;
        this.resetInputHeight();
      },
      resetInputHeight() {
        if (this.collapseTags) return;
        this.$nextTick(() => {
          if (!this.$refs.reference) return;
          let inputChildNodes = this.$refs.reference.$el.childNodes;
          let input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0];
          const tags = this.$refs.tags;
          const sizeInMap = sizeMap[this.selectSize] || 30;
          input.style.height = this.selected.length === 0
            ? sizeInMap + 'px'
            : Math.max(
            tags ? (tags.clientHeight + (tags.clientHeight > sizeInMap ? 8 : 0)) : 0,
            sizeInMap
          ) + 'px';
          if (this.visible && this.emptyText !== false) {
            this.broadcast('SSelectDropdown', 'updatePopper');
          }
        });
      },
      resetHoverIndex() {
        setTimeout(() => {
          if (!this.multiple) {
            this.hoverIndex = this.options.indexOf(this.selected);
          } else {
            if (this.selected.length > 0) {
              this.hoverIndex = Math.min.apply(null, this.selected.map(item => this.options.indexOf(item)));
            } else {
              this.hoverIndex = -1;
            }
          }
        }, 300);
      },
      handleOptionSelect(option) {
        if (this.multiple) {
          const value = this.value.slice();
          const optionIndex = this.getValueIndex(value, option.value);
          if (optionIndex > -1) {
            value.splice(optionIndex, 1);
          } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
            value.push(option.value);
          }
          this.$emit('input', value);
          this.emitChange(value);
          if (option.created) {
            this.query = '';
            this.handleQueryChange('');
            this.inputLength = 20;
          }
          if (this.filterable) this.$refs.input.focus();
        } else {
          this.$emit('input', option.value);
          this.emitChange(option.value);
          this.visible = false;
        }
        this.$nextTick(() => this.scrollToOption(option));
      },

      getValueIndex(arr = [], value) {
        const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
        if (!isObject) {
          return arr.indexOf(value);
        } else {
          const valueKey = this.valueKey;
          let index = -1;
          arr.some((item, i) => {
            if (getValueByPath(item, valueKey) === getValueByPath(value, valueKey)) {
              index = i;
              return true;
            }
            return false;
          });
          return index;
        }
      },

      toggleMenu() {
        if (!this.disabled) {
          this.visible = !this.visible;
          if (this.visible) {
            (this.$refs.input || this.$refs.reference).focus();
          }
        }
      },

      selectOption() {
        if (this.options[this.hoverIndex]) {
          this.handleOptionSelect(this.options[this.hoverIndex]);
        }
      },
      deleteSelected(event) {
        event.stopPropagation();
        this.$emit('input', '');
        this.emitChange('');
        this.visible = false;
        this.$emit('clear');
      },
      deleteTag(event, tag) {
        let index = this.selected.indexOf(tag);
        if (index > -1 && !this.disabled) {
          const value = this.value.slice();
          value.splice(index, 1);
          this.$emit('input', value);
          this.emitChange(value);
          this.$emit('remove-tag', tag);
        }
        event.stopPropagation();
      },
      onInputChange() {
        if (this.filterable && this.query !== this.selectedLabel) {
          this.query = this.selectedLabel;
          this.handleQueryChange(this.query);
        }
      },

      onOptionDestroy(index) {
        if (index > -1) {
          this.optionsCount--;
          this.filteredOptionsCount--;
          this.options.splice(index, 1);
        }
      },
      resetInputWidth() {
        this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
      },
      handleResize() {
        this.resetInputWidth();
        if (this.multiple) this.resetInputHeight();
      },

      checkDefaultFirstOption() {
        this.hoverIndex = -1;
        for (let i = 0; i !== this.options.length; ++i) {
          const option = this.options[i];
          if (this.query) {
            // pick first options that passes the filter
            if (!option.disabled && !option.groupDisabled && option.visible) {
              this.hoverIndex = i;
              break;
            }
          } else {
            // pick currently selected option
            if (option.itemSelected) {
              this.hoverIndex = i;
              break;
            }
          }
        }
      },

      getValueKey(item) {
        if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
          return item.value;
        } else {
          return getValueByPath(item.value, this.valueKey);
        }
      }
    },
    created() {
      this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
      if (this.multiple && !Array.isArray(this.value)) {
        this.$emit('input', []);
      }
      if (!this.multiple && Array.isArray(this.value)) {
        this.$emit('input', '');
      }

      this.debouncedOnInputChange = debounce(this.debounce, () => {
        this.onInputChange();
      });
      this.$on('handleOptionClick', this.handleOptionSelect);
      this.$on('setSelected', this.setSelected);
    },
    mounted() {
      if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
        this.currentPlaceholder = '';
      }
      addResizeListener(this.$el, this.handleResize);
      if (this.remote && this.multiple) {
        this.resetInputHeight();
      }
      this.$nextTick(() => {
        if (this.$refs.reference && this.$refs.reference.$el) {
          this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
        }
      });
      this.setSelected();
      if(this.autoOpen){
        this.handleFocus();
      }
    },
    beforeDestroy() {
      if (this.$el && this.handleResize) removeResizeListener(this.$el, this.handleResize);
    }
  };
</script>

