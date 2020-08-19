<template>
  <div class="s-diy">
    <p>
      <a href="https://suninfofe.github.io/vue-layout-diy/dist/index.html" target="_blank">点击查看：vue-layout-diy</a>
    </p>
    <s-layout v-for="(portlet, index) in portlets" :key="index" :portlet="portlet"></s-layout>
  </div>
</template>

<script>
  import SLayout from './components/Layout';

  export default {
    name: 'page1',
    components: {
      SLayout
    },
    data () {
      return {
        portlets: [{
          size: [8, 8, 8],
          height: '360px',
          content: [
            'AccountStatus',
            'EmptyA',
            'EmptyB'
          ]
        }, {
          size: [16, 8],
          height: '360px',
          content: [
            'WorkloadDay',
            'AssetsTop'
          ]
        }]
      }
    }
  };
</script>

<style>
.s-diy p {
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bolder;
}
</style>
