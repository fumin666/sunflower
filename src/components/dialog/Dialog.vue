<template>
  <transition name="dialog-fade">
    <div class="s-dialog-wrapper" v-show="visible" @click.self="handleWrapperClick">
      <div
        class="s-dialog"
        :class="[sizeClass, {'s-dialog-center': center}, customClass]"
        ref="dialog"
        :style="style">
        <div class="s-dialog-body-box">
          <div class="s-dialog-header">
            <slot name="title">
              <span class="s-dialog-title">{{title}}</span>
            </slot>
            <div class="s-dialog-headerbtn">
              <i v-if="showClose" class="s-dialog-close iconfont icon-error" @click.self="handleClose"></i>
            </div>
          </div>
          <div class="s-dialog-main-content">
            <div class="s-dialog-body" v-if="rendered"><slot></slot></div>
            <div class="s-dialog-footer" v-if="$slots.footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Popup from '../extra/utils/popup';
  import emitter from '../extra/mixins/emitter';

  export default {
    name: 's-dialog',
    mixins: [Popup, emitter],
    props: {
      title: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '600px'
      },
      modal: {
        type: Boolean,
        default: true
      },

      modalAppendToBody: {
        type: Boolean,
        default: true
      },

      appendToBody: {
        type: Boolean,
        default: false
      },

      lockScroll: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        type: Boolean,
        default: false
      },
      closeOnPressEscape: {
        type: Boolean,
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: 'small'
      },
      customClass: {
        type: String,
        default: ''
      },
      top: {
        type: String,
        default: '45px'
      },
      beforeClose: Function,
      center: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        visible: false
      };
    },
    watch: {
      value(val) {
        this.visible = val;
      },
      visible(val) {
        this.$emit('input', val);
        if (val) {
          this.$emit('open');
          this.$el.addEventListener('scroll', this.updatePopper);
          this.$nextTick(() => {
            this.$refs.dialog.scrollTop = 0;
          });
          if (this.appendToBody) {
            document.body.appendChild(this.$el);
          }
        } else {
          this.$el.removeEventListener('scroll', this.updatePopper);
          this.$emit('close');
        }
      }
    },
    computed: {
      sizeClass() {
        return `s-dialog-${ this.size }`;
      },
      style() {
        return {
          'width': this.width,
          'top': this.top
        };
      }
    },
    methods: {
      handleWrapperClick() {
        if (!this.closeOnClickModal) return;
        this.handleClose();
      },
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.close);
        } else {
          this.close();
        }
      },
      updatePopper() {
        this.broadcast('SSelectDropdown', 'updatePopper');
        this.broadcast('SDropdownMenu', 'updatePopper');
      }
    },
    mounted() {
      if (this.value) {
        this.rendered = true;
        this.open();
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      }
    },
    destroyed() {
      // if appendToBody is true, remove DOM node after destroy
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  };
</script>