<template>
  <article class="article">
    <h1> Tree 树形控件</h1>
    <p>用清晰的层级结构展示信息，可展开或折叠。</p>

    <h3>基础用法</h3>
    <p>基础的树形结构展示。</p>
    <div class="example">
      <div class="example-demo">
        <s-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" :showLine="true" prefixIcon="circle"></s-tree>
      </div>
      <example-code>
        <textarea>
          <s-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></s-tree>

          <script>
            export default {
              data() {
                return {
                  data: [{
                    label: '一级 1',
                    children: [{
                      label: '二级 1-1',
                      children: [{
                        label: '三级 1-1-1'
                      },
                      {
                        label: '三级 1-1-2'
                      }]
                    }]
                  }, {
                    label: '一级 2',
                    children: [{
                      label: '二级 2-1',
                      children: [{
                        label: '三级 2-1-1'
                      }]
                    }, {
                      label: '二级 2-2',
                      children: [{
                        label: '三级 2-2-1'
                      }]
                    }]
                  }, {
                    label: '一级 3',
                    children: [{
                      label: '二级 3-1',
                      children: [{
                        label: '三级 3-1-1'
                      }]
                    }, {
                      label: '二级 3-2',
                      children: [{
                        label: '三级 3-2-1'
                      }]
                    }]
                  }],
                  defaultProps: {
                    children: 'children',
                    label: 'label'
                  }
                };
              },
              methods: {
                handleNodeClick(data) {
                  console.log(data);
                }
              }
            };
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>可选择</h3>
    <p>适用于需要选择层级时使用。</p>
    <div class="example">
      <div class="example-demo">
        <s-tree
          :props="props"
          :load="loadNode"
          lazy
          show-checkbox
          @check-change="handleCheckChange">
        </s-tree>
      </div>
      <example-code>
        <textarea>
          <s-tree
            :props="props"
            :load="loadNode"
            lazy
            show-checkbox
            @check-change="handleCheckChange">
          </s-tree>

          <script>
            export default {
              data() {
                return {
                  props: {
                    label: 'name',
                    children: 'zones'
                  },
                  count: 1
                };
              },
              methods: {
                handleCheckChange(data, checked, indeterminate) {
                  console.log(data, checked, indeterminate);
                },
                handleNodeClick(data) {
                  console.log(data);
                },
                loadNode(node, resolve) {
                  if (node.level === 0) {
                    return resolve([{ name: 'region1' }, { name: 'region2' }]);
                  }
                  if (node.level > 3) return resolve([]);

                  var hasChild;
                  if (node.data.name === 'region1') {
                    hasChild = true;
                  } else if (node.data.name === 'region2') {
                    hasChild = false;
                  } else {
                    hasChild = Math.random() > 0.5;
                  }

                  setTimeout(() => {
                    var data;
                    if (hasChild) {
                      data = [{
                        name: 'zone' + this.count++
                      }, {
                        name: 'zone' + this.count++
                      }];
                    } else {
                      data = [];
                    }

                    resolve(data);
                  }, 500);
                }
              }
            };
          </script>
        </textarea>
        <div class="description">
          <p>本例还展示了动态加载节点数据的方法。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>懒加载自定义叶子节点</h3>
    <div class="example">
      <div class="example-demo">
        <s-tree
          :props="props1"
          :load="loadNode1"
          lazy
          show-checkbox>
        </s-tree>
      </div>
      <example-code>
        <textarea>
          <s-tree
            :props="props1"
            :load="loadNode1"
            lazy
            show-checkbox>
          </s-tree>

          <script>
            export default {
              data() {
                return {
                  props1: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                  }
                };
              },
              methods: {
                loadNode1(node, resolve) {
                  if (node.level === 0) {
                    return resolve([{ name: 'region' }]);
                  }
                  if (node.level > 1) return resolve([]);

                  setTimeout(() => {
                    const data = [{
                      name: 'leaf',
                      leaf: true
                    }, {
                      name: 'zone'
                    }];

                    resolve(data);
                  }, 500);
                }
              }
            };
          </script>
        </textarea>
        <div class="description">
          <p>由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点，所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。
            同时，你也可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>默认展开和默认选中</h3>
    <p>可将 Tree 的某些节点设置为默认展开或默认选中</p>
    <div class="example">
      <div class="example-demo">
        <s-tree
          :data="data2"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps">
        </s-tree>
      </div>
      <example-code>
        <textarea>
          <s-tree
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps">
          </s-tree>

          <script>
            export default {
              data() {
                return {
                  data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                      id: 4,
                      label: '二级 1-1',
                      children: [{
                        id: 9,
                        label: '三级 1-1-1'
                      }, {
                        id: 10,
                        label: '三级 1-1-2'
                      }]
                    }]
                  }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                      id: 5,
                      label: '二级 2-1'
                    }, {
                      id: 6,
                      label: '二级 2-2'
                    }]
                  }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                      id: 7,
                      label: '二级 3-1'
                    }, {
                      id: 8,
                      label: '二级 3-2'
                    }]
                  }],
                  defaultProps: {
                    children: 'children',
                    label: 'label'
                  }
                };
              }
            };
          </script>
        </textarea>
        <div class="description">
          <p>分别通过<code>default-expanded-keys</code>和<code>default-checked-keys</code>设置默认展开和默认选中的节点。
            需要注意的是，此时必须设置<code>node-key</code>，其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>禁用状态</h3>
    <p>可将 Tree 的某些节点设置为禁用状态</p>
    <div class="example">
      <div class="example-demo">
        <s-tree
          :data="data3"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]">
        </s-tree>
      </div>
      <example-code>
        <textarea>
          <s-tree
            :data="data3"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]">
          </s-tree>

          <script>
            export default {
              data() {
                return {
                  data3: [{
                    id: 1,
                    label: '一级 2',
                    children: [{
                      id: 3,
                      label: '二级 2-1',
                      children: [{
                        id: 4,
                        label: '三级 3-1-1'
                      }, {
                        id: 5,
                        label: '三级 3-1-2',
                        disabled: true
                      }]
                    }, {
                      id: 2,
                      label: '二级 2-2',
                      disabled: true,
                      children: [{
                        id: 6,
                        label: '三级 3-2-1'
                      }, {
                        id: 7,
                        label: '三级 3-2-2',
                        disabled: true
                      }]
                    }]
                  }],
                  defaultProps: {
                    children: 'children',
                    label: 'label'
                  }
                };
              }
            };
          </script>
        </textarea>
        <div class="description">
          <p>通过<code>disabled</code>设置禁用状态。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>树节点的选择</h3>
    <p></p>
    <div class="example">
      <div class="example-demo">
        <s-tree
          :data="data2"
          show-checkbox
          default-expand-all
          node-key="id"
          ref="tree"
          highlight-current
          :props="defaultProps">
        </s-tree>

        <div class="buttons">
          <s-button @click="getCheckedNodes">通过 node 获取</s-button>
          <s-button @click="getCheckedKeys">通过 key 获取</s-button>
          <s-button @click="setCheckedNodes">通过 node 设置</s-button>
          <s-button @click="setCheckedKeys">通过 key 设置</s-button>
          <s-button @click="resetChecked">清空</s-button>
        </div>
      </div>
      <example-code>
        <textarea>
          <s-tree
            :data="data2"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps">
          </s-tree>

          <div class="buttons">
            <s-button @click="getCheckedNodes">通过 node 获取</s-button>
            <s-button @click="getCheckedKeys">通过 key 获取</s-button>
            <s-button @click="setCheckedNodes">通过 node 设置</s-button>
            <s-button @click="setCheckedKeys">通过 key 设置</s-button>
            <s-button @click="resetChecked">清空</s-button>
          </div>

          <script>
            export default {
              methods: {
                getCheckedNodes() {
                  console.log(this.$refs.tree.getCheckedNodes());
                },
                getCheckedKeys() {
                  console.log(this.$refs.tree.getCheckedKeys());
                },
                setCheckedNodes() {
                  this.$refs.tree.setCheckedNodes([{
                    id: 5,
                    label: '二级 2-1'
                  }, {
                    id: 9,
                    label: '三级 1-1-1'
                  }]);
                },
                setCheckedKeys() {
                  this.$refs.tree.setCheckedKeys([3]);
                },
                resetChecked() {
                  this.$refs.tree.setCheckedKeys([]);
                }
              },

              data() {
                return {
                  data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                      id: 4,
                      label: '二级 1-1',
                      children: [{
                        id: 9,
                        label: '三级 1-1-1'
                      }, {
                        id: 10,
                        label: '三级 1-1-2'
                      }]
                    }]
                  }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                      id: 5,
                      label: '二级 2-1'
                    }, {
                      id: 6,
                      label: '二级 2-2'
                    }]
                  }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                      id: 7,
                      label: '二级 3-1'
                    }, {
                      id: 8,
                      label: '二级 3-2'
                    }]
                  }],
                  defaultProps: {
                    children: 'children',
                    label: 'label'
                  }
                };
              }
            };
          </script>
        </textarea>
        <div class="description">
          <p>本例展示如何获取和设置选中节点。获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key 来获取或设置，则必须设置<code>node-key</code>。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>自定义节点内容</h3>
    <p>节点的内容支持自定义，可以在节点区添加按钮或图标等内容</p>
    <a href="http://element.eleme.io/#/zh-CN/component/tree#zi-ding-yi-jie-dian-nei-rong">具体用法点击这里查看</a>
    <div class="example">
      <div class="example-demo">
        <template>
          <div class="custom-tree-container">
            <div class="block">
              <p>使用 scoped slot</p>
              <s-tree
                :data="data5"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                  <span>{{ node.label }}</span>
                  <span>
                    <s-button
                      size="mini"
                      @click="() => append(data)">
                      Append
                    </s-button>
                    <s-button
                      size="mini"
                      @click="() => remove(node, data)">
                      Delete
                    </s-button>
                  </span>
                </span>
              </s-tree>
            </div>
          </div>
        </template>
      </div>
      <example-code>
        <textarea>
          <div class="custom-tree-container">
            <div class="block">
              <p>使用 scoped slot</p>
              <s-tree
                :data="data5"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                  <span>{ node.label }</span>
                  <span>
                    <s-button
                      size="mini"
                      @click="() => append(data)">
                      Append
                    </s-button>
                    <s-button
                      size="mini"
                      @click="() => remove(node, data)">
                      Delete
                    </s-button>
                  </span>
                </span>
              </s-tree>
            </div>
          </div>

          <script>
            let id = 1000;

            export default {
              data() {
                const data = [{
                  id: 1,
                  label: '一级 1',
                  children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                      id: 9,
                      label: '三级 1-1-1'
                    }, {
                      id: 10,
                      label: '三级 1-1-2'
                    }]
                  }]
                }, {
                  id: 2,
                  label: '一级 2',
                  children: [{
                    id: 5,
                    label: '二级 2-1'
                  }, {
                    id: 6,
                    label: '二级 2-2'
                  }]
                }, {
                  id: 3,
                  label: '一级 3',
                  children: [{
                    id: 7,
                    label: '二级 3-1'
                  }, {
                    id: 8,
                    label: '二级 3-2'
                  }]
                }];
                return {
                  data4: JSON.parse(JSON.stringify(data)),
                  data5: JSON.parse(JSON.stringify(data))
                }
              },

              methods: {
                append(data) {
                  const newChild = { id: id++, label: 'testtest', children: [] };
                  if (!data.children) {
                    this.$set(data, 'children', []);
                  }
                  data.children.push(newChild);
                },

                remove(node, data) {
                  const parent = node.parent;
                  const children = parent.data.children || parent.data;
                  const index = children.findIndex(d => d.id === data.id);
                  children.splice(index, 1);
                }
              }
            };
          </script>
        </textarea>
        <div class="description">
          <p>在需要对节点进行过滤时，调用 Tree 实例的<code>filter</code>方法，参数为关键字。需要注意的是，此时需要设置<code>filter-node-method</code>，值为过滤函数。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>


    <h3>节点过滤</h3>
    <p>通过关键字过滤树节点</p>
    <div class="example">
      <div class="example-demo">
        <s-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </s-input>

        <s-tree
          class="filter-tree"
          :data="data2"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree2">
        </s-tree>
      </div>
      <example-code>
        <textarea>
          <s-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </s-input>

          <s-tree
            class="filter-tree"
            :data="data2"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree2">
          </s-tree>

          <script>
            export default {
              watch: {
                filterText(val) {
                  this.$refs.tree2.filter(val);
                }
              },

              methods: {
                filterNode(value, data) {
                  if (!value) return true;
                  return data.label.indexOf(value) !== -1;
                }
              },

              data() {
                return {
                  filterText: '',
                  data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                      id: 4,
                      label: '二级 1-1',
                      children: [{
                        id: 9,
                        label: '三级 1-1-1'
                      }, {
                        id: 10,
                        label: '三级 1-1-2'
                      }]
                    }]
                  }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                      id: 5,
                      label: '二级 2-1'
                    }, {
                      id: 6,
                      label: '二级 2-2'
                    }]
                  }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                      id: 7,
                      label: '二级 3-1'
                    }, {
                      id: 8,
                      label: '二级 3-2'
                    }]
                  }],
                  defaultProps: {
                    children: 'children',
                    label: 'label'
                  }
                };
              }
            };
          </script>
        </textarea>
        <div class="description">
          <p>在需要对节点进行过滤时，调用 Tree 实例的<code>filter</code>方法，参数为关键字。需要注意的是，此时需要设置<code>filter-node-method</code>，值为过滤函数。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>手风琴模式</h3>
    <p>对于同一级的节点，每次只能展开一个</p>
    <div class="example">
      <div class="example-demo">
        <s-tree
          :data="data"
          :props="defaultProps"
          accordion
          @node-click="handleNodeClick">
        </s-tree>
      </div>
      <example-code>
        <textarea>
          <s-tree
            :data="data"
            :props="defaultProps"
            accordion
            @node-click="handleNodeClick">
          </s-tree>

          <script>
            export default {
              data() {
                return {
                  data: [{
                    label: '一级 1',
                    children: [{
                      label: '二级 1-1',
                      children: [{
                        label: '三级 1-1-1'
                      }]
                    }]
                  }, {
                    label: '一级 2',
                    children: [{
                      label: '二级 2-1',
                      children: [{
                        label: '三级 2-1-1'
                      }]
                    }, {
                      label: '二级 2-2',
                      children: [{
                        label: '三级 2-2-1'
                      }]
                    }]
                  }, {
                    label: '一级 3',
                    children: [{
                      label: '二级 3-1',
                      children: [{
                        label: '三级 3-1-1'
                      }]
                    }, {
                      label: '二级 3-2',
                      children: [{
                        label: '三级 3-2-1'
                      }]
                    }]
                  }],
                  defaultProps: {
                    children: 'children',
                    label: 'label'
                  }
                };
              },
              methods: {
                handleNodeClick(data) {
                  console.log(data);
                }
              }
            };
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>可拖拽节点</h3>
    <p>通过 draggable 属性可让节点变为可拖拽。</p>
    <div class="example">
      <div class="example-demo">
        <s-tree
          :data="data6"
          node-key="id"
          default-expand-all
          @node-drag-start="handleDragStart"
          @node-drag-enter="handleDragEnter"
          @node-drag-leave="handleDragLeave"
          @node-drag-over="handleDragOver"
          @node-drag-end="handleDragEnd"
          @node-drop="handleDrop"
          draggable
          :allow-drop="allowDrop"
          :allow-drag="allowDrag">
        </s-tree>
      </div>
      <example-code>
        <textarea>
          <s-tree
            :data="data6"
            node-key="id"
            default-expand-all
            @node-drag-start="handleDragStart"
            @node-drag-enter="handleDragEnter"
            @node-drag-leave="handleDragLeave"
            @node-drag-over="handleDragOver"
            @node-drag-end="handleDragEnd"
            @node-drop="handleDrop"
            draggable
            :allow-drop="allowDrop"
            :allow-drag="allowDrag">
          </s-tree>

          <script>
            export default {
              data() {
                return {
                  data6: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                      id: 4,
                      label: '二级 1-1',
                      children: [{
                        id: 9,
                        label: '三级 1-1-1'
                      }, {
                        id: 10,
                        label: '三级 1-1-2'
                      }]
                    }]
                  }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                      id: 5,
                      label: '二级 2-1'
                    }, {
                      id: 6,
                      label: '二级 2-2'
                    }]
                  }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                      id: 7,
                      label: '二级 3-1'
                    }, {
                      id: 8,
                      label: '二级 3-2',
                      children: [{
                        id: 11,
                        label: '三级 3-2-1'
                      }, {
                        id: 12,
                        label: '三级 3-2-2'
                      }, {
                        id: 13,
                        label: '三级 3-2-3'
                      }]
                    }]
                  }],
                  defaultProps: {
                    children: 'children',
                    label: 'label'
                  }
                };
              },
              methods: {
                handleDragStart(node, ev) {
                  console.log('drag start', node);
                },
                handleDragEnter(draggingNode, dropNode, ev) {
                  console.log('tree drag enter: ', dropNode.label);
                },
                handleDragLeave(draggingNode, dropNode, ev) {
                  console.log('tree drag leave: ', dropNode.label);
                },
                handleDragOver(draggingNode, dropNode, ev) {
                  console.log('tree drag over: ', dropNode.label);
                },
                handleDragEnd(draggingNode, dropNode, dropType, ev) {
                  console.log('tree drag end: ', dropNode && dropNode.label, dropType);
                },
                handleDrop(draggingNode, dropNode, dropType, ev) {
                  console.log('tree drop: ', dropNode.label, dropType);
                },
                allowDrop(draggingNode, dropNode, type) {
                  if (dropNode.data.label === '二级 3-1') {
                    return type !== 'inner';
                  } else {
                    return true;
                  }
                },
                allowDrag(draggingNode) {
                  return draggingNode.data.label.indexOf('三级 3-1-1') === -1;
                }
              }
            };
          </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>Attributes</h3>
    <s-tb>
      <s-tb-i title="data" desc="展示数据" type="array" value="-" init="-"></s-tb-i>
      <s-tb-i title="empty-text" desc="内容为空的时候展示的文本" type="String" value="-" init="-"></s-tb-i>
      <s-tb-i title="node-key" desc="每个树节点用来作为唯一标识的属性，整颗树应该是唯一的" type="String" value="-" init="-"></s-tb-i>
      <s-tb-i title="showLine" desc="是否展示连接线" type="boolean" value="true/false" init="false"></s-tb-i>
      <s-tb-i title="prefixIcon" desc="前缀按钮图标" type="String" value="arrow/circle" init="arrow"></s-tb-i>
      <s-tb-i title="node-key" desc="每个树节点用来作为唯一标识的属性，整颗树应该是唯一的" type="String" value="-" init="-"></s-tb-i>
      <s-tb-i title="props" desc="配置选项，具体看下表" type="object" value="-" init="-"></s-tb-i>
      <s-tb-i title="load" desc="加载子树数据的方法" type="function(node, resolve)" value="-" init="-"></s-tb-i>
      <s-tb-i title="render-content" desc="树节点的内容区的渲染 Function" type="Function(h, { node }" value="-" init="-"></s-tb-i>
      <s-tb-i title="highlight-current" desc="是否高亮当前选中节点，默认值是 false。" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="current-node-key" desc="当前选中节点的 key，只写属性" type="string, number" value="-" init="-"></s-tb-i>
      <s-tb-i title="default-expand-all" desc="是否默认展开所有节点" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="expand-on-click-node" desc="是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="auto-expand-parent" desc="展开子节点的时候是否自动展开父节点" type="boolean" value="-" init="true"></s-tb-i>
      <s-tb-i title="default-expanded-keys" desc="默认展开的节点的 key 的数组" type="array" value="-" init="-"></s-tb-i>
      <s-tb-i title="show-checkbox" desc="节点是否可被选择" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="check-strictly" desc="在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="default-checked-keys" desc="默认勾选的节点的 key 的数组" type="array" value="-" init="-"></s-tb-i>
      <s-tb-i title="filter-node-method" desc="对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏" type="Function(value, data, node)" value="-" init="-"></s-tb-i>
      <s-tb-i title="accordion" desc="是否每次只打开一个同级树节点展开" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="indent" desc="相邻级节点间的水平缩进，单位为像素" type="number" value="-" init="18"></s-tb-i>
    </s-tb>

    <h3 id="props"> props</h3>
    <s-tb>
      <s-tb-i title="label" desc="指定节点标签为节点对象的某个属性值" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="children" desc="指定子树为节点对象的某个属性值" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="disabled" desc="指定节点选择框是否禁用为节点对象的某个属性值" type="boolean, function(data, node)" value="-" init="-"></s-tb-i>
      <s-tb-i title="isLeaf" desc="指定节点是否为叶子节点" type="boolean, function(data, node)" value="-" init="-"></s-tb-i>
    </s-tb>

    <h3 id="fang-fa"> 方法</h3>
    <p><code>Tree</code> 拥有如下方法，返回目前被选中的节点数组：</p>
    <table class="table">
      <thead>
        <tr><th>方法名</th><th>说明</th><th>参数</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>filter</td><td>对树节点进行筛选操作</td><td>接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数</td>
        </tr>
        <tr>
          <td>updateKeyChildren</td><td>通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性</td><td>(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组</td>
        </tr>
        <tr>
          <td>getCheckedNodes</td><td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点所组成的数组</td><td>(leafOnly) 接收一个 boolean 类型的参数，若为 <code>true</code> 则仅返回被选中的叶子节点，默认值为 <code>false</code></td>
        </tr>
        <tr>
          <td>setCheckedNodes</td><td>设置目前勾选的节点，使用此方法必须设置 node-key 属性</td><td>(nodes) 接收勾选节点数据的数组</td>
        </tr>
        <tr>
          <td>getCheckedKeys</td><td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点所组成的数组</td><td>(leafOnly) 接收一个 boolean 类型的参数，若为 <code>true</code> 则仅返回被选中的叶子节点的 keys，默认值为 <code>false</code></td>
        </tr>
        <tr>
          <td>setCheckedKeys</td><td>通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性</td><td>(keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 <code>true</code> 则仅设置叶子节点的选中状态，默认值为 <code>false</code></td>
        </tr>
        <tr>
          <td>setChecked</td><td>通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性</td><td>(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中  3. boolean 类型，是否设置子节点 ，默认为 false</td>
        </tr>

        <tr>
          <td>getCurrentKey</td><td>获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null</td><td>-</td>
        </tr>
        <tr>
          <td>getCurrentNode</td><td>获取当前被选中节点的 node，若没有节点被选中则返回 null</td><td>-</td>
        </tr>
        <tr>
          <td>setCurrentKey</td><td>通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</td><td>(key) 待被选节点的 key</td>
        </tr>
        <tr>
          <td>setCurrentNode</td><td>通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</td><td>(node) 待被选节点的 node</td>
        </tr>
      </tbody>
    </table>

    <h3 id="events"> Events</h3>
      <table class="table">
        <thead>
          <tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>node-click</td><td>节点被点击时的回调</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td>
          </tr>
          <tr>
            <td>check-change</td><td>节点选中状态发生变化时的回调</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点</td>
          </tr>
          <tr>
            <td>current-change</td><td>当前选中节点变化时触发的事件</td><td>共两个参数，依次为：当前节点的数据，当前节点的 Node 对象</td>
          </tr>
          <tr>
            <td>node-expand</td><td>节点被展开时触发的事件</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td>
          </tr>
          <tr>
            <td>node-collapse</td><td>节点被关闭时触发的事件</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td>
          </tr>
        </tbody>
      </table>

  </article>
</template>

<script>
  let id = 1000;

  export default {
    data() {
      const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            },{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1,
        props1: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        data3: [{
          id: 1,
          label: '一级 2',
          children: [{
            id: 3,
            label: '二级 2-1',
            children: [{
              id: 4,
              label: '三级 3-1-1'
            }, {
              id: 5,
              label: '三级 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: '二级 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: '三级 3-2-1'
            }, {
              id: 7,
              label: '三级 3-2-2',
              disabled: true
            }]
          }]
        }],
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data)),
        filterText: '',
        data6: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2',
            children: [{
              id: 11,
              label: '三级 3-2-1'
            }, {
              id: 12,
              label: '三级 3-2-2'
            }, {
              id: 13,
              label: '三级 3-2-3'
            }]
          }]
        }]
      };
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      },
      loadNode1(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region' }]);
        }
        if (node.level > 1) return resolve([]);

        setTimeout(() => {
          const data = [{
            name: 'leaf',
            leaf: true
          }, {
            name: 'zone'
          }];

          resolve(data);
        }, 500);
      },
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleDragStart(node, ev) {
        console.log('drag start', node);
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.label);
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.label);
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('tree drag over: ', dropNode.label);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('tree drag end: ', dropNode && dropNode.label, dropType);
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('tree drop: ', dropNode.label, dropType);
      },
      allowDrop(draggingNode, dropNode, type) {
        if (dropNode.data.label === '二级 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('三级 3-1-1') === -1;
      },
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },
      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      }
    }
  };
</script>
