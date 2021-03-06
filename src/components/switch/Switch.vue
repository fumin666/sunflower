<template>
  <div class="s-switch"
         :class="[{
            'is-disabled': disabled,
            'is-checked': checked
         }]"
         role="switch"
         :aria-checked="checked"
         :aria-disabled="disabled"
         @click="switchValue">
    <input class="s-switch__input"
           type="checkbox"
           ref="input"
           :name="name"
           @change="handleChange"
           :true-value="activeValue"
           :false-value="inactiveValue"
           :disabled="disabled"
           @keydown.enter="switchValue"/>
    <span
            :class="['s-switch__label', 's-switch__label--left']"
            v-show="(activeIconClass || activeText) && !checked">
      <i :class="[inactiveIconClass]" v-if="inactiveIconClass"></i>
      <span v-if="!inactiveIconClass && inactiveText" :aria-hidden="checked">{{ inactiveText }}</span>
    </span>
    <span class="s-switch__core" :class="[checkboxSize ? 's-switch__core--' + checkboxSize : '']" ref="core">
      <span class="s-switch__button" :class="[checkboxSize ? 's-switch__button--' + checkboxSize : '']" :style="{ transform }"></span>
    </span>
    <span
            :class="['s-switch__label', 's-switch__label--right']"
            v-show="(activeIconClass || activeText) && checked">
      <i :class="[activeIconClass]" v-if="activeIconClass"></i>
      <span v-if="!activeIconClass && activeText" :aria-hidden="!checked">{{ activeText }}</span>
    </span>
  </div>
</template>

<script>
  import Focus from '../extra/mixins/focus';
  import Migrating from '../extra/mixins/migrating';
  export default {
    name: 'SSwitch',
    mixins: [Focus('input'), Migrating],
    props: {
      value: {
        type: [Boolean, String, Number],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 0
      },
      activeIconClass: {
        type: String,
        default: ''
      },
      inactiveIconClass: {
        type: String,
        default: ''
      },
      activeText: String,
      inactiveText: String,
      activeColor: {
        type: String,
        default: ''
      },
      inactiveColor: {
        type: String,
        default: ''
      },
      activeValue: {
        type: [Boolean, String, Number],
        default: true
      },
      inactiveValue: {
        type: [Boolean, String, Number],
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        coreWidth: this.width
      }
    },
    created() {
      if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
        this.$emit('input', this.inactiveValue);
      }
    },
    computed: {
      checked() {
        return this.value === this.activeValue;
      },
      transform() {
        if (this.checked && this.checkboxSize) {
          return `translate3d(${ this.coreWidth - 32 }px, 0, 0)`
        } else if (this.checked && !this.checkboxSize) {
          return `translate3d(${ this.coreWidth - 22 }px, 0, 0)`
        } else {
          return ''
        }
      },
      checkboxSize() {
        const temCheckboxSize = this.size;
        return temCheckboxSize
      }
    },
    methods: {
      handleChange(event) {
        this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
        this.$emit('change', !this.checked ? this.activeValue : this.inactiveValue);
        this.$nextTick(() => {
          // set input's checked property
          // in case parent refuses to change component's value
          this.$refs.input.checked = this.checked;
        });
      },
      setBackgroundColor() {
        let newColor = this.checked ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = newColor;
        this.$refs.core.style.backgroundColor = newColor;
      },
      switchValue() {
        this.$refs.input.click();
      },
      getMigratingConfig() {
        return {
          props: {
            'on-color': 'on-color is renamed to active-color.',
            'off-color': 'off-color is renamed to inactive-color.',
            'on-text': 'on-text is renamed to active-text.',
            'off-text': 'off-text is renamed to inactive-text.',
            'on-value': 'on-value is renamed to active-value.',
            'off-value': 'off-value is renamed to inactive-value.',
            'on-icon-class': 'on-icon-class is renamed to active-icon-class.',
            'off-icon-class': 'off-icon-class is renamed to inactive-icon-class.'
          }
        };
      }
    },
    watch: {
      checked() {
        this.$refs.input.checked = this.checked;
        if (this.activeColor || this.inactiveColor) {
          this.setBackgroundColor();
        }
      }
    },
    mounted() {
      this.coreWidth = this.width || 44;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
      this.$refs.input.checked = this.checked;
    }
  }
</script>
