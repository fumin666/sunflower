<template>
  <article class="article">
    <h1>Table 表格</h1>

    <h3>基础表格</h3>
    <div class="desc">当 s-table 元素中注入data对象数组后，在 s-table-column 中用 prop 属性来对应对象中的键名即可填入数据，用 label 属性来定义表格的列名。可以使用 width
      属性来定义列宽。
    </div>
    <div class="example">
      <div class="example-demo">
        <s-table
            highlight-current-row
            :data="tableDataA"
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
              label="地址">
            <template slot-scope="scope">
              <s-input-number v-model="num3" :step="0.01" :min="0.01" :max="1"
                              controls-position="bothSide"></s-input-number>
            </template>
          </s-table-column>
        </s-table>
      </div>
      <example-code>
        <textarea>
    <s-table
        :data="tableDataA"
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
    <script>
      export default {
        data() {
          return {
            tableDataA: [{
              date: '2017-01-01',
              name: '傻妞',
              address: '上海市普陀区金沙江路 1666 弄'
            }, {
              date: '2017-01-01',
              name: '傻妞',
              address: '上海市普陀区金沙江路 1666 弄'
            }, {
              date: '2017-01-01',
              name: '傻妞',
              address: '上海市普陀区金沙江路 1666 弄'
            }]
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>带索引</h3>
    <div class="desc">如果需要显示索引，可以增加一列 s-table-column，设置 type 属性为 index 即可显示从 1 开始的索引号。</div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataA"
            style="width: 100%">
          <s-table-column
              type="index"
              width="60"></s-table-column>
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
              click-dialog
              label="地址">
          </s-table-column>
        </s-table>
      </div>
      <example-code>
        <textarea>
    <s-table
        :data="tableDataA"
        style="width: 100%">
      <s-table-column
          type="index"
          width="50"></s-table-column>
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
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>带斑马纹的表格</h3>
    <div class="desc">stripe 属性可以创建带斑马纹的表格。它接受一个 Boolean，默认为 false，设置为 true 即为启用。</div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataA"
            style="width: 100%"
            stripe>
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
        <textarea>
    <s-table
        :data="tableDataA"
        style="width: 100%"
        stripe>
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
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>带边框的表格</h3>
    <div class="desc">默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用 border 属性，它接受一个 Boolean，设置为 true 即可启用。</div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataA"
            style="width: 100%"
            border>
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
        <textarea>
    <s-table
        :data="tableDataA"
        style="width: 100%"
        border>
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
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>带状态表格</h3>
    <div class="desc">可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加
      class，表明该行处于某种状态。
    </div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataA"
            style="width: 100%"
            :row-class-name="tableRowClassName">
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
        <textarea>
    <s-table
        :data="tableDataA"
        style="width: 100%"
        :row-class-name="tableRowClassName">
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
    <script>
      export default {
        methods: {
          tableRowClassName(row, index) {
            if (index === 0) {
              return 'normal-row'
            } else if (index === 1) {
              return 'info-row'
            } else if (index === 2) {
              return 'warning-row'
            }
            return '';
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>固定表头</h3>
    <div class="desc">只要在 s-table 元素中定义了 height 属性，即可实现固定表头的表格，而不需要额外的代码</div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataA"
            style="width: 100%"
            height="250">
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
        <textarea>
    <s-table
        :data="tableDataA"
        style="width: 100%"
        height="250">
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
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>固定列</h3>
    <div class="desc">横向内容过多时，可选择固定列。固定列需要使用 fixed 属性，它接受 Boolean 值或者 left right，表示左边固定还是右边固定。</div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataB"
            style="width: 100%">
          <s-table-column
              prop="date"
              label="日期"
              width="180"
              fixed>
          </s-table-column>
          <s-table-column
              prop="name"
              label="姓名"
              width="150">
          </s-table-column>
          <s-table-column
              prop="province"
              label="省份"
              width="150">
          </s-table-column>
          <s-table-column
              prop="city"
              label="市区"
              width="150">
          </s-table-column>
          <s-table-column
              prop="address"
              label="地址"
              width="450">
          </s-table-column>
          <s-table-column
              prop="zip"
              label="邮编"
              width="150">
          </s-table-column>
          <s-table-column
              fixed="right"
              label="操作"
              width="180">
            <template slot-scope="scope">
              <i class="iconfont icon-eye" title="查看"></i>
              <i class="iconfont icon-error" title="删除"></i>
            </template>
          </s-table-column>
        </s-table>
      </div>
      <example-code>
        <textarea>
    <s-table
        :data="tableDataB"
        style="width: 100%">
      <s-table-column
          prop="date"
          label="日期"
          width="180"
          fixed>
      </s-table-column>
      <s-table-column
          prop="name"
          label="姓名"
          width="150">
      </s-table-column>
      <s-table-column
          prop="province"
          label="省份"
          width="150">
      </s-table-column>
      <s-table-column
          prop="city"
          label="市区"
          width="150">
      </s-table-column>
      <s-table-column
          prop="address"
          label="地址"
          width="450">
      </s-table-column>
      <s-table-column
          prop="zip"
          label="邮编"
          width="150">
      </s-table-column>
      <s-table-column
          fixed="right"
          label="操作"
          width="180">
        <template slot-scope="scope">
          <i class="iconfont icon-eye" title="查看"></i>
          <i class="iconfont icon-error" title="删除"></i>
        </template>
      </s-table-column>
    </s-table>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>固定列和表头</h3>
    <div class="desc">横纵内容过多时，可选择固定列和表头。</div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataB"
            style="width: 100%"
            height="200">
          <s-table-column
              prop="date"
              label="日期"
              width="180"
              fixed>
          </s-table-column>
          <s-table-column
              prop="name"
              label="姓名"
              width="150">
          </s-table-column>
          <s-table-column
              prop="province"
              label="省份"
              width="150">
          </s-table-column>
          <s-table-column
              prop="city"
              label="市区"
              width="150">
          </s-table-column>
          <s-table-column
              prop="address"
              label="地址"
              width="450">
          </s-table-column>
          <s-table-column
              prop="zip"
              label="邮编"
              width="150">
          </s-table-column>
          <s-table-column
              fixed="right"
              label="操作"
              width="180">
            <template slot-scope="scope">
              <i class="iconfont icon-error" title="删除"></i>
            </template>
          </s-table-column>
        </s-table>
      </div>
      <example-code>
        <textarea>
    <s-table
        :data="tableDataB"
        style="width: 100%"
        height="200">
      <s-table-column
          prop="date"
          label="日期"
          width="180"
          fixed>
      </s-table-column>
      <s-table-column
          prop="name"
          label="姓名"
          width="150">
      </s-table-column>
      <s-table-column
          prop="province"
          label="省份"
          width="150">
      </s-table-column>
      <s-table-column
          prop="city"
          label="市区"
          width="150">
      </s-table-column>
      <s-table-column
          prop="address"
          label="地址"
          width="450">
      </s-table-column>
      <s-table-column
          prop="zip"
          label="邮编"
          width="150">
      </s-table-column>
      <s-table-column
          fixed="right"
          label="操作"
          width="180">
        <template slot-scope="scope">
          <i class="iconfont icon-error" title="删除"></i>
        </template>
      </s-table-column>
    </s-table>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>流体高度</h3>
    <div class="desc">当数据量动态变化时，可以为 Table 设置一个最大高度。</div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataB"
            style="width: 100%"
            max-height="200">
          <s-table-column
              prop="date"
              label="日期"
              width="180"
              fixed>
          </s-table-column>
          <s-table-column
              prop="name"
              label="姓名"
              width="150">
          </s-table-column>
          <s-table-column
              prop="province"
              label="省份"
              width="150">
          </s-table-column>
          <s-table-column
              prop="city"
              label="市区"
              width="150">
          </s-table-column>
          <s-table-column
              prop="address"
              label="地址"
              width="450">
          </s-table-column>
          <s-table-column
              prop="zip"
              label="邮编"
              width="150">
          </s-table-column>
          <s-table-column
              fixed="right"
              label="操作"
              width="180">
            <template slot-scope="scope">
              <i class="iconfont icon-error" title="删除" @click="deleteRow(scope.$index, tableDataB)"></i>
            </template>
          </s-table-column>
        </s-table>
      </div>
      <example-code>
        <textarea>
    <s-table
        :data="tableDataB"
        style="width: 100%"
        max-height="200">
      <s-table-column
          prop="date"
          label="日期"
          width="180"
          fixed>
      </s-table-column>
      <s-table-column
          prop="name"
          label="姓名"
          width="150">
      </s-table-column>
      <s-table-column
          prop="province"
          label="省份"
          width="150">
      </s-table-column>
      <s-table-column
          prop="city"
          label="市区"
          width="150">
      </s-table-column>
      <s-table-column
          prop="address"
          label="地址"
          width="450">
      </s-table-column>
      <s-table-column
          prop="zip"
          label="邮编"
          width="150">
      </s-table-column>
      <s-table-column
          fixed="right"
          label="操作"
          width="180">
        <template slot-scope="scope">
          <i class="iconfont icon-error" title="删除" @click="deleteRow(scope.$index, tableDataB)"></i>
        </template>
      </s-table-column>
    </s-table>
    <script>
      export default {
        methods: {
          deleteRow(index, rows) {
            rows.splice(index, 1);
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>多级表头</h3>
    <div class="desc">只需要在 s-table-column 里面嵌套 s-table-column，就可以实现多级表头。</div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataB"
            style="width: 100%"
            border>
          <s-table-column
              prop="date"
              label="日期"
              width="180">
          </s-table-column>
          <s-table-column label="配送信息">
            <s-table-column
                prop="name"
                label="姓名"
                width="120">
            </s-table-column>
            <s-table-column label="地址">
              <s-table-column
                  prop="province"
                  label="省份"
                  width="120">
              </s-table-column>
              <s-table-column
                  prop="city"
                  label="市区"
                  width="120">
              </s-table-column>
              <s-table-column
                  prop="address"
                  label="地址"
                  width="300">
              </s-table-column>
              <s-table-column
                  prop="zip"
                  label="邮编"
                  width="120">
              </s-table-column>
            </s-table-column>
          </s-table-column>
        </s-table>
      </div>
      <example-code>
        <textarea>
    <s-table
        :data="tableDataB"
        style="width: 100%"
        border>
      <s-table-column
          prop="date"
          label="日期"
          width="180">
      </s-table-column>
      <s-table-column label="配送信息">
        <s-table-column
            prop="name"
            label="姓名"
            width="120">
        </s-table-column>
        <s-table-column label="地址">
          <s-table-column
              prop="province"
              label="省份"
              width="120">
          </s-table-column>
          <s-table-column
              prop="city"
              label="市区"
              width="120">
          </s-table-column>
          <s-table-column
              prop="address"
              label="地址"
              width="300">
          </s-table-column>
          <s-table-column
              prop="zip"
              label="邮编"
              width="120">
          </s-table-column>
        </s-table-column>
      </s-table-column>
    </s-table>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>单选</h3>
    <div class="desc">Table 组件提供了单选的支持，只需要配置 highlight-current-row 属性即可实现单选。之后由 current-change 事件来管理选中时触发的事件，它会传入
      currentRow，oldCurrentRow。
    </div>
    <div class="example">
      <div class="example-demo">
        <s-table
            ref="singleTable"
            :data="tableDataA"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
          <s-table-column
              type="index"
              width="50">
          </s-table-column>
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
        <s-button @click="setCurrent(tableDataA[1])">选中第二行</s-button>
        <s-button @click="setCurrent()">清空选择</s-button>
      </div>
      <example-code>
        <textarea>
    <s-table
        ref="singleTable"
        :data="tableDataA"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
      <s-table-column
          type="index"
          width="50">
      </s-table-column>
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
    <script>
      export default {
        methods: {
          handleCurrentChange(newRow, oldRow) {
            this.currentRow = newRow;
            console.log(this.tableDataA.indexOf(newRow));
            console.log(JSON.stringify(newRow, null, 2));
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>多选</h3>
    <div class="desc">实现多选非常简单: 手动添加一个 s-table-column，设 type 属性为 selection 即可；默认情况下若列的内容过多会折行显示，若需要单行显示可以使用
      show-overflow-tooltip 属性，它接受一个 Boolean，为 true 时多余的内容会在 hover 时以 tooltip 的形式显示出来。
    </div>
    <div class="example">
      <div class="example-demo">
        <s-table
            ref="multipleTable"
            :data="tableDataA"
            style="width: 100%">
          <s-table-column
              type="selection"
              width="35">
          </s-table-column>
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
              label="地址"
              show-overflow-tooltip>
          </s-table-column>
        </s-table>
        <s-button @click="toggleSelection([tableDataA[1], tableDataA[2]])">切换第二、第三行的选中状态</s-button>
        <s-button @click="toggleSelection()">取消选择</s-button>
      </div>
      <example-code>
        <textarea>
    <s-table
        ref="multipleTable"
        :data="tableDataA"
        style="width: 100%">
      <s-table-column
          type="selection"
          width="35">
      </s-table-column>
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
          label="地址"
          show-overflow-tooltip>
      </s-table-column>
    </s-table>
    <s-button @click="toggleSelection([tableDataA[1], tableDataA[2]])">切换第二、第三行的选中状态</s-button>
    <s-button @click="toggleSelection()">取消选择</s-button>
    <script>
      export default {
        methods: {
          toggleSelection(rows) {
            if (rows) {
              rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
              });
            } else {
              this.$refs.multipleTable.clearSelection();
            }
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>排序</h3>
    <div class="desc">可以通过表的 default-sort 属性设置默认的排序列（prop: 列名）和排序顺序（order: ascending | descending）。在列中设置 sortable
      属性即可实现以该列为基准的排序，接受一个 Boolean，默认为 false。在本例中，我们还使用了formatter 属性，它用于格式化指定列的值，接受一个 Function，会传入两个参数：row 和
      column，可以根据自己的需求进行处理。
    </div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataA"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}">
          <s-table-column
              prop="date"
              label="日期"
              sortable
              width="180">
          </s-table-column>
          <s-table-column
              prop="name"
              label="姓名"
              sortable
              width="180">
          </s-table-column>
          <s-table-column
              prop="address"
              label="地址"
              :formatter="formatter">
          </s-table-column>
        </s-table>
      </div>
      <example-code>
        <textarea>
    <s-table
        :data="tableDataA"
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}">
      <s-table-column
          prop="date"
          label="日期"
          sortable
          width="180">
      </s-table-column>
      <s-table-column
          prop="name"
          label="姓名"
          sortable
          width="180">
      </s-table-column>
      <s-table-column
          prop="address"
          label="地址"
          :formatter="formatter">
      </s-table-column>
    </s-table>
    <script>
      export default {
        methods: {
          formatter(row, column) {
            return `@${row.address}`;
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>模拟滚动加载10000条数据</h3>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableData"
            border
            :rowHeight="48"
            height="500"
            :excess-rows="excessRows"
            useVirtual
        >
          <s-table-column
              type="selection">
          </s-table-column>
          <s-table-column
              type="index"
              width="100"
          ></s-table-column>
          <s-table-column
              prop="date"
              label="日期"
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
        </s-table>
      </div>
      <example-code>
        <textarea v-pre>
          <s-table
              :data="tableData"
              border
              :rowHeight="48"
              :excess-rows="excessRows"
              height="500"
              useVirtual>
            <s-table-column
                type="selection">
            </s-table-column>
            <s-table-column
                type="index"
                width="100"
            ></s-table-column>
            <s-table-column
                prop="date"
                label="日期"
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
          </s-table>
          <script>
            export default {
              data() {
                setTimeout(() => {
                  this.tableData = Array.from({length: 10005}, (_, idx) => ({
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


    <h3>筛选</h3>
    <div class="desc">在列中设置 filters filter-method 属性即可开启该列的筛选，filters 是一个数组，filter-method
      是一个方法，它用于决定某些数据是否显示，会传入两个参数：value和row。
    </div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataA"
            border
            @filter-change="filterChangeHandler"
            style="width: 100%">
          <s-table-column
              prop="date"
              label="日期"
              sortable
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
          <s-table-column
              prop="tag"
              label="标签"
              width="100"
              column-key="tag"
              :filters="[{text: '家', value: '家'}, {text: '公司', value: '公司'}]"
              :filter-method="filterTag">
            <template slot-scope="scope">
              <s-tag
                  :type="scope.row.tag === '家' ? 'primary': 'success'">{{scope.row.tag}}
              </s-tag>
            </template>
          </s-table-column>
        </s-table>
      </div>
      <example-code>
        <textarea v-pre>
    <s-table
        :data="tableDataA"
        border
        style="width: 100%">
      <s-table-column
          prop="date"
          label="日期"
          sortable
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
      <s-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="[{text: '家', value: '家'}, {text: '公司', value: '公司'}]"
          :filter-method="filterTag">
        <template slot-scope="scope">
          <s-tag
              :type="scope.row.tag === '家' ? 'primary': 'success'">{{scope.row.tag}}</s-tag>
        </template>
      </s-table-column>
    </s-table>
    <script>
      export default {
        methods: {
          filterTag(value, row) {
            return row.tag === value;
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>自定义列模板</h3>
    <div class="desc">通过 scope 可以获取到 row $index 等表格的数据和状态。</div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataA"
            style="width: 100%">
          <s-table-column
              prop="date"
              label="日期"
              width="180">
            <template slot-scope="scope">
              <i class="iconfont icon-clock"></i>
              <span v-text="scope.row.date"></span>
            </template>
          </s-table-column>
          <s-table-column
              prop="name"
              label="姓名"
              width="180">
          </s-table-column>
          <s-table-column label="操作">
            <template slot-scope="scope">
              <s-button @click="handleEdit(scope.$index, scope.row)">编辑</s-button>
            </template>
          </s-table-column>
        </s-table>
      </div>
      <example-code>
        <textarea>
    <s-table
        :data="tableDataA"
        style="width: 100%">
      <s-table-column
          prop="date"
          label="日期"
          width="180">
        <template slot-scope="scope">
          <i class="iconfont icon-clock"></i>
          <span v-text="scope.row.date"></span>
        </template>
      </s-table-column>
      <s-table-column
          prop="name"
          label="姓名"
          width="180">
      </s-table-column>
      <s-table-column label="操作">
        <template slot-scope="scope">
          <s-button @click="handleEdit(scope.$index, scope.row)">编辑</s-button>
        </template>
      </s-table-column>
    </s-table>
    <script>
      export default {
        methods: {
          handleEdit(index, row) {
            console.log(index, JSON.stringify(row, null, 2));
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>展开行</h3>
    <div class="desc">通过设置 type="expand" 可以开启展开行功能，s-table-column 的模板会被渲染成为展开行的内容。</div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataA"
            style="width: 100%">
          <s-table-column type="expand">
            <template slot-scope="scope">
              <s-form>
                <s-form-item label="住址"><span v-text="scope.row.address"></span></s-form-item>
                <s-form-item label="备注"><span v-text="scope.row.tag"></span></s-form-item>
              </s-form>
            </template>
          </s-table-column>
          <s-table-column
              prop="date"
              label="日期">
          </s-table-column>
          <s-table-column
              prop="name"
              label="姓名">
          </s-table-column>
        </s-table>
      </div>
      <example-code>
        <textarea>
    <s-table
        :data="tableDataA"
        style="width: 100%">
      <s-table-column type="expand">
        <template slot-scope="scope">
          <s-form>
            <s-form-item label="住址"><span v-text="scope.row.address"></span></s-form-item>
            <s-form-item label="备注"><span v-text="scope.row.tag"></span></s-form-item>
          </s-form>
        </template>
      </s-table-column>
      <s-table-column
          prop="date"
          label="日期">
      </s-table-column>
      <s-table-column
          prop="name"
          label="姓名">
      </s-table-column>
    </s-table>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>表尾合计行</h3>
    <div class="desc">若表格展示的是各类数字，可以在表尾显示各列的合计。</div>
    <div class="example">
      <div class="example-demo">
        <s-table
            :data="tableDataC"
            style="width: 100%">
          <s-table-column
              prop="id"
              label="ID"
              width="180">
          </s-table-column>
          <s-table-column
              prop="name"
              label="姓名">
          </s-table-column>
          <s-table-column
              prop="amount1"
              label="数值 1">
          </s-table-column>
          <s-table-column
              prop="amount2"
              label="数值 2">
          </s-table-column>
          <s-table-column
              prop="amount3"
              label="数值 3">
          </s-table-column>
        </s-table>
      </div>
      <example-code>
        <textarea>

        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>树形表格</h3>
    <div class="desc">
      针对项目的特殊用途，分为普通树形表格和特殊树形表格，特殊树形表格 设定:treeCheck="true" 表示children数据会有可选择的复选框，
      绑定事件 @changeCircle， 同时需要:selectable 用于隐藏外层的复选框，数据结构包含checked(布尔值)，和type(标识一级)
    </div>
    <div class="example">
      <div class="example-demo">
        <s-table-tree :data="tree.data" :config="tree.config" :treeIndex="2">
          <s-table-column
              slot="pre"
              type="selection"
              width="35">
          </s-table-column>
          <s-table-column
              label="操作"
              width="220">
            <template slot-scope="scope">
              <i class="iconfont icon-merge" @click="handleMerge(scope.row)"></i>
            </template>
          </s-table-column>
        </s-table-tree>
      </div>
      <div class="example-demo">
        <s-table-tree :data="tree.data" :config="tree.config" :treeIndex="1" @changeCircle="changeCircle"
                      :treeCheck="true">
          <s-table-column
              slot="pre"
              type="selection"
              :selectable="isSelectable"
              width="35">
          </s-table-column>
          <s-table-column
              label="操作"
              width="120">
            <template slot-scope="scope">
              <i class="iconfont icon-merge" @click="handleMerge(scope.row)"></i>
            </template>
          </s-table-column>
        </s-table-tree>
      </div>
      <example-code>
        <textarea>
    <s-table-tree :data="tree.data" :config="tree.config" :treeIndex="2"
                  @changeCircle="changeCircle" :treeCheck="true">
      <s-table-column
          slot="pre"
          type="selection"
          :selectable="isSelectable"
          width="35">
      </s-table-column>
      <s-table-column
          label="操作"
          width="120">
        <template slot-scope="scope">
          <i class="iconfont icon-merge" @click="handleMerge(scope.row)"></i>
        </template>
      </s-table-column>
    </s-table-tree>
    <script>
      export default {
        data() {
          tree: {
            data: [
              {
                date: '2015-9-10',
                name: 'Lisa',
                children: [
                  {
                    date: '2015-9-10',
                    name: 'Lisa Child1'
                  },
                  {
                    date: '2015-9-10',
                    name: 'Lisa Child2',
                    children: [
                      {
                        date: '2015-9-10',
                        name: 'Lisa Child2 Child1'
                      }
                    ]
                  }
                ]
              },
              {
                date: '2015-9-10',
                name: 'Jack',
                children: [
                  {
                    date: '2015-9-10',
                    name: 'Jack Child1'
                  },
                  {
                    date: '2015-9-10',
                    name: 'Jack Child2'
                  }
                ]
              }
            ],
              config
          :
            [
              {
                title: '时间',
                property: 'date'
              },
              {
                title: '姓名',
                property: 'name'
              }
            ]
          }
        },
        methods: {
          handleMerge(row) {
            console.log(row.name);
          },
          changeCircle(row) {
            console.log(row);
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>模拟滚动加载10000条数据,树形表格</h3>
    <div class="example">
      <div class="example-demo">
        <s-table-tree
            :rowHeight="48"
            :height="500"
            useVirtual
            :data="tree2.data" :config="tree2.config" :treeIndex="2">
          <s-table-column
              slot="pre"
              type="selection"
              width="35">
          </s-table-column>
          <s-table-column
              label="操作"
              width="220">
            <template slot-scope="scope">
              <i class="iconfont icon-merge" @click="handleMerge(scope.row)"></i>
            </template>
          </s-table-column>
        </s-table-tree>
      </div>

      <example-code>
        <textarea>
          <s-table-tree
              :rowHeight="48"
              height="500"
              useVirtual
              :data="tree.data" :config="tree.config" :treeIndex="2">
            <s-table-column
                slot="pre"
                type="selection"
                width="35">
            </s-table-column>
            <s-table-column
                label="操作"
                width="220">
              <template slot-scope="scope">
                <i class="iconfont icon-merge" @click="handleMerge(scope.row)"></i>
              </template>
            </s-table-column>
          </s-table-tree>
          <script>
            export default {
              setTimeout(()
            =>
            {
              this.tree2 = {
                data: Array.from({length: 10}, (_, idx) => ({
                  date: idx + 1,
                  name: 'Lisa',
                  children: [
                    {
                      date: '2015-9-10',
                      name: 'Lisa Child1'
                    },
                    {
                      date: '2015-9-10',
                      name: 'Lisa Child2',
                      children: [
                        {
                          date: '2015-9-10',
                          name: 'Lisa Child2 Child1'
                        }
                      ]
                    }
                  ]
                })),
                config: [
                  {
                    title: '时间',
                    property: 'date',
                    width: 150
                  },
                  {
                    title: '姓名',
                    property: 'name'
                  },
                  {
                    title: '姓名',
                    property: 'name'
                  }
                ]
              }
            }
            ,
            1000
            )
            data()
            {
              tree2:{
              }
            }
            ,
            methods: {
              handleMerge(row)
              {
                console.log(row.name);
              }
            ,
              changeCircle(row)
              {
                console.log(row);
              }
            }
            }
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>


    <h3>Table Attributes</h3>
    <s-tb>
      <s-tb-i title="data" desc="显示的数据" type="array" value="-" init="-"></s-tb-i>
      <s-tb-i title="height"
              desc="Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则 Table 的高度受控于外部样式。"
              type="string/number" value="-" init="-"></s-tb-i>
      <s-tb-i title="max-height" desc="Table 的最大高度" type="string/number" value="-" init="-"></s-tb-i>
      <s-tb-i title="use-virtual" desc="是否开启虚拟滚动(必须设置表格高度height)" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="excess-rows" desc="表格可视区域上方与下方额外渲染的行数，行数越多表格接替渲染效果越好，但越耗性能" type="Number" value="-"
              init="5"></s-tb-i>
      <s-tb-i title="use-row-key" desc="大部分场景下可以不使用rowKey来最大化复用dom，极大的提升渲染效率" type="boolean" value="-"
              init="false"></s-tb-i>
      <s-tb-i title="stripe" desc="是否为斑马纹 table" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="border" desc="是否带有纵向边框" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="size" desc="Table 的尺寸" type="string" value="medium / small / mini" init="-"></s-tb-i>
      <s-tb-i title="fit" desc="列的宽度是否自撑开" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="show-header" desc="是否显示表头" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="highlight-current-row" desc="是否要高亮当前行" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="current-row-key" desc="当前行的 key，只写属性" type="String,Number" value="-" init="-"></s-tb-i>
      <s-tb-i title="row-class-name" desc="行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。"
              type="Function(row, rowIndex)/String" value="-" init="-"></s-tb-i>
      <s-tb-i title="row-style" desc="行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。"
              type="Function(row, rowIndex)/Object" value="-" init="-"></s-tb-i>
      <s-tb-i title="cell-class-name" desc="单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。"
              type="Function({rowIndex, row}, {columnIndex, column})/String	" value="-" init="-"></s-tb-i>
      <s-tb-i title="cell-style" desc="" type="Function({rowIndex, row}, {columnIndex, column})/Object	" value="-"
              init="-"></s-tb-i>
      <s-tb-i title="header-row-class-name" desc="表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。"
              type="Function({row, rowIndex})/String" value="-" init="-"></s-tb-i>
      <s-tb-i title="header-row-style" desc="" type="Function({row, rowIndex})/Object" value="-" init="-"></s-tb-i>
      <s-tb-i title="header-cell-class-name" desc="表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。"
              type="Function({rowIndex, row}, {columnIndex, column})/String	" value="-" init="-"></s-tb-i>
      <s-tb-i title="header-cell-style" desc="表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。"
              type="Function({rowIndex, row}, {columnIndex, column})/Object" value="-" init="-"></s-tb-i>
      <s-tb-i title="row-key"
              desc="行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能的情况下，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。"
              type="Function(row)/String" value="-" init="-"></s-tb-i>
      <s-tb-i title="empty-text" desc="空数据时显示的文本内容，也可以通过 slot='empty' 设置" type="String" value="-" init="暂无数据"></s-tb-i>
      <s-tb-i title="default-expand-all" desc="是否默认展开所有行，当 Table 中存在 type='expand' 的 Column 的时候有效" type="Boolean"
              value="-" init="false"></s-tb-i>
      <s-tb-i title="expand-row-keys" desc="可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。" type="Array"
              value="-" init="-"></s-tb-i>
      <s-tb-i title="default-sort" desc="默认的排序列的prop和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序" type="Object"
              value="order: ascending, descending" init="如果只指定了prop, 没有指定order, 则默认顺序是ascending"></s-tb-i>
      <s-tb-i title="tooltip-effect" desc="tooltip effect 属性	" type="String" value="dark/light" init="-"></s-tb-i>
      <s-tb-i title="show-summary" desc="是否在表尾显示合计行" type="Boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="sum-text" desc="合计行第一列的文本" type="String" value="-" init="合计"></s-tb-i>
      <s-tb-i title="summary-method" desc="自定义的合计计算方法" type="Function(columns, data)" value="-" init="-"></s-tb-i>
      <s-tb-i title="span-method" desc="合并行或列的计算方法" type="Function({rowIndex, row}, {columnIndex, column})" value="-"
              init="-"></s-tb-i>
    </s-tb>

    <h3>Table Events</h3>
    <table>
      <thead>
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>select</td>
        <td>当用户手动勾选数据行的 Checkbox 时触发的事件</td>
        <td>selection, row</td>
      </tr>
      <tr>
        <td>select-all</td>
        <td>当用户手动勾选全选 Checkbox 时触发的事件</td>
        <td>selection</td>
      </tr>
      <tr>
        <td>selection-change</td>
        <td>当选择项发生变化时会触发该事件</td>
        <td>selection</td>
      </tr>
      <tr>
        <td>cell-mouse-enter</td>
        <td>当单元格 hover 进入时会触发该事件</td>
        <td>row, column, cell, event</td>
      </tr>
      <tr>
        <td>cell-mouse-leave</td>
        <td>当单元格 hover 退出时会触发该事件</td>
        <td>row, column, cell, event</td>
      </tr>
      <tr>
        <td>cell-click</td>
        <td>当某个单元格被点击时会触发该事件</td>
        <td>row, column, cell, event</td>
      </tr>
      <tr>
        <td>cell-dblclick</td>
        <td>当某个单元格被双击击时会触发该事件</td>
        <td>row, column, cell, event</td>
      </tr>
      <tr>
        <td>row-click</td>
        <td>当某一行被点击时会触发该事件</td>
        <td>row, event, column</td>
      </tr>
      <tr>
        <td>row-contextmenu</td>
        <td>当某一行被鼠标右键点击时会触发该事件</td>
        <td>row, event</td>
      </tr>
      <tr>
        <td>row-dblclick</td>
        <td>当某一行被双击时会触发该事件</td>
        <td>row, event</td>
      </tr>
      <tr>
        <td>header-click</td>
        <td>当某一列的表头被点击时会触发该事件</td>
        <td>column, event</td>
      </tr>
      <tr>
        <td>sort-change</td>
        <td>当表格的排序条件发生变化的时候会触发该事件</td>
        <td>{ column, prop, order }</td>
      </tr>
      <tr>
        <td>filter-change</td>
        <td>当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。</td>
        <td>filters</td>
      </tr>
      <tr>
        <td>current-change</td>
        <td>当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性</td>
        <td>currentRow, oldCurrentRow</td>
      </tr>
      <tr>
        <td>header-dragend</td>
        <td>当拖动表头改变了列的宽度的时候会触发该事件</td>
        <td>newWidth, oldWidth, column, event</td>
      </tr>
      <tr>
        <td>expand-change</td>
        <td>当用户对某一行展开或者关闭的时候会触发该事件</td>
        <td>row, expandedRows</td>
      </tr>
      </tbody>
    </table>

    <h3>Table Methods</h3>
    <table>
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>clearSelection</td>
        <td>用于多选表格，清空用户的选择，当使用 reserve-selection 功能的时候，可能会需要使用此方法</td>
        <td>selection</td>
      </tr>
      <tr>
        <td>toggleRowSelection</td>
        <td>用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）</td>
        <td>row, selected</td>
      </tr>
      <tr>
        <td>toggleRowExpansion</td>
        <td>用于可展开表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）</td>
        <td>row, expanded</td>
      </tr>
      <tr>
        <td>setCurrentRow</td>
        <td>用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。</td>
        <td>row</td>
      </tr>
      <tr>
        <td>clearSort</td>
        <td>用于清空排序条件，数据会恢复成未排序的状态</td>
        <td>—</td>
      </tr>
      <tr>
        <td>clearFilter</td>
        <td>用于清空过滤条件，数据会恢复成未过滤的状态</td>
        <td>—</td>
      </tr>
      <tr>
        <td>doLayout</td>
        <td>对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法</td>
        <td>—</td>
      </tr>
      </tbody>
    </table>

    <h3>Table Slot</h3>
    <table>
      <thead>
      <tr>
        <th>name</th>
        <th>说明</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>append</td>
        <td>插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。</td>
      </tr>
      </tbody>
    </table>

    <h3>Table-column Attributes</h3>
    <s-tb>
      <s-tb-i title="type" desc="对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮"
              type="string" value="selection/index/expand" init="-"></s-tb-i>
      <s-tb-i title="index" desc="如果设置了 type=index，可以通过传递 index 属性来自定义索引" type="string, Function(index)" value="-"
              init="-"></s-tb-i>
      <s-tb-i title="column-key" desc="column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件" type="string"
              value="-" init="-"></s-tb-i>
      <s-tb-i title="label" desc="显示的标题" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="prop" desc="对应列内容的字段名，也可以使用 property 属性" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="width" desc="对应列的宽度" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="min-width" desc="对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列"
              type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="fixed" desc="列是否固定在左侧或者右侧，true 表示固定在左侧" type="string, boolean" value="true, left, right"
              init="-"></s-tb-i>
      <s-tb-i title="render-header" desc="列标题 Label 区域渲染使用的 Function" type="Function(h, { column, $index })" value="-"
              init="-"></s-tb-i>
      <s-tb-i title="sortable" desc="对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件"
              type="boolean, string" value="true, false, 'custom'" init="false"></s-tb-i>
      <s-tb-i title="sort-method" desc="对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致"
              type="Function(a, b)" value="-" init="-"></s-tb-i>
      <s-tb-i title="sort-by"
              desc="指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推。"
              type="String/Array/Function(row, index)" value="-" init="-"></s-tb-i>
      <s-tb-i title="resizable" desc="对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）" type="boolean" value="-"
              init="true"></s-tb-i>
      <s-tb-i title="formatter" desc="用来格式化内容" type="Function(row, column, cellValue)" value="-" init="-"></s-tb-i>
      <s-tb-i title="show-overflow-tooltip" desc="当内容过长被隐藏时显示 tooltip" type="Boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="align" desc="对齐方式" type="String" value="left/center/right" init="left"></s-tb-i>
      <s-tb-i title="header-align" desc="表头对齐方式，若不设置该项，则使用表格的对齐方式" type="String" value="left/center/right"
              init="-"></s-tb-i>
      <s-tb-i title="class-name" desc="列的 className" type="n" value="-" init="-"></s-tb-i>
      <s-tb-i title="label-class-name" desc="当前列标题的自定义类名" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="selectable" desc="仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选"
              type="Function(row, index)" value="-" init="-"></s-tb-i>
      <s-tb-i title="reserve-selection"
              desc="仅对 type=selection 的列有效，类型为 Boolean，为 true 则代表会保留之前数据的选项，需要配合 Table 的 clearSelection 方法使用。"
              type="Boolean	" value="-" init="false"></s-tb-i>
      <s-tb-i title="filters" desc="数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。" type="" value="-" init="-"></s-tb-i>
      <s-tb-i title="filter-placement" desc="过滤弹出框的定位" type="String" value="与 Tooltip 的 placement 属性相同"
              init="-"></s-tb-i>
      <s-tb-i title="filter-multiple" desc="数据过滤的选项是否多选" type="Boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="filter-method" desc="数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。" type="Function(value, row)"
              value="-" init="-"></s-tb-i>
      <s-tb-i title="filtered-value" desc="选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。" type="Array" value="-"
              init="-"></s-tb-i>
      <s-tb-i title="" desc="" type="" value="-" init="-"></s-tb-i>
      <s-tb-i title="" desc="" type="" value="-" init="-"></s-tb-i>
    </s-tb>
  </article>
</template>

<script>
  export default {
    data() {
      setTimeout(() => {
        this.tableData = Array.from({length: 10000}, (_, idx) => ({
          idx: idx + 1,
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }))
      }, 1000)

      setTimeout(() => {
        this.tree2 = {
          data: Array.from({length: 10}, (_, idx) => ({
            date: idx + 1,
            name: 'Lisa',
            children: [
              {
                date: '2015-9-10',
                name: 'Lisa Child1'
              },
              {
                date: '2015-9-10',
                name: 'Lisa Child2',
                children: [
                  {
                    date: '2015-9-10',
                    name: 'Lisa Child2 Child1'
                  }
                ]
              }
            ]
          })),
          config: [
            {
              title: '时间',
              property: 'date',
              width: 150
            },
            {
              title: '姓名',
              property: 'name'
            },
            {
              title: '姓名',
              property: 'name'
            }
          ]
        }
      }, 1000)
      return {
        excessRows: 30,
        tableData: [],
        tree2: {},
        num3: 0.5,
        tableDataA: [{
          date: '2017-01-01',
          name: '',
          address: `select
m.ename 员工姓名,n.ename 员工上级,m.grade 员工工资等级,n.grade 上级工资</br>等级
from
(select mgr,ename,grade from SCOTT.EMP,SCOTT.SALGRADE
where sal&gt;=losal and sal&lt;=hisal) m
left join
(select empno,ename,grade from SCOTT.EMP,SCOTT.SALGRADE
where sal&gt;=losal and sal&lt;=hisal) n
on m.mgr=n.empno) b
where a.ename = b.员工姓名
) aaa
where aaa.empno &gt;= {$0} and aaa.empno &lt;= {$1}
group by aaa.员工工资等级
having aaa.员工工资等级 &gt; {$2}
order by aaa.员工工资等级 asc
)gzdj on gzdj.员工工资等级 = qb.员工工资等级
left join (
select emp.empno, emp.ename, emp.job, emp.mgr, emp.hiredate, emp.sal, emp.comm, emp.deptno, depth.dname, depth.loc from emp
left join depth on depth.deptno = emp.deptno
where depth.dname is not null
)bmmz on bmmz.depno = qb.depno
left join (
select ccc.loc, count(ccc.empno) deccount
from (
select emp.empno, emp.ename, cc.dname, cc.loc from emp
left join (
select emp.empno, emp.ename, emp.job, emp.mgr, emp.hiredate, emp.sal, emp.comm, emp.depno, depth.dname, depth.loc from emp
left join depth on depth.deptno = emp.depno
where depth.dname is not null
) cc on cc.empno = emp.empno
) ccc
where ccc.loc is not null and ccc.dname is not null
group by ccc.loc
having ccc.loc is not null
) dqrs on dqrs.loc = bmmz.loc
where qb.empno in
(
select empno from
(
select qb.empno, qb.ename, qb.job, qb.mgr, qb.hiredate, qb.sal, qb.comm, qb.depno, qb.部门, qb.员工姓名,qb.员工上级,qb.员工工资等级, qb.上级工资等级,
 bmrg.depcount，bmrg.depsalsum, bmrg.depsalavg, gzdj.gradecount, bmmz.loc 地区, dqrs.deccount
from (
select * from
(select emp.empno empno, emp.ename ename, emp.job job, emp.mgr mgr, emp.hiredate hiredate, emp.sal sal, emp.comm, emp.depno,
decode（emp.depno, {$3}, '{$4}',
　　{$5}, '{$6}',
　　{$7}, '{$8}',
    {$9}, '{$10}',
　　'{$11}'）
　　部门
from emp) a,
(
select
m.ename 员工姓名,n.ename 员工上级,m.grade 员工工资等级,n.grade 上级工资等级
from
(select mgr,ename,grade from emp,salgrade
where sal&gt;=losal and sal&lt;=hisal) m
left join
(select empno,ename,grade from emp,salgrade
where sal&gt;=losal and sal&lt;=hisal) n
on m.mgr=n.empno) b
where a.ename = b.员工姓名
) qb
left join (
select emp.depno, count(emp.empno) depcount，sum(emp.sal) depsalsum, avg(emp.sal) depsalavg
from emp
where emp.empno &gt;= {$12} and emp.empno &lt;= {$13}
group by emp.depno
order by emp.depno desc
) bmrg on bmrg.depno = qb.depno
left join (
select aaa.员工工资等级, count(aaa.empno) gradecount from (
select * from
(select emp.empno empno, emp.ename ename, emp.job job, emp.mgr mgr, emp.hiredate hiredate, emp.sal sal, emp.comm,
decode（emp.depno, {$14}, '{$15}',
　　{$16}, '{$17}',
　　{$18}, '{$19}',
    {$20}, '{$21}',
　　'{$22}'）
　　部门
from emp) a,
(
select
m.ename 员工姓名,n.ename 员工上级,m.grade 员工工资等级,n.grade 上级工资等级
from
(select mgr,ename,grade from emp,salgrade
where sal&gt;=losal and sal&lt;=hisal) m
left join
(select empno,ename,grade from emp,salgrade
where sal&gt;=losal and sal&lt;=hisal) n
on m.mgr=n.empno) b
where a.ename = b.员工姓名
) aaa
where aaa.empno &gt;= {$23} and aaa.empno &lt;= {$24}
group by aaa.员工工资等级
having aaa.员工工资等级 &gt; {$25}
order by aaa.员工工资等级 asc
)gzdj on gzdj.员工工资等级 = qb.员工工资等级
left join (
select emp.empno, emp.ename, emp.job, emp.mgr, emp.hiredate, emp.sal, emp.comm, emp.depno, depth.dname, depth.loc from emp
left join depth on depth.deptno = emp.depno
where depth.dname is not null
)bmmz on bmmz.depno = qb.depno
left join (
select ccc.loc, count(ccc.empno) deccount
from (
select emp.empno, emp.ename, cc.dname, cc.loc from emp
left join (
select emp.empno, emp.ename, emp.job, emp.mgr, emp.hiredate, emp.sal, emp.comm, emp.depno, depth.dname, depth.loc from emp
left join depth on depth.deptno = emp.depno
where depth.dname is not null
) cc on cc.empno = emp.empno
) ccc
where ccc.loc is not null and ccc.dname is not null
group by ccc.loc
having ccc.loc is not null
) dqrs on dqrs.loc = bmmz.loc
)
)
order by qb.empno asc`,
          tag: '家'
        }, {
          date: '2017-01-02',
          name: '傻妞b',
          address: `selectm.ename 员工姓名,n.ename 员工上级,m.grade 员工工资等级,n.grade 上级工资等级
from
(select mgr,ename,grade from SCOTT.EMP,SCOTT.SALGRADE
where sal&gt;=losal and sal&lt;=hisal) mosal and sal&lt;=hisal) n
on m.mgr=n.empno) bal&gt;=losal aal&gt;=losal aal&gt;=losal aal&gt;=losal aal&gt;=losal a`,
          tag: '公司'
        }, {
          date: '2017-01-03',
          name: '傻妞c',
          address: `select m.ename 员工姓名,n.ename 员工上级,m.grade 员工工资等级,n.grade 上级工资等级
from
(select mgr,ename,grade from SCOTT.EMP,SCOTT.SALGRADE
where sal&gt;=losal and sal&lt;=hisal) m
left join
(select empno,ename,grade from SCOTT.EMP,SCOTT.SALGRADE
where sal&gt;=losal and sal&lt;=hisal) n
on m.mgr=n.empno) b
where a.ename = b.员工姓名
) aaa
where aaa.empno &gt;= {$0} and aaa.empno &lt;= {$1}
group by aaa.员工工资等级
having aaa.员工工资等级 &gt; {$2}
order by aaa.员工工资等级 asc
)gzdj on gzdj.员工工资等级 = qb.员工工资等级
left join (
select emp.empno, emp.ename, emp.job, emp.mgr, emp.hiredate, emp.sal, emp.comm, emp.deptno, depth.dname, depth.loc from emp
left join depth on depth.deptno = emp.deptno
where depth.dname is not null
)bmmz on bmmz.depno = qb.depno
left join (
select ccc.loc, count(ccc.empno) deccount
from (
select emp.empno, emp.ename, cc.dname, cc.loc from emp
left join (
select emp.empno, emp.ename, emp.job, emp.mgr, emp.hiredate, emp.sal, emp.comm, emp.depno, depth.dname, depth.loc from emp
left join depth on depth.deptno = emp.depno
where depth.dname is not null
) cc on cc.empno = emp.empno
) ccc
where ccc.loc is not null and ccc.dname is not null
group by ccc.loc
having ccc.loc is not null
) dqrs on dqrs.loc = bmmz.loc
where qb.empno in
(
select empno from
(
select qb.empno, qb.ename, qb.job, qb.mgr, qb.hiredate, qb.sal, qb.comm, qb.depno, qb.部门, qb.员工姓名,qb.员工上级,qb.员工工资等级, qb.上级工资等级,
 bmrg.depcount，bmrg.depsalsum, bmrg.depsalavg, gzdj.gradecount, bmmz.loc 地区, dqrs.deccount
from (
select * from
(select emp.empno empno, emp.ename ename, emp.job job, emp.mgr mgr, emp.hiredate hiredate, emp.sal sal, emp.comm, emp.depno,
decode（emp.depno, {$3}, '{$4}',
　　{$5}, '{$6}',
　　{$7}, '{$8}',
    {$9}, '{$10}',
　　'{$11}'）
　　部门
from emp) a,
(
select
m.ename 员工姓名,n.ename 员工上级,m.grade 员工工资等级,n.grade 上级工资等级
from
(select mgr,ename,grade from emp,salgrade
where sal&gt;=losal and sal&lt;=hisal) m
left join
(select empno,ename,grade from emp,salgrade
where sal&gt;=losal and sal&lt;=hisal) n
on m.mgr=n.empno) b
where a.ename = b.员工姓名
) qb
left join (
select emp.depno, count(emp.empno) depcount，sum(emp.sal) depsalsum, avg(emp.sal) depsalavg
from emp
where emp.empno &gt;= {$12} and emp.empno &lt;= {$13}
group by emp.depno
order by emp.depno desc
) bmrg on bmrg.depno = qb.depno
left join (
select aaa.员工工资等级, count(aaa.empno) gradecount from (
select * from
(select emp.empno empno, emp.ename ename, emp.job job, emp.mgr mgr, emp.hiredate hiredate, emp.sal sal, emp.comm,
decode（emp.depno, {$14}, '{$15}',
　　{$16}, '{$17}',
　　{$18}, '{$19}',
    {$20}, '{$21}',
　　'{$22}'）
　　部门
from emp) a,
(
select
m.ename 员工姓名,n.ename 员工上级,m.grade 员工工资等级,n.grade 上级工资等级
from
(select mgr,ename,grade from emp,salgrade
where sal&gt;=losal and sal&lt;=hisal) m
left join
(select empno,ename,grade from emp,salgrade
where sal&gt;=losal and sal&lt;=hisal) n
on m.mgr=n.empno) b
where a.ename = b.员工姓名
) aaa
where aaa.empno &gt;= {$23} and aaa.empno &lt;= {$24}
group by aaa.员工工资等级
having aaa.员工工资等级 &gt; {$25}
order by aaa.员工工资等级 asc
)gzdj on gzdj.员工工资等级 = qb.员工工资等级
left join (
select emp.empno, emp.ename, emp.job, emp.mgr, emp.hiredate, emp.sal, emp.comm, emp.depno, depth.dname, depth.loc from emp
left join depth on depth.deptno = emp.depno
where depth.dname is not null
)bmmz on bmmz.depno = qb.depno
left join (
select ccc.loc, count(ccc.empno) deccount
from (
select emp.empno, emp.ename, cc.dname, cc.loc from emp
left join (
select emp.empno, emp.ename, emp.job, emp.mgr, emp.hiredate, emp.sal, emp.comm, emp.depno, depth.dname, depth.loc from emp
left join depth on depth.deptno = emp.depno
where depth.dname is not null
) cc on cc.empno = emp.empno
) ccc
where ccc.loc is not null and ccc.dname is not null
group by ccc.loc
having ccc.loc is not null
) dqrs on dqrs.loc = bmmz.loc
)
)
order by qb.empno asc`,
          tag: '家'
        }, {
          date: '2017-01-04',
          name: '傻妞e',
          address: `select emp.depno, count(emp.empno) depcount，sum(emp.sal) depsalsum, avg(emp.sal) depsalavg
from emp
where emp.empno &gt;= {$12} and emp.empno &lt;= {$13}
group by emp.depno
order by emp.depno desc
) bmrg on bmrg.depno = qb.depno
left join (
select aaa.员工工资等级, count(aaa.empno) gradecount from (
select * from
(select emp.empno empno, emp.ename ename, emp.job job, emp.mgr mgr, emp.hiredate hiredate, emp.sal sal, emp.comm,
decode（emp.depno, {$14}, '{$15}',ade from emp,salgrade
where sal&gt;=losal and sal&lt;=hisal) n
on m.mgr=n.empno) b
where a.ename = b.员工姓名
) aaa
where aaa.empno &gt;= {$23} and aaa.empno &lt;= {$24}
group by aaa.员工工资等级
having aaa.员工工资等级 &gt; {$25}
order by aaa.员工工资等级 asc
)gzdj on gzdj.员工工资等级 = qb.员工工资等级
left rom emp`,
          tag: '公司'
        }, {
          date: null,
          name: '傻妞f',
          address: '上海市普陀区金沙江路 1666 弄',
          tag: '家'
        }, {
          date: '2017-01-06',
          name: '傻妞g',
          address: `select emp.depno, count(emp.empno) depcount，sum(emp.sal) depsalsum, avg(emp.sal) depsalavg
from emp
where emp.empno &gt;= {$12} and emp.empno &lt;= {$13}
m.ename 员工姓名,n.ename 员工上级,m.grade 员工工资等级,n.grade 上级工资等级
from
(select mgr,ename,grade from emp,salgrade
where sal&gt;=losal and sal&lt;=hisal) m`,
          tag: '公司'
        }],
        tableDataB: [{
          date: undefined,
          name: '傻妞a',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1666 弄',
          zip: 200333
        }, {
          date: '',
          name: '傻妞b',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1666 弄',
          zip: 200333
        }, {
          date: '0',
          name: '傻妞c',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1666 弄',
          zip: 200333
        }, {
          date: '2017-01-04',
          name: '',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1666 弄',
          zip: 200333
        }, {
          date: 0,
          name: null,
          province: undefined,
          city: '普陀区',
          address: '上海市普陀区金沙江路 1666 弄',
          zip: 200333
        }, {
          date: 0,
          name: null,
          province: undefined,
          city: '普陀区',
          address: '上海市普陀区金沙江路 1666 弄',
          zip: 200333
        }],
        tableDataC: [{
          id: '1001',
          name: '傻妞a',
          amount1: '123',
          amount2: '21.3',
          amount3: 312
        }, {
          id: '1002',
          name: '傻妞b',
          amount1: '157',
          amount2: '51.7',
          amount3: 517
        }, {
          id: '1003',
          name: '傻妞c',
          amount1: '362',
          amount2: '62.3',
          amount3: 236
        }, {
          id: '1004',
          name: '傻妞d',
          amount1: '178',
          amount2: '71.8',
          amount3: 178
        }, {
          id: '1005',
          name: '傻妞e',
          amount1: '310',
          amount2: '13.3',
          amount3: 133
        }],
        currentRow: [null],
        tree: {
          data: [
            {
              date: '2015-9-10',
              name: 'Lisa',
              children: [
                {
                  date: '2015-9-10',
                  name: 'Lisa Child1'
                },
                {
                  date: '2015-9-10',
                  name: 'Lisa Child2',
                  children: [
                    {
                      date: '2015-9-10',
                      name: 'Lisa Child2 Child1'
                    }
                  ]
                }
              ]
            },
            {
              date: '2015-9-10',
              name: 'Jack',
              children: [
                {
                  date: '2015-9-10',
                  name: 'Jack Child1'
                },
                {
                  date: '2015-9-10',
                  name: 'Jack Child2'
                }
              ]
            }
          ],
          config: [
            {
              title: '时间',
              property: 'date',
              width: 150
            },
            {
              title: '姓名',
              property: 'name'
            },
            {
              title: '姓名',
              property: 'name'
            }
          ]
        }
      }
    },
    mounted() {
    },
    methods: {
      /* 是否可以勾选 */
      isSelectable(row) {
        let flag;
        (row.type === 'parent') ? flag = true : flag = false
        return flag
      },
      changeCircle(row) {
        console.log(row);
      },
      tableRowClassName(row, index) {
        if (index === 0) {
          return 'normal-row'
        } else if (index === 1) {
          return 'info-row'
        } else if (index === 2) {
          return 'warning-row'
        }
        return '';
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleCurrentChange(newRow, oldRow) {
        this.currentRow = newRow;
        console.log(this.tableDataA.indexOf(newRow));
        console.log(JSON.stringify(newRow, null, 2));
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      formatter(row, column) {
        return `@${row.address}`;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      handleEdit(index, row) {
        console.log(index, JSON.stringify(row, null, 2));
      },
      handleMerge(row) {
        console.log(row.name);
      },
      filterChangeHandler(val) {
        console.log(val)
      }
    }
  }
</script>
