<template>
  <article class="article">
    <h1>Badge 标记</h1>
    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <s-badge :value="12" class="item">
          <s-button size="small">评论</s-button>
        </s-badge>
        <s-badge :value="3" class="item">
          <s-button size="small">回复</s-button>
        </s-badge>
      </div>
      <div class="example-code">
    <pre><code>
  &lt;s-badge :value="12" class="item"&gt;
    &lt;s-button size="small"&gt;评论&lt;/s-button&gt;
  &lt;/s-badge&gt;
  &lt;s-badge :value="3" class="item"&gt;
    &lt;s-button size="small"&gt;回复&lt;/s-button&gt;
  &lt;/s-badge&gt;
    </code></pre>
      </div>
    </div>

    <h3> 最大值</h3>
    <div class="example">
      <div class="example-demo">
        <s-badge :value="200" :max="99" class="item">
          <s-button size="small">评论</s-button>
        </s-badge>
        <s-badge :value="100" :max="10" class="item">
          <s-button size="small">回复</s-button>
        </s-badge>
      </div>
      <div class="example-code">
        <div data-v-383bee61="" class="highlight">
            <pre data-v-383bee61=""><code data-v-383bee61="" class="hljs language-html">  <span data-v-383bee61=""
                                                                                                class="hljs-tag">&lt;<span
              data-v-383bee61="" class="hljs-name">s-badge</span> <span data-v-383bee61=""
                                                                        class="hljs-attr">:value</span>=<span
              data-v-383bee61="" class="hljs-string">"200"</span> <span data-v-383bee61="" class="hljs-attr">:max</span>=<span
              data-v-383bee61="" class="hljs-string">"99"</span> <span data-v-383bee61="" class="hljs-attr">class</span>=<span
              data-v-383bee61="" class="hljs-string">"item"</span>&gt;</span>
    <span data-v-383bee61="" class="hljs-tag">&lt;<span data-v-383bee61="" class="hljs-name">s-button</span> <span
      data-v-383bee61="" class="hljs-attr">size</span>=<span data-v-383bee61=""
                                                             class="hljs-string">"small"</span>&gt;</span>评论<span
                data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61="" class="hljs-name">s-button</span>&gt;</span>
  <span data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61="" class="hljs-name">s-badge</span>&gt;</span>
  <span data-v-383bee61="" class="hljs-tag">&lt;<span data-v-383bee61="" class="hljs-name">s-badge</span> <span
    data-v-383bee61="" class="hljs-attr">:value</span>=<span data-v-383bee61="" class="hljs-string">"100"</span> <span
    data-v-383bee61="" class="hljs-attr">:max</span>=<span data-v-383bee61="" class="hljs-string">"10"</span> <span
    data-v-383bee61="" class="hljs-attr">class</span>=<span data-v-383bee61=""
                                                            class="hljs-string">"item"</span>&gt;</span>
    <span data-v-383bee61="" class="hljs-tag">&lt;<span data-v-383bee61="" class="hljs-name">s-button</span> <span
      data-v-383bee61="" class="hljs-attr">size</span>=<span data-v-383bee61=""
                                                             class="hljs-string">"small"</span>&gt;</span>回复<span
                data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61="" class="hljs-name">s-button</span>&gt;</span>
  <span data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61="" class="hljs-name">s-badge</span>&gt;</span>

  <span data-v-383bee61="" class="hljs-tag">&lt;<span data-v-383bee61="" class="hljs-name">style</span>&gt;</span><span
                data-v-383bee61="" class="css">
    <span data-v-383bee61="" class="hljs-selector-class">.item</span> {
      <span data-v-383bee61="" class="hljs-attribute">margin-top</span>: <span data-v-383bee61="" class="hljs-number">10px</span>;
      <span data-v-383bee61="" class="hljs-attribute">margin-right</span>: <span data-v-383bee61="" class="hljs-number">40px</span>;
    }
  </span><span data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61=""
                                                              class="hljs-name">style</span>&gt;</span>
  </code></pre>
        </div>
      </div>
    </div>

    <h3> 自定义内容</h3>
    <div class="example">
      <div class="example-demo">
        <s-badge value="new" class="item">
          <s-button size="small">评论</s-button>
        </s-badge>
        <s-badge value="hot" class="item">
          <s-button size="small">回复</s-button>
        </s-badge>
      </div>
      <div class="example-code">
        <div data-v-383bee61="" class="highlight">
          <pre data-v-383bee61="">  <code data-v-383bee61="" class="hljs language-html"><span data-v-383bee61=""
                                                                                              class="hljs-tag">&lt;<span
            data-v-383bee61="" class="hljs-name">s-badge</span> <span data-v-383bee61="" class="hljs-attr">value</span>=<span
            data-v-383bee61="" class="hljs-string">"new"</span> <span data-v-383bee61="" class="hljs-attr">class</span>=<span
            data-v-383bee61="" class="hljs-string">"item"</span>&gt;</span>
    <span data-v-383bee61="" class="hljs-tag">&lt;<span data-v-383bee61="" class="hljs-name">s-button</span> <span
      data-v-383bee61="" class="hljs-attr">size</span>=<span data-v-383bee61=""
                                                             class="hljs-string">"small"</span>&gt;</span>评论<span
              data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61=""
                                                             class="hljs-name">s-button</span>&gt;</span>
  <span data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61="" class="hljs-name">s-badge</span>&gt;</span>
  <span data-v-383bee61="" class="hljs-tag">&lt;<span data-v-383bee61="" class="hljs-name">s-badge</span> <span
    data-v-383bee61="" class="hljs-attr">value</span>=<span data-v-383bee61="" class="hljs-string">"hot"</span> <span
    data-v-383bee61="" class="hljs-attr">class</span>=<span data-v-383bee61=""
                                                            class="hljs-string">"item"</span>&gt;</span>
    <span data-v-383bee61="" class="hljs-tag">&lt;<span data-v-383bee61="" class="hljs-name">s-button</span> <span
      data-v-383bee61="" class="hljs-attr">size</span>=<span data-v-383bee61=""
                                                             class="hljs-string">"small"</span>&gt;</span>回复<span
              data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61=""
                                                             class="hljs-name">s-button</span>&gt;</span>
  <span data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61="" class="hljs-name">s-badge</span>&gt;</span>

  <span data-v-383bee61="" class="hljs-tag">&lt;<span data-v-383bee61="" class="hljs-name">style</span>&gt;</span><span
              data-v-383bee61="" class="css">
    <span data-v-383bee61="" class="hljs-selector-class">.item</span> {
      <span data-v-383bee61="" class="hljs-attribute">margin-top</span>: <span data-v-383bee61="" class="hljs-number">10px</span>;
      <span data-v-383bee61="" class="hljs-attribute">margin-right</span>: <span data-v-383bee61="" class="hljs-number">40px</span>;
    }
