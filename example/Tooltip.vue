<template>
  <article class="article">
    <h1>Tooltip</h1>

    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <div class="tooltip-box">
          <div class="top">
            <s-tooltip class="item" content="Top Left 提示文字" placement="top-start"><s-button>上左</s-button></s-tooltip>
            <s-tooltip class="item" content="Top Center 提示文字" placement="top"><s-button>上边</s-button></s-tooltip>
            <s-tooltip class="item" content="Top Right 提示文字" placement="top-end"><s-button>上右</s-button></s-tooltip>
          </div>
          <div class="left">
            <s-tooltip class="item" content="Left Top 提示文字" placement="left-start"><s-button>左上</s-button></s-tooltip>
            <s-tooltip class="item" content="Left Center 提示文字" placement="left"><s-button>左边</s-button></s-tooltip>
            <s-tooltip class="item" content="Left Bottom 提示文字"  placement="left-end"><s-button>左下</s-button></s-tooltip>
          </div>
          <div class="right">
            <s-tooltip class="item" content="Right Top 提示文字" placement="right-start"><s-button>右上</s-button></s-tooltip>
            <s-tooltip class="item" content="Right Center 提示文字" placement="right"><s-button>右边</s-button></s-tooltip>
            <s-tooltip class="item" content="Right Bottom 提示文字" placement="right-end"><s-button>右下</s-button></s-tooltip>
          </div>
          <div class="bottom">
            <s-tooltip class="item" content="Bottom Left 提示文字" placement="bottom-start"><s-button>下左</s-button></s-tooltip>
            <s-tooltip class="item" content="Bottom Center 提示文字" placement="bottom"><s-button>下边</s-button></s-tooltip>
            <s-tooltip class="item" content="Bottom Right 提示文字"><s-button>下右</s-button></s-tooltip>
          </div>
        </div>
      </div>
      <example-code>
        <div class="description"><p>使用<code>content</code>属性来决定<code>hover</code>时的提示信息。由<code>placement</code>属性决定展示效果：<code>placement</code>属性值为：<code>方向-对齐位置</code>；四个方向：<code>top</code>、<code>left</code>、<code>right</code>、<code>bottom</code>；三种对齐位置：<code>start</code>,
        <code>end</code>，默认为空。如<code>placement="left-end"</code>，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。</p></div>
        <textarea>
          &lt;div class="box"&gt;
            &lt;div class="top"&gt;
              &lt;s-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start"&gt;
                &lt;s-button&gt;上左&lt;/s-button&gt;
              &lt;/s-tooltip&gt;
              &lt;s-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top"&gt;
                &lt;s-button&gt;上边&lt;/s-button&gt;
              &lt;/s-tooltip&gt;
              &lt;s-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end"&gt;
                &lt;s-button&gt;上右&lt;/s-button&gt;
              &lt;/s-tooltip&gt;
            &lt;/div&gt;
            &lt;div class="left"&gt;
              &lt;s-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start"&gt;
                &lt;s-button&gt;左上&lt;/s-button&gt;
              &lt;/s-tooltip&gt;
              &lt;s-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left"&gt;
                &lt;s-button&gt;左边&lt;/s-button&gt;
              &lt;/s-tooltip&gt;
              &lt;s-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end"&gt;
                &lt;s-button&gt;左下&lt;/s-button&gt;
              &lt;/s-tooltip&gt;
            &lt;/div&gt;

            &lt;div class="right"&gt;
              &lt;s-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start"&gt;
                &lt;s-button&gt;右上&lt;/s-button&gt;
              &lt;/s-tooltip&gt;
              &lt;s-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"&gt;
                &lt;s-button&gt;右边&lt;/s-button&gt;
              &lt;/s-tooltip&gt;
              &lt;s-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end"&gt;
                &lt;s-button&gt;右下&lt;/s-button&gt;
              &lt;/s-tooltip&gt;
            &lt;/div&gt;
            &lt;div class="bottom"&gt;
              &lt;s-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start"&gt;
                &lt;s-button&gt;下左&lt;/s-button&gt;
              &lt;/s-tooltip&gt;
              &lt;s-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom"&gt;
                &lt;s-button&gt;下边&lt;/s-button&gt;
              &lt;/s-tooltip&gt;
              &lt;s-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end"&gt;
                &lt;s-button&gt;下右&lt;/s-button&gt;
              &lt;/s-tooltip&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </textarea>
        <pre><code>
        </code></pre>
      </example-code>
    </div>

    <h3>主题</h3>
    <p>Tooltip 组件提供了两个不同的主题：<code>dark</code>和<code>light</code>。</p>
    <div class="example">
      <div class="example-demo">
        <s-tooltip content="Top center" placement="top">
          <s-button>Dark</s-button>
        </s-tooltip>
        <s-tooltip content="Bottom center" placement="bottom" effect="light">
          <s-button>Light</s-button>
        </s-tooltip>
      </div>
      <example-code>
        <textarea>
          &lt;s-tooltip content="Top center" placement="top"&gt;
            &lt;s-buttonDark&gt;&lt;/s-button&gt;
          &lt;/s-tooltip&gt;
          &lt;s-tooltip content="Bottom center" placement="bottom" effect="light"&gt;
            &lt;s-button&gt;Light&lt;/s-button&gt;
          &lt;/s-tooltip&gt;
        </textarea>
        <div class="description"><p>通过设置<code>effect</code>属性来改变主题，默认为<code>dark</code>。</p></div>
        <pre><code>
        </code></pre>
      </example-code>
    </div>

    <h3>更多 Content</h3>
    <p>展示多行文本或者是设置文本内容的格式</p>
    <div class="example">
      <div class="example-demo">
        <s-tooltip placement="top">
          <div slot="content">多行信息<br/>第二行信息</div>
          <s-button>Top center</s-button>
        </s-tooltip>
      </div>
      <example-code>
        <textarea>
          &lt;s-tooltip placement="top"&gt;
            &lt;div slot="content"&gt;多行信息&lt;br/&gt;第二行信息&lt;/div&gt;
            &lt;s-button&gt;Top center&lt;/s-button&gt;
          &lt;/s-tooltip&gt;
        </textarea>
          <div class="description"><p>用具名 slot 分发<code>content</code>，替代<code>tooltip</code>中的<code>content</code>属性。
          </p></div>
          <pre><code>
          </code></pre>
      </example-code>
    </div>

    <h3>高级扩展</h3>
    <p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：</p>
    <p><code>transition</code>属性可以定制显隐的动画效果，默认为<code>fade-in-linear</code>。</p>
    <p>如果需要关闭<code>tooltip</code>功能，<code>disabled</code>属性可以满足这个需求，它接受一个<code>Boolean</code>，设置为<code>true</code>即可。
        </p>
    <p>事实上，这是基于 Vue-popper 的扩展，你可以自定义任意 Vue-popper
          中允许定义的字段。</p>
    <p>当然，Tooltip 组件实际上十分强大，文末的API文档会做一一说明。</p>
    <div class="example">
      <div class="example-demo">
        <s-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
          <s-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</s-button>
        </s-tooltip>
      </div>
      <example-code>
        <textarea>
          &lt;template&gt;
            &lt;s-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light"&gt;
              &lt;s-button @click="disabled = !disabled"&gt;点击{{disabled ? '开启' : '关闭'}} tooltip 功能&lt;/s-button&gt;
            &lt;/s-tooltip&gt;
          &lt;/template&gt;
          &lt;script&gt;
            export default {
              data () {
                return () {
                  disabled: 'disabled'
                }
              }
            }
          &lt;/script&gt;
        </textarea>
        <pre> <code>
        </code></pre>
      </example-code>
    </div>

    <div class="tip">
      <p>tooltip 内不支持 <code>router-link</code> 组件，请使用 <code>vm.$router.push</code> 代替。</p>
      <p>tooltip 内不支持 disabled form 元素，参考<a href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>，请在 disabled form 元素外层添加一层包裹元素。</p>
    </div>

    <h3 id="attributes"> Attributes</h3>
    <s-tb>
      <s-tb-i title="effect" desc="默认提供的主题" type="String" value="dark/light" init="dark"></s-tb-i>
      <s-tb-i title="content" desc="显示的内容，也可以通过 slot#content 传入 DOM" type="String" value="-" init="-"></s-tb-i>
      <s-tb-i title="placement" desc="Tooltip 的出现位置" type="String" value="top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end" init="bottom"></s-tb-i>
      <s-tb-i title="value(v-model)" desc="状态是否可见" type="Boolean" value="—" init="false"></s-tb-i>
      <s-tb-i title="disabled" desc="Tooltip 是否可用" type="Boolean" value="—" init="false"></s-tb-i>
      <s-tb-i title="offset" desc="出现位置的偏移量" type="Number" value="-" init="0"></s-tb-i>
      <s-tb-i title="transition" desc="定义渐变动画" type="String" value="-" init="fade-in-linear"></s-tb-i>
      <s-tb-i title="visible-arrow" desc="是否显示 Tooltip 箭头，更多参数可见Vue-popper" type="Boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="options" desc="popper.js 的参数" type="Object" value="参考 popper.js 文档" init="{ boundariesElement: 'body', gpuAcceleration: false }"></s-tb-i>
      <s-tb-i title="openDelay" desc="延迟出现，单位毫秒" type="Number" value="-" init="0"></s-tb-i>
      <s-tb-i title="manual" desc="手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效" type="Boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="popper-class" desc="为 Tooltip 的 popper 添加类名" type="String" value="-" init="-"></s-tb-i>
      <s-tb-i title="enterable" desc="鼠标是否可进入到 tooltip 中" type="Boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="hide-after" desc="Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏" type="Number" value="-" init="0"></s-tb-i>
    </s-tb>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        disabled: 'disabled'
      }
    }
  }
</script>

<style>
  .example-demo .tooltip-box {
    width: 400px;
  }
  .example-demo .tooltip-box .top {
    text-align: center;
  }
  .example-demo .tooltip-box .left {
    float: left;
    width: 68px;
  }
  .example-demo .tooltip-box .right {
    float: right;
    width: 68px;
  }
  .example-demo .tooltip-box .bottom {
    clear: both;
    text-align: center;
  }
  .example-demo .tooltip-box .item {
    margin: 4px 0;
  }
</style>