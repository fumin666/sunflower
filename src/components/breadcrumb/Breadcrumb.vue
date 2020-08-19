<template>
  <div class="s-breadcrumb">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "s-breadcrumb",
    props: {
      separator: {
        type: String,
        default: "/"
      },
      separatorClass: {
        type: String,
        default: ''
      }
    }
  }
</script>