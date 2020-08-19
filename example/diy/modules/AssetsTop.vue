<template>
  <s-card class="box-card">
    <div slot="header" class="clearfix">
              <span class="card-title">
                <!--<i class="iconfont icon-trophy"></i>-->
                资产监控排行TOP5
              </span>
      <div class="card-enter" @click="">更多</div>
    </div>
    <div class="top-list">
    </div>
  </s-card>
</template>

<script>
  export default {
    name: 'AssetsTop',
    data () {
      return {
        topNList: []
      }
    }
  }
</script>

<style>
</style>