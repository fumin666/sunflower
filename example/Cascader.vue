<template>
  <article class="article">
    <h1>Cascader 级联选择器</h1>
    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <div class="halfblock">
          <span>默认 click 触发子菜单</span>
          <s-cascader
            :options="options"
            v-model="selectedOptions"
            @change="handleChange"></s-cascader>
        </div>
        <div class="halfblock">
          <span>hover 触发子菜单</span>
          <s-cascader
            expand-trigger="hover"
            :options="options"
            v-model="selectedOptions2"
            @change="handleChange"></s-cascader>
        </div>
      </div>
      <div class="example-code">
        <div class="description"><p>只需为 Cascader 的<code>options</code>属性指定选项数组即可渲染出一个级联选择器。通过<code>expand-trigger</code>可以定义展开子级菜单的触发方式。本例还展示了<code>change</code>事件，它的参数为 Cascader 的绑定值：一个由各级菜单的值所组成的数组。
        </p></div>
        <pre><code>
&lt;div class="block"&gt;
  &lt;span class="demonstration"&gt;默认 click 触发子菜单&lt;/span&gt;
  &lt;s-cascader
      :options="options"
      v-model="selectedOptions"
      @change="handleChange"&gt;
  &lt;/s-cascader&gt;
&lt;/div&gt;
&lt;div class="block"&gt;
  &lt;span class="demonstration"&gt;hover 触发子菜单&lt;/span&gt;
  &lt;s-cascader
      expand-trigger="hover"
      :options="options"
      v-model="selectedOptions2"
      @change="handleChange"&gt;
  &lt;/s-cascader&gt;
&lt;/div&gt;
&lt;script&gt;
  export default {
      data() {
          return {
              options: [{
                  value: 'zhinan',
                  label: '指南',
                  children: [{
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [{
                          value: 'yizhi',
                          label: '一致'
                      }, {
                          value: 'fankui',
                          label: '反馈'
                      }, {
                          value: 'xiaolv',
                          label: '效率'
                      }, {
                          value: 'kekong',
                          label: '可控'
                      }]
                  }, {
                      value: 'daohang',
                      label: '导航',
                      children: [{
                          value: 'cexiangdaohang',
                          label: '侧向导航'
                      }, {
                          value: 'dingbudaohang',
                          label: '顶部导航'
                      }]
                  }]
              }, {
                  value: 'zujian',
                  label: '组件',
                  children: [{
                      value: 'basic',
                      label: 'Basic',
                      children: [{
                          value: 'layout',
                          label: 'Layout 布局'
                      }, {
                          value: 'color',
                          label: 'Color 色彩'
                      }, {
                          value: 'typography',
                          label: 'Typography 字体'
                      }, {
                          value: 'icon',
                          label: 'Icon 图标'
                      }, {
                          value: 'button',
                          label: 'Button 按钮'
                      }]
                  }, {
                      value: 'form',
                      label: 'Form',
                      children: [{
                          value: 'radio',
                          label: 'Radio 单选框'
                      }, {
                          value: 'checkbox',
                          label: 'Checkbox 多选框'
                      }, {
                          value: 'input',
                          label: 'Input 输入框'
                      }, {
                          value: 'input-number',
                          label: 'InputNumber 计数器'
                      }, {
                          value: 'select',
                          label: 'Select 选择器'
                      }, {
                          value: 'cascader',
                          label: 'Cascader 级联选择器'
                      }, {
                          value: 'switch',
                          label: 'Switch 开关'
                      }, {
                          value: 'slider',
                          label: 'Slider 滑块'
                      }, {
                          value: 'time-picker',
                          label: 'TimePicker 时间选择器'
                      }, {
                          value: 'date-picker',
                          label: 'DatePicker 日期选择器'
                      }, {
                          value: 'datetime-picker',
                          label: 'DateTimePicker 日期时间选择器'
                      }, {
                          value: 'upload',
                          label: 'Upload 上传'
                      }, {
                          value: 'rate',
                          label: 'Rate 评分'
                      }, {
                          value: 'form',
                          label: 'Form 表单'
                      }]
                  }, {
                      value: 'data',
                      label: 'Data',
                      children: [{
                          value: 'table',
                          label: 'Table 表格'
                      }, {
                          value: 'tag',
                          label: 'Tag 标签'
                      }, {
                          value: 'progress',
                          label: 'Progress 进度条'
                      }, {
                          value: 'tree',
                          label: 'Tree 树形控件'
                      }, {
                          value: 'pagination',
                          label: 'Pagination 分页'
                      }, {
                          value: 'badge',
                          label: 'Badge 标记'
                      }]
                  }, {
                      value: 'notice',
                      label: 'Notice',
                      children: [{
                          value: 'alert',
                          label: 'Alert 警告'
                      }, {
                          value: 'loading',
                          label: 'Loading 加载'
                      }, {
                          value: 'message',
                          label: 'Message 消息提示'
                      }, {
                          value: 'message-box',
                          label: 'MessageBox 弹框'
                      }, {
                          value: 'notification',
                          label: 'Notification 通知'
                      }]
                  }, {
                      value: 'navigation',
                      label: 'Navigation',
                      children: [{
                          value: 'menu',
                          label: 'NavMenu 导航菜单'
                      }, {
                          value: 'tabs',
                          label: 'Tabs 标签页'
                      }, {
                          value: 'breadcrumb',
                          label: 'Breadcrumb 面包屑'
                      }, {
                          value: 'dropdown',
                          label: 'Dropdown 下拉菜单'
                      }, {
                          value: 'steps',
                          label: 'Steps 步骤条'
                      }]
                  }, {
                      value: 'others',
                      label: 'Others',
                      children: [{
                          value: 'dialog',
                          label: 'Dialog 对话框'
                      }, {
                          value: 'tooltip',
                          label: 'Tooltip 文字提示'
                      }, {
                          value: 'popover',
                          label: 'Popover 弹出框'
                      }, {
                          value: 'card',
                          label: 'Card 卡片'
                      }, {
                          value: 'carousel',
                          label: 'Carousel 走马灯'
                      }, {
                          value: 'collapse',
                          label: 'Collapse 折叠面板'
                      }]
                  }]
              }, {
                  value: 'ziyuan',
                  label: '资源',
                  children: [{
                      value: 'axure',
                      label: 'Axure Components'
                  }, {
                      value: 'sketch',
                      label: 'Sketch Templates'
                  }, {
                      value: 'jiaohu',
                      label: '组件交互文档'
                  }]
              }],
              selectedOptions: [],
              selectedOptions2: []
          };
      },
      methods: {
          handleChange(value) {
              console.log(value);
          }
      }
  };
