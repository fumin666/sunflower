<template>
    <s-scrollbar wrap-style="height: calc(100vh);">
        <div class="demo">
            <header>
                <s-row class="header" type="flex" align="middle">
                    <s-col class="logo" :span="12">
                        <img src="../sunflower.png" alt="sunflower"/>
                        SunFlower（Vue2.5+组件库）
                    </s-col>
                    <s-col :span="12">
                        <s-row type="flex" align="middle">
                            <s-col :span="21">
                                <div class="menu">
                                    <router-link to="/components" tag="li">组件</router-link>
                                    <router-link to="/echarts" tag="li">Echarts</router-link>
                                    <router-link to="/diy" tag="li">自定义页面</router-link>
                                </div>
                            </s-col>
                            <s-col :span="3">
                                <s-dropdown trigger="click" @on-click="setTheme">
                                    <s-button>色彩<i class="iconfont icon-bottom"></i></s-button>
                                    <s-dropdown-menu slot="list">
                                        <s-dropdown-item name="dark">黑暗</s-dropdown-item>
                                        <s-dropdown-item name="chalk">黎明</s-dropdown-item>
                                        <s-dropdown-item name="tea">绿茶</s-dropdown-item>
                                        <s-dropdown-item name="fanta">芬达</s-dropdown-item>
                                    </s-dropdown-menu>
                                </s-dropdown>
                            </s-col>
                        </s-row>

                    </s-col>
                </s-row>
            </header>
            <router-view></router-view>
        </div>
    </s-scrollbar>
</template>
<script>
  export default {
    mounted () {
      this.$nextTick(() => {
        let mainTheme = localStorage.getItem('theme') || 'dark'
        let themeLink = document.querySelector('link[name="theme"]')
        let path = themeLink.getAttribute('href')
        let idx = path.lastIndexOf('\/')
        let targetStr = path.substring(idx + 1, path.length - 4)
        let newStr = path.replace(targetStr, mainTheme)
        themeLink.setAttribute('href', newStr)
      })
    },
    methods: {
      setTheme (val) {
        this.$nextTick(() => {
          let mainTheme = val
          this.changePath(mainTheme)
          localStorage.setItem('theme', mainTheme)
          this.$eventBus.$emit('rebuild')
        })
      },
      changePath (str) {
        let themeLink = document.querySelector('link[name="theme"]')
        let path = themeLink.getAttribute('href')
        let idx = path.lastIndexOf('\/')
        let targetStr = path.substring(idx + 1, path.length - 4)
        let newStr = path.replace(targetStr, str)
        themeLink.setAttribute('href', newStr)
      }
    }
  }
</script>