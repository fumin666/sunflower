<template>
  <article class="article">
    <h1>Dropdown</h1>
    <p>将动作或菜单折叠到下拉菜单中</p>
    <h3>基础用法</h3>
    <p>移动到下拉菜单上，展开更多操作。</p>
    <div class="example">
      <div class="example-demo">
        <s-dropdown>
          <a href="javascript:void(0)">
            下拉菜单
            <i class="iconfont icon-bottom"></i>
          </a>
          <s-dropdown-menu slot="list">
            <s-dropdown-item>OMA</s-dropdown-item>
            <s-dropdown-item>IMP</s-dropdown-item>
            <s-dropdown-item disabled>DBA</s-dropdown-item>
            <s-dropdown-item>ABC</s-dropdown-item>
            <s-dropdown-item divided>ZXY</s-dropdown-item>
          </s-dropdown-menu>
        </s-dropdown>
        <s-dropdown style="margin-left: 20px">
          <s-button>
            下拉菜单
            <i class="iconfont icon-bottom"></i>
          </s-button>
          <s-dropdown-menu slot="list">
            <s-dropdown-item>OMA</s-dropdown-item>
            <s-dropdown-item>IMP</s-dropdown-item>
            <s-dropdown-item disabled>DBA</s-dropdown-item>
            <s-dropdown-item>ABC</s-dropdown-item>
            <s-dropdown-item divided>ZXY</s-dropdown-item>
          </s-dropdown-menu>
        </s-dropdown>
      </div>
      <div class="example-code">
        <pre><code>
&lt;s-dropdown&gt;
  &lt;a href="javascript:void(0)"&gt;
    下拉菜单
    &lt;i class="iconfont icon-bottom"&gt;&lt;/i&gt;
  &lt;/a&gt;
  &lt;s-dropdown-menu slot="list"&gt;
    &lt;s-dropdown-item>OMA&lt;/s-dropdown-item&gt;
    &lt;s-dropdown-item&gt;IMP&lt;/s-dropdown-item&gt;
    &lt;s-dropdown-item disabled&gt;DBA&lt;/s-dropdown-item&gt;
    &lt;s-dropdown-item&gt;ABC&lt;/s-dropdown-item&gt;
    &lt;s-dropdown-item divided&gt;ZXY&lt;/s-dropdown-item&gt;
  &lt;/s-dropdown-menu&gt;
&lt;/s-dropdown&gt;
&lt;s-dropdown style="margin-left: 20px"&gt;
  &lt;s-button&gt;
    下拉菜单
    &lt;i class="iconfont icon-bottom"&gt;&lt;/i&gt;
  &lt;/s-button&gt;
&lt;s-dropdown-menu slot="list"&gt;
  &lt;s-dropdown-item>OMA&lt;/s-dropdown-item&gt;
  &lt;s-dropdown-item&gt;IMP&lt;/s-dropdown-item&gt;
  &lt;s-dropdown-item disabled&gt;DBA&lt;/s-dropdown-item&gt;
  &lt;s-dropdown-item&gt;ABC&lt;/s-dropdown-item&gt;
  &lt;s-dropdown-item divided&gt;ZXY&lt;/s-dropdown-item&gt;
  &lt;/s-dropdown-menu&gt;
