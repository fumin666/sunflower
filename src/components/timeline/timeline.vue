<template>
    <ul :class="classes">
        <slot></slot>
    </ul>
</template>
<script>
  const prefixCls = 'ss-timeline';

  export default {
    name: 'sTimeline',
    props: {
      pending: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-pending`]: this.pending
          }
        ];
      }
    }
  };
</script>