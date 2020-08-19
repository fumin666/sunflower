<template>
  <article class="article">
    <h1>Breadcrumb 面包屑</h1>
    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <s-breadcrumb separator="/">
          <s-breadcrumb-item :to="{ path: '/' }">首页</s-breadcrumb-item>
          <s-breadcrumb-item :to="{ path: '/'}">组件</s-breadcrumb-item>
          <s-breadcrumb-item :to="{ path: '/breadcrumb'}">面包屑</s-breadcrumb-item>
        </s-breadcrumb>
      </div>
      <div class="example-code" >
        <div class="description"><p>在<code>s-breadcrumb</code>中使用<code>s-breadcrumb-item</code>标签表示从首页开始的每一级。Element
                提供了一个<code>separator</code>属性，在<code>s-breadcrumb</code>标签中设置它来决定分隔符，它只能是字符串，默认为斜杠<code>/</code>。</p>
        </div>
        <pre><code>
    &lt;s-breadcrumb separator="/"&gt;
      &lt;s-breadcrumb-item :to="{ path: '/' }"&gt;首页&lt;/s-breadcrumb-item&gt;
      &lt;s-breadcrumb-item :to="{ path: '/'}"&gt;组件&lt;/s-breadcrumb-item&gt;
      &lt;s-breadcrumb-item :to="{ path: '/breadcrumb'}"&gt;面包屑&lt;/s-breadcrumb-item&gt;
    &lt;/s-breadcrumb&gt;
        </code></pre>
      </div>
    </div>
  </article>
</template>