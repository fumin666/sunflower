<template>
  <div
    class="s-steps"
    :class="['is-' + direction, center ? 'is-center' : '']">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SSteps',

    props: {
      space: {
        type: [Number, String]
      },
      current: Number,
      direction: {
        type: String,
        default: 'horizontal'
      },
      alignCenter: Boolean,
      center: Boolean,
      finishStatus: {
        type: String,
        default: 'success'
      },
      processStatus: {
        type: String,
        default: 'process'
      },
      type:{
        type: String,
        default: 'default'
      },
      stepWidth: {
        type: [String, Number],
        default: '85px'
      }
    },

    data() {
      return {
        steps: [],
        stepOffset: 0
      };
    },

    watch: {
      current(newVal, oldVal) {
        this.$emit('change', newVal, oldVal);
      },

      steps(steps) {
        steps.forEach((child, index) => {
          child.index = index;
        });
      }
    }
  };
</script>
