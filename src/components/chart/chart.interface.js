import echarts from 'echarts'
import themeConfig from './chart.theme'
import { merge } from 'lodash'


// 系统主题主颜色
function getEcTheme() {
    let mainTheme = localStorage.getItem('theme') || 'chalk'
    mainTheme === 'tea' ? mainTheme = 'chalk' : ''
    mainTheme === 'fanta' ? mainTheme = 'chalk' : ''
    console.log(mainTheme)
    return themeConfig.getTheme(mainTheme);
}

let echart = {}

function createChart (el, option) {
  let ecTheme = getEcTheme();
  let chart = echarts.init(document.getElementById(el), ecTheme)
  chart.setOption(option, true)
  return chart
}

// 通过el和配置建立图表
echart.createChart = createChart

function filterData (data, key) {
  let dataAry = []
  for (var i = 0, l = data.length; i < l; i++) {
    dataAry.push(data[i][key])
  }
  return dataAry
}

function getColor (params, isReverseColor) {
  let chartColor;
  let value = params;
  let ecTheme = getEcTheme()
  let red = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: ecTheme.threeColor[0]
  }, {
    offset: 1,
    color: ecTheme.threeColor1[0]
  }])
  let yellow = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: ecTheme.threeColor[1]
  }, {
    offset: 1,
    color: ecTheme.threeColor1[1]
  }])
  let green = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: ecTheme.threeColor[2]
  }, {
    offset: 1,
    color: ecTheme.threeColor1[2]
  }])
  if (value < 60) {
    chartColor = (isReverseColor === 1) ? red : green
  } else if (value >= 60 && value < 90) {
    chartColor = yellow
  } else if (value >= 90) {
    chartColor = (isReverseColor === 1) ? green : red
  }
  return chartColor
}

function getColorList (xdata) {
  let ecTheme = getEcTheme()
  let themeColor = ecTheme.sevencolor
  let themeColor1 = ecTheme.sevencolor1
  let redWords = ['宕机', '严重', '违规数', '致命', '错误', '新建']
  let yellowWords = ['告警', '警告', '警报', '应急', '执行中']
  let orangeWords = ['主要']
  let pinkWords = ['次要']
  let greenWords = ['正常', '合规数', '信息', '已完成']
  let blueWords = ['提示', '已暂停']
  let grayWords = ['未知', '未审核', '已删除']
  let q2Words = ['未使用', '已使用', '暂态']
  let q2Words2 = ['保留', '非保留']
  let blackWords = ['诊断']
  let colorList = []
  let color = function (color1, color2) {
    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: color1
    }, {
      offset: 1,
      color: color2
    }])
  }
  for (let i = 0; i <= xdata.length - 1; i++) {
    if(redWords.indexOf(xdata[i]) > -1){
      colorList.push(color(themeColor[0], themeColor1[0]))
    }
    if(orangeWords.indexOf(xdata[i]) > -1){
      colorList.push(color(themeColor[1], themeColor1[1]))
    }
    if(pinkWords.indexOf(xdata[i]) > -1){
      colorList.push(color(themeColor[2], themeColor1[2]))
    }
    if(yellowWords.indexOf(xdata[i]) > -1){
      colorList.push(color(themeColor[3], themeColor1[3]))
    }
    if(blueWords.indexOf(xdata[i]) > -1){
      colorList.push(color(themeColor[4], themeColor1[4]))
    }
    if(greenWords.indexOf(xdata[i]) > -1){
      colorList.push(color(themeColor[5], themeColor1[5]))
    }
    if(grayWords.indexOf(xdata[i]) > -1){
      colorList.push(color(themeColor[6], themeColor1[6]))
    }
    if(blackWords.indexOf(xdata[i]) > -1){
      colorList.push(color(themeColor[7], themeColor1[7]))
    }
    if (q2Words.indexOf(xdata[i]) > -1) {
      if(xdata[i]==='未使用')
        colorList.push(color(themeColor[8], themeColor1[8]))
      if(xdata[i]==='已使用')
        colorList.push(color(themeColor[9], themeColor1[9]))
      if(xdata[i]==='暂态')
        colorList.push(color(themeColor[10], themeColor1[10]))
    }
    if (q2Words2.indexOf(xdata[i]) > -1) {
      if(xdata[i]==='保留')
        colorList.push(color(themeColor[11], themeColor1[11]))
      if(xdata[i]==='非保留')
        colorList.push(color(themeColor[12], themeColor1[12]))
    }
  }
  return colorList
}

