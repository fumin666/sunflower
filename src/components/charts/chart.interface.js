import echarts from 'echarts'
import { merge } from 'lodash'
import themeConfig from '../chart/chart.theme'


let echart = {};

// 系统主题主颜色
function getEcTheme() {
    let mainTheme = localStorage.getItem('theme') || 'chalk'
    mainTheme === 'tea' ? mainTheme = 'chalk' : ''
    mainTheme === 'fanta' ? mainTheme = 'chalk' : ''
    return themeConfig.getTheme(mainTheme);
}


function createChart (el, option) {
  let ecTheme = getEcTheme();
  let chart = echarts.init(document.getElementById(el), ecTheme)
  chart.setOption(option, true);
  return chart
}

function filterData (data) {
  let dataAry = []
  for(let key in data) {
    dataAry.push(key)
  }
  return dataAry
}

function getColorList (xdata) {
  let ecTheme = getEcTheme();
  let eThemeColor = ecTheme.sevencolor
  let eThemeColor1 = ecTheme.sevencolor1
  let shadecolor = ecTheme.shadecolor
  let redWords = ['严重', '离职', '宕机']
  let orangeWords = ['主要', '注销']
  let pinkWords = ['次要']
  let yellowWords = ['警告', '告警', '违规']
  let blueWords = ['提示', '未激活', '未使用']
  let greenWords = ['正常', '合规', '激活', '已使用']
  let grayWords = ['未知', '未审计', '过期']
  let blackWords = ['其他', '锁定']
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
      colorList.push(color(eThemeColor[0], eThemeColor1[0]))
    } else if(orangeWords.indexOf(xdata[i]) > -1){
      colorList.push(color(eThemeColor[1], eThemeColor1[1]))
    } else if(pinkWords.indexOf(xdata[i]) > -1){
      colorList.push(color(eThemeColor[2], eThemeColor1[2]))
    } else if(yellowWords.indexOf(xdata[i]) > -1){
      colorList.push(color(eThemeColor[3], eThemeColor1[3]))
    } else if(blueWords.indexOf(xdata[i]) > -1){
      colorList.push(color(eThemeColor[4], eThemeColor1[4]))
    } else if(greenWords.indexOf(xdata[i]) > -1){
      colorList.push(color(eThemeColor[5], eThemeColor1[5]))
    } else if(grayWords.indexOf(xdata[i]) > -1){
      colorList.push(color(eThemeColor[6], eThemeColor1[6]))
    } else if(blackWords.indexOf(xdata[i]) > -1){
      colorList.push(color(eThemeColor[7], eThemeColor1[7]))
    } else {
      colorList.push(shadecolor[i])
    }
  }
  return colorList
}

// 环形图
echart.ringChart = function(el, data, opt) {
  let res = getRingData(data);
  let option = {
    grid: {
      top: '10px',
      right: '10px',
      bottom: '10px',
      containLabel: true
    },
    tooltip: {
      trigger: 'item',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      formatter: "{b}: {c} ({d}%)"
    },
    legend: {
      textStyle: {
        color: '#495967'
      },
      itemGap: 2,
      itemHeight: 10,
      orient: 'vertical',
      left: 'left',
      top: 'middle',
      data: res.legend,
      tooltip: {
        backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
        extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px',
        textStyle:{
          color:'rgba(0,0,0,.65)',
          fontSize: 12,
        },
        show: true
      }
    },
    textStyle: {
      color: '#596b7a'
    },
    series: {
      type:'pie',
      radius: ['50%', '70%'],
      zlevel: '1',
      data: res.data
    }
  };
  if (opt) {
    if (opt.legend && opt.legend.right) {
      delete option.legend.left;
      option.legend.right = opt.legend.right;
    }
  }
  return createChart(el, option);
};

