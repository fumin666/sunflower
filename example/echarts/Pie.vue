<template>
  <article class="article">
    <h1>饼图</h1>

    <h3>标准饼图</h3>
    <div class="example">
      <div class="example-demo">
        <s-chart :chart="chart"></s-chart>
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
              type: 'pieChart',
              width: '800px',
              height: '300px',
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
          type: 'pieChart',
          width: '800px',
          height: '300px',
          data: [
            {name: '直接访问', value: 335},
            {name: '邮件营销', value: 333},
            {name: '联盟广告', value: 222},
            {name: '视频广告', value: 111},
            {name: '搜索引擎', value: 222},
            {name: '测试', value: 333}
          ]
        }
      }
    }
  }
</script>