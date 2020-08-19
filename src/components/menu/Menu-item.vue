
<template>
  <li :class="classes" @click.stop="handleClick"><slot></slot></li>
</template>

<script>
  import Emitter from '../extra/mixins/emitter';

  const prefixName = 's-menu';

  export default {
    name: 's-menu-item',
    componentName: 'SMenuItem',
    mixins: [ Emitter ],
    props: {
      name: {
        type: [String, Number]
        // required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        active: false
      };
    },
    computed: {
      classes () {
        return [
          `${prefixName}-item`,
          {
            [`${prefixName}-item-active`]: this.active,
            [`${prefixName}-item-selected`]: this.active,
            [`${prefixName}-item-disabled`]: this.disabled
          }
        ];
      }
    },
    methods: {
      handleClick () {
        if (this.disabled) return;
        let parent = this.$parent;
        let name = parent.$options.name;
        while (parent && (!name || name !== 's-submenu')) {
          parent = parent.$parent;
          if (parent) name = parent.$options.name;
        }
        if (parent) {
          this.dispatch('SSubmenu', 'on-menu-item-select', this.name);
        } else {
          this.dispatch('SMenu', 'on-menu-item-select', this.name);
        }
      }
    },
    mounted () {
      this.$on('on-update-active-name', (name) => {
        if (this.name === name) {
          this.active = true;
          this.dispatch('SSubmenu', 'on-update-active-name', true);
        } else {
          this.active = false;
        }
      });
    }
  }
</script>

