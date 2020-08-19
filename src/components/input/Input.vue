<template>
  <div :class="[
    type === 'textarea' ? 's-textarea' : 's-input',
    inputSize ? 's-input-' + inputSize : '',
    {
      'is-disabled': disabled,
      's-input-group': $slots.prepend || $slots.append,
      's-input-group-append': $slots.append,
      's-input-group-prepend': $slots.prepend,
      's-input-prefix': $slots.prefix || prefixIcon,
      's-input-suffix': $slots.suffix || icon
    }
  ]">
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="s-input-group_prepend" v-if="$slots.prepend" tabindex="0">
        <slot name="prepend"></slot>
      </div>
      <input
        v-if="type !== 'textarea'"
        class="s-input-inner"
        v-bind="$props"
        :autocomplete="autoComplete"
        :value="currentValue"
        :name="name"
        ref="input"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        :aria-label="label"
      >
      <!-- 前置内容 -->
      <span
        class="s-input_prefix"
        v-if="$slots.prefix || prefixIcon"
        :style="prefixOffset">
        <slot name="prefix"></slot>
        <i
          v-if="prefixIcon"
          :class="['iconfont', prefixIcon?`icon-${prefixIcon}`:'']"
          class="s-input-icon">
        </i>
      </span>
      <!-- 后置内容 -->
      <span
        class="s-input_suffix"
        v-if="$slots.suffix || icon || validateState && needStatusIcon"
        :style="suffixOffset"
        @click="handleIconClick">
        <span class="s-input_suffix-inner">
          <slot name="suffix"></slot>
          <i
            v-if="icon"
            class="s-input-icon"
            :class="['iconfont', icon?`icon-${icon}`:'']">
          </i>
        </span>
        <i class="s-input-icon"
          v-if="validateState"
          :class="['s-input_validateIcon', validateIcon]">
        </i>
      </span>
      <!-- 后置元素 -->
      <div class="s-input-group_append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea
      v-else
      class="s-textarea-inner"
      :value="currentValue"
      :name="name"
      @input="handleInput"
      ref="textarea"
      v-bind="$props"
      :style="textareaStyle"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :aria-label="label"
    >
    </textarea>
  </div>
</template>
<script>
  import emitter from '../extra/mixins/emitter';
  import Focus from '../extra/mixins/focus';
  import Migrating from '../extra/mixins/migrating';
  import calcTextareaHeight from './calcTextareaHeight';
  import merge from '../extra/utils/merge';

  export default {
    name: 's-input',

    componentName: 'SInput',

    mixins: [emitter, Focus('input'), Migrating],

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    data() {
      return {
        currentValue: this.value,
        textareaCalcStyle: {},
        prefixOffset: null,
        suffixOffset: null
      };
    },

    props: {
      value: [String, Number],
      placeholder: String,
      size: String,
      resize: String,
      name: String,
      form: String,
      id: String,
      maxlength: Number,
      minlength: Number,
      readonly: Boolean,
      autofocus: Boolean,
      disabled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      rows: {
        type: Number,
        default: 2
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      max: {},
      min: {},
      step: {},
      validateEvent: {
        type: Boolean,
        default: true
      },
      icon: String,
      prefixIcon: String,
      label: String,
      onIconClick: Function
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      validateState() {
        return this.elFormItem ? this.elFormItem.validateState : '';
      },
      needStatusIcon() {
        return this.elForm ? this.elForm.statusIcon : false;
      },
      validateIcon() {
        return ''
        /*return {
          validating: 'icon-loading',
          success: 'icon-correct',
          error: 'icon-error'
        }[this.validateState];*/
      },
      textareaStyle() {
        return merge({}, this.textareaCalcStyle, { resize: this.resize });
      },
      inputSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
      isGroup() {
        return this.$slots.prepend || this.$slots.append;
      }
    },

    watch: {
      'value'(val, oldValue) {
        this.setCurrentValue(val);
      }
    },

    methods: {
      getMigratingConfig() {
        return {
          props: {
            'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
            'on-icon-click': 'on-icon-click is removed.'
          },
          events: {
            'click': 'click is removed.'
          }
        };
      },
      handleBlur(event) {
        this.$emit('blur', event);
        if (this.validateEvent) {
          this.dispatch('SFormItem', 'el.form.blur', [this.currentValue]);
        }
      },
      inputSelect() {
        this.$refs.input.select();
      },
      resizeTextarea() {
        if (this.$isServer) return;
        var { autosize, type } = this;
        if (type !== 'textarea') return;
        if (!autosize) {
          this.textareaCalcStyle = {
            minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
          };
          return;
        }
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;

        this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      },
      handleFocus(event) {
        this.$emit('focus', event);
      },
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
      },
      handleChange(event) {
        this.$emit('change', event.target.value);
      },
      handleIconClick(event) {
        if (this.onIconClick) {
          this.onIconClick(event);
        }
        this.$emit('click', event);
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.$nextTick(_ => {
          this.resizeTextarea();
        });
        this.currentValue = value;
        if (this.validateEvent) {
          this.dispatch('SFormItem', 'el.form.change', [value]);
        }
      },
      calcIconOffset(place) {
        const pendantMap = {
          'suf': 'append',
          'pre': 'prepend'
        };

        const pendant = pendantMap[place];

        if (this.$slots[pendant]) {
          return { transform: `translateX(${place === 'suf' ? '-' : ''}${this.$el.querySelector(`.s-input-group_${pendant}`).offsetWidth}px)` };
        }
      }
    },

    created() {
      this.$on('inputSelect', this.inputSelect);
    },

    mounted() {
      this.resizeTextarea();
      if (this.isGroup) {
        this.prefixOffset = this.calcIconOffset('pre');
        this.suffixOffset = this.calcIconOffset('suf');
      }
    }
  };
</script>