// 柱状图
echart.barChart = function(el, data, opt) {
  let res = getRingData(data);
  let legend = filterData(data)
  let colorList = getColorList(legend)
  let ecTheme = getEcTheme()
  res.data.forEach((item, idx) => {
    item.label = {
      normal: {
        show: true,
        color: ecTheme.textcolor,
        position: 'top'
      }
    };
    item.itemStyle = {
      normal: {
        color: colorList[idx]
      }
    }
  });
  let option = {
    tooltip : {
      trigger: 'none'
    },
    grid: {
      top: '30px',
      right: '10px',
      bottom: '10px',
      left: '10px',
      containLabel: true
    },
    xAxis: {
      type : 'category',
      data : res.legend,
      splitLine: {
        show: false,
      }
    },
    yAxis : {
      type : 'value',
      splitNumber: 2,
      splitLine: {
        show: false
      },
      minInterval: 1,
    },
    series : {
      type: 'bar',
      data: res.data,
    }
  };

  if (typeof opt !== 'undefined') {
    return createChart(el, merge({}, option, opt));
  } else {
    return createChart(el, option);
  }
};

echart.baseChart = function(el, opt) {
    return createChart(el, opt);
};

// 显示全部坐标点柱状图
echart.barChartShowX = function(el, data, opt) {
    let color = ['rgba(96, 172, 252,0.6)', 'rgba(91, 196, 159,0.6)', 'rgba(50, 211, 235,0.6)', 'rgba(254, 182, 77,0.6)', 'rgba(255, 124, 124,0.6)', 'rgba(146, 135, 231,0.6)', 'rgba(47, 178, 237,0.6)', 'rgba(54, 206, 200,0.6)', 'rgba(255, 220, 45,0.6)', 'rgba(252, 128, 105,0.6)', 'rgba(98, 109, 225,0.6)', 'rgba(100, 140, 217,0.6)', 'rgba(170,249,136,0.6)', 'rgba(255,116,136,0.6)', 'rgba(180,110,116,0.6)',
      'rgba(249,196,149,0.6)', 'rgba(208,255,158,0.6)', 'rgba(177,155,226,0.6)', 'rgba(100,243,255,0.6)', 'rgba(173,178,255,0.6)'];
    let res = getRingData(data);
    res.data.forEach((item, idx) => {
        item.label = {
            normal: {
                show: true,
                position: 'top'
            }
        };
        item.itemStyle = {
            normal: {
                color: color[idx]
            }
        }
    });
    let option = {
        tooltip : {
            trigger: 'none'
        },
        grid: {
            top: '30px',
            right: '10px',
            bottom: '10px',
            left: '10px',
            containLabel: true
        },
        xAxis: {
            type : 'category',
            data : res.legend,
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                // rotate: -20,//60度角倾斜显示
                formatter:function(value)
                {
                    let ret = "";//拼接加\n返回的类目项
                    let maxLength = 2;//每项显示文字个数
                    let valLength = value.length;//X轴类目项的文字个数
                    let rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                    if (rowN > 1)//如果类目项的文字大于3,
                    {
                        for (let i = 0; i < rowN; i++) {
                            let temp = "";//每次截取的字符串
                            let start = i * maxLength;//开始截取的位置
                            let end = start + maxLength;//结束截取的位置
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = value.substring(start, end) + "\n";
                            ret += temp; //凭借最终的字符串
                        }
                        return ret;
                    }
                    else {
                        return value;
                    }
                }
            },
            axisLine: {
              lineStyle:{
                color: '#232f39'
              }
            }
        },
        yAxis : {
            type : 'value',
            splitNumber: 2,
            splitLine: {
                show: false
            },
            axisLine: {
              lineStyle:{
                color: '#232f39'
              }
            }
        },
        series : {
            type: 'bar',
            data: res.data,
        },
        textStyle: {
            color: '#596b7a'
        }
    };

    if (typeof opt !== 'undefined') {
      return createChart(el, merge({}, option, opt));
    } else {
      return createChart(el, option);
    }
};

