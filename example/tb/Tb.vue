<template>
  <table class="s-tb">
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
    <slot></slot>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "s-tb"
  }
</script>

<style>
  .s-tb {
    width: 100%;
    background-color: #fff;
    color: #657180;
    font-size: 14px;
    text-align: left;
    border-collapse: collapse;
    margin-bottom: 24px;
    border: 1px solid #d7dde4;
  }

  .s-tb th {
    white-space: nowrap;
    padding: 8px 10px;
    border: 1px solid #d7dde4;
    background: #f7f7f7;
  }

  .s-tb td {
    padding: 8px 10px;
    border: 1px solid #d7dde4;
  }
</style>