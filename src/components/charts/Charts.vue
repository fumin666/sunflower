<template>
  <div :id="chart.el" :style="size" v-if="!noDataflag" key="echart"></div>
  <div class="chartNoData" :style="size" v-else key="nodata">
    <span>暂无数据</span>
  </div>
</template>

<script>
  import myChart from './chart.interface';
  import EventBus from '../eventbus/event-bus.js';

  export default {
    name: 's-charts',
    data() {
        return {
            chartInstance: null
        }
    },
    props: {
      chart: {
        required: true,
        type: Object
      },
      clickFun: {
        type: Function
      }
    },
    created() {
        // Listen to the event.
        EventBus.$on('rebuild', this.buildHandler);
        window.addEventListener('resize', this.resizeHandler);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeHandler);
        if(this.chartInstance)
        this.chartInstance.dispose();
    },
    computed: {
      size() {
        return {
          width: this.chart.width,
          height: this.chart.height
        }
      },
      noDataflag() { // 暂无数据的标志
        return this.isValidData(this.chart.data);
      }
    },
    methods: {
      buildHandler() {
          this.chartInstance.dispose();
          this.drewChart();
      },
      resizeHandler() {
          this.chartInstance.resize()
      },
      drewChart() {
        let chart = {}
        switch (this.chart.type) {
          case 'baseChart': chart = myChart.baseChart(this.chart.el, this.chart.opt); break;
          case 'ringChart': chart = myChart.ringChart(this.chart.el, this.chart.data, this.chart.opt); break;
          case 'barChart': chart = myChart.barChart(this.chart.el, this.chart.data, this.chart.opt); break;
          case 'barChartShowX': chart = myChart.barChartShowX(this.chart.el, this.chart.data, this.chart.opt); break;
          case 'yBarChart': chart = myChart.yBarChart(this.chart.el, this.chart.data, this.chart.opt); break;
          case 'threeBarChart': chart = myChart.threeBarChart(this.chart.el, this.chart.data, this.chart.opt); break;
          case 'lineChart': chart = myChart.lineChart(this.chart.el, this.chart.data, this.chart.opt); break;
          case 'sLineChart': chart = myChart.sLineChart(this.chart.el, this.chart.data, this.chart.opt); break;
          case 'lineBarChart': chart = myChart.lineBarChart(this.chart.el, this.chart.data, this.chart.opt); break;
        }
        if (typeof(this.clickFun) === 'function') {
          chart.on('click', this.clickFun)
        }
        this.chartInstance = chart;
      },
      isValidData(data) { // 数据不可用返回true
        let typeString = Object.prototype.toString.apply(data);
        if (typeString.indexOf('Object') !== -1) {
          if (Object.keys(data).length === 0) {
            return true;
          }
        } else if (typeString.indexOf('Array') !== -1) {
          if (data.length === 0) {
            return true;
          }
        } else {
          if (data === '') {
            return true;
          }
        }
        return false;
      }
    },

    watch: {
      chart: {
        immediate: true,
        deep: true,
        handler(val) {
          this.$nextTick(() => {
            if (!this.isValidData(val.data)) {
              this.drewChart();
            }
          });
        }
      }
    }
  }
</script>

<style>
  .chartNoData {
    position: relative;
  }
  .chartNoData span {
    color: #5e7382;
    font-size: 12px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>