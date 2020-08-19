<template>
  <div class="s-go">
    <div class="s-go-head" :style="{textAlign: align}">{{title}}</div>
    <i v-if="icon" :class="iClass" @click="hanldeClick"></i>
    <s-scrollbar :wrap-class="bodyClass">
      <div class="s-go-item" v-for="item in data">
        <template v-if="prop">{{showText(item)}}</template>
        <template v-else>{{item}}</template>
      </div>
    </s-scrollbar>
  </div>
</template>

<script>
  export default {
    name: 's-go',
    props: {
      title: {
        required: true,
        type: String
      },
      align: {
        default: 'center',
        type: String
      },
      icon: {
        type: String
      },
      bodyClass: {
        default: 's-go-height',
        type: String
      },
      data: {
        type: Array,
        default() {
          return [];
        }
      },
      prop: {
        type: Array
      }
    },
    computed: {
      iClass() {
        return `iconfont icon-${this.icon}`;
      }
    },
    methods: {
      hanldeClick() {
        this.$emit('config');
      },
      showText(item) {
        let str = '';
        for (let i = 0; i < this.prop.length; i++) {
          let _prop = this.prop[i];
          if (!item[_prop]) {
            item[_prop] = '';
          }
          if (i === 0) {
            str += item[_prop];
          } else if (i === 1) {
            if (this.prop.length < 3) {
              str += ('(' + item[_prop] + ')');
            } else {
              str += ('(' + item[_prop]);
            }
          } else {
            str += ':' + item[_prop];
            if (i === this.prop.length - 1) {
              str += ')';
            }
          }
        }
        return str;
      }
    }
  }
</script>