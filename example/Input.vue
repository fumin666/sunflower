<template>
  <article class="article">
    <h1>Input 输入框</h1>

    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <s-input v-model="input" placeholder="请输入内容"></s-input>
      </div>
      <example-code>
        <textarea>
          &lt;s-input v-model="input" placeholder="请输入内容"&gt;&lt;/s-input&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                input: ""
              }
            }
          }
          &lt;/script&gt;
        </textarea>
        <div class="description">
          <p>要使用它，只需要在<code>s-input-number</code>元素中使用<code>v-model</code>绑定变量即可，变量的初始值即为默认值。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>禁用状态</h3>
    <div class="example">
      <div class="example-demo">
        <s-input placeholder="请输入内容" v-model="input1" :disabled="true"></s-input>
      </div>
      <example-code>
        <textarea>
          <s-input placeholder="请输入内容" v-model="input1" :disabled="true"></s-input>

          <script>
            export default {
              data() {
                return {
                  input1: ''
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p>通过 <code>disabled</code> 属性指定是否禁用 input 组件</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>带 icon 的输入框</h3>
    <p>带有图标标记输入类型</p>
    <div class="example">
      <div class="example-demo">
          属性方式：
          <s-input
            placeholder="请选择日期"
            icon="calendar"
            v-model="input2"
            style="margin-top: 15px;"
            @click="alert0(0)">
          </s-input>
          <s-input
            placeholder="请输入内容"
            prefix-icon="magnifier"
            v-model="input3"
            style="margin-top: 15px;">
          </s-input>

          slot 方式：
          <s-input
            placeholder="请选择日期"
            v-model="input4"
            style="margin-top: 15px;">
            <i slot="suffix" class="s-input-icon iconfont icon-calendar"  @click="alert0(0)"></i>
          </s-input>
          <s-input
            placeholder="请输入内容"
            v-model="input5"
            style="margin-top: 15px;">
            <i slot="prefix" class="s-input-icon iconfont icon-magnifier"></i>
          </s-input>
      </div>

      <example-code>
        <textarea>
          属性方式：
          <s-input
            placeholder="请选择日期"
            icon="calendar"
            v-model="input2"
            style="margin-top: 15px;">
          </s-input>
          <s-input
            placeholder="请输入内容"
            prefix-icon="magnifier"
            v-model="input3"
            style="margin-top: 15px;">
          </s-input>

          slot 方式：
          <s-input
            placeholder="请选择日期"
            v-model="input4"
            style="margin-top: 15px;">
            <i slot="suffix" class="s-input-icon iconfont icon-calendar"></i>
          </s-input>
          <s-input
            placeholder="请输入内容"
            v-model="input5"
            style="margin-top: 15px;">
            <i slot="prefix" class="s-input-icon iconfont icon-magnifier"></i>
          </s-input>

          <script>
            export default {
              data() {
                return {
                  input2: '',
                  input3: '',
                  input4: '',
                  input5: ''
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>文本域</h3>
    <p>用于输入多行文本信息，通过将 type 属性的值指定为 textarea。</p>
    <div class="example">
      <div class="example-demo">
        <s-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea">
        </s-input>
      </div>
      <example-code>
        <textarea>
          <s-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea">
          </s-input>

          <script>
          export default {
            data() {
              return {
                textarea: ''
              }
            }
          }
          </script>
        </textarea>
        <div class="description">
          <p>文本域高度可通过 <code>rows</code> 属性控制</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>可自适应文本高度的文本域</h3>
    <p>通过设置 <code>autosize</code> 属性可以使得文本域的高度能够根据文本内容自动进行调整，
      并且 <code>autosize</code> 还可以设定为一个对象，指定最小行数和最大行数。
    </p>
    <div class="example">
      <div class="example-demo">
        <s-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="textarea2">
        </s-input>
        <div style="margin: 20px 0;"></div>
        <s-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="textarea3">
        </s-input>
      </div>
      <example-code>
        <textarea>
          <s-input
            type="textarea"
            autosize
            placeholder="请输入内容"
            v-model="textarea2">
          </s-input>
          <div style="margin: 20px 0;"></div>
          <s-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="textarea3">
          </s-input>

          <script>
          export default {
            data() {
              return {
                textarea2: '',
                textarea3: ''
              }
            }
          }
          </script>
        </textarea>
        <div class="description">
          <p>文本域高度可通过 <code>rows</code> 属性控制</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>复合型输入框</h3>
    <p>可前置或后置元素，一般为标签或按钮</p>
    <div class="example">
      <div class="example-demo">
        <div>
          <s-input placeholder="请输入内容" v-model="inputHTTP">
            <template slot="prepend">Http://</template>
          </s-input>
        </div>
        <div style="margin-top: 15px;">
          <s-input placeholder="请输入内容" v-model="inputCOM">
            <template slot="append">.com</template>
          </s-input>
        </div>
        <div style="margin-top: 15px;">
          <s-input placeholder="请输入内容" v-model="inputSelect" class="input-with-select">
            <s-select v-model="select" slot="prepend" placeholder="请选择">
              <s-option label="餐厅名" value="1"></s-option>
              <s-option label="订单号" value="2"></s-option>
              <s-option label="用户电话" value="3"></s-option>
            </s-select>
            <s-button slot="append" icon="magnifier"></s-button>
          </s-input>
        </div>
      </div>
      <example-code>
        <textarea>
          <div>
            <s-input placeholder="请输入内容" v-model="inputHTTP">
              <template slot="prepend">Http://</template>
            </s-input>
          </div>
          <div style="margin-top: 15px;">
            <s-input placeholder="请输入内容" v-model="inputCOM">
              <template slot="append">.com</template>
            </s-input>
          </div>
          <div style="margin-top: 15px;">
            <s-input placeholder="请输入内容" v-model="inputSelect" class="input-with-select">
              <s-select v-model="select" slot="prepend" placeholder="请选择">
                <s-option label="餐厅名" value="1"></s-option>
                <s-option label="订单号" value="2"></s-option>
                <s-option label="用户电话" value="3"></s-option>
              </s-select>
              <s-button slot="append" icon="magnifier"></s-button>
            </s-input>
          </div>

          <style>
            .input-with-select .s-input-group_prepend {
              background: transparent;
            }
          </style>

          <script>
            export default {
              data() {
                return {
                  inputHTTP: '',
                  inputCOM: '',
                  inputSelect: '',
                  select: ''
                }
              }
            }
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>尺寸</h3>
    <div class="example">
      <div class="example-demo">
        <div class="demo-input-size">
          <s-input
            size="medium"
            placeholder="请输入内容"
            icon="calendar"
            v-model="input7">
          </s-input>
          <s-input
            placeholder="请输入内容"
            icon="calendar"
            v-model="input6">
          </s-input>
          <s-input
            size="small"
            placeholder="请输入内容"
            icon="calendar"
            v-model="input8">
          </s-input>
        </div>
      </div>
      <example-code>
        <textarea>
          <div class="demo-input-size">
            <s-input
              placeholder="请输入内容"
              icon="calendar"
              v-model="input6">
            </s-input>
            <s-input
              size="medium"
              placeholder="请输入内容"
              icon="calendar"
              v-model="input7">
            </s-input>
            <s-input
              size="small"
              placeholder="请输入内容"
              icon="calendar"
              v-model="input8">
            </s-input>
            <s-input
              size="mini"
              placeholder="请输入内容"
              icon="calendar"
              v-model="input9">
            </s-input>
          </div>

          <script>
          export default {
            data() {
              return {
                input6: '',
                input7: '',
                input8: '',
                input9: ''
              }
            }
          }
          </script>

          <style>
            .demo-input-size .s-input {
              width: 200px;
              margin-right: 15px;
            }
          </style>
        </textarea>
        <div class="description">
          <p>可通过 <code>size</code> 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>Attributes</h3>
    <s-tb>
      <s-tb-i title="type" desc="类型" type="string" value="text/textarea" init="text"></s-tb-i>
      <s-tb-i title="value" desc="绑定值值" type="string/number" value="-" init="-"></s-tb-i>
      <s-tb-i title="maxlength" desc="最大输入长度" type="number" value="-" init="-"></s-tb-i>
      <s-tb-i title="minlength" desc="最小输入长度" type="number" value="-" init="-"></s-tb-i>
      <s-tb-i title="placeholder" desc="输入框占位文本" type="string/number" value="string" init="-"></s-tb-i>
      <s-tb-i title="disabled" desc="禁用" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="size" desc="输入框尺寸" type="string" value="medium/small/mini" init="-"></s-tb-i>
      <s-tb-i title="prefix-icon" desc="输入框头部图标" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="icon" desc="输入框尾部图标" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="rows" desc="输入框行数，只对 type='textarea' 有效" type="number" value="-" init="2"></s-tb-i>
      <s-tb-i title="autosize" desc="自适应内容高度，只对 type='textarea' 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }" type="boolean/object" value="-" init="false"></s-tb-i>
      <s-tb-i title="auto-complete" desc="原生属性，自动补全" type="string" value="on, off" init="off"></s-tb-i>
      <s-tb-i title="name" desc="原生属性" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="readonly" desc="原生属性，是否只读" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="max" desc="原生属性，设置最大值" type="-" value="-" init="-"></s-tb-i>
      <s-tb-i title="min" desc="原生属性，设置最小值" type="-" value="-" init="-"></s-tb-i>
      <s-tb-i title="step" desc="原生属性，设置输入字段的合法数字间隔" type="-" value="-" init="-"></s-tb-i>
      <s-tb-i title="resize" desc="控制是否能被用户缩放" type="string" value="none, both, horizontal, vertical" init="-"></s-tb-i>
      <s-tb-i title="autofocus" desc="原生属性，自动获取焦点" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="form" desc="原生属性" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="label" desc="输入框关联的label文字" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="on-icon-click" desc="点击 Input 内的图标的钩子函数" type="点击 Input 内的图标的钩子函数" value="-" init="-"></s-tb-i>
    </s-tb>

    <h3>Slot</h3>
    <table>
      <thead>
      <tr>
        <th>name</th><th>说明</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>prefix</td><td>输入框头部内容</td>
        </tr>
        <tr>
          <td>suffix</td><td>suffix</td>
        </tr>
        <tr>
          <td>prepend</td><td>输入框前置内容</td>
        </tr>
        <tr>
          <td>append</td><td>输入框后置内容</td>
        </tr>
      </tbody>
    </table>

    <h3>Events</h3>
    <table>
      <thead>
      <tr>
        <th>事件名称</th><th>说明</th><th>回调参数</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td><td>点击 Input 内的图标时触发</td><td>(event: Event)</td>
        </tr>
        <tr>
          <td>blur</td><td>在 Input 失去焦点时触发</td><td>(event: Event)</td>
        </tr>
        <tr>
          <td>focus</td><td>在 Input 获得焦点时触发</td><td>(event: Event)</td>
        </tr>
        <tr>
          <td>change</td><td>在 Input 值改变时触发</td><td>(value: string | number)</td>
        </tr>
      </tbody>
    </table>

    <h3>Methods</h3>
    <table>
      <thead>
      <tr>
        <th>方法名	</th><th>说明</th><th>参数</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>focus</td><td>使 input 获取焦点	</td><td>-</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        restaurants: [],
        state4: '',
        timeout: null,
        input: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        textarea: '',
        textarea2: '',
        textarea3: '',
        inputHTTP: '',
        inputCOM: '',
        inputSelect:'',
        select: ''
      };
    },
    methods: {
      loadAll() {
        return [
          {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
          {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
          {"value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"},
          {"value": "泷千家(天山西路店)", "address": "天山西路438号"},
          {"value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"},
          {"value": "贡茶", "address": "上海市长宁区金钟路633号"},
          {"value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号"},
          {"value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号"},
          {"value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107"},
          {"value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号"},
          {"value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号"},
          {"value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号"},
          {"value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"},
          {"value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层"},
          {"value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号"},
          {"value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路"},
          {"value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺"},
          {"value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819"},
          {"value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306"},
          {"value": "枪会山", "address": "上海市普陀区棕榈路"},
          {"value": "纵食", "address": "元丰天山花园(东门) 双流路267号"},
          {"value": "钱记", "address": "上海市长宁区天山西路"},
          {"value": "壹杯加", "address": "上海市长宁区通协路"},
          {"value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"},
          {"value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室"},
          {"value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"},
          {"value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6"},
          {"value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号"},
          {"value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号"},
          {"value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号"},
          {"value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号"},
          {"value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号"},
          {"value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室"},
          {"value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1"},
          {"value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号"},
          {"value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室"},
          {"value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部"},
          {"value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B"},
          {"value": "浏阳蒸菜", "address": "天山西路430号"},
          {"value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路"},
          {"value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室"},
          {"value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号"},
          {"value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号"},
          {"value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位"},
          {"value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号"},
          {"value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼"},
          {"value": "阳阳麻辣烫", "address": "天山西路389号"},
          {"value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13"}
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
      alert0(o) {
        console.log(o)
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };
</script>

<style>
  .input-with-select .s-input-group_prepend {
    background: transparent;
  }
  .demo-input-size .s-input {
    width: 200px;
    margin-right: 15px;
  }
</style>