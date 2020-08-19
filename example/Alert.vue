<template>
  <article class="article">
    <h1>Alert 警告</h1>
    <p>基本上用于状态的说明</p>
    <h3>基础用法</h3>
    <p>非浮动的页面说明,不会自动消失</p>
    <div class="example">
      <div class="example-demo">
        <s-alert title="成功！表示成功之类的信息" type="success"></s-alert>
        <s-alert title="提示！表示提示之类的信息" type="info"></s-alert>
        <s-alert title="警告！表示警告之类的信息" type="warning"></s-alert>
        <s-alert title="错误！表示错误之类的信息" type="error"></s-alert>
      </div>
      <example-code>
        <textarea>
          <s-alert title="成功！表示成功之类的信息" type="success"></s-alert>
          <s-alert title="提示！表示提示之类的信息" type="info"></s-alert>
          <s-alert title="警告！表示警告之类的信息" type="warning"></s-alert>
          <s-alert title="错误！表示错误之类的信息" type="error"></s-alert>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>
    <h3>自定义关闭按钮 取消icon</h3>
    <div class="example">
      <div class="example-demo">
        <s-alert title="取消关闭" type="success" :closable="false"></s-alert>
        <s-alert title="自定义" type="info" close-text="来呀"></s-alert>
        <s-alert title="设置回调" type="warning" @close="hello"></s-alert>
        <s-alert title="没有icon" type="error" :showIcon="false"></s-alert>
      </div>
      <example-code>
        <textarea>
          <s-alert title="取消关闭" type="success" :closable="false"></s-alert>
          <s-alert title="自定义" type="info" close-text="来呀"></s-alert>
          <s-alert title="设置回调" type="warning" @close="hello"></s-alert>
          <s-alert title="没有icon" type="error" :showIcon="false"></s-alert>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>
    <h3>props</h3>
    <s-tb>
      <s-tb-i title="title" desc="标题，必选" type="string" value="-" init="-"></s-tb-i>
      <s-tb-i title="type" desc="主题" type="string" value="success|info|warning|error" init="Info"></s-tb-i>
    </s-tb>

  </article>
</template>
<script>
 export default {
   methods: {
     hello() {
       alert('say hello!')
     }
   }
 }
</script>