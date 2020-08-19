<template>
    <article class="article charts">
        <h1>Echarts</h1>

        <h3>环形图（图例默认在左边） － 账号状态统计</h3>
        <div class="example">
            <div class="example-demo">
                <s-charts :chart="chart1"></s-charts>
            </div>
            <example-code>
        <textarea>
    <s-charts :chart="chart1"></s-charts>
    <script>
      export default {
        data() {
          return {
            chart1: {
              el: 'chart1',
              type: 'ringChart',
              width: '400px',
              height: '200px',
              data: {
                '激活': 132,
                '未激活': 54,
                '死锁': 67,
                '过期': 105,
                '离职': 35
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

        <h3>环形图（自定义图例在右边） － 账号状态统计</h3>
        <div class="example">
            <div class="example-demo">
                <s-charts :chart="chart2"></s-charts>
            </div>
            <example-code>
        <textarea>
    <s-charts :chart="chart2"></s-charts>
    <script>
      export default {
        data() {
          return {
            chart2: {
              el: 'chart2',
              type: 'ringChart',
              width: '400px',
              height: '200px',
              data: {
                '激活': 132,
                '未激活': 54,
                '死锁': 67,
                '过期': 105,
                '离职': 35
              },
              opt: {
                legend: {
                  right: 'right'
                }
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

        <h3>环形图 － 个人审核情况统计</h3>
        <div class="example">
            <div class="example-demo">
                <s-charts :chart="chart3"></s-charts>
            </div>
            <example-code>
        <textarea>
    <s-charts :chart="chart3"></s-charts>
    <script>
      export default {
        data() {
          return {
            chart3: {
              el: 'chart3',
              type: 'ringChart',
              width: '400px',
              height: '200px',
              data: {
                '合规数': 85,
                '未审核': 10,
                '违规数': 25
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

        <h3>柱状图 － 事件级别统计</h3>
        <div class="example">
            <div class="example-demo">
                <s-charts :chart="chart4_1"></s-charts>
            </div>
            <example-code>
        <textarea>
    <s-charts :chart="chart4_1"></s-charts>
    <script>
      export default {
        data() {
          return {
            chart4_1: {
              el: 'chart4_1',
              type: 'barChart',
              width: '100px',
              height: '200px',
              data: {
                '紧急': 4,
                '严重': 6,
                '次要': 8,
                '告警': 11
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

        <h3>柱状图 － 流程工单统计</h3>
        <div class="example">
            <div class="example-demo">
                <s-charts :chart="chart11"></s-charts>
            </div>
            <example-code>
        <textarea>
    <s-charts :chart="chart4"></s-charts>
    <script>
      export default {
        data() {
          return {
            chart4: {
              el: 'chart4',
              type: 'barChart',
              width: '100px',
              height: '200px',
              data: {
                '紧急': 4,
                '严重': 6,
                '次要': 8,
                '告警': 11
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

        <h3>y轴柱状图 － 告警事件统计</h3>
        <div class="example">
            <div class="example-demo">
                <s-charts :chart="chart5"></s-charts>
            </div>
            <example-code>
        <textarea>
    <s-charts :chart="chart5"></s-charts>
    <script>
      export default {
        data() {
          return {
            chart5: {
              el: 'chart5',
              type: 'yBarChart',
              width: '400px',
              height: '200px',
              data: {
                '磁盘': 16,
                'syslog': 18,
                'ping': 10,
                '审计': 7,
                '改密': 5,
                '运维': 2,
                '监控': 3
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

        <h3>三柱柱状图 － 工作量统计</h3>
        <div class="example">
            <div class="example-demo">
                <s-charts :chart="chart6"></s-charts>
            </div>
            <example-code>
        <textarea>
    <s-charts :chart="chart6"></s-charts>
    <script>
      export default {
        data() {
          return {
            chart6: {
              el: 'chart6',
              type: 'threeBarChart',
              width: '400px',
              height: '200px',
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
        </textarea>
                <pre><code></code></pre>
            </example-code>
        </div>

        <h3>折柱混合 - 本周运维量统计</h3>
        <div class="desc"></div>
        <div class="example">
            <div class="example-demo">
                <s-charts :chart="chart7"></s-charts>
            </div>
            <example-code>
        <textarea>
    <s-charts :chart="chart7"></s-charts>
    <script>
      export default {
        data() {
          return {
            chart7: {
              el: 'chart7',
              type: 'lineBarChart',
              width: '100%',
              height: '200px',
              data: {
                order: ['周一', '周二', '周三', '周四', '周五', '周六'],
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
                  },
                  {
                    name: '所有',
                    type: 'line',
                    data: [1550, 2030, 1630, 3430, 2050, 770]
                  }
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

        <h3>折线图 － 本周事件走势</h3>
        <div class="example">
            <div class="example-demo">
                <s-charts :chart="chart8"></s-charts>
            </div>
            <example-code>
        <textarea>
    <s-charts :chart="chart8"></s-charts>
    <script>
      export default {
        data() {
          return {
            chart8: {
              el: 'chart8',
              type: 'lineChart',
              width: '400px',
              height: '200px',
              data: {
                '周一': 4,
                '周二': 8,
                '周三': 18,
                '周四': 19,
                '周五': 12,
                '周六': 10,
                '周日': 13
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

        <h3>折线图 - 本月事件走势</h3>
        <div class="desc">数据格式不同</div>
        <div class="example">
            <div class="example-demo">
                <s-charts :chart="chart8_1"></s-charts>
            </div>
            <example-code>
        <textarea>
    <s-charts :chart="chart8_1"></s-charts>
    <script>
      export default {
        data() {
          return {
            chart8_1: {
              el: 'chart8_1',
              type: 'sLineChart',
              width: '400px',
              height: '200px',
              data: [
                {name: '1', value: '10'},
                {name: '2', value: '20'},
                {name: '3', value: '25'},
                {name: '4', value: '28'},
                {name: '5', value: '30'},
                {name: '6', value: '36'},
                {name: '7', value: '35'},
                {name: '8', value: '28'},
                {name: '9', value: '15'},
                {name: '10', value: '26'}
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

        <h3>折线图（自定义 dataZoom ） － 事件走势</h3>
        <div class="desc">使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系。</div>
        <div class="example">
            <div class="example-demo">
                <s-charts :chart="chart9"></s-charts>
            </div>
            <example-code>
        <textarea>
    <s-charts :chart="chart9"></s-charts>
    <script>
      export default {
        data() {
          return {
            chart9: {
              el: 'chart9',
              type: 'lineChart',
              width: '400px',
              height: '200px',
              data: {
                '1': 4, '2': 5, '3': 10, '4': 24, '5': 15, '6': 10,
                '7': 10, '8': 14, '9': 10, '10': 18, '11': 10, '12': 16,
                '13': 4, '14': 5, '15': 10, '16': 24, '17': 15, '18': 10,
                '19': 10, '20': 14, '21': 10, '22': 18, '23': 10, '24': 16
              },
              opt: {
                dataZoom: [{
                  type: 'inside',
                  start: 0,
                  end: 50
                }]
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
        <h3>超级chart-应对各种不按规律出牌的chart</h3>
        <div class="example">
            <div class="example-demo">
                <s-charts :chart="chart111"></s-charts>
            </div>
            <example-code>
        <textarea>
    <s-charts :chart="chart111"></s-charts>
    <script>
      export default {
        data() {
          let option = {
            color: ['#3398DB'],
            tooltip: {
              trigger: 'axis',
              backgroundColor: 'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
              extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px',
              textStyle: {
                color: 'rgba(0,0,0,.65)',
                fontSize: 12,
              },
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                show: false
              }
            ],
            series: [
              {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
              }
            ]
          };
          return {
            chart11: {
              el: 'chart11',
              type: 'baseChart',
              width: '800px',
              height: '400px',
              opt: option
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
    data() {
      let option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
          extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px',
          textStyle:{
            color:'rgba(0,0,0,.65)',
            fontSize: 12,
          },
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      };
      return {
        chart1: {
          el: 'chart1',
          type: 'ringChart',
          width: '264px',
          height: '163px',
          data: {
            '激活': 132,
            '未激活': 54,
            '死锁': 67,
            '过期': 105,
            '离职': 35
          }
        },
        chart2: {
          el: 'chart2',
          type: 'ringChart',
          width: '400px',
          height: '200px',
          data: {
            '激活': 132,
            '未激活': 54,
            '死锁': 67,
            '过期': 105,
            '离职': 35
          },
          opt: {
            legend: {
              right: 'right'
            }
          }
        },
        chart3: {
          el: 'chart3',
          type: 'ringChart',
          width: '400px',
          height: '200px',
          data: {
            '合规数': 85,
            '未审核': 10,
            '违规数': 25
          }
        },
        chart4: {
          el: 'chart4',
          type: 'barChart',
          width: '400px',
          height: '200px',
          data: {
            '紧急流程工单': 4,
            '严重流程工单': 6,
            '次要流程工单': 8,
            '告警': 11
          }
        },
        chart4_1: {
          el: 'chart4_1',
          type: 'barChart',
          width: '400px',
          height: '200px',
          data: {
            '严重': 6,
            '主要': 3,
            '次要': 8,
            '警告': 11,
            '提示': 11,
            '正常': 11,
            '未知': 11
          }
        },
        chart5: {
          el: 'chart5',
          type: 'yBarChart',
          width: '400px',
          height: '200px',
          data: {
            '磁盘': 16,
            'syslog': 18,
            'ping': 10,
            '审计': 7,
            '改密': 5,
            '运维': 2,
            '监控': 3
          }
        },
        chart6: {
          el: 'chart6',
          type: 'threeBarChart',
          width: '400px',
          height: '200px',
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
        },
        chart7: {
          el: 'chart7',
          type: 'lineBarChart',
          width: '100%',
          height: '200px',
          data: {
            order: ['周一', '周二', '周三', '周四', '周五', '周六'],
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
              },
              {
                name: '所有',
                type: 'line',
                data: [1550, 2030, 1630, 3430, 2050, 770]
              }
            ]
          }
        },
        chart8: {
          el: 'chart8',
          type: 'lineChart',
          width: '400px',
          height: '200px',
          data: {
            '周一': 4,
            '周二': 8,
            '周三': 18,
            '周四': 19,
            '周五': 12,
            '周六': 10,
            '周日': 13
          }
        },
        chart9: {
          el: 'chart9',
          type: 'lineChart',
          width: '400px',
          height: '200px',
          data: {
            '1': 4, '2': 5, '3': 10, '4': 24, '5': 15, '6': 10,
            '7': 10, '8': 14, '9': 10, '10': 18, '11': '10', '12': '16',
            '13': 4, '14': 5, '15': 10, '16': 24, '17': 15, '18': 10,
            '19': 10, '20': 14, '21': 10, '22': 18, '23': '10', '24': '16'
          },
          opt: {
            dataZoom: [{
              type: 'inside',
              start: 0,
              end: 50
            }]
          }
        },
        chart11: {
          el: 'chart11',
          type: 'barChart',
          width: '400px',
          height: '200px',
          data: {
            '事件': 4,
            '修订知识': 6,
            '变更': 8,
            '创建知识': 11,
            '注销知识': 4,
            '问题': 6,
            '发布': 8,
            '特殊运维': 3
          }
        },
        chart111: {
          el: 'chart111',
          type: 'baseChart',
          width: '800px',
          height: '400px',
          opt: option
        },
        chart8_1: {
          el: 'chart8_1',
          type: 'sLineChart',
          width: '400px',
          height: '200px',
          data: [
            {name: '1', value: '10'},
            {name: '2', value: '20'},
            {name: '3', value: '25'},
            {name: '4', value: '28'},
            {name: '5', value: '30'},
            {name: '6', value: '36'},
            {name: '7', value: '35'},
            {name: '8', value: '28'},
            {name: '9', value: '15'},
            {name: '10', value: '26'}
          ]
        }
      }
    }
  }
</script>
