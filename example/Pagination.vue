<template>
  <article class="article">
      <h1> Pagination 分页</h1>
      <p>当数据量过多时，使用分页分解数据。</p>
      <h3> 基础用法</h3>
      <div class="example">
        <div class="example-demo">
          <div class="block">
            <span class="demonstration">页数较少时的效果</span>
            <s-pagination
              layout="prev, pager, next"
              :total="50">
            </s-pagination>
          </div>
          <div class="block">
            <span class="demonstration">大于 7 页时的效果</span>
            <s-pagination
              layout="prev, pager, next"
              :total="1000">
            </s-pagination>
          </div>
        </div>
        <div class="example-code">
          <div class="description">
            <p>设置<code>layout</code>，表示需要显示的内容，用逗号分隔，布局元素会依次显示。<code>prev</code>表示上一页，<code>next</code>为上一页，<code>pager</code>表示页码列表，除此以外还提供了<code>jumper</code>和<code>total</code>，<code>size</code>和特殊的布局符号<code>-&gt;</code>，<code>-&gt;</code>后的元素会靠右显示，<code>jumper</code>表示跳页元素，<code>total</code>表示显示页码总数，<code>size</code>用于设置每页显示的页码数量。</p>
          </div>
          <pre><code>
&lt;template&gt;
  &lt;div class="block"&gt;
    &lt;span class="demonstration"&gt;页数较少时的效果&lt;/span&gt;
    &lt;s-pagination
      layout="prev, pager, next"
      :total="50"&gt;
    &lt;/s-pagination&gt;
  &lt;/div&gt;
  &lt;div class="block"&gt;
    &lt;span class="demonstration">大于 7 页时的效果&lt;/span&gt;
      &lt;s-pagination
        layout="prev, pager, next"
        :total="1000"&gt;
      &lt;/s-pagination&gt;
  &lt;/div&gt;
&lt;/template&gt;
          </code></pre>
        </div>
      </div>

      <h3> 小型分页</h3>
      <p>在空间有限的情况下，可以使用简单的小型分页。</p>
      <div class="example">
        <div class="example-demo">
          <s-pagination
            small
            layout="prev, pager, next"
            :total="50">
          </s-pagination>
        </div>
        <div class="example-code">
          <div class="description">
            <p>只需要一个<code>small</code>属性，它接受一个<code>Boolean</code>，默认为<code>false</code>，设为<code>true</code>即可启用。</p>
          </div>
          <pre><code>
&lt;s-pagination
  small
  layout="prev, pager, next"
  :total="50"&gt;
&lt;/s-pagination&gt;
          </code></pre>
        </div>
      </div>

      <h3> 附加功能</h3>
      <p>根据场景需要，可以添加其他功能模块。</p>
      <div class="example">
        <div class="example-demo">
          <div class="block">
            <span class="demonstration">显示总数</span>
            <s-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage1"
              :page-size="100"
              layout="total, prev, pager, next"
              :total="1000">
            </s-pagination>
          </div>
          <div class="block">
            <span class="demonstration">调整每页显示条数</span>
            <s-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage2"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="sizes, prev, pager, next"
              :total="1000">
            </s-pagination>
          </div>
          <div class="block">
            <span class="demonstration">直接前往</span>
            <s-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage3"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
            </s-pagination>
          </div>
          <div class="block">
            <span class="demonstration">不显示边框</span>
            <s-pagination
              :noBorder="true"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </s-pagination>
          </div>
          <div class="block">
            <span class="demonstration">完整功能</span>
            <s-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </s-pagination>
          </div>
        </div>
        <div class="example-code">
          <div class="description">
            <p>此例是一个完整的用例，使用了<code>size-change</code>和<code>current-change</code>事件来处理页码大小和当前页变动时候触发的事件。<code>page-sizes</code>接受一个整型数组，数组元素为展示的选择每页显示个数的选项，<code>[100, 200, 300, 400]</code>表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。</p>
          </div>
          <pre><code>
&lt;template&gt;
  &lt;div class="block"&gt;
    &lt;span class="demonstration"&gt;显示总数&lt;/span&gt;
    &lt;s-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"&gt;
    &lt;/s-pagination&gt;
  &lt;/div&gt;
  &lt;div class="block"&gt;
    &lt;span class="demonstration">调整每页显示条数&lt;/span&gt;
    &lt;s-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000"&gt;
    &lt;/s-pagination&gt;
  &lt;/div&gt;
  &lt;div class="block"&gt;
    &lt;span class="demonstration"&gt;直接前往&lt;/span&gt;
            &lt;s-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000"&gt;
    &lt;/s-pagination&gt;
  &lt;/div&gt;
  &lt;div class="block"&gt;
    &lt;span class="demonstration"&gt;不显示边框&lt;/span&gt;
    &lt;s-pagination
      :noBorder="true"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"&gt;
    &lt;/s-pagination&gt;
  &lt;/div&gt;
  &lt;div class="block"&gt;
    &lt;span class="demonstration"&gt;完整功能&lt;/span&gt;
    &lt;s-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"&gt;
    &lt;/s-pagination&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
