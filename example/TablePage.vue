<template>
  <article class="article">
    <h1>TablePage 带分页的表格</h1>
    <p>本组件由三部分组成：顶部(操作按钮、模糊搜索，表格，分页。</p>

    <h3>模拟滚动加载10000条数据</h3>
    <div class="example">
      <div class="example-demo">
        <s-table-page
          :data="tableData"
          border
          :show-header-checkbox="true"
          :rowHeight="48"
          :excess-rows="excessRows"
          height="500"
          useVirtual
          >
          <s-table-column
            type="selection"/>
          <s-table-column
            prop="idx"
            label="idx"
            width="500">
          </s-table-column>
          <s-table-column
            prop="name"
            label="姓名"
            width="500">
          </s-table-column>
          <s-table-column
            prop="province"
            label="省份"
            width="500">
          </s-table-column>
          <s-table-column
            prop="city"
            label="市区"
            width="500">
          </s-table-column>
          <s-table-column
            prop="address"
            label="地址"
            width="500">
          </s-table-column>
          <s-table-column
            prop="zip"
            label="邮编"
            width="500">
          </s-table-column>
          <s-table-column
            fixed="right"
            label="操作"
            width="300"
            >
            <template slot-scope="scope">
              <s-button @click="handleClick(scope.row)" size="small">查看</s-button>
              <s-button size="small">编辑</s-button>
            </template>
          </s-table-column>
        </s-table-page>
      </div>
      <example-code>
        <textarea v-pre>
          <template>
            <s-table-page
              :data="tableData"
              border
              :show-header-checkbox="true"
              :rowHeight="48"
              height="500"
              useVirtual
            >
              <s-table-column
                type="selection"/>
              <s-table-column
                prop="idx"
                label="idx"
                width="500">
              </s-table-column>
              <s-table-column
                prop="name"
                label="姓名"
                width="500">
              </s-table-column>
              <s-table-column
                prop="province"
                label="省份"
                width="500">
              </s-table-column>
              <s-table-column
                prop="city"
                label="市区"
                width="500">
              </s-table-column>
              <s-table-column
                prop="address"
                label="地址"
                width="500">
              </s-table-column>
              <s-table-column
                prop="zip"
                label="邮编"
                width="500">
              </s-table-column>
              <s-table-column
                fixed="right"
                label="操作"
                width="300">
                <template slot-scope="scope">
                  <s-button @click="handleClick(scope.row)" size="small">查看</s-button>
                  <s-button size="small">编辑</s-button>
                </template>
              </s-table-column>
            </s-table-page>
          </template>
          <script>
            export default {
              data() {
                setTimeout(() => {
                  this.tableData = Array.from({ length: 10005 }, (_, idx) => ({
                    idx: idx + 1,
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                  }))
                }, 1000)
                return {
                  tableData: []
                }
              }
            }
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>1. 表格 + 分页</h3>
    <p>只有表格和分页时，props只需传 <strong>data</strong>。</p>
    <div class="example">
      <div class="example-demo">
        <s-table-page
          :data="emailData">
          <s-table-column
            label="工单号"
            prop="orderCode"/>
          <s-table-column
            label="所属流程"
            prop="orderTypeName"/>
          <s-table-column
            label="流程状态"
            prop="orderStatusName"/>
          <s-table-column
            label="发送对象"
            prop="recipientName"/>
          <s-table-column
            label="发送时间"
            prop="createTime"/>
        </s-table-page>
      </div>
      <example-code>
        <textarea v-pre>
    <template>
      <s-table-page
        :data="emailData">
        <s-table-column
          label="工单号"
          prop="orderCode"/>
        <s-table-column
          label="所属流程"
          prop="orderTypeName"/>
        <s-table-column
          label="流程状态"
          prop="orderStatusName"/>
        <s-table-column
          label="发送对象"
          prop="recipientName"/>
        <s-table-column
          label="发送时间"
          prop="createTime"/>
      </s-table-page>
    </template>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>2. 自定义分页</h3>
    <p>此示例初始显示第2页，每页默认5条数据，每页可设置显示5条、10条、20条数据。</p>
    <div class="example">
      <div class="example-demo">
        <s-table-page
          :data="emailData"
          :init-page-number="2"
          :init-page-size="5"
          :page-sizes="[5, 10, 20]">a
          <s-table-column
            label="工单号"
            prop="orderCode"/>
          <s-table-column
            label="所属流程"
            prop="orderTypeName"/>
          <s-table-column
            label="流程状态"
            prop="orderStatusName"/>
          <s-table-column
            label="发送对象"
            prop="recipientName"/>
          <s-table-column
            label="发送时间"
            prop="createTime"/>
        </s-table-page>
      </div>
      <example-code>
        <textarea v-pre>
    <template>
      <s-table-page
        :data="emailData"
        :init-page-number="2"
        :init-page-size="5"
        :page-sizes="[5, 10, 20]">
        <s-table-column
          label="工单号"
          prop="orderCode"/>
        <s-table-column
          label="所属流程"
          prop="orderTypeName"/>
        <s-table-column
          label="流程状态"
          prop="orderStatusName"/>
        <s-table-column
          label="发送对象"
          prop="recipientName"/>
        <s-table-column
          label="发送时间"
          prop="createTime"/>
      </s-table-page>
    </template>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>3. 显示头部操作按钮</h3>
    <p>通过 <strong>header-actions</strong> 来定义表格头部的操作按钮：默认宽度为 12（总宽度为24），默认偏移为0； <strong>actions</strong> 数组的每个对象中，<strong>name</strong> 为按钮文字，<strong>icon</strong> 为按钮图标，<strong>click</strong> 为点击后的方法。</p>
    <div class="example">
      <div class="example-demo">
        <s-table-page
          :data="emailData"
          :border="true"
          :fit="false"
          :header-actions="getHeaderActions()">
          <s-table-column
            fixed="left"
            label="工单号"
            width="500"
            prop="orderCode"/>
          <s-table-column
            label="所属流程"
            width="500"
            prop="orderTypeName"/>
          <s-table-column
            label="流程状态"
            width="300"
            prop="orderStatusName"/>
          <s-table-column
            label="发送对象"
            width="300"
            prop="recipientName"/>
          <s-table-column
            fixed="right"
            width="300"
            label="发送时间"
            prop="createTime"/>
        </s-table-page>
      </div>
      <example-code>
        <textarea v-pre>
    <template>
      <s-table-page
        :data="emailData"
        :border="true"
        :fit="false"
        :header-actions="getHeaderActions()">
        <s-table-column
          label="工单号"
          width="500"
          prop="orderCode"/>
        <s-table-column
          label="所属流程"
          width="500"
          prop="orderTypeName"/>
        <s-table-column
          label="流程状态"
          width="300"
          prop="orderStatusName"/>
        <s-table-column
          label="发送对象"
          width="300"
          prop="recipientName"/>
        <s-table-column
          fixed="right"
          width="300"
          label="发送时间"
          prop="createTime"/>
      </s-table-page>
    </template>
    <script>
      export default {
        methods: {
          getHeaderActions() {
            return {
              width: 12,
              offset: 0,
              actions: [
                {
                  name: '导入',
                  icon: 'import',
                  click: function() {
                    console.log('导入');
                  }
                },
                {
                  name: '导出',
                  icon: 'export',
                  click: function() {
                    console.log('导出');
                  }
                }
              ]
            }
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>4. 显示头部的模糊搜索</h3>
    <p>通过 <strong>header-search</strong> 来定义表格头部的模糊搜索功能：默认宽度为 6（总宽度为24），不需要设置偏移量；<strong>searchProps</strong> 为字符串数组，定义需要进行模糊搜索的字段；<strong>searchFun</strong> 为自定义搜索方法。若同时定义 <strong>searchProps</strong> 和 <strong>searchFun</strong>，则按 <strong>searchProps</strong> 进行搜索。</p>
    <div class="example">
      <div class="example-demo">
        <s-table-page
          :data="emailData"
          :header-search="getHeaderSearch()">
          <s-table-column
            label="工单号"
            prop="orderCode"/>
          <s-table-column
            label="所属流程"
            prop="orderTypeName"/>
          <s-table-column
            label="流程状态"
            prop="orderStatusName"/>
          <s-table-column
            label="发送对象"
            prop="recipientName"/>
          <s-table-column
            label="发送时间"
            prop="createTime"/>
        </s-table-page>
      </div>
      <example-code>
        <textarea v-pre>
    <template>
      <s-table-page
        :data="emailData"
        :header-search="getHeaderSearch()">
        <s-table-column
          label="工单号"
          prop="orderCode"/>
        <s-table-column
          label="所属流程"
          prop="orderTypeName"/>
        <s-table-column
          label="流程状态"
          prop="orderStatusName"/>
        <s-table-column
          label="发送对象"
          prop="recipientName"/>
        <s-table-column
          label="发送时间"
          prop="createTime"/>
      </s-table-page>
    </template>
    <script>
      export default {
        methods: {
          getHeaderSearch() {
            return {
              width: 10,
              placeholder: '请输入工单号、流程状态、发送对象进行查询',
              searchProps: ['orderCode', 'orderTypeName', 'orderStatusName', 'recipientName']
            }
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>5. 显示头部的checkbox显示已选</h3>
    <p>通过设置 <strong>show-header-checkbox</strong> 为 <strong>true</strong> 显示头部的checkbox。通过调用实例的 <strong>getAllSelectedData</strong> 方法即可得到所有已勾选数据。通过 <strong>selectable</strong> 可以实现某些行禁用勾选功能。</p>
    <div class="example">
      <div class="example-demo">
        <s-table-page
          ref="table5"
          :data="emailData"
          :header-actions="getHeaderActions()"
          :header-search="getHeaderSearch()"
          :show-header-checkbox="true"
          @selection-change="handleSelectionChange">
          <s-table-column
            type="selection"
            :selectable="rowSelectable"/>
          <s-table-column
            label="工单号"
            prop="orderCode"/>
          <s-table-column
            label="所属流程"
            prop="orderTypeName"/>
          <s-table-column
            label="流程状态"
            prop="orderStatusName"/>
          <s-table-column
            label="发送对象"
            prop="recipientName"/>
          <s-table-column
            label="发送时间"
            prop="createTime"/>
        </s-table-page>
        <s-button style="margin-top: 20px" @click="handleDemo5Click">获取所有勾选数据（控制台查看）</s-button>
      </div>
      <example-code>
        <textarea v-pre>
    <template>
      <s-table-page
        ref="table5"
        :data="emailData"
        :header-actions="getHeaderActions()"
        :header-search="getHeaderSearch()"
        :show-header-checkbox="true"
        @selection-change="handleSelectionChange">
        <s-table-column
          type="selection"
          :selectable="rowSelectable"/>
        <s-table-column
          label="工单号"
          prop="orderCode"/>
        <s-table-column
          label="所属流程"
          prop="orderTypeName"/>
        <s-table-column
          label="流程状态"
          prop="orderStatusName"/>
        <s-table-column
          label="发送对象"
          prop="recipientName"/>
        <s-table-column
          label="发送时间"
          prop="createTime"/>
      </s-table-page>
      <s-button @click="handleDemo5Click">获取所有勾选数据（控制台查看）</s-button>
    </template>
    <script>
      export default {
        methods: {
          handleDemo5Click() {
            console.log(this.$refs['table5'].getAllSelectedData());
          },
          rowSelectable(row, index) {
            return row.orderTypeName !== '知识库';
          },
          handleSelectionChange(val) {
            console.log(val);
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>6. 显示表格的操作列</h3>
    <p>通过 <strong>row-actions</strong> 来定义表格的操作列：数组的每个对象中，<strong>name</strong> 为鼠标浮动显示的文字，<strong>icon</strong> 为按钮图标，<strong>click</strong> 为点击后的方法（自带参数 <strong>row</strong> 为行数据），<strong>show</strong> 控制当前行是否显示该按钮（自带参数 row 为行数据，也可以使用老办法 rowClassName，通过css隐藏 ）。</p>
    <div class="example">
      <div class="example-demo">
        <s-table-page
          :data="emailData"
          :row-actions="getRowActions()">
          <s-table-column
            label="工单号"
            prop="orderCode"/>
          <s-table-column
            label="所属流程"
            prop="orderTypeName"/>
          <s-table-column
            label="流程状态"
            prop="orderStatusName"/>
          <s-table-column
            label="发送对象"
            prop="recipientName"/>
          <s-table-column
            label="发送时间"
            prop="createTime"/>
        </s-table-page>
      </div>
      <example-code>
        <textarea v-pre>
    <template>
      <s-table-page
        :data="emailData"
        :row-actions="getRowActions()">
        <s-table-column
          label="工单号"
          prop="orderCode"/>
        <s-table-column
          label="所属流程"
          prop="orderTypeName"/>
        <s-table-column
          label="流程状态"
          prop="orderStatusName"/>
        <s-table-column
          label="发送对象"
          prop="recipientName"/>
        <s-table-column
          label="发送时间"
          prop="createTime"/>
      </s-table-page>
    </template>
    <script>
      export default {
        methods: {
          getRowActions() {
            let vm = this;
            return [
              {
                name: '查看',
                icon: 'eye',
                click: (row) => {
                  vm.$message(row.orderCode);
                }
              },
              {
                name: '编辑',
                icon: 'edit',
                click: (row) => {
                  vm.$message(row.createTime);
                },
                show: (row) => {
                  return row.orderTypeName !== '知识库';
                }
              }
            ]
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>7. 带筛选、排序功能的表格</h3>
    <p>在需要排序的列中添加 <strong>sortable</strong> 属性即可实现该列的排序功能。</p>
    <p>在需要筛选的列中添加 <strong>filters、filter-method</strong> 属性即可实现该列的筛选功能。<strong>filters</strong> 数组的每个对象中，<strong>text</strong> 为筛选面板中可选项的显示项，<strong>value</strong> 为对应的数据值。<strong>filter-method</strong> 方法自带两个参数，<strong>value</strong> 为筛选面板选中值的遍历项，<strong>row</strong> 为行数据，此方法需要返回一个布尔值 <strong>true</strong>。</p>
    <div class="example">
      <div class="example-demo">
        <s-table-page
          :data="emailData"
          :header-actions="getHeaderActions()"
          :header-search="getHeaderSearch()"
          :default-sort="{prop: 'createTime', order: 'descending'}"
          :show-header-checkbox="true">
          <s-table-column
            type="selection"/>
          <s-table-column
            label="工单号"
            prop="orderCode"
            sortable/>
          <s-table-column
            label="所属流程"
            prop="orderTypeName"
            :filters="[
              { text: '事件', value: '事件' },
              { text: '问题', value: '问题' },
              { text: '变更', value: '变更' },
              { text: '发布', value: '发布' },
              { text: '知识库', value: '知识库' }
            ]"
            :filter-method="filterOrderType"/>
          <s-table-column
            label="流程状态"
            prop="orderStatusName"/>
          <s-table-column
            label="发送对象"
            prop="recipientName"/>
          <s-table-column
            label="发送时间"
            prop="createTime"
            sortable/>
        </s-table-page>
      </div>
      <example-code>
        <textarea v-pre>
    <template>
      <s-table-page
        :data="emailData"
        :header-actions="getHeaderActions()"
        :header-search="getHeaderSearch()"
        :show-header-checkbox="true">
        <s-table-column
          type="selection"/>
        <s-table-column
          label="工单号"
          prop="orderCode"
          sortable/>
        <s-table-column
          label="所属流程"
          prop="orderTypeName"
          :filters="[
            { text: '事件', value: '事件' },
            { text: '问题', value: '问题' },
            { text: '变更', value: '变更' },
            { text: '发布', value: '发布' },
            { text: '知识库', value: '知识库' }
          ]"
          :filter-method="filterOrderType"/>
        <s-table-column
          label="流程状态"
          prop="orderStatusName"/>
        <s-table-column
          label="发送对象"
          prop="recipientName"/>
        <s-table-column
          label="发送时间"
          prop="createTime"
          sortable/>
      </s-table-page>
    </template>
    <script>
      export default {
        methods: {
          filterOrderType(value, row) {
            return row.orderTypeName === value;
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>8. 自动勾选数据</h3>
    <p>在 </p>
    <div class="example">
      <div class="example-demo">
        <s-table-page
          :data="emailData"
          :show-header-checkbox="true"
          ref="table8">
          <s-table-column
            type="selection"/>
          <s-table-column
            label="工单号"
            prop="orderCode"/>
          <s-table-column
            label="所属流程"
            prop="orderTypeName"/>
          <s-table-column
            label="流程状态"
            prop="orderStatusName"/>
          <s-table-column
            label="发送对象"
            prop="recipientName"/>
          <s-table-column
            label="发送时间"
            prop="createTime"/>
        </s-table-page>
      </div>
      <example-code>
        <textarea v-pre>
    <script>
      export default {
        mounted() {
          let selectedData = [this.emailData[1], this.emailData[2]];
          this.$refs['table8'].setAllSelectedData(selectedData);
          this.$refs['table8'].toggleRowSelection(this.emailData[4]);
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>


    <h3>s-table-page 的头部操作按钮 props</h3>
    <s-tb>
      <s-tb-i title="header-actions" desc="定义表格头部的操作按钮" type="object" value="-" init="{ width: 12, offset: 0, actions: [] }" />
    </s-tb>

    <h3>s-table-page 的头部模糊搜索 props</h3>
    <s-tb>
      <s-tb-i title="header-search" desc="定义表格头部的模糊搜索" type="object" value="-" init="{ width: 6, placeholder: '请输入查询内容', searchProps: [], searchFun: null }" />
    </s-tb>

    <h3>s-table-page 的头部 checkbox props</h3>
    <s-tb>
      <s-tb-i title="show-header-checkbox" desc="是否显示表格头部的checkbox显示已选" type="boolean" value="true | false" init="false" />
    </s-tb>

    <h3>s-table-page 的操作列 props</h3>
    <s-tb>
      <s-tb-i title="row-actions" desc="定义表格的操作列" type="array" value="-" init="[]" />
      <s-tb-i title="actions-col-label" desc="操作列的label" type="string" value="-" init="操作" />
      <s-tb-i title="actions-col-width" desc="操作列的宽度" type="string" value="-" init="100" />
    </s-tb>

    <h3>s-table-page 继承自 s-table 的 props</h3>
    <s-tb>
      <s-tb-i title="data" desc="表格的数据" type="array" value="-" init="[]"></s-tb-i>
      <s-tb-i title="use-virtual" desc="是否开启虚拟滚动(必须设置表格高度height)" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="excess-rows" desc="表格可视区域上方与下方额外渲染的行数，行数越多表格接替渲染效果越好，但越耗性能" type="Number" value="-" init="5"></s-tb-i>
      <s-tb-i title="use-row-key" desc="大部分场景下可以不使用rowKey来最大化复用dom，极大的提升渲染效率" type="boolean" value="-" init="false"></s-tb-i>
    </s-tb>

    <h3>s-table-column 的 props</h3>
    <s-tb>
      <s-tb-i title="sortable" desc="是否开启排序功能" type="boolean" value="true | false" init="false" />
      <s-tb-i title="filters" desc="定义筛选面板" type="array" value="-" init="required" />
      <s-tb-i title="filter-method" desc="定义筛选方法" type="function" value="-" init="required" />
      <s-tb-i title="selectable" desc="行是否可勾选，仅对 type=selection 的列有效" type="function" value="-" init="-" />
    </s-tb>

    <h3>控制分页的 props</h3>
    <p>作为 <strong>s-table-page</strong> 的props传递，默认显示第一页，每页显示10条数据。</p>
    <s-tb>
      <s-tb-i title="init-page-number" desc="初始页码" type="number" value="正整数" init="1"></s-tb-i>
      <s-tb-i title="init-page-size" desc="每页默认显示多少条数据" type="number" value="正整数" init="10"></s-tb-i>
      <s-tb-i title="page-layout" desc="分页布局" type="string" value="total, sizes, prev, pager, next, jumper" init="'total, sizes, prev, pager, next, jumper'"></s-tb-i>
      <s-tb-i title="page-sizes" desc="设置每页显示条数的数组" type="array" value="-" init="[10, 20, 50, 100]"></s-tb-i>
    </s-tb>

  </article>
</template>

<script>
  export default {
    data() {
      setTimeout(() => {
        this.tableData = Array.from({ length: 10005 }, (_, idx) => ({
          idx: idx + 1,
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }))
      }, 1000)
      return {
        excessRows: 30,
        tableData: [],
        emailData: [
          { orderCode: 'SJ2018111400008', orderTypeName: '事件', orderStatusName: '已指派', recipientName: '事件处理人', createTime: '2018-11-14 11:05:50', result: 1 },
          { orderCode: 'SJ2018111400004', orderTypeName: '事件', orderStatusName: '已指派', recipientName: '事件处理人', createTime: '2018-11-14 11:01:42', result: 1 },
          { orderCode: 'KB0000000139', orderTypeName: '知识库', orderStatusName: '已发布', recipientName: '知识管理员', createTime: '2018-11-13 17:46:45', result: 1 },
          { orderCode: 'KB0000000139', orderTypeName: '知识库', orderStatusName: '已启动', recipientName: '知识管理员', createTime: '2018-11-13 17:43:59', result: 1 },
          { orderCode: 'RW2018111300001', orderTypeName: '任务', orderStatusName: '草稿', recipientName: '变更实施人', createTime: '2018-11-13 16:36:57', result: 1 },
          { orderCode: 'BG2018111300001', orderTypeName: '变更', orderStatusName: '变更请求', recipientName: '变更经理', createTime: '2018-11-13 15:10:57', result: 1 },
          { orderCode: 'BG2018111300001', orderTypeName: '变更', orderStatusName: '变更请求', recipientName: '变更管理员', createTime: '2018-11-13 15:10:56', result: 1 },
          { orderCode: 'BG2018111300001', orderTypeName: '变更', orderStatusName: '变更请求', recipientName: '变更经理', createTime: '2018-11-13 15:10:55', result: 1 },
          { orderCode: 'WT2018111300010', orderTypeName: '问题', orderStatusName: '已完成', recipientName: '问题专家', createTime: '2018-11-13 14:35:20', result: 1 },
          { orderCode: 'WT2018111300010', orderTypeName: '问题', orderStatusName: '评审中', recipientName: '问题经理', createTime: '2018-11-13 14:32:40', result: 1 },
          { orderCode: 'WT2018111300004', orderTypeName: '问题', orderStatusName: '已指派', recipientName: '问题专家', createTime: '2018-11-13 13:39:03', result: 1 },
          { orderCode: 'WT2018111300004', orderTypeName: '问题', orderStatusName: '评审中', recipientName: '问题经理', createTime: '2018-11-13 13:36:59', result: 1 },
          { orderCode: 'WT2018111300001', orderTypeName: '问题', orderStatusName: '评审中', recipientName: '问题经理', createTime: '2018-11-13 13:25:19', result: 1 },
          { orderCode: 'KB0000000082', orderTypeName: '知识库', orderStatusName: '已发布', recipientName: '知识管理员', createTime: '2018-11-13 11:14:16', result: 1 },
          { orderCode: 'KB0000000106', orderTypeName: '知识库', orderStatusName: '已启动', recipientName: '知识管理员', createTime: '2018-11-13 11:11:52', result: 1 },
          { orderCode: 'KB0000000115', orderTypeName: '知识库', orderStatusName: '已发布', recipientName: '知识管理员', createTime: '2018-11-13 10:10:23', result: 1 },
          { orderCode: 'KB0000000115', orderTypeName: '知识库', orderStatusName: '已启动', recipientName: '知识管理员', createTime: '2018-11-13 10:09:57', result: 1 },
          { orderCode: 'KB0000000108', orderTypeName: '知识库', orderStatusName: '已启动', recipientName: '知识管理员', createTime: '2018-11-13 09:09:57', result: 1 },
          { orderCode: 'KB0000000082', orderTypeName: '知识库', orderStatusName: '已发布', recipientName: '知识管理员', createTime: '2018-11-12 19:42:09', result: 1 },
          { orderCode: 'KB0000000082', orderTypeName: '知识库', orderStatusName: '已发布', recipientName: '知识管理员', createTime: '2018-11-12 19:41:21', result: 1 },
          { orderCode: 'KB0000000082', orderTypeName: '知识库', orderStatusName: '已发布', recipientName: '知识管理员', createTime: '2018-11-12 19:40:46', result: 1 },
          { orderCode: 'KB0000000083', orderTypeName: '知识库', orderStatusName: '已发布', recipientName: '知识管理员', createTime: '2018-11-12 19:40:02', result: 1 },
          { orderCode: 'KB0000000083', orderTypeName: '知识库', orderStatusName: '已发布', recipientName: '知识管理员', createTime: '2018-11-12 19:39:26', result: 1 },
          { orderCode: 'SJ2018111200021', orderTypeName: '事件', orderStatusName: '已指派', recipientName: '', createTime: '2018-11-12 19:36:39', result: 1 },
          { orderCode: 'KB0000000082', orderTypeName: '知识库', orderStatusName: '已启动', recipientName: '知识管理员', createTime: '2018-11-12 19:35:18', result: 1 },
          { orderCode: 'KB0000000083', orderTypeName: '知识库', orderStatusName: '已启动', recipientName: '知识管理员', createTime: '2018-11-12 19:30:10', result: 1 },
          { orderCode: 'SJ2018111200017', orderTypeName: '事件', orderStatusName: '已指派', recipientName: '', createTime: '2018-11-12 17:54:12', result: 1 },
          { orderCode: 'KB0000000029', orderTypeName: '知识库', orderStatusName: '注销审批', recipientName: '知识管理员', createTime: '2018-11-12 17:23:59', result: 1 },
          { orderCode: 'KB0000000029', orderTypeName: '知识库', orderStatusName: '注销审批', recipientName: '知识管理员', createTime: '2018-11-12 17:23:59', result: 1 },
          { orderCode: 'KB0000000029', orderTypeName: '知识库', orderStatusName: '已发布', recipientName: '知识管理员', createTime: '2018-11-12 17:23:57', result: 1 },
          { orderCode: 'SJ2018111200012', orderTypeName: '事件', orderStatusName: '已指派', recipientName: '事件处理人', createTime: '2018-11-12 16:21:52', result: 1 },
          { orderCode: 'SJ2018111200004', orderTypeName: '事件', orderStatusName: '已指派', recipientName: '事件处理人', createTime: '2018-11-12 14:21:22', result: 1 }
        ]
      }
    },
    mounted() {
      let selectedData = [this.emailData[1], this.emailData[2]];
      this.$refs['table8'].setAllSelectedData(selectedData);
      this.$refs['table8'].toggleRowSelection(this.emailData[4]);
    },
    methods: {
      getHeaderActions() {
        return {
          width: 12,
          offset: 0,
          actions: [
            {
              name: '导入',
              icon: 'import',
              click: function() {
                console.log('导入');
              }
            },
            {
              name: '导出',
              icon: 'export',
              click: function() {
                console.log('导出');
              }
            }
          ]
        }
      },
      getHeaderSearch() {
        return {
          width: 10,
          placeholder: '请输入工单号、流程状态、发送对象',
          searchProps: ['orderCode', 'orderTypeName', 'orderStatusName', 'recipientName']
        }
      },
      handleDemo5Click() {
        console.log(this.$refs['table5'].getAllSelectedData());
      },
      getRowActions() {
        let vm = this;
        return [
          {
            name: '查看',
            icon: 'eye',
            click: (row) => {
              vm.$message(row.orderCode);
            }
          },
          {
            name: '编辑',
            icon: 'edit',
            click: (row) => {
              vm.$message(row.createTime);
            },
            show: (row) => {
              return row.orderTypeName !== '知识库';
            }
          }
        ]
      },
      filterOrderType(value, row) {
        return row.orderTypeName === value;
      },
      rowSelectable(row, index) {
        return row.orderTypeName !== '知识库';
      },
      handleSelectionChange(val) {
        console.log(val);
      }
    }
  }
</script>
