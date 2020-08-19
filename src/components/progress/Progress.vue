<template>
  <div
    class="s-progress"
    :class="[
      's-progress-' + type,
      status ? 'is-' + status : '',
      {
        's-progress-without-text': !showText,
        's-progress-text-inside': textInside,
      }
    ]"
  >
    <div class="s-progress-bar" v-if="type === 'line'">
      <div class="s-progress-bar-outer" :style="{height: strokeWidth + 'px'}">
        <div class="s-progress-bar-inner" :style="barStyle">
          <div
            v-if="showText && textInside"
            class="s-progress-bar-innerText"
            :style="progressInsideTextStyle">
            {{percentage}}%
          </div>
        </div>
      </div>
    </div>
    <div class="s-progress-circle" :style="{height: width + 'px', width: width + 'px'}" v-else>
      <svg viewBox="0 0 100 100">
        <path class="s-progress-circle-track" :d="trackPath" stroke="#e5e9f2" :stroke-width="relativeStrokeWidth" fill="none"></path>
        <path class="s-progress-circle-path" :d="trackPath" stroke-linecap="round" :stroke="stroke" :stroke-width="relativeStrokeWidth" fill="none" :style="circlePathStyle"></path>
      </svg>
    </div>
    <div
      class="s-progress-text"
      v-if="showText && !textInside"
      :style="{fontSize: progressTextSize + 'px'}">
      <i v-if="showIcon" :class="iconClass"></i>
      <span v-if="!showIcon">{{percentage}}%</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sProgress',
    props: {
      type: {
        type: String,
        default: 'line',
        validator: val => ['line', 'circle'].indexOf(val) > -1
      },
      percentage: {
        type: Number,
        default: 0,
        required: true,
        validator: val => val >= 0 && val <= 100
      },
      status: {
        type: String
      },
      strokeWidth: {
        type: Number,
        default: 16
      },
      textInside: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 126
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      barStyle() {
        var style = {};
        style.width = this.percentage + '%';
        style.height = this.strokeWidth + 'px';
        return style;
      },
      relativeStrokeWidth() {
        return (this.strokeWidth / this.width * 100).toFixed(1);
      },
      trackPath() {
        var radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);

        return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
      },
      perimeter() {
        var radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
        return 2 * Math.PI * radius;
      },
      circlePathStyle() {
        var perimeter = this.perimeter;
        return {
          strokeDasharray: `${perimeter}px,${perimeter}px`,
          strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
          transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        };
      },
      stroke() {
        var ret;
        switch (this.status) {
          case 'success':
            ret = '#20d15a';
            break;
          case 'error':
            ret = '#f51131';
            break;
          case 'warning':
            ret = '#ffc001';
            break;
          case 'disabled':
            ret = '#565b5d';
            break;
          default:
            ret = '#00aeff';
        }
        return ret;
      },
      showIcon() {
        if (!this.status){
          return false;
        } else {
          if (this.status === 'error' || this.status === 'success') {
            return true
          }
        }
      },
      iconClass() {
        if (this.type === 'line') {
          return this.status === 'success' ? 'iconfont icon-correct-bold' : 'iconfont icon-error-bold';
        } else {
          return this.status === 'success' ? 'iconfont icon-correct-bold' : 'iconfont icon-error-bold';
        }
      },
      progressTextSize() {
        return this.type === 'line'
          ? 9 + this.strokeWidth * 0.4
          : this.width * 0.111111 + 2;
      },
      progressInsideTextStyle() {
        let style = {}
        if (this.type === 'line') {
          style.fontSize = 9 + this.strokeWidth * 0.2 + 'px';
          style.lineHeight = this.strokeWidth - 1 + 'px';
          return style
        } else {
          return this.width * 0.111111 + 2;
        }
      }
    }
  };
</script>