&lt;/script&gt;
          </code></pre>
        </div>
      </div>

      <h1> 无限分页</h1>
      <p>大数据使用无限分页，必须给组件传递ajaxObj(包含了ajax请求的type、url、参数)</p>
      <div class="example">
        <div class="example-demo">
          <s-page-infinite
            loading-text="正在加载中"
            :ajax-obj="ajaxObj"
          >
            <s-table-column
              prop="num"
              label="index"
            ></s-table-column>
          </s-page-infinite>
        </div>
        <div class="example-code">
          <div class="description">
            <p>1. 无限分页里表格的渲染跟普通<code>s-table</code>相同，内部填充<code>s-table-column</code>,<code>s-table-column</code>的属性请查看表格组件</p>
            <p>2. 必须要传递`ajaxObj`对象,例子：<code>{type:'get',url:'/infinitePagination',params:{}}</code>。由于和后端的约定，我们传递的<code>params</code>里默认已经有如下属性:</p>
            <p>  - condition</p>
            <p>  - currentPage</p>
            <p>  - totalCount</p>
            <p>  - pageSize</p>
            <p>  - pageList</p>
            <p>  - distinct</p>
            <p>  - orderByClause</p>

            <p>若需修改和添加属性，修改<code>ajaxObj.params</code></p>
            <p>  **ps:**此组件支持部分定制化,<p/>

            <p>  - <code>pageSize</code>  [<code>Number</code>]:设置表格默认显示的条数</p>
            <p>  - <code>pageSizes</code>  [<code>Array</code>]:设置分页条选择每页显示条数的选项</p>
            <p>  - <code>loadingText</code> [<code>String</code>]:设置动态加载时显示的文字</p>
            </p>
          </div>
          <pre><code>
&lt;template&gt;
  &lt;s-page-infinite
    loading-text="正在加载中"
    :ajax-obj="ajaxObj"&gt;
    &lt;s-table-column
      prop="num"
      label="index"&gt;
    &lt;/s-table-column&gt;
  &lt;/s-page-infinite&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        ajaxObj:{
          type:'get',
          url:'/infinitePagination',
          params:{}
        }
      }
    }
  }
&lt;/script&gt;
          </code></pre>
        </div>
      </div>

      <h3> Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>small</td><td>是否使用小型分页样式</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>page-size</td><td>每页显示条目个数</td><td>Number</td><td>—</td><td>10</td></tr><tr><td>total</td><td>总条目数</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>page-count</td><td>总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>current-page</td><td>当前页数</td><td>Number</td><td>—</td><td>1</td></tr><tr><td>layout</td><td>组件布局，子组件名用逗号分隔</td><td>String</td><td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>, <code>total</code>, <code>slot</code></td><td>'prev, pager, next, jumper, -&gt;, total'</td></tr><tr><td>page-sizes</td><td>每页显示个数选择器的选项设置</td><td>Number[]</td><td>—</td><td>[10, 20, 30, 40, 50, 100]</td></tr>
      <tr><td>popper-class</td><td>每页显示个数选择器的下拉框类名</td><td>string</td><td>—</td><td>—</td></tr>
      <tr><td>prev-text</td><td>替代图标显示的上一页文字</td><td>string</td><td>—</td><td>—</td></tr>
      <tr><td>next-text</td><td>替代图标显示的下一页文字</td><td>string</td><td>—</td><td>—</td></tr>
      <tr><td>noBorder</td><td>不显示边框</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
      <h3 id="events"> Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>size-change</td><td>pageSize 改变时会触发</td><td>每页条数<code>size</code></td></tr><tr><td>current-change</td><td>currentPage 改变时会触发</td><td>当前页<code>currentPage</code></td></tr></tbody></table>
      <h3 id="slot"> Slot</h3>
      <table class="table"><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>自定义内容，需要在 <code>layout</code> 中列出 <code>slot</code></td></tr></tbody></table>

  </article>
</template>

<script>
  export default {
    methods: {
      handleSizeChange(val) {
        this.pageSize = val;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage: 1,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        pageSize: 10,
        ajaxObj: {
          type: 'get',
          url: '/infinitePagination',
          params: {}
        }
      }
    }
  }
</script>
