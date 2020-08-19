<template>
  <div class="example-code">
    <slot></slot>
    <div class="example-code-more example-collapse">
      <i :class="iconClass" @click="toggle"></i>
    </div>
  </div>
</template>

<script>
  import Hljs from "highlightjs/highlight.pack.min";
  import "./theme-dark/code-theme.css";
  import "./theme-chalk/code-theme.css";
  import "./theme-tea/code-theme.css";
  import "./theme-fanta/code-theme.css";
  export default {
    name: 'example-code',

    data() {
      return {
        status: 'collapse'
      }
    },

    computed: {
      iconClass() {
        return `iconfont icon-${this.status === 'collapse' ? 'bottom' : 'top'}`
      }
    },

    methods: {
      toggle() {
        if (this.status === 'collapse') {
          let preHeight = this.$el.querySelector('pre').clientHeight;
          this.$el.style.height = `${preHeight}px` ;
          this.$el.querySelector("div.example-code-more").className = 'example-code-more';
          this.status = 'expand';
        } else {
          this.$el.style.height = '100px';
          this.$el.querySelector("div.example-code-more").className = 'example-code-more example-collapse';
          this.status = 'collapse';
        }
      }
    },

    mounted() {
      let blocks = this.$el.querySelector("pre code");
      if (blocks) {
        blocks.className = "xml";
        let textarea = blocks.parentNode.parentNode.querySelector("textarea");
        if (textarea) {
          blocks.innerText = textarea.value;
          Hljs.highlightBlock(blocks);
          let preHeight = this.$el.querySelector('pre').clientHeight;
          if (preHeight < 110) {
            this.$el.querySelector('.example-code-more').style.display = 'none';
          }
        }
      }
    }
  }
</script>