<template>
  <article class="article">
    <h1>统计环图</h1>

    <h3>统计环图</h3>
    <div class="example">
      <div class="example-demo">
        <s-chart :chart="chart"></s-chart>
        <s-chart :chart="chart1"></s-chart>
      </div>
      <example-code>
        <textarea>
    <template>
      <s-chart :chart="chart"></s-chart>
    </template>
    <script>
      export default {
        data() {
          return {
            chart: {
              name: 'chart',
              type: 'statRingChart',
              width: '600px',
              height: '400px',
              data: [
                {name: '直接访问', value: 335},
                {name: '邮件营销', value: 310},
                {name: '联盟广告', value: 234},
                {name: '视频广告', value: 135},
                {name: '搜索引擎', value: 248},
                {name: '测试', value: 548}
              ]
            }
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>
  </article>
</template>
<script>

  export default {


    data () {
      return {
        chart: {
          name: 'chart',
          type: 'statRingChart',
          width: '600px',
          height: '400px',
          data: [
            {name: '直接访问', value: 335},
            {name: '邮件营销', value: 310},
            {name: '联盟广告', value: 234},
            {name: '视频广告', value: 135},
            {name: '搜索引擎', value: 248},
            {name: '测试', value: 548}
          ]
        },
        chart1: {
          name: 'chart1',
          type: 'statRingChart',
          width: '600px',
          height: '400px',
          data: [
            {name: '严重', value: 21059},
            {name: '主要', value: 11111},
            {name: '次要', value: 19374},
            {name: '警告', value: 1946},
            {name: '提示', value: 38674},
            {name: '正常', value: 11111},
            {name: '未知', value: 1686}
          ]
        }
      }
    }
  }
</script>