&lt;/script&gt;
        </code></pre>
      </div>
    </div>
    <h3>禁用选项</h3>
    <p>通过在数据源中设置 <code>disabled</code> 字段来声明该选项是禁用的</p>
    <div class="example">
      <div class="example-demo">
        <s-cascader
          :options="optionsWithDisabled"
        ></s-cascader>
      </div>
      <div class="example-code">
        <div class="description"><p>本例中，<code>options</code>指定的数组中的第一个元素含有<code>disabled: true</code>键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的<code>disabled</code>字段是否为<code>true</code>，如果你的数据中表示禁用含义的字段名不为<code>disabled</code>，可以通过<code>props</code>属性来指定（详见下方 API 表格）。当然，<code>value</code>、<code>label</code>和<code>children</code>这三个字段名也可以通过同样的方式指定。
        </p></div>
        <pre><code>
&lt;s-cascader :options="optionsWithDisabled"&gt;&lt;/s-cascader&gt;
&lt;script&gt;
  export default {
      data() {
          return {
              optionsWithDisabled: [{
                  value: 'zhinan',
                  label: '指南',
                  disabled: true,
                  children: [{
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [{
                          value: 'yizhi',
                          label: '一致'
                      }, {
                          value: 'fankui',
                          label: '反馈'
                      }, {
                          value: 'xiaolv',
                          label: '效率'
                      }, {
                          value: 'kekong',
                          label: '可控'
                      }]
                  }, {
                      value: 'daohang',
                      label: '导航',
                      children: [{
                          value: 'cexiangdaohang',
                          label: '侧向导航'
                      }, {
                          value: 'dingbudaohang',
                          label: '顶部导航'
                      }]
                  }]
              }, {
                  value: 'zujian',
                  label: '组件',
                  children: [{
                      value: 'basic',
                      label: 'Basic',
                      children: [{
                          value: 'layout',
                          label: 'Layout 布局'
                      }, {
                          value: 'color',
                          label: 'Color 色彩'
                      }, {
                          value: 'typography',
                          label: 'Typography 字体'
                      }, {
                          value: 'icon',
                          label: 'Icon 图标'
                      }, {
                          value: 'button',
                          label: 'Button 按钮'
                      }]
                  }, {
                      value: 'form',
                      label: 'Form',
                      children: [{
                          value: 'radio',
                          label: 'Radio 单选框'
                      }, {
                          value: 'checkbox',
                          label: 'Checkbox 多选框'
                      }, {
                          value: 'input',
                          label: 'Input 输入框'
                      }, {
                          value: 'input-number',
                          label: 'InputNumber 计数器'
                      }, {
                          value: 'select',
                          label: 'Select 选择器'
                      }, {
                          value: 'cascader',
                          label: 'Cascader 级联选择器'
                      }, {
                          value: 'switch',
                          label: 'Switch 开关'
                      }, {
                          value: 'slider',
                          label: 'Slider 滑块'
                      }, {
                          value: 'time-picker',
                          label: 'TimePicker 时间选择器'
                      }, {
                          value: 'date-picker',
                          label: 'DatePicker 日期选择器'
                      }, {
                          value: 'datetime-picker',
                          label: 'DateTimePicker 日期时间选择器'
                      }, {
                          value: 'upload',
                          label: 'Upload 上传'
                      }, {
                          value: 'rate',
                          label: 'Rate 评分'
                      }, {
                          value: 'form',
                          label: 'Form 表单'
                      }]
                  }, {
                      value: 'data',
                      label: 'Data',
                      children: [{
                          value: 'table',
                          label: 'Table 表格'
                      }, {
                          value: 'tag',
                          label: 'Tag 标签'
                      }, {
                          value: 'progress',
                          label: 'Progress 进度条'
                      }, {
                          value: 'tree',
                          label: 'Tree 树形控件'
                      }, {
                          value: 'pagination',
                          label: 'Pagination 分页'
                      }, {
                          value: 'badge',
                          label: 'Badge 标记'
                      }]
                  }, {
                      value: 'notice',
                      label: 'Notice',
                      children: [{
                          value: 'alert',
                          label: 'Alert 警告'
                      }, {
                          value: 'loading',
                          label: 'Loading 加载'
                      }, {
                          value: 'message',
                          label: 'Message 消息提示'
                      }, {
                          value: 'message-box',
                          label: 'MessageBox 弹框'
                      }, {
                          value: 'notification',
                          label: 'Notification 通知'
                      }]
                  }, {
                      value: 'navigation',
                      label: 'Navigation',
                      children: [{
                          value: 'menu',
                          label: 'NavMenu 导航菜单'
                      }, {
                          value: 'tabs',
                          label: 'Tabs 标签页'
                      }, {
                          value: 'breadcrumb',
                          label: 'Breadcrumb 面包屑'
                      }, {
                          value: 'dropdown',
                          label: 'Dropdown 下拉菜单'
                      }, {
                          value: 'steps',
                          label: 'Steps 步骤条'
                      }]
                  }, {
                      value: 'others',
                      label: 'Others',
                      children: [{
                          value: 'dialog',
                          label: 'Dialog 对话框'
                      }, {
                          value: 'tooltip',
                          label: 'Tooltip 文字提示'
                      }, {
                          value: 'popover',
                          label: 'Popover 弹出框'
                      }, {
                          value: 'card',
                          label: 'Card 卡片'
                      }, {
                          value: 'carousel',
                          label: 'Carousel 走马灯'
                      }, {
                          value: 'collapse',
                          label: 'Collapse 折叠面板'
                      }]
                  }]
              }, {
                  value: 'ziyuan',
                  label: '资源',
                  children: [{
                      value: 'axure',
                      label: 'Axure Components'
                  }, {
                      value: 'sketch',
                      label: 'Sketch Templates'
                  }, {
                      value: 'jiaohu',
                      label: '组件交互文档'
                  }]
              }]
          };
      }
  };
