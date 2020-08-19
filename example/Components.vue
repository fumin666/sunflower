<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-11 13:28:53
 * @LastEditTime: 2019-10-10 17:29:23
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="container">
    <nav>
      <ul class="menu-left">
        <span class="nav-group-title">基础</span>
        <router-link to="/components/grid" tag="li">Grid <small>栅格系统</small></router-link>
        <router-link to="/components/grid-flex" tag="li">GridFlex<small>基于flex的网格</small></router-link>
        <router-link to="/components/icon" tag="li">Icon <small>图标系统</small></router-link>
        <router-link to="/components/button" tag="li">Button <small>按钮</small></router-link>
        <span class="nav-group-title">表单</span>
        <router-link to="/components/input" tag="li">Input <small>输入框</small></router-link>
        <router-link to="/components/input-number" tag="li">InputNumber <small>计数器</small></router-link>
        <router-link to="/components/radio" tag="li">Radio <small>单选框</small></router-link>
        <router-link to="/components/checkbox" tag="li">Checkbox <small>多选框</small></router-link>
        <router-link to="/components/switch" tag="li">Switch <small>开关</small></router-link>
        <router-link to="/components/date-picker" tag="li">DatePicker <small>日期选择器</small></router-link>
        <router-link to="/components/date-time-picker" tag="li">DatetimePicker <small>日期时间选择器</small></router-link>
        <router-link to="/components/time-picker" tag="li">TimePicker <small>时间选择器</small></router-link>
        <router-link to="/components/time-select" tag="li">TimeSelect <small>时间选择器(下拉框形式)</small></router-link>
        <router-link to="/components/slider" tag="li">Slider <small>滑块</small></router-link>
        <router-link to="/components/form" tag="li">Form <small>表单</small></router-link>
        <router-link to="/components/upload" tag="li">Upload <small>上传</small></router-link>
        <span class="nav-group-title">布局展示</span>
        <router-link to="/components/alert" tag="li">Alert <small>警告</small></router-link>
        <router-link to="/components/menu" tag="li">Menu <small>导航菜单</small></router-link>
        <router-link to="/components/tag" tag="li">Tag <small>标签</small></router-link>
        <router-link to="/components/breadcrumb" tag="li">Breadcrumb <small>面包屑</small></router-link>
        <router-link to="/components/card" tag="li">Card <small>卡片</small></router-link>
        <router-link to="/components/card-diy" tag="li">CardDiy <small>自定义块的容器</small></router-link>
        <router-link to="/components/loading" tag="li">Loading <small>加载</small></router-link>
        <router-link to="/components/collapse" tag="li">Collapse <small>折叠面板</small></router-link>
        <router-link to="/components/rate" tag="li">Rate <small>评分</small></router-link>
        <router-link to="/components/progress" tag="li">Progress <small>进度条</small></router-link>
        <router-link to="/components/dropdown" tag="li">Dropdown <small>下拉菜单</small></router-link>
        <router-link to="/components/cascader" tag="li">Cascade <small>级联选择器</small></router-link>
        <router-link to="/components/select" tag="li">Select <small>下拉选项框</small></router-link>
        <router-link to="/components/steps" tag="li">Steps <small>步骤条</small></router-link>
        <router-link to="/components/tree" tag="li">Tree <small>树形控件</small></router-link>
        <router-link to="/components/carousel" tag="li">Carousel <small>走马灯</small></router-link>
        <router-link to="/components/tabs" tag="li">Tabs <small>标签页</small></router-link>
        <router-link to="/components/transfer" tag="li">Transfer <small>穿梭框</small></router-link>
        <span class="nav-group-title">消息提示</span>
        <router-link to="/components/badge" tag="li">Badge <small>标记</small></router-link>
        <router-link to="/components/dialog" tag="li">Dialog <small>对话框</small></router-link>
        <router-link to="/components/message" tag="li">Message <small>消息提示</small></router-link>
        <router-link to="/components/message-box" tag="li">MessageBox <small>消息弹框</small></router-link>
        <router-link to="/components/notification" tag="li">Notification <small>通知</small></router-link>
        <router-link to="/components/popover" tag="li">Popover <small>弹出框</small></router-link>
        <router-link to="/components/tooltip" tag="li">Tooltip <small>文字悬浮提示框</small></router-link>
        <span class="nav-group-title">表格</span>
        <router-link to="/components/table" tag="li">Table <small>表格</small></router-link>
        <router-link to="/components/pagination" tag="li">Pagination <small>分页</small></router-link>
        <router-link to="/components/table-page" tag="li">TablePage <small>带分页表格</small></router-link>
        <span class="nav-group-title">自定义组件</span>
        <router-link to="/components/scrollbar" tag="li">Scrollbar<small>滚动条</small></router-link>
        <router-link to="/components/loading-bar" tag="li">Loading-bar <small>加载进度条</small></router-link>
        <router-link to="/components/search-group" tag="li">SearchGroup <small>条件搜索组</small></router-link>
        <router-link to="/components/spin" tag="li">Spin <small>加载等待</small></router-link>
        <router-link to="/components/box" tag="li">Box <small>盒子小块</small></router-link>
        <router-link to="/components/audio" tag="li">Audio <small>音频提示</small></router-link>
        <router-link to="/components/timeline" tag="li">TimeLine <small>时间轴</small></router-link>
        <router-link to="/components/roleCollapse" tag="li">roleCollapse <small>角色折叠</small></router-link>
        <router-link to="/components/drawer" tag="li">drawer <small>抽屉</small></router-link>
      </ul>
    </nav>
    <main class="main">
        <router-view></router-view>
    </main>
  </div>
</template>