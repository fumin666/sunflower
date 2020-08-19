<template>
  <s-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="card-title">
        账号状态统计
      </span>
      <div class="card-enter">更多</div>
    </div>
    <s-chart :chart="accountStatusChart"></s-chart>
  </s-card>
</template>

<script>
export default {
  name: 'AccountStatus',
  data () {
    return {
      accountStatusChart: {
        name: 'accountStatusChart',
        type: 'pieChart',
        width: '100%',
        height: '100%',
        data: [
          {
            name: '激活',
            value: 3
          },
          {
            name: '未激活',
            value: 4
          },
          {
            name: '锁定',
            value: 5
          },
          {
            name: '过期',
            value: 6
          },
          {
            name: '离职',
            value: 7
          },
          {
            name: '注销',
            value: 2
          }
        ]
      }
    };
  }
};
</script>

<style>
  .s-card {
    box-sizing: border-box;
  }
  .box-card {
    border: 1px solid #d9e7f3;
    opacity: .7;
    transition: opacity .5s;
    width: 100%;
    height: 100%;
  }
  .box-card:hover {
    border-color: #a1d8f9;
    opacity: 1;
  }
  .s-card-body {
    height: calc(100% - 30px)
  }
  .card-enter {
    float: right;
  }
</style>