// y轴柱状图
echart.yBarChart = function(el, data, opt) {
  let res = getYbarData(data);
  let option = {
    grid: {
      left: '10px',
      right: '20px',
      top: '10px',
      bottom: '10px',
      containLabel: true
    },
    tooltip : {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px;',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      axisPointer : {
        type : 'shadow'
      }
    },
    xAxis:  {
      type: 'value',
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle:{
          color: '#232f39'
        }
      },
      minInterval: 1,
      axisLabel: {
        formatter: function(value) {
          if (value > 9999) {
            return (value / 10000) + '万';
          } else {
            return value;
          }
        }
      }
    },
    yAxis: {
      type: 'category',
      data: res.name,
      axisLine: {
        lineStyle:{
          color: '#232f39'
        }
      }
    },
    textStyle: {
      color: '#596b7a'
    },
    series: {
      name: '数量',
      type: 'bar',
      data: res.data,
      barWidth: '12',
      itemStyle: {
        normal: {color: 'rgba(4, 126, 191, 0.6)'}
      }
    }
  };

  if (typeof opt !== 'undefined') {
    return createChart(el, merge({}, option, opt));
  } else {
    return createChart(el, option);
  }
};

// 三柱柱状图
echart.threeBarChart = function(el, data, opt) {
  let series = data.group;
  let ecTheme = getEcTheme()
  for(let i =0; i < series.length; i++) {
    series[i].type = 'bar';
    series[i].itemStyle = {
      normal: {
        color: ecTheme.threeBarChart[i],
        opacity: 0.7
      },
      emphasis: {  // hover时高亮样式
        opacity: 1
      }
    }
  }
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      top: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: data.order,
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      }
    },
    textStyle: {
       color: '#596b7a'
     },
    series: series
  };

  if (typeof opt !== 'undefined') {
    return createChart(el, merge({}, option, opt));
  } else {
    return createChart(el, option);
  }
};

//折柱混合
echart.lineBarChart = function(el, data, opt) {
  let series = data.group;
  let ecTheme = getEcTheme()
  for (let i = 0; i < series.length - 1; i++) {
    series[i].type = 'bar';
    series[i].itemStyle = {
      normal: {
        color: ecTheme.threeBarChart[i],
        opacity: 0.7
      },
      emphasis: {
        opacity: 1
      }
    }
  }
  let line = series[series.length - 1];
  line.smooth = true;
  line.symbol = 'circle';
  line.itemStyle = {
    normal: {
      color: '#60ACFC',
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
  };
  let option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      top: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: data.order,
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      minInterval: 1,
    },
    series: series
  };
  if (typeof opt !== 'undefined') {
    return createChart(el, merge({}, option, opt));
  } else {
    return createChart(el, option);
  }
};

// 折线图
echart.lineChart = function(el, data, opt) {
  let res = getYbarData(data);
  let ecTheme = getEcTheme()
  let option = {
    grid: {
      top: '10px',
      right: '10px',
      bottom: '10px',
      left: '10px',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
      extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px',
      textStyle:{
        color:'rgba(0,0,0,.65)',
        fontSize: 12,
      },
      formatter: '{b}: {c}'
    },
    xAxis: {
      type: 'category',
      data: res.name,
      boundaryGap: false,
      splitLine: {
        show: false
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 12
        }
      },
      axisLine: {
        lineStyle:{
          color: '#232f39'
         }
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: ecTheme.splitLineY
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 12
        }
      },
      axisLine: {
        lineStyle:{
          color: '#232f39'
        }
      },
      minInterval: 1,
    },
    textStyle: {
      color: '#596b7a'
    },
    series: [{
      type: 'line',
      smooth: true,
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 6,
      data: res.data,
      areaStyle: {
        normal: {
          color: 'rgba(4, 126, 191, 0.2)'
        }
      },
      itemStyle: {
        normal: {
          color: 'rgba(4, 126, 191, 1)'
        }
      },
      textStyle: {
        color: '#495967'
      },
      lineStyle: {
        normal: {
          width: 1
        }
      }
    }]
  };
  if (opt) {
    if (opt.dataZoom) {
      option.dataZoom = opt.dataZoom;
    }
  }
  return createChart(el, option);
};

