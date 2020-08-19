<template>
  <div class="s-search-group">
    <div class="s-search-group-wrapper" ref="wrapper">
      <div class="s-search-group-form">
        <div class="s-search-group-field" ref="form">
          <slot></slot>
        </div>
        <div class="s-search-group-buttons" ref="btn">
          <slot name="btn-pre"></slot>
          <s-button @click="searchHandler">查询</s-button>
          <slot name="btn-next"></slot>
        </div>
      </div>
    </div>
    <div class="s-search-group-arrow" @click="bottomArrowHandler" v-show="ifShowBottomArrow">
      <i :class="bottomArrow"></i>
    </div>
  </div>
</template>
<script type="text/babel">
  export default{
    name: 'sSearchGroup',
    data() {
      return {
        bottomArrowDirection: 'down',
        classMap: {
          'up': 'iconfont icon-top',
          'down': 'iconfont icon-bottom'
        },
        originHeight: 0,
        btnHeight: 0,
        getOriginHeight: null
      }
    },
    props: {
      bottomArrowShow: {
        type: Boolean,
        default: false
      },
      bodyHeight: {
        type: Number,
        default: 50
      },
      searchHandler: {
        type: Function
      }
    },
    computed: {
      wrapperStyle(){
        return {'height': this.bodyHeight + 'px'}
      },
      bottomArrow() {
        return this.classMap[this.bottomArrowDirection];
      },
      ifShowBottomArrow() {
        if (this.originHeight > this.bodyHeight&&this.bottomArrowShow) {
          return true;
        } else {
          return false;
        }
      }
    },
    mounted() {
      let that = this;
      if(this.bottomArrowShow){
        that.$refs.wrapper.style.height = that.bodyHeight + 'px';
      }
      this.$nextTick(function () {
        that.originHeight = that.$refs.form.offsetHeight;
        this.getOriginHeight = function () {
          that.getOriginHeightMethod(true)
        }
      });
      //todoalex: 太复杂回头整理(无法支持select下拉选择框)
      window.addEventListener('resize', function () {
        setTimeout(that.getOriginHeightMethod, 50);
      });
    },
    beforeDestroy () {
      let that = this;
      window.removeEventListener('resize', that.getOriginHeightMethod);
    },
    methods: {
      reserve(direction) {
        return direction === 'up' ? 'down' : 'up';
      },
      change(direction){
        return direction === 'up' ? this.originHeight + 'px' : this.bodyHeight + 'px';
      },
      bottomArrowHandler() {
        this.bottomArrowDirection = this.reserve(this.bottomArrowDirection);
        this.$refs.wrapper.style.height = this.change(this.bottomArrowDirection);
      },
      changeHeight() {
        this.$nextTick(() => {
          this.getOriginHeightMethod()
        })
      },
      getOriginHeightMethod(inner) {
        let that = this
        if (that.$refs.form) {
          that.originHeight = that.$refs.form.offsetHeight;
          if (that.$refs.form.offsetHeight < parseInt(that.$refs.wrapper.style.height)) {
            if (that.$refs.form.offsetHeight !== 0) {
              that.$refs.wrapper.style.height = that.$refs.form.offsetHeight + 'px';
            }
            if (that.$refs.form.offsetHeight < that.bodyHeight) {
              that.bottomArrowDirection = 'down';
            }
          }
        }
        if (that.bottomArrowDirection === 'up') {
          this.$refs.wrapper.style.height = this.originHeight + 'px';
        }
      }
    }
  }
</script>
