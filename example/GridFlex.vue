<template>
  <article class="article">

    <h1>GridFLex</h1>
    <p>基于flex的网格布局</p>

    <h3>横向布局</h3>
    <div class="example">
      <div class="example-demo">
        <div style="height: 200px; width: 100%;">
          <s-grid direction="row">
            <s-grid-item :flex="8">felx: 8</s-grid-item>
            <s-grid-item :flex="8">flex: 8</s-grid-item>
            <s-grid-item :flex="8">flex: 8</s-grid-item>
          </s-grid>
        </div>
      </div>
      <example-code>
        <textarea>
    <div style="height: 200px; width: 100%;">
      <s-grid direction="row">
        <s-grid-item :flex="8">felx: 8</s-grid-item>
        <s-grid-item :flex="8">flex: 8</s-grid-item>
        <s-grid-item :flex="8">flex: 8</s-grid-item>
      </s-grid>
    </div>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>纵向布局</h3>
    <div class="example">
      <div class="example-demo">
        <div style="height: 200px; width: 100%;">
          <s-grid direction="column">
            <s-grid-item :flex="8">flex: 8</s-grid-item>
            <s-grid-item :flex="8">flex: 8</s-grid-item>
            <s-grid-item :flex="8">flex: 8</s-grid-item>
          </s-grid>
        </div>
      </div>
      <example-code>
        <textarea>
    <div style="height: 200px; width: 100%;">
      <s-grid direction="column">
        <s-grid-item :flex="8">flex: 8</s-grid-item>
        <s-grid-item :flex="8">flex: 8</s-grid-item>
        <s-grid-item :flex="8">flex: 8</s-grid-item>
      </s-grid>
    </div>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>
    
    <h3>s-grid</h3>
    <s-tb>
      <s-tb-i title="direction" desc="" type="string" value="row | column" init="row" />
    </s-tb>
    
    <h3>s-grid-item</h3>
    <s-tb>
      <s-tb-i title="flex" desc="" type="number" value="" init="1" />
    </s-tb>
  </article>
</template>

<script>
  export default {
    name: 'SGridFlex'
  }
</script>

<style>
  .example .s-grid-item {
    border: 1px dashed #7a8b99;
  }
</style>