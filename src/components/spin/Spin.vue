/**
* Created by alex on 2017/8/15.
 */
 
<template>
    <div class="s-spin-main">
        <pulse-loader :class="classes" v-if="pulseShow" :color="color" :size="size"></pulse-loader>
        <clip-loader :class="classes"  v-if="clipShow" :color="color" :size="size"></clip-loader>
        <beat-loader :class="classes" v-if="beatShow" :color="color" :size="size"></beat-loader>
        <scale-loader :class="classes" v-if="scaleShow" :color="color" :height="height" :width="width"></scale-loader>
        <moon-loader :class="classes" v-if="moonShow" :color="color" :size="size"></moon-loader>
    </div>
</template>

<script type="text/babel">
import pulseLoader from './PulseLoader'
import clipLoader from './ClipLoader'
import beatLoader from './BeatLoader'
import scaleLoader from './ScaleLoader'
import moonLoader from './MoonLoader'
export default {
  name: 'sSpin',
  components: { pulseLoader, clipLoader, beatLoader, scaleLoader, moonLoader },
  computed: {
    classes() {
      return {
        [`s-spin-fix`]: this.fix
      }
    },
    pulseShow() {
      let flag
      (this.type === 'pulse') ? flag = true : flag = false
      return flag
    },
    clipShow() {
      let flag
      (this.type === 'clip') ? flag = true : flag = false
      return flag
    },
    beatShow() {
      let flag
      (this.type === 'beat') ? flag = true : flag = false
      return flag
    },
    fadeShow() {
      let flag
      (this.type === 'fade') ? flag = true : flag = false
      return flag
    },
    scaleShow() {
      let flag
      (this.type === 'scale') ? flag = true : flag = false
      return flag
    },
    moonShow() {
      let flag
      (this.type === 'moon') ? flag = true : flag = false
      return flag
    }
  },
  props: {
    fix: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    size: {
      type: String
    },
    height: {
      type: String
    },
    width: {
      type: String
    },
    type: {
      type: String,
      default: 'pulse',
    }
  }
}
</script>

<style>
    .s-spin-main {
        width: 100%;
        height: 100%;
    }
    .s-spin-fix {
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
    }
</style>