&lt;/script&gt;
        </code></pre>
      </div>
    </div>
    <h3>仅显示最后一级</h3>
    <p>可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。</p>
    <div class="example">
      <div class="example-demo">
        <s-cascader
          :options="options"
          :show-all-levels="false"
        ></s-cascader>
      </div>
      <div class="example-code">
        <div class="description"><p>属性<code>show-all-levels</code>定义了是否显示完整的路径，将其赋值为<code>false</code>则仅显示最后一级</p></div>
        <pre><code>
&lt;s-cascader
    :options="options"
    :show-all-levels="false"
&gt;&lt;/s-cascader&gt;
&lt;script&gt;
  export default {
      data() {
          return {
              options: [{
                  value: 'zhinan',
                  label: '指南',
                  children: [{
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [{
                          value: 'yizhi',
                          label: '一致'
                      }, {
                          value: 'fankui',
                          label: '反馈'
                      }, {
                          value: 'xiaolv',
                          label: '效率'
                      }, {
                          value: 'kekong',
                          label: '可控'
                      }]
                  }, {
                      value: 'daohang',
                      label: '导航',
                      children: [{
                          value: 'cexiangdaohang',
                          label: '侧向导航'
                      }, {
                          value: 'dingbudaohang',
                          label: '顶部导航'
                      }]
                  }]
              }, {
                  value: 'zujian',
                  label: '组件',
                  children: [{
                      value: 'basic',
                      label: 'Basic',
                      children: [{
                          value: 'layout',
                          label: 'Layout 布局'
                      }, {
                          value: 'color',
                          label: 'Color 色彩'
                      }, {
                          value: 'typography',
                          label: 'Typography 字体'
                      }, {
                          value: 'icon',
                          label: 'Icon 图标'
                      }, {
                          value: 'button',
                          label: 'Button 按钮'
                      }]
                  }, {
                      value: 'form',
                      label: 'Form',
                      children: [{
                          value: 'radio',
                          label: 'Radio 单选框'
                      }, {
                          value: 'checkbox',
                          label: 'Checkbox 多选框'
                      }, {
                          value: 'input',
                          label: 'Input 输入框'
                      }, {
                          value: 'input-number',
                          label: 'InputNumber 计数器'
                      }, {
                          value: 'select',
                          label: 'Select 选择器'
                      }, {
                          value: 'cascader',
                          label: 'Cascader 级联选择器'
                      }, {
                          value: 'switch',
                          label: 'Switch 开关'
                      }, {
                          value: 'slider',
                          label: 'Slider 滑块'
                      }, {
                          value: 'time-picker',
                          label: 'TimePicker 时间选择器'
                      }, {
                          value: 'date-picker',
                          label: 'DatePicker 日期选择器'
                      }, {
                          value: 'datetime-picker',
                          label: 'DateTimePicker 日期时间选择器'
                      }, {
                          value: 'upload',
                          label: 'Upload 上传'
                      }, {
                          value: 'rate',
                          label: 'Rate 评分'
                      }, {
                          value: 'form',
                          label: 'Form 表单'
                      }]
                  }, {
                      value: 'data',
                      label: 'Data',
                      children: [{
                          value: 'table',
                          label: 'Table 表格'
                      }, {
                          value: 'tag',
                          label: 'Tag 标签'
                      }, {
                          value: 'progress',
                          label: 'Progress 进度条'
                      }, {
                          value: 'tree',
                          label: 'Tree 树形控件'
                      }, {
                          value: 'pagination',
                          label: 'Pagination 分页'
                      }, {
                          value: 'badge',
                          label: 'Badge 标记'
                      }]
                  }, {
                      value: 'notice',
                      label: 'Notice',
                      children: [{
                          value: 'alert',
                          label: 'Alert 警告'
                      }, {
                          value: 'loading',
                          label: 'Loading 加载'
                      }, {
                          value: 'message',
                          label: 'Message 消息提示'
                      }, {
                          value: 'message-box',
                          label: 'MessageBox 弹框'
                      }, {
                          value: 'notification',
                          label: 'Notification 通知'
                      }]
                  }, {
                      value: 'navigation',
                      label: 'Navigation',
                      children: [{
                          value: 'menu',
                          label: 'NavMenu 导航菜单'
                      }, {
                          value: 'tabs',
                          label: 'Tabs 标签页'
                      }, {
                          value: 'breadcrumb',
                          label: 'Breadcrumb 面包屑'
                      }, {
                          value: 'dropdown',
                          label: 'Dropdown 下拉菜单'
                      }, {
                          value: 'steps',
                          label: 'Steps 步骤条'
                      }]
                  }, {
                      value: 'others',
                      label: 'Others',
                      children: [{
                          value: 'dialog',
                          label: 'Dialog 对话框'
                      }, {
                          value: 'tooltip',
                          label: 'Tooltip 文字提示'
                      }, {
                          value: 'popover',
                          label: 'Popover 弹出框'
                      }, {
                          value: 'card',
                          label: 'Card 卡片'
                      }, {
                          value: 'carousel',
                          label: 'Carousel 走马灯'
                      }, {
                          value: 'collapse',
                          label: 'Collapse 折叠面板'
                      }]
                  }]
              }, {
                  value: 'ziyuan',
                  label: '资源',
                  children: [{
                      value: 'axure',
                      label: 'Axure Components'
                  }, {
                      value: 'sketch',
                      label: 'Sketch Templates'
                  }, {
                      value: 'jiaohu',
                      label: '组件交互文档'
                  }]
              }]
          };
      }
  };
