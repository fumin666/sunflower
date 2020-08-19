<template>
  <article class="article">
    <h1>Grid 布局</h1>
    <p>基于传统的栅格布局，我们采用了24栅格系统，将区域进行24等分，并且加入了flex模式，使布局的方式更加多样。</p>
    <h3>基础布局</h3>
    <p>使用单一分栏创建基础的栅格布局。</p>
    <div class="example">
      <div class="example-demo">
        <s-row>
          <s-col span="12"><div class="grid-content bg-purple">col-12</div></s-col>
          <s-col span="12"><div class="grid-content bg-purple-light">col-12</div></s-col>
        </s-row>
        <s-row>
          <s-col span="8"><div class="grid-content bg-purple">col-8</div></s-col>
          <s-col span="8"><div class="grid-content bg-purple-light">col-8</div></s-col>
          <s-col span="8"><div class="grid-content bg-purple">col-8</div></s-col>
        </s-row>
        <s-row>
          <s-col span="6"><div class="grid-content bg-purple">col-6</div></s-col>
          <s-col span="6"><div class="grid-content bg-purple-light">col-6</div></s-col>
          <s-col span="6"><div class="grid-content bg-purple">col-6</div></s-col>
          <s-col span="6"><div class="grid-content bg-purple-light">col-6</div></s-col>
        </s-row>
      </div>
      <div class="example-code" >
          <pre><code>
&lt;template&gt;
  &lt;s-row&gt;
      &lt;s-col span="12"&gt;col-12&lt;/s-col&gt;
      &lt;s-col span="12"&gt;col-12&lt;/s-col&gt;
  &lt;/s-row&gt;
  &lt;br&gt;
  &lt;s-row&gt;
      &lt;s-col span="8"&gt;col-8&lt;/s-col&gt;
      &lt;s-col span="8"&gt;col-8&lt;/s-col&gt;
      &lt;s-col span="8"&gt;col-8&lt;/s-col&gt;
  &lt;/s-row&gt;
  &lt;br&gt;
  &lt;s-row&gt;
      &lt;s-col span="6">col-6&lt;/s-col&gt;
      &lt;s-col span="6">col-6&lt;/s-col&gt;
      &lt;s-col span="6">col-6&lt;/s-col&gt;
      &lt;s-col span="6">col-6&lt;/s-col&gt;
  &lt;/s-row&gt;
&lt;/template&gt;
&lt;script&gt;
    export default {

    }
&lt;/script&gt;
          </code></pre>
      </div>
    </div>

    <h3>分栏间隔</h3>
    <p>分栏之间存在间隔。</p>
    <div class="example">
      <div class="example-demo">
        <s-row :gutter="16">
          <s-col span="6">
            <div class="grid-content bg-purple">col-6</div>
          </s-col>
          <s-col span="6">
            <div class="grid-content bg-purple">col-6</div>
          </s-col>
          <s-col span="6">
            <div class="grid-content bg-purple">col-6</div>
          </s-col>
          <s-col span="6">
            <div class="grid-content bg-purple">col-6</div>
          </s-col>
        </s-row>
      </div>
      <div class="example-code" >
        <div class="description"><p>gutter 属性可以设置分栏距离</p></div>
        <pre><code>
&lt;template&gt;
  &lt;s-row :gutter="16"&gt;
    &lt;s-col span="6"&gt;
      &lt;div&gt;col-6&lt;/div&gt;
    &lt;/s-col&gt;
    &lt;s-col span="6"&gt;
      &lt;div&gt;col-6&lt;/div&gt;
    &lt;/s-col&gt;
    &lt;s-col span="6"&gt;
      &lt;div&gt;col-6&lt;/div&gt;
    &lt;/s-col&gt;
    &lt;s-col span="6"&gt;
      &lt;div>col-6&lt;/div&gt;
    &lt;/s-col&gt;
  &lt;/s-row&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {

  }
&lt;/script&gt;
        </code></pre>
      </div>
    </div>

    <h3>栅格排序</h3>
    <p>通过设置push和pull来改变栅格的顺序。</p>
    <div class="example">
      <div class="example-demo">
        <s-row>
          <s-col span="18" push="6"><div class="grid-content bg-purple">col-18 | push-6</div></s-col>
          <s-col span="6" pull="18"><div class="grid-content bg-purple-light">col-6 | pull-18</div></s-col>
        </s-row>
      </div>
      <div class="example-code" >
        <pre><code>
&lt;template&gt;
  &lt;s-row&gt;
  &lt;s-col span="18" push="6"&gt;col-18 | push-6&lt;/s-col&gt;
  &lt;s-col span="6" pull="18"&gt;col-6 | pull-18&lt;/s-col&gt;
  &lt;/s-row&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {

  }
&lt;/script&gt;
        </code></pre>
      </div>
    </div>

    <h3>分栏偏移</h3>
    <p>支持偏移指定的栏数。</p>
    <div class="example">
      <div class="example-demo">
        <s-row>
          <s-col span="8"><div class="grid-content bg-purple">col-8</div></s-col>
          <s-col span="8" offset="8"><div class="grid-content bg-purple-light">col-8 | offset-8</div></s-col>
        </s-row>
        <br>
        <s-row>
          <s-col span="6" offset="8"><div class="grid-content bg-purple">col-6 | offset-8</div></s-col>
          <s-col span="6" offset="4"><div class="grid-content bg-purple-light">col-6 | offset-4</div></s-col>
        </s-row>
        <br>
        <s-row>
          <s-col span="12" offset="8"><div class="grid-content bg-purple">col-12 | offset-8</div></s-col>
        </s-row>
      </div>
      <div class="example-code" >
        <pre><code>
