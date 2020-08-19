<template>
  <div onselectstart="return false" class="s-collapse-item" :class="[{'is-active': isActive}]">
    <div class="s-collapse-item-header" @click="handleHeaderClick">
      <i class="iconfont icon-right"></i>
      <slot name="title">{{title}}</slot>
    </div>
    <collapse-transition>
      <div class="s-collapse-item-wrap" v-show="isActive">
        <div class="s-collapse-item-content">
          <slot></slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>
<script>
  import Emitter from '../extra/mixins/emitter';
  import CollapseTransition from '../extra/transitions/collapse-transition';
  export default {
    name: 's-collapse-item',
    componentName: 'SCollapseItem',
    mixins: [Emitter],
    components: {
      'collapse-transition': CollapseTransition
    },
    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0
      };
    },
    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      }
    },
    computed: {
      isActive() {
        return this.$parent.activeNames.indexOf(this.name) > -1;
      }
    },
    watch: {
      'isActive'(value) {
      }
    },
    methods: {
      handleHeaderClick() {
        this.dispatch('SCollapse', 'item-click', this);
      }
    },
    mounted() {
    }
  };
</script>