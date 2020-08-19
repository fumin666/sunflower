<template>
    <div class="s-role-collapse-item" :class="[{'is-active': isActive}]">
      <div class="s-role-collapse-item-header" @click="handleHeaderClick">
        <s-checkbox v-model="checkAll" :disabled="true"></s-checkbox>
        <span class="s-role-collapse-title">{{roleList.menuName}}</span>
        <i class="iconfont icon-right" v-if="roleList.childMenu.length"></i>
      </div>
      <collapse-transition>
        <ul class="s-role-collapse-item-wrap" v-show="isActive">
          <li v-for="(item,index) in roleList.childMenu" :key="index" class="replay">
            <span v-if="index==roleList.childMenu.length-1" class="last_li"></span>
            <s-role-collapse-item class="collapseitem" :role-list="item"></s-role-collapse-item>
          </li>
        </ul>
      </collapse-transition>
    </div>
</template>
<script>
  import Emitter from '../extra/mixins/emitter';
  import CollapseTransition from '../extra/transitions/collapse-transition';
  import SCheckbox from '../checkbox/Checkbox'
  export default {
    name: 's-role-collapse-item',
    componentName: 'SRoleCollapseItem',
    mixins: [Emitter],
    components: {
      SCheckbox, 'collapse-transition': CollapseTransition
    },
    data() {
      return {
        checkAll: true,
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        activeNames:[]
      };
    },
    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      roleList: [Array, Object]
    },
    computed: {
      isActive() {
        return this.activeNames.indexOf(this.name) === -1;
        // return this.$parent.activeNames.indexOf(this.name) > -1;
      }
    },
    created() {
      this.$on('update', (val) => {
        this.activeNames=JSON.parse(val);
        this.broadcast('SRoleCollapseItem','update',val);
      });
    },
    watch: {
      'isActive'(value) {
      }
    },
    methods: {
      handleHeaderClick() {
        this.dispatch('SRoleCollapse', 'item-click', this);
      }
    }
  };
</script>
<style>
.collapseitem {
  border-left:unset;
}
.collapseitem .s-role-collapse-item-header{
  padding-left:unset
}
.replay:before{
  margin-top: 15px !important;
}
.replay .s-role-collapse-item-wrap{
  margin-left: 8px;
}
.collapseitem .replay:before {
  left: 10px !important;
}
</style>
