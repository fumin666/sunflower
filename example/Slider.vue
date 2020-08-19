<template>
  <article class="article" >
    <h1>Slider 滑块</h1>
    <p>通过拖动滑块在一个固定区间内进行选择</p>
    <h3> 基本用法</h3>
    <p>在拖动滑块时，显示当前值</p>
    <div class="example">
      <div class="example-demo">
        <div class="block">
          <span class="demonstration">默认</span>
          <s-slider v-model="value1"></s-slider>
        </div>
        <div class="block">
          <span class="demonstration">自定义初始值</span>
          <s-slider v-model="value2"></s-slider>
        </div>
        <div class="block">
          <span class="demonstration">禁用</span>
          <s-slider v-model="value3" disabled></s-slider>
        </div>
      </div>
      <div class="description" v-marked>
        通过设置绑定值自定义滑块的初始值
      </div>
      <div class="example-code" >
                <pre><code>
&lt;template&gt;
  &lt;div class="block"&gt;
    &lt;span class="demonstration"&gt;默认&lt;/span&gt;
    &lt;s-slider v-model="value1"&gt;&lt;/s-slider&gt;
  &lt;/div&gt;
  &lt;div class="block"&gt;
    &lt;span class="demonstration"&gt;自定义初始值&lt;/span&gt;
    &lt;s-slider v-model="value2"&gt;&lt;/s-slider&gt;
  &lt;/div&gt;
  &lt;div class="block"&gt;
    &lt;span class="demonstration"&gt;禁用&lt;/span&gt;
    &lt;s-slider v-model="value3" disabled&gt;&lt;/s-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 42
      }
    }
  }
&lt;/script&gt;
                </code></pre>
      </div>
    </div>

    <h3> 离散值</h3>
    <p>选项可以是离散的</p>
    <div class="example">
      <div class="example-demo">
        <div class="block">
          <span class="demonstration">不显示间断点</span>
          <s-slider
                  v-model="value4"
                  :step="10">
          </s-slider>
        </div>
        <div class="block">
          <span class="demonstration">显示间断点</span>
          <s-slider
                  v-model="value5"
                  :step="10"
                  show-stops>
          </s-slider>
        </div>
      </div>
      <div class="description" v-marked>
        改变`step`的值可以改变步长，通过设置`show-step`属性可以显示间断点
      </div>
      <div class="example-code" >
                <pre><code>
&lt;template&gt;
  &lt;div class="block"&gt;
    &lt;span class="demonstration"&gt;不显示间断点&lt;/span&gt;
    &lt;s-slider
            v-model="value4"
            :step="10"&gt;
    &lt;/s-slider&gt;
  &lt;/div&gt;
  &lt;div class="block"&gt;
    &lt;span class="demonstration"&gt;显示间断点&lt;/span&gt;
    &lt;s-slider
            v-model="value5"
            :step="10"
            show-stops&gt;
    &lt;/s-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value4: 0,
        value5: 0
      }
    }
  }
&lt;/script&gt;
                </code></pre>
      </div>
    </div>

    <h3> 带有输入框</h3>
    <p>通过输入框设置精确数值</p>
    <div class="example">
      <div class="example-demo">
        <div class="block">
          <s-slider
                  v-model="value6"
                  show-input>
          </s-slider>
        </div>
      </div>
      <div class="description" v-marked>
        设置`show-input`属性会在右侧显示一个输入框
      </div>
      <div class="example-code" >
        <pre><code>
&lt;template&gt;
  &lt;div class="block"&gt;
    &lt;s-slider
            v-model="value6"
            show-input&gt;
    &lt;/s-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value6: 0
      }
    }
  }
&lt;/script&gt;
        </code></pre>
      </div>
    </div>

    <h3> 范围选择</h3>
    <p>支持选择某一数值范围</p>
    <div class="example">
      <div class="example-demo">
        <div class="block">
          <s-slider
                  v-model="value7"
                  range
                  show-stops
                  :max="10">
          </s-slider>
        </div>
      </div>
      <div class="description" v-marked>
        设置`range`即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值
      </div>
      <div class="example-code" >
        <pre><code>
&lt;template&gt;
  &lt;div class="block"&gt;
    &lt;s-slider
            v-model="value7"
            range
            show-stops
            :max="10"&gt;
    &lt;/s-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value7: [4, 8]
      }
    }
  }
&lt;/script&gt;
        </code></pre>
      </div>
    </div>

    <h3 id="attributes"> Attributes</h3>
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
        <td>min</td>
        <td>最小值</td>
        <td>number</td>
        <td>—</td>
        <td>0</td>
      </tr>
      <tr>
        <td>max</td>
        <td>最大值</td>
        <td>number</td>
        <td>—</td>
        <td>100</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>step</td>
        <td>步长</td>
        <td>number</td>
        <td>—</td>
        <td>1</td>
      </tr>
      <tr>
        <td>show-input</td>
        <td>是否显示输入框，仅在非范围选择时有效</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>show-input-controls</td>
        <td>在显示输入框的情况下，是否显示输入框的控制按钮</td>
        <td>boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
      <tr>
        <td>show-stops</td>
        <td>是否显示间断点</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>range</td>
        <td>是否为范围选择</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      </tbody>
    </table>
    <h3 id="events"> Events</h3>
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
        <td>值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）</td>
        <td>改变后的值</td>
      </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  export default {
    data: function () {
      return {
        value1: 0,
        value2: 50,
        value3: 42,
        value4: 0,
        value5: 0,
        value6: 0,
        value7: [4, 8]
      }
    }
  }
</script>
