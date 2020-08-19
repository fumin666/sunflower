<template>
  <div class="s-card-diy">
    <div class="s-card-diy-header" v-if="title">
      <span class="s-card-diy-title">{{title}}</span>
      <div v-if="showMore" class="s-card-diy-more" @click="handleMore">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="s-card-diy-body" ref="body">
      <s-scrollbar :wrap-style="[bodyStyle]" v-if="showScrollbar">
        <slot></slot>
      </s-scrollbar>
      <template v-else>
        <slot></slot>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SCardDiy',

    props: {
      title: String,
      moreText: {
        type: String,
        default: '更多'
      },
      moreClick: {
        type: Function,
        default: null
      },
      showScrollbar: {
        type: Boolean,
        default: false
      },
      showMore: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        bodyStyle: {
          width: '',
          height: ''
        }
      }
    },

    computed: {

    },

    mounted() {
      this.getBodyStyle();
    },

    methods: {
      handleMore() {
        this.moreClick();
      },

      getBodyStyle() {
        this.bodyStyle = {
          width: this.$refs['body'].clientWidth + 17 +'px',
          height: this.$refs['body'].clientHeight + 5 + 'px'
        };
      }
    }
  }
</script>