&lt;/script&gt;
        </code></pre>
      </div>
    </div>
    <h3 id="mo-ren-zhi"> 默认值</h3>
    <div class="example">
      <div class="example-demo">
        <s-cascader
          :options="options"
          v-model="selectedOptions3"
        ></s-cascader>
      </div>
      <div class="example-code">
        <div class="description"><p>默认值通过数组的方式指定。</p></div>
        <pre><code>
&lt;s-cascader
   :options="options"
   v-model="selectedOptions3"
&gt;&lt;/s-cascader&gt;
&lt;script&gt;
  export default {
      data() {
          return {
              options: [{
                  value: 'zhinan',
                  label: '指南',
                  children: [{
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [{
                          value: 'yizhi',
                          label: '一致'
                      }, {
                          value: 'fankui',
                          label: '反馈'
                      }, {
                          value: 'xiaolv',
                          label: '效率'
                      }, {
                          value: 'kekong',
                          label: '可控'
                      }]
                  }, {
                      value: 'daohang',
                      label: '导航',
                      children: [{
                          value: 'cexiangdaohang',
                          label: '侧向导航'
                      }, {
                          value: 'dingbudaohang',
                          label: '顶部导航'
                      }]
                  }]
              }, {
                  value: 'zujian',
                  label: '组件',
                  children: [{
                      value: 'basic',
                      label: 'Basic',
                      children: [{
                          value: 'layout',
                          label: 'Layout 布局'
                      }, {
                          value: 'color',
                          label: 'Color 色彩'
                      }, {
                          value: 'typography',
                          label: 'Typography 字体'
                      }, {
                          value: 'icon',
                          label: 'Icon 图标'
                      }, {
                          value: 'button',
                          label: 'Button 按钮'
                      }]
                  }, {
                      value: 'form',
                      label: 'Form',
                      children: [{
                          value: 'radio',
                          label: 'Radio 单选框'
                      }, {
                          value: 'checkbox',
                          label: 'Checkbox 多选框'
                      }, {
                          value: 'input',
                          label: 'Input 输入框'
                      }, {
                          value: 'input-number',
                          label: 'InputNumber 计数器'
                      }, {
                          value: 'select',
                          label: 'Select 选择器'
                      }, {
                          value: 'cascader',
                          label: 'Cascader 级联选择器'
                      }, {
                          value: 'switch',
                          label: 'Switch 开关'
                      }, {
                          value: 'slider',
                          label: 'Slider 滑块'
                      }, {
                          value: 'time-picker',
                          label: 'TimePicker 时间选择器'
                      }, {
                          value: 'date-picker',
                          label: 'DatePicker 日期选择器'
                      }, {
                          value: 'datetime-picker',
                          label: 'DateTimePicker 日期时间选择器'
                      }, {
                          value: 'upload',
                          label: 'Upload 上传'
                      }, {
                          value: 'rate',
                          label: 'Rate 评分'
                      }, {
                          value: 'form',
                          label: 'Form 表单'
                      }]
                  }, {
                      value: 'data',
                      label: 'Data',
                      children: [{
                          value: 'table',
                          label: 'Table 表格'
                      }, {
                          value: 'tag',
                          label: 'Tag 标签'
                      }, {
                          value: 'progress',
                          label: 'Progress 进度条'
                      }, {
                          value: 'tree',
                          label: 'Tree 树形控件'
                      }, {
                          value: 'pagination',
                          label: 'Pagination 分页'
                      }, {
                          value: 'badge',
                          label: 'Badge 标记'
                      }]
                  }, {
                      value: 'notice',
                      label: 'Notice',
                      children: [{
                          value: 'alert',
                          label: 'Alert 警告'
                      }, {
                          value: 'loading',
                          label: 'Loading 加载'
                      }, {
                          value: 'message',
                          label: 'Message 消息提示'
                      }, {
                          value: 'message-box',
                          label: 'MessageBox 弹框'
                      }, {
                          value: 'notification',
                          label: 'Notification 通知'
                      }]
                  }, {
                      value: 'navigation',
                      label: 'Navigation',
                      children: [{
                          value: 'menu',
                          label: 'NavMenu 导航菜单'
                      }, {
                          value: 'tabs',
                          label: 'Tabs 标签页'
                      }, {
                          value: 'breadcrumb',
                          label: 'Breadcrumb 面包屑'
                      }, {
                          value: 'dropdown',
                          label: 'Dropdown 下拉菜单'
                      }, {
                          value: 'steps',
                          label: 'Steps 步骤条'
                      }]
                  }, {
                      value: 'others',
                      label: 'Others',
                      children: [{
                          value: 'dialog',
                          label: 'Dialog 对话框'
                      }, {
                          value: 'tooltip',
                          label: 'Tooltip 文字提示'
                      }, {
                          value: 'popover',
                          label: 'Popover 弹出框'
                      }, {
                          value: 'card',
                          label: 'Card 卡片'
                      }, {
                          value: 'carousel',
                          label: 'Carousel 走马灯'
                      }, {
                          value: 'collapse',
                          label: 'Collapse 折叠面板'
                      }]
                  }]
              }, {
                  value: 'ziyuan',
                  label: '资源',
                  children: [{
                      value: 'axure',
                      label: 'Axure Components'
                  }, {
                      value: 'sketch',
                      label: 'Sketch Templates'
                  }, {
                      value: 'jiaohu',
                      label: '组件交互文档'
                  }]
              }],
              selectedOptions3: ['zujian', 'data', 'tag']
          };
      }
  };
