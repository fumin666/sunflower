<template>
    <label class="s-radio"
           :class="[
              border && radioSize ? 'el-radio--' + radioSize : '',
              { 'is-disabled': isDisabled },
              { 'is-focus': focus },
              { 'is-bordered': border },
              { 'is-checked': model === label }
           ]"
           role="radio"
           :aria-checked="model === label"
           :aria-disabled="isDisabled"
           :tabindex="tabIndex"
           @keydown.space.stop.prevent="model = label">
    <span class="s-radio__input"
          :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="s-radio__inner"></span>
      <input class="s-radio__original"
             type="radio"
             v-model="model"
             :value="label"
             :name="name"
             @focus="focus = true"
             @blur="focus = false"
             @change="handleChange"
             :disabled="isDisabled"
      >
    </span>
        <span class="s-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
    </label>
</template>

<script>
  import Emitter from '../extra/mixins/emitter';

  export default {
    name: 'SRadio',
    componentName: 'SRadio',
    mixins: [Emitter],
    inject: {
      elFormItem: {
        default: ''
      }
    },
    data() {
      return {
        focus: false
      }
    },
    props: {
      value: {},
      label: {},
      name: String,
      disabled: Boolean,
      border: Boolean,
      size: String
    },
    computed: {
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'SRadioGroup') {
            parent = parent.$parent;
          } else {
            this._radioGroup = parent;
            return true;
          }
        }
        return false;
      },
      model: {
        get() {
          return this.isGroup ? this._radioGroup.value : this.value;
        },
        set(val) {
          if (this.isGroup) {
            this.dispatch('SRadioGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
        }
      },
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      radioSize() {
        const temRadioSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
        return this.isGroup
          ? this._radioGroup.radioGroupSize || temRadioSize
          : temRadioSize;
      },
      isDisabled() {
        return this.isGroup
          ? this._radioGroup.disabled || this.disabled
          : this.disabled;
      },
      tabIndex() {
        return !this.isDisabled ? (this.isGroup ? (this.model === this.label ? 0 : -1) : 0) : -1;
      }
    },
    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.$emit('change', this.model);
          this.isGroup && this.dispatch('SRadioGroup', 'handleChange', this.model);
        });
      }
    }
  }
</script>