&lt;/s-dropdown&gt;
        </code></pre>
      </div>
    </div>
    <h3>触发方式</h3>
    <p>不同事件来触发</p>
    <div class="example">
      <div class="example-demo">
        <s-dropdown>
          <a href="javascript:void(0)">
            hover 触发
            <i class="iconfont icon-bottom"></i>
          </a>
          <s-dropdown-menu slot="list">
            <s-dropdown-item>驴打滚</s-dropdown-item>
            <s-dropdown-item>炸酱面</s-dropdown-item>
            <s-dropdown-item>豆汁儿</s-dropdown-item>
            <s-dropdown-item>冰糖葫芦</s-dropdown-item>
            <s-dropdown-item>北京烤鸭</s-dropdown-item>
          </s-dropdown-menu>
        </s-dropdown>
        <s-dropdown trigger="click" style="margin-left: 20px">
          <a href="javascript:void(0)">
            click 触发
            <i class="iconfont icon-bottom"></i>
          </a>
          <s-dropdown-menu slot="list">
            <s-dropdown-item>驴打滚</s-dropdown-item>
            <s-dropdown-item>炸酱面</s-dropdown-item>
            <s-dropdown-item>豆汁儿</s-dropdown-item>
            <s-dropdown-item>冰糖葫芦</s-dropdown-item>
            <s-dropdown-item>北京烤鸭</s-dropdown-item>
          </s-dropdown-menu>
        </s-dropdown>
        <s-dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
          <a href="javascript:void(0)" @click="handleOpen">
            custom 触发
            <i class="iconfont icon-bottom"></i>
          </a>
          <s-dropdown-menu slot="list">
            <p>常用于各种自定义下拉内容的场景。</p>
            <div style="text-align: right;margin:10px;">
              <s-button @click="handleClose">关闭</s-button>
            </div>
          </s-dropdown-menu>
        </s-dropdown>
      </div>
      <div class="example-code">
        <pre><code>
&lt;s-dropdown&gt;
 &lt;a href="javascript:void(0)"&gt;
   hover 触发
   &lt;i class="iconfont icon-bottom"&gt;&lt;/i&gt;
 &lt;/a&gt;
 &lt;s-dropdown-menu slot="list"&gt;
   &lt;s-dropdown-item&gt;驴打滚&lt;/s-dropdown-item&gt;
   &lt;s-dropdown-item&gt;炸酱面&lt;/s-dropdown-item&gt;
   &lt;s-dropdown-item&gt;豆汁儿&lt;/s-dropdown-item&gt;
   &lt;s-dropdown-item&gt;冰糖葫芦&lt;/s-dropdown-item&gt;
   &lt;s-dropdown-item&gt;北京烤鸭&lt;/s-dropdown-item&gt;
 &lt;/s-dropdown-menu&gt;
&lt;/s-dropdown&gt;
&lt;s-dropdown trigger="click" style="margin-left: 20px"&gt;
 &lt;a href="javascript:void(0)"&gt;
   click 触发
   &lt;i class="iconfont icon-bottom"&gt;&lt;/i&gt;
 &lt;/a&gt;
 &lt;s-dropdown-menu slot="list"&gt;
   &lt;s-dropdown-item&gt;驴打滚&lt;/s-dropdown-item&gt;
   &lt;s-dropdown-item&gt;炸酱面&lt;/s-dropdown-item&gt;
   &lt;s-dropdown-item&gt;豆汁儿&lt;/s-dropdown-item&gt;
   &lt;s-dropdown-item&gt;冰糖葫芦&lt;/s-dropdown-item&gt;
   &lt;s-dropdown-item&gt;北京烤鸭&lt;/s-dropdown-item&gt;
 &lt;/s-dropdown-menu&gt;
&lt;/s-dropdown&gt;
&lt;s-dropdown trigger="custom" :visible="visible" style="margin-left: 20px"&gt;
 &lt;a href="javascript:void(0)" @click="handleOpen"&gt;
   custom 触发
   &lt;i class="iconfont icon-bottom"&gt;&lt;/i&gt;
 &lt;/a&gt;
 &lt;s-dropdown-menu slot="list"&gt;
   &lt;p&gt;常用于各种自定义下拉内容的场景。&lt;/p&gt;
   &lt;div style="text-align: right;margin:10px;"&gt;
     &lt;s-button type="primary" @click="handleClose"&gt;关闭&lt;/s-button&gt;
   &lt;/div&gt;
 &lt;/s-dropdown-menu&gt;
