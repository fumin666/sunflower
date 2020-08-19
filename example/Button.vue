<template>
  <article class="article">
    <h1>Button 按钮</h1>

    <h3>操作按钮</h3>
    <div class="example">
      <div class="example-demo">
        <s-button title="普通按钮">普通按钮</s-button>
        <s-button type="default " title="取消按钮">取消按钮</s-button>
      </div>
      <example-code>
        <textarea>
        <s-button title="普通按钮">普通按钮</s-button>
        <s-button type="cancel" title="取消按钮">取消按钮</s-button>
        </textarea>
        <pre><code class="xml"></code></pre>
      </example-code>
    </div>

    <h3>禁用按钮</h3>
    <div class="example">
      <div class="example-demo">
        <s-button disabled title="禁用按钮">禁用按钮</s-button>
      </div>
      <example-code>
        <textarea>
      <s-button disabled title="禁用按钮">禁用按钮</s-button>
        </textarea>
        <pre><code class="xml"></code></pre>
      </example-code>
    </div>

    <h3>图标按钮</h3>
    <div class="example">
      <div class="example-demo">
        <s-button icon="set" title="设置"></s-button>
        <s-button icon="magnifier" title="搜索"></s-button>
      </div>
      <example-code>
        <textarea>
      <s-button icon="set" title="设置"></s-button>
      <s-button icon="magnifier" title="搜索"></s-button>
        </textarea>
        <pre><code class="xml"></code></pre>
      </example-code>
    </div>

    <h3>带图标按钮</h3>
    <div class="example">
      <div class="example-demo">
        <s-button icon="plus" title="添加">添加</s-button>
        <s-button icon="edit" title="编辑">编辑</s-button>
        <s-button icon="correct" title="成功">成功</s-button>
        <s-button icon="refreshC" title="更新">更新</s-button>
        <s-button icon="delete" title="删除">删除</s-button>
      </div>
      <example-code>
        <textarea>
      <s-button icon="plus" title="添加">添加</s-button>
      <s-button icon="edit" title="编辑">编辑</s-button>
      <s-button icon="correct" title="成功">成功</s-button>
      <s-button icon="refreshC" title="更新">更新</s-button>
      <s-button icon="delete" title="删除">删除</s-button>
      </textarea>
        <pre><code class="xml"></code></pre>
      </example-code>
    </div>

    <h3>点击事件</h3>
    <div class="example">
      <div class="example-demo">
        <s-button @click="myFun" :title="text">被点击了 {{ text }} 次</s-button>
      </div>
      <example-code>
        <textarea v-pre>
      <s-button @click="myFun" :title="text">被点击了 {{ text }} 次</s-button>
      <script>
        export default {
          data() {
            return {
              text: 0
            }
          },
          methods: {
            myFun(event) {
              this.text ++;
              console.lolg(event.target.tagName);
            }
          }
        }
      </script>
        </textarea>
        <pre><code class="xml"></code></pre>
      </example-code>
    </div>

    <h3>不同尺寸</h3>
    <div class="desc">默认为小型按钮</div>
    <div class="example">
      <div class="example-demo">
        <s-button size="large" title="大型按钮">大型按钮</s-button>
        <s-button size="normal" title="正常按钮">正常按钮</s-button>
        <s-button title="小型按钮">小型按钮</s-button>
        <s-button size="mini" title="超小按钮">超小按钮</s-button>
      </div>
      <example-code>
        <textarea>
    <s-button size="large" title="大型按钮">大型按钮</s-button>
    <s-button size="normal" title="正常按钮">正常按钮</s-button>
    <s-button title="小型按钮">小型按钮</s-button>
    <s-button size="mini" title="超小按钮">超小按钮</s-button>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>props</h3>
    <s-tb>
      <s-tb-i title="type" desc="按钮类型" type="String" value="default | cancel" init="default"></s-tb-i>
      <s-tb-i title="title" desc="按钮的title属性，hover时的提示文字" type="String | Number" value="-" init="-"></s-tb-i>
      <s-tb-i title="icon" desc="按钮图标" type="String" value="见 Icon 组件" init="-"></s-tb-i>
      <s-tb-i title="disabled" desc="按钮是否可用" type="Boolean" value=" - | disabled" init="-"></s-tb-i>
      <s-tb-i
        title="size"
        desc="按钮尺寸"
        type="String"
        value="large | normal | mini"
        init="-">
      </s-tb-i>
    </s-tb>

  </article>
</template>

<script>
  export default {
    data() {
      return {
        text: 0
      }
    },
    methods: {
      myFun(event) {
        this.text ++;
        console.log(event.target.tagName);
      }
    }
  }
</script>