function getLableData (ecTheme, data, isReverseColor) {
  return {
    normal: {
      color: getColor(data, isReverseColor),
      label: {
        show: true,
        position: 'center',
        formatter: '{b}',
        textStyle: {
          baseline: 'top',
          color: ecTheme.textcolor
        }
      },
      labelLine: {
        show: false
      }
    }
  }
}

function getLabelFromatter(ecTheme) {
    let labelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    if (params.value === 100.0) {
                        return '无数据'
                    } else {
                        return (100 - params.value).toFixed(1) + '%'
                    }
                },
                textStyle: {
                    baseline: 'bottom',
                    color: ecTheme.textcolor
                }
            }
        }
    };
    return labelFromatter;
}

function getLabelBottom(ecTheme) {
    let labelBottom = {
        normal: {
            color: getEcTheme().discColor,
            label: {
                show: true,
                position: 'center'
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: ecTheme.discColor
        }
    };
    return labelBottom;
}


// 环形图表
echart.ringChart = function (el, data, name, isReverseColor, config) {
  let isReverse = isReverseColor || 2
  let ecTheme = getEcTheme();
  let labelFromatter = getLabelFromatter(ecTheme);
  let labelBottom = getLabelBottom(ecTheme);
  let option = {
    series: [{
      type: 'pie',
      radius: ['60%', '80%'],
      itemStyle: labelFromatter,
      data: [{
        name: '',
        value: (100 - parseFloat(data)).toFixed(1),
        itemStyle: labelBottom
      }, {
        name: (typeof name !== 'undefined') ? name : '',
        value: parseFloat(data),
        itemStyle: getLableData(ecTheme, parseFloat(data), isReverse)
      }]
    }]
  }

  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 三个环
echart.ringCharts = function (el, dataAry, config) {
  let ecTheme = getEcTheme();
  let labelFromatter = getLabelFromatter(ecTheme);
  let labelBottom = getLabelBottom(ecTheme);
  let option = {
    series: [{
      type: 'pie',
      radius: ['50%', '65%'],
      center: ['23%', '45%'],
      itemStyle: labelFromatter,
      data: [{
        name: '',
        value: (100 - parseFloat(dataAry[0].value)).toFixed(1),
        itemStyle: labelBottom
      }, {
        name: (typeof dataAry[0].name !== 'undefined') ? dataAry[0].name : '',
        value: parseFloat(dataAry[0].value),
        itemStyle: getLableData(ecTheme, parseFloat(dataAry[0].value))
      }]
    }, {
      type: 'pie',
      radius: ['75%', '90%'],
      center: ['50%', '50%'],
      itemStyle: labelFromatter,
      data: [{
        name: '',
        value: (100 - parseFloat(dataAry[1].value)).toFixed(1),
        itemStyle: labelBottom
      }, {
        name: (typeof dataAry[1].name !== 'undefined') ? dataAry[1].name : '',
        value: parseFloat(dataAry[1].value),
        itemStyle: getLableData(ecTheme, parseFloat(dataAry[1].value))
      }]
    }, {
      type: 'pie',
      radius: ['50%', '65%'],
      center: ['77%', '45%'],
      itemStyle: labelFromatter,
      data: [{
        name: '',
        value: (100 - parseFloat(dataAry[2].value)).toFixed(1),
        itemStyle: labelBottom
      }, {
        name: (typeof dataAry[2].name !== 'undefined') ? dataAry[2].name : '',
        value: parseFloat(dataAry[2].value),
        itemStyle: getLableData(ecTheme, parseFloat(dataAry[2].value))
      }]
    }]
  }

  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 三个一样的环图
echart.ringSameCharts = function (el, dataAry, config) {
  let ecTheme = getEcTheme();
  let labelFromatter = getLabelFromatter(ecTheme);
  let labelBottom = getLabelBottom(ecTheme);
  let option = {
    legend: {
      x: 'center',
      y: 'bottom',
      data: [
        dataAry[0].name, dataAry[1].name, dataAry[2].name
      ]
    },
    series: [{
      type: 'pie',
      radius: ['40%', '55%'],
      center: ['15%', '40%'],
      itemStyle: labelFromatter,
      data: [{
        name: '',
        value: (100 - parseFloat(dataAry[0].value)).toFixed(1),
        itemStyle: labelBottom
      }, {
        name: (typeof dataAry[0].name !== 'undefined') ? dataAry[0].name : '',
        value: parseFloat(dataAry[0].value),
        itemStyle: getLableData(ecTheme, parseFloat(dataAry[0].value))
      }]
    }, {
      type: 'pie',
      radius: ['40%', '55%'],
      center: ['50%', '40%'],
      itemStyle: labelFromatter,
      data: [{
        name: '',
        value: (100 - parseFloat(dataAry[1].value)).toFixed(1),
        itemStyle: labelBottom
      }, {
        name: (typeof dataAry[1].name !== 'undefined') ? dataAry[1].name : '',
        value: parseFloat(dataAry[1].value),
        itemStyle: getLableData(ecTheme, parseFloat(dataAry[1].value))
      }]
    }, {
      type: 'pie',
      radius: ['40%', '55%'],
      center: ['85%', '40%'],
      itemStyle: labelFromatter,
      data: [{
        name: '',
        value: (100 - parseFloat(dataAry[2].value)).toFixed(1),
        itemStyle: labelBottom
      }, {
        name: (typeof dataAry[2].name !== 'undefined') ? dataAry[2].name : '',
        value: parseFloat(dataAry[2].value),
        itemStyle: getLableData(ecTheme, parseFloat(dataAry[2].value))
      }]
    }]
  }

  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 统计环图
echart.statRingChart = function (el, data, config) {
  let ecTheme = getEcTheme()
  let legend = filterData(data, 'name')
  let length = getColorList(legend).length
  let colorList
  length !== 0 ? colorList = getColorList(legend) : colorList = ecTheme.shadecolor
  let option = {
    color: colorList,
    tooltip: {
      trigger: 'item',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      formatter: '{b} : {c} ({d}%)'
    },
    legend: {
      x: 'right',
      y: 'top',
      orient: 'vertical',
      data: legend
    },
    calculable: true,
    series: [{
      type: 'pie',
      radius: ['40%', '55%'],
      label: {
        normal: {
          color: ecTheme.textcolor,
          show: true,
          position: 'outside'
        }
      },
      itemStyle: {
        normal: {
          borderColor: ecTheme.bgColor,
          borderWidth: 2
        }
      },
      data: data
    }]
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 饼图
echart.pieChart = function (el, data, title, config) {
  let ecTheme = getEcTheme()
  let legend = filterData(data, 'name')
  let length = getColorList(legend).length
  let colorList
  length !== 0 ? colorList = getColorList(legend) : colorList = ecTheme.shadecolor
  let border = function (ldata) {
    let ydata = filterData(ldata, 'value')
    let index = 0
    for (let i = 0; i < ydata.length; i++) {
      if (ydata[i] !== 0 && ydata[i] !== '0') {
        index ++
      }
    }
    if (ldata.length > 1 && index > 1) {
      return {
        borderColor: ecTheme.bgColor,
        borderWidth: 2
      }
    }
  }
  let option = {
    color: colorList,
    title: {
      text: (typeof title !== 'undefined') ? title : '',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      formatter: '{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'right',
      data: legend
    },
    calculable: true,
    stillShowZeroSum: true,
    series: [{
      type: 'pie',
      radius: '50%',
      data: data,
      label: {
        normal: {
          show: false,
          color: ecTheme.textcolor
        }
      },
      itemStyle: {
        normal: border(data)
      }
    }]
  }

  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}

// 仪表盘
echart.gaugeChart = function (el, data, title, config) {
  let ecTheme = getEcTheme()
  let formatter = '{c}%'
  if (typeof title !== 'undefined') {
    formatter = '{b} : {c}%'
  }
  let option = {
    tooltip: {
      formatter: formatter,
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      zlevel: 2
    },
    series: [{
      name: '',
      type: 'gauge',
      splitNumber: 10, // 分割段数，默认为5
      axisLine: { // 坐标轴线
        lineStyle: { // 属性lineStyle控制线条样式
          width: 20,
          color: [
            [0.6, getColor(59)],
            [0.9, getColor(89)],
            [1, getColor(99)]
          ]
        }
      },
      axisTick: { // 坐标轴小标记
        splitNumber: 5, // 每份split细分多少段
        length: 12, // 属性length控制线长
        lineStyle: { // 属性lineStyle控制线条样式
          color: 'auto'
        }
      },
      axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
        show: true,
        formatter: function (v) {
          switch (v + '') {
            case '0':
              return '0'
            case '20':
              return '20'
            case '40':
              return '40'
            case '60':
              return '60'
            case '80':
              return '80'
            case '100':
              return '100'
            default:
              return ''
          }
        },
        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: 'auto'
        }
      },
      splitLine: { // 分隔线
        show: true, // 默认显示，属性show控制显示与否
        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
          color: 'auto'
        }
      },
      pointer: {
        width: 5
      },
      title: {
        show: true,
        offsetCenter: [0, '50'], // x, y，单位px
        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: ecTheme.textcolor
        }
      },
      detail: {
        formatter: '{value}%',
        offsetCenter: [0, '70'],
        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: ecTheme.textcolor,
          fontSize: 15
        }
      },
      data: [{
        value: data,
        name: (typeof title !== 'undefined') ? title : ''
      }]
    }]
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 状态仪表盘
echart.statusChart = function (el, data, title, config) {
  let ecTheme = getEcTheme()
  let formatter = '{c}%'
  if (typeof title !== 'undefined') {
    formatter = '{b} : {c}%'
  }
  let option = {
    tooltip: {
      formatter: formatter,
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
    },
    series: [{
      name: '',
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      center: ['50%', '90%'], // 默认全局居中
      radius: 120,
      splitLine: {
        show: false
      },
      axisLine: { // 坐标轴线
        lineStyle: { // 属性lineStyle控制线条样式
          width: 50,
          color: [
            [0.6, getColor(59)],
            [0.9, getColor(89)],
            [1, getColor(99)]
          ]
        }
      },
      axisTick: { // 坐标轴小标记
        show: false
      },
      axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
        distance : -10,
        formatter: function (v) {
          switch (v + '') {
            case '10':
              return '低'
            case '50':
              return '中'
            case '90':
              return '高'
            default:
              return ''
          }
        },
        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: '#fff',
          fontSize: 15,
          fontWeight: 'bolder'
        }
      },
      pointer: {
        width: 8,
        length: '80%',
        color: '#cbcbcb'
      },
      title: {
        show: true,
        offsetCenter: [0, '-45%'], // x, y，单位px
        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bolder'
        }
      },
      itemStyle: {
        normal: {
          color: 'rgba(100,115,135,0.6)'
        }
      },
      detail: {
        show: true,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        borderColor: '#ccc',
        width: 100,
        height: 40,
        offsetCenter: [0, -30], // x, y，单位px
        formatter: '{value}%',
        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          fontSize: 15
        },
        color: ecTheme.textcolor
      },
      data: [{
        value: data,
        name: (typeof title !== 'undefined') ? title : ''
      }]
    }]
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}

