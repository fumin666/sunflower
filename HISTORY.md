### 2.7.4 (2020-07-02)
* 优化echarts性能，echarts有内存泄露问题

### 2.7.0 (2020-06-28)
* table组件添加模拟滚动功能，增加渲染性能

### 2.6.35 (2020-04-01)
* fix:优化table tooltip显示滚动功能

### 2.6.32 (2020-03-26)
* fix:step step的样式优化
### 2.6.28 (2020-03-26)
* fix:table tooltip显示滚动功能test

### 2.6.24 (2020-03-19)
* fix:table-page中filteredValue不选中的bug
*
### 2.6.20 (2020-02-28)
* 重新打包
### 2.6.19 (2020-02-27)
* **Collapse** 增加显示隐藏过渡效果

### 2.6.18 (2019-12-28)
* **TABLE** fix table 假分页全选状态切换分页影响下一页bug### 2.6.10 (2019-12-28)
*
### 2.6.10 (2019-12-25)
* **select** fix select 在dialog中定位超出的bug,添加popper-to-table属性

### 2.6.10 (2019-12-25)
* **select** fix select 在dialog中定位超出的bug,添加popper-append-to-body属性

### 2.6.3 (2019-12-16)
* **tablepage** 修改tablepage改变pagesize出现的fixed错误问题
* **tree** 修改tree前缀节点按钮显示样式。
* **其他** 修改组件样式。

### 2.6.2 (2019-12-12)
* **tablepage** 修改tablepage fixed错误的问题，增加tablepage功能

### 2.6.1 (2019-12-12)
* **echart** 全局修改echart颜色样式
*
### 2.6.0 (2019-12-10)
* **Form** fix 改变form上的rules时form校验规则出现异常的情况

### 2.5.3 (2019-12-05)
* 组件样式修改
### 2.5.2 (2019-11-29)
* **table** 把table优化为sicap样式，role-college、menu样式等修改

### 2.5.1 (2019-11-22)
* **Popper** 增加appedToTable属性，可以添加到appedToTable属性节点上

### 2.4.40 (2019-11-11)

* **Menu** 增加Menu暗色系样式
### 2.4.37 (2019-11-04)
* **date-picker** 根据Q4需求将date输入框前缀图标改为后缀
* **table** 修改table中fixed功能错误的bug（不要在tablepage组件中用fixed属性，否则会有问题,尽量不要使用tablepage组件，可以用tablegroup组件替代）
### 2.4.37 (2019-10-29)
* **优化** 树形表格优化、分页器bug优化、按钮主题颜色、tree连接线、tab、card、select、menu等优化
### 2.4.36 (2019-10-25)
* **Dialog** fix 嵌套dialog点击浏览器后退按钮嵌套dialog不消失的问题（if appendToBody is true, remove DOM node after destroy）
### 2.4.35 (2019-10-25)
* **Popover** 更新Popover(增加手动触发模式))

### 2.4.34 (2019-10-22)

* **icon** 新增图标
### 2.4.31 (2019-09-26)

* **select** select多选优化
### 2.4.29 (2019-08-14)

* **Tree-node:** 鼠标悬停的提示信息

### 2.4.28 (2019-08-2)
### BugFixes

* **RoleCollapse:** 将角色折叠改为多级折叠

### 2.4.27 (2019-07-29)
### BugFixes

* **Tab-bar:** 修正active-bar下划线不显示的bug

### 2.4.26 (2019-07-25)
### BugFixes

* **Cascader:**  修正在查询的情况下，出现系统滚动条的bug
* **TablePage:** 修正查询提示文字超出后，图标不能在右侧展示的问题

### 2.4.25 (2019-07-15)

### Features

* **IconFont:**  更新图标库
### 2.4.24 (2019-06-13)

### Features

* **Pagination:**  添加扇形图颜色
### 2.4.23 (2019-06-12)

### BugFixes

* **Pagination:**  修正分页的问题

### 2.4.22 (2019-06-12)

### Features

