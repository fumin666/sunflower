<template>
  <article class="article">
    <h1>Steps 步骤条</h1>
    <p>引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。</p>
    <h3>基础用法</h3>
    <p>简单的步骤条。</p>
    <div class="example">
      <div class="example-demo">
        <p>当前正在进行第 {{ current0 + 1 }} 步</p>
        <s-steps :current="current0">
          <s-step title="步骤1"></s-step>
          <s-step title="步骤2"></s-step>
          <s-step title="步骤3"></s-step>
          <s-step title="步骤4"></s-step>
        </s-steps>
        <br>
        <s-button @click="current0=next(current0)">下一步</s-button>
      </div>
      <div class="example-code">
        <div class="description" v-marked>
* 设置`current`表明步骤的index,从0开始。
* 设置`title`表明每一步的标题
        </div>
        <div  ><pre><code>
&lt;template&gt;
  &lt;p&gt;当前正在进行第 {{ current0 + 1 }} 步&lt;/p&gt;
  &lt;s-steps :current="current0"&gt;
    &lt;s-step title="步骤1"&gt;&lt;/s-step&gt;
    &lt;s-step title="步骤2"&gt;&lt;/s-step&gt;
    &lt;s-step title="步骤3"&gt;&lt;/s-step&gt;
    &lt;s-step title="步骤4"&gt;&lt;/s-step&gt;
  &lt;/s-steps&gt;
  &lt;br&gt;
  &lt;s-button @click="current0=next(current0)"&gt;下一步&lt;/s-button&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        current0: 0
      }
    },
    methods: {
      next(current) {
        if (current >= 3) {
          current = 0;
        } else {
          current ++;
        }
        return current;
      }
    }
  }
&lt;/script&gt;
        </code></pre></div>
      </div>
    </div>

    <h3>带状态的步骤条</h3>
    <p>指定finish-status来制定完成时的状态</p>
    <div class="example">
      <div class="example-demo">
        <s-steps :current="current1" finish-status="error">
          <s-step title="步骤1" description="这里是该步骤的描述信息"></s-step>
          <s-step title="步骤2" description="这里是该步骤的描述信息"></s-step>
          <s-step title="步骤3" description="这里是该步骤的描述信息"></s-step>
          <s-step title="步骤4" description="这里是该步骤的描述信息"></s-step>
        </s-steps>
        <br>
        <s-button @click="current1=next(current1)">下一步</s-button>
      </div>
      <div class="example-code">
        <div class="description" v-marked>
  - 设置`finish-status`属性可以改变已经完成的步骤的状态。
  - 设置`description`属性来描述步骤。
        </div>
        <div >
          <pre><code>
&lt;template&gt;
  &lt;s-steps :current="current1" finish-status="error"&gt;
    &lt;s-step title="步骤1" description="这里是该步骤的描述信息"&gt;&lt;/s-step&gt;
    &lt;s-step title="步骤2" description="这里是该步骤的描述信息"&gt;&lt;/s-step&gt;
    &lt;s-step title="步骤3" description="这里是该步骤的描述信息"&gt;&lt;/s-step&gt;
    &lt;s-step title="步骤4" description="这里是该步骤的描述信息"&gt;&lt;/s-step&gt;
  &lt;/s-steps&gt;
  &lt;br&gt;
  &lt;s-button @click="current1=next(current1)"&gt;下一步&lt;/s-button&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        current1: 1
      }
    },
    methods: {
      next(current) {
        console.debug(current)
        if (current >= 3) {
          current = 0;
        } else {
          current ++;
        }
        return current;
      }
    }
  }
&lt;/script&gt;
          </code></pre>
        </div>
      </div>
    </div>

    <h3>带图标的步骤条</h3>
    <p>步骤条内可以启用各种自定义的图标。</p>
    <div class="example">
      <div class="example-demo">
        <s-steps  :current="current2">
          <s-step title="步骤 1"><i slot="icon" class="iconfont icon-set"></i></s-step>
          <s-step title="步骤 2"><i slot="icon" class="iconfont icon-cpu"></i></s-step>
          <s-step title="步骤 3"><i slot="icon" class="iconfont icon-clock"></i></s-step>
          <s-step title="步骤 4"><i slot="icon" class="iconfont icon-tag"></i></s-step>
        </s-steps>
        <br>
        <s-button @click="current2=next(current2)">下一步</s-button>
      </div>
      <div class="example-code">
        <div class="description" v-marked>
通过在`s-step`内部插入名称为`icon`的slot来自定义步骤图标
        </div>
        <div >
          <pre><code>
&lt;template&gt;
  &lt;s-steps  :current="current2"&gt;
    &lt;s-step title="步骤 1"&gt;&lt;i slot="icon" class="iconfont icon-set"&gt;&lt;/i&gt;&lt;/s-step&gt;
    &lt;s-step title="步骤 2"&gt;&lt;i slot="icon" class="iconfont icon-cpu"&gt;&lt;/i&gt;&lt;/s-step&gt;
    &lt;s-step title="步骤 3"&gt;&lt;i slot="icon" class="iconfont icon-clock"&gt;&lt;/i&gt;&lt;/s-step&gt;
    &lt;s-step title="步骤 4"&gt;&lt;i slot="icon" class="iconfont icon-tag"&gt;&lt;/i&gt;&lt;/s-step&gt;
  &lt;/s-steps&gt;
  &lt;br&gt;
  &lt;s-button @click="current2=next(current2)"&gt;下一步&lt;/s-button&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        current2: 0
      }
    },
    methods: {
      next(current) {
        console.debug(current)
        if (current >= 3) {
          current = 0;
        } else {
          current ++;
        }
        return current;
      }
    }
  }
