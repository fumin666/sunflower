<template>
  <article class="article">
    <h1>Carousel 轮播</h1>
    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <div class="halfblock">
          <span>默认指示器 hover 时触发</span>
          <s-carousel :autoplay="false">
            <s-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </s-carousel-item>
          </s-carousel>
        </div>
        <div class="halfblock">
          <span>指示器 Click 时触发</span>
          <s-carousel trigger="click" :autoplay="false" height="200px">
            <s-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </s-carousel-item>
          </s-carousel>
        </div>
      </div>
    </div>

    <h3> 指示器</h3>
    <p>可以将指示器的显示位置设置在容器外部</p>
    <div class="example">
      <div class="example-demo">
        <s-carousel indicator-position="outside">
          <s-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </s-carousel-item>
        </s-carousel>
      </div>
      <example-code>
        <div class="description"><p>source
            <code>indicator-position</code>属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为<code>outside</code>则会显示在外部；设置为<code>none</code>则不会显示指示器。
          </p></div>
        <pre><code>
&lt;template&gt;
  &lt;s-carousel indicator-position="outside"&gt;
    &lt;s-carousel-item v-for="item in 4"&gt;
      &lt;h3&gt;{{ item }}&lt;/h3&gt;
    &lt;/s-carousel-item&gt;
  &lt;/s-carousel&gt;
&lt;/template&gt;
        </code></pre>
      </example-code>
    </div>

    <h3> 切换箭头</h3>
    <p>可以设置切换箭头的显示时机</p>
    <div class="example">
      <div class="example-demo">
        <s-carousel :interval="5000" arrow="always">
          <s-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </s-carousel-item>
        </s-carousel>
      </div>
      <example-code>
        <div class="description"><p><code>arrow</code>属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover
            到走马灯上时才会显示；若将<code>arrow</code>设置为<code>always</code>，则会一直显示；设置为<code>never</code>，则会一直隐藏。
          </p></div>
        <pre><code>
&lt;template&gt;
  &lt;s-carousel :interval="5000" arrow="always"&gt;
    &lt;s-carousel-item v-for="item in 4"&gt;
      &lt;h3>{{ item }}&lt;/h3&gt;
    &lt;/s-carousel-item&gt;
  &lt;/s-carousel&gt;
&lt;/template&gt;
        </code></pre>
      </example-code>
    </div>

    <h3> 卡片化</h3>
    <p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</p>
    <div class="example">
      <div class="example-demo">
        <s-carousel :interval="4000" type="card" height="200px">
          <s-carousel-item v-for="item in 6" key="item">
            <h3>{{ item }}</h3>
          </s-carousel-item>
        </s-carousel>
      </div>
      <example-code>
        <div class="description"><p>将<code>type</code>属性设置为<code>card</code>即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。
          </p></div>
        <pre><code>
&lt;template&gt;
  &lt;s-carousel :interval="4000" type="card" height="200px"&gt;
    &lt;s-carousel-item v-for="item in 6"&gt;
      &lt;h3>{{ item }}&lt;/h3&gt;
    &lt;/s-carousel-item&gt;
  &lt;/s-carousel&gt;
&lt;/template&gt;
        </code></pre>
      </example-code>
    </div>

    <h3>Carousel Attributes</h3>
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
              <td>height</td>
              <td>走马灯的高度</td>
              <td>number</td>
              <td>—</td>
              <td>300</td>
          </tr>
          <tr>
              <td>initial-index</td>
              <td>初始状态激活的幻灯片的索引，从 0 开始</td>
              <td>number</td>
              <td>—</td>
              <td>0</td>
          </tr>
          <tr>
              <td>trigger</td>
              <td>指示器的触发方式</td>
              <td>string</td>
              <td>click</td>
              <td>—</td>
          </tr>
          <tr>
              <td>autoplay</td>
              <td>是否自动切换</td>
              <td>boolean</td>
              <td>—</td>
              <td>true</td>
          </tr>
          <tr>
              <td>interval</td>
              <td>自动切换的时间间隔，单位为毫秒</td>
              <td>number</td>
              <td>—</td>
              <td>3000</td>
          </tr>
          <tr>
              <td>indicator-position</td>
              <td>指示器的位置</td>
              <td>string</td>
              <td>outside/none</td>
              <td>—</td>
          </tr>
          <tr>
              <td>arrow</td>
              <td>切换箭头的显示时机</td>
              <td>string</td>
              <td>always/hover/never</td>
              <td>always</td>
          </tr>
          <tr>
              <td>type</td>
              <td>走马灯的类型</td>
              <td>string</td>
              <td>card</td>
              <td>—</td>
          </tr>
          </tbody>
      </table>
    <h3>Carousel Attributes</h3>
    <table class="table">
          <thead>
          <tr>
              <th>方法名</th>
              <th>说明</th>
              <th>参数</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>setActiveItem</td>
              <td>手动切换幻灯片</td>
              <td>需要切换的幻灯片的索引，从 0 开始；或相应 <code>el-carousel-item</code> 的 <code>name</code> 属性值</td>
          </tr>
          <tr>
              <td>prev</td>
              <td>切换至上一张幻灯片</td>
              <td>—</td>
          </tr>
          <tr>
              <td>next</td>
              <td>切换至下一张幻灯片</td>
              <td>—</td>
          </tr>
          </tbody>
    </table>
    <h3>Carousel-Item Attributes</h3>
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
              <td>name</td>
              <td>幻灯片的名字，可用作 <code>setActiveItem</code> 的参数</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
          </tr>
          </tbody>
    </table>

  </article>
</template>

<script>
  export default {
    data(){
      return {
        item: ''
      }
    }
  }
</script>