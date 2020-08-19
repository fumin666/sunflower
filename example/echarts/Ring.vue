<template>
  <article class="article">
    <h1>环形图</h1>

    <h3>单个环图</h3>
    <div class="example">
      <div class="example-demo">
        <s-chart :chart="chart1"></s-chart>
      </div>
      <example-code>
        <textarea>
    <template>
      <s-chart :chart="chart1"></s-chart>
    </template>
    <script>
      export default {
        data() {
          return {
            chart1: {
              name: 'chart1',
              type: 'ringChart',
              width: '400px',
              height: '200px',
              itemName: '测试',
              data: 70
            }
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>三个环图</h3>
    <div class="example">
      <div class="example-demo">
        <s-chart :chart="chart2"></s-chart>
      </div>
      <example-code>
        <textarea>
    <template>
      <s-chart :chart="chart2"></s-chart>
    </template>
    <script>
      export default {
        data() {
          return {
            chart2: {
              name: 'chart2',
              type: 'ringCharts',
              width: '600px',
              height: '200px',
              data: [
                {name: '工作存储', value: 0},
                {name: 'CPU使用率', value: 8},
                {name: '持久存储', value: 72}
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

    <h3>三个环图</h3>
    <div class="example">
      <div class="example-demo">
        <s-chart :chart="chart3"></s-chart>
      </div>
      <example-code>
        <textarea>
    <template>
      <s-chart :chart="chart3"></s-chart>
    </template>
    <script>
      export default {
        data() {
          return {
            chart3: {
              name: 'chart3',
              type: 'ringSameCharts',
              width: '600px',
              height: '200px',
              data: [
                {name: '工作存储', value: 66},
                {name: 'CPU使用率', value: 46},
                {name: '持久存储', value: 26}
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
        chart1: {
          name: 'chart1',
          type: 'ringChart',
          width: '400px',
          height: '200px',
          itemName: '测试',
          data: 70
        },
        chart2: {
          name: 'chart2',
          type: 'ringCharts',
          width: '600px',
          height: '200px',
          data: [{name: '工作存储', value: 20}, {name: 'CPU使用率', value: 92}, {name: '持久存储', value: 62}]
        },
        chart3: {
          name: 'chart3',
          type: 'ringSameCharts',
          width: '600px',
          height: '200px',
          data: [{name: '工作存储', value: 66}, {name: 'CPU使用率', value: 46}, {name: '持久存储', value: 96}]
        }
      }
    }
  }
</script>