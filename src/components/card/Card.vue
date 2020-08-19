<template>
  <div class="s-card">
    <div class="s-card-header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="s-card-body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SCard',
    props: ['header', 'bodyStyle']
  }
</script>