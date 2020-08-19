<template>
  <article class="article">
    <h1> InputNumber 计数器</h1>
    <p>仅允许输入标准的数字值，可定义范围</p>
    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <s-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></s-input-number>
      </div>
      <example-code>
        <textarea>
          &lt;template&gt;
            &lt;s-input-number v-model="num1" @change="handleChange" :min="1" :max="10"&gt;&lt;/s-input-number&gt;
          &lt;/template&gt;
          &lt;script&gt;
            export default {
              data() {
                return {
                  num1: 1
                };
              },
              methods: {
                handleChange(value) {
                  console.log(value);
                }
              }
            };
          &lt;/script&gt;
        </textarea>
        <div class="description">
          <p>要使用它，只需要在<code>s-input-number</code>元素中使用<code>v-model</code>绑定变量即可，变量的初始值即为默认值。</p>
        </div>
        <pre><code>
        </code></pre>
      </example-code>
    </div>

    <h3>禁用状态</h3>
    <div class="example">
      <div class="example-demo">
        <s-input-number v-model="num2" :disabled="true"></s-input-number>
      </div>
      <example-code>
        <textarea>
          &lt;template&gt;
            &lt;s-input-number v-model="num2" :disabled="true">&lt;/s-input-number&gt;
          &lt;/template&gt;
          &lt;script&gt;
            export default {
              data() {
                return {
                  num2: 1
                }
              }
            };
          &lt;/script&gt;
        </textarea>
        <div class="description">
            <p><code>disabled</code>属性接受一个<code>Boolean</code>，设置为<code>true</code>即可禁用整个组件，
              如果你只需要控制数值在某一范围内，可以设置<code>min</code>属性和<code>max</code>属性，
              不设置<code>min</code>和<code>max</code>时，最小值为 0。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>步数</h3>
    <p>允许定义递增递减的步数控制</p>
    <div class="example">
      <div class="example-demo">
        <s-input-number v-model="num3" :step="0.01" :min="0.01" :max="1" controls-position="bothSide"></s-input-number>
      </div>
      <example-code>
        <textarea>
          &lt;template&gt;
            &lt;s-input-number v-model="num3" :step="0.01" :min="0.01" :max="1"&gt;&lt;/s-input-number&gt;
          &lt;/template&gt;
          &lt;script&gt;
            export default {
              data() {
                return {
                  num3: 5
                }
              }
            };
          &lt;/script&gt;
        </textarea>
        <div class="description">
          <p>设置<code>step</code>属性可以控制步长，接受一个<code>Number</code>。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>尺寸</h3>
    <p>额外提供了 <code>medium(大)</code>、<code> 默认 </code>、<code> small(小) </code> 三种尺寸的数字输入框</p>
    <div class="example">
      <div class="example-demo">
        <s-input-number size="medium" v-model="num7"></s-input-number>
        <s-input-number v-model="num5"></s-input-number>
        <s-input-number size="small" v-model="num6"></s-input-number>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-input-number size="medium" v-model="num7"></s-input-number>
            <s-input-number v-model="num5"></s-input-number>
            <s-input-number size="small" v-model="num6"></s-input-number>
          </template>

          &lt;script&gt;
            export default {
              data() {
                return {
                  num4: 1,
                  num5: 1,
                  num6: 1,
                  num7: 1
                }
              }
            };
          &lt;/script&gt;
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>按钮位置</h3>
    <div class="example">
      <div class="example-demo">
        <template>
          <s-input-number v-model="num8" @change="handleChange"></s-input-number>
          <s-input-number v-model="num9" controls-position="bothSide" @change="handleChange"></s-input-number>
        </template>
      </div>
      <example-code>
        <textarea>
          <s-input-number v-model="num8" @change="handleChange"></s-input-number>
          <s-input-number v-model="num9" controls-position="bothSide" @change="handleChange"></s-input-number>

          <script>
            export default {
              data() {
                return {
                  num8: 1,
                  num9: 1
                };
              },
              methods: {
                handleChange(value) {
                  console.log(value);
                }
              }
            };
          </script>

        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>Attributes</h3>
    <s-tb>
      <s-tb-i title="value" desc="绑定值" type="number" value="-" init="-"></s-tb-i>
      <s-tb-i title="min" desc="设置计数器允许的最小值	" type="number" value="-" init="0"></s-tb-i>
      <s-tb-i title="max" desc="设置计数器允许的最大值	" type="" value="-" init="Infinity"></s-tb-i>
      <s-tb-i title="step" desc="计数器步长" type="number" value="-" init="1"></s-tb-i>
      <s-tb-i title="size" desc="计数器尺寸" type="string" value="large, small" init="-"></s-tb-i>
      <s-tb-i title="disabled" desc="是否禁用计数器	" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="controls" desc="是否使用控制按钮" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="controls-position" desc="控制按钮位置" type="string" value="right / bothSide" init="right"></s-tb-i>
      <s-tb-i title="name" desc="原生属性" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="label" desc="输入框关联的label文字" type="string" value="-" init="-"></s-tb-i>
    </s-tb>

    <h3>Events</h3>
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
        <td>change</td>
        <td>绑定值被改变时触发</td>
        <td>最后变更的值</td>
      </tr>
      <tr>
        <td>blur</td>
        <td>在组件 Input 失去焦点时触发</td>
        <td>(event: Event)</td>
      </tr>
      <tr>
        <td>focus</td>
        <td>在组件 Input 获得焦点时触发</td>
        <td>(event: Event)</td>
      </tr>
      </tbody>
    </table>

    <h3>Methods</h3>
    <table>
      <thead>
      <tr>
        <th>方法名	</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>focus</td>
        <td>使 input 获取焦点</td>
        <td>-</td>
      </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  export default {
    data () {
      return {
        num1: 1,
        num2: 1,
        num3: 0.5,
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1,
        num8: 1,
        num9: 1
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>