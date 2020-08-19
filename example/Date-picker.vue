<template>
  <article class="article">
    <h1>DatePicker 日期选择器</h1>
    <p>用于选择或输入日期</p>

    <H3>重要提示！！</H3>
    <div class="warning">
      <p>DatePicker组件的<code>v-model</code>绑定值和<code>@change</code>事件默认返回值类型都是Date对象。</p>
      <p>如果需要格式化成yyyy-MM-dd HH:mm:ss等等自定义的<code>字符串</code>格式，请自己使用<code>value-format</code>属性来格式化。</p>
      <p>请注意，<code>value-format</code>属性定义的格式会同时影响<code>v-model</code>的绑定值和<code>@change</code>事件的返回值，这两个值的格式是同步变化的。</p>
    </div>

    <h3>选择日</h3>
    <p>以「日」为基本单位，基础的日期选择控件</p>
    <div class="example">
      <div class="example-demo">
        <div>
          <span>默认：</span>
          <s-date-picker
            v-model="value1"
            type="date"
            @change="showChange"
            placeholder="选择日期">
          </s-date-picker>
          <span>{{'value1：'+ value1}}</span>
        </div>

        <div>
          <span>带快捷键：</span>
          <s-date-picker
            v-model="value2"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
          </s-date-picker>
          <span>{{'value2：'+ value2}}</span>
        </div>
      </div>
      <example-code>
        <textarea>
          <div>
            <span>默认：</span>
            <s-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </s-date-picker>
            <span>{{'value1：'+ value1}}</span>
          </div>

          <div>
            <span>带快捷键：</span>
            <s-date-picker
              v-model="value2"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions1">
            </s-date-picker>
            <span>{{'value2：'+ value2}}</span>
          </div>
          <script>
            export default {
              data() {
                return {
                  value1: '',
                  value2: '',
                  pickerOptions1: {
                    disabledDate(time) {
                      return time.getTime() > Date.now();
                    },
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
                };
              }
            };
          </script>
        </textarea>
        <div class="description">
          <p>基本单位由<code>type</code>属性指定。
            快捷选项需配置<code>picker-options</code>对象中的<code>shortcuts</code>，禁用日期通过 <code>disabledDate</code> 设置，传入函数</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>其他日期单位</h3>
    <p>通过扩展基础的日期选择，可以选择周、月、年</p>
    <div class="example">
      <div class="example-demo">
        <div>
          <span>周：</span>
          <s-date-picker
            v-model="value3"
            type="week"
            format="yyyy 第 WW 周"
            placeholder="选择周">
          </s-date-picker>
          <span>{{'value3：'+value3}}</span>
        </div>
        <div>
          <span>月：</span>
          <s-date-picker
            v-model="value4"
            type="month"
            placeholder="选择月">
          </s-date-picker>
          <span>{{'value4：'+value4}}</span>
        </div>
        <div>
          <span>年：</span>
          <s-date-picker
            v-model="value5"
            align="right"
            type="year"
            placeholder="选择年">
          </s-date-picker>
          <span>{{'value5：'+value5}}</span>
        </div>
      </div>
      <example-code>
        <textarea>
          <div>
            <span>周：</span>
            <s-date-picker
              v-model="value3"
              type="week"
              format="yyyy 第 WW 周"
              placeholder="选择周">
            </s-date-picker>
            <span>{{'value3：'+value3}}</span>
          </div>
          <div>
            <span>月：</span>
            <s-date-picker
              v-model="value4"
              type="month"
              placeholder="选择月">
            </s-date-picker>
            <span>{{'value4：'+value4}}</span>
          </div>
          <div>
            <span>年：</span>
            <s-date-picker
              v-model="value5"
              align="right"
              type="year"
              placeholder="选择年">
            </s-date-picker>
            <span>{{'value5：'+value5}}</span>
          </div>
          <script>
            export default {
              data() {
                return {
                  value3: '',
                  value4: '',
                  value5: ''
                };
              }
            };
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>选择日期范围</h3>
    <p>可在一个选择器中便捷地选择一个时间范围</p>
    <div class="example">
      <div class="example-demo">
        <div>
          <span>默认：</span>
          <s-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </s-date-picker>
          <span>{{'value6：' + value6}}</span>
        </div>
        <div>
          <span>带快捷选项：</span>
          <s-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2">
          </s-date-picker>
          <span>{{'value7：' + value7}}</span>
        </div>
      </div>
      <example-code>
        <textarea>
          <div>
            <span>默认：</span>
            <s-date-picker
              v-model="value6"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </s-date-picker>
            <span>{{'value6：' + value6}}</span>
          </div>
          <div>
            <span>带快捷选项：</span>
            <s-date-picker
              v-model="value7"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2">
            </s-date-picker>
            <span>{{'value7：' + value7}}</span>
          </div>
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
                  },
                  value6: '',
                  value7: ''
                };
              }
            };
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>默认显示日期</h3>
    <p>未选择日期时，默认显示今天的日历。使用<code>default-value</code>可以指定其他日期，该值需要能够被<code>new Date()</code>解析。
      类型为<code>daterange</code>时，指定左侧日历的日期。</p>
    <div class="example">
      <div class="example-demo">
        <div>
          <span>date：</span>
          <s-date-picker
            v-model="value8"
            type="date"
            placeholder="选择日期"
            default-value="2010-10-01">
          </s-date-picker>
          <span>{{'value8：'+ value8}}</span>
        </div>
        <div>
          <span>daterange：</span>
          <s-date-picker
            v-model="value9"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            default-value="2010-10-01">
          </s-date-picker>
          <span>{{'value9：'+ value9}}</span>
        </div>
      </div>
      <example-code>
        <textarea>
          <div>
            <span>date：</span>
            <s-date-picker
              v-model="value8"
              type="date"
              placeholder="选择日期"
              default-value="2010-10-01">
            </s-date-picker>
            <span>{{'value8：'+ value8}}</span>
          </div>
          <div>
            <span>daterange：</span>
            <s-date-picker
              v-model="value9"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              default-value="2010-10-01">
            </s-date-picker>
            <span>{{'value9：'+ value9}}</span>
          </div>
          <script>
            export default {
              data() {
                return {
                  value8: '',
                  value9: ''
                };
              }
            };
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>返回值格式</h3>
    <p>默认情况下，组件接受并返回<code>Date</code>对象。
      使用<code>value-format</code>指定返回值的格式，支持的格式与<code>format</code>相同。</p>
    <div class="example">
      <div class="example-demo">
        <div>
          <span>默认为 Date 对象：</span>
          <s-date-picker
            v-model="value10"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日">
          </s-date-picker>
          <span>value10：{{value10}}</span>
        </div>
        <div>
          <span>使用 value-format 进行格式化：</span>
          <s-date-picker
            v-model="value11"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </s-date-picker>
          <span>value11：{{value11}}</span>
        </div>
      </div>
      <example-code>
        <textarea>
          <div>
            <span>默认为 Date 对象：</span>
            <s-date-picker
              v-model="value10"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日">
            </s-date-picker>
            <span>value10：{{value10}}</span>
          </div>
          <div>
            <span>使用 value-format 进行格式化：</span>
            <s-date-picker
              v-model="value11"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd">
            </s-date-picker>
            <span>value11：{{value11}}</span>
          </div>
          <script>
            export default {
              data() {
                return {
                  value10: '',
                  value11: '',
                };
              }
            };
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
      <s-tb-i title="onPick" desc="选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效" type="Function({ maxDate, minDate })" value="-" init="-"></s-tb-i>
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
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
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