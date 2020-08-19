<template>
  <span class="s-breadcrumb-item">
    <span class="s-breadcrumb-item-inner" ref="link">
      <slot></slot>
    </span>
    <span class="s-breadcrumb-separator">{{ separator }}</span>
  </span>
</template>
<script>
  export default {
    name: "s-breadcrumb-item",
    props: {
      to: {},
      replace: Boolean
    },
    data() {
      return {
        separator: ""
      }
    },
    mounted() {
      this.separator = this.$parent.separator;
      var self = this;
      if (this.to) {
        let link = this.$refs.link;
        link.addEventListener("click", _ => {
          let to = this.to;
          self.replace ? self.$router.replace(to) : self.$router.push(to);
        });
      }
    }
  }
</script>