&lt;/script&gt;
        </code></pre>
      </div>
    </div>
    <h3>选择即改变</h3>
    <div class="example">
      <div class="example-demo">
        <s-cascader
          :options="options"
          change-on-select
        ></s-cascader>
      </div>
      <div class="example-code">
        <div class="description"><p>若需要允许用户选择任意一级选项，则可将<code>change-on-select</code>赋值为<code>true</code></p></div>
        <pre><code>
&lt;s-cascader
   :options="options"
   change-on-select
&gt;&lt;/s-cascader&gt;
&lt;script&gt;
  export default {
      data() {
          return {
              options: [{
                  value: 'zhinan',
                  label: '指南',
                  children: [{
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [{
                          value: 'yizhi',
                          label: '一致'
                      }, {
                          value: 'fankui',
                          label: '反馈'
                      }, {
                          value: 'xiaolv',
                          label: '效率'
                      }, {
                          value: 'kekong',
                          label: '可控'
                      }]
                  }, {
                      value: 'daohang',
                      label: '导航',
                      children: [{
                          value: 'cexiangdaohang',
                          label: '侧向导航'
                      }, {
                          value: 'dingbudaohang',
                          label: '顶部导航'
                      }]
                  }]
              }, {
                  value: 'zujian',
                  label: '组件',
                  children: [{
                      value: 'basic',
                      label: 'Basic',
                      children: [{
                          value: 'layout',
                          label: 'Layout 布局'
                      }, {
                          value: 'color',
                          label: 'Color 色彩'
                      }, {
                          value: 'typography',
                          label: 'Typography 字体'
                      }, {
                          value: 'icon',
                          label: 'Icon 图标'
                      }, {
                          value: 'button',
                          label: 'Button 按钮'
                      }]
                  }, {
                      value: 'form',
                      label: 'Form',
                      children: [{
                          value: 'radio',
                          label: 'Radio 单选框'
                      }, {
                          value: 'checkbox',
                          label: 'Checkbox 多选框'
                      }, {
                          value: 'input',
                          label: 'Input 输入框'
                      }, {
                          value: 'input-number',
                          label: 'InputNumber 计数器'
                      }, {
                          value: 'select',
                          label: 'Select 选择器'
                      }, {
                          value: 'cascader',
                          label: 'Cascader 级联选择器'
                      }, {
                          value: 'switch',
                          label: 'Switch 开关'
                      }, {
                          value: 'slider',
                          label: 'Slider 滑块'
                      }, {
                          value: 'time-picker',
                          label: 'TimePicker 时间选择器'
                      }, {
                          value: 'date-picker',
                          label: 'DatePicker 日期选择器'
                      }, {
                          value: 'datetime-picker',
                          label: 'DateTimePicker 日期时间选择器'
                      }, {
                          value: 'upload',
                          label: 'Upload 上传'
                      }, {
                          value: 'rate',
                          label: 'Rate 评分'
                      }, {
                          value: 'form',
                          label: 'Form 表单'
                      }]
                  }, {
                      value: 'data',
                      label: 'Data',
                      children: [{
                          value: 'table',
                          label: 'Table 表格'
                      }, {
                          value: 'tag',
                          label: 'Tag 标签'
                      }, {
                          value: 'progress',
                          label: 'Progress 进度条'
                      }, {
                          value: 'tree',
                          label: 'Tree 树形控件'
                      }, {
                          value: 'pagination',
                          label: 'Pagination 分页'
                      }, {
                          value: 'badge',
                          label: 'Badge 标记'
                      }]
                  }, {
                      value: 'notice',
                      label: 'Notice',
                      children: [{
                          value: 'alert',
                          label: 'Alert 警告'
                      }, {
                          value: 'loading',
                          label: 'Loading 加载'
                      }, {
                          value: 'message',
                          label: 'Message 消息提示'
                      }, {
                          value: 'message-box',
                          label: 'MessageBox 弹框'
                      }, {
                          value: 'notification',
                          label: 'Notification 通知'
                      }]
                  }, {
                      value: 'navigation',
                      label: 'Navigation',
                      children: [{
                          value: 'menu',
                          label: 'NavMenu 导航菜单'
                      }, {
                          value: 'tabs',
                          label: 'Tabs 标签页'
                      }, {
                          value: 'breadcrumb',
                          label: 'Breadcrumb 面包屑'
                      }, {
                          value: 'dropdown',
                          label: 'Dropdown 下拉菜单'
                      }, {
                          value: 'steps',
                          label: 'Steps 步骤条'
                      }]
                  }, {
                      value: 'others',
                      label: 'Others',
                      children: [{
                          value: 'dialog',
                          label: 'Dialog 对话框'
                      }, {
                          value: 'tooltip',
                          label: 'Tooltip 文字提示'
                      }, {
                          value: 'popover',
                          label: 'Popover 弹出框'
                      }, {
                          value: 'card',
                          label: 'Card 卡片'
                      }, {
                          value: 'carousel',
                          label: 'Carousel 走马灯'
                      }, {
                          value: 'collapse',
                          label: 'Collapse 折叠面板'
                      }]
                  }]
              }, {
                  value: 'ziyuan',
                  label: '资源',
                  children: [{
                      value: 'axure',
                      label: 'Axure Components'
                  }, {
                      value: 'sketch',
                      label: 'Sketch Templates'
                  }, {
                      value: 'jiaohu',
                      label: '组件交互文档'
                  }]
              }]
          };
      }
  };
