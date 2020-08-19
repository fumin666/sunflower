<template>
  <div class="container">
    <nav>
      <ul class="menu-left">
        <router-link to="/echarts/introduce" tag="li">介绍</router-link>
        <router-link to="/echarts/ring" tag="li">环形图</router-link>
        <router-link to="/echarts/statring" tag="li">统计环图</router-link>
        <router-link to="/echarts/pie" tag="li">标准饼图</router-link>
        <router-link to="/echarts/gauge" tag="li">仪表图</router-link>
        <router-link to="/echarts/bar" tag="li">柱状图</router-link>
        <router-link to="/echarts/line" tag="li">折线图</router-link>
        <router-link to="/echarts/area" tag="li">折线区域图</router-link>
        <router-link to="/echarts/charts" tag="li">新版</router-link>
      </ul>
    </nav>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

</script>