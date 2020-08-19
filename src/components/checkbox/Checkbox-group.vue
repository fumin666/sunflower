<script>
  import Emitter from '../extra/mixins/emitter';
  export default {
    name: 'SCheckboxGroup',
    componentName: 'SCheckboxGroup',
    mixins: [Emitter],
    inject: {
      elFormItem: {
        default: ''
      }
    },
    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },
    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },
    watch: {
      value(value) {
        this.dispatch('SFormItem', 'el.form.change', [value]);
      }
    }
  };
</script>
<template>
  <div class="s-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>