<template>
    <article class="article">
        <h1>Radio 单选框</h1>
        <h3>基础用法</h3>
        <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
        <div class="example">
            <div class="example-demo">
                <s-radio class="radio" v-model="radio" label="1">备选项</s-radio>
                <s-radio class="radio" v-model="radio" label="2">备选项</s-radio>
            </div>
        </div>
        <example-code>
            <textarea>
              <s-radio class="radio" v-model="radio" label="1">备选项</s-radio>
              <s-radio class="radio" v-model="radio" label="2">备选项</s-radio>
            </textarea>
            <pre><code></code></pre>
        </example-code>
        <h3>禁用状态</h3>
        <p>单选框不可用的状态。</p>
        <div class="example">
            <div class="example-demo">
                <s-radio disabled v-model="radio1" label="禁用">备选项</s-radio>
                <s-radio disabled v-model="radio1" label="选中且禁用">备选项</s-radio>
            </div>
        </div>
        <example-code>
            <textarea>
              <s-radio disabled v-model="radio1" label="禁用">备选项</s-radio>
              <s-radio disabled v-model="radio1" label="选中且禁用">备选项</s-radio>
            </textarea>
            <pre><code></code></pre>
        </example-code>
        <h3>单选框组</h3>
        <p>适用于在多个互斥的选项中选择的场景</p>
        <div class="example">
            <div class="example-demo">
                <s-radio-group v-model="radio2" @change="handleChange">
                    <s-radio :label="3">备选项</s-radio>
                    <s-radio :label="6">备选项</s-radio>
                    <s-radio :label="9">备选项</s-radio>
                </s-radio-group>
            </div>
        </div>
        <h3>按钮样式</h3>
        <p>按钮样式的单选组合。</p>
        <div class="example">
            <div class="example-demo">
                <template>
                    <s-radio-group v-model="radio3" @change="handleChange">
                        <s-radio-button label="上海"></s-radio-button>
                        <s-radio-button label="北京"></s-radio-button>
                        <s-radio-button label="广州"></s-radio-button>
                        <s-radio-button label="深圳"></s-radio-button>
                    </s-radio-group>
                    <div style="margin: 15px 0;"></div>
                    <s-radio-group v-model="radio4" @change="handleChange">
                        <s-radio-button label="0">上海</s-radio-button>
                        <s-radio-button label="1" :disabled="true">北京</s-radio-button>
                        <s-radio-button label="2">广州</s-radio-button>
                        <s-radio-button label="3">深圳</s-radio-button>
                    </s-radio-group>
                    <div style="margin: 15px 0;"></div>
                    <s-radio-group v-model="radio5" :disabled="true" @change="handleChange">
                        <s-radio-button label="上海"></s-radio-button>
                        <s-radio-button label="北京"></s-radio-button>
                        <s-radio-button label="广州"></s-radio-button>
                        <s-radio-button label="深圳"></s-radio-button>
                    </s-radio-group>
                </template>
            </div>
        </div>
        <h3>带边框</h3>
        <div class="example">
            <div class="example-demo">
                <template>
                    <div>
                        <s-radio v-model="radio7" label="1" border>备选项1</s-radio>
                        <s-radio v-model="radio7" label="2" border>备选项2</s-radio>
                    </div>
                    <div style="margin-top: 20px">
                        <s-radio v-model="radio8" label="1" border size="medium">备选项1</s-radio>
                        <s-radio v-model="radio8" label="2" border size="medium">备选项2</s-radio>
                    </div>
                    <div style="margin-top: 20px">
                        <s-radio-group v-model="radio9" size="small" @change="handleChange">
                            <s-radio label="1" border>备选项1</s-radio>
                            <s-radio label="2" border disabled>备选项2</s-radio>
                        </s-radio-group>
                    </div>
                    <div style="margin-top: 20px">
                        <s-radio-group v-model="radio10" size="mini" disabled @change="handleChange">
                            <s-radio label="1" border>备选项1</s-radio>
                            <s-radio label="2" border>备选项2</s-radio>
                        </s-radio-group>
                    </div>
                </template>
            </div>
        </div>
        <h3 id="radio-attributes"> Radio Attributes</h3>
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
                <td>label</td>
                <td>Radio 的 value</td>
                <td>string,number,boolean</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
            </tr>
            <tr>
                <td>name</td>
                <td>原生 name 属性</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
            </tr>
            </tbody>
        </table>
        <h3 id="radio-group-attributes"> Radio-group Attributes</h3>
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
                <td>size</td>
                <td>Radio 按钮组尺寸</td>
                <td>string</td>
                <td>large, small</td>
                <td>—</td>
            </tr>
            <tr>
                <td>fill</td>
                <td>按钮激活时的填充色和边框色</td>
                <td>string</td>
                <td>—</td>
                <td>#20a0ff</td>
            </tr>
            <tr>
                <td>text-color</td>
                <td>按钮激活时的文本颜色</td>
                <td>string</td>
                <td>—</td>
                <td>#ffffff</td>
            </tr>
            </tbody>
        </table>
        <h3 id="radio-group-events"> Radio-group Events</h3>
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
                <td>change</td>
                <td>绑定值变化时触发的事件</td>
                <td>选中的 Radio label 值</td>
            </tr>
            </tbody>
        </table>
        <h3 id="radio-button-attributes"> Radio-button Attributes</h3>
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
                <td>label</td>
                <td>Radio 的 value</td>
                <td>string,number</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td>boolean</td>
                <td>—</td>
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
        radio: '1',
        radio1: '选中且禁用',
        radio2: 3,
        radio3: '上海',
        radio4: 2,
        radio5: '上海',
        radio7: '1',
        radio8: '1',
        radio9: '1',
        radio10: '1'
      }
    },
    methods: {
      handleChange(val) {
        console.log(val)
      }
    }
  }
</script>
