<template>
  <transition name="msgbox-fade">
    <div
      class="s-message-box-wrapper"
      tabindex="-1"
      v-show="value"
      @click.self="handleWrapperClick"
      role="dialog"
      aria-modal="true"
      :aria-label="title || 'dialog'"
    >
      <div class="s-message-box" :class="[customClass, center && 's-message-box-center']">
        <div class="s-message-box-header" v-if="title !== undefined">
          <div class="s-message-box-title">
            <div class="s-message-box-status" :class="[ typeClass ]" v-if="typeClass && center"></div>
            <span>{{ title }}</span>
          </div>
          <button type="button"
                  class="s-message-box-headerbtn"
                  aria-label="Close"
                  v-if="showClose"
                  @click="handleAction('cancel')"
                  @keydown.enter="handleAction('cancel')"
          >
            <i class="s-message-box-close iconfont icon-error"></i>
          </button>
        </div>
        <div class="s-message-box-ctn">
          <div class="s-message-box-content" v-if="message !== ''">
            <div class="s-message-box-status" :class="[ typeClass ]" v-if="typeClass && !center"></div>
            <div class="s-message-box-message">
              <slot>
                <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
                <p v-else v-html="message"></p>
              </slot>
            </div>
            <div class="s-message-box-input" v-show="showInput">
              <s-input
                v-model="inputValue"
                :type="inputType"
                @compositionstart.native="handleComposition"
                @compositionupdate.native="handleComposition"
                @compositionend.native="handleComposition"
                @keyup.enter.native="handleKeyup"
                :placeholder="inputPlaceholder"
                ref="input"></s-input>
              <div class="s-message-box-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
            </div>
          </div>
          <div class="s-message-box-btns">
            <s-button
              :loading="confirmButtonLoading"
              ref="confirm"
              :class="[ confirmButtonClasses ]"
              v-show="showConfirmButton"
              :round="roundButton"
              size="small"
              @click.native="handleAction('confirm')"
              @keydown.enter="handleAction('confirm')"
            >
              {{ confirmButtonText || t('el.messagebox.confirm') }}
            </s-button>
            <s-button
              type="cancel"
              :loading="cancelButtonLoading"
              :class="[ cancelButtonClasses ]"
              v-show="showCancelButton"
              :round="roundButton"
              size="small"
              @click.native="handleAction('cancel')"
              @keydown.enter="handleAction('cancel')"
            >
              {{ cancelButtonText || t('el.messagebox.cancel') }}
            </s-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Popup from '../extra/utils/popup';
  import Locale from '../extra/mixins/locale';
  import SInput from '../input';
  import {Button} from '../button';
  import {addClass, removeClass} from '../extra/utils/dom';
  import {t} from '../extra/locale';
  import Dialog from '../extra/utils/aria-dialog';

  let messageBox;
  let typeMap = {
    success: 'circle-check',
    info: 'information',
    warning: 'warning',
    error: 'circle-cross'
  };

  export default {
    mixins: [Popup, Locale],

    props: {
      modal: {
        default: true
      },
      lockScroll: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      closeOnHashChange: {
        default: true
      },
      center: {
        default: false,
        type: Boolean
      },
      roundButton: {
        default: false,
        type: Boolean
      }
    },

    components: {
      SInput,
      's-button': Button
    },

    computed: {
      typeClass() {
        return this.type && typeMap[this.type] ? `s-icon-${ typeMap[this.type] }` : '';
      },

      confirmButtonClasses() {
        return `s-button-primary ${ this.confirmButtonClass }`;
      },
      cancelButtonClasses() {
        return `${ this.cancelButtonClass }`;
      }
    },

    methods: {
      handleComposition(event) {
        if (event.type === 'compositionend') {
          setTimeout(() => {
            this.isOnComposition = false;
          }, 100);
        } else {
          this.isOnComposition = true;
        }
      },
      handleKeyup() {
        !this.isOnComposition && this.handleAction('confirm');
      },
      getSafeClose() {
        const currentId = this.uid;
        return () => {
          this.$nextTick(() => {
            if (currentId === this.uid) this.doClose();
          });
        };
      },
      doClose() {
        if (!this.value) return;
        this.value = false;
        this._closing = true;

        this.onClose && this.onClose();
        messageBox.closeDialog(); // 解绑
        if (this.lockScroll) {
          setTimeout(() => {
            if (this.modal && this.bodyOverflow !== 'hidden') {
              document.body.style.overflow = this.bodyOverflow;
              document.body.style.paddingRight = this.bodyPaddingRight;
            }
            this.bodyOverflow = null;
            this.bodyPaddingRight = null;
          }, 200);
        }
        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
        setTimeout(() => {
          if (this.action) this.callback(this.action, this);
        });
      },

      handleWrapperClick() {
        if (this.closeOnClickModal) {
          this.handleAction('cancel');
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        this.action = action;
        if (typeof this.beforeClose === 'function') {
          this.close = this.getSafeClose();
          this.beforeClose(action, this, this.close);
        } else {
          this.doClose();
        }
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || t('el.messagebox.error');
            addClass(this.$refs.input.$el.querySelector('input'), 'invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || t('el.messagebox.error');
              addClass(this.$refs.input.$el.querySelector('input'), 'invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        removeClass(this.$refs.input.$el.querySelector('input'), 'invalid');
        return true;
      },
      getFistFocus() {
        const $btns = this.$el.querySelector('.s-message-box-btns .s-button');
        const $title = this.$el.querySelector('.s-message-box-btns .s-message-box-title');
        return $btns && $btns[0] || $title;
      }
    },

    watch: {
      inputValue: {
        immediate: true,
        handler(val) {
          this.$nextTick(_ => {
            if (this.$type === 'prompt' && val !== null) {
              this.validate();
            }
          });
        }
      },

      value(val) {
        if (val) {
          this.uid++;
          if (this.$type === 'alert' || this.$type === 'confirm') {
            this.$nextTick(() => {
              this.$refs.confirm.$el.focus();
            });
          }
          this.focusAfterClosed = document.activeElement;
          messageBox = new Dialog(this.$el, this.focusAfterClosed, this.getFistFocus());
        };

        // prompt
        if (this.$type !== 'prompt') return;
        if (val) {
          setTimeout(() => {
            if (this.$refs.input && this.$refs.input.$el) {
              this.$refs.input.$el.querySelector('input').focus();
            }
          }, 500);
        } else {
          this.editorErrorMessage = '';
          removeClass(this.$refs.input.$el.querySelector('input'), 'invalid');
        }
      }
    },

    mounted() {
      if (this.closeOnHashChange) {
        window.addEventListener('hashchange', this.close);
      }
    },

    beforeDestroy() {
      if (this.closeOnHashChange) {
        window.removeEventListener('hashchange', this.close);
      }
      setTimeout(() => {
        messageBox.closeDialog();
      });
    },

    data() {
      return {
        uid: 1,
        title: undefined,
        message: '',
        type: '',
        customClass: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputType: 'text',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        action: '',
        confirmButtonText: '',
        cancelButtonText: '',
        confirmButtonLoading: false,
        cancelButtonLoading: false,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null,
        dangerouslyUseHTMLString: false,
        focusAfterClosed: null,
        isOnComposition: false
      };
    }
  };
</script>