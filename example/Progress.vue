<template>
  <article class="article">
    <h1> Progress 进度条</h1>
    <p>用于展示操作进度，告知用户当前状态和预期。</p>
    <h3> 线形进度条 — 百分比外显</h3>
    <div class="example">
      <div class="example-demo">
        <s-progress :percentage="0"></s-progress>
        <s-progress :percentage="20"></s-progress>
        <s-progress :percentage="60" status="warning"></s-progress>
        <s-progress :percentage="80" status="error"></s-progress>
        <s-progress :percentage="90" status="disabled"></s-progress>
        <s-progress :percentage="100" status="success"></s-progress>
      </div>
      <example-code>
        <textarea>
          <s-progress :percentage="0"></s-progress>
          <s-progress :percentage="20"></s-progress>
          <s-progress :percentage="60" status="warning"></s-progress>
          <s-progress :percentage="80" status="error"></s-progress>
          <s-progress :percentage="90" status="disabled"></s-progress>
          <s-progress :percentage="100" status="success"></s-progress>
        </textarea>
        <div class="description">
          <p>Progress 组件设置<code>percentage</code>属性即可，表示进度条对应的百分比，<strong>必填</strong>，必须在 0-100。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3> 线形进度条 — 百分比内显</h3>
    <p>百分比不占用额外控件，适用于文件上传等场景。</p>
    <div class="example">
      <div class="example-demo">
        <s-progress :text-inside="true" :stroke-width="22" :percentage="0"></s-progress>
        <s-progress :text-inside="true" :stroke-width="92" :percentage="70"></s-progress>
        <s-progress :text-inside="true" :stroke-width="22" :percentage="60" status="warning"></s-progress>
        <s-progress :text-inside="true" :stroke-width="52" :percentage="80" status="error"></s-progress>
        <s-progress :text-inside="true" :stroke-width="22" :percentage="90" status="disabled"></s-progress>
        <s-progress :text-inside="true" :stroke-width="22" :percentage="100" status="success"></s-progress>
      </div>
      <example-code>
        <textarea>
          <s-progress :text-inside="true" :stroke-width="22" :percentage="0"></s-progress>
          <s-progress :text-inside="true" :stroke-width="92" :percentage="70"></s-progress>
          <s-progress :text-inside="true" :stroke-width="22" :percentage="60" status="warning"></s-progress>
          <s-progress :text-inside="true" :stroke-width="52" :percentage="80" status="error"></s-progress>
          <s-progress :text-inside="true" :stroke-width="22" :percentage="90" status="disabled"></s-progress>
          <s-progress :text-inside="true" :stroke-width="22" :percentage="100" status="success"></s-progress>
        </textarea>
        <div class="description">
          <p>Progress 组件可通过 <code>stroke-width</code> 属性更改进度条的高度，并可通过 <code>text-inside</code>
          属性来将进度条描述置于进度条内部。</p>
        </div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3> 环形进度条</h3>
    <div class="example">
      <div class="example-demo">
        <s-progress type="circle" :percentage="0"></s-progress>
        <s-progress type="circle" :percentage="25"></s-progress>
        <s-progress type="circle" :percentage="50" status="warning"></s-progress>
        <s-progress type="circle" :percentage="57" status="error"></s-progress>
        <s-progress type="circle" :percentage="85" status="disabled"></s-progress>
        <s-progress type="circle" :percentage="100" status="success"></s-progress>
      </div>
      <example-code>
        <textarea>
          <s-progress type="circle" :percentage="0"></s-progress>
          <s-progress type="circle" :percentage="25"></s-progress>
          <s-progress type="circle" :percentage="50" status="warning"></s-progress>
          <s-progress type="circle" :percentage="57" status="error"></s-progress>
          <s-progress type="circle" :percentage="85" status="disabled"></s-progress>
          <s-progress type="circle" :percentage="100" status="success"></s-progress>
        </textarea>
        <div class="description"><p>Progress 组件可通过 <code>type</code> 属性来指定使用环形进度条，在环形进度条中，还可以通过 <code>width</code>
          属性来设置其大小。</p></div>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3 id="attributes"> Attributes</h3>
    <table class="table">
      <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><strong>percentage</strong></td>
        <td><strong>百分比（必填）</strong></td>
        <td>number</td>
        <td>0-100</td>
        <td>0</td>
      </tr>
      <tr>
        <td>type</td>
        <td>进度条类型</td>
        <td>string</td>
        <td>line/circle</td>
        <td>line</td>
      </tr>
      <tr>
        <td>stroke-width</td>
        <td>进度条的宽度，单位 px</td>
        <td>number</td>
        <td>—</td>
        <td>16</td>
      </tr>
      <tr>
        <td>text-inside</td>
        <td>进度条显示文字内置在进度条内（只在 type=line 时可用）</td>
        <td>Boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>status</td>
        <td>进度条当前状态</td>
        <td>string</td>
        <td>warning/error/success/disabled</td>
        <td>—</td>
      </tr>
      <tr>
        <td>width</td>
        <td>环形进度条画布宽度（只在 type=circle 时可用）</td>
        <td>number</td>
        <td></td>
        <td>126</td>
      </tr>
      <tr>
        <td>show-text</td>
        <td>是否显示进度条文字内容</td>
        <td>boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
      </tbody>
    </table>

  </article>
</template>
<style>
  .example .example-demo .s-progress {
    margin: 5px 0;
  }
</style>
