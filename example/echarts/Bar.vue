<template>
  <article class="article">
    <h1>柱状图</h1>

    <h3>无坐标多彩轴柱状图</h3>
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
              type: 'rainbowBarChart',
              width: '600px',
              height: '200px',
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

    <h3>有坐标多彩轴柱状图</h3>
    <div class="example">
      <div class="example-demo">
        <s-chart :chart="chart2" v-if="isChart2Display"></s-chart>
        <s-button @click="getChart">点击获取数据</s-button>
      </div>
      <example-code>
        <textarea>
    <template>
      <s-chart :chart="chart2" v-if="isChart2Display"></s-chart>
      <s-button @click="getChart">点击获取数据</s-button>
    </template>
    <script>
      export default {
        data() {
          return {
            isChart2Display: 1,
            chart2: {
              name: 'chart2',
              type: 'colorfulBarChart',
              width: '900px',
              height: '300px',
              data: [
                {name: '严重', value: 21059},
                {name: '主要', value: 0},
                {name: '次要', value: 19374},
                {name: '警告', value: 1946},
                {name: '提示', value: 38674},
                {name: '正常', value: 0},
                {name: '未知', value: 1686}]
            }
          }
        },
        methods: {
          getChart: function () {
            var chart2Data = [30280, 33323, 10029, 888, 6743, 24536, 10000];
            var _this = this;
            setTimeout(function () {
              for (let i = 0; i < 7; i++) {
                _this.chart2.data[i].value = chart2Data[i];
              }
            }, 500);
            this.isChart2Display = 0;
          }
        },
        watch: {
          chart2: {
            handler: function () {
              this.isChart2Display = 1;
            },
            deep: true
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>百分比柱状图</h3>
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
              type: 'percentBarChart',
              width: '600px',
              height: '200px',
              itemName: '使用率',
              data: [24, 33.3, 45.25, 78.1, 23.1, 90.231]
            }
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>层叠柱状图</h3>
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
              type: 'stackBarChart',
              width: '900px',
              height: '300px',
              data: [
                {'stack': '192.168.212.1[254]', '未使用': 30, '已使用': 224},
                {'stack': '192.167.201.1[254]', '已使用': 210, '未使用': 44},
                {'stack': '192.158.10.1[254]', '已使用': 200, '未使用': 54},
                {'stack': '192.128.210.1[254]', '已使用': 43, '未使用': 211},
                {'stack': '192.168.212.1[254]', '已使用': 80, '未使用': 174},
                {'stack': '192.168.100.1[254]', '已使用': 200, '未使用': 54}]
            }
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>百分比数字坐标轴柱状图</h3>
    <div class="example">
      <div class="example-demo">
        <s-chart :chart="chart5"></s-chart>
      </div>
      <example-code>
        <textarea>
    <template>
        <s-chart :chart="chart5"></s-chart>
    </template>
    <script>
      export default {
        data() {
          return {
            chart5: {
              name: 'chart5',
              type: 'stackChart',
              width: '900px',
              height: '300px',
              unit: 'MB',
              data: [
                {use: 6512.69, sum: 8089},
                {use: 14370, sum: 15600},
                {use: 1500, sum: 12350},
                {use: 1500, sum: 12350}]
            }
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>多维柱状图</h3>
    <div class="example">
      <div class="example-demo">
        <s-chart :chart="chart6"></s-chart>
      </div>
      <example-code>
        <textarea>
    <template>
      <s-chart :chart="chart6"></s-chart>
    </template>
    <script>
      export default {
        data() {
          return {
            chart6: {
              name: 'chart6',
              type: 'multiBarChart',
              width: '80%',
              height: '200px',
              data: [
                {'name': '主机', '宕机': 72, '告警': 39, '正常': 30},
                {'name': '网络设备', '正常': 33, '告警': 31, '宕机': 42},
                {'name': '主机硬件', '正常': 50, '告警': 50, '宕机': 41},
                {'name': '应用', '正常': 38, '告警': 71, '宕机': 61}
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
        isChart2Display: 1,
        chart1: {
          name: 'chart1',
          type: 'rainbowBarChart',
          width: '600px',
          height: '200px',
          data: [
            {name: '直接访问', value: 335},
            {name: '邮件营销', value: 310},
            {name: '联盟广告', value: 234},
            {name: '视频广告', value: 135},
            {name: '搜索引擎', value: 248},
            {name: '测试', value: 548}
          ]
        },
        chart2: {
          name: 'chart2',
          type: 'colorfulBarChart',
          width: '900px',
          height: '300px',
          data: [{name: '严重', value: 21059}, {name: '主要', value: 12312}, {name: '次要', value: 19374}, {name: '警告', value: 19463}, {name: '提示', value: 38674}, {name: '正常', value: 31233}, {name: '未知', value: 16866}]
        },
        chart3: {
          name: 'chart3',
          type: 'percentBarChart',
          width: '600px',
          height: '200px',
          itemName: '使用率',
          data: [24, 33.3, 45.25, 78.1, 23.1, 90.231]
        },
        chart4: {
          name: 'chart4',
          type: 'stackBarChart',
          width: '900px',
          height: '300px',
          data: [{'stack': '192.168.212.1[254]', '未使用': 30, '已使用': 224}, {'stack': '192.167.201.1[254]', '已使用': 210, '未使用': 44}, {'stack': '192.158.10.1[254]', '已使用': 200, '未使用': 54}, {'stack': '192.128.210.1[254]', '已使用': 43, '未使用': 211}, {'stack': '192.168.212.1[254]', '已使用': 80, '未使用': 174}, {'stack': '192.168.100.1[254]', '已使用': 200, '未使用': 54}]
        },
        chart5: {
          name: 'chart5',
          type: 'stackChart',
          width: '900px',
          height: '300px',
          unit: 'MB',
          data: [{use: 6512.69, sum: 8089}, {use: 14370, sum: 15600}, {use: 6500, sum: 12350}, {use: 1500, sum: 12350}]
        },
        chart6: {
          name: 'chart6',
          type: 'multiBarChart',
          width: '80%',
          height: '200px',
          data: [{'name': '主机', '宕机': 72, '告警': 39, '正常': 30}, {'name': '网络设备', '正常': 33, '告警': 31, '宕机': 42}, {'name': '主机硬件', '正常': 50, '告警': 50, '宕机': 41}, {'name': '应用', '正常': 38, '告警': 71, '宕机': 61}]
        }
      }
    },
    methods: {
      getChart: function () {
        var chart2Data = [30280, 33323, 10029, 888, 6743, 24536, 10000];
        var _this = this;
        setTimeout(function () {
          for (let i = 0; i < 7; i++) {
            _this.chart2.data[i].value = chart2Data[i];
          }
        }, 500);
        this.isChart2Display = 0;
      }
    },
    watch: {
      chart2: {
        handler: function () {
          this.isChart2Display = 1;
        },
        deep: true
      }
    }
  }
</script>