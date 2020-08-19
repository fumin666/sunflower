<template>
  <div class="s-badge">
    <slot></slot>
    <transition name="s-zoom-in-center">
      <sup
        v-show="!hidden && ( content || isDot )"
        v-text="content"
        class="s-badge-content"
        :class="{'is-fixed': $slots.default, 'is-dot': isDot}">
      </sup>
    </transition>
  </div>
</template>
<script>
  export default {
    name: "SBadge",

    props: {
      value: {},
      max: Number,
      isDot: Boolean,
      hidden: Boolean
    },

    computed: {
      content() {
        if (this.isDot) return;
        const value = this.value;
        const max = this.max;
        if (typeof value === "number" && typeof max === "number") {
          return max < value ? `${max}+` : value;
        }
        return value;
      }
    }
  }
</script>