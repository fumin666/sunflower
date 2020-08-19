<template>
      <div :class="classes" :style="styles">
        <slot></slot>
      </div>
</template>

<script>
  import { oneOf } from '../extra/utils/assist';

  const prefixName = 's-row';
  export default{
    name: 's-row',
    props: {
        // 是否开启flex模式
      type: {
           validator (value) {
              return oneOf(value, ['flex'])
           }
        },
        // flex 布局下的垂直对齐方式
      align: {
        validator (value) {
           return oneOf(value, ['top', 'middle', 'bottom'])
        }
      },
      justify: {
        validator (value) {
           return oneOf(value, ['start', 'end', 'center', 'around', 'between'])
        }
      },
      gutter: {
        type: Number,
        default: 0
      },
      className: String
    },
    computed: {
      classes () {
        return [
          {
            [`${prefixName}`]: !this.type,
            [`${prefixName}-${this.type}`]: !!this.type,
            [`${prefixName}-${this.type}-${this.align}`]: !!this.align,
            [`${prefixName}-${this.type}-${this.justify}`]: !!this.justify,
            [`${this.className}`]: !!this.className
          }
        ]
      },
      styles () {
        let style = {};
        if (this.gutter !== 0) {
          style = {
            marginLeft: this.gutter / -2 + 'px',
            marginRight: this.gutter / -2 + 'px'
          }
        }
        return style
      }
    },
    methods: {
      updateGutter (val) {
        this.$children.forEach((child) => {
          if (val !== 0) {
          child.gutter = val;
        }
      });
      }
    },
    watch: {
      gutter (val) {
        this.updateGutter(val);
        }
    },
    ready () {
      this.updateGutter(this.gutter);
    }
  }

</script>
