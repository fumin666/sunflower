<template>
  <article class="article">
    <h1>Checkbox</h1>
    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <s-checkbox v-model="checked">备选项</s-checkbox>
      </div>
      <example-code>
        <textarea>
           <s-checkbox v-model="checked">备选项</s-checkbox>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>禁用状态</h3>
    <div class="example">
      <div class="example-demo">
        <s-checkbox v-model="checked1" disabled>备选项1</s-checkbox>
        <s-checkbox v-model="checked2" disabled>备选项</s-checkbox>
      </div>
      <example-code>
        <textarea>
            <s-checkbox v-model="checked1" disabled>备选项1</s-checkbox>
            <s-checkbox v-model="checked2" disabled>备选项</s-checkbox>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>多选框组</h3>
    <div class="example">
      <div class="example-demo">
        <s-checkbox-group v-model="checkList" :min="1">
          <s-checkbox label="复选框 A"></s-checkbox>
          <s-checkbox label="复选框 B"></s-checkbox>
          <s-checkbox label="复选框 C"></s-checkbox>
          <s-checkbox label="禁用" disabled></s-checkbox>
          <s-checkbox label="选中且禁用" disabled></s-checkbox>
        </s-checkbox-group>
      </div>
      <example-code>
        <textarea>
            <s-checkbox-group v-model="checkList">
              <s-checkbox label="复选框 A"></s-checkbox>
              <s-checkbox label="复选框 B"></s-checkbox>
              <s-checkbox label="复选框 C"></s-checkbox>
              <s-checkbox label="禁用" disabled></s-checkbox>
              <s-checkbox label="选中且禁用" disabled></s-checkbox>
          </s-checkbox-group>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>indeterminate 状态</h3>
    <p><code>indeterminate</code> 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
    <div class="example">
      <div class="example-demo">
        <s-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</s-checkbox>
        <div style="margin: 15px 0;"></div>
        <s-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <s-checkbox v-for="city in cities" :label="city" :key="city"></s-checkbox>
        </s-checkbox-group>
      </div>
      <example-code>
        <textarea>
            <s-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</s-checkbox>
            <div style="margin: 15px 0;"></div>
            <s-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <s-checkbox v-for="city in cities" :label="city" :key="city"></s-checkbox>
            </s-checkbox-group>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>
    <h3>限制选择的数量</h3>
    <div class="example">
      <div class="example-demo">
        <s-checkbox-group
                v-model="checkedCities1"
                :min="1"
                :max="2">
          <s-checkbox v-for="city in cities" :label="city" :key="city"></s-checkbox>
        </s-checkbox-group>
      </div>
      <example-code>
        <textarea>
            <s-checkbox-group
                    v-model="checkedCities1"
                    :min="1"
                    :max="2">
              <s-checkbox v-for="city in cities" :label="city" :key="city"></s-checkbox>
            </s-checkbox-group>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>
    <h3>按钮样式</h3>
    <div class="example">
      <div class="example-demo">
        <div>
          <s-checkbox-group v-model="checkboxGroup1">
            <s-checkbox-button v-for="city in cities" :label="city" :key="city"></s-checkbox-button>
          </s-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <s-checkbox-group v-model="checkboxGroup2" size="medium">
            <s-checkbox-button v-for="city in cities" :label="city" :key="city"></s-checkbox-button>
          </s-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <s-checkbox-group v-model="checkboxGroup3" size="small">
            <s-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city"></s-checkbox-button>
          </s-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <s-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
            <s-checkbox-button v-for="city in cities" :label="city" :key="city"></s-checkbox-button>
          </s-checkbox-group>
        </div>
      </div>
    </div>
    <h3>带有边框</h3>
    <div class="example">
      <div class="example-demo">
        <div>
          <s-checkbox v-model="checked3" label="备选项1" border></s-checkbox>
          <s-checkbox v-model="checked4" label="备选项2" border></s-checkbox>
        </div>
        <div style="margin-top: 20px">
          <s-checkbox v-model="checked5" label="备选项1" border size="medium"></s-checkbox>
          <s-checkbox v-model="checked6" label="备选项2" border size="medium"></s-checkbox>
        </div>
        <div style="margin-top: 20px">
          <s-checkbox-group v-model="checkboxGroup5" size="small">
            <s-checkbox label="备选项1" border></s-checkbox>
            <s-checkbox label="备选项2" border disabled></s-checkbox>
          </s-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <s-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
            <s-checkbox label="备选项1" border></s-checkbox>
            <s-checkbox label="备选项2" border></s-checkbox>
          </s-checkbox-group>
        </div>
      </div>
    </div>
    <h3 id="checkbox-attributes"> Checkbox Attributes</h3>
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
        <td>选中状态的值（只有在<code>checkbox-group</code>或者绑定对象类型为<code>array</code>时有效）</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>true-label</td>
        <td>选中时的值</td>
        <td>string, number</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>false-label</td>
        <td>没有选中时的值</td>
        <td>string, number</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>name</td>
        <td>原生 name 属性</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>按钮禁用</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>checked</td>
        <td>当前是否勾选</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>indeterminate</td>
        <td>设置 indeterminate 状态，只负责样式控制</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      </tbody>
    </table>
    <h3 id="checkbox-group-events"> Checkbox-group Events</h3>
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
        <td>当绑定值变化时触发的事件</td>
        <td>event 事件对象</td>
      </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checked: true,
        checked1: false,
        checked2: true,
        checkList: ['复选框 A'],
        checkAll: true,
        checkedCities1: ['上海', '北京'],
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        checked3: true,
        checked4: false,
        checked5: false,
        checked6: true,
        checkboxGroup5: [],
        checkboxGroup6: [],
        city: ''
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  }
</script>
