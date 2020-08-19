
<template>
  <ul :class="classes" :style="styles"><slot></slot></ul>
</template>
<script>
  import { oneOf } from '../extra/utils/assist';
  import Emitter from '../extra/mixins/emitter';
  import de from "../extra/locale/lang/de";

  const prefixName = 's-menu';

  export default {
    name: 's-menu',
    componentName: 'SMenu',
    mixins: [Emitter],
    props: {
      mode: {
        validator (value) {
          return oneOf(value, ['horizontal', 'vertical']);
        },
        default: 'vertical'
      },
      theme: {
        validator (value) {
          return oneOf(value, ['light', 'dark', 'primary']);
        },
        default: 'light'
      },
      activeName: {
        type: [String, Number]
      },
      openNames: {
        type: Array,
        default () {
          return [];
        }
      },
      accordion: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '190px;'
      }
    },
    data () {
      return {
        currentActiveName: this.activeName
      };
    },
    computed: {
      classes () {
        let theme = this.theme;
        if (this.mode === 'vertical' && this.theme === 'primary') theme = 'light';
        return [
          `${prefixName}`,
          `${prefixName}-${theme}`,
          {
            [`${prefixName}-${this.mode}`]: this.mode
          }
        ];
      },
      styles () {
        let style = {};
        if (this.mode === 'vertical') style.width = this.width;
        return style;
      }
    },
    methods: {
      updateActiveName () {
        if (!this.currentActiveName) {
          this.currentActiveName = -1;
        }
        this.broadcast('s-submenu', 'on-update-active-name', false);
        this.broadcast('SMenuItem', 'on-update-active-name', this.currentActiveName);
      },
      updateOpenKeys (name) {
        const index = this.openNames.indexOf(name);
        if (index > -1) {
          this.openNames.splice(index, 1);
        } else {
          this.openNames.push(name);
        }
      },
      updateOpened () {
        console.log(this.$children);
        console.log(this.openNames);
        this.$children.forEach(item => {
          if (item.$options.name === 's-submenu') {
            if (this.openNames.indexOf(item.name) > -1) {
              item.opened = true;
            }
          }
        })
        ;
      }
    },
    mounted () {
      this.updateActiveName();
      this.updateOpenKeys();
      this.updateOpened();
      this.$on('on-menu-item-select', (name) => {
        this.currentActiveName = name;
        this.$emit('on-select', name);
      });
    },
    watch: {
      openNames () {
        this.$emit('on-open-change', this.openNames);
      },
      activeName (val) {
        this.currentActiveName = val;
      },
      currentActiveName () {
        this.updateActiveName();
      }
    }
  }
</script>

<style >

</style>
