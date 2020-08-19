<template>
  <article class="article">
    <h1>Popover</h1>

    <h3>基础用法</h3>
    <p>Popover 的属性与 Tooltip 很类似，它们都是基于<code>Vue-popper</code>开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。</p>
    <div class="example">
      <div class="example-demo">
        <s-popover
          ref="popover1"
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        </s-popover>

        <s-popover
          ref="popover2"
          placement="bottom"
          title="标题"
          width="200"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        </s-popover>

        <s-button v-popover:popover1>hover 激活</s-button>
        <s-button v-popover:popover2>click 激活</s-button>
        <s-popover
          placement="right"
          title="标题"
          width="200"
          trigger="focus"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <s-button slot="reference">focus 激活</s-button>
        </s-popover>
        <s-popover
          placement="bottom"
          title="标题"
          width="200"
          trigger="manual"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          v-model="visible">
          <s-button slot="reference" @click="visible = !visible">手动激活</s-button>
        </s-popover>
      </div>
      <example-code>
        <textarea>
          &lt;s-popover
             ref="popover1"
             placement="top-start"
             title="标题"
             width="200"
             trigger="hover"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          &lt;/s-popover&gt;
          &lt;s-popover
             ref="popover2"
             placement="bottom"
             title="标题"
             width="200"
             trigger="click"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          &lt;/s-popover&gt;
            &lt;s-button v-popover:popover1&gt;hover 激活&lt;/s-button&gt;
            &lt;s-button v-popover:popover2&gt;click 激活&lt;/s-button&gt;
          &lt;s-popover
             placement="right"
             title="标题"
             width="200"
             trigger="focus"
             content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            &lt;s-button slot="reference"&gt;focus 激活&lt;/s-button&gt;
          &lt;/s-popover&gt;
          &lt;s-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="manual"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            v-mods="visible"&gt;
            &lt;s-button slot="reference" @click="visible = !visible"&gt;手动激活&lt;/s-button&gt;
          &lt;/s-popover&gt;
          &lt;script&gt;
            export default {
              data() {
                return {
                  visible: false
                };
              }
            };
          &lt;/script&gt;
        </textarea>
        <div class="description"><p>
          设置索引<code>ref</code>，在按钮中，我们注册了自定义指令<code>v-popover</code>，指向索引ID。<code>trigger</code>属性用于设置何时触发 Popover
          ，提供四种触发方式：<code>hover</code>, <code>click</code> 和 <code>focus</code>, <code>manual</code>。第二种用法通过 <code>slot</code> 指定
          reference。</p></div>
        <pre><code>
        </code></pre>
      </example-code>
    </div>

    <h3>嵌套信息</h3>
    <p>可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。</p>
    <div class="example">
      <div class="example-demo">
        <s-popover
          ref="popover4"
          placement="right"
          width="400"
          trigger="click">
          <s-table :data="gridData">
            <s-table-column width="150" property="date" label="日期"></s-table-column>
            <s-table-column width="100" property="name" label="姓名"></s-table-column>
            <s-table-column width="300" property="address" label="地址"></s-table-column>
          </s-table>
        </s-popover>
        <s-button v-popover:popover4>click 激活</s-button>
      </div>
      <example-code>
        <textarea>
          &lt;s-popover
            ref="popover4"
            placement="right"
            width="400"
            trigger="click"&gt;
            &lt;s-table :data="gridData"&gt;
              &lt;s-table-column width="150" property="date" label="日期"&gt;&lt;/s-table-column&gt;
              &lt;s-table-column width="100" property="name" label="姓名"&gt;&lt;/s-table-column&gt;
              &lt;s-table-column width="300" property="address" label="地址"&gt;&lt;/s-table-column&gt;
            &lt;/s-table&gt;
          &lt;/s-popover&gt;
          &lt;s-button v-popover:popover4&gt;click 激活&lt;/s-butto&gt;
          &lt;script&gt;
            export default {
              data() {
                return {
                  gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                  }]
                };
              }
            };
          &lt;/script&gt;
        </textarea>
        <div class="description"><p>利用分发取代<code>content</code>属性</p></div>
        <pre><code>
        </code></pre>
      </example-code>
    </div>

    <h3>嵌套操作</h3>
    <p>当然，你还可以嵌套操作，这相比 Dialog 更为轻量：</p>
    <div class="example">
      <div class="example-demo">
        <s-popover
          ref="popover5"
          placement="top"
          width="160"
          v-model="visible2">
          <p>这是一段内容这是一段内容确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <s-button size="mini" type="text" @click="visible2 = false">取消</s-button>
            <s-button type="primary" size="mini" @click="visible2 = false">确定</s-button>
          </div>
        </s-popover>

        <s-button v-popover:popover5>删除</s-button>
      </div>
      <example-code>
        <textarea>
          &lt;s-popover
            ref="popover5"
            placement="top"
            width="160"
            v-model="visible2"&gt;
            &lt;p&gt;这是一段内容这是一段内容确定删除吗？&lt;/p&gt;
            &lt;div style="text-align: right; margin: 0"&gt;
              &lt;s-button size="mini" type="text" @click="visible2 = false"&gt;取消&lt;/s-button&gt;
              &lt;s-button type="primary" size="mini" @click="visible2 = false">确定&lt;/s-button&gt;
            &lt;/div&gt;
          &lt;/s-popover&gt;
          &lt;s-button v-popover:popover5&gt;删除&lt;/s-button&gt;
          &lt;script&gt;
            export default {
              data() {
                return {
                  visible2: false,
                };
              }
            }
          &lt;/script&gt;
        </textarea>
        <pre><code>
        </code></pre>
      </example-code>
    </div>

    <h3 id="attributes"> Attributes</h3>
    <s-tb>
      <s-tb-i title="trigger" desc="触发方式" type="String" value="click/focus/hover/manual" init="click"></s-tb-i>
      <s-tb-i title="title" desc="标题" type="String" value="-" init="-"></s-tb-i>
      <s-tb-i title="content" desc="显示的内容，也可以通过 slot 传入 DOM" type="String" value="-" init="-"></s-tb-i>
      <s-tb-i title="width" desc="宽度" type="String, Number" value="-" init="最小宽度 150px"></s-tb-i>
      <s-tb-i title="placement" desc="出现位置" type="String" value="top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end" init="bottom"></s-tb-i>
      <s-tb-i title="disabled" desc="Popover 是否可用" type="Boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="value(v-model)" desc="状态是否可见" type="Boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="offset" desc="出现位置的偏移量" type="Number" value="-" init="0"></s-tb-i>
      <s-tb-i title="transition" desc="定义渐变动画" type="String" value="-" init="	fade-in-linear"></s-tb-i>
      <s-tb-i title="visible-arrow" desc="是否显示 Tooltip 箭头，更多参数可见Vue-popper" type="Boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="popper-options" desc="popper.js 的参数" type="Object" value="参考 popper.js 文档" init="{ boundariesElement: 'body', gpuAcceleration: false }"></s-tb-i>
      <s-tb-i title="popper-class" desc="为 popper 添加类名" type="String" value="-" init="-"></s-tb-i>
      <s-tb-i title="open-delay" desc="触发方式为 hover 时的显示延迟，单位为毫秒	" type="Number" value="-" init="-"></s-tb-i>
      <s-tb-i title="close-delay" desc="触发方式为 hover 时的隐藏延迟，单位为毫秒	" type="Number" value="-" init="200"></s-tb-i>
      <s-tb-i title="tabindex" desc="Popover 组件的 tabindex	" type="Number" value="-" init="0"></s-tb-i>
    </s-tb>

    <h3 id="slot"> Slot</h3>
    <table class="table">
      <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>—</td>
        <td>Popover 内嵌 HTML 文本</td>
      </tr>
      <tr>
        <td>reference</td>
        <td>触发 Popover 显示的 HTML 元素</td>
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
        <td>show</td>
        <td>显示时触发</td>
        <td>—</td>
      </tr>
      <tr>
        <td>after-enter</td>
        <td>显示动画播放完毕后触发</td>
        <td>—</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>隐藏时触发</td>
        <td>—</td>
      </tr>
      <tr>
        <td>after-leave</td>
        <td>隐藏动画播放完毕后触发</td>
        <td>—</td>
      </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  export default {


    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'AAA',
          address: 'XXXXXXXXXXXXXXXX'
        }, {
          date: '2016-05-02',
          name: 'AAA',
          address: 'XXXXXXXXXXXXXXXX'
        }, {
          date: '2016-05-02',
          name: 'AAA',
          address: 'XXXXXXXXXXXXXXXX'
        }, {
          date: '2016-05-02',
          name: 'AAA',
          address: 'XXXXXXXXXXXXXXXX'
        }],
        visible: false,
        visible2: false
      }
    }
  }
</script>