&lt;/s-dropdown&gt;
        </code></pre>
      </div>
    </div>
    <h3>嵌套用法</h3>
    <p>如何嵌套使用</p>
    <div class="example">
      <div class="example-demo">
        <s-dropdown>
          <a href="javascript:void(0)">
            北京小吃
            <i class="iconfont icon-bottom"></i>
          </a>
          <s-dropdown-menu slot="list">
            <s-dropdown-item>驴打滚</s-dropdown-item>
            <s-dropdown-item>炸酱面</s-dropdown-item>
            <s-dropdown-item>豆汁儿</s-dropdown-item>
            <s-dropdown placement="right-start">
              <s-dropdown-item>
                北京烤鸭
                <i class="iconfont icon-right" style="font-size: 12px;"></i>
              </s-dropdown-item>
              <s-dropdown-menu slot="list">
                <s-dropdown-item>挂炉烤鸭</s-dropdown-item>
                <s-dropdown-item>焖炉烤鸭</s-dropdown-item>
              </s-dropdown-menu>
            </s-dropdown>
            <s-dropdown-item>冰糖葫芦</s-dropdown-item>
          </s-dropdown-menu>
        </s-dropdown>
      </div>
      <div class="example-code">
        <pre><code>
&lt;s-dropdown&gt;
  &lt;a href="javascript:void(0)"&gt;
    北京小吃
    &lt;i class="iconfont icon-bottom"&gt;&lt;/i&gt;
  &lt;/a&gt;
  &lt;s-dropdown-menu slot="list"&gt;
    &lt;s-dropdown-item&gt;驴打滚&lt;/s-dropdown-item&gt;
    &lt;s-dropdown-item&gt;炸酱面&lt;/s-dropdown-item&gt;
    &lt;s-dropdown-item&gt;豆汁儿&lt;/s-dropdown-item&gt;
    &lt;s-dropdown placement="right-start"&gt;
      &lt;s-dropdown-item&gt;
        北京烤鸭
        &lt;i class="iconfont icon-right" style="font-size: 12px;"&gt;&lt;/i&gt;
      &lt;/s-dropdown-item&gt;
      &lt;s-dropdown-menu slot="list"&gt;
        &lt;s-dropdown-item&gt;挂炉烤鸭&lt;/s-dropdown-item&gt;
        &lt;s-dropdown-item&gt;焖炉烤鸭&lt;/s-dropdown-item&gt;
      &lt;/s-dropdown-menu&gt;
    &lt;/s-dropdown&gt;
    &lt;s-dropdown-item&gt;冰糖葫芦&lt;/s-dropdown-item&gt;
  &lt;/s-dropdown-menu&gt;
&lt;/s-dropdown&gt;
        </code></pre>
      </div>
    </div>
    <h3>Dropdown props</h3>
    <table class="table">
      <thead>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>trigger</td>
        <td>触发方式，可选值为 <code>hover</code>（悬停）<code>click</code>（点击）<code>custom</code>（自定义），使用 custom 时，需配合 visible
          一起使用
        </td>
        <td>String</td>
        <td>hover</td>
      </tr>
      <tr>
        <td>visible</td>
        <td>手动控制下拉框的显示，在 trigger = 'custom' 时使用</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>下拉菜单出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>
        </td>
        <td>String</td>
        <td>bottom</td>
      </tr>
      </tbody>
    </table>
    <h3>Dropdown Events</h3>
    <table class="table">
      <thead>
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>on-click</td>
        <td>点击菜单项时触发</td>
        <td>Dropdown-item 的 key 值</td>
      </tr>
      <tr>
        <td>on-visible-change</td>
        <td>菜单显示状态改变时调用</td>
        <td>visible</td>
      </tr>
      </tbody>
    </table>
    <h3>Dropdown slot</h3>
    <table class="table">
      <thead>
      <tr>
        <th>名称</th>
        <th>说明</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>无</td>
        <td>主体内容</td>
      </tr>
      <tr>
        <td>list</td>
        <td>列表内容，一般由 <code>Dropdown-menu</code> 承担</td>
      </tr>
      </tbody>
    </table>
    <h3>Dropdown Menu Item props</h3>
    <table class="table">
      <thead>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>key</td>
        <td>用来标识这一项</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>禁用该项</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>divided</td>
        <td>显示分割线</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>selected</td>
        <td>标记该项为选中状态</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  export default {
    data () {
      return {
        visible: false
      }
    },
    methods: {
      handleOpen () {
        this.visible = true;
      },
      handleClose () {
        this.visible = false;
      }
    }
  }
</script>