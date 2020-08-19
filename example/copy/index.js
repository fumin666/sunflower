import Copy from "./Copy";

const install = function(Vue, opts = {}) {
    Vue.component('s-copy',Copy)
}

export default {install,Copy};