function filterBarData (data) {
  let returnAry = [
    [],
    [],
    []
  ]
  let filterData = null
  for (var i = 0, l = data.length; i < l; i++) {
    filterData = parseFloat(data[i].toFixed(2))
    returnAry[0].push(filterData)
    returnAry[1].push(100 - filterData)
    returnAry[2].push('')
  }
  return returnAry
}

// 百分比柱图
echart.percentBarChart = function (el, data, title, show, position, wid, config) {
  let filterData = filterBarData(data)
  let positionArr = position || null
  let bWid = wid || null
  let orShow
  show == 1 ? orShow = false : orShow = true
  let option = {
    calculable: true,
    xAxis: [{
      show: orShow,
      type: 'category',
      data: filterData[2]
    }],
    yAxis: [{
      show: orShow,
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %'
      },
      splitLine: {
        show: false
      }
    }],
    grid: { // 控制图的大小，调整下面这些值就可以，
      x: 40,
      y: 10,
      x2: 5,
      y2: 5 // y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
    },
    tooltip: {
      position: positionArr,
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        let tar = params[0]
        let returnStr = tar.value + '%'
        if (typeof tar.seriesName !== '') {
          returnStr = tar.seriesName + ' : ' + tar.value + '%'
        }
        return returnStr
      }
    },
    series: [{
      name: (typeof title !== 'undefined') ? title : '',
      type: 'bar',
      stack: 'total',
      barWidth: bWid,
      itemStyle: {
        normal: {
          color: function (params) {
            return getColor(params.data)
          },
          label: {
            show: true,
            position: 'inside',
            formatter: '{c} %'
          }
        }
      },
      data: filterData[0]
    }, {
      name: '',
      type: 'bar',
      stack: 'total',
      itemStyle: {
        normal: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)'
        },
        emphasis: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)'
        }
      },
      data: filterData[1]
    }]
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 彩虹柱图
echart.rainbowBarChart = function (el, data, config) {
  let ecTheme = getEcTheme()
  let option = {
    tooltip: {
      trigger: 'item',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
    },
    calculable: true,
    grid: {
      borderWidth: 0,
      y: 30,
      x: 10,
      x2: 10,
      y2: 30
    },
    xAxis: [{
      type: 'category',
      show: true,
      data: filterData(data, 'name'),
      axisLine: {
        show: false
      }
    }],
    yAxis: [{
      type: 'value',
      show: false
    }],
    series: [{
      type: 'bar',
      itemStyle: {
        normal: {
          color: function (params) {
            let colorList = ecTheme.shadecolor
            return colorList[params.dataIndex]
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            color: ecTheme.textcolor
          }
        }
      },
      data: filterData(data, 'value')
    }]
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 过滤多数据图表数据
function filterMultiChartData (data, keyword) {
  var returnObj = {
    legend: [],
    xAxis: [],
    seriesData: {}
  }
  if (data.length > 0) {
    // 根据一条数据过滤出legend
    for (var key in data[0]) {
      if (key !== keyword) {
        returnObj.legend.push(key)
        returnObj.seriesData[key] = []
      }
    }
    for (var i = 0, l = data.length; i < l; i++) {
      returnObj.xAxis.push(data[i][keyword])
      for (var j = 0, ll = returnObj.legend.length; j < ll; j++) {
        var k = returnObj.legend[j]
        returnObj.seriesData[k].push(data[i][k])
      }
    }
    return returnObj
  } else {
    throw new Error('MultiChartData data.length is 0!')
  }
}
// 计算面积数据的series
function getAreaChartSeries (legend, seriesData) {
  let ecTheme = getEcTheme()
  let series = []
  for (let i = 0, l = legend.length; i < l; i++) {
    let key = legend[i]
    let keyString = i.toString()
    let k = parseInt(keyString.charAt(keyString.length - 1))
    series.push({
      name: key,
      type: 'line',
      smooth: true,
      symbol: 'none',
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0.2,
            color: ecTheme.color[k]
          }, {
            offset: 1,
            color: 'rgba(255,255,255,0)'
          }])
        }
      },
      lineStyle: {
        normal: {
          width: 3,
        }
      },
      itemStyle: {
        normal: {
          areaStyle: {
            type: 'default',
          }
        }
      },
      data: seriesData[key]
    })
  }
  return series
}
// 面积图
echart.areaChart = function (el, data, unit, config) {
  let ecTheme = getEcTheme();
  let aData = data.data || data
  let units = unit || ''
  let fData = filterMultiChartData(aData, 'date')
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      formatter: function (params) {
        var content = ''
        for (var i = 0; i <= params.length - 1; i++) {
          content += '<br\>' + params[i].seriesName + ':' + params[i].data + units
        }

        return params[0].name + content
      }
    },
    legend: {
      x: 'right',
      data: fData.legend
    },
    calculable: true,
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: fData.xAxis
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: ecTheme.splitLineY
        }
      }
    }],
    series: getAreaChartSeries(fData.legend, fData.seriesData)
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// y轴为科学计数法的面积图
echart.areaChartY = function (el, data, unit, config) {
  let ecTheme = getEcTheme()
  let aData = data.data || data
  let units = unit || ''
  let fData = filterMultiChartData(aData, 'date')
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      formatter: function (params) {
        var content = ''
        for (var i = 0; i <= params.length - 1; i++) {
          content += '<br\>' + params[i].seriesName + ':' + params[i].data + units
        }

        return params[0].name + content
      }
    },
    legend: {
      x: 'right',
      data: fData.legend
    },
    calculable: true,
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: fData.xAxis
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: ecTheme.splitLineY
        }
      },
      axisLabel: {
        formatter: function (value) {
          if (value !== 0) {
            var p = Math.floor(Math.log(value) / Math.LN10)
            var n = Math.ceil(value * Math.pow(10, -p))
            return n + 'e' + p
          } else {
            return 0
          }
        }
      }
    }],
    series: getAreaChartSeries(fData.legend, fData.seriesData)
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 过滤数据得到Y轴
function filterChartYData (data, keyword, keyword1) {
  let returnObj = {
    yAry: {},
    xyData: {},
    splitNum: 0
  }
  // 得到Y轴和匹配对象
  let mapObj = {}
  if (data[keyword].length > 0) {
    let relation = data[keyword]
    let counter = 0
    for (let i in relation) {
      for (let j in relation[i]) {
        mapObj[parseInt(i) + 1] = parseInt(j)
        returnObj.yAry[parseInt(i) + 1] = relation[i][j]
      }
      counter++
    }
    returnObj.splitNum = counter
    // 构建新的data
    let xdata = data[keyword1]
    for (var x in mapObj) {
      for (var y in xdata) {
        if (xdata[y].value === mapObj[x]) {
          xdata[y].value = x
        }
      }
    }
    returnObj.xyData = xdata
    return returnObj
  } else {
    throw new Error('MultiChartData data.length is 0!')
  }
}
// 面积y轴文字图
echart.areaWordChart = function (el, data, name, config) {
  let ecTheme = getEcTheme()
  let fData = filterChartYData(data, 'relation', 'data')
  let yAry = fData.yAry
  let aData = filterMultiChartData(fData.xyData, 'date')
  let option = {
    legend: {
      data: [name],
      x: 'right'
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      formatter: function (params) {
        return params[0].seriesName + '<br\>' + params[0].name + ':' + yAry[params[0].value]
      }
    },
    xAxis: [{
      type: 'category',
      data: aData.xAxis
    }],
    yAxis: [{
      type: 'value',
      splitNumber: 3,
      minInterval: 1,
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: ecTheme.splitLineY
        }
      },
      axisLabel: {
        show: true,
        formatter: function (params, index) {
          return yAry[index]
        }
      }
    }],
    calculable: false,

    series: [{
      name: name,
      type: 'line',
      smooth: true,
      symbol: 'none',
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0.2,
            color: ecTheme.color[0]
          }, {
            offset: 1,
            color: 'rgba(255,255,255,0)'
          }])
        }
      },
      // lineStyle: {
      //   normal: {
      //     width: 3,
      //   }
      // },
      itemStyle: {
        normal: {
          areaStyle: {
            type: 'default'
          }
        }
      },
      data: filterData(fData.xyData, 'value')
    }]
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}

