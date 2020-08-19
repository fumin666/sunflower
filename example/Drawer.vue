<template>
    <section>
        <s-button @click="value1 = true">Open</s-button>
        <s-drawer width="468" title="Basic Drawer" :mask-closable="false" v-model="value1">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </s-drawer>
    </section>
</template>
<script>
  export default {
    data () {
      return {
        value1: false
      }
    }
  }
</script>