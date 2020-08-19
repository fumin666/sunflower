<template>
  <div
    class="s-tab-pane"
    v-show="active"
    role="tabpanel"
    :aria-hidden="!active"
    :id="`pane-${paneName}`"
    :aria-labelledby="`tab-${paneName}`">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'STabPane',

    componentName: 'STabPane',

    props: {
      label: String,
      labelContent: Function,
      name: String,
      closable: Boolean,
      disabled: Boolean,
      vif: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        index: null
      };
    },

    watch: {
      label() {
        this.$parent.$forceUpdate();
      },
      vif(newVal) {
        if (newVal) this.$parent.addPanes(this);
        else this.$parent.removePanes(this);
      }
    },

    computed: {
      isClosable() {
        return this.closable || this.$parent.closable;
      },
      active() {
        // return this.$parent.currentName === (this.name || this.index);
        // 扩展：在设置或不设置<s-panel>的name属性时，均可使用index来设置当前panel是否为active状态
        return this.$parent.currentName === this.name || this.$parent.currentName === this.index;
      },
      paneName() {
        return this.name || this.index;
      }
    },

    mounted() {
      if (!this.vif)this.$parent.removePanes(this);
      else this.$parent.addPanes(this);
    },

    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      this.$parent.removePanes(this);
    }
  };
</script>