* **TablePage:**  增加模糊查询机制，保证大小写都可以查询到记录

### BugFixes

* **TablePage:**  修正表格查询只能查询字符串类型的bug

### 2.4.21 (2019-05-31)

### Features

* **Table:** 表格搜索时判断全选状态（#31801）
* **Table:** 修改了fanta主题样式，保证在可拖动列表上能够看到边框（#31867）
* **Message:** 考虑到系统级需求，将Message绑定到window上（#32127）

### 2.4.20 (2019-04)

### Features

* Deprecate

### 2.4.19 (2019-04-09)

### Features

* **echarts:** 删除南丁格尔玫瑰图 (#30236) 增加全局事件响应进行重绘 (#30237)
* **$eventBus:**  增加全局事件总线，用于处理echart在切换主题时进行重绘响应，用以替代项目中切换主题全局刷新的方案 (#30238)

### 2.4.17 (2019-04-01)

* **Table:** 修正表格tip在火狐浏览器下无法展示出来的问题 (#29995)

### 2.4.15 (2019-02-21)

### Features

* **TablePage:**  增加baseChart 将chart定制化调整为最大，给个el和option 就可以完成所有配置 已经对各种无法预知的需求。

### 2.4.14 (2019-01-23)

### BugFixes

* **CardDiy:** 修正由于引入点击操作导致的各种问题 (#28075)

### 2.4.13 (2019-01-21)

### Features

* **TablePage:** 考虑到配置的placeholder可能内容很短，能够放在input中。所以将机制改为：placeholder超出16的，增加右侧提示，未超出的不给提示，直接放在input的placeholder属性中 (#28032)

### 2.4.12 (2019-01-18)

### Features

* **TablePage:** 将查询框改为固定尺寸，并增加文字提示代替原有的placeholder (#28012)
* **Box:** 考虑到需要对Box增加点击交互，扩展了一个"clickAction"属性(#27978)

## 2.4.11 (2018-12-28)

### Features

* **TablePage:** 增加 height 属性 (#27645)

## 2.4.10 (2018-12-24)

### BugFixes

* **CardDiy:** 修改黑色皮肤下的样式 (#27311)

## 2.4.9 (2018-12-22)

### BugFixes

* **CardDiy:** 修改样式 (#27259)
* **SearchGroup:** 修复offsetHeight获取不到的bug (#27148)

## 2.4.8 (2018-12-17)

### BugFixes

* **CardDiy:** 按照产品需求修改功能及样式 (#26950)

## 2.4.7 (2018-12-13)

### BugFixes

* **TablePage:** filter重置时触发filter-change事件 (#26878)

## 2.4.6 (2018-12-11)

### BugFixes

* **TablePage:** searchProps对应数据为null的处理

### Features

* **TablePage:** 添加 selection-change

## 2.4.5 (2018-12-04)

### Features

* **CardDiy:** 添加是否显示更多按钮的prop

## 2.4.4 (2018-11-28)

### BugFixes

* **Alert:** 警告样式修改
* **SearchGroup:** 修复offsetHeight获取不到的bug (#25884)

### Features

* **TablePage:** 操作列是否显示 (#26158)
* **CardDiy:** 自定义首页的卡片容器 (#26081)

## 2.4.3 (2018-11-22)

### BugFixes

* **TablePage:** 显示已选时，改变全选状态 (#25779)
* **TablePage:** 修复筛选搜索后排序原数据不正确的问题 (#25765)
* **TablePage:** 修改默认分页布局 (#25629)

### Features

* **TablePage:** 添加自动勾选数据的方法 (#25834)

## 2.4.2 (2018-11-16)

### BugFixes

* **TablePage:** 操作结果为空时，展示暂无数据 (#25588)
* **TablePage:** 点击非filter区域时，检查filter数据 (#25596)

## 2.4.1 (2018-11-15)

### BugFixes

* **Table:**  修复sort颜色 (#25558)
* **TablePage:** 搜索去除两端空格 (#25529)

### Features

* **TablePage:** 头部添加checkbox显示已选 (#25507)
* **TablePage:** 搜索和筛选、排序联调 (#25481)

## 2.4.0 (2018-11-09)

### BugFixes

* **Collapse:** 禁止双击选择 (#25292)

### Features

* 新增 **Drawer** 组件 (#25352)
* **TablePage:** 添加头部操作按钮、操作列、搜索框 (#25231 #25234 #25250)

## 2.3.15 (2018-11-05)

### BugFixes

* **Dialog:** 修改样式 (#25186)
* **Collapse:** 修改样式 (#25186)

### Features

* 新增 **s-table-page**组件 (#25119)

## 2.3.14 (2018-09-06)

### BugFixes

* **Echarts:** 修复lineChart网格 (#23414)

## 2.3.13 (2018-08-30)
### BugFixes

* **Echart:** 颜色修改 (#23033 #23034)

## 2.3.12 (2018-08-29)

### BugFixes

* **EChart:** 修改颜色等 (#22780 #22833 #22853)
* **Card:** 修改card样式 (#22404)
* **Radio:** 修复事件触发2次bug (#22169)

## 2.3.11 (2018-08-09)

### BugFixes

* **Echart:** 修改颜色判断及环形图 (#21941 #21954)

## 2.3.10 (2018-06-29)

### BugFixes

* **barChartShowX:** 添加颜色 (#21134 #21136)

## 2.3.9 (2018-06-25)

### BugFixes

* **SearchGroup:** 生命周期修改 (#20773)

## 2.3.8 (2018-05-29)

### BugFixes

* **Echarts:** 修改南丁格尔玫瑰图实现方式 (#20050)
* **Select:** 根据业务需求，添加prop: anonLabel (#20044)

## 2.3.7 (2018-05-25)

### Features

* **Tree:** 增加自定义节点功能 (#19823)

## 2.3.6 (2018-05-22)

### BugFixes

* **Echarts:** 增加点击事件 (#19733)

## 2.3.5 (2018-05-22)

### Features

* **Table:** 增加 `click-dialog` (#19686)

### BugFixes

* **Cascader:** 下拉选项增加scrollbar (#19715)
* **RainbowBarChart:** 渐变色数组增添颜色 (#19699)
* `Alert`、`MessageBox` 样式修改 (#19639 #19697 #19686)


## 2.3.4 (2018-05-18)

### BugFixes

* **Echarts:** 南丁格尔玫瑰图皮肤下配色 (#19632)
* **Echart:** v-if下的Dom增加key属性 (#19615)
* **Upload:** 去除键盘删除事件 (#19592)
* `Step`、`Dropdown`、`Box`、`Button` 样式修改 (#19534 #19610 #19611 #19613)

## 2.3.3 (2018-05-16)

### Features

* 新增 **GridFlex** 组件 (#19491)

### BugFixes

* `Card`、`Message`、`Table`、`Switch`、`Tabs`、`Tree` 样式修改 (#19361 - #19477)

## 2.3.2 (2018-05-10)

### Features

* 新增 **Transfer** 组件 (#19270 - #19292)

### BugFixes

* **Select:** 创建条目时中文被显示为英文 (#19188)
* 绿茶皮肤: **card**、**tooltip** 样式修改 (#19279)
* **Upload:** 拖拽上传时阻止火狐浏览器默认弹框 (#19307)

## 2.3.1 (2018-05-03)

### Features

* **echart:** 增加点击事件 (#19108)

## 2.3.0 (2018-04-25)

### Features

* 增加绿茶和芬达皮肤 (#18804 - #18878)

## 2.2.10 (2018-04-19)

### BugFixes

* **Select:** change事件触发次数 (#18644)

## 2.2.9 (2018-04-19)

### BugFixes

* **Select:** 多选时自动撑大容器，修改样式 (#18589 #18617)

## 2.2.8 (2018-04-19)

> 废弃

## 2.2.7 (2018-04-18)

### BugFixes

* **SearchGroup:** 修改样式 (#18555)
