<template>
  <article class="article">
    <h1>Dialog 对话框</h1>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>

    <h3>基本用法</h3>
    <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
    <div class="example">
      <div class="example-demo">
        <s-button @click="bloom0 = true">显示对话框</s-button>
        <s-dialog
          v-model="bloom0"
          width="700px"
          title="这是标题">这是内容
          <template slot="footer" class="dialog-footer">
            <s-button @click="ok0">确定</s-button>
            <s-button @click="cancel0" type="cancel">取消</s-button>
          </template>
        </s-dialog>
      </div>
      <example-code>
        <textarea>
          <s-button @click="bloom0 = true">显示对话框</s-button>
          <s-dialog
            v-model="bloom0"
            width="700px"
            title="这是标题">这是内容
            <template slot="footer" class="dialog-footer">
              <s-button @click="ok0">确定</s-button>
              <s-button @click="cancel0" type="cancel0">取消</s-button>
            </template>
          </s-dialog>
          <script>
            export default {
              data() {
                return {
                  bloom0: false
                }
              },
              methods: {
                ok0() {
                  alert('点击了确定');
                  this.bloom0 = false;
                },
                cancel0() {
                  alert('点击了取消');
                  this.bloom0 = false;
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p>需要绑定<code>v-model</code>值，它接收<code>Boolean</code>，当为<code>true</code>时显示 Dialog。
            Dialog 分为两个部分：<code>body</code>和<code>footer</code>，<code>footer</code>需要具名为<code>footer</code>的<code>slot</code>。
          </p>
          <p><code>title</code>属性用于定义标题，它是可选的，默认值为空。</p>
          <p>为Dialog设置<code>width</code>属性，可直接设置Dialog的弹框宽度</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>before-close</h3>
    <p>可以给 dialog 右上角的关闭按钮添加 before-close 方法。</p>
    <div class="example">
      <div class="example-demo">
        <s-button @click="bloom3 = true">显示dialog</s-button>
        <s-dialog
          v-model="bloom3"
          title="标题"
          :before-close="handleClose">
        </s-dialog>
      </div>
      <example-code>
        <textarea>
          <s-button @click="bloom3 = true">显示dialog</s-button>
          <s-dialog
            v-model="bloom3"
            title="标题"
            :before-close="handleClose">
          </s-dialog>

          <script>
            export default {
              data() {
                return {
                  bloom3: false
                }
              },
              methods: {
                handleClose(close) {
                  this.$confirm('确定关闭？', 'Title', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                  }).then(() => {
                    close();
                  }).catch(() => {});
                }
              }
            }
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>嵌套的 Dialog (终于可以嵌套了，莫名的激动啊！)</h3>
    <p>如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。</p>
    <div class="example">
      <div class="example-demo">
        <s-button @click="outerVisible = true">点击打开外层 Dialog</s-button>
        <s-dialog title="外层 Dialog" v-model="outerVisible">
          <s-dialog
            width="30%"
            title="内层 Dialog"
            v-model="innerVisible"
            append-to-body>
            真的可以嵌套，不忽悠你！
            <s-button>点我呀！！</s-button>
          </s-dialog>
          <div slot="footer" class="dialog-footer">
            <s-button @click="outerVisible = false">取 消</s-button>
            <s-button @click="innerVisible = true">打开内层 Dialog</s-button>
          </div>
        </s-dialog>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-button @click="outerVisible = true">点击打开外层 Dialog</s-button>
            <s-dialog title="外层 Dialog" v-model="outerVisible">
              <s-dialog
                width="30%"
                title="内层 Dialog"
                v-model="innerVisible"
                append-to-body>
                真的可以嵌套，不忽悠你！
                <s-button>点我呀！！</s-button>
              </s-dialog>
              <div slot="footer" class="dialog-footer">
                <s-button @click="outerVisible = false">取 消</s-button>
                <s-button @click="innerVisible = true">打开内层 Dialog</s-button>
              </div>
            </s-dialog>
          </template>

          <script>
            export default {
              data() {
                return {
                  outerVisible: false,
                  innerVisible: false
                };
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p>正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。<br/>
            对于确实需要嵌套 Dialog 的场景，我们提供了<code>append-to-body</code>属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。
          </p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>居中布局</h3>
    <p>标题和底部(slot="footer")可水平居中。</p>
    <div class="example">
      <div class="example-demo">
        <s-button @click="centerDialog = true">点击打开 Dialog</s-button>

        <s-dialog
          title="标题和底部居中的Dialog"
          v-model="centerDialog"
          width="700px"
          center>
          <span>需要注意的是内容是默认不居中的</span>
          <span slot="footer" class="dialog-footer">
            <s-button @click="centerDialog = false">取 消</s-button>
            <s-button @click="centerDialog = false">确 定</s-button>
          </span>
        </s-dialog>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-button @click="centerDialog = true">点击打开 Dialog</s-button>

            <s-dialog
              title="标题和底部居中的Dialog"
              v-model="centerDialog"
              width="700px"
              center>
              <span>需要注意的是内容是默认不居中的</span>
              <span slot="footer" class="dialog-footer">
                <s-button @click="centerDialog = false">取 消</s-button>
                <s-button @click="centerDialog = false">确 定</s-button>
              </span>
            </s-dialog>
          </template>

          <script>
            export default {
              data() {
                return {
                  centerDialog: false
                };
              }
            };
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>用户信息</h3>
    <div class="example">
      <div class="example-demo">
        <s-button @click="bloom1 = true">显示对话框</s-button>
        <s-dialog
          v-model="bloom1"
          title="用户信息">
          <s-tab :animated="false">
            <s-tab-pane label="个人信息">
              <s-scrollbar wrap-class="pinfo">
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">用户名称</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">TEST1</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">真实姓名</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">张三</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">口令使用期限</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">2018-04-01 16:20:20</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">所属机构</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">机构一</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">角色</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">角色1</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">Email</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">123456789@163.cxom</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">手机号</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">12345678910</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">到期时间</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">2018-04-11 16:20:20</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">IP规则</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">*</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">MAC规则</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">*</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">多点并发数</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">*</div>
                  </s-col>
                </s-row>
                <s-row>
                <s-col :span="10">
                  <div class="grid-content bg-purple">多次并发数</div>
                </s-col>
                <s-col :span="14">
                  <div class="grid-content bg-purple-light">*</div>
                </s-col>
              </s-row>
              </s-scrollbar>
            </s-tab-pane>
            <s-tab-pane label="修改密码">
              <s-scrollbar wrap-class="pinof"></s-scrollbar>
            </s-tab-pane>
            <s-tab-pane label="修改个人信息">
              <s-scrollbar wrap-class="pinfo">
                <s-form :label-position="labelPosition" :rules="rules" ref="formLabelAlign" label-width="110px" :model="formLabelAlign">
                <s-form-item label="真实姓名：" prop="name">
                  <s-input v-model="formLabelAlign.name"></s-input>
                </s-form-item>
                <s-form-item label="Email：">
                  <s-input v-model="formLabelAlign.email"></s-input>
                </s-form-item>
                <s-form-item label="手机号码：">
                  <s-input v-model="formLabelAlign.phoneNum"></s-input>
                </s-form-item>
                <s-form-item label="工号：">
                  <s-input v-model="formLabelAlign.workNum"></s-input>
                </s-form-item>
                <s-form-item label="性别：">
                  <s-radio-group v-model="formLabelAlign.sex">
                    <s-radio label="男"></s-radio>
                    <s-radio label="女"></s-radio>
                  </s-radio-group>
                </s-form-item>
                <s-form-item label="微信号：">
                  <s-input v-model="formLabelAlign.weChat"></s-input>
                </s-form-item>
                <s-form-item label="办公号码：">
                  <s-input v-model="formLabelAlign.officeNum"></s-input>
                </s-form-item>
                <s-form-item label="个人地址：">
                  <s-input v-model="formLabelAlign.address"></s-input>
                </s-form-item>
                <s-form-item label="IP规则：">
                  <s-input v-model="formLabelAlign.ipRule"></s-input>
                </s-form-item>
                <s-form-item label="MAC规则：">
                  <s-input v-model="formLabelAlign.macRule"></s-input>
                </s-form-item>
              </s-form>
              </s-scrollbar>
            </s-tab-pane>
          </s-tab>
          <template slot="footer" class="dialog-footer">
            <s-button @click="submitForm('formLabelAlign')">确定</s-button>
            <s-button type="cancel" @click="cancel1">取消</s-button>
          </template>
        </s-dialog>
      </div>
      <example-code>
        <textarea>
      <template>
        <s-button @click="bloom1 = true">显示对话框</s-button>
        <s-dialog
          v-model="bloom1"
          title="用户信息">
          <s-tab :animated="false">
            <s-tab-pane label="个人信息">
              <s-scrollbar wrap-class="pinfo">
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">用户名称</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">TEST1</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">真实姓名</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">张三</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">口令使用期限</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">2018-04-01 16:20:20</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">所属机构</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">机构一</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">角色</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">角色1</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">Email</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">123456789@163.cxom</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">手机号</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">12345678910</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">到期时间</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">2018-04-11 16:20:20</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">IP规则</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">*</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">MAC规则</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">*</div>
                  </s-col>
                </s-row>
                <s-row>
                  <s-col :span="10">
                    <div class="grid-content bg-purple">多点并发数</div>
                  </s-col>
                  <s-col :span="14">
                    <div class="grid-content bg-purple-light">*</div>
                  </s-col>
                </s-row>
                <s-row>
                <s-col :span="10">
                  <div class="grid-content bg-purple">多次并发数</div>
                </s-col>
                <s-col :span="14">
                  <div class="grid-content bg-purple-light">*</div>
                </s-col>
              </s-row>
              </s-scrollbar>
            </s-tab-pane>
            <s-tab-pane label="修改密码">
              <s-scrollbar wrap-class="pinfo"></s-scrollbar>
            </s-tab-pane>
            <s-tab-pane label="修改个人信息">
              <s-scrollbar wrap-class="pinfo">
                <s-form :label-position="labelPosition" :rules="rules" ref="formLabelAlign" label-width="110px" :model="formLabelAlign">
                <s-form-item label="真实姓名：" prop="name">
                  <s-input v-model="formLabelAlign.name"></s-input>
                </s-form-item>
                <s-form-item label="Email：">
                  <s-input v-model="formLabelAlign.email"></s-input>
                </s-form-item>
                <s-form-item label="手机号码：">
                  <s-input v-model="formLabelAlign.phoneNum"></s-input>
                </s-form-item>
                <s-form-item label="工号：">
                  <s-input v-model="formLabelAlign.workNum"></s-input>
                </s-form-item>
                <s-form-item label="性别：">
                  <s-radio-group v-model="formLabelAlign.sex">
                    <s-radio label="男"></s-radio>
                    <s-radio label="女"></s-radio>
                  </s-radio-group>
                </s-form-item>
                <s-form-item label="微信号：">
                  <s-input v-model="formLabelAlign.weChat"></s-input>
                </s-form-item>
                <s-form-item label="办公号码：">
                  <s-input v-model="formLabelAlign.officeNum"></s-input>
                </s-form-item>
                <s-form-item label="个人地址：">
                  <s-input v-model="formLabelAlign.address"></s-input>
                </s-form-item>
                <s-form-item label="IP规则：">
                  <s-input v-model="formLabelAlign.ipRule"></s-input>
                </s-form-item>
                <s-form-item label="MAC规则：">
                  <s-input v-model="formLabelAlign.macRule"></s-input>
                </s-form-item>
              </s-form>
              </s-scrollbar>
            </s-tab-pane>
          </s-tab>
          <template slot="footer" class="dialog-footer">
            <s-button @click="submitForm('formLabelAlign')">确定</s-button>
            <s-button type="cancel" @click="cancel1">取消</s-button>
          </template>
        </s-dialog>
      </template>
      <script>
        export default {
          data() {
            return {
              model1: false
            }
          },
          methods: {
            submitForm() {

            }
          }
        }
      </script>
      <style>
        .pinfo {
          max-height: 400px;
        }
      </style>
        </textarea>
        <pre><code>
        </code></pre>
      </example-code>
    </div>

    <h3>登录设置</h3>
    <div class="example">
      <div class="example-demo">
        <s-button @click="bloom2 = true">显示对话框</s-button>
        <s-dialog
          v-model="bloom2"
          title="登陆设置">
          <s-tab :animated="false">
            <s-tab-pane label="登录认证设置">
              <p class="phead"><i class="iconfont icon-approve"></i>认证方式设置</p>
              <s-form ref="form" :model="form" label-width="130px" label-position="left">
                <s-form-item label="认证方式设置：">
                  <s-select v-model="region" placeholder="混合认证">
                    <s-option label="区域一" value="shanghai"></s-option>
                    <s-option label="区域二" value="beijing"></s-option>
                  </s-select>
                </s-form-item>
                <s-button>保存</s-button>
                <div style="clear:both"></div>
              </s-form>
              <p class="phead"><i class="iconfont icon-approve"></i>双因素认证属性</p>
              <s-form ref="form" :model="form" label-width="130px" label-position="left">
                <s-form-item label="认证方式一：">
                  <s-select v-model="region" placeholder="口令认证">
                    <s-option label="区域一" value="shanghai"></s-option>
                    <s-option label="区域二" value="beijing"></s-option>
                  </s-select>
                </s-form-item>
                <s-form-item label="认证方式二：">
                  <s-select v-model="region" placeholder="Radius认证">
                    <s-option label="区域一" value="shanghai"></s-option>
                    <s-option label="区域二" value="beijing"></s-option>
                  </s-select>
                </s-form-item>
                <s-button>保存</s-button>
                <div style="clear:both"></div>
              </s-form>
            </s-tab-pane>
            <s-tab-pane label="登录认证配置"></s-tab-pane>
            <s-tab-pane label="登录安全设置"></s-tab-pane>
          </s-tab>
        </s-dialog>
      </div>
      <example-code>
        <textarea>
          <s-dialog
            v-model="bloom2"
            title="登陆设置">
            <s-tab :animated="false">
              <s-tab-pane label="登录认证设置">
                <p class="phead"><i class="iconfont icon-approve"></i>认证方式设置</p>
                <s-form ref="form" :model="form" label-width="130px" label-position="left">
                  <s-form-item label="认证方式设置：">
                    <s-select v-model="region" placeholder="混合认证">
                      <s-option label="区域一" value="shanghai"></s-option>
                      <s-option label="区域二" value="beijing"></s-option>
                    </s-select>
                  </s-form-item>
                  <s-button>保存</s-button>
                  <div style="clear:both"></div>
                </s-form>
                <p class="phead"><i class="iconfont icon-approve"></i>双因素认证属性</p>
                <s-form ref="form" :model="form" label-width="130px" label-position="left">
                  <s-form-item label="认证方式一：">
                    <s-select v-model="region" placeholder="口令认证">
                      <s-option label="区域一" value="shanghai"></s-option>
                      <s-option label="区域二" value="beijing"></s-option>
                    </s-select>
                  </s-form-item>
                  <s-form-item label="认证方式二：">
                    <s-select v-model="region" placeholder="Radius认证">
                      <s-option label="区域一" value="shanghai"></s-option>
                      <s-option label="区域二" value="beijing"></s-option>
                    </s-select>
                  </s-form-item>
                  <s-button>保存</s-button>
                  <div style="clear:both"></div>
                </s-form>
              </s-tab-pane>
              <s-tab-pane label="登录认证配置"></s-tab-pane>
              <s-tab-pane label="登录安全设置"></s-tab-pane>
            </s-tab>
          </s-dialog>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>Attributes</h3>
    <s-tb>
      <s-tb-i title="v-model" desc="是否显示 Dialog" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="title" desc="Dialog 的标题，也可通过具名 slot （见下表）传入" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="width" desc="Dialog 的宽度" type="string" value="-" init="600px"></s-tb-i>
      <s-tb-i title="top" desc="Dialog CSS 中的 margin-top 值" type="string" value="-" init="15%"></s-tb-i>
      <s-tb-i title="modal" desc="是否需要遮罩层" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="modal-append-to-body" desc="遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="append-to-body" desc="Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="lock-scroll" desc="是否在 Dialog 出现时将 body 滚动锁定" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="close-on-click-modal" desc="是否可以通过点击 modal 关闭 Dialog" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="close-on-press-escape" desc="是否可以通过按下 ESC 关闭 Dialog" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="show-close" desc="是否显示关闭按钮" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="before-close" desc="关闭前的回调，会暂停 Dialog 的关闭" type="function(done)，done 用于关闭 Dialog" value="-" init="-"></s-tb-i>
      <s-tb-i title="center" desc="是否对头部和底部采用居中布局" type="boolean" value="-" init="false"></s-tb-i>
    </s-tb>

    <h3>Slot</h3>
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-</td>
          <td>Dialog 的内容</td>
        </tr>
        <tr>
          <td>title</td>
          <td>Dialog 标题区的内容</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>Dialog 按钮操作区的内容</td>
        </tr>
      </tbody>
    </table>

    <h3>Event</h3>
    <table>
      <thead>
        <tr>
          <th>事件名称</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>close</td>
          <td>Dialog 关闭的回调</td>
          <td>-</td>
        </tr>
        <tr>
          <td>open</td>
          <td>Dialog 打开的回调</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        bloom0: false,
        bloom1: false,
        bloom2: false,
        bloom3: false,
        visible: false,
        outerVisible: false,
        innerVisible: false,
        centerDialog: false,
        region: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          email: '',
          phoneNum: '',
          workNum: '',
          sex: '男',
          weChat: '',
          officeNum: '',
          address: '',
          ipRule: '',
          macRule: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
          ]
        }
      }
    },
    methods: {
      ok0() {
        alert('点击了确定');
        this.bloom0 = false;
      },
      cancel0() {
        alert('点击了取消');
        this.bloom0 = false;
      },
      ok1 () {
        alert('点击了确定');
        this.bloom1 = false;
      },
      cancel1 () {
        alert('点击了取消');
        this.bloom1 = false;
      },
      ok2 () {
        alert('点击了确定');
        this.bloom2 = false;
      },
      cancel2 () {
        alert('点击了取消');
        this.bloom2 = false;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleClose(close) {
        this.$confirm('确定关闭？', 'Title', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          close();
        }).catch(() => {});
      }
    }
  }
</script>

<style>
  article .phead {
    ont-size: 14px;
    font-weight: bold;
    color: #31aaff;
  }
  article .phead i {
    margin-right: 6px;
  }
  article .phead + form button {
    float: right;
  }
  article .pinfo {
    max-height: 600px;
  }
  article .codeDes pre {
    width: 60%;
    float: left;
  }
</style>