<template>
  <tr>
    <td>{{ title }}</td>
    <td>{{ desc }}</td>
    <td>{{ type }}</td>
    <td>{{ value }}</td>
    <td>{{ init }}</td>
  </tr>
</template>

<script>
  export default {
    name: "s-tb-i",

    props: {
      title: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      value: {
        type: String,
        default: "-"
      },
      init: {
        type: String,
        default: "-"
      }
    }
  }
</script>

<style>

</style>