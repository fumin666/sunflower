<template>
  <article class="article">
    <h1>Transfer 穿梭框</h1>

    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <template>
          <div>value1：{{value1}}</div>
          <s-transfer v-model="value1" :data="data"></s-transfer>
        </template>
      </div>

      <example-code>
        <textarea>
          <template>
            <s-transfer v-model="value1" :data="data"></s-transfer>
          </template>

          <script>
            export default {
              data() {
                const generateData = _ => {
                  const data = [];
                  for (let i = 1; i <= 15; i++) {
                    data.push({
                      key: i,
                      label: `备选项 ${ i }`,
                      disabled: i % 4 === 0
                    });
                  }
                  return data;
                };
                return {
                  data: generateData(),
                  value1: [1, 4]
                };
              }
            };
          </script>
        </textarea>

        <div class="description">
          <p>Transfer 的数据通过 <code>data</code> 属性传入。数据需要是一个对象数组，每个对象有以下属性：<code>key</code> 为数据的唯一性标识，<code>label</code> 为显示文本，<code>disabled</code> 表示该项数据是否禁止转移。
            目标列表中的数据项会同步到绑定至 <code>v-model</code> 的变量，值为数据项的 <code>key</code> 所组成的数组。当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 <code>v-model</code> 绑定的变量赋予一个初始值。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>可搜索</h3>
    <p>在数据很多的情况下，可以对数据进行搜索和过滤。</p>
    <div class="example">
      <div class="example-demo">
        <template>
          <div>value2：{{value2}}</div>
          <s-transfer
            filterable
            :filter-method="filterMethod"
            filter-placeholder="请输入城市拼音"
            v-model="value2"
            :data="data2">
          </s-transfer>
        </template>
      </div>

      <example-code>
        <textarea>
          <template>
            <s-transfer
              filterable
              :filter-method="filterMethod"
              filter-placeholder="请输入城市拼音"
              v-model="value2"
              :data="data2">
            </s-transfer>
          </template>

          <script>
            export default {
              data() {
                const generateData2 = _ => {
                  const data = [];
                  const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
                  const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
                  cities.forEach((city, index) => {
                    data.push({
                      label: city,
                      key: index,
                      pinyin: pinyin[index]
                    });
                  });
                  return data;
                };
                return {
                  data2: generateData2(),
                  value2: [],
                  filterMethod(query, item) {
                    return item.pinyin.indexOf(query) > -1;
                  }
                };
              }
            };
          </script>
        </textarea>

        <div class="description">
          <p>设置 <code>filterable</code> 为 <code>true</code> 即可开启搜索模式。
            默认情况下，若数据项的 <code>label</code> 属性包含搜索关键字，则会在搜索结果中显示。你也可以使用 <code>filter-method</code> 定义自己的搜索逻辑。
            <code>filter-method</code> 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。若方法返回 <code>true</code>，则会在搜索结果中显示对应的数据项。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>可自定义</h3>
    <p>可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。</p>
    <div class="example">
      <div class="example-demo">
        <template>
          <p style="text-align: center; margin: 0 0 20px">使用 render-content 自定义数据项</p>
          <div style="text-align: center">
            <div>value3：{{value3}}</div>
            <s-transfer
              style="text-align: left; display: inline-block"
              v-model="value3"
              filterable
              :left-default-checked="[2, 3]"
              :right-default-checked="[1]"
              :render-content="renderFunc"
              :titles="['Source', 'Target']"
              :button-texts="['到左边', '到右边']"
              :format="{
                noChecked: '${total}',
                hasChecked: '${checked}/${total}'
              }"
              @change="handleChange"
              :data="data">
              <s-button class="transfer-footer" slot="left-footer" size="small">操作</s-button>
              <s-button class="transfer-footer" slot="right-footer" size="small">操作</s-button>
            </s-transfer>
          </div>

          <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
          <div style="text-align: center">
            <div>value4: {{value4}}</div>
            <s-transfer
              style="text-align: left; display: inline-block"
              v-model="value4"
              filterable
              :left-default-checked="[2, 3]"
              :right-default-checked="[1]"
              :titles="['Source', 'Target']"
              :button-texts="['到左边', '到右边']"
              :format="{
                noChecked: '${total}',
                hasChecked: '${checked}/${total}'
              }"
              @change="handleChange"
              :data="data">
              <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
              <s-button class="transfer-footer" slot="left-footer" size="small">操作</s-button>
              <s-button class="transfer-footer" slot="right-footer" size="small">操作</s-button>
            </s-transfer>
          </div>
        </template>
      </div>

      <example-code>
        <textarea>
          <template>
            <p style="text-align: center; margin: 0 0 20px">使用 render-content 自定义数据项</p>
            <div style="text-align: center">
              <s-transfer
                style="text-align: left; display: inline-block"
                v-model="value3"
                filterable
                :left-default-checked="[2, 3]"
                :right-default-checked="[1]"
                :render-content="renderFunc"
                :titles="['Source', 'Target']"
                :button-texts="['到左边', '到右边']"
                :format="{
                  noChecked: '${total}',
                  hasChecked: '${checked}/${total}'
                }"
                @change="handleChange"
                :data="data">
                <s-button class="transfer-footer" slot="left-footer" size="small">操作</s-button>
                <s-button class="transfer-footer" slot="right-footer" size="small">操作</s-button>
              </s-transfer>
            </div>

            <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
            <div style="text-align: center">
              <s-transfer
                style="text-align: left; display: inline-block"
                v-model="value4"
                filterable
                :left-default-checked="[2, 3]"
                :right-default-checked="[1]"
                :titles="['Source', 'Target']"
                :button-texts="['到左边', '到右边']"
                :format="{
                  noChecked: '${total}',
                  hasChecked: '${checked}/${total}'
                }"
                @change="handleChange"
                :data="data">
                <span slot-scope="{ option }">{ option.key } - { option.label }</span>
                <s-button class="transfer-footer" slot="left-footer" size="small">操作</s-button>
                <s-button class="transfer-footer" slot="right-footer" size="small">操作</s-button>
              </s-transfer>
            </div>
          </template>

          <script>
            export default {
              data() {
                const generateData = _ => {
                  const data = [];
                  for (let i = 1; i <= 15; i++) {
                    data.push({
                      key: i,
                      label: `备选项 ${ i }`,
                      disabled: i % 4 === 0
                    });
                  }
                  return data;
                };
                return {
                  data: generateData(),
                  value3: [1],
                  value4: [1],
                  renderFunc(h, option) {
                    return <span>{ option.key } - { option.label }</span>;
                  }
                };
              },

              methods: {
                handleChange(value, direction, movedKeys) {
                  console.log(value, direction, movedKeys);
                }
              }
            };
          </script>

          <style>
            .transfer-footer {
              margin-left: 20px;
              padding: 6px 5px;
            }
          </style>
        </textarea>

        <div class="description">
          <p>可以使用 <code>titles</code>、<code>button-texts</code>、<code>render-content</code> 和 <code>format</code> 属性分别对列表标题文案、按钮文案、数据项的渲染函数和列表顶部的勾选状态文案进行自定义。
            数据项的渲染还可以使用 <code>scoped-slot</code> 进行自定义。对于列表底部的内容区，提供了两个具名 slot：<code>left-footer</code> 和 <code>right-footer</code>。
            此外，如果希望某些数据项在初始化时就被勾选，可以使用 <code>left-default-checked</code> 和 <code>right-default-checked</code> 属性。
            最后，本例还展示了 <code>change</code> 事件的用法。
            注意：由于 jsfiddle 不支持 JSX 语法，所以使用 <code>render-content</code> 自定义数据项的例子在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>数据项属性别名</h3>
    <p>默认情况下，Transfer 仅能识别数据项中的 key、label 和 disabled 字段。如果你的数据的字段名不同，可以使用 props 属性为它们设置别名。</p>
    <div class="example">
      <div class="example-demo">
        <template>
          <div>value5：{{value5}}</div>
          <s-transfer
            v-model="value5"
            :props="{
              key: 'value',
              label: 'desc'
            }"
            :data="data3">
          </s-transfer>
        </template>
      </div>

      <example-code>
        <textarea>
          <template>
            <s-transfer
              v-model="value5"
              :props="{
                key: 'value',
                label: 'desc'
              }"
              :data="data3">
            </s-transfer>
          </template>

          <script>
            export default {
              data() {
                const generateData3 = _ => {
                  const data = [];
                  for (let i = 1; i <= 15; i++) {
                    data.push({
                      value: i,
                      desc: `备选项 ${ i }`,
                      disabled: i % 4 === 0
                    });
                  }
                  return data;
                };
                return {
                  data3: generateData3(),
                  value5: []
                };
              }
            };
          </script>
        </textarea>

        <div class="description">
          <p>本例中的数据源没有 <code>key</code> 和 <code>label</code> 字段，在功能上与它们相同的字段名为 <code>value</code> 和 <code>desc</code>。
            因此可以使用<code>props</code> 属性为 <code>key</code> 和 <code>label</code> 设置别名。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>Attributes</h3>
    <s-tb>
      <s-tb-i title="data" desc="Transfer 的数据源" type="array[{ key, label, disabled }]" value="-" init="[]"></s-tb-i>
      <s-tb-i title="filterable" desc="是否可搜索" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="filter-placeholder" desc="搜索框占位符" type="string" value="-" init="请输入搜索内容"></s-tb-i>
      <s-tb-i title="filter-method" desc="自定义搜索方法" type="function" value="-" init="-"></s-tb-i>
      <s-tb-i title="target-order" desc="右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前" type="string" value="original / push / unshift" init="original"></s-tb-i>
      <s-tb-i title="titles" desc="自定义列表标题" type="array" value="-" init="	['列表 1', '列表 2']"></s-tb-i>
      <s-tb-i title="button-texts" desc="自定义按钮文案" type="array" value="-" init="[]"></s-tb-i>
      <s-tb-i title="render-content" desc="自定义数据项渲染函数" type="function(h, option)" value="-" init="-"></s-tb-i>
      <s-tb-i title="format" desc="列表顶部勾选状态文案" type="object{noChecked, hasChecked}" value="-" init="{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }"></s-tb-i>
      <s-tb-i title="props" desc="数据源的字段别名" type="object{key, label, disabled}" value="-" init="-"></s-tb-i>
      <s-tb-i title="left-default-checked" desc="初始状态下左侧列表的已勾选项的 key 数组" type="array" value="-" init="[]"></s-tb-i>
      <s-tb-i title="right-default-checked" desc="初始状态下右侧列表的已勾选项的 key 数组" type="array" value="-" init="[]"></s-tb-i>
    </s-tb>

    <h3>Slot</h3>
    <table class="table">
      <thead>
        <tr><th>name</th><th>说明</th></tr>
      </thead>
      <tbody>
        <tr><td>left-footer</td><td>左侧列表底部的内容</td></tr>
        <tr><td>right-footer</td><td>右侧列表底部的内容</td></tr>
      </tbody>
    </table>

    <h3>Methods</h3>
    <table class="table">
      <thead>
        <tr><th>name</th><th>说明</th></tr>
      </thead>
      <tbody>
        <tr><td>—</td><td>自定义数据项的内容，参数为 { option }</td></tr>
      </tbody>
    </table>

    <h3>Events</h3>
    <table class="table">
      <thead>
        <tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr>
      </thead>
      <tbody>
        <tr><td>change</td><td>右侧列表元素变化时触发</td><td>当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组</td></tr>
        <tr><td>left-check-change</td><td>左侧列表元素被用户选中 / 取消选中时触发</td><td>当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组</td></tr>
        <tr><td>right-check-change</td><td>右侧列表元素被用户选中 / 取消选中时触发</td><td>当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组</td></tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      const generateData2 = _ => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      const generateData3 = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value1: [1, 4],
        data2: generateData2(),
        value2: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
        value3: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{option.key} - {option.label}</span>;
        },
        data3: generateData3(),
        value5: []
      };
    },
    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  };
</script>

<style>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>