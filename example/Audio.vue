<template>
  <article class="article">
    <h1 id="button-an-niu"> 音频播放器: 用于提供告警消息的声音 </h1>
    <h3> 基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <s-button @click="play">播放</s-button>
        <s-button @click="play2">播放2</s-button>
        <s-button @click="play3">播放3</s-button>
        <s-button @click="show">显示</s-button>
        <s-button @click="hide">隐藏</s-button>
      </div>
      <div class="example-code">
          <pre>
            <code>
&lt;template&gt;
  &lt;s-button type=&quot;success&quot; @click=&quot;play&quot;&gt;播放&lt;/s-button&gt;
  &lt;s-button type=&quot;warning&quot; @click=&quot;play2&quot;&gt;播放2&lt;/s-button&gt;
  &lt;s-button type=&quot;danger&quot; @click=&quot;play3&quot;&gt;播放3&lt;/s-button&gt;
  &lt;s-button type=&quot;info&quot; @click=&quot;show&quot;&gt;显示&lt;/s-button&gt;
  &lt;s-button type=&quot;info&quot; @click=&quot;hide&quot;&gt;隐藏&lt;/s-button&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      play() {
        this.$audio().play();
      },
      play2() {
        this.$audio({src:'./static/res/error.mp3'}).play();
      },
      play3() {
        this.$audio({src:'./static/res/alarm.mp3'}).play();
      },
      show() {
        this.$audio({show:true}).play();
      },
      hide(){
        this.$audio({show:false}).play();
      }
    }
   }
&lt;/script&gt;
            </code>
          </pre>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    methods: {
      play() {
        this.$audio().play();
      },
      play2() {
        this.$audio({src: '/static/res/error.mp3'}).play();
      },
      play3() {
        this.$audio({src: '/static/res/alarm.mp3'}).play();
      },
      show() {
        this.$audio({show: true}).play();
      },
      hide(){
        this.$audio({show: false}).play();
      }
    }
  }
</script>
