import Hljs from "highlightjs/highlight.pack.min";
import "../theme-dark/code-theme.css";
import "../theme-chalk/code-theme.css";
import "../theme-tea/code-theme.css";
import "../theme-fanta/code-theme.css";

let i = document.createElement("i");
i.className = 'iconfont icon-bottom';
let div = document.createElement("div");
div.className = 'example-code-more';
div.appendChild(i);

export default {
  mounted() {
    let blocks = this.$el.querySelectorAll("pre code");
    if (blocks.length > 0) {
      for (let i=0; i < blocks.length; i++) {
        let _div = div.cloneNode(true);
        blocks[i].className = "xml";
        blocks[i].parentNode.parentNode.appendChild(_div);
        let textarea = blocks[i].parentNode.parentNode.querySelector("textarea");
        if (textarea) {
          blocks[i].innerText = textarea.value;
          Hljs.highlightBlock(blocks[i]);
        }
      }
    }
  }
}