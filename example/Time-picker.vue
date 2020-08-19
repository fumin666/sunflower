<template>
  <article class="article">
    <h1>TimePicker 时间选择器</h1>

    <h3>任意时间点</h3>
    <div class="example">
      <div class="example-demo">
        <s-time-picker
          v-model="value1"
          placeholder="任意时间点">
        </s-time-picker>
        <span v-text="value1"></span>
      </div>
      <example-code>
        <textarea>
    <s-time-picker
      v-model="value1"
      placeholder="任意时间点">
    </s-time-picker>
    <script>
      export default {
        data() {
          return {
            value: ''
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>限制可选时间范围</h3>
    <div class="example">
      <div class="example-demo">
        <s-time-picker
          v-model="value2"
          :picker-options="{selectableRange: '18:30:00 - 22:30:00'}"
          placeholder="限制可选时间范围">
        </s-time-picker>
        <span v-text="value2"></span>
      </div>
      <example-code>
        <textarea>
    <s-time-picker
      v-model="value2"
      :picker-options="{selectableRange: '18:30:00 - 22:30:00'}"
      placeholder="限制可选时间范围">
    </s-time-picker>
    <script>
      export default {
        data() {
          return {
            value2: ''
          }
        }
      }
    </script>
        </textarea>
        <pre><code></code></pre>
      </example-code>
    </div>

    <h3>任意时间范围</h3>
    <div class="example">
      <div class="example-demo">
        <s-time-picker
          is-range
          v-model="value3"
          placeholder="任意时间范围"></s-time-picker>
      </div>
      <example-code>
        <textarea>
    <s-time-picker
      is-range
      v-model="value3"
      placeholder="任意时间范围"></s-time-picker>
    <script>
      export default {
        data() {
          return {
            value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
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
        value2: '',
        value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>