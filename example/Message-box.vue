<template>
  <article class="article">
    <h1> MessageBox 弹框</h1>
    <p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p>
    <div class="tip">
      <p>从场景上说，MessageBox 的作用是美化系统自带的 <code>alert</code>、<code>confirm</code> 和 <code>prompt</code>
        因此适合展示较为简单的内容。</p>
      <p>如果需要弹出较为复杂的内容，请使用 Dialog。</p>
    </div>


    <h3> 消息提示</h3>
    <p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>
    <div class="example">
      <div class="example-demo">
        <s-button @click="open">点击打开 Message Box</s-button>
      </div>
      <example-code>
        <textarea>
          &lt;template&gt;
            &lt;s-button @click="open"&gt;点击打开 Message Box&lt;/s-button&gt;
          &lt;/template&gt;

          &lt;script&gt;
            export default {
              methods: {
                open() {
                  this.$alert('这是一段内容', '标题名称', {
                    confirmButtonText: '确定',
                    callback: action => {
                      this.$message({
                        type: 'info',
                        message: `action: ${ action }`
                      });
                    }
                  });
                }
              }
            }
          &lt;/script&gt;
        </textarea>
        <div class="description"><p>调用<code>$alert</code>方法即可打开消息提示，它模拟了系统的 <code>alert</code>，无法通过按下 ESC
          或点击框外关闭。此例中接收了两个参数，<code>message</code>和<code>title</code>。值得一提的是，窗口被关闭后，它默认会返回一个<code>Promise</code>对象便于进行后续操作的处理。若不确定浏览器是否支持<code>Promise</code>，可自行引入第三方
          polyfill 或像本例一样使用回调进行后续处理。</p>
        </div>
        <pre><code ></code></pre>
      </example-code>
    </div>

    <h3> 确认消息</h3>
    <p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
    <div class="example">
      <div class="example-demo">
        <s-button @click="open2">点击打开 Message Box</s-button>
      </div>
        <example-code>
          <textarea>
            &lt;template&gt;
              &lt;s-button @click="open2"&gt;点击打开 Message Box&lt;/s-button>
            &lt;/template&gt;

            &lt;script&gt;
              export default {
                methods: {
                  open2() {
                    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning'
                    }).then(() => {
                      this.$message({
                        type: 'success',
                        message: '删除成功!'
                      });
                    }).catch(() => {
                      alert('取消按钮被点击。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。');
                    });
                  }
                }
              }
            &lt;/script&gt;
          </textarea>
          <div class="description"><p>调用<code>$confirm</code>方法即可打开消息提示，它模拟了系统的 <code>confirm</code>。Message Box
            组件也拥有极高的定制性，我们可以传入<code>options</code>作为第三个参数，它是一个字面量对象。<code>type</code>字段表明消息类型，可以为<code>success</code>，<code>error</code>，<code>info</code>和<code>warning</code>，无效的设置将会被忽略。注意，第二个参数<code>title</code>必须定义为<code>String</code>类型，如果是<code>Object</code>，会被理解为<code>options</code>。在这里我们用了
            Promise 来处理后续响应。</p></div>
          <pre><code>
          </code></pre>
        </example-code>
      </div>

      <h3> 提交内容</h3>
      <p>当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。</p>
      <div class="example">
        <div class="example-demo">
          <s-button @click="open3">点击打开 Message Box</s-button>
        </div>
        <example-code>
          <textarea>
            &lt;template&gt;
              &lt;s-button @click="open3"&gt;点击打开 Message Box&lt;/s-button&gt;
            &lt;/template&gt;

            &lt;script&gt;
              export default {
                methods: {
                  open3() {
                    this.$prompt('请输入邮箱', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                      inputErrorMessage: '邮箱格式不正确'
                    }).then(({ value }) => {
                      this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
                      });
                    }).catch(() => {
                      this.$message({
                        type: 'info',
                        message: '取消输入'
                      });
                    });
                  }
                }
              }
            &lt;/script&gt;
          </textarea>
          <div class="description"><p>调用<code>$prompt</code>方法即可打开消息提示，它模拟了系统的
            <code>prompt</code>。可以用<code>inputPattern</code>字段自己规定匹配模式，或者用<code>inputValidator</code>规定校验函数，可以返回<code>Boolean</code>或<code>String</code>，<code>Boolean</code>为<code>false</code>或字符串时均表示校验未通过，<code>String</code>相当于定义了<code>inputErrorMessage</code>字段。此外，可以用<code>inputPlaceholder</code>字段来定义输入框的占位符。
          </p></div>
          <pre><code></code></pre>
        </example-code>
      </div>

      <h3> 自定义</h3>
      <p>可自定义配置不同内容。</p>
      <div class="example">
        <div class="example-demo">
          <s-button @click="open4">点击打开 Message Box</s-button>
        </div>
        <example-code>
          <textarea>
            &lt;template&gt;
              &lt;s-button @click="open4"&gt;点击打开 Message Box&lt;/s-button&gt;
            &lt;/template&gt;

            &lt;script&gt;
              export default {
                methods: {
                  open4() {
                    this.$msgbox({
                      title: '消息',
                      message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
                      showCancelButton: true,
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                          instance.confirmButtonLoading = true;
                          instance.confirmButtonText = '执行中...';
                          setTimeout(() => {
                            done();
                            setTimeout(() => {
                              instance.confirmButtonLoading = false;
                            }, 300);
                          }, 3000);
                        } else {
                          done();
                        }
                      }
                    }).then(action => {
                      this.$message({
                        type: 'info',
                        message: 'action: ' + action
                      });
                    });
                  },
                }
              }
            &lt;/script&gt;
          </textarea>
          <div class="description"><p>以上三个方法都是对<code>$msgbox</code>方法的再包装。本例直接调用<code>$msgbox</code>方法，使用了<code>showCancelButton</code>字段，用于显示取消按钮。另外可使用<code>cancelButtonClass</code>为其添加自定义样式，使用<code>cancelButtonText</code>来自定义按钮文本（Confirm
            按钮也具有相同的字段，在文末的字段说明中有完整的字段列表）。此例还使用了<code>beforeClose</code>属性，它的值是一个方法，会在 MessageBox
            的实例关闭前被调用，同时暂停实例的关闭。它有三个参数：<code>action</code>、实例本身和<code>done</code>方法。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加<code>loading</code>状态等；此时若需要关闭实例，可以调用<code>done</code>方法（若在<code>beforeClose</code>中没有调用<code>done</code>，则实例不会关闭）。
          </p></div>
          <pre><code></code></pre>
        </example-code>
      </div>

      <h3>使用 HTML 片段</h3>
      <p><code>message</code> 属性支持传入 HTML 片段。</p>
      <div class="example">
        <div class="example-demo">
          <s-button @click="openHTML">点击打开 Message Box</s-button>
        </div>
        <example-code>
            <textarea>
              &lt;template&gt;
                &lt;s-button @click="openHTML"&gt;点击打开 Message Box&lt;/s-button&gt;
              &lt;/template&gt;

              &lt;script&gt;
                export default {
                  methods: {
                    openHTML() {
                      this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
                        dangerouslyUseHTMLString: true
                      });
                    }
                  }
                }
              &lt;/script&gt;
            </textarea>
          <div class="description">
            <p>将<code>dangerouslyUseHTMLString</code>属性设置为 true，message 就会被当作 HTML 片段处理。</p>
          </div>
          <pre><code></code></pre>
        </example-code>
      </div>
      <div class="warning"><p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，
          因为容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。
          因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，
          <strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p>
      </div>

    <h3>居中布局</h3>
    <p>弹框中的内容支持居中布局</p>
    <div class="example">
      <div class="example-demo">
        <s-button @click="openCenter">点击打开 Message Box</s-button>
      </div>
      <example-code>
            <textarea>
              &lt;template&gt;
                &lt;s-button @click="openCenter"&gt;点击打开 Message Box&lt;/s-button&gt;
              &lt;/template&gt;

              &lt;script&gt;
                export default {
                  methods: {
                    openCenter() {
                      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                        center: true
                      }).then(() => {
                        this.$message({
                          type: 'success',
                          message: '删除成功!'
                        });
                      }).catch(() => {
                        this.$message({
                          type: 'info',
                          message: '已取消删除'
                        });
                      });
                    }
                  }
                }
              &lt;/script&gt;
            </textarea>
        <div class="description">
          <p>将<code>dangerouslyUseHTMLString</code>属性设置为 true，message 就会被当作 HTML 片段处理。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

      <h3> 全局方法</h3>
      <p>如果你完整引入了 Element，它会为 Vue.prototype 添加如下全局方法：$msgbox, $alert, $confirm 和 $prompt。
        因此在 Vue instance 中可以采用本页面中的方式调用 <code>MessageBox</code>。调用参数为：
      </p>
      <ul class="demo-ul">
        <li><code>$msgbox(options)</code></li>
        <li><code>$alert(message, title, options)</code> 或 <code>$alert(message, options)</code></li>
        <li><code>$confirm(message, title, options)</code> 或 <code>$confirm(message, options)</code></li>
        <li><code>$prompt(message, title, options)</code> 或 <code>$prompt(message, options)</code></li>
      </ul>

      <h3> 单独引用</h3>
      <p>单独引入 <code>MessageBox</code>：</p>
      <div class="example-code" >
        <pre><code>import { MessageBox } from 'element-ui';</code></pre>
      </div>
      <p>那么对应于上述四个全局方法的调用方法依次为：MessageBox, MessageBox.alert, MessageBox.confirm 和 MessageBox.prompt，调用参数与全局方法相同。</p>

      <h3 id="options"> Options</h3>
    <s-tb>
      <s-tb-i title="title" desc="	MessageBox 标题" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="message" desc="MessageBox 消息正文内容" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="dangerouslyUseHTMLString" desc="是否将 message 属性作为 HTML 片段处理" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="type" desc="消息类型，用于显示图标" type="string" value="success/info/warning/error	" init="-"></s-tb-i>
      <s-tb-i title="customClass" desc="MessageBox 的自定义类名" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="callback" desc="若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调" type="string" value="function(action, instance)，action 的值为'confirm'或'cancel', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法" init="-"></s-tb-i>
      <s-tb-i title="beforeClose" desc="MessageBox 关闭前的回调，会暂停实例的关闭" type="function(action, instance, done)，action 的值为'confirm'或'cancel'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例" value="-" init="-"></s-tb-i>
      <s-tb-i title="lockScroll" desc="是否在 MessageBox 出现时将 body 滚动锁定" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="showCancelButton" desc="是否显示取消按钮" type="boolean" value="-" init="false（以 confirm 和 prompt 方式调用时为 true）"></s-tb-i>
      <s-tb-i title="showConfirmButton" desc="是否显示确定按钮" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="cancelButtonText" desc="取消按钮的文本内容" type="string" value="-" init="取消"></s-tb-i>
      <s-tb-i title="confirmButtonText" desc="确定按钮的文本内容" type="string" value="-" init="确定"></s-tb-i>
      <s-tb-i title="cancelButtonClass" desc="取消按钮的自定义类名" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="confirmButtonClass" desc="确定按钮的自定义类名" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="closeOnClickModal" desc="是否可通过点击遮罩关闭 MessageBox" type="boolean" value="-" init="true（以 alert 方式调用时为 false）"></s-tb-i>
      <s-tb-i title="closeOnPressEscape" desc="是否可通过按下 ESC 键关闭 MessageBox" type="boolean" value="-" init="true（以 alert 方式调用时为 false）"></s-tb-i>
      <s-tb-i title="closeOnHashChange" desc="是否在 hashchange 时关闭 MessageBox" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="showInput" desc="是否显示输入框" type="boolean" value="-" init="false（以 prompt 方式调用时为 true）"></s-tb-i>
      <s-tb-i title="inputPlaceholder" desc="输入框的占位符	" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="inputType" desc="输入框的类型" type="string" value="-" init="text"></s-tb-i>
      <s-tb-i title="inputValue" desc="输入框的初始文本" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="inputPattern" desc="输入框的校验表达式" type="regexp" value="-" init="-"></s-tb-i>
      <s-tb-i title="inputValidator" desc="输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage" type="function" value="-" init="-"></s-tb-i>
      <s-tb-i title="inputErrorMessage" desc="校验未通过时的提示文本" type="string" value="-" init="输入的数据不合法!"></s-tb-i>
      <s-tb-i title="center" desc="是否居中布局" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="roundButton" desc="是否使用圆角按钮" type="boolean" value="-" init="false"></s-tb-i>
    </s-tb>
  </article>
</template>

<script>
  export default {

    methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            });
          }
        });
      },
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
            alert('取消按钮被点击。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。');
        });
      },
      open3() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      open4() {
        this.$msgbox({
          title: '消息',
          message: '<s-button>haha</s-button>',
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
      openHTML() {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
      },
      openCenter() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>