import Vue from "vue";
import VueRouter from "vue-router";
import Sunflower from "../src/";
import App from "./App";
import Marked from "./marked";
import Copy from "./copy";
import Tb from "./tb/Tb";
import TbI from "./tb/TbI";
import ExampleCode from './Example-code'
import './theme-dark/demo.css'
import './theme-chalk/demo.css'
import './theme-tea/demo.css'
import './theme-fanta/demo.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Sunflower);
Vue.use(Marked);
Vue.use(Copy);

import Diy from './diy/modules';
Vue.use(Diy);

Vue.component(Tb.name, Tb);
Vue.component(TbI.name, TbI);
Vue.component(ExampleCode.name, ExampleCode)

const router = new VueRouter({
  routes: [
    {
      path: "/components", component: require("./Components").default,
      children: [
        {path: "", component: require("./Alert").default},
        {path: "alert", component: require("./Alert").default},
        {path: "audio", component: require("./Audio").default},
        {path: "badge", component: require("./Badge").default},
        {path: "box", component: require("./Box").default},
        {path: "breadcrumb", component: require("./Breadcrumb").default},
        {path: "button", component: require("./Button").default},
        {path: "card", component: require("./Card").default},
        {path: "card-diy", component: require("./CardDiy").default},
        {path: "carousel", component: require("./Carousel").default},
        {path: "cascader", component: require("./Cascader").default},
        {path: "checkbox", component: require("./Checkbox").default},
        {path: "collapse", component: require("./Collapse").default},
        {path: "date-picker", component: require("./Date-picker").default},
        {path: "date-time-picker", component: require("./DatetimePicker").default},
        {path: "dialog", component: require("./Dialog").default},
        {path: "dropdown", component: require("./Dropdown").default},
        {path: "form", component: require("./Form").default},
        {path: "grid", component: require("./Grid").default},
        {path: "grid-flex", component: require("./GridFlex").default},
        {path: "input", component: require("./Input").default},
        {path: "input-number", component: require("./Input-number").default},
        {path: "loading", component: require("./Loading").default},
        {path: "menu", component: require("./Menu").default},
        {path: "message", component: require("./Message").default},
        {path: "message-box", component: require("./Message-box").default},
        {path: "notification", component: require("./Notification").default},
        {path: "pagination", component: require("./Pagination").default},
        {path: "popover", component: require("./Popover").default},
        {path: "progress", component: require("./Progress").default},
        {path: "rate", component: require("./Rate").default},
        {path: "radio", component: require("./Radio").default},
        {path: "scrollbar", component: require("./Scrollbar").default},
        {path: "search-group", component: require("./Search-group").default},
        {path: "slider", component: require("./Slider").default},
        {path: "steps", component: require("./Steps").default},
        {path: "switch", component: require("./Switch").default},
        {path: "table", component: require("./Table").default},
        {path: "table-page", component: require("./TablePage").default},
        {path: "tabs", component: require("./Tabs").default},
        {path: "tag", component: require("./Tag").default},
        {path: "time-picker", component: require("./Time-picker").default},
        {path: "time-select", component: require("./Time-select").default},
        {path: "tooltip", component: require("./Tooltip").default},
        {path: "transfer", component: require("./Transfer").default},
        {path: "tree", component: require("./Tree").default},
        {path: "select", component: require("./Select").default},
        {path: "upload", component: require("./Upload").default},
        {path: "icon", component: require("./Icon").default},
        {path: "loading-bar", component: require("./LoadingBar").default},
        {path: "timeline", component: require("./Timeline").default},
        {path: "spin", component: require("./Spin").default},
        {path: "roleCollapse", component: require("./RoleCollapse").default},
        {path: "drawer", component: require("./Drawer").default}
      ]
    },
    {
      path: "/echarts", component: require("./Echarts").default,
      children: [
        {path: "", component: require("./echarts/Introduce").default},
        {path: "introduce", component: require("./echarts/Introduce").default},
        {path: "ring", component: require("./echarts/Ring").default},
        {path: "statring", component: require("./echarts/Statring").default},
        {path: "pie", component: require("./echarts/Pie").default},
        {path: "gauge", component: require("./echarts/Gauge").default},
        {path: "bar", component: require("./echarts/Bar").default},
        {path: "line", component: require("./echarts/Line").default},
        {path: "area", component: require("./echarts/Area").default},
        {path: "charts", component: require("./echarts/Charts").default}
      ]
    },
    {
      path: '/diy', component: require('./diy/index').default,
      children: [
        {path: '', component: require('./diy/Page1').default},
        {path: 'page1', component: require('./diy/Page1').default}
      ]
    }
  ]
});

new Vue({
  el: "#app",
  router,
  render: h => h(App),
  mounted() {
    if (window.location.hash === '#/') {
      router.push('/components');
    }
    // 没有展开的添加展开
    this.$nextTick(() => {
      window.setTimeout(() => {
        setOpenAble()
      }, 500)
    })
  }
});

// 没有展开的添加展开
router.afterEach((to, from) => {
  window.setTimeout(() => {
    setOpenAble()
  }, 500)
})

// 没有展开的添加展开
function setOpenAble() {
  let exampleCodes = [...document.querySelectorAll('.example-code')].filter(item => {
    if (item.querySelectorAll('.example-code-more').length > 0) {
      return false
    }
    let open = false
    let height = item.querySelector('pre').offsetHeight + 40 + 'px'
    let i = document.createElement('i')
    i.setAttribute('class', 'iconfont icon-bottom')
    i.setAttribute('data-open', 'false')
    i.style.display = 'inline-block'
    i.style.width = '100%'
    i.style.height = '40px'
    i.style.lineHeight = '60px'
    i.style.textAlign = 'center'
    i.style.position = 'absolute'
    i.style.left = '50%'
    i.style.transform = 'translateX(-50%)'
    i.style.bottom = '0'
    item.appendChild(i)
    i.addEventListener('click', (e) => {
      if (open === false) {
        open = true
        i.style.transform = 'translateX(-50%) rotate(180deg)'
        i.style.lineHeight = '20px'
        item.style.height = height
      } else {
        item.style.height = ''
        open = false
        i.style.lineHeight = '60px'
        i.style.transform = 'translateX(-50%)'
      }
    })
    return true
  })
}
