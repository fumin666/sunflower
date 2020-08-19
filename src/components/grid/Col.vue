<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  const prefixName = 's-col';
  export default {
    name: 's-col',
    props: {
      span: [Number, String],
      order: [Number, String],
      offset: [Number, String],
      push: [Number, String],
      pull: [Number, String],
      className: String,
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object]
    },
    computed: {
      gutter() {
        return this.$parent.gutter;
      },
      classes () {
        let classList = [
          `${prefixName}`,
          {
            [`${prefixName}-${this.span}`]: this.span,
            [`${prefixName}-order-${this.order}`]: this.order,
            [`${prefixName}-offset-${this.offset}`]: this.offset,
            [`${prefixName}-push-${this.push}`]: this.push,
            [`${prefixName}-pull-${this.pull}`]: this.pull,
            [`${this.className}`]: !!this.className
          }
        ];
        ['xs', 'sm', 'md', 'lg'].forEach(size => {
          if (typeof this[size] === 'number') {
            classList.push(`${prefixName}-span-${size}-${this[size]}`);
          } else if (typeof this[size] === 'object') {
            let props = this[size];
            Object.keys(props).forEach(prop => {
              classList.push(
                prop !== 'span'
                  ? `${prefixName}-${size}-${prop}-${props[prop]}`
                  : `${prefixName}-span-${size}-${props[prop]}`
              );
            });
          }
        });
        return classList;
      },
      styles () {
        let style = {};
        if (this.gutter !== 0) {
          style = {
            paddingLeft: this.gutter / 2 + 'px',
            paddingRight: this.gutter / 2 + 'px'
          };
        }
        return style;
      }
    }
  };
</script>

