<template>
  <li :class="[prefixCls + '-item-group']">
    <div :class="[prefixCls + '-item-group-title']">{{ title }}</div>
    <ul><slot></slot></ul>
  </li>
</template>

<script>
  const prefixName = 's-menu';
  export default {
    name: 's-menu-group',
    componentName: 'SMenuGroup',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        prefixCls: prefixName
      };
    }
  };
</script>

