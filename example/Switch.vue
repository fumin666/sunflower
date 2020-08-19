<template>
  <article class="article">
    <h1>Switch 开关</h1>

    <h3>基础用法</h3>
    <div class="desc">通过 v-model 绑定一个布尔值，控制 switch 的开关。</div>
    <div class="example">
      <div class="example-demo">
        <s-switch v-model="value1"></s-switch>
      </div>
      <example-code>
        <textarea>
          <s-switch v-model="value1"></s-switch>
          <script>
            export default {
              data() {
                return {
                  value1: true
                }
              }
            }
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>自定义显示的文字</h3>
    <div class="desc">通过 active-text inactive-text 可自定义显示的文字，默认不显示文字。</div>
    <div class="example">
      <div class="example-demo">
        <s-switch v-model="value2" active-text="开" inactive-text="关"></s-switch>
        <s-switch v-model="value3" active-icon-class="iconfont icon-correct" inactive-icon-class="iconfont icon-error"></s-switch>
      </div>
      <example-code>
        <textarea>
          <s-switch v-model="value2" active-text="开" inactive-text="关"></s-switch>
          <s-switch v-model="value3" active-icon-class="iconfont icon-correct" inactive-icon-class="iconfont icon-error"></s-switch>
          <script>
            export default {
              data() {
                return {
                  value2: true,
                  value3: true
                }
              }
            }
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>自定义背景颜色</h3>
    <div class="desc">通过 active-color inactive-color可自定义背景颜色。</div>
    <div class="example">
      <div class="example-demo">
        <s-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949"></s-switch>
      </div>
      <example-code>
        <textarea>
    <s-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949"></s-switch>
    <script>
      export default {
        data() {
          return {
            value4: true
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>禁用状态</h3>
    <div class="desc"></div>
    <div class="example">
      <div class="example-demo">
        <s-switch v-model="value5" disabled></s-switch>
        <s-switch v-model="value6" disabled></s-switch>
      </div>
      <example-code>
        <textarea>
    <s-switch v-model="value5" disabled></s-switch>
    <s-switch v-model="value6" disabled></s-switch>
    <script>
      export default {
        data() {
          return {
            value5: true,
            value6: false
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>扩展 value 类型</h3>
    <div class="desc">通过 active-value inactive-value 可以扩展 value 的类型，可扩展 数字类型 和 字符串。</div>
    <div class="example">
      <div class="example-demo">
        <s-switch v-model="value7" :active-value="1" :inactive-value="0"></s-switch>
        <s-switch v-model="value8" :active-value="1" :inactive-value="0"></s-switch>
        <s-switch v-model="value9" active-value="yes" inactive-value="no"></s-switch>
        <s-switch v-model="value10" active-value="yes" inactive-value="no"></s-switch>
      </div>
      <example-code>
        <textarea>
    <s-switch v-model="value7" :active-value="1" :inactive-value="0"></s-switch>
    <s-switch v-model="value8" :active-value="1" :inactive-value="0"></s-switch>
    <s-switch v-model="value9" active-value="yes" inactive-value="no"></s-switch>
    <s-switch v-model="value10" active-value="yes" inactive-value="no"></s-switch>
    <script>
      export default {
        data() {
          return {
            value7: 1,
            value8: 0,
            value9: 'yes',
            value10: 'no'
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>


    <h3>switch 类型</h3>
    <div class="desc"></div>
    <div class="example">
      <div class="example-demo">
        <s-switch v-model="value13"></s-switch><span>（默认）</span>
        <s-switch v-model="value12" size="small"></s-switch><span>（小）</span>
      </div>
      <example-code>
        <textarea>
    <s-switch v-model="value13"></s-switch><span>（默认）</span>
        <s-switch v-model="value12" size="small"></s-switch><span>（小）</span>
    <script>
      export default {
        data() {
          return {
            value13: 0,
            value12: false
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>Change 事件</h3>
    <div class="desc"></div>
    <div class="example">
      <div class="example-demo">
        <s-switch v-model="value11" @change="change11"></s-switch><span>{{message11}}</span>
        <s-switch v-model="value12" @change="change12" active-value="1" inactive-value="0"></s-switch><span>{{message12}}</span>
        <s-switch v-model="value13" @change="change13" active-value="1" inactive-value="0"></s-switch><span>{{message13}}</span>
      </div>
      <example-code>
        <textarea>
    <s-switch v-model="value11" @change="change11"></s-switch><span>{{message11}}</span>
    <s-switch v-model="value12" @change="change12" active-value="1" inactive-value="0"></s-switch><span>{{message12}}</span>
    <s-switch v-model="value13" @change="change13" active-value="1" inactive-value="0"></s-switch><span>{{message13}}</span>
    <script>
      export default {
        data() {
          return {
            value11: true,
            value12: 1,
            value13: '1',
            message11: true,
            message12: 1,
            message13: '1'
          }
        },
        methods: {
          change11(val) {
            this.message11 = val;
          },
          change12(val) {
            this.message12 = val;
          },
          change13(val) {
            this.message13 = val;
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

  </article>
</template>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: true,
        value6: false,
        value7: 1,
        value8: 0,
        value9: 'yes',
        value10: 'no',
        value11: true,
        value12: 1,
        value13: '1',
        message11: true,
        message12: 1,
        message13: '1'
      }
    },
    methods: {
      change11(val) {
        this.message11 = val;
      },
      change12(val) {
        this.message12 = val;
      },
      change13(val) {
        this.message13 = val;
      }
    }
  }
</script>

<style>
  .article .s-switch + .s-switch {
    margin-left: 20px;
  }
</style>