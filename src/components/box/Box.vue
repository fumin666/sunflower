<template>
  <div class="s-box" :class="`s-box-${type}`" :style="`width:${width};`">
    <div class="s-box-item" v-for="(item,index) in barArray" :style="`width:${item.width};`" @click="clickAction(data[index])" :class="{ clickable: data[index].clickable }">
      <div class="s-box-item-icon" :title="!data[index].clickable ? data[index].title : '点击查看' + data[index].title">
        <i :class="`iconfont icon-${data[index].icon}`" :style="`color:${data[index].color}`"></i>
        <i :class="`s-box-icon-pop iconfont icon-${data[index].type}`" :style="`color:${data[index].color}`"
           v-show="type == 'big' && data[index].type"></i>
      </div>
      <div class="s-box-item-content-wrapper" :title="!data[index].clickable ? data[index].title : '点击查看' + data[index].title">
          <div class="s-box-item-title">{{data[index].title}}</div>
          <div class="s-box-item-des">{{data[index].des}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
    // width,height,icon格式,是否显示Header, 分栏条数
    export default {
        name: 'sBox',
        data() {
            return {
                barArray: ['100%'],
                headerHeight: 0
            };
        },
        created() {
            let reBars = [];
            if (typeof this.bars === 'number') {
                let bar = 100 / this.bars;
                for (let i = 0; i < this.bars; i++) {
                    reBars.push({
                        index: i + 1,
                        width: bar + '%'
                    });
                }
            } else if (typeof this.bars === 'object' && this.bars.length) {
                let count = 0;
                for (let i = 0; i < this.bars.length; i++) {
                    count += this.bars[i];
                }
                let minBar = 100 / count;
                reBars = this.bars.map(function (value, index) {
                    return {
                        index: index,
                        width: minBar * value + '%'
                    };
                });
            }
            this.barArray = reBars;
        },
        props: {
            data: {
                type: Array
            },
            height: {
                type: String,
                default: '80px'
            },
            width: {
                type: String,
                default: '100%'
            },
            bars: {
                type: [Number, Array],
                default: 1
            },
            type: {
                // horizontal, vertical, big
                type: String,
                default: 'horizontal'
            },
            clickAction: {
                type: Function,
                default: () => {}
            }
        }
    };
</script>
<style>
    .clickable{
        cursor: pointer;
    }
</style>
