/**
* Created by alex on 2017/8/15.
 */

<template>
    <article class="article">
        <h1>Spin 加载中</h1>

        <p>当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验。</p>
        <h3>基本用法</h3>
        <ul style="width: 100%;height: 60px;">
            <li style="border:1px solid;float:left;width: 160px;height: 80px;line-height: 80px;"><s-spin type="pulse" color="blue" size="20px"></s-spin></li>
            <li style="position:relative;border:1px solid;float:left;width: 160px;height: 80px;line-height: 80px;"><s-spin type="clip" fix></s-spin></li>
            <li style="border:1px solid;float:left;width: 160px;height: 80px;line-height: 80px;"><s-spin type="beat"></s-spin></li>
            <li style="border:1px solid;float:left;width: 160px;height: 80px;line-height: 80px;"><s-spin type="scale"></s-spin></li>
            <li style="position:relative;border:1px solid;float:left;width: 160px;height: 80px;line-height: 80px;"><s-spin type="moon" fix></s-spin></li>
        </ul>
        <pre>
            <code>
                &lt;s-spin&gt;&lt;/s-spin&gt;
            </code>
        </pre>
        <h3>如何使用</h3>
        <p>以下这个无法使用默认定位需要手动设置</p>
        <div style="position:relative;border:1px solid;width:300px;height:300px;">
            <div v-if="!spinShow">
                <h3>登金陵凤凰台</h3>
                <address>李白</address>
                <article>
                    <p>凤凰台上凤凰游，凤去台空江自流。</p>
                    <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
                    <p>三山半落青天外，二水中分白鹭洲。</p>
                    <p>总为浮云能蔽日，长安不见使人愁。</p>
                </article>
            </div>
            <s-spin v-if="spinShow" color="red" size="10px" fix></s-spin>
        </div>
        切换显示状态：<s-switch v-model="aaa" @change="spinShow = !spinShow"></s-switch>
        <h3 id="options">API</h3>
        <table class="table">
            <thead>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>参数</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>type</td>
                <td>类型</td>
                <td>pulse,moon,scale,beat,clip,fade</td>
            </tr>
            <tr>
                <td>color</td>
                <td>颜色</td>
                <td>色值</td>
            </tr>
            <tr>
                <td>size</td>
                <td>圆类半径</td>
                <td>10px</td>
            </tr>
            <tr>
                <td>width,height</td>
                <td>长方形宽高</td>
                <td>10px</td>
            </tr>
            <tr>
                <td>fix</td>
                <td>是否居中,外层需要设置postion:relative</td>
                <td>true</td>
            </tr>
            </tbody>
        </table>
    </article>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        spinShow: true,
        aaa: ''
      }
    }
  }
</script>