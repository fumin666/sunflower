<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-11 13:28:53
 * @LastEditTime: 2020-06-30 18:50:56
 * @LastEditors: mybells
 -->
<template>
  <article class="article">
    <h1>Select选择器</h1>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>

    <div class="tip">
      <p>如果 Select 的绑定值为对象类型，请务必指定 <code>value-key</code> 作为它的唯一性标识。</p>
    </div>

    <h3>基础用法</h3>
    <p>适用广泛的基础单选</p>
    <div class="example">
      <div class="example-demo">

        <s-select v-model="value12" autoOpen placeholder="请选择" style="width: 70px" append-to-table=".example">
          <s-option
            v-for="item in 50"
            :label="item"
            :key="item"
            :value="item">
          </s-option>
        </s-select>

        <s-select v-model="value" placeholder="请选择123" anonLabel="鲜花饼" append-to-table=".example">
          <s-option
            v-for="item in options"
            :label="item.label"
            :key="item.value"
            :value="item.value">
          </s-option>
        </s-select>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-select v-model="value" placeholder="请选择"
             append-to-table=".example"
                      anonLabel="鲜花饼">
              <s-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </s-option>
            </s-select>
          </template>

          <script>
            export default {
              data() {
                return {
                  options: [{
                    value: '选项1',
                    label: '黄金糕'
                  }, {
                    value: '选项2',
                    label: '双皮奶'
                  }, {
                    value: '选项3',
                    label: '蚵仔煎'
                  }, {
                    value: '选项4',
                    label: '龙须面'
                  }, {
                    value: '选项5',
                    label: '北京烤鸭'
                  }],
                  value: ''
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p><code>anonLabel</code>,详见属性描述</p>
          <p><code>v-model</code>的值为当前被选中的<code>s-option</code>的 value 属性值</p></div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>有禁用选项</h3>
    <div class="example">
      <div class="example-demo">
        <s-select v-model="value2" placeholder="请选择">
          <s-option
            v-for="item in options2"
            :label="item.label"
            :value="item.value"
            :key="item.value"
            :disabled="item.disabled">
          </s-option>
        </s-select>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-select v-model="value2" placeholder="请选择">
              <s-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">
              </s-option>
            </s-select>
          </template>

          <script>
            export default {
              data() {
                return {
                  options2: [{
                    value: '选项1',
                    label: '黄金糕'
                  }, {
                    value: '选项2',
                    label: '双皮奶',
                    disabled: true
                  }, {
                    value: '选项3',
                    label: '蚵仔煎'
                  }, {
                    value: '选项4',
                    label: '龙须面'
                  }, {
                    value: '选项5',
                    label: '北京烤鸭'
                  }],
                  value2: ''
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p>在<code>s-option</code>中，设定<code>disabled</code>值为 true，即可禁用该选项</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>禁用状态</h3>
    <p>选择器不可用状态</p>
    <div class="example">
      <div class="example-demo">
        <s-select v-model="value3" disabled placeholder="请选择">
          <s-option
            v-for="item in options"
            :label="item.label"
            :key="item.value"
            :value="item.value">
          </s-option>
        </s-select>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-select v-model="value3" disabled placeholder="请选择">
              <s-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </s-option>
            </s-select>
          </template>

          <script>
            export default {
              data() {
                return {
                  options: [{
                    value: '选项1',
                    label: '黄金糕'
                  }, {
                    value: '选项2',
                    label: '双皮奶'
                  }, {
                    value: '选项3',
                    label: '蚵仔煎'
                  }, {
                    value: '选项4',
                    label: '龙须面'
                  }, {
                    value: '选项5',
                    label: '北京烤鸭'
                  }],
                  value3: ''
                }
              }
            }
          </script>
        </textarea>
        <div class="description"><p>为<code>s-select</code>设置<code>disabled</code>属性，则整个选择器不可用</p></div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>可清空单选</h3>
    <p>包含清空按钮，可将选择器清空为初始状态</p>
    <div class="example">
      <div class="example-demo">
        <s-select v-model="value4" clearable placeholder="请选择">
          <s-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </s-option>
        </s-select>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-select v-model="value4" clearable placeholder="请选择">
              <s-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </s-option>
            </s-select>
          </template>

          <script>
            export default {
              data() {
                return {
                  options: [{
                    value: '选项1',
                    label: '黄金糕'
                  }, {
                    value: '选项2',
                    label: '双皮奶'
                  }, {
                    value: '选项3',
                    label: '蚵仔煎'
                  }, {
                    value: '选项4',
                    label: '龙须面'
                  }, {
                    value: '选项5',
                    label: '北京烤鸭'
                  }],
                  value4: ''
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p>为<code>s-select</code>设置<code>clearable</code>属性，则可将选择器清空。需要注意的是，<code>clearable</code>属性仅适用于单选。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>基础多选</h3>
    <p>适用性较广的基础多选，用 Tag 展示已选项</p>
    <div class="example">
      <div class="example-demo">
        <s-select v-model="value5" filterable multiple clearable placeholder="请选择" style="width: 350px">
          <s-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </s-option>
        </s-select>

        <s-select
          v-model="value11"
          multiple
          filterable
          collapse-tags
          clearable
          @change="aa"
          style="margin-left: 20px;"
          placeholder="请选择">
          <s-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </s-option>
        </s-select>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-select v-model="value5" filterable multiple clearable placeholder="请选择">
              <s-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </s-option>
            </s-select>

            <s-select
              v-model="value11"
              filterable
              multiple
              collapse-tags
              clearable
              style="margin-left: 20px;"
              placeholder="请选择">
              <s-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </s-option>
            </s-select>
          </template>

          <script>
            export default {
              data() {
                return {
                  options: [{
                    value: '选项1',
                    label: '黄金糕'
                  }, {
                    value: '选项2',
                    label: '双皮奶'
                  }, {
                    value: '选项3',
                    label: '蚵仔煎'
                  }, {
                    value: '选项4',
                    label: '龙须面'
                  }, {
                    value: '选项5',
                    label: '北京烤鸭'
                  },{
                    value: '选项6',
                    label: '我这个字段很长呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀'
                  }],
                  value5: [],
                  value11: []
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p>为<code>s-select</code>设置<code>multiple</code>属性即可启用多选，此时<code>v-model</code>的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置<code>collapse-tags</code>属性将它们合并为一段文字。
          </p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>分组</h3>
    <p>备选项进行分组展示</p>
    <div class="example">
      <div class="example-demo">
        <s-select v-model="value7" placeholder="请选择">
          <s-option-group
            v-for="group in options3"
            :key="group.label"
            :label="group.label">
            <s-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </s-option>
          </s-option-group>
        </s-select>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-select v-model="value7" placeholder="请选择">
              <s-option-group
                v-for="group in options3"
                :key="group.label"
                :label="group.label">
                <s-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </s-option>
              </s-option-group>
            </s-select>
          </template>

          <script>
            export default {
              data() {
                return {
                  options3: [{
                    label: '热门城市',
                    options: [{
                      value: 'Shanghai',
                      label: '上海'
                    }, {
                      value: 'Beijing',
                      label: '北京'
                    }]
                  }, {
                    label: '城市名',
                    options: [{
                      value: 'Chengdu',
                      label: '成都'
                    }, {
                      value: 'Shenzhen',
                      label: '深圳'
                    }, {
                      value: 'Guangzhou',
                      label: '广州'
                    }, {
                      value: 'Dalian',
                      label: '大连'
                    }]
                  }],
                  value7: ''
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p>使用<code>s-option-group</code>对备选项进行分组，它的<code>label</code>属性为分组名</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>自定义模板</h3>
    <p>可以自定义备选项</p>
    <div class="example">
      <div class="example-demo">
        <s-select v-model="value6" placeholder="请选择">
          <s-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </s-option>
        </s-select>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-select v-model="value6" placeholder="请选择">
              <s-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                <span style="float: left">&#123;item.label&#125;</span>
                <span style="float: right; color: #8492a6; font-size: 13px">&#123;item.value&#125;</span>
              </s-option>
            </s-select>
          </template>

          <script>
            export default {
              data() {
                return {
                  cities: [{
                    value: 'Beijing',
                    label: '北京'
                  }, {
                    value: 'Shanghai',
                    label: '上海'
                  }, {
                    value: 'Nanjing',
                    label: '南京'
                  }, {
                    value: 'Chengdu',
                    label: '成都'
                  }, {
                    value: 'Shenzhen',
                    label: '深圳'
                  }, {
                    value: 'Guangzhou',
                    label: '广州'
                  }],
                  value6: ''
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p>将自定义的 HTML 模板插入<code>s-option</code>的 slot 中即可。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>可搜索</h3>
    <p>可以利用搜索功能快速查找选项</p>
    <div class="example">
      <div class="example-demo">
        <s-select v-model="value8" filterable placeholder="请选择">
          <s-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </s-option>
        </s-select>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-select v-model="value8" filterable placeholder="请选择">
              <s-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </s-option>
            </s-select>
          </template>

          <script>
            export default {
              data() {
                return {
                  options: [{
                    value: '选项1',
                    label: '黄金糕'
                  }, {
                    value: '选项2',
                    label: '双皮奶'
                  }, {
                    value: '选项3',
                    label: '蚵仔煎'
                  }, {
                    value: '选项4',
                    label: '龙须面'
                  }, {
                    value: '选项5',
                    label: '北京烤鸭'
                  }],
                  value8: ''
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p>为<code>s-select</code>添加<code>filterable</code>属性即可启用搜索功能。
            默认情况下，Select 会找出所有<code>label</code>属性包含输入值的选项。如果希望使用其他的搜索逻辑，
            可以通过传入一个<code>filter-method</code>来实现。<code>filter-method</code>为一个<code>Function</code>，
            它会在输入值发生变化时调用，参数为当前输入值。
          </p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>远程搜索</h3>
    <p>从服务器搜索数据，输入关键字进行查找</p>
    <div class="example">
      <div class="example-demo">
        <s-select
          v-model="value9"
          multiple
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading">
          <s-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </s-option>
        </s-select>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-select
              v-model="value9"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
              :loading="loading">
              <s-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </s-option>
            </s-select>
          </template>

          <script>
            export default {
              data() {
                return {
                  options4: [],
                  value9: [],
                  list: [],
                  loading: false,
                  states: ["Alabama", "Alaska", "Arizona",
                    "Arkansas", "California", "Colorado",
                    "Connecticut", "Delaware", "Florida",
                    "Georgia", "Hawaii", "Idaho", "Illinois",
                    "Indiana", "Iowa", "Kansas", "Kentucky",
                    "Louisiana", "Maine", "Maryland",
                    "Massachusetts", "Michigan", "Minnesota",
                    "Mississippi", "Missouri", "Montana",
                    "Nebraska", "Nevada", "New Hampshire",
                    "New Jersey", "New Mexico", "New York",
                    "North Carolina", "North Dakota", "Ohio",
                    "Oklahoma", "Oregon", "Pennsylvania",
                    "Rhode Island", "South Carolina",
                    "South Dakota", "Tennessee", "Texas",
                    "Utah", "Vermont", "Virginia",
                    "Washington", "West Virginia", "Wisconsin",
                    "Wyoming"]
                }
              },
              mounted() {
                this.list = this.states.map(item => {
                  return {value: item, label: item};
                });
              },
              methods: {
                remoteMethod(query) {
                  if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                      this.loading = false;
                      this.options4 = this.list.filter(item => {
                        return item.label.toLowerCase()
                            .indexOf(query.toLowerCase()) > -1;
                      });
                    }, 200);
                  } else {
                    this.options4 = [];
                  }
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p>为了启用远程搜索，需要将<code>filterable</code>和<code>remote</code>设置为<code>true</code>，
            同时传入一个<code>remote-method</code>。<code>remote-method</code>为一个<code>Function</code>，
            它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果<code>s-option</code>是通过<code>v-for</code>指令渲染出来的，
            此时需要为<code>s-option</code>添加<code>key</code>属性，且其值需具有唯一性，比如此例中的<code>item.value</code>。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>创建条目</h3>
    <p>可以创建并选中选项中不存在的条目</p>
    <div class="example">
      <div class="example-demo">
        <s-select
          v-model="value10"
          multiple
          filterable
          allow-create
          placeholder="请选择文章标签">
          <s-option
            v-for="item in options5"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </s-option>
        </s-select>
      </div>
      <example-code>
        <textarea>
          <template>
            <s-select
              v-model="value10"
              multiple
              filterable
              allow-create
              placeholder="请选择文章标签">
              <s-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </s-option>
            </s-select>
          </template>

          <script>
            export default {
              data() {
                return {
                  options5: [{
                    value: 'HTML',
                    label: 'HTML'
                  }, {
                    value: 'CSS',
                    label: 'CSS'
                  }, {
                    value: 'JavaScript',
                    label: 'JavaScript'
                  }],
                  value10: []
                }
              }
            }
          </script>
        </textarea>
        <div class="description">
          <p>使用<code>allow-create</code>属性即可通过在输入框中输入文字来创建新的条目。注意此时<code>filterable</code>必须为真。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>Select Attributes</h3>
    <s-tb>
      <s-tb-i title="multiple" desc="是否多选" type="是否多选" value="-" init="false"></s-tb-i>
      <s-tb-i title="disabled" desc="是否禁用" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="value-key" desc="作为 value 唯一标识的键名，绑定值为对象类型时必填" type="string" value="-" init="value"></s-tb-i>
      <s-tb-i title="size	" desc="输入框尺寸" type="string" value="medium/small/mini" init="-"></s-tb-i>
      <s-tb-i title="clearable" desc="单选时是否可以清空选项" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="collapse-tags" desc="多选时是否将选中值按文字的形式展示" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="multiple-limit" desc="多选时用户最多可以选择的项目数，为 0 则不限制" type="number" value="-" init="0"></s-tb-i>
      <s-tb-i title="name" desc="select input 的 name 属性" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="placeholder" desc="占位符" type="string" value="-" init="请选择"></s-tb-i>
      <s-tb-i title="filterable" desc="是否可搜索" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="allow-create" desc="是否允许用户创建新条目，需配合 filterable 使用" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="filter-method" desc="自定义搜索方法" type="function" value="-" init="-"></s-tb-i>
      <s-tb-i title="remote" desc="是否为远程搜索" type="boolean" value="-" init="false-"></s-tb-i>
      <s-tb-i title="remote-method" desc="远程搜索方法" type="function" value="-" init="-"></s-tb-i>
      <s-tb-i title="loading" desc="是否正在从远程获取数据" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="no-match-text" desc="搜索条件无匹配时显示的文字" type="string" value="-" init="无匹配数据"></s-tb-i>
      <s-tb-i title="no-data-text" desc="选项为空时显示的文字" type="string	" value="-" init="无数据"></s-tb-i>
      <s-tb-i title="popper-class" desc="Select 下拉框的类名" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="popper-append-to-body" desc="是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="append-to-table" desc="是否将弹出框插入至 #id/.class 元素。在弹出框不想定位在body上使用" type="string" value="-" init="''"></s-tb-i>
      <s-tb-i title="reserve-keyword" desc="多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词" type="boolean" value="-"
              init="false"></s-tb-i>
      <s-tb-i title="default-first-option" desc="在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用" type="boolean" value="-"
              init="false"></s-tb-i>
      <s-tb-i title="anonLabel" desc="当前value值不存在于options列表中时，展示的label值。" type="string" value="-"
              init="''"></s-tb-i>
    </s-tb>

    <h3>Select Events</h3>
    <table>
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
        <td>选中值发生变化时触发</td>
        <td>目前的选中值</td>
      </tr>
      <tr>
        <td>visible-change</td>
        <td>下拉框出现/隐藏时触发</td>
        <td>出现则为 true，隐藏则为 false</td>
      </tr>
      <tr>
        <td>remove-tag</td>
        <td>多选模式下移除tag时触发</td>
        <td>移除的tag值</td>
      </tr>
      <tr>
        <td>clear</td>
        <td>可清空的单选模式下用户点击清空按钮时触发</td>
        <td>—</td>
      </tr>
      <tr>
        <td>blur</td>
        <td>当 input 失去焦点时触发</td>
        <td>(event: Event)</td>
      </tr>
      <tr>
        <td>focus</td>
        <td>当 input 获得焦点时触发</td>
        <td>(event: Event)</td>
      </tr>
      </tbody>
    </table>

    <h3>Option Group Attributes</h3>
    <table>
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
        <td>分组的组名</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否将该分组下所有选项置为禁用</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      </tbody>
    </table>

    <h3>Option Attributes</h3>
    <table>
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
        <td>value</td>
        <td>选项的值</td>
        <td>string/number/object</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>label</td>
        <td>选项的标签，若不设置则默认与 <code>value</code> 相同</td>
        <td>string/number</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用该选项</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      </tbody>
    </table>

    <h3>Methods</h3>
    <table>
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>focus</td>
        <td>使 input 获取焦点</td>
        <td>-</td>
      </tr>
      </tbody>
    </table>

  </article>
</template>

<script>
  export default {
    data(){
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          },{
            value: '选项6',
            label: '我这个字段很长呀呀呀呀呀哎呀呀呀呀呀呀呀呀'
          }],
        options2: [
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶',
            disabled: true
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
        options3: [
          {
            label: '热门城市',
            options: [{
              value: 'Shanghai',
              label: '上海'
            }, {
              value: 'Beijing',
              label: '北京'
            }]
          }, {
            label: '城市名',
            options: [{
              value: 'Chengdu',
              label: '成都'
            }, {
              value: 'Shenzhen',
              label: '深圳'
            }, {
              value: 'Guangzhou',
              label: '广州'
            }, {
              value: 'Dalian',
              label: '大连'
            }]
          }],
        cities: [
          {
            value: 'Beijing',
            label: '北京'
          }, {
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Nanjing',
            label: '南京'
          }, {
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }],
        options4: [],
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        states: ["Alabama", "Alaska", "Arizona",
          "Arkansas", "California", "Colorado",
          "Connecticut", "Delaware", "Florida",
          "Georgia", "Hawaii", "Idaho", "Illinois",
          "Indiana", "Iowa", "Kansas", "Kentucky",
          "Louisiana", "Maine", "Maryland",
          "Massachusetts", "Michigan", "Minnesota",
          "Mississippi", "Missouri", "Montana",
          "Nebraska", "Nevada", "New Hampshire",
          "New Jersey", "New Mexico", "New York",
          "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania",
          "Rhode Island", "South Carolina",
          "South Dakota", "Tennessee", "Texas",
          "Utah", "Vermont", "Virginia",
          "Washington", "West Virginia", "Wisconsin",
          "Wyoming"],
        value: '11111',
        value2: '',
        value3: '',
        value4: '',
        value5: [],
        value6: '',
        value7: '',
        value8: '',
        value9: [],
        value10: [],
        value11: [],
        value12: [],
        list: [],
        loading: false
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return {value: item, label: item};
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                  .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      },
      aa() {
        console.log(this.value11)
      }
    }
  }
</script>
