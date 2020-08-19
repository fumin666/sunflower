<template>
  <ul class="s-select-group-wrap" v-show="visible">
    <li class="s-select-group-title">{{ label }}</li>
    <li>
      <ul class="s-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script>
  import Emitter from '../extra/mixins/emitter';
  export default {
    mixins: [Emitter],
    name: 'SOptionGroup',
    componentName: 'SOptionGroup',
    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        visible: true
      };
    },
    watch: {
      disabled(val) {
        this.broadcast('SOption', 'handleGroupDisabled', val);
      }
    },
    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },
    created() {
      this.$on('queryChange', this.queryChange);
    },
    mounted() {
      if (this.disabled) {
        this.broadcast('SOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>

