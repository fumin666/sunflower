<template>
  <div :class="`s-grid s-grid-${direction}`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SGrid',
    props: {
      direction: {
        type: String,
        default: 'row',
        validator: function (value) {
          return [
            'row',
            'column'
          ].indexOf(value) !== -1;
        }
      },
      xAlign: {
        type: String,
        default: ''
      }
    }
  }
</script>