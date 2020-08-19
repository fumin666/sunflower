<template>
    <div class="page-container page-component">
        <section class="content">
            <h2>各类图</h2>
            <p>chart组件中使用的是来自百度的echart图表库，当前版本为echart3</p>
            <p>ECharts，一个纯 Javascript 的图表库，
      可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），
      底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。
      ECharts 3 中更是加入了更多丰富的交互功能以及更多的可视化效果，并且对移动端做了深度的优化
      </p>
            <p>
                我们本身对echart做了一次封装，简化了echart复杂的配置，按照项目需求来调整图形外观，更适用于我们自身的开发需求
              </p>
            <h2>使用方法</h2>
            <div class="example-code" >
        <pre>
          <code>
             &lt;s-chart :chart="chart"&gt;&lt;/s-chart&gt;
          </code>
        </pre>
            </div>
            <p>需要chart对象来初始化图</p>
            <h5>必填</h5>
            <table class="table">
                <thead>
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                    <th>类型</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><strong>name</strong></td>
                    <td>图对应的ID，同一页面中的ID不可重复</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td><strong>type</strong></td>
                    <td>图表类型</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td><strong>width</strong></td>
                    <td>图宽，必须填，需带单位</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td><strong>height</strong></td>
                    <td>图高，必须填，需带单位</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td><strong>data</strong></td>
                    <td>图数据</td>
                    <td>string</td>
                </tr>
                </tbody>
            </table>
            <h5>选填</h5>
            <table class="table">
                <thead>
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                    <th>类型</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><strong>itemName</strong></td>
                    <td>图中名称</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td><strong>unit</strong></td>
                    <td>单位</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td><strong>option</strong></td>
                    <td>echart选项</td>
                    <td>string</td>
                </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>
<style>

    .page-component .content>table {
        border-collapse: collapse;
        width: 100%;
        background-color: #fff;
        color: #5e6d82;
        font-size: 14px;
        margin-bottom: 45px
    }

    .page-component .content>table strong {
        font-weight: 400
    }

    .page-component .content>table th {
        text-align: left;
        border-top: 1px solid #eaeefb;
        background-color: #eff2f7;
        white-space: nowrap
    }

    .page-component .content>table td,
    .page-component .content>table th {
        border-bottom: 1px solid #eaeefb;
        padding: 10px;
        max-width: 250px
    }

    .page-component .content>table td:first-child,
    .page-component .content>table th:first-child {
        padding-left: 10px
    }
</style>