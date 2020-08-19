<template>
  <article class="article">
    <h1>折线图</h1>

    <h3>普通折线图</h3>
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
              type: 'lineChart',
              width: '800px',
              height: '300px',
              itemName: '开放数量',
              data: [
                {name: '1:00', value: 1},
                {name: '2:00', value: 555},
                {name: '3:00', value: 278},
                {name: '4:00', value: '-'},
                {name: '5:00', value: 985},
                {name: '6:00', value: 78},
                {name: '7:00', value: 412},
                {name: '8:00', value: 125},
                {name: '9:00', value: 1452},
                {name: '10:00', value: 759},
                {name: '11:00', value: 245},
                {name: '12:00', value: 100}
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

    <h3>Y轴改为文字</h3>
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
              type: 'statusLineChart',
              width: '800px',
              height: '300px',
              itemName: '指标',
              data: [
                {name: '1:00', value: 0},
                {name: '2:00', value: 1},
                {name: '3:00', value: 1},
                {name: '4:00', value: 2},
                {name: '5:00', value: 1},
                {name: '6:00', value: 1},
                {name: '7:00', value: 1},
                {name: '8:00', value: 2},
                {name: '9:00', value: 1},
                {name: '10:00', value: 0}
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

    <h3>多线折线图</h3>
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
              type: 'multilineChart',
              width: '800px',
              height: '300px',
              data: {
                data: [
                  {'date': '周一', '111': 1320, '222': 30, '333': 10},
                  {'date': '周二', '111': 1132, '222': 182, '333': 12},
                  {'date': '周三', '111': 601, '222': 434, '333': 21},
                  {'date': '周四', '111': 234, '222': 791, '333': 54},
                  {'date': '周五', '111': 120, '222': 390, '333': 260},
                  {'date': '周六', '111': 90, '222': 30, '333': 830},
                  {'date': '周日', '111': 20, '222': 10, '333': 710}
                ],
                relation: [
                  {'111': '业务1'},
                  {'222': '业务2'},
                  {'333': '业务3'}
                ]
              }
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
          type: 'lineChart',
          width: '800px',
          height: '300px',
          itemName: '开放数量',
          data: [{name: '1:00', value: 1}, {name: '2:00', value: 555}, {name: '3:00', value: 278}, {name: '4:00', value: '-'}, {name: '5:00', value: 985}, {name: '6:00', value: 78}, {name: '7:00', value: 412}, {name: '8:00', value: 125}, {name: '9:00', value: 1452}, {name: '10:00', value: 759}, {name: '11:00', value: 245}, {name: '12:00', value: 100}]
        },
        chart2: {
          name: 'chart2',
          type: 'statusLineChart',
          width: '800px',
          height: '300px',
          itemName: '指标',
          data: [{name: '1:00', value: 0}, {name: '2:00', value: 1}, {name: '3:00', value: 1}, {name: '4:00', value: 2}, {name: '5:00', value: 1}, {name: '6:00', value: 1}, {name: '7:00', value: 1}, {name: '8:00', value: 2}, {name: '9:00', value: 1}, {name: '10:00', value: 0}]
        },
        chart3: {
          name: 'chart3',
          type: 'multilineChart',
          width: '800px',
          height: '300px',
          data: {data: [{'date': '周一', '111': 1320, '222': 30, '333': 10}, {'date': '周二', '111': 1132, '222': 182, '333': 12}, {'date': '周三', '111': 601, '222': 434, '333': 21}, {'date': '周四', '111': 234, '222': 791, '333': 54}, {'date': '周五', '111': 120, '222': 390, '333': 260}, {'date': '周六', '111': 90, '222': 30, '333': 830}, {'date': '周日', '111': 20, '222': 10, '333': 710}], relation: [{'111': '业务1'}, {'222': '业务2'}, {'333': '业务3'}]}
        }
      }
    }
  }
</script>