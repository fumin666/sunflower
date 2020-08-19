<template>
    <article class="article">
        <h1>LoadingBar 页面加载进度条</h1>

        <p>全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。</p>
        <h3>说明</h3>
        <p>LoadingBar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar 会模拟进度，当然也可以通过update()方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。</p>
        <p>在路由中使用</p>
            <pre><code>
            // 部分代码省略
            router.beforeEach((to, from, next) => {
                this.$Loading.start();;
                next();
            });

            router.afterEach((to, from, next) => {
                this.$Loading.finish();
            });
            </code></pre>
        <p>在异步请求中使用</p>
            <pre><code>
            //部分代码省略
            import $ from 'jquery';
            export default {
                methods: {
                    getData () {
                        this.$Loading.start();
                        $.ajax({
                            url: '/api/someurl',
                            type: 'get',
                            success: () => {
                                this.$Loading.finish();
                            }
                            error: () => {
                                this.$Loading.error();
                            }
                        });
                    }
                }
            }
            </code></pre>
        <h3>使用测试</h3>
        <div>
            <s-button @click.native="start">Start</s-button>
            <s-button @click.native="finish">Finish</s-button>
            <s-button @click.native="error">Error</s-button>
        </div>
        <h3 id="options">API</h3>
        <table class="table">
            <thead>
            <tr>
                <th>函数</th>
                <th>说明</th>
                <th>参数</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>this.$Loading.start()</td>
                <td>开始显示进度条</td>
                <td>无</td>
            </tr>
            <tr>
                <td>this.$Loading.finish()</td>
                <td>结束并隐藏进度条</td>
                <td>无</td>
            </tr>
            <tr>
                <td>this.$Loading.error()</td>
                <td>发生错误时候的进度条变化</td>
                <td>无</td>
            </tr>
            <tr>
                <td>this.$Loading.update(percent)</td>
                <td>精确加载到指定的进度</td>
                <td>percent</td>
            </tr>
            <tr>
                <td>this.$Loading.config(options)</td>
                <td>全局初始化</td>
                <td>color,failedColor,height</td>
            </tr>
            <tr>
                <td>this.$Loading.destroy()</td>
                <td>全局销毁</td>
                <td>无</td>
            </tr>
            </tbody>
        </table>
    </article>
</template>
<script>
  export default {
    methods: {
      start () {
        this.$Loading.start();
      },
      finish () {
        this.$Loading.finish();
      },
      error () {
        this.$Loading.error();
      }
    },
    created () {
      this.$Loading.config({
        height: 3
      });
    }
  }
</script>