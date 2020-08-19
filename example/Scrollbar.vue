<template>
  <article class="article">
    <h1>Scrollbar</h1>

    <h3>WrapClass</h3>
    <div class="desc">可以通过 wrap-class 添加类，通过此类设置样式；</div>
    <div class="example">
      <div class="example-demo">
        <s-scrollbar wrap-class="myHeight">
          <div class="item" v-for="o in year">{{ o }}</div>
        </s-scrollbar>
      </div>
      <example-code>
        <textarea v-pre>
    <s-scrollbar wrap-class="myHeight">
      <div class="item" v-for="o in year">{{ o }}</div>
    </s-scrollbar>
    <script>
      let year = [];
      for (let i=2000; i<2020; i++) {
        year.push(i);
      }
      export default {
        data() {
          return {
            year
          }
        }
      }
    </script>
    <style>
      .myHeight {
        max-height: 200px;
      }
      .myHeight div {
        text-align: center;
        line-height: 2;
      }
      .myHeight div.item {
        text-align: center;
        line-height: 2;
      }
      .myHeight div.item:hover {
        background: rgba(32, 160, 255, 0.4)
      }
    </style>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>WrapStyle</h3>
    <div class="desc">可以通过 wrap-style 添加样式，注意最后必须加分号。</div>
    <div class="example">
      <div class="example-demo">
        <s-scrollbar wrap-style="height: 200px;">
          <div class="item" v-for="o in year">{{ o }}</div>
        </s-scrollbar>
      </div>
      <example-code>
        <textarea v-pre>
    <s-scrollbar wrap-style="height: 200px;">
      <div class="item" v-for="o in year">{{ o }}</div>
    </s-scrollbar>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>Go</h3>
    <div class="desc">用来展示单列数据，超出设定高度后，滚动显示，可选择是否显示操作按钮。</div>
    <div class="example">
      <div class="example-demo">
        <s-go
          title="测试"
          icon="set"
          :body-class="bodyClass"
          :data="year"
          @config="config">
        </s-go>
      </div>
      <example-code>
        <textarea>
    <s-go
      title="测试"
      icon="set"
      :body-class="bodyClass"
      :data="year"
      @config="config">
    </s-go>
    <script>
      let year = [];
      for (let i = 2000; i < 2020; i++) {
        year.push(i);
      }
      export default {
        data() {
          return {
            year
          }
        },
        methods: {
          config() {
            this.$message('点击了设置');
          }
        }
      }

    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>Go</h3>
    <div class="desc">用来展示单列数据，超出设定高度后，滚动显示，可选择是否显示操作按钮。</div>
    <div class="example">
      <div class="example-demo">
        <s-go
          title="测试"
          icon="set"
          :body-class="bodyClass"
          :data="data"
          :prop="arrProp"
          @config="config">
        </s-go>
      </div>
      <example-code>
        <textarea>
    <s-go
      title="测试"
      icon="set"
      :body-class="bodyClass"
      :data="year"
      :prop="arrProp"
      @config="config">
    </s-go>
    <script>
      let data = [];
      for (let i = 2000; i < 2020; i++) {
        data.push({
          id: i,
          name: 'ppxia' + i
        });
      }
      export default {
        data() {
          return {
            data,
            arrProp: ['id', 'name']
          }
        },
        methods: {
          config() {
            this.$message('点击了设置');
          }
        }
      }

    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <s-tb>
      <s-tb-i
        title="title"
        desc="【必填】标题"
        type="String"
        value="-"
        init="-">
      </s-tb-i>
      <s-tb-i
        title="align"
        desc="【可选】标题位置，默认居中"
        type="String"
        value="left | center | right"
        init="center">
      </s-tb-i>
      <s-tb-i
        title="icon"
        desc="【可选】按钮类名，不写时，不显示按钮"
        type="String"
        value="-"
        init="-">
      </s-tb-i>
      <s-tb-i
        title="body-class"
        desc="【可选】内容的高度由此类控制，不写时，类名为 s-go-height，高度为200px；需要自定义高度时，自定义类名并指定高度，不要重载 s-go-height"
        type="String"
        value="-"
        init="s-go-height">
      </s-tb-i>
      <s-tb-i
        title="data"
        desc="【可选】内容区域的数据，默认为空数组"
        type="Array"
        value="-"
        init="[]">
      </s-tb-i>
      <s-tb-i
        title="prop"
        desc="【可选】需要渲染数据的属性名，不写时，将渲染 data 中的每个元素，填写时，将渲染 data.prop 的数据，格式为prop1(prop2:prop3:prop4...)"
        type="Array"
        value="-"
        init="-">
      </s-tb-i>
    </s-tb>
  </article>
</template>

<script>
  let year = [];
  let data = [];
  for (let i=2000; i<2020; i++) {
    year.push(i);
    data.push({
      id: i,
      name: 'ppxia' + i
    });
  }

  export default {
    data() {
      return {
        year,
        data,
        bodyClass: 'demo-body-class',
        arrProp: ['id', 'name']
      }
    },
    methods: {
      config() {
        this.$message('点击了设置');
      }
    }
  }
</script>

<style>
  .myHeight {
    max-height: 200px;
  }
  .myHeight div {
    text-align: center;
    line-height: 2;
  }
  .myHeight div.item {
    text-align: center;
    line-height: 2;
  }
  .myHeight div.item:hover {
    background: rgba(32, 160, 255, 0.4)
  }
  .demo-body-class {
    height: 200px;
  }
</style>