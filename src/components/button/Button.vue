<template>
  <button class="s-button"
          :type="nativeType"
          :title="title"
          :disabled="disabled"
          :autofocus="autofocus"
          :class="[
              type ? 's-button-' + type : '',
              buttonSize ? 's-button-' + buttonSize : '',
              {
                'is-disabled': disabled,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round
              }
          ]"
          @click="handleClick"
  >
    <i :class="'iconfont icon-' + icon" v-if="icon && !loading" @click="handleInnerClick"></i>
    <i class="s-icon-loading" v-if="loading" @click="handleInnerClick"></i>
    <span v-if="$slots.default" :class="(icon && !loading) || (loading) ? 'span' : ''" @click="handleInnerClick"><slot></slot></span>
  </button>
</template>

<script>
  // 添加type类型，transparent(无边框，无背景)
  export default {
    name: "SButton",

    inject: {
      elFormItem: {
        default: ''
      }
    },

    props: {
      type: {
        type: String,
        default: "default"
      },
      title: [String, Number],
      icon: {
        type: String,
        default: ""
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      disabled: Boolean,
      loading: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      size: String
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      buttonSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    methods: {
      handleClick(event) {
        this.$emit("click", event);
      },
      handleInnerClick(evt) {
        if (this.disabled) {
          evt.stopPropagation();
        }
      }
    }
  }
</script>