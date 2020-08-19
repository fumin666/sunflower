import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlightjs/highlight.pack').highlightAuto(code).value;
  }
});

let install = function(Vue) {
  /* istanbul ignore if */
  if (install.installed) return;
  Vue.directive('marked', {
    // 这儿只用Bind钩子，不能使用Update钩子
    bind: function(el, binding, vnode) {
      el.innerHTML = marked(el.innerText);
    }
  })
};

export default install;
