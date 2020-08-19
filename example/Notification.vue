<template>
  <article class="article">
    <h1>Notification 通知</h1>
    <h3> 基本用法</h3>
    <div class="example">
      <div class="example-demo">
        <s-button
          plain
          @click="open">
          可自动关闭
        </s-button>
        <s-button
          plain
          @click="open2">
          不会自动关闭
        </s-button>
      </div>
      <example-code>
        <textarea>
          &lt;template&gt;
            &lt;s-button
              plain
              @click="open"&gt;
              可自动关闭
            &lt;/s-button&gt;
            &lt;s-button
              plain
              @click="open2"&gt;
              不会自动关闭
              &lt;/s-button&gt;
          &lt;/template&gt;

          &lt;script&gt;
            export default {
              methods: {
                open() {
                  const h = this.$createElement;

                  this.$notify({
                    title: '标题名称',
                    message: h('p', { style: 'color: red'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
                  });
                },

                open2() {
                  this.$notify({
                    title: '提示',
                    message: '这是一条不会自动关闭的消息',
                    duration: 0
                  });
                }
              }
            }
          &lt;/script&gt;
        </textarea>
        <div class="description">
          <p>Notification 组件提供通知功能，Element 注册了<code>$notify</code>方法，接收一个<code>options</code>字面量参数，在最简单的情况下，你可以设置<code>title</code>字段和<code>message</code>字段，用于设置通知的标题和正文。默认情况下，经过一段时间后
            Notification 组件会自动关闭，但是通过设置<code>duration</code>，可以控制关闭的时间间隔，特别的是，如果设置为<code>0</code>，则不会自动关闭。注意：<code>duration</code>接收一个<code>Number</code>，单位为毫秒，默认为<code>4500</code>。
          </p>
        </div>
        <pre><code>
        </code></pre>
      </example-code>
    </div>

    <h3> 带有倾向性</h3>
    <div class="example">
      <div class="example-demo">
        <s-button
          plain
          @click="open3">
          成功
        </s-button>
        <s-button
          plain
          @click="open4">
          警告
        </s-button>
        <s-button
          plain
          @click="open5">
          消息
        </s-button>
        <s-button
          plain
          @click="open6">
          错误
        </s-button>
      </div>
      <example-code>
        <textarea>
          &lt;template&gt;
            &lt;s-button
              plain
              @click="open3"&gt;
              成功
            &lt;/s-button>
            &lt;s-button
              plain
              @click="open4"&gt;
              警告
            &lt;/s-button&gt;
            &lt;s-button
              plain
              @click="open5"&gt;
              消息
            &lt;/s-button&gt;
            &lt;s-button
              plain
              @click="open6"&gt;
              错误
            &lt;/s-button&gt;
          &lt;/template&gt;

          &lt;script&gt;
            export default {
              methods: {
                open3() {
                  this.$notify({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    type: 'success'
                  });
                },

                open4() {
                  this.$notify({
                    title: '警告',
                    message: '这是一条警告的提示消息',
                    type: 'warning'
                  });
                },

                open5() {
                  this.$notify.info({
                    title: '消息',
                    message: '这是一条消息的提示消息'
                  });
                },

                open6() {
                  this.$notify.error({
                    title: '错误',
                    message: '这是一条错误的提示消息'
                  });
                }
              }
            }
          &lt;/script&gt;
        </textarea>
        <div class="description">
          <p>Element 为 Notification 组件准备了四种通知类型：<code>success</code>, <code>warning</code>,
            <code>info</code>, <code>error</code>。通过<code>type</code>字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type
            注册了方法，可以在不传入<code>type</code>字段的情况下像<code>open5</code>和<code>open6</code>那样直接调用。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>带有偏移</h3>
    <div class="example">
      <div class="example-demo">
        <s-button
          plain
          @click="open7">
          偏移的消息
        </s-button>
      </div>
      <example-code>
        <textarea>
          &lt;template&gt;
            &lt;s-button
              plain
              @click="open7"&gt;
              偏移的消息
            &lt;/s-button&gt;
          &lt;/template&gt;

          &lt;script&gt;
            export default {
              methods: {
                open7() {
                  this.$notify.success({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    offset: 500
                  });
                }
              }
            }
          &lt;/script&gt;
        </textarea>
        <div class="description"><p>Notification 提供设置偏移量的功能，通过设置 <code>offset</code>
          字段，可以使弹出的消息距屏幕顶部偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>使用HTML片段</h3>
    <div class="example">
      <div class="example-demo">
        <s-button
          plain
          @click="openHTML">
          使用HTML片段
        </s-button>
      </div>
      <example-code>
        <textarea>
          &lt;template&gt;
            &lt;s-button
              plain
              @click="openHTML"&gt;
              使用HTML片段
            &lt;/s-button&gt;
          &lt;/template&gt;

          &lt;script&gt;
            export default {
              methods: {
                openHTML() {
                  this.$notify({
                    title: 'HTML 片段',
                    dangerouslyUseHTMLString: true,
                    message: '<strong>这是 <i>HTML</i> 片段</strong>'
                  });
                }
              }
            }
          &lt;/script&gt;
        </textarea>
        <div class="description"><p>将<code>dangerouslyUseHTMLString</code>属性设置为 true，message 就会被当作 HTML 片段处理。</p></div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <div class="warning"><p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，
        因为容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。
        因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，
        <strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p>
    </div>

    <h3>隐藏关闭按钮</h3>
    <p>可以不显示关闭按钮</p>
    <div class="example">
      <div class="example-demo">
        <s-button
          plain
          @click="openShoeClose">
          隐藏关闭按钮
        </s-button>
      </div>
      <example-code>
        <textarea>
          &lt;template&gt;
            &lt;s-button
              plain
              @click="openShoeClose"&gt;
              隐藏关闭按钮
            &lt;/s-button&gt;
          &lt;/template&gt;

          &lt;script&gt;
            export default {
              methods: {
                openShoeClose() {
                  this.$notify.success({
                    title: 'Info',
                    message: '这是一条没有关闭按钮的消息',
                    showClose: false
                  });
                }
              }
            }
          &lt;/script&gt;
        </textarea>
        <div class="description"><p>Notification 提供设置偏移量的功能，通过设置 <code>offset</code>
          字段，可以使弹出的消息距屏幕顶部偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3> 全局方法</h3>
    <p>Element 为 <code>Vue.prototype</code> 添加了全局方法 <code>$notify</code>。因此在 vue instance 中可以采用本页面中的方式调用 Notification。</p>

    <h3> 单独引用</h3>
    <p>单独引入 Notification：</p>
    <p>import { Notification } from 'element-ui';</p>
    <p>此时调用方法为 <code>Notification(options)</code>。我们也为每个 type 定义了各自的方法，如 <code>Notification.success(options)</code>。</p>

    <h3 id="options"> Options</h3>
    <s-tb>
      <s-tb-i title="title" desc="标题" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="message" desc="文字" type="string/Vue.VNode" value="-" init="-"></s-tb-i>
      <s-tb-i title="dangerouslyUseHTMLString" desc="是否将 message 属性作为 HTML 片段处理" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="type" desc="主题样式，如果不在可选值内将被忽略" type="string" value="success/warning/info/error" init="-"></s-tb-i>
      <s-tb-i title="iconClass" desc="自定义图标的类名。若设置了 type，则 iconClass 会被覆盖" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="customClass" desc="自定义类名" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="duration" desc="显示时间, 毫秒。设为 0 则不会自动关闭" type="number" value="-" init="4500"></s-tb-i>
      <s-tb-i title="showClose" desc="是否显示关闭按钮" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="onClose" desc="关闭时的回调函数" type="function" value="-" init="-"></s-tb-i>
      <s-tb-i title="onClick" desc="点击 Notification 时的回调函数" type="function" value="-" init="-"></s-tb-i>
      <s-tb-i title="offset" desc="偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量" type="number" value="-" init="0"></s-tb-i>
    </s-tb>

    <h3> 方法</h3>
    <p>调用 <code>Notification</code> 或 <code>this.$notify</code> 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的<code>close</code> 方法</p>
    <table class="table">
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>close</td>
        <td>关闭当前的 Notification</td>
      </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      open() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('p', {style: 'color: red'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'),
          offset: 10
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0,
          offset: 10
        });
      },

      open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success',
          offset: 10
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning',
          offset: 10
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息',
          offset: 10
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息',
          offset: 10
        });
      },

      open7() {
        this.$notify.success({
          title: '成功',
          message: 'NO' + Math.floor(Math.random()*400 + 100) + ':这是一条成功<br>的提示消息' + new Date().toUTCString(),
          offset: 500
        });
      },

      openHTML() {
        let msg = 'hellow world!'
        this.msg = '哈喽！佩奇'
        let Notify=this.$notify({
          title: 'HTML 片段',
          dangerouslyUseHTMLString: true,
          message: `<strong>${msg}</strong><br><button class="htmlnotify s-button s-button-default" style="float: right">已读</button>`,
          showClose: false,
          duration: 0,
          onClose:this.closeCallback
        });
        function read() {
          Notify.close();
          document.querySelector('.htmlnotify').removeEventListener('click',read)
        }
        this.$nextTick(()=>{
          document.querySelector('.htmlnotify').addEventListener('click',read)
        })
      },
      closeCallback(){
        console.log(this.msg);
      },

      openShoeClose() {
        this.$notify.success({
          title: 'Info',
          message: '这是一条没有关闭按钮的消息',
          showClose: false
        });
      }
    }
  }
</script>
