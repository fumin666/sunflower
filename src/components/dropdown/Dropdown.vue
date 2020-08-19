<template>
  <div
    :class="[prefixCls]"
    v-clickoutside="handleClose"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave">
    <div :class="[prefixCls + '-rel']" ref="reference" @click="handleClick">
      <div v-if="showDefaultTitle" class="s-dropdown-defaultTitle">
        <span class="s-dropdown-defaultTitle-text">批量操作</span>
        <span class="s-dropdown-defaultTitle-icon">
          <i class='iconfont icon-bottom'
            :class="{'s-dropdown-expand':currentVisible}"></i>
        </span>
      </div>
      <slot></slot>
    </div>
    <transition :name="transition">
      <Drop v-show="currentVisible" :placement="placement" ref="drop">
        <slot name="list"></slot>
      </Drop>
    </transition>
  </div>
</template>

<script>
  import Drop from './Menu-dropdown';
  import clickoutside from '../extra/directives/clickoutside';
  import { oneOf } from '../extra/utils/assist';
  const prefixName = 's-dropdown';
  export default {
    name: 'SDropdown',
    directives: { clickoutside },
    components: { Drop },
    props: {
      trigger: {
        validator (value) {
          return oneOf(value, ['click', 'hover', 'custom']);
        },
        default: 'hover'
      },
      placement: {
        validator (value) {
          return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
        },
        default: 'bottom'
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      transition () {
        return ['bottom-start', 'bottom', 'bottom-end'].indexOf(this.placement) > -1 ? 'slide-up' : 'fade';
      },
      showDefaultTitle () {
        return this.$slots.hasOwnProperty('default') ? false : true
      }
    },
    data () {
      return {
        prefixCls: prefixName,
        currentVisible: this.visible
      };
    },
    watch: {
      visible (val) {
        this.currentVisible = val;
      },
      currentVisible (val) {
        if (val) {
          this.$refs.drop.update();
        } else {
          this.$refs.drop.destroy();
        }
        this.$emit('on-visible-change', val);
      }
    },
    methods: {
      handleClick () {
        if (this.trigger === 'custom') return false;
        if (this.trigger !== 'click') {
          return false;
        }
        this.currentVisible = !this.currentVisible;
      },
      handleMouseenter () {
        if (this.trigger === 'custom') return false;
        if (this.trigger !== 'hover') {
          return false;
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.currentVisible = true;
        }, 250);
      },
      handleMouseleave () {
        if (this.trigger === 'custom') return false;
        if (this.trigger !== 'hover') {
          return false;
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.currentVisible = false;
        }, 150);
      },
      handleClose () {
        if (this.trigger === 'custom') return false;
        if (this.trigger !== 'click') {
          return false;
        }
        this.currentVisible = false;
      },
      hasParent () {
        const $parent = this.$parent.$parent.$parent;
        if ($parent && $parent.$options.name === 'sDropdown') {
          return $parent;
        } else {
          return false;
        }
      }
    },
    mounted () {
      this.$on('on-click', (key) => {
        const $parent = this.hasParent();
        if ($parent) $parent.$emit('on-click', key);
      });
      this.$on('on-hover-click', () => {
        const $parent = this.hasParent();
        if ($parent) {
          this.$nextTick(() => {
            if (this.trigger === 'custom') return false;
            this.currentVisible = false;
          });
          $parent.$emit('on-hover-click');
        } else {
          this.$nextTick(() => {
            if (this.trigger === 'custom') return false;
            this.currentVisible = false;
          });
        }
      });
      this.$on('on-haschild-click', () => {
        this.$nextTick(() => {
          if (this.trigger === 'custom') return false;
          this.currentVisible = true;
        });
        const $parent = this.hasParent();
        if ($parent) $parent.$emit('on-haschild-click');
      });
    }
  };
</script>