function getColorFulBarSeries (data) {
  let ecTheme = getEcTheme()
  let seriesData = []
  let seriesItemObj = {}
  let itemDataAry = []
  for (let k = 0; k < data.length; k++) {
    itemDataAry.push(0)
  }
  for (let i = 0, l = data.length; i < l; i++) {
    seriesItemObj = {}
    seriesItemObj.name = data[i].name
    seriesItemObj.type = 'bar'
    seriesItemObj.stack = 'stack'
    // 深拷贝
    seriesItemObj.data = itemDataAry.slice(0)
    seriesItemObj.data[i] = data[i].value
    seriesItemObj.itemStyle = {
      normal: {
        label: {
          show: true,
          position: 'top',
          color: ecTheme.textcolor,
          formatter: function (params) {
            let val
            if (params.value == 0) {
              if (params.name === params.seriesName) {
                val = 0
              } else {
                val = ''
              }
            } else {
              val = params.value
            }

            return val
          }
        }
      }
    }
    seriesData.push(seriesItemObj)
  }
  return seriesData
}

// 多彩柱图（主要问题在于图例）
echart.colorfulBarChart = function (el, data, config) {
  let legend = filterData(data, 'name')
  let legendValue = null
  if (config && config.legend && config.legend.data) {
    legendValue = config.legend.data
  }
  let colorList = getColorList(legend)
  let option = {
    color: colorList,
    tooltip: {
      trigger: 'item',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      axisPointer: {
        type: 'shadow'
      },
      formatter: '{b}: {c}'
    },
    legend: {
      x: 'right',
      orient: 'vertical',
      data: legendValue || legend
    },
    xAxis: [{
      type: 'category',
      data: legend
    }],
    yAxis: [{
      type: 'value'
    }],
    series: getColorFulBarSeries(data)
  }

  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}

