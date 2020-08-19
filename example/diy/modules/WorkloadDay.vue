<template>
  <s-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="card-title">
        当天工作量统计
      </span>
    </div>
    <s-charts :chart="workloadDay"></s-charts>
  </s-card>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        workloadDay: {
          el: 'workloadDay',
          type: 'threeBarChart',
          width: '100%',
          height: '100%',
          data: {
            order: ['事件', '问题', '变更', '发布', '知识', '特殊'],
            group: [
              {
                name: '待处理',
                data: [350, 650, 700, 1000, 720, 200]
              },
              {
                name: '待跟踪',
                data: [700, 700, 750, 1250, 630, 300]
              },
              {
                name: '已处理',
                data: [500, 680, 180, 1180, 700, 270]
              }
            ]
          }
        }
      }
    }
  }
</script>

<style>

</style>