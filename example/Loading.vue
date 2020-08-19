<template>
  <article class="article">
    <h1>Loading加载</h1>

    <p>加载数据时显示动效。</p>
    <h3> 区域加载</h3>
    <p>在表格等容器中加载数据时显示。</p>
    <div class="example">
      <div class="example-demo">
        <s-table
            v-loading="loading"
          :data="tableData"
          style="width: 100%">
          <s-table-column
            prop="date"
            label="日期"
            width="180">
          </s-table-column>
          <s-table-column
            prop="name"
            label="姓名"
            width="180">
          </s-table-column>
          <s-table-column
            prop="address"
            label="地址">
          </s-table-column>
        </s-table>
      </div>
    </div>

    <h3>加载文案</h3>
    <p>可自定义加载文案。</p>
    <div class="example">
      <div class="example-demo">
        <s-table
          v-loading="loading2"
          element-loading-text="拼命加载中"
          :data="tableData"
          style="width: 100%">
          <s-table-column
            prop="date"
            label="日期"
            width="180">
          </s-table-column>
          <s-table-column
            prop="name"
            label="姓名"
            width="180">
          </s-table-column>
          <s-table-column
            prop="address"
            label="地址">
          </s-table-column>
        </s-table>
      </div>
      <example-code>
        <div class="description"><p>在绑定了<code>v-loading</code>指令的元素上添加<code>element-loading-text</code>属性，其值会被渲染为加载文案，并显示在加载图标的下方。
        </p></div>
        <pre><code>
template&gt;
  &lt;s-table
     v-loading="loading2"
     element-loading-text="拼命加载中"
     :data="tableData"
     style="width: 100%"&gt;
    &lt;s-table-column
       prop="date"
       label="日期"
       width="180"&gt;
    &lt;/s-table-column&gt;
    &lt;s-table-column
       prop="name"
       label="姓名"
       width="180"&gt;
    &lt;/s-table-column&gt;
    &lt;s-table-column
       prop="address"
       label="地址"&gt;
    &lt;/s-table-column&gt;
  &lt;/s-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading2: true
      };
    }
  };
&lt;/script&gt;
        </code></pre>
      </example-code>
    </div>

    <h3>整页加载</h3>
    <p>页面数据加载时显示。</p>
    <div class="example">
      <div class="example-demo">
        <s-button
          type="primary"
          @click="openFullScreen"
          v-loading.fullscreen.lock="fullscreenLoading">
          显示整页加载，3 秒后消失
        </s-button>
      </div>
      <example-code>
        <div class="description"><p>
          当需要全屏遮罩时，可使用<code>fullscreen</code>修饰符（此时遮罩会插入至 body 上）。此时若需要锁定屏幕的滚动，可以使用<code>lock</code>修饰符。
        </p></div>
        <pre><code>
&lt;template&gt;
  &lt;s-button
     type="primary"
     @click="openFullScreen"
     v-loading.fullscreen.lock="fullscreenLoading"&gt;
    显示整页加载，3 秒后消失
  &lt;/s-button&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 3000);
      }
    }
  }
&lt;/script&gt;
        </code></pre>
      </example-code>
    </div>

    <!--<h3>服务</h3>
    <p>Loading 还可以以服务的方式调用。引入 Loading 服务：</p>
    <example-code>
      <pre><code>import { Loading } from 'element-ui';</code></pre>
    </example-code>
    <p>在需要调用时：</p>
    <example-code>
      <pre><code>Loading.service(options);</code></pre>
    </example-code>
    <p>其中 <code>options</code> 参数为 Loading 的配置项，具体见下表。<code>LoadingService</code>
      会返回一个 Loading 实例，可通过调用该实例的 <code>close</code>
      方法来关闭它：</p>
    <example-code>
            <pre><code>let loadingInstance = Loading.service(options);
loadingInstance.close();</code></pre>
    </example-code>
    <p>需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading
      的实例：</p>
    <example-code>
            <pre><code>
let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
            </code></pre>
    </example-code>
    <p>此时调用它们中任意一个的 <code>close</code> 方法都能关闭这个全屏 Loading。</p>
    <p>如果完整引入了 Element，那么 Vue.prototype 上会有一个全局方法 <code>$loading</code>，它的调用方式为：<code>this.$loading(options)</code>，同样会返回一个
      Loading 实例。</p>-->

    <h3 id="options"> Options</h3>
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
        <td>target</td>
        <td>Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 <code>document.querySelector</code>以获取到对应 DOM 节点
        </td>
        <td>object/string</td>
        <td>—</td>
        <td>document.body</td>
      </tr>
      <tr>
        <td>body</td>
        <td>同 <code>v-loading</code> 指令中的 <code>body</code> 修饰符</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>fullscreen</td>
        <td>同 <code>v-loading</code> 指令中的 <code>fullscreen</code> 修饰符</td>
        <td>boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
      <tr>
        <td>lock</td>
        <td>同 <code>v-loading</code> 指令中的 <code>lock</code> 修饰符</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>text</td>
        <td>显示在加载图标下方的加载文案</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>customClass</td>
        <td>Loading 的自定义类名</td>
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
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true,
        loading2: true,
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 3000);
      }
    }
  }
</script>
