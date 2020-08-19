<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-11 13:28:53
 * @LastEditTime: 2019-04-11 13:28:53
 * @LastEditors: your name
 -->

<template>
  <article class="article">
    <h1>Menu</h1>

    <h3>基础用法</h3>
     <p>适用广泛的基础用法</p>
    <div class="example">
      <div class="example-demo">
        <s-menu mode="horizontal" :theme="theme1" active-key="1" width="240px">
          <s-menu-item name="1">
            <i class="iconfont icon-file"></i>
            内容管理
          </s-menu-item>
          <s-menu-item name="2">
            <i class="iconfont icon-user"></i>
            用户管理
          </s-menu-item>
          <s-submenu name="3">
            <template slot="title">
              <i class="iconfont icon-publish"></i>
              统计分析
            </template>
            <s-menu-group title="使用">
              <s-menu-item name="3-1">新增和启动</s-menu-item>
              <s-menu-item name="3-2">活跃分析</s-menu-item>
              <s-menu-item name="3-3">时段分析</s-menu-item>
            </s-menu-group>
            <s-menu-group title="留存">
              <s-menu-item name="3-4">用户留存</s-menu-item>
              <s-menu-item name="3-5">流失用户</s-menu-item>
            </s-menu-group>
          </s-submenu>
          <s-menu-item name="4">
            <i class="iconfont icon-set"></i>
            综合设置
          </s-menu-item>
        </s-menu>
      </div>
      <div class="example-code" >
        <pre><code>
  &lt;s-menu mode="horizontal" :theme="theme1" active-key="1" width="240px"&gt;
          &lt;s-menu-item name="1"&gt;
            &lt;i class="iconfont icon-file"&gt;&lt;/&gt;
            内容管理
          &lt;/s-menu-item&gt;
          &lt;s-menu-item name="2"&gt;
            &lt;i class="iconfont icon-user"&gt;&lt;/&gt;
            用户管理
          &lt;/s-menu-item&gt;
          &lt;s-submenu name="3"&gt;
            &lt;template slot="title"&gt;
              &lt;i class="iconfont icon-publish"&gt;&lt;/i&gt;
              统计分析
            &lt;/template&gt;
            &lt;s-menu-group title="使用"&gt;
              &lt;s-menu-item name="3-1"&gt;新增和启动&lt;/s-menu-item&gt;
              &lt;s-menu-item name="3-2"&gt;活跃分析&lt;/s-menu-item&gt;
              &lt;s-menu-item name="3-3"&gt;时段分析&lt;/s-menu-item&gt;
            &lt;/s-menu-group&gt;
            &lt;s-menu-group title="留存"&gt;
              &lt;s-menu-item name="3-4"&gt;用户留存&lt;/s-menu-item&gt;
              &lt;s-menu-item name="3-5"&gt;流失用户&lt;/s-menu-item&gt;
            &lt;/s-menu-group&gt;
          &lt;/s-submenu&gt;
          &lt;s-menu-item name="4"&gt;
            &lt;i class="iconfont icon-set"&gt;&lt;/i&gt;
            综合设置
          &lt;/s-menu-item&gt;
        &lt;/s-menu&gt;
        </code></pre>
      </div>
    </div>
      <h3>垂直方向</h3>
      <div class="example">
          <s-row>
              <s-menu accordion :open-names=[openNames]>
                  <s-submenu v-for="(item, index) in menuData" :key="index" :name="item.id">
                      <template slot="title">{{item.name}}</template>
                      <s-menu-item v-for="(item1, index1) in item.childList" :key="index1">{{item1.name}}</s-menu-item>
                  </s-submenu>
              </s-menu>
          </s-row>
          <div class="example-demo">
              <s-menu :theme="theme1" active-key="1" width="160px">
                      <s-menu-item name="1">
                          <i class="iconfont icon-file"></i>
                          hahah
                        </s-menu-item>
                      <s-menu-item name="2">
                          <i class="iconfont icon-file"></i>
                          评论管理
                        </s-menu-item>
                  <s-menu-group title="统计分析">
                      <s-menu-item name="3">
                          <i class="iconfont icon-file"></i>
                          用户留存
                        </s-menu-item>
                      <s-menu-item name="4">
                          <i class="iconfont icon-file"></i>
                          流失用户
                        </s-menu-item>
                  </s-menu-group>
              </s-menu>
              <br>
          </div>
          <div class="example-code" >
        <pre><code>
    &lt;s-menu :theme="theme1" active-key="1" width="160px"&gt;
            &lt;s-menu-group title="内容管理"&gt;
              &lt;s-menu-item name="1"&gt;
                &lt; i class="iconfont icon-file"&gt;&lt;/i &gt;
                文章管理
              &lt;/s-menu-item&gt;
              &lt;s-menu-item name="2"&gt;
                &lt;i class="iconfont icon-file"&gt;&lt;/i&gt;
                评论管理
              &lt;/s-menu-item&gt;
            &lt;/s-menu-group&gt;
            &lt;s-menu-group title="统计分析"&gt;
              &lt;s-menu-item name="3"&gt;
                &lt;i class="iconfont icon-file"&gt;&lt;/i&gt;
                用户留存
              &lt;/s-menu-item&gt;
              &lt;s-menu-item name="4"&gt;
                &lt;i class="iconfont icon-file"&gt;&lt;/i&gt;
                流失用户
              &lt;/s-menu-item&gt;
            &lt;/s-menu-group&gt;
          &lt;/s-menu&gt;

        </code></pre>
          </div>
      </div>
      <h3>垂直方向折叠</h3>
      <p>垂直菜单，可内嵌子菜单。</p>
      <div class="example">
          <div class="example-demo">
              <s-row>
                  <s-col span="8">
                      <s-menu :theme="theme1" accordion>
                          <s-submenu name="1">
                              <template slot="title">
                                  <i class="iconfont icon-email"></i>
                                  基础通用报表
                                </template>
                              <s-menu-item name="1-1">文章管理</s-menu-item>
                              <s-menu-item name="1-2">评论管理</s-menu-item>
                              <s-menu-item name="1-3">举报管理</s-menu-item>
                          </s-submenu>
                          <s-submenu name="2">
                              <template slot="title">
                                  <i class="iconfont icon-file"></i>
                                  用户管理
                                </template>
                              <s-menu-item name="2-1">新增用户</s-menu-item>
                              <s-menu-item name="2-2">活跃用户</s-menu-item>
                          </s-submenu>
                          <s-submenu name="3">
                              <template slot="title">
                                  <i class="iconfont icon-file"></i>
                                  统计分析
                                </template>
                              <s-menu-group title="使用">
                                  <s-menu-item name="3-1">新增和启动</s-menu-item>
                                  <s-menu-item name="3-2">活跃分析</s-menu-item>
                                  <s-menu-item name="3-3">时段分析</s-menu-item>
                              </s-menu-group>
                              <s-menu-group title="留存">
                                  <s-menu-item name="3-4">用户留存</s-menu-item>
                                  <s-menu-item name="3-5">流失用户</s-menu-item>
                              </s-menu-group>
                          </s-submenu>
                      </s-menu>
                  </s-col>
                  <s-col span="8">
                      <s-menu :theme="theme1" active-key="1-2" active-name="1">
                          <s-submenu name="1">
                              <template slot="title">
                                  <i class="iconfont icon-file"></i>
                                  内容管理
                                </template>
                              <s-menu-item name="1-1">文章管理</s-menu-item>
                              <s-menu-item name="1-2">评论管理</s-menu-item>
                              <s-menu-item name="1-3">举报管理</s-menu-item>
                          </s-submenu>
                          <s-submenu name="2">
                              <template slot="title">
                                  <i class="iconfont icon-file"></i>
                                  用户管理
                                </template>
                              <s-menu-item name="2-1">新增用户</s-menu-item>
                              <s-menu-item name="2-2">活跃用户</s-menu-item>
                          </s-submenu>
                          <s-submenu name="3">
                              <template slot="title">
                                  <i class="iconfont icon-file"></i>
                                  统计分析
                                </template>
                              <s-menu-group title="使用">
                                  <s-menu-item name="3-1">新增和启动</s-menu-item>
                                  <s-menu-item name="3-2">活跃分析</s-menu-item>
                                  <s-menu-item name="3-3">时段分析</s-menu-item>
                              </s-menu-group>
                              <s-menu-group title="留存">
                                  <s-menu-item name="3-4">用户留存</s-menu-item>
                                  <s-menu-item name="3-5">流失用户</s-menu-item>
                              </s-menu-group>
                          </s-submenu>
                      </s-menu>
                  </s-col>
                  <s-col span="8">
                    <!--  <s-menu :theme="theme1" accordion :open-names="['2']">
                          <s-submenu name="1">
                              <template slot="title">
                                  <i class="iconfont icon-file"></i>
                                  内容管理3
                                </template>
                              <s-menu-item name="1-1">文章管理3</s-menu-item>
                              <s-menu-item name="1-2">评论管理</s-menu-item>
                              <s-menu-item name="1-3">举报管理</s-menu-item>
                          </s-submenu>
                          <s-submenu name="2">
                              <template slot="title">
                                  <i class="iconfont icon-file"></i>
                                  用户管理
                                </template>
                              <s-menu-item name="2-1">新增用户</s-menu-item>
                              <s-menu-item name="2-2">活跃用户</s-menu-item>
                          </s-submenu>
                          <s-submenu name="3">
                              <template slot="title">
                                  <i class="iconfont icon-file"></i>
                                  统计分析
                                </template>
                              <s-menu-group title="使用">
                                  <s-menu-item name="3-1">新增和启动</s-menu-item>
                                  <s-menu-item name="3-2">活跃分析</s-menu-item>
                                  <s-menu-item name="3-3">时段分析</s-menu-item>
                              </s-menu-group>
                              <s-menu-group title="留存">
                                  <s-menu-item name="3-4">用户留存</s-menu-item>
                                  <s-menu-item name="3-5">流失用户</s-menu-item>
                              </s-menu-group>
                          </s-submenu>
                      </s-menu>-->
                  </s-col>
              </s-row>
          </div>
          <div class="example-code" >
        <pre><code>
       &lt;s-row&gt;
            &lt;s-col span="8"&gt;
              &lt;s-menu :theme="theme1"&gt;
                &lt;s-submenu name="1"&gt;
                  &lt;template slot="title"&gt;
                    &lt;i class="iconfont icon-file"&gt;&lt;/i&gt;
                    内容管理
                  &lt;/template&gt;
                  &lt;s-menu-item name="1-1"&gt;文章管理&lt;/s-menu-item&gt;
                  &lt;s-menu-item name="1-2"&gt;评论管理&lt;/s-menu-item&gt;
                  &lt;s-menu-item name="1-3"&gt;举报管理&lt;/s-menu-item&gt;
                &lt;/s-submenu&gt;
                &lt;s-submenu name="2"&gt;
                  &lt;template slot="title"&gt;
                    &lt;i class="iconfont icon-file"&gt;&lt;/i&gt;
                    用户管理
                  &lt;/template&gt;
                  &lt;s-menu-item name="2-1"&gt;新增用户&lt;/s-menu-item&gt;
                  &lt;s-menu-item name="2-2"&gt;活跃用户&lt;/s-menu-item&gt;
                &lt;/s-submenu&gt;
                &lt;s-submenu name="3"&gt;
                  &lt;template slot="title"&gt;
                    &lt;i class="iconfont icon-file"&gt;&lt;/i&gt;
                    统计分析
                  &lt;/template&gt;
                  &lt;s-menu-group title="使用"&gt;
                    &lt;s-menu-item name="3-1"&gt;新增和启动&lt;/s-menu-item&gt;
                    &lt;s-menu-item name="3-2"&gt;活跃分析&lt;/s-menu-item&gt;
                    &lt;s-menu-item name="3-3"&gt;时段分析&lt;/s-menu-item&gt;
                  &lt;/s-menu-group&gt;
                  &lt;s-menu-group title="留存"&gt;
                    &lt;s-menu-item name="3-4"&gt;用户留存&lt;/s-menu-item&gt;
                    &lt;s-menu-item name="3-5"&gt;流失用户&lt;/s-menu-item&gt;
                  &lt;/s-menu-group&gt;
                &lt;/s-submenu&gt;
              &lt;/s-menu&gt;
            &lt;/s-col&gt;
            &lt;s-col span="8"&gt;
              &lt;s-menu :theme="theme1" active-key="1-2"&gt;
                &lt;s-submenu name="1"&gt;
                  &lt;template slot="title"&gt;
                    &lt;i class="iconfont icon-file"&gt;&lt;/i&gt;
                    内容管理
                  &lt;/template&gt;
                  &lt;s-menu-item name="1-1"&gt;文章管理&lt;/s-menu-item&gt;
                  &lt;s-menu-item name="1-2"&gt;评论管理&lt;/s-menu-item&gt;
                  &lt;s-menu-item name="1-3"&gt;举报管理&lt;/s-menu-item&gt;
                &lt;/s-submenu&gt;
                &lt;s-submenu name="2"&gt;
                  &lt;template slot="title"&gt;
                    &lt;i class="iconfont icon-file"&gt;&lt;/i&gt;
                    用户管理
                  &lt;/template&gt;
                  &lt;s-menu-item name="2-1"&gt;新增用户&lt;/s-menu-item&gt;
                  &lt;s-menu-item name="2-2"&gt;活跃用户&lt;/s-menu-item&gt;
                &lt;/s-submenu&gt;
                &lt;s-submenu name="3"&gt;
                  &lt;template slot="title"&gt;
                    &lt;i class="iconfont icon-file"&gt;&lt;/i&gt;
                    统计分析
                  &lt;/template&gt;
                  &lt;s-menu-group title="使用"&gt;
                    &lt;s-menu-item name="3-1"&gt;新增和启动&lt;/s-menu-item&gt;
                    &lt;s-menu-item name="3-2"&gt;活跃分析&lt;/s-menu-item&gt;
                    &lt;s-menu-item name="3-3"&gt;时段分析&lt;/s-menu-item&gt;
                  &lt;/s-menu-group&gt;
                  &lt;s-menu-group title="留存"&gt;
                    &lt;s-menu-item name="3-4"&gt;用户留存&lt;/s-menu-item&gt;
                    &lt;s-menu-item name="3-5"&gt;流失用户&lt;/s-menu-item&gt;
                  &lt;/s-menu-group&gt;
                &lt;/s-submenu&gt;
              &lt;/s-menu&gt;
            &lt;/s-col&gt;
            &lt;s-col span="8"&gt;
              &lt;s-menu :theme="theme1" :open-keys="['1']" accordion :open-names="['1']">
                &lt;s-submenu name="1"&gt;
                  &lt;template slot="title"&gt;
                    &lt;i class="iconfont icon-file"&gt;&lt;/i&gt;
                    内容管理
                  &lt;/template&gt;
                  &lt;s-menu-item name="1-1"&gt;文章管理&lt;/s-menu-item&gt;
                  &lt;s-menu-item name="1-2"&gt;评论管理&lt;/s-menu-item&gt;
                  &lt;s-menu-item name="1-3"&gt;举报管理&lt;/s-menu-item&gt;
                &lt;/s-submenu&gt;
                &lt;s-submenu name="2"&gt;
                  &lt;template slot="title"&gt;
                    &lt;i class="iconfont icon-file"&gt;&lt;/i&gt;
                    用户管理
                  &lt;/template&gt;
                  &lt;s-menu-item name="2-1"&gt;新增用户&lt;/s-menu-item&gt;
                  &lt;s-menu-item name="2-2"&gt;活跃用户&lt;/s-menu-item&gt;
                &lt;/s-submenu&gt;
                &lt;s-submenu name="3"&gt;
                  &lt;template slot="title"&gt;
                    &lt;i class="iconfont icon-file"&gt;&lt;/i&gt;
                    统计分析
                  &lt;/template&gt;
                  &lt;s-menu-group title="使用"&gt;
                    &lt;s-menu-item name="3-1"&gt;新增和启动&lt;/s-menu-item&gt;
                    &lt;s-menu-item name="3-2"&gt;活跃分析&lt;/s-menu-item&gt;
                    &lt;s-menu-item name="3-3"&gt;时段分析&lt;/s-menu-item&gt;
                  &lt;/s-menu-group&gt;
                  &lt;s-menu-group title="留存"&gt;
                    &lt;s-menu-item name="3-4"&gt;用户留存&lt;/s-menu-item&gt;
                    &lt;s-menu-item name="3-5"&gt;流失用户&lt;/s-menu-item&gt;
                  &lt;/s-menu-group&gt;
                &lt;/s-submenu&gt;
              &lt;/s-menu&gt;
            &lt;/s-col&gt;
          &lt;/s-row&gt;

        </code></pre>
          </div>
      </div>
      <h3>Menu Props</h3>
      <table class="table">
          <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>mode</td> <td>菜单类型，可选值为 <code>horizontal</code>（水平） 和 <code>vertical</code>（垂直）</td> <td>String</td> <td>vertical</td> </tr> <tr> <td>theme</td> <td>主题，可选值为 <code>light</code>、<code>dark</code>、<code>primary</code>，其中 primary 只适用于 <code>mode="horizontal"</code></td> <td>String</td> <td>light</td> </tr> <tr> <td>active-key</td> <td>激活菜单的 key 值</td> <td>String | Number</td> <td>-</td> </tr> <tr> <td>open-names</td> <td>展开的 Submenu 的 key 集合</td> <td>Array</td> <td>[]</td> </tr> <tr> <td>accordion</td> <td>是否开启手风琴模式，开启后每次至多展开一个子菜单</td> <td>Boolean</td> <td>false</td> </tr> <tr> <td>width</td> <td>导航菜单的宽度，只在 <code>mode="vertical"</code> 时有效，如果使用 <code>i-col</code> 等布局，建议设置为 <code>auto</code></td> <td>String</td> <td>240px</td> </tr> </tbody> </table>
      <h3>Menu Events</h3>
      <table class="table">
          <thead> <tr> <th>事件名</th> <th>说明</th> <th>返回值</th> </tr> </thead> <tbody> <tr> <td>on-select</td> <td>选择菜单（Menu-item）时触发</td> <td>key</td> </tr> <tr> <td>on-open-change</td> <td>当 展开/收起 子菜单时触发</td> <td>当前展开的 Submenu 的 key 值数组</td> </tr> </tbody> </table>
      <h3>SubMenu props</h3>
      <table class="table">
          <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>key</td> <td>菜单项的唯一标识，必填</td> <td>String | Number</td> <td>-</td> </tr> </tbody> </table>
      <h3>MenuItem props</h3>
      <table class="table">
          <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>key</td> <td>菜单项的唯一标识，必填</td> <td>String | Number</td> <td>-</td> </tr> </tbody> </table>
      <h3>SubMenu slot</h3>
      <table class="table">
          <thead> <tr> <th>名称</th> <th>说明</th> </tr> </thead> <tbody> <tr> <td>无</td> <td>菜单项</td> </tr> <tr> <td>title</td> <td>子菜单标题</td> </tr> </tbody> </table>
  </article>
</template>

<script>
  import de from "../src/components/extra/locale/lang/de";

  export default {


    data() {
      return {
        theme1: "light",
        openNames: 0,
        menuData: [],
        menuDatas: [
          {
            name: '巴萨',
            id: 1,
            childList: [
              {
                name: '梅西',
                id: 11
              },
              {
                name: '内马尔',
                id: 12
              },
              {
                name: '苏亚雷斯',
                id: 13
              }
            ]
          },
          {
            name: '皇马',
            id: 2,
            childList: [
              {
                name: 'C罗',
                id: 21
              },
              {
                name: '本泽马',
                id: 22
              },
              {
                name: '贝尔',
                id: 23
              }
            ]
          },
          {
            name: '热刺',
            id: 3,
            childList: [
              {
                name: '孙兴慜',
                id: 31
              },
              {
                name: '阿里',
                id: 32
              },
              {
                name: '凯恩',
                id: 33
              }
            ]
          }
        ]
      }
    },
    created() {
      this.openNames = this.menuDatas[0].id
      this.menuData = this.menuDatas
    }
  }
</script>
