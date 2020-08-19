/**
 * Created by caoLiXin on 2017/12/12.
 */
import Popper from '../extra/utils/vue-popper';
import debounce from 'throttle-debounce/debounce';
import {getFirstComponentChild} from '../extra/utils/vdom';
import { generateId } from '../extra/utils/util';
import Vue from 'vue';
import SScrollbar from '../scrollbar'

export default {
  name: 'STooltip',

  mixins: [Popper],

  components: {
    SScrollbar
  },

  props: {
    openDelay: {
      type: Number,
      default: 0
    },
    disabled: Boolean,
    manual: Boolean,
    effect: {
      type: String,
      default: 'dark'
    },
    popperClass: String,
    content: String,
    visibleArrow: {
      default: true
    },
    transition: {
      type: String,
      default: 's-fade-in-linear'
    },
    popperOptions: {
      default() {
        return {
          boundariesPadding: 10,
          gpuAcceleration: false
        };
      }
    },
    enterable: {
      type: Boolean,
      default: true
    },
    hideAfter: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      timeoutPending: null,
      focusing: false
    };
  },

  computed: {
    tooltipId() {
      return `s-tooltip-${generateId()}`;
    }
  },

  beforeCreate() {
    if (this.$isServer) return;

    this.popperVM = new Vue({
      data: { node: '' },
      render(h) {
        return this.node;
      }
    }).$mount();

    this.debounceClose = debounce(200, () => this.handleClosePopper());
  },

  render(h) {
    if (this.popperVM) {
      // 对于表格单元格内容过长时，tooltip内容修改
      let content = this.$slots.content || this.content;
      let contentLength = 0;
      if (content) contentLength = content.length;

      this.popperVM.node = (
        <transition
          name={ this.transition }
          onAfterLeave={ this.doDestroy }>
          { this.$slots.content || this.content ?
            <div
              onMouseleave={ () => { this.setExpectedState(false); this.debounceClose(); } }
              onMouseenter= { () => { this.setExpectedState(true); } }
              ref="popper"
              role="tooltip"
              id={this.tooltipId}
              aria-hidden={ (this.disabled || !this.showPopper) ? 'true' : 'false' }
              v-show={!this.disabled && this.showPopper}
              class={
                ['s-tooltip-popper', 'is-' + this.effect, this.popperClass]
              }>
              <s-scrollbar wrap-style="max-height: 300px;">
                { content }
              </s-scrollbar>
            </div> : null
          }
        </transition>
      );
    }

    if (!this.$slots.default || !this.$slots.default.length) return this.$slots.default;

    const vnode = getFirstComponentChild(this.$slots.default);
    if (!vnode) return vnode;
    const data = vnode.data = vnode.data || {};
    const on = vnode.data.on = vnode.data.on || {};
    const nativeOn = vnode.data.nativeOn = vnode.data.nativeOn || {};

    data.staticClass = this.concatClass(data.staticClass, 's-tooltip');
    nativeOn.mouseenter = on.mouseenter = this.addEventHandle(on.mouseenter, this.show);
    nativeOn.mouseleave = on.mouseleave = this.addEventHandle(on.mouseleave, this.hide);
    nativeOn.focus = on.focus = this.addEventHandle(on.focus, this.handleFocus);
    nativeOn.blur = on.blur = this.addEventHandle(on.blur, this.handleBlur);
    nativeOn.click = on.click = this.addEventHandle(on.click, () => { this.focusing = false; });
    return vnode;
  },

  mounted() {
    this.referenceElm = this.$el;
    if (this.$el.nodeType === 1) {
      this.$el.setAttribute('aria-describedby', this.tooltipId);
      // this.$el.setAttribute('tabindex', 0);
    }
  },

  watch: {
    focusing(val) {
      if (val) {
        this.referenceElm.className += ' focusing';
      } else {
        this.referenceElm.className = this.referenceElm.className.replace('focusing', '');
      }
    }
  },

  methods: {
    show() {
      this.setExpectedState(true);
      this.handleShowPopper();
    },

    hide() {
      this.setExpectedState(false);
      this.debounceClose();
    },

    handleFocus() {
      this.focusing = true;
      this.show();
    },

    handleBlur() {
      this.focusing = false;
      this.hide();
    },

    addEventHandle(old, fn) {
      if (!old) {
        return fn;
      } else if (Array.isArray(old)) {
        return old.indexOf(fn) > -1 ? old : old.concat(fn);
      } else {
        return old === fn ? old : [old, fn];
      }
    },

    concatClass(a, b) {
      if (a && a.indexOf(b) > -1) return a;
      return a ? b ? (a + ' ' + b) : a : (b || '');
    },

    handleShowPopper() {
      if (!this.expectedState || this.manual) return;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.showPopper = true;
      }, this.openDelay);

      if (this.hideAfter > 0) {
        this.timeoutPending = setTimeout(() => {
          this.showPopper = false;
        }, this.hideAfter);
      }
    },

    handleClosePopper() {
      if (this.enterable && this.expectedState || this.manual) return;
      clearTimeout(this.timeout);

      if (this.timeoutPending) {
        clearTimeout(this.timeoutPending);
      }
      this.showPopper = false;
    },

    setExpectedState(expectedState) {
      if (expectedState === false) {
        clearTimeout(this.timeoutPending);
      }
      this.expectedState = expectedState;
    }
  }
};