// 计算面积数据的series
function getStackBarChartSeries (legend, seriesData, yon) {
  let series = []
  let ecTheme = getEcTheme()
  for (let i = 0, l = legend.length; i < l; i++) {
    let key = legend[i]
    let positionStr = ''
    if (yon) {
      positionStr = 'top'
    } else {
      positionStr = (i == (l - 1)) ? 'top' : 'insideTop'
    }
    series.push({
      name: key,
      type: 'bar',
      stack: yon ? '' : 'stack',
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: positionStr,
            formatter: function (params) {
              let val = ''
              params.value === 0 ? val = '' : val = params.value
              return val
            },
            color: ecTheme.textcolor
          }
        }
      },
      data: seriesData[key]
    })
  }
  return series
}

// 堆积柱图
echart.stackBarChart = function (el, data, config, yon) {
  let ecTheme = getEcTheme()
  let fData = filterMultiChartData(data, 'stack')
  let option = {
    color: ecTheme.shadecolor,
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      x: 'center',
      data: fData.legend,
    },
    xAxis: [{
      type: 'category',
      axisLabel: {
        interval: 0
      },
      data: fData.xAxis
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        show: false
      }
    }],
    series: getStackBarChartSeries(fData.legend, fData.seriesData, yon)
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 百分比层叠表
echart.stackChart = function (el, data, units, config) {
  let ecTheme = getEcTheme()
  let unit = units || 'GB'
  let xyData = filterData(data, 'use')
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
          if (option.xAxis[0].data[i] == params[0].name) {
            return '内存使用率' + '</br>' +
              option.series[0].name + ':' + (option.series[0].data[i]).toFixed(2) + unit + '</br>' +
              '剩余' + ':' + parseFloat(option.series[1].data[i] - option.series[0].data[i]).toFixed(2) + unit + '</br>' +
              option.series[1].name + ':' + parseFloat(option.series[1].data[i]).toFixed(2) + unit
          }
        }
      }
    },
    grid: { // 控制图的大小，调整下面这些值就可以，
      borderWidth: 0,
      x: 70,
      y: 30,
      x2: 5,
      y2: 5 // y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
    },
    xAxis: [{
      show: true,
      type: 'category',
      data: xyData
    }, {
      type: 'category',
      data: xyData
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        formatter: '{value}' + unit
      },
      splitNumber: 4,
      splitLine: {
        show: false
      }
    }],
    series: [{
      name: '已使用',
      type: 'bar',
      itemStyle: {
        normal: {
          color: function (params) {
            for (let i = 0, l = option.xAxis[0].data.length; i < l; i++) {
              if (option.series[0].data[i] == params.data) {
                if (Math.round((params.data / option.series[1].data[i]) * 100) <= 90 && Math.round((params.data / option.series[1].data[i]) * 100) >= 60) {
                  return getColor(89)
                } else if (Math.round((params.data / option.series[1].data[i]) * 100) >= 90) {
                  return getColor(99)
                } else {
                  return getColor(59)
                }
              }
            }
          },
          barBorderRadius: 1,
          label: {
            show: true,
            formatter: function (params) {
              for (let i = 0, l = option.xAxis[1].data.length; i < l; i++) {
                if (option.xAxis[1].data[i] == params.name) {
                  return Math.round((params.value / option.series[1].data[i]) * 100) + '%'
                }
              }
            },
            position: 'insideTop',
            textStyle: {
              color: '#000'
            }
          }
        }
      },
      data: filterData(data, 'use')
    }, {
      name: '总量',
      type: 'bar',
      xAxisIndex: 1,
      itemStyle: {
        emphasis: {
          barBorderColor: '#cdcdcd',
        },
        normal: {
          barBorderColor: ecTheme.textcolor,
          barBorderWidth: 0.5,
          barBorderRadius: 2,
          color: 'rgba(255,255,255,0)',
          label: {
            show: true,
            position: 'top',
            formatter: function (p) {
              return '总量:' + p.value
            },
            textStyle: {
              color: ecTheme.textcolor
            }
          }
        }
      },
      data: filterData(data, 'sum')
    }]
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 计算多维图数据的series
function getMultiBarChartSeries (legend, seriesData) {
  let series = []
  let seriesArr = []
  let placeHoledStyle = {
    normal: {
      barBorderColor: 'rgba(0,0,0,0)',
      color: 'rgba(0,0,0,0)'
    },
    emphasis: {
      barBorderColor: 'rgba(0,0,0,0)',
      color: 'rgba(0,0,0,0)'
    }
  }
  let dataStyle = {
    normal: {
      barBorderRadius: 3,
      label: {
        show: true,
        position: 'insideLeft',
        textStyle: {
          color: '#cbcbcb'
        },
        formatter: '{c}%'
      }
    }
  }
  for (let i = 0, l = legend.length; i < l; i++) {
    /* seriesArr.splice(0,seriesArr.length); */
    let key = legend[i]
    let arr = seriesData[key]
    let midArr = []
    for (let j = 0; j < arr.length; j++) {
      midArr.push(100 - arr[j])
    }
    seriesArr.push(midArr)
    series.push({
      name: key,
      type: 'bar',
      stack: 'stack',
      itemStyle: dataStyle,
      data: seriesData[key]
    }, {
      name: key,
      type: 'bar',
      stack: 'stack',
      itemStyle: placeHoledStyle,
      data: seriesArr[i]
    })
  }
  return series
}
// 横向多维柱状图
echart.multiBarChart = function (el, data, config) {
  let fData = filterMultiChartData(data, 'name')
  let fObj = fData.seriesData
  let counter = 0
  for (let key in fObj) {
    counter++
  }
  var legendData = []
  for (let i in fObj) {
    legendData.push(i)
  }
  var option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      axisPointer: {
        type: 'shadow'
      },
      formatter: '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%'
    },
    legend: {
      x: 'right',
      y: 'top',
      data: legendData
    },
    grid: { // 控制图的大小，调整下面这些值就可以，
      x: 60,
      y: 30,
      x2: 5,
      y2: 5 // y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
    },
    xAxis: [{
      type: 'value',
      position: 'top',
      splitNumber: counter,
      axisLabel: {
        show: false
      }
    }],
    yAxis: [{
      type: 'category',
      splitLine: {
        show: false
      },
      data: fData.xAxis
    }],
    series: getMultiBarChartSeries(fData.legend, fData.seriesData)
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 多重折线图UUID显示类型
function getMultiLineChartSeries (legend, seriesData) {
  let series = []
  for (let i = 0, l = legend.length; i < l; i++) {
    let key = legend[i]
    series.push({
      name: key,
      type: 'line',
      data: seriesData[key],
      symbolSize: 8
    })
  }
  return series
}