&lt;/script&gt;
        </code></pre>
      </div>
    </div>
    <h3>动态加载次级选项</h3>
    <p>当选中某一级时，动态加载该级下的选项。</p>
    <div class="example">
      <div class="example-demo">
        <s-cascader
          :options="options2"
          @active-item-change="handleItemChange"
          :props="props"
        ></s-cascader>
      </div>
      <div class="example-code">
        <div class="description"><p>本例的选项数据源在初始化时不包含城市数据。利用<code>active-item-change</code>事件，可以在用户点击某个省份时拉取该省份下的城市数据。此外，本例还展示了<code>props</code>属性的用法。
        </p></div>
        <pre><code>
&lt;s-cascader
   :options="options2"
   @active-item-change="handleItemChange"
   :props="props"
&gt;&lt;/s-cascader&gt;
&lt;script&gt;
  export default {
      data() {
          return {
              options2: [{
                  label: '江苏',
                  cities: []
              }, {
                  label: '浙江',
                  cities: []
              }],
              props: {
                  value: 'label',
                  children: 'cities'
              }
          };
      },

      methods: {
          handleItemChange(val) {
              console.log('active item:', val);
              setTimeout(_ => {
                  if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
                      this.options2[0].cities = [{
                          label: '南京'
                      }];
                  } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
                      this.options2[1].cities = [{
                          label: '杭州'
                      }];
                  }
              }, 300);
          }
      }
  };
