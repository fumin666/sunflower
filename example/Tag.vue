<template>
  <article class="article">
    <h1>Tag标签</h1>
    <p>用于标记和选择</p>
    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <s-tag>标签一</s-tag>
        <s-tag type="gray">标签二</s-tag>
        <s-tag type="primary">标签三</s-tag>
        <s-tag type="tpprimary">标签三</s-tag>
        <s-tag type="success">标签四</s-tag>
        <s-tag type="tpsuccess">标签四</s-tag>
        <s-tag type="warning">标签五</s-tag>
        <s-tag type="tpwarning">标签五</s-tag>
        <s-tag type="danger">标签六</s-tag>
        <s-tag type="tpdanger">标签六</s-tag>
      </div>
      <example-code>
        <textarea>
          &lt;s-tag &gt;标签一&lt;/s-tag&gt;
          &lt;s-tag type=&quot;gray&quot;&gt;标签二&lt;/s-tag&gt;
          &lt;s-tag type=&quot;primary&quot;&gt;标签三&lt;/s-tag&gt;
          &lt;s-tag type=&quot;tpprimary&quot;&gt;标签三&lt;/s-tag&gt;
          &lt;s-tag type=&quot;success&quot;&gt;标签四&lt;/s-tag&gt;
          &lt;s-tag type=&quot;warning&quot;&gt;标签五&lt;/s-tag&gt;
          &lt;s-tag type=&quot;danger&quot;&gt;标签六&lt;/s-tag&gt;
        </textarea>
        <div class="description">
          <p>由<code>type</code>属性来选择tag的类型，也可以通过<code>color</code>属性来自定义背景色。透明标签只需要在前面加tp就行</p>
        </div>
        <pre><code>
        </code></pre>
      </example-code>
    </div>

    <h3>可移除标签</h3>
    <div class="example">
      <div class="example-demo">
        <s-tag
          v-for="tag in tags"
          :closable="true"
          :type="tag.type"
          :key="tag.name">
          {{tag.name}}
        </s-tag>
      </div>
      <example-code>
        <textarea>
          &lt;s-tag
            v-for=&quot;tag in tags &quot;
            :closable=&quot;true&quot;
            :type=&quot;tag.type&quot;
            :key=&quot;tag.name&quot;&gt;
             &#123; &#123;tag.name&#125; &#125;
          &lt;/s-tag&gt;
        </textarea>
        <div class="description">
          <p>设置<code>closable</code>属性可以定义一个标签是否可移除。
            默认的标签移除时会附带渐变动画，如果不想使用，可以设置<code>disable-transitions</code>属性，
            它接受一个<code>Boolean</code>，true 为关闭。</p>
        </div>
        <pre><code>
        </code></pre>
      </example-code>
    </div>

    <h3> 动态编辑标签</h3>
    <p>动态编辑标签可以通过点击标签关闭按钮后触发的<code>close</code>事件来实现</p>
    <div class="example">
      <div class="example-demo">
        <s-tag
          :key="tag"
          v-for="tag in dynamicTags"
          :closable="true"
          :close-transition="false"
          @close="handleClose(tag)">
            {{tag}}
        </s-tag>
        <s-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="mini"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm">
        </s-input>

        <s-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</s-button>
      </div>
      <example-code>
        <textarea>
          &lt;s-tag
            :key=&quot;tag&quot;
            v-for=&quot;tag in  dynamicTags &quot;
            :closable=&quot;true&quot;
            :close-transition=&quot;false&quot;
            :@close=&quot;handleClose(tag)&quot;&gt;
            &#123; &#123;tag&#125; &#125;
          &lt;/s-tag&gt;
        </textarea>
        <pre><code>
        </code></pre>
      </example-code>
    </div>

    <h3>不同尺寸</h3>
    <p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
    <div class="example">
      <div class="example-demo">
        <s-tag closable>默认标签</s-tag>
        <s-tag size="medium" closable>中等标签</s-tag>
        <s-tag size="small" closable>小型标签</s-tag>
        <s-tag size="mini" closable>超小标签</s-tag>
      </div>
      <example-code>
        <textarea>
          <s-tag closable>默认标签</s-tag>
          <s-tag size="medium" closable>中等标签</s-tag>
          <s-tag size="small" closable>小型标签</s-tag>
          <s-tag size="mini" closable>超小标签</s-tag>
        </textarea>
        <div class="description">
          <p>额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p>
        </div>
        <pre><code>
        </code></pre>
      </example-code>
    </div>

    <h3 id="attributes"> Attributes</h3>
    <s-tb>
      <s-tb-i title="type" desc="主题" type="string" value="primary/gray/success/warning/danger" init="primary"></s-tb-i>
      <s-tb-i title="closable" desc="是否可关闭" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="disable-transitions" desc="是否禁用渐变动画" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="hit" desc="是否有边框描边" type="boolean" value="-" init="false"></s-tb-i>
      <s-tb-i title="color" desc="背景色" type="string" value="-" init="false"></s-tb-i>
      <s-tb-i title="size" desc="尺寸" type="string" value="medium / small / mini" init="false"></s-tb-i>
    </s-tb>

    <h3 id="events"> Events</h3>
    <table class="table">
      <thead>
        <tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr>
      </thead>
      <tbody>
        <tr><td>close</td><td>关闭tag时触发的事件</td><td>—</td></tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  export default {
    data(){
      return {
        tags: [
          {name: '标签一', type: ''},
          {name: '标签二', type: 'gray'},
          {name: '标签三', type: 'primary'},
          {name: '标签四', type: 'success'},
          {name: '标签五', type: 'warning'},
          {name: '标签六', type: 'danger'}
        ],
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      }
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    },
  }
</script>