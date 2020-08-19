<template>
  <article class="article">
    <h1>Tabs 标签页</h1>
    <p>分隔内容上有关联但属于不同类别的数据集合</p>

    <h3>基础用法</h3>
    <p>基础的、简洁的标签页</p>
    <div class="example">
      <div class="example-demo">
        <s-tab v-model="activeName" @tab-click="handleClick">
          <s-tab-pane label="用户管理" name="first">用户管理</s-tab-pane>
          <s-tab-pane label="配置管理" name="second">配置管理</s-tab-pane>
          <s-tab-pane label="角色管理" name="third">角色管理</s-tab-pane>
          <s-tab-pane label="定时任务补偿1" name="fourth" disabled>定时任务补偿</s-tab-pane>
        </s-tab>
      </div>
      <example-code>
        <textarea>
          <s-tab v-model="activeName" @tab-click="handleClick">
            <s-tab-pane label="用户管理" name="first">用户管理</s-tab-pane>
            <s-tab-pane label="配置管理" name="second">配置管理</s-tab-pane>
            <s-tab-pane label="角色管理" name="third">角色管理</s-tab-pane>
            <s-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</s-tab-pane>
          </s-tab>
          <script>
            export default {
              data() {
                return {
                  activeName: 0
                };
              },
              methods: {
                handleClick(tab, event) {
                  console.log(tab, event);
                }
              }
            };
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>选项卡样式</h3>
    <p>选项卡样式的标签页。</p>
    <div class="example">
      <div class="example-demo">
        <s-tab v-model="activeName2" type="card" @tab-click="handleClick">
          <s-tab-pane label="用户管理" name="first">用户管理</s-tab-pane>
          <s-tab-pane label="配置管理" name="second" disabled>配置管理</s-tab-pane>
          <s-tab-pane label="角色管理" name="third">角色管理</s-tab-pane>
          <s-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</s-tab-pane>
        </s-tab>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-tab v-model="activeName2" type="card" @tab-click="handleClick">
              <s-tab-pane label="用户管理" name="first">用户管理</s-tab-pane>
              <s-tab-pane label="配置管理" name="second">配置管理</s-tab-pane>
              <s-tab-pane label="角色管理" name="third">角色管理</s-tab-pane>
              <s-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</s-tab-pane>
            </s-tab>
          </template>
          <script>
            export default {
              data() {
                return {
                  activeName2: 'third'
                };
              },
              methods: {
                handleClick(tab, event) {
                  console.log(tab, event);
                }
              }
            };
          </script>
        </textarea>
        <div class="description">
          <p>只需要设置 <code>type</code> 属性为 <code>card</code> 就可以使选项卡改变为标签风格。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>卡片化</h3>
    <p>卡片化的标签页。</p>
    <div class="example">
      <div class="example-demo">
        <s-tab type="border-card">
          <s-tab-pane label="用户管理">用户管理</s-tab-pane>
          <s-tab-pane label="配置管理" disabled>配置管理</s-tab-pane>
          <s-tab-pane label="角色管理">角色管理</s-tab-pane>
          <s-tab-pane label="定时任务补偿">定时任务补偿</s-tab-pane>
        </s-tab>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-tab type="border-card">
              <s-tab-pane label="用户管理">用户管理</s-tab-pane>
              <s-tab-pane label="配置管理">配置管理</s-tab-pane>
              <s-tab-pane label="角色管理">角色管理</s-tab-pane>
              <s-tab-pane label="定时任务补偿">定时任务补偿</s-tab-pane>
            </s-tab>
          </template>
        </textarea>
        <div class="description">
          <p>将<code>type</code>设置为<code>border-card</code>。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>位置</h3>
    <p>可以通过 <code>tab-position</code> 设置标签的位置</p>
    <div class="example">
      <div class="example-demo">
        <s-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
          <s-radio-button label="top">top</s-radio-button>
          <s-radio-button label="right">right</s-radio-button>
          <s-radio-button label="bottom">bottom</s-radio-button>
          <s-radio-button label="left">left</s-radio-button>
        </s-radio-group>

        <s-tab :tab-position="tabPosition" style="height: 200px;">
          <s-tab-pane label="用户管理">用户管理</s-tab-pane>
          <s-tab-pane label="配置管理">配置管理</s-tab-pane>
          <s-tab-pane label="角色管理">角色管理</s-tab-pane>
          <s-tab-pane label="定时任务补偿">定时任务补偿</s-tab-pane>
        </s-tab>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
              <s-radio-button label="top">top</s-radio-button>
              <s-radio-button label="right">right</s-radio-button>
              <s-radio-button label="bottom">bottom</s-radio-button>
              <s-radio-button label="left">left</s-radio-button>
            </s-radio-group>

            <s-tab :tab-position="tabPosition" style="height: 200px;">
              <s-tab-pane label="用户管理">用户管理</s-tab-pane>
              <s-tab-pane label="配置管理">配置管理</s-tab-pane>
              <s-tab-pane label="角色管理">角色管理</s-tab-pane>
              <s-tab-pane label="定时任务补偿">定时任务补偿</s-tab-pane>
            </s-tab>
          </template>
          <script>
            export default {
              data() {
                return {
                  tabPosition: 'top'
                };
              }
            };
          </script>
        </textarea>
        <div class="description">
          <p>标签一共有四个方向的设置 <code>tabPosition="left|right|top|bottom"</code></p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>自定义标签页</h3>
    <p>可以通过具名 <code>slot</code> 来实现自定义标签页的内容</p>
    <div class="example">
      <div class="example-demo">
        <s-tab type="border-card">
          <s-tab-pane>
            <span slot="label"><i class="iconfont icon-calendar"></i> 我的行程</span>
            我的行程
          </s-tab-pane>
          <s-tab-pane label="消息中心">消息中心</s-tab-pane>
          <s-tab-pane label="角色管理">角色管理</s-tab-pane>
          <s-tab-pane label="定时任务补偿">定时任务补偿</s-tab-pane>
        </s-tab>
      </div>
      <example-code>
        <textarea>
          <s-tab type="border-card">
            <s-tab-pane>
              <span slot="label"><i class="iconfont icon-calendar"></i> 我的行程</span>
              我的行程
            </s-tab-pane>
            <s-tab-pane label="消息中心">消息中心</s-tab-pane>
            <s-tab-pane label="角色管理">角色管理</s-tab-pane>
            <s-tab-pane label="定时任务补偿">定时任务补偿</s-tab-pane>
          </s-tab>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>动态增减标签页</h3>
    <p>增减标签页按钮只能在选项卡样式的标签页下使用</p>
    <div class="example">
      <div class="example-demo">
        <s-tab v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
          <s-tab-pane
            :key="item.name"
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :name="item.name">
            {{item.content}}
          </s-tab-pane>
        </s-tab>
      </div>
      <example-code>
        <textarea>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>自定义增加标签页触发器</h3>
    <div class="example">
      <div class="example-demo">
        <div style="margin-bottom: 20px;">
          <s-button
            size="small"
            @click="addTab(editableTabsValue2)">
            add tab
          </s-button>
        </div>
        <s-tab v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
          <s-tab-pane
            v-for="(item, index) in editableTabs2"
            :key="item.name"
            :label="item.title"
            :name="item.name">
            {{item.content}}
          </s-tab-pane>
        </s-tab>
      </div>
      <example-code>
        <textarea>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>控制标签页的显示/隐藏（vif 属性， 兼容2.0.0以下版本）</h3>
    <div class="example">
      <div class="example-demo">
        <div style="margin-bottom: 20px; color:#1675cb">默认类型：</div>
        <s-tab v-model="vifPanels1">
          <s-tab-pane label="标签1">标签1</s-tab-pane>
          <s-tab-pane label="标签2" :vif="false">标签2</s-tab-pane>
          <s-tab-pane label="标签3">标签3</s-tab-pane>
          <s-tab-pane label="标签4" :vif="false">标签4</s-tab-pane>
          <s-tab-pane label="标签5">标签5</s-tab-pane>
          <s-tab-pane label="标签6">标签6</s-tab-pane>
        </s-tab>
        <div style="margin: 20px auto; color:#1675cb">卡片类型 (type="card")：</div>
        <s-tab v-model="vifPanels2" type="card">
          <s-tab-pane label="标签1">标签1</s-tab-pane>
          <s-tab-pane label="标签2">标签2</s-tab-pane>
          <s-tab-pane label="标签3" :vif="false">标签3</s-tab-pane>
          <s-tab-pane label="标签4">标签4</s-tab-pane>
          <s-tab-pane label="标签5" :vif="false">标签5</s-tab-pane>
          <s-tab-pane label="标签6">标签6</s-tab-pane>
        </s-tab>
      </div>
      <example-code>
        <textarea>
          <template>
            <div style="margin-bottom: 20px; color:#1675cb">默认类型：</div>
            <s-tab v-model="vifPanels1">
              <s-tab-pane label="标签1">标签1</s-tab-pane>
              <s-tab-pane label="标签2" :vif="false">标签2</s-tab-pane>
              <s-tab-pane label="标签3">标签3</s-tab-pane>
              <s-tab-pane label="标签4" :vif="false">标签4</s-tab-pane>
              <s-tab-pane label="标签5">标签5</s-tab-pane>
              <s-tab-pane label="标签6">标签6</s-tab-pane>
            </s-tab>
            <div style="margin: 20px auto; color:#1675cb">卡片类型 (type="card")：</div>
            <s-tab v-model="vifPanels2" type="card">
              <s-tab-pane label="标签1">标签1</s-tab-pane>
              <s-tab-pane label="标签2">标签2</s-tab-pane>
              <s-tab-pane label="标签3" :vif="false">标签3</s-tab-pane>
              <s-tab-pane label="标签4">标签4</s-tab-pane>
              <s-tab-pane label="标签5" :vif="false">标签5</s-tab-pane>
              <s-tab-pane label="标签6">标签6</s-tab-pane>
            </s-tab>
          </template>

          <script>
            export default {
              data() {
                return {
                  vifPanels1: 0,
                  vifPanels2: 0
                };
              }
            };
          </script>
        </textarea>
        <div class="description">
          <p><code>s-tab</code>组件中为<code>s-tab-panel</code>增加<code>vif</code>属性（是 vif ，不是 v-if），
            该属性接收一个<code>Boolean</code>类型的值，用来控制对应便签的显示与隐藏。一般用于tab标签的权限控制。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>



    <h3>Tab Attributes</h3>
    <s-tb>
      <s-tb-i title="v-model" desc="绑定值，初始选中选项卡的index值{Number}/name值{String}" type="Number/String" value="-" init="0"></s-tb-i>
      <s-tb-i title="activeName" desc="初始选中选项卡的name值{String}" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="type" desc="风格类型" type="string" value="card/border-card" init="-"></s-tb-i>
      <s-tb-i title="closable" desc="标签是否可关闭" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="addable" desc="标签是否可增加" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="editable" desc="标签是否同时可增加和关闭" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="tab-position" desc="选项卡所在位置" type="string" value="top/right/bottom/left	" init="top"></s-tb-i>
    </s-tb>

    <h3>Tab Events</h3>
    <table>
      <thead>
        <tr>
          <th>事件名称</th><th>说明</th><th>回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>tab-click</td><td>tab 被选中时触发</td><td>被选中的标签 tab 实例</td>
        </tr>
        <tr>
          <td>on-click(为兼容升级前版本)</td><td>tab 被选中时触发</td><td>( name{String} || index(Number), event )</td>
        </tr>
        <tr>
          <td>tab-remove</td><td>点击 tab 移除按钮后触发</td><td>被删除的标签的 name</td>
        </tr>
        <tr>
          <td>tab-add</td><td>点击 tabs 的新增按钮后触发</td><td>—</td>
        </tr>
        <tr>
          <td>edit</td><td>点击 tabs 的新增按钮或 tab 被关闭后触发</td><td>(targetName, action)</td>
        </tr>
      </tbody>
    </table>

    <h3>Tab-pane Attributes</h3>
    <s-tb>
      <s-tb-i title="label" desc="选项卡标题" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="disabled" desc="是否禁用" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="name" desc="与选项卡 activeName 对应的标识符，表示选项卡别名" type="string" value="-" init="	该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'"></s-tb-i>
      <s-tb-i title="closable" desc="标签是否可关闭" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="vif" desc="控制标签是否显示" type="boolean" value="-" init="true"></s-tb-i>
    </s-tb>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 0,
        activeName2: 'third',
        tabPosition: 'top',
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,
        vifPanels1: 0,
        vifPanels2: 0
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
    }
  };
</script>

