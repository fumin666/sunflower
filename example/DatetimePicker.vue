<template>
  <article class="article">
    <h1>DateTimePicker 日期时间选择器</h1>
    <P>在同一个选择器里选择日期和时间</P>

    <div class="tip">
      <p>DateTimePicker 由 DatePicker 和 TimePicker 派生，<code>Picker Options</code> 或者其他选项可以参照 DatePicker 和 TimePicker。</p>
    </div>


    <H3>重要提示！！</H3>
    <div class="warning">
      <p>DateTimePicker组件的<code>v-model</code>绑定值和<code>@change</code>事件默认返回值类型都是Date对象。</p>
      <p>如果需要格式化成yyyy-MM-dd HH:mm:ss等等自定义的<code>字符串</code>格式，请自己使用<code>value-format</code>属性来格式化。</p>
      <p>请注意，<code>value-format</code>属性定义的格式会同时影响<code>v-model</code>的绑定值和<code>@change</code>事件的返回值，这两个值的格式是同步变化的。</p>
    </div>

    <h3>日期和时间点</h3>
    <div class="example">
      <div class="example-demo">
        <s-date-picker
          v-model="value1"
          type="datetime"
          @change="showChange"
          placeholder="请选择日期时间">
        </s-date-picker>
        <span>{{'value1：' + value1}}</span>
      </div>
      <example-code>
        <textarea>
        <s-date-picker
          v-model="value1"
          type="datetime"
          placeholder="请选择日期时间">
        </s-date-picker>
    <script>
      export default {
        data() {
          return {
            value1: ''
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>日期和时间点 - 带快捷选项</h3>
    <div class="example">
      <div class="example-demo">
        <s-date-picker
          v-model="value2"
          type="datetime"
          placeholder="请选择日期时间"
          :picker-options="pickerOptions1">
        </s-date-picker>
        <span>{{'value2：' + value2}}</span>
      </div>
      <example-code>
        <textarea>
    <s-date-picker
      v-model="value2"
      type="datetime"
      placeholder="请选择日期时间"
      :picker-options="pickerOptions1">
    </s-date-picker>
    <script>
      export default {
        data() {
          return {
            value2: '',
            pickerOptions1: {
              shortcuts: [{
                text: '今天',
                onClick(picker) {
                  picker.$emit('pick', new Date());
                }
              }, {
                text: '昨天',
                onClick(picker) {
                  const date = new Date();
                  date.setTime(date.getTime() - 3600 * 1000 * 24);
                  picker.$emit('pick', date);
                }
              }, {
                text: '一周前',
                onClick(picker) {
                  const date = new Date();
                  date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                  picker.$emit('pick', date);
                }
              }]
            }
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>日期和时间范围</h3>
    <div class="example">
      <div class="example-demo">
        <s-date-picker
          v-model="value3"
          type="datetimerange"
          placeholder="选择时间范围">
        </s-date-picker>
        <span>{{'value3：' + value3}}</span>
      </div>
      <example-code>
        <textarea>
    <s-date-picker
      v-model="value3"
      type="datetimerange"
      placeholder="选择时间范围">
    </s-date-picker>
    <script>
      export default {
        data() {
          return {
            value3: ''
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>日期和时间范围 - 带快捷选项</h3>
    <div class="example">
      <div class="example-demo">
        <s-date-picker
          v-model="value4"
          type="datetimerange"
          :picker-options="pickerOptions2"
          placeholder="请选择时间范围">
        </s-date-picker>
      </div>
      <example-code>
        <textarea>
    <s-date-picker
      v-model="value4"
      type="datetimerange"
      :picker-options="pickerOptions2"
      placeholder="请选择时间范围">
    </s-date-picker>
    <script>
      export default {
        data() {
          return {
            pickerOptions2: {
              shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                  picker.$emit('pick', [start, end]);
                }
              }, {
                text: '最近一个月',
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                  picker.$emit('pick', [start, end]);
                }
              }, {
                text: '最近三个月',
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                  picker.$emit('pick', [start, end]);
                }
              }]
            }
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>Attributes</h3>
    <s-tb>
      <s-tb-i title="readonly" desc="完全只读" type="boolean" value="-" init="boolean"></s-tb-i>
      <s-tb-i title="disabled" desc="禁用" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="editable" desc="文本框可输入" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="clearable" desc="是否显示清除按钮" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="size" desc="输入框尺寸" type="string" value="large, small, mini" init="-"></s-tb-i>
      <s-tb-i title="placeholder" desc="非范围选择时的占位内容" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="start-placeholder" desc="范围选择时开始日期的占位内容" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="end-placeholder" desc="范围选择时结束日期的占位内容" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="time-arrow-control" desc="是否使用箭头进行时间选择" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="type" desc="显示类型" type="string" value="year/month/date/week/ datetime/datetimerange/daterange" init="date"></s-tb-i>
      <s-tb-i title="** format **" desc="显示在输入框中的格式" type="string" value="年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss" init="yyyy-MM-dd"></s-tb-i>
      <s-tb-i title="align" desc="对齐方式	" type="string" value="left, center, right" init="left"></s-tb-i>
      <s-tb-i title="popper-class" desc="DatePicker 下拉框的类名" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="picker-options" desc="当前时间日期选择器特有的选项参考下表" type="object" value="{}" init="-"></s-tb-i>
      <s-tb-i title="range-separator" desc="选择范围时的分隔符" type="string" value="-" init="'-'"></s-tb-i>
      <s-tb-i title="default-value" desc="可选，选择器打开时默认显示的时间" type="Date" value="可被new Date()解析" init="-"></s-tb-i>
      <s-tb-i title="** value-format **" desc="可选，绑定值的格式。不指定则绑定值为 Date 对象" type="string" value="年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss" init="-"></s-tb-i>
      <s-tb-i title="name" desc="原生属性" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="unlink-panels" desc="在范围选择器里取消两个日期面板之间的联动" type="boolean" value="-" init="false"></s-tb-i>
    </s-tb>

    <h3>Picker Options</h3>
    <s-tb>
      <s-tb-i title="shortcuts" desc="设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表" type="Object[]" value="-" init="-"></s-tb-i>
      <s-tb-i title="disabledDate" desc="设置禁用状态，参数为当前日期，要求返回 Boolean" type="Function" value="-" init="-"></s-tb-i>
      <s-tb-i title="firstDayOfWeek" desc="周起始日" type="Number" value="1 到 7" init="7"></s-tb-i>
    </s-tb>

    <h3>Shortcuts</h3>
    <s-tb>
      <s-tb-i title="text" desc="标题文本" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="onClick" desc="选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())" type="function" value="-" init="-"></s-tb-i>
    </s-tb>

    <h3>Events</h3>
    <table>
      <thead>
      <tr>
        <th>事件名称</th><th>说明</th><th>回调参数</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>change</td><td>用户确认选定的值时触发</td><td>组件绑定值。格式与绑定值一致，可受 <code>value-format</code> 控制</td>
      </tr>
      <tr>
        <td>blur</td><td>当 input 失去焦点时触发</td><td>(event: Event)</td>
      </tr>
      <tr>
        <td>focus</td><td>当 input 获得焦点时触发</td><td>(event: Event)</td>
      </tr>
      </tbody>
    </table>

    <h3>Methods</h3>
    <table>
      <thead>
      <tr>
        <th>方法名</th><th>说明</th><th>参数</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>focus</td><td>使 input 获取焦点</td><td>—</td>
      </tr>
      </tbody>
    </table>

  </article>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      }
    },
    methods: {
      showChange(val) {
        console.info(`---@change 的返回值是：${val}---，其类型是：${typeof (val)} `)
        console.info(`---组件 v-model 的绑定值是：${this.value1}---，其类型是：${typeof (this.value1)} `)
      }
    }
  }
</script>