&lt;/script&gt;
          </code></pre>
        </div>
      </div>
    </div>


    <h3>竖直进度条</h3>
    <p>每一步骤显示出该步骤的状态。</p>
    <div class="example">
      <div class="example-demo">
        <div style="height: 500px;">
          <s-steps :current="current3" direction="vertical">
            <s-step title="步骤1" description="这里是该步骤的描述信息"></s-step>
            <s-step title="步骤2" ></s-step>
            <s-step title="步骤3" description="这里是该步骤的描述信息"></s-step>
            <s-step title="步骤4" description="这里是该步骤的描述信息"></s-step>
          </s-steps>
        </div>
        <br>
        <s-button @click="current3=next(current3)">下一步</s-button>
      </div>
      <div class="example-code">
        <div class="description" v-marked>
通过设置`direction`来改变步骤条的方向。竖直方向的步骤条高度会占满它的容器。
        </div>
        <div >
          <pre><code>
&lt;template&gt;
  &lt;div style="height: 500px;"&gt;
    &lt;s-steps :current="current3" direction="vertical"&gt;
      &lt;s-step title="步骤1" description="这里是该步骤的描述信息"&gt;&lt;/s-step&gt;
      &lt;s-step title="步骤2" &gt;&lt;/s-step&gt;
      &lt;s-step title="步骤3" description="这里是该步骤的描述信息"&gt;&lt;/s-step&gt;
      &lt;s-step title="步骤4" description="这里是该步骤的描述信息"&gt;&lt;/s-step&gt;
    &lt;/s-steps&gt;
  &lt;/div&gt;
  &lt;br&gt;
  &lt;s-button @click="current3=next(current3)"&gt;下一步&lt;/s-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        current3: 0
      }
    },
    methods: {
      next(current) {
        console.debug(current)
        if (current >= 3) {
          current = 0;
        } else {
          current ++;
        }
        return current;
      }
    }
  }
&lt;/script&gt;
          </code></pre>
        </div>
      </div>
    </div>

    <h3>箭头形水平步骤条</h3>
    <p>步骤条的样式类似于箭头</p>
    <div class="example">
      <div class="example-demo">
        <p>当前正在进行第 {{ current4 + 1 }} 步</p>
        <s-steps :current="current4" type="arrow" step-width="100px">
          <s-step title="步骤1"></s-step>
          <s-step title="步骤2"></s-step>
          <s-step title="步骤3"></s-step>
          <s-step title="步骤4"></s-step>
        </s-steps>
        <br>
        <s-button @click="current4=next(current4)">下一步</s-button>
      </div>
      <div class="example-code">
        <div class="description" v-marked>
通过设置`type`为 arrow 将步骤条的样式改为箭头型，此样式没有`description`等额外功能。

**额外属性:**
1. `s-steps`上绑定 **step-width**可设置图标和文字部分的宽度
        </div>
        <div >
          <pre><code>
&lt;template&gt;
  &lt;p&gt;当前正在进行第 {{ current4 + 1 }} 步&lt;/p&gt;
  &lt;s-steps :current="current4" type="arrow" step-width="100px"&gt;
    &lt;s-step title="步骤1"&gt;&lt;/s-step&gt;
    &lt;s-step title="步骤2"&gt;&lt;/s-step&gt;
    &lt;s-step title="步骤3"&gt;&lt;/s-step&gt;
    &lt;s-step title="步骤4"&gt;&lt;/s-step&gt;
  &lt;/s-steps&gt;
  &lt;br&gt;
  &lt;s-button @click="current4=next(current4)"&gt;下一步&lt;/s-button&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        current4: 0
      }
    },
    methods: {
      next(current) {
        console.debug(current)
        if (current >= 3) {
          current = 0;
        } else {
          current ++;
        }
        return current;
      }
    }
  }
&lt;/script&gt;
          </code></pre>
        </div>
      </div>
    </div>

    <h3>Steps Attributes</h3>
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
        <td>current</td>
        <td>当前步骤，从 0 开始计数</td>
        <td>Number</td>
        <td>0</td>
      </tr>
      <tr>
        <td>finish-status</td>
        <td>步骤完成时的表现状态，可选值为<code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code></td>
        <td>String</td>
        <td>process</td>
      </tr>
      <tr>
        <td>size</td>
        <td>步骤条的尺寸，可选值为<code>small</code>或者不写</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>direction</td>
        <td>步骤条的方向，可选值为<code>horizontal</code>（水平）或<code>vertical</code>（垂直）</td>
        <td>String</td>
        <td>horizontal</td>
      </tr>
      <tr>
        <td>type</td>
        <td>步骤条的类型,可选值为<code>arrow</code>、<code>default</code></td>
        <td>String</td>
        <td>default</td>
      </tr>
      </tbody>
    </table>
    <h3>Step Attributes</h3>
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
        <td>title</td>
        <td>标题</td>
        <td>String</td>
        <td>空</td>
      </tr>
      <tr>
        <td>content</td>
        <td>步骤的详细描述，可选</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>步骤的图标，可选</td>
        <td>String</td>
        <td>-</td>
      </tr>
      </tbody>
    </table>

  </article>
</template>

<script>
  export default {
    data() {
      return {
        current0: 0,
        current1: 1,
        current2: 0,
        current3: 0,
        current4: 0
      }
    },
    methods: {
      next(current) {
        console.debug(current)
        if (current >= 3) {
          current = 0;
        } else {
          current ++;
        }
        return current;
      }
    }
  }
</script>