</span><span data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61="" class="hljs-name">style</span>&gt;</span>
</code></pre>
        </div>
      </div>
    </div>

    <h3> 小红点</h3>
    <div class="example">
      <div class="example-demo">
        <s-badge is-dot class="item">数据查询</s-badge>
        <s-badge is-dot class="item">
          <s-button class="share-button" icon="share">查询</s-button>
        </s-badge>
      </div>
      <div class="example-code">
        <div data-v-383bee61="" class="highlight"><pre data-v-383bee61=""><code data-v-383bee61=""
                                                                                class="hljs language-html">  <span
          data-v-383bee61="" class="hljs-tag">&lt;<span data-v-383bee61="" class="hljs-name">s-badge</span> <span
          data-v-383bee61="" class="hljs-attr">is-dot</span> <span data-v-383bee61=""
                                                                   class="hljs-attr">class</span>=<span
          data-v-383bee61="" class="hljs-string">"item"</span>&gt;</span>数据查询<span data-v-383bee61="" class="hljs-tag">&lt;/<span
          data-v-383bee61="" class="hljs-name">s-badge</span>&gt;</span>
  <span data-v-383bee61="" class="hljs-tag">&lt;<span data-v-383bee61="" class="hljs-name">s-badge</span> <span
    data-v-383bee61="" class="hljs-attr">is-dot</span> <span data-v-383bee61="" class="hljs-attr">class</span>=<span
    data-v-383bee61="" class="hljs-string">"item"</span>&gt;</span>
    <span data-v-383bee61="" class="hljs-tag">&lt;<span data-v-383bee61="" class="hljs-name">s-button</span> <span
      data-v-383bee61="" class="hljs-attr">class</span>=<span data-v-383bee61=""
                                                              class="hljs-string">"share-button"</span> <span
      data-v-383bee61="" class="hljs-attr">icon</span>=<span data-v-383bee61="" class="hljs-string">"share"</span> <span
      data-v-383bee61="" class="hljs-attr">type</span>=<span data-v-383bee61="" class="hljs-string">"primary"</span>&gt;</span><span
            data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61=""
                                                           class="hljs-name">s-button</span>&gt;</span>
  <span data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61="" class="hljs-name">s-badge</span>&gt;</span>

  <span data-v-383bee61="" class="hljs-tag">&lt;<span data-v-383bee61="" class="hljs-name">style</span>&gt;</span><span
            data-v-383bee61="" class="css">
    <span data-v-383bee61="" class="hljs-selector-class">.item</span> {
      <span data-v-383bee61="" class="hljs-attribute">margin-top</span>: <span data-v-383bee61="" class="hljs-number">10px</span>;
      <span data-v-383bee61="" class="hljs-attribute">margin-right</span>: <span data-v-383bee61="" class="hljs-number">40px</span>;
    }
  </span><span data-v-383bee61="" class="hljs-tag">&lt;/<span data-v-383bee61=""
                                                              class="hljs-name">style</span>&gt;</span>
</code></pre>
        </div>
      </div>
    </div>

  </article>
</template>

<script>
  import Button from "../src/components/button";

  export default {
    data() {
      return {}
    },
    components: {}
  }
</script>