echart.multilineChart = function (el, data, config) {
  let ecTheme = getEcTheme();
  let aData = data.data || data
  let fData = filterMultiChartData(aData, 'date')
  // if (data.relation) {
  //   fData = multilineRelation(fData, data.relation);
  // }
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
    },
    legend: {
      data: fData.legend,
      x: 'right'
    },
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      data: fData.xAxis
    }],
    yAxis: [{
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: ecTheme.splitLineY
        }
      },
      type: 'value'
    }],
    series: getMultiLineChartSeries(fData.legend, fData.seriesData)
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 折线图表
echart.lineChart = function (el, data, name, config) {
  let ecTheme = getEcTheme();
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
    },
    legend: {
      data: [name],
      x: 'right'
    },
    // calculable : true,
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      data: filterData(data, 'name')
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: ecTheme.splitLineY
        }
      },
    }],
    series: [{
      name: name,
      type: 'line',
      symbolSize: 8,
      lineStyle: {
        normal: {
          width: 3,
        }
      },
      itemStyle:{
        normal:{
          color:'#60ACFC', //折点颜色
          lineStyle:{
            margin: '6px',
            color:'#60ACFC' //折线颜色
          }
        }
      },
      data: filterData(data, 'value')
    }]
  }

  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}
// 设备状态线
echart.statusLineChart = function (el, data, name, config) {
  let ecTheme = getEcTheme();
  var yAry = {
    '0': '未知',
    '1': '正常',
    '2': '异常'
  }
  var option = {
    legend: {
      data: [name],
      x: 'right'
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      formatter: function (params) {
        return params[0].seriesName + '<br\>' + params[0].name + ':' + yAry[params[0].value]
      }
    },
    xAxis: [{
      type: 'category',
      data: filterData(data, 'name')
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: function (params) {
          return yAry[params]
        }
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: ecTheme.splitLineY
        }
      }
    }],
    calculable: false,
    series: [{
      name: name,
      type: 'line',
      data: filterData(data, 'value'),
      symbolSize: 8,
      // lineStyle: {
      //   normal: {
      //     width: 3,
      //     shadowColor: 'rgba(0, 0, 0, 0.5)',
      //     shadowBlur: 10
      //   }
      // }
    }, {
      name: '辅助',
      type: 'line',
      itemStyle: {
        normal: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)'
        },
        emphasis: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)'
        }
      },
      data: [0, 1, 2]
    }]
  }
  if (typeof config !== 'undefined') {
    return createChart(el, merge({}, option, config))
  } else {
    return createChart(el, option)
  }
}

echart.getChartColorList = getColorList

export default echart

