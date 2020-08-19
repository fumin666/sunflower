<template>
  <article class="article">
    <h1>Card 卡片</h1>
    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <s-card class="box-card">
          <div slot="header" class="clearfix">
              <span><span style="border-left: 3px solid orange;margin-right:10px;"></span>卡片名称</span>
              <s-button style="float: right; padding: 3px 0">操作按钮</s-button>
          </div>
          <div v-for="o in 4" class="text item">{{ "列表内容 " + o }}</div>
        </s-card>
      </div>
      <div class="example-code">
        <div class="description"><p>Card 组件包括<code>header</code>和<code
        >body</code>部分，<code>header</code>部分需要有显式具名 slot 分发，同时也是可选的。
        </p></div>
        <pre><code>
          &lt;s-card class="box-card"&gt;
            &lt;div slot="header" class="clearfix"&gt;
              &lt;span&gt;卡片名称&lt;/span&gt;
              &lt;s-button &gt;操作按钮&lt;/s-button&gt;
            &lt;/div&gt;
            &lt;div v-for="o in 4" class="text item"&gt;{{ "列表内容 " + '+ o' }}&lt;/div&gt;
          &lt;/s-card&gt;
          &lt;style&gt;
            .text {
              font-size: 14px;
            }
            .item {
              padding: 18px 0;
            }
            .clearfix:before,
            .clearfix:after {
              display: table;
              content: "";
            }
            .clearfix:after {
              clear: both
            }
            .box-card {
              width: 480px;
            }
          &lt;/style&gt;
        </code></pre>
      </div>
    </div>
    <h3> 简单卡片</h3>
    <p>卡片可以只有内容区域。</p>
    <div class="example">
      <div class="example-demo">
        <s-card class="box-card">
          <div v-for="o in 4" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </s-card>
      </div>
      <div class="example-code">
        <pre><code>
          &lt;s-card class="box-card"&gt;
            &lt;div v-for="o in 4" class="text item"&gt;
              { {'列表内容 ' + o } }
            &lt;/div&gt;
          &lt;/s-card&gt;
          &lt;style&gt;
            .text {
              font-size: 14px;
            }
            .item {
              padding: 18px 0;
            }
            .box-card {
              width: 480px;
            }
          &lt;/style&gt;
        </code></pre>
      </div>
    </div>
    <h3> 带图片</h3>
    <p>可配置定义更丰富的内容展示。</p>
    <div class="example">
      <div class="example-demo">
        <s-row>
          <s-col :span="8" v-for="(o, index) in 2" :offset="index > 0 ? 2 : 0" :key="o">
            <s-card :body-style="{ padding: '0px' }">
              <img :src="img" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <s-button class="button">操作按钮</s-button>
                </div>
              </div>
            </s-card>
          </s-col>
        </s-row>
      </div>
      <div class="example-code">
        <div class="description"><p>配置<code>body-style</code>属性来自定义<code>body</code>部分的<code>style</code>，我们还使用了布局组件。
        </p></div>
        <pre><code>
          &lt;s-card :body-style="{ padding: '0px' }"&gt;
            &lt;img src="~examples/assets/images/hamburger.png" class="image"&gt;
            &lt;div style="padding: 14px;"&gt;
              &lt;span&gt;好吃的汉堡&lt;/span&gt;
              &lt;div class="bottom clearfix"&gt;
                &lt;time class="time"&gt;{{ currentDate }}&lt;/time&gt;
                &lt;s-button class="button"&gt;操作按钮&lt;/s-button&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/s-card&gt;
          &lt;style&gt;
            .time {
              font-size: 13px;
              color: #999;
            }
            .bottom {
              margin-top: 13px;
              line-height: 12px;
            }
            .button {
              padding: 0;
              float: right;
            }
            .image {
              width: 100%;
              display: block;
            }
            .clearfix:before,
            .clearfix:after {
              display: table;
              content: "";
            }
            .clearfix:after {
              clear: both
            }
          &lt;/style&gt;

          &lt;script&gt;
          export default {
              data() {
                  return {
                      currentDate: new Date()
                  };
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
        <td>header</td>
        <td>设置 header，也可以通过 <code>slot#header</code> 传入 DOM</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>body-style</td>
        <td>设置 body 的样式</td>
        <td>object</td>
        <td>—</td>
        <td>{ padding: '20px' }</td>
      </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        currentDate: new Date(),
        img: './hamburger.png'
      }
    }
  }
</script>