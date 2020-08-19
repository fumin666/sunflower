<template>
  <s-table
    ref="treeTable"
    class="s-tree-table"
    :data="treeArray"
    highlight-current-row
    :height="height"
    :row-height="rowHeight"
    :useVirtual="useVirtual"
    :excess-rows="excessRows"
    @current-change="handleCurrentChange"
    @select-all="handleSelectAll"
    @selection-change="handleSelectionChange"
    :row-style="rowStyle">
    <slot name="pre"></slot>
    <s-table-column
      show-overflow-tooltip
      v-for="(value, index) in config"
      :key="index"
      :class-name="(index + 1) === treeIndex ? 's-tree-index-col' : 's-tree-noindex-col' "
      :label="value.title"
      :min-width="60"
      :width="value.width">
      <template slot-scope="scope">
        <span @click="toggleChildren(scope.row)"
          :class="'s-tree-col-icon iconfont ' + (!!scope.row.children ? (scope.row.__open ? 'icon-bottom' : 'icon-right') : 'icon-empty')"
          :style="'margin-left:' + (scope.row.__level * 24) + 'px'"></span>
        <div class="data-wrapper">{{ scope.row[value.property] }}</div>
      </template>
    </s-table-column>
    <slot></slot>
  </s-table>
</template>

<script type="text/babel">
  import Vue from 'vue'

  export default {
    name: 'sTableTree',
    data() {
      return {
        currentRow: null,
        treeArray: []
      }
    },
    mounted() {
      this.treeArray = this.parseTreeToArray(this.data)
    },
    watch: {
      data: {
        immediate: true,
        handler(val) {
          this.treeArray = this.parseTreeToArray(val)
        }
      }
    },
    methods: {
      parseTreeToArray(parent, level) {
        let tree = parent.children === undefined ? parent : parent.children
        let array = []
        if (!level) {
          level = 0
        }
        for (let i = 0; i < tree.length; i++) {
          Vue.set(tree[i], '__level', level)
          Vue.set(tree[i], '__show', this.defaultExpand)
          if (parent !== tree) {
            Vue.set(tree[i], '__parent', parent)
          }
          array.push(tree[i])
          if (tree[i].children) {
            Vue.set(tree[i], '__open', this.defaultExpand)
            this.parseTreeToArray(tree[i], level + 1).map(function (value) {
              array.push(value)
            })
          }
        }
        return array;
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        this.$emit('current-change', val)
      },
      toggleChildren(val) {
        val.__open = !val.__open
        console.log(val.__open)
      },
      rowStyle(row, index) {
//         去掉根节点checkBox
//        this.$nextTick(() => {
//          if (this.$refs.treeTable.$el.querySelectorAll('.s-checkbox')[1] !== undefined) {
//            this.$refs.treeTable.$el.querySelectorAll('.s-checkbox')[index + 1].style.display = row.__parent ? 'block' : 'none';
//            this.$refs.treeTable.$el.querySelectorAll('td:last-child .cell')[index].style.display = row.__parent ? 'block' : 'none';
//            this.$refs.treeTable.$el.querySelectorAll('tr')[index + 1].style.color = row.__parent ? '#ffffff' : '#999999';
//          }
//        });
        let display = '';
        row.__show = row.__parent ? (row.__parent.__show && row.__parent.__open) : true
        display = row.__show ? '' : 'display: none;';
        return display;
      },
//      // 选中时不选根节点
      handleSelectAll(selection) {
//        let that = this;
//        that.$refs.treeTable.clearSelection(selection);
//        selection.forEach(function (row) {
//          if (row.__parent && row.__parent !== undefined) {
//            that.$refs.treeTable.toggleRowSelection(row, true);
//          } else {
//            that.$refs.treeTable.toggleRowSelection(row, false);
//          }
//        })
        this.$emit('select-all', selection)
      },
      handleSelectionChange(selection) {
        this.$emit('selection-change', selection);
      }
    },
    props: {
      data: {
        type: Array,
        default: () => {
          return []
        }
      },
      useVirtual: {
        type: Boolean,
        default: false
      },
      height: {
        type: [String, Number],
        default: 0
      },
      rowHeight: {
        type: Number,
        default: 48
      },
      excessRows: {
        type: Number,
        default: 10
      },
      config: {
        type: Array,
        default: () => {
          return []
        }
      },
      treeIndex: {
        type: Number,
        default: 1
      },
      // 是否默认展开
      defaultExpand: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

