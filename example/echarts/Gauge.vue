<template>
  <article class="article">
    <h1>仪表图</h1>

    <h3>仪表盘图</h3>
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
              type: 'gaugeChart',
              width: '800px',
              height: '300px',
              data: 50
            }
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>半圆刻度盘</h3>
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
              type: 'statusChart',
              width: '600px',
              height: '200px',
              data: 66.6
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
          type: 'gaugeChart',
          width: '800px',
          height: '300px',
          data: 80,
          itemName: '使用率'
        },
        chart3: {
          name: 'chart3',
          type: 'statusChart',
          width: '600px',
          height: '200px',
          data: 66.6
        }
      }
    }
  }
</script>
