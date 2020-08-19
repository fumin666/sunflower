<template>
  <article class="article">
    <h1>TimeSelect 时间选择</h1>

    <h3>固定时间点</h3>
    <div class="example">
      <div class="example-demo">
        <s-time-select
          v-model="value1"
          :picker-options="{
            start: '08:00',
            step: '00:30',
            end: '12:00'
          }"
          placeholder="请选择时间">
        </s-time-select>
      </div>
      <example-code>
        <textarea>
    <s-time-select
      v-model="value1"
      :picker-options="{
        start: '08:00',
        step: '00:30',
        end: '12:00'
      }"
      placeholder="请选择时间">
    </s-time-select>
    <script>
      export default {
        data() {
          return {
            value1: ''
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>固定时间范围</h3>
    <div class="example">
      <div class="example-demo">
        <s-time-select
          placeholder="开始时间"
          v-model="startTime"
          :picker-options="{
            start: '08:00',
            step: '00:30',
            end: '14:00'
          }">
        </s-time-select>
        <s-time-select
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="{
            start: '08:00',
            step: '00:30',
            end: '14:00',
            minTime: startTime
          }">
        </s-time-select>
      </div>
      <example-code>
        <textarea>
    <s-time-select
      placeholder="开始时间"
      v-model="startTime"
      :picker-options="{
        start: '08:00',
        step: '00:30',
        end: '14:00'
      }">
    </s-time-select>
    <s-time-select
      placeholder="结束时间"
      v-model="endTime"
      :picker-options="{
        start: '08:00',
        step: '00:30',
        end: '14:00',
        minTime: startTime
      }">
    </s-time-select>
    <script>
      export default {
        data() {
          return {
            startTime: '',
            endTime: ''
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        startTime: '',
        endTime: ''
      }
    }
  }
</script>