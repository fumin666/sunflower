<template>
  <div :id="chart.name" :style="size" v-if="!noDataflag" key="echart"></div>
  <div class="chartNoData" :style="size" v-else key="nodata">
    <span>暂无数据</span>
  </div>
</template>
<script>
  import myChart from './chart.interface'
  import EventBus from '../eventbus/event-bus.js';

  export default{
    name: 's-chart',
    props: {
      chart: {
        type: Object
      },
      clickFun: {
        type: Function
      }
    },
    computed: {
      size() {
        let style = {};
        style.width = this.chart.width;
        style.height = this.chart.height;
        return style;
      },
      noDataflag() { // 暂无数据的标志
        return this.isValidData(this.chart.data);
      }
    },
    data() {
        return {
            chartInstance: null
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
          case 'ringChart' :
            chart = myChart.ringChart(this.chart.name, this.chart.data, this.chart.itemName, this.chart.isReverseColor, this.chart.option);
            break;
          case 'ringCharts' :
            chart = myChart.ringCharts(this.chart.name, this.chart.data, this.chart.option);
            break;
          case 'ringSameCharts' :
            chart = myChart.ringSameCharts(this.chart.name, this.chart.data, this.chart.option);
            break;
          case 'statRingChart' :
            chart = myChart.statRingChart(this.chart.name, this.chart.data, this.chart.option);
            break;
          case 'pieChart' :
            chart = myChart.pieChart(this.chart.name, this.chart.data, this.chart.itemName, this.chart.option);
            break;
          case 'gaugeChart' :
            chart = myChart.gaugeChart(this.chart.name, this.chart.data, this.chart.itemName, this.chart.option);
            break;
          case 'statusChart' :
            chart = myChart.statusChart(this.chart.name, this.chart.data, this.chart.itemName, this.chart.option);
            break;
          case 'rainbowBarChart' :
            chart = myChart.rainbowBarChart(this.chart.name, this.chart.data, this.chart.option);
            break;
          case 'colorfulBarChart' :
            chart = myChart.colorfulBarChart(this.chart.name, this.chart.data, this.chart.option);
            break;
          case 'percentBarChart' :
            chart = myChart.percentBarChart(this.chart.name, this.chart.data, this.chart.itemName);
            break;
          case 'stackBarChart' :
            chart = myChart.stackBarChart(this.chart.name, this.chart.data, this.chart.option);
            break;
          case 'stackChart' :
            chart = myChart.stackChart(this.chart.name, this.chart.data, this.chart.unit, this.chart.option);
            break;
          case 'multiBarChart' :
            chart = myChart.multiBarChart(this.chart.name, this.chart.data, this.chart.option);
            break;
          case 'lineChart' :
            chart = myChart.lineChart(this.chart.name, this.chart.data, this.chart.itemName, this.chart.option);
            break;
          case 'statusLineChart' :
            chart = myChart.statusLineChart(this.chart.name, this.chart.data, this.chart.itemName, this.chart.option);
            break;
          case 'multilineChart' :
            chart = myChart.multilineChart(this.chart.name, this.chart.data, this.chart.option);
            break;
          case 'areaChart' :
            chart = myChart.areaChart(this.chart.name, this.chart.data, this.chart.unit, this.chart.option);
            break;
          case 'areaChartY' :
            chart = myChart.areaChartY(this.chart.name, this.chart.data, this.chart.unit, this.chart.option);
            break;
          case 'areaWordChart' :
            chart = myChart.areaWordChart(this.chart.name, this.chart.data, this.chart.itemName, this.chart.option);
            break;
        }
        if (typeof(this.clickFun) === 'function') {
          chart.on('click', this.clickFun);
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
    font-size: 18px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
