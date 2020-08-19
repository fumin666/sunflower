<template>
  <article class="article">
    <h2>Rate评分</h2>
    <p>评分组件</p>
    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo" style="padding: 0px;">
        <div class="block ">
          <span class="demonstration">默认不区分颜色</span>
          <s-rate v-model="value1"></s-rate>
        </div>
        <div class="block">
          <span class="demonstration">区分颜色</span>
          <s-rate
                  v-model="value2"
                  :colors="['#100cbf', '#e6d801', '#e60e2b']"
          >
          </s-rate>
        </div>
      </div>
      <div class="example-code">
        <pre><code>
 &lt;div class="block"&gt;
                  &lt;span class="demonstration"&gt;默认不区分颜色&lt;/span&gt;
                  &lt;s-rate v-model="value1"&gt;&lt;/s-rate&gt;
              &lt;/div&gt;
              &lt;div class="block"&gt;
                  &lt;span class="demonstration"&gt;区分颜色&lt;/span&gt;
                  &lt;s-rate v-model="value2" :colors="['#99A9BF', '##02b4e6', '##02b4e6']"&gt;
                  &lt;/s-rate&gt;
              &lt;/div&gt;
              &lt;script&gt;
              export default {
                  data() {
                      return {
                          value1: null,
                          value2: null
                      }
                  }
              }
              &lt;/script&gt;
</code></pre>
      </div>
    </div>

    <h3>辅助文字</h3>
    <p>用辅助文字直接的表达对应分数</p>
    <div class="example">
      <div class="example-demo">
        <s-rate
                v-model="value3"
                show-text>
        </s-rate>
      </div>
      <div class="example-code">
        <pre><code>
 &lt;s-rate
                v-model="value3"
                show-text&gt;
              &lt;/s-rate&gt;

              &lt;script&gt;
                export default {
                  data() {
                    return {
                      value3: null
                    }
                  }
                }
              &lt;/script&gt;
        </code></pre>
      </div>
    </div>
    <h3 id="zhi-du">只读</h3>
    <p>只读的评分用来展示分数，允许出现半星</p>
    <div class="example">
      <div class="example-demo">
        <s-rate
                v-model="value5"
                disabled
                show-text
                text-color="#ffc001"
                text-template="{value}">
        </s-rate>
      </div>
      <div class="example-code">
        <pre><code>
    &lt;s-rate
                v-model="value5"
                disabled
                show-text
                text-color="#02b4e6"
                text-template="{value}"&gt;
              &lt;/s-rate&gt;

              &lt;script&gt;
                export default {
                  data() {
                    return {
                      value5: 3.7
                    }
                  }
                }
              &lt;/script&gt;
        </code></pre>
      </div>
    </div>


    <h3>Attributes</h3>
    <table class="table">
      <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>max</td>
        <td>最大分值</td>
        <td>number</td>
        <td>—</td>
        <td>5</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否为只读</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>allow-half</td>
        <td>是否允许半选</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>low-threshold</td>
        <td>低分和中等分数的界限值，值本身被划分在低分中</td>
        <td>number</td>
        <td>—</td>
        <td>2</td>
      </tr>
      <tr>
        <td>high-threshold</td>
        <td>高分和中等分数的界限值，值本身被划分在高分中</td>
        <td>number</td>
        <td>—</td>
        <td>4</td>
      </tr>
      <tr>
        <td>colors</td>
        <td>icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色</td>
        <td>array</td>
        <td>—</td>
        <td>['#F7BA2A', '#F7BA2A', '#F7BA2A']</td>
      </tr>
      <tr>
        <td>void-color</td>
        <td>未选中 icon 的颜色</td>
        <td>string</td>
        <td>—</td>
        <td>#C6D1DE</td>
      </tr>
      <tr>
        <td>disabled-void-color</td>
        <td>只读时未选中 icon 的颜色</td>
        <td>string</td>
        <td>—</td>
        <td>#EFF2F7</td>
      </tr>
      <tr>
        <td>icon-classes</td>
        <td>icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名</td>
        <td>array</td>
        <td>—</td>
        <td>['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']</td>
      </tr>
      <tr>
        <td>void-icon-class</td>
        <td>未选中 icon 的类名</td>
        <td>string</td>
        <td>—</td>
        <td>el-icon-star-off</td>
      </tr>
      <tr>
        <td>disabled-void-icon-class</td>
        <td>只读时未选中 icon 的类名</td>
        <td>string</td>
        <td>—</td>
        <td>el-icon-star-on</td>
      </tr>
      <tr>
        <td>show-text</td>
        <td>是否显示辅助文字</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>text-color</td>
        <td>辅助文字的颜色</td>
        <td>string</td>
        <td>—</td>
        <td>1F2D3D</td>
      </tr>
      <tr>
        <td>texts</td>
        <td>辅助文字数组</td>
        <td>array</td>
        <td>—</td>
        <td>['极差', '失望', '一般', '满意', '惊喜']</td>
      </tr>
      <tr>
        <td>text-template</td>
        <td>只读时的辅助文字模板</td>
        <td>string</td>
        <td>—</td>
        <td>{value}</td>
      </tr>
      </tbody>
    </table>
    <h3>Events</h3>
    <table class="table">
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
        <td>分值改变时触发</td>
        <td>改变后的分值</td>
      </tr>
      </tbody>
    </table>

  </article>
</template>

<script type="text/babel">
  export default {


    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: 3.7
      }
    }
  }
</script>
