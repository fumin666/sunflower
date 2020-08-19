<template>
  <transition name="s-alert-fade">
    <div class="s-alert" :class="typeClass" v-show="visible">
      <i class="s-alert-icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="s-alert-content">
        <span class="s-alert-title" :class="[ isBoldTitle ]" v-if="title">{{ title }}</span>
        <slot>
          <p class="s-alert-description" v-if="description">{{ description }}</p>
        </slot>
        <i class="s-alert-closebtn iconfont" :class="[{ 'is-customed': closeText !== '', 'icon-error': closeText === '' }]" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script>
  const TYPE_CLASSES_MAP = {
    'success': 's-alert-icon-success',
    'info': 's-alert-icon-info',
    'warning': 's-alert-icon-warning',
    'error': 's-alert-icon-error'
  };
  export default {
    name: 's-alert',

    props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        visible: true
      };
    },

    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    },

    computed: {
      typeClass() {
        return `s-alert-${this.type}`;
      },

      iconClass() {
        return TYPE_CLASSES_MAP[this.type] || 's-icon-information';
      },

      isBigIcon() {
        return this.description ? 'is-big' : '';
      },

      isBoldTitle() {
        return this.description ? 'is-bold' : '';
      }
    }
  };
</script>
