<template>
  <article class="article">
    <h1>CardDiy</h1>

    <h3>显示echart图</h3>
    <p>s-card-diy 会占满容器</p>
    <div class="example">
      <div class="example-demo">
        <div :style="containerStyle">
          <s-card-diy
            title="饼图"
            :more-click="handleMore">
            <s-chart :chart="chart"></s-chart>
          </s-card-diy>
        </div>
      </div>
      <example-code>
        <textarea v-pre>
    <template>
      <div :style="containerStyle">
        <s-card-diy
          title="饼图"
          :more-click="handleMore">
          <s-chart :chart="chart"></s-chart>
        </s-card-diy>
      </div>
    </template>
    <script>
      export default {
        data() {
          return {
            containerStyle: {
              width: '600px',
              height: '300px'
            },
            chart: {
              name: 'chart',
              type: 'pieChart',
              width: '100%',
              height: '100%',
              data: [
                {name: '直接访问', value: 335},
                {name: '邮件营销', value: 310},
                {name: '联盟广告', value: 234},
                {name: '视频广告', value: 135},
                {name: '搜索引擎', value: 248},
                {name: '测试', value: 548}
              ]
            }
          }
        },
        methods: {
          handleMore() {
            this.$message('点击了更多');
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>内容可滚动</h3>
    <p>此示例展示了一个宽度为800px的表格，通过 <strong>show-scrollbar</strong> 可实现 card 的内容区滚动。通过 <strong>show-more</strong> 控制更多按钮的显示。</p>
    <div class="example">
      <div class="example-demo">
        <div :style="containerStyle">
          <s-card-diy
            title="系统登录日志"
            :more-click="handleMore"
            :show-scrollbar="true"
            :show-more="false">
            <s-table-page
              :data="list"
              style="width: 800px">
              <s-table-column
                label="时间"
                prop="time"/>
              <s-table-column
                label="账号"
                prop="account"/>
              <s-table-column
                label="IP"
                prop="ip"/>
            </s-table-page>
          </s-card-diy>
        </div>
      </div>
      <example-code>
        <textarea v-pre>
    <template>
      <div :style="containerStyle">
        <s-card-diy
          title="系统登录日志"
          :more-click="handleMore"
          :show-scrollbar="true"
          :show-more="false">
          <s-table-page
            :data="list"
            style="width: 800px">
            <s-table-column
              label="时间"
              prop="time"/>
            <s-table-column
              label="账号"
              prop="account"/>
            <s-table-column
              label="IP"
              prop="ip"/>
          </s-table-page>
        </s-card-diy>
      </div>
    </template>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <s-tb>
      <s-tb-i title="title" desc="标题" type="string" value="-" init="-" />
      <s-tb-i title="show-more" desc="是否显示右上角的更多" type="boolean" value="true | false" init="true" />
      <s-tb-i title="more-text" desc="右上角显示的文字" type="string" value="-" init="更多" />
      <s-tb-i title="more-click" desc="右上角点击事件" type="function" value="-" init="null" />
      <s-tb-i title="show-scrollbar" desc="是否显示滚动条" type="boolean" value="-" init="false" />
    </s-tb>


  </article>
</template>

<script>
  export default {
    data() {
      return {
        containerStyle: {
          width: '600px',
          height: '300px'
        },
        list: [],
        show: true,
        chart: {
          name: 'chart',
          type: 'pieChart',
          width: '100%',
          height: '100%',
          data: [
            {name: '直接访问', value: 335},
            {name: '邮件营销', value: 310},
            {name: '联盟广告', value: 234},
            {name: '视频广告', value: 135},
            {name: '搜索引擎', value: 248},
            {name: '测试', value: 548}
          ]
        }
      }
    },

    created() {
      for (let i = 0; i < 12; i++) {
        this.list.push({ time: '2018-11-26 17:35:39', account: 'superadmin', ip: '192.168.212.60' });
      }
    },

    methods: {
      handleMore() {
        this.$message('点击了更多');
      }
    }
  }
</script>

<style>

</style>