&lt;template&gt;
  &lt;s-row&gt;
      &lt;s-col span="8"&gt;col-8&lt;/s-col&gt;
          &lt;s-col span="8" offset="8"&gt;col-8 | offset-8&lt;/s-col&gt;
  &lt;/s-row&gt;
  &lt;br&gt;
  &lt;s-row&gt;
      &lt;s-col span="6" offset="8"&gt;col-6 | offset-8&lt;/s-col&gt;
      &lt;s-col span="6" offset="4"&gt;col-6 | offset-4&lt;/s-col&gt;
  &lt;/s-row&gt;
  &lt;br&gt;
  &lt;s-row&gt;
      &lt;s-col span="12" offset="8"&gt;col-12 | offset-8&lt;/s-col&gt;
      &lt;/s-row&gt;
&lt;/template&gt;

&lt;script&gt;
    export default {

    }
&lt;/script&gt;
        </code></pre>
      </div>
    </div>

    <h3>对齐方式</h3>
    <p>通过 <code>flex</code>的对齐方法来对分栏进行灵活的对齐。</p>
    <div class="example">
      <div class="example-demo">
        <p>子元素向左排列</p>
        <s-row type="flex" justify="start" class="row-bg">
          <s-col span="4"><div class="grid-content bg-purple">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple-light">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple-light">col-4</div></s-col>
        </s-row>
        <p>子元素向右排列</p>
        <s-row type="flex" justify="end" class="row-bg">
          <s-col span="4"><div class="grid-content bg-purple">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple-light">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple-light">col-4</div></s-col>
        </s-row>
        <p>子元素居中排列</p>
        <s-row type="flex" justify="center" class="row-bg">
          <s-col span="4"><div class="grid-content bg-purple">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple-light">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple-light">col-4</div></s-col>
        </s-row>
        <p>子元素等宽排列</p>
        <s-row type="flex" justify="between" class="row-bg">
          <s-col span="4"><div class="grid-content bg-purple">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple-light">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple-light">col-4</div></s-col>
        </s-row>
        <p>子元素分散排列</p>
        <s-row type="flex" justify="around" class="row-bg">
          <s-col span="4"><div class="grid-content bg-purple">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple-light">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple">col-4</div></s-col>
          <s-col span="4"><div class="grid-content bg-purple-light">col-4</div></s-col>
        </s-row>
      </div>

      <div class="example-code" >
        <pre><code>
&lt;template&gt;
  &lt;p&gt;子元素向左排列&lt;/p&gt;
  &lt;s-row type="flex" justify="start"&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
  &lt;/s-row&gt;
  &lt;p&gt;子元素向右排列&lt;/p&gt;
  &lt;s-row type="flex" justify="end"&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
  &lt;/s-row&gt;
  &lt;p&gt;子元素居中排列&lt;/p&gt;
  &lt;s-row type="flex" justify="center"&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
  &lt;/s-row&gt;
  &lt;p&gt;子元素等宽排列&lt;/p&gt;
  &lt;s-row type="flex" justify="between"&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
  &lt;/s-row&gt;
  &lt;p>子元素分散排列&lt;/p&gt;
  &lt;s-row type="flex" justify="around"&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
    &lt;s-col span="4"&gt;s-col-4&lt;/s-col&gt;
  &lt;/s-row&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {

  }
&lt;/script&gt;
        </code></pre>
      </div>
    </div>

    <h3>Order排序</h3>
    <p>支持flex模式下order调整栅格顺序</p>

    <h3>Row Attributes</h3>
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
        <td>gutter</td>
        <td>栅格间隔</td>
        <td>number</td>
        <td>—</td>
        <td>0</td>
      </tr>
      <tr>
        <td>type</td>
        <td>布局模式，可选 flex，现代浏览器下有效</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>justify</td>
        <td>flex 布局下的水平排列方式</td>
        <td>string</td>
        <td>start/end/center/around/between</td>
        <td>start</td>
      </tr>
      <tr>
        <td>align</td>
        <td>flex 布局下的垂直排列方式</td>
        <td>string</td>
        <td>top/middle/bottom</td>
        <td>top</td>
      </tr>
      <tr>
        <td>className | class</td>
        <td>自定义class名称</td>
        <td>String</td>
        <td>—</td>
        <td>—</td>
      </tr>
      </tbody>
    </table>
    <h3 id="col-attributes">Col Attributes</h3>
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
        <td>span</td>
        <td>栅格占据的列数</td>
        <td>number</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>栅格左侧的间隔格数</td>
        <td>number</td>
        <td>—</td>
        <td>0</td>
      </tr>
      <tr>
        <td>push</td>
        <td>栅格向右移动格数</td>
        <td>number</td>
        <td>—</td>
        <td>0</td>
      </tr>
      <tr>
        <td>pull</td>
        <td>栅格向左移动格数</td>
        <td>number</td>
        <td>—</td>
        <td>0</td>
      </tr>
      <tr>
        <td>order</td>
        <td>flex模式下顺序</td>
        <td>number</td>
        <td>—</td>
        <td>0</td>
      </tr>
      <tr>
        <td>className | class</td>
        <td>自定义class名称</td>
        <td>String</td>
        <td>—</td>
        <td>—</td>
      </tr>
      </tbody>
    </table>
  </article>
</template>