&lt;/script&gt;
        </code></pre>
      </div>
    </div>
    <h3>可搜索</h3>
    <p>可以快捷地搜索选项并选择。</p>
    <div class="example">
      <div class="example-demo">
        <div class="block">
          <span class="demonstration">只可选择最后一级菜单的选项</span>
          <s-cascader
            placeholder="试试搜索：指南"
            :options="options"
            filterable
          ></s-cascader>
        </div>
        <div class="block">
          <span class="demonstration">可选择任意一级菜单的选项</span>
          <s-cascader
            placeholder="试试搜索：指南"
            :options="options"
            filterable
            change-on-select
          ></s-cascader>
        </div>
      </div>
      <div class="example-code">
        <div class="description"><p>将<code>filterable</code>赋值为<code>true</code>即可打开搜索功能。</p></div>
        <pre><code>
&lt;div class="block"&gt;
  &lt;span class="demonstration"&gt;只可选择最后一级菜单的选项&lt;/span&gt;
          &lt;s-cascader
          placeholder="试试搜索：指南"
          :options="options"
          filterable
  >&lt;/s-cascader&gt;
&lt;/div&gt;
&lt;div class="block"&gt;
  &lt;span class="demonstration"&gt;可选择任意一级菜单的选项&lt;/span&gt;
  &lt;s-cascader
          placeholder="试试搜索：指南"
          :options="options"
          filterable
          change-on-select
  >&lt;/s-cascader&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
      data() {
          return {
              options: [{
                  value: 'zhinan',
                  label: '指南',
                  children: [{
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [{
                          value: 'yizhi',
                          label: '一致'
                      }, {
                          value: 'fankui',
                          label: '反馈'
                      }, {
                          value: 'xiaolv',
                          label: '效率'
                      }, {
                          value: 'kekong',
                          label: '可控'
                      }]
                  }, {
                      value: 'daohang',
                      label: '导航',
                      children: [{
                          value: 'cexiangdaohang',
                          label: '侧向导航'
                      }, {
                          value: 'dingbudaohang',
                          label: '顶部导航'
                      }]
                  }]
              }, {
                  value: 'zujian',
                  label: '组件',
                  children: [{
                      value: 'basic',
                      label: 'Basic',
                      children: [{
                          value: 'layout',
                          label: 'Layout 布局'
                      }, {
                          value: 'color',
                          label: 'Color 色彩'
                      }, {
                          value: 'typography',
                          label: 'Typography 字体'
                      }, {
                          value: 'icon',
                          label: 'Icon 图标'
                      }, {
                          value: 'button',
                          label: 'Button 按钮'
                      }]
                  }, {
                      value: 'form',
                      label: 'Form',
                      children: [{
                          value: 'radio',
                          label: 'Radio 单选框'
                      }, {
                          value: 'checkbox',
                          label: 'Checkbox 多选框'
                      }, {
                          value: 'input',
                          label: 'Input 输入框'
                      }, {
                          value: 'input-number',
                          label: 'InputNumber 计数器'
                      }, {
                          value: 'select',
                          label: 'Select 选择器'
                      }, {
                          value: 'cascader',
                          label: 'Cascader 级联选择器'
                      }, {
                          value: 'switch',
                          label: 'Switch 开关'
                      }, {
                          value: 'slider',
                          label: 'Slider 滑块'
                      }, {
                          value: 'time-picker',
                          label: 'TimePicker 时间选择器'
                      }, {
                          value: 'date-picker',
                          label: 'DatePicker 日期选择器'
                      }, {
                          value: 'datetime-picker',
                          label: 'DateTimePicker 日期时间选择器'
                      }, {
                          value: 'upload',
                          label: 'Upload 上传'
                      }, {
                          value: 'rate',
                          label: 'Rate 评分'
                      }, {
                          value: 'form',
                          label: 'Form 表单'
                      }]
                  }, {
                      value: 'data',
                      label: 'Data',
                      children: [{
                          value: 'table',
                          label: 'Table 表格'
                      }, {
                          value: 'tag',
                          label: 'Tag 标签'
                      }, {
                          value: 'progress',
                          label: 'Progress 进度条'
                      }, {
                          value: 'tree',
                          label: 'Tree 树形控件'
                      }, {
                          value: 'pagination',
                          label: 'Pagination 分页'
                      }, {
                          value: 'badge',
                          label: 'Badge 标记'
                      }]
                  }, {
                      value: 'notice',
                      label: 'Notice',
                      children: [{
                          value: 'alert',
                          label: 'Alert 警告'
                      }, {
                          value: 'loading',
                          label: 'Loading 加载'
                      }, {
                          value: 'message',
                          label: 'Message 消息提示'
                      }, {
                          value: 'message-box',
                          label: 'MessageBox 弹框'
                      }, {
                          value: 'notification',
                          label: 'Notification 通知'
                      }]
                  }, {
                      value: 'navigation',
                      label: 'Navigation',
                      children: [{
                          value: 'menu',
                          label: 'NavMenu 导航菜单'
                      }, {
                          value: 'tabs',
                          label: 'Tabs 标签页'
                      }, {
                          value: 'breadcrumb',
                          label: 'Breadcrumb 面包屑'
                      }, {
                          value: 'dropdown',
                          label: 'Dropdown 下拉菜单'
                      }, {
                          value: 'steps',
                          label: 'Steps 步骤条'
                      }]
                  }, {
                      value: 'others',
                      label: 'Others',
                      children: [{
                          value: 'dialog',
                          label: 'Dialog 对话框'
                      }, {
                          value: 'tooltip',
                          label: 'Tooltip 文字提示'
                      }, {
                          value: 'popover',
                          label: 'Popover 弹出框'
                      }, {
                          value: 'card',
                          label: 'Card 卡片'
                      }, {
                          value: 'carousel',
                          label: 'Carousel 走马灯'
                      }, {
                          value: 'collapse',
                          label: 'Collapse 折叠面板'
                      }]
                  }]
              }, {
                  value: 'ziyuan',
                  label: '资源',
                  children: [{
                      value: 'axure',
                      label: 'Axure Components'
                  }, {
                      value: 'sketch',
                      label: 'Sketch Templates'
                  }, {
                      value: 'jiaohu',
                      label: '组件交互文档'
                  }]
              }]
          };
      }
  };
&lt;/script&gt;
        </code></pre>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        optionsWithDisabled: [{
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: [],
        selectedOptions2: [],
        selectedOptions3: ['zujian', 'data', 'tag'],
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        }
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }
    }
  }
</script>