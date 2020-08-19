<template>
  <transition :name="disableTransitions ? '' : 's-zoom-in-center'">
    <span
      class="s-tag"
      :class="[
        type ? 's-tag-' + type : '',
        tagSize && `s-tag-${tagSize}`,
        {'is-hit': hit},
        {'s-tag-padding':closable}
      ]"
      :style="{backgroundColor: color}">
      <slot></slot>
      <span
        class="icon-ctn"
        v-if="closable"
        @click="handleClose">
        <i class="iconfont icon-error-bold s-tag-close s-icon-close"></i>
      </span>
    </span>
  </transition>
</template>
<script>
  export default {
    name: 's-tag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String
    },
    methods: {
      handleClose(event) {
        this.$emit('close', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    }
  };

</script>

