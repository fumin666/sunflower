<template>
  <s-row style="height: 100%">
    <s-col v-for="(size, index) in portlet.size" :key="index" :span="size" :style="{height: portlet.height ? portlet.height : '100%'}">
      <template v-if="portlet.content[index].size">
        <s-layout :portlet="portlet.content[index]"></s-layout>
      </template>
      <template v-else>
        <component :is="portlet.content[index]"></component>
      </template>
    </s-col>
  </s-row>
</template>

<script>
  export default {
    name: 'SLayout',
    props: {
      portlet: Object
    }
  };
</script>

<style>

</style>