echart.sLineChart = function(el, data, opt) {
  let ecTheme = getEcTheme()
  if (data && data instanceof Array) {
    let res = {
      name: [],
      data: []
    };
    for (let i = 0; i < data.length; i++) {
      res.name.push(data[i].name);
      res.data.push(data[i].value);
    }
    let option = {
      grid: {
        top: '10px',
        right: '10px',
        bottom: '10px',
        left: '10px',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
        extraCssText: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18); border-radius: 2px',
        textStyle:{
          color:'rgba(0,0,0,.65)',
          fontSize: 12,
        },
        formatter: '{b}: {c}'
      },
      xAxis: {
        type: 'category',
        data: res.name,
        boundaryGap: false,
        splitLine: {
          show: false
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle:{
            color: '#232f39'
          }
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: ecTheme.splitLineY
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle:{
            color: '#232f39'
          }
        },
        minInterval: 1,
      },
      textStyle: {
        color: '#596b7a'
      },
      series: [{
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: res.data,
        areaStyle: {
          normal: {
            color: 'rgba(4, 126, 191, 0.2)'
          }
        },
        itemStyle: {
          normal: {
            color: 'rgba(4, 126, 191, 1)'
          }
        },
        textStyle: {
          color: '#495967'
        },
        lineStyle: {
          normal: {
            width: 1
          }
        }
      }]
    };
    if (opt) {
      return createChart(el, merge({}, option, opt));
    } else {
      return createChart(el, option);
    }
  } else {
    console.error('数据格式不正确');
  }
}

/**
 *
 * @param data
 * @returns {{legend: Array, data: Array}}
 */
function getRingData(data) {
  let _color = ['rgba(96, 172, 252,0.6)', 'rgba(91, 196, 159,0.6)', 'rgba(50, 211, 235,0.6)', 'rgba(254, 182, 77,0.6)', 'rgba(255, 124, 124,0.6)', 'rgba(146, 135, 231,0.6)', 'rgba(47, 178, 237,0.6)', 'rgba(54, 206, 200,0.6)', 'rgba(255, 220, 45,0.6)', 'rgba(252, 128, 105,0.6)', 'rgba(98, 109, 225,0.6)', 'rgba(100, 140, 217,0.6)'];
  let color = ['rgba(96, 172, 252,1)', 'rgba(91, 196, 159,1)', 'rgba(50, 211, 235,1)', 'rgba(254, 182, 77,1)', 'rgba(255, 124, 124,1)', 'rgba(146, 135, 231,1)', 'rgba(47, 178, 237,1)', 'rgba(54, 206, 200,1)', 'rgba(255, 220, 45,1)', 'rgba(252, 128, 105,1)', 'rgba(98, 109, 225,1)', 'rgba(100, 140, 217,1)'];
  let res = {
    legend: [],
    data: []
  };
  let i = 0;
  for (let obj in data) {
    res.legend.push(obj);
    res.data.push({
      name: obj,
      value: data[obj],
      itemStyle: {
        normal: {
          color: _color[i]
        },
        emphasis: {
          color: color[i]
        }
      },
      label: {
        normal: {
          show: false,
          textStyle: {
            color: _color[i]
          }
        },
        emphasis: {
          show: false,
          textStyle: {
            color: color[i]
          }
        }
      },
      labelLine: {
        normal: {
          show: false,
          lineStyle: {
            color: _color[i]
          }
        },
        emphasis: {
          show: false,
          lineStyle: {
            color: color[i]
          }
        }
      }
    });
    i++;
  }
  return res;
}
/**
 *
 * @param data
 * @returns {{name: Array, data: Array}}
 */
function getBarData(data) {
  let res = {
    name: [],
    data: []
  };
  let i = 0;
  for(let item in data) {
    res.name.push(item);
    res.data.push({
      value: data[item]
    });
  }
  return res;
}
/**
 *
 * @param data
 * @returns {{name: Array, data: Array}}
 */
function getYbarData(data) {
  let res = {
    name: [],
    data: []
  };
  for(let item in data) {
    res.name.push(item);
    res.data.push(data[item]);
  }
  return res;
}


echart.createChart = createChart;
export default echart;
