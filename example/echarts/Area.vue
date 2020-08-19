<template>
  <article class="article">
    <h1>折线区域图</h1>

    <h3>单条数据</h3>
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
              type: 'areaChart',
              width: '800px',
              height: '300px',
              unit: '个',
              data: {
                'data': [
                  {'value': 1.00, 'date': 1464923465000},
                  {'value': 2.00, 'date': 1464923640000},
                  {'value': 3.00, 'date': 1464923819000},
                  {'value': 0.00, 'date': 1464924001000}
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

    <h3>多条数据</h3>
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
              type: 'areaChart',
              width: '800px',
              height: '300px',
              unit: '次',
              data: [
                {'date': '周一', '意向': 1320, '预购': 30, '成交': 10},
                {'date': '周二', '意向': 1132, '预购': 182, '成交': 12},
                {'date': '周三', '意向': 601, '预购': 434, '成交': 21},
                {'date': '周四', '意向': 234, '预购': 791, '成交': 54},
                {'date': '周五', '意向': 120, '预购': 390, '成交': 260},
                {'date': '周六', '意向': 90, '预购': 30, '成交': 830},
                {'date': '周日', '意向': 20, '预购': 10, '成交': 710}
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

    <h3>y轴为科学计数法的多条数据</h3>
    <div class="example">
      <div class="example-demo">
        <s-chart :chart="chart4"></s-chart>
      </div>
      <example-code>
        <textarea>
    <template>
      <s-chart :chart="chart4"></s-chart>
    </template>
    <script>
      export default {
          data() {
              return {
                  chart4: {
                      name: 'chart4',
                      type: 'areaChartY',
                      width: '800px',
                      height: '300px',
                      unit: '次',
                      data: [
                          {'date': '周一', '意向': 9999*9999, '预购': 30, '成交': 10},
                          {'date': '周二', '意向': 1132*9999, '预购': 182, '成交': 12},
                          {'date': '周三', '意向': 601*9877, '预购': 434, '成交': 21},
                          {'date': '周四', '意向': 234*4567, '预购': 791, '成交': 54},
                          {'date': '周五', '意向': 120*7686, '预购': 390, '成交': 260},
                          {'date': '周六', '意向': 90*9999, '预购': 30, '成交': 830},
                          {'date': '周日', '意向': 20*9999, '预购': 10, '成交': 710}
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

    <h3>文字坐标轴</h3>
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
              type: 'areaWordChart',
              width: '800px',
              height: '300px',
              itemName: '某趋势',
              option: {dataZoom: {show: true, realtime: true, start: 0, end: 100}},
              data: {
                'data': [
                  {'value': 1, 'date': 1464923405000},
                  {'value': 4, 'date': 1464923465000},
                  {'value': 3, 'date': 1464923640000},
                  {'value': 2, 'date': 1464923819000},
                  {'value': 0, 'date': 1464924001000}
                ],
                'relation': [
                  {'3': '测试'},
                  {'2': '不可管理'},
                  {'1': '可管理'},
                  {'0': '未知'}
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
          type: 'areaChart',
          width: '800px',
          height: '300px',
          unit: '个',
          data: {'data': [{'value': 1.00, 'date': 1464923465000}, {'value': 2.00, 'date': 1464923640000}, {'value': 3.00, 'date': 1464923819000}, {'value': 0.00, 'date': 1464924001000}]}
        },
        chart2: {
          name: 'chart2',
          type: 'areaChart',
          width: '800px',
          height: '300px',
          unit: '次',
          data: [{'date': '周一', '意向': 9999, '预购': 30, '成交': 10}, {'date': '周二', '意向': 1132, '预购': 182, '成交': 12}, {'date': '周三', '意向': 601, '预购': 434, '成交': 21}, {'date': '周四', '意向': 234, '预购': 791, '成交': 54}, {'date': '周五', '意向': 120, '预购': 390, '成交': 260}, {'date': '周六', '意向': 90, '预购': 30, '成交': 830}, {'date': '周日', '意向': 20, '预购': 10, '成交': 710}]
        },
        chart3: {
          name: 'chart3',
          type: 'areaWordChart',
          width: '800px',
          height: '300px',
          itemName: '某趋势',
          option: {dataZoom: {show: true, realtime: true, start: 0, end: 100}},
          data: {'data': [{'value': 1, 'date': 1464923405000}, {'value': 4, 'date': 1464923465000}, {'value': 3, 'date': 1464923640000}, {'value': 2, 'date': 1464923819000}, {'value': 0, 'date': 1464924001000}], 'relation': [{'3': '测试'}, {'2': '不可管理'}, {'1': '可管理'}, {'0': '未知'}]}
        },
        chart4: {
          name: 'chart4',
          type: 'areaChartY',
          width: '800px',
          height: '300px',
          unit: '次',
          data: [{'date': '周一', '意向': 9999*9999, '预购': 30, '成交': 10}, {'date': '周二', '意向': 1132*9999, '预购': 182, '成交': 12}, {'date': '周三', '意向': 601*9877, '预购': 434, '成交': 21}, {'date': '周四', '意向': 234*4567, '预购': 791, '成交': 54}, {'date': '周五', '意向': 120*7686, '预购': 390, '成交': 260}, {'date': '周六', '意向': 90*9999, '预购': 30, '成交': 830}, {'date': '周日', '意向': 20*9999, '预购': 10, '成交': 710}]
        },
      }
    }
  }
</script>
