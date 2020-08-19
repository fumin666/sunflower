<template>
  <div
    class="s-step"
    :style="[style,  isLast ? '' : { marginRight: - $parent.stepOffset + 'px' }]"
    :class="['is-' + $parent.direction]"
    v-if="type==='default'">
    <div
      class="s-step-head"
      :class="['is-' + currentStatus, { 'is-text': !icon }]">
      <div
        class="s-step-line"
        :style="isLast ? '' : { marginRight: $parent.stepOffset + 'px' }"
        :class="['is-' + $parent.direction, { 'is-icon': icon }]">
        <i class="s-step-line-inner" :style="lineStyle"></i>
      </div>
      <span class="s-step-icon">
        <slot
          v-if="currentStatus !== 'success' && currentStatus !== 'error'"
          name="icon">
          <i v-if="icon" :class="['s-icon-' + icon]"></i>
          <div v-else>{{ index + 1 }}</div>
        </slot>
        <i
          v-else
          class="iconfont"
          :class="['icon-' + (currentStatus === 'success' ? 'correct' : 'error')]">
        </i>
      </span>
    </div>
    <div
      class="s-step-main ellipsis"
      :style="{ marginLeft: mainOffset }">
      <div
        class="s-step-title ellipsis"
        ref="title"
        :title="title"
        :class="['is-' + currentStatus]">
        <slot name="title">{{ title }}</slot>
      </div>
      <div
        class="s-step-description"
        :class="['is-' + currentStatus]">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
  <div
    v-else-if="type==='arrow'"
    class="s-step otherType"
    :class="['is-' + currentStatus]"
    :style="[isLast ? '' : { marginRight: - $parent.stepOffset + 'px' }, {width: $parent.stepWidth}]">
    <div
      class="s-step-head"
      :class="['is-' + currentStatus, { 'is-text': !icon }]">
      <span class="s-step-icon">
        <slot
          v-if="!isFinish"
          name="icon">
          <i v-if="icon" :class="['s-icon-' + icon]"></i>
          <div v-else>{{ index + 1 }}</div>
        </slot>
        <i
        v-else
        class="iconfont icon-correct-bold">
        </i>
      </span>
    </div>
    <div
      class="s-step-main"
      :style="{ marginLeft: mainOffset }">
      <div
        class="s-step-title ellipsis"
        ref="title"
        :title="title"
        :class="['is-' + currentStatus]">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
  </div>
</template>
<style>
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>
<script>
  export default {
    name: 'SStep',

    props: {
      title: String,
      icon: String,
      description: String,
      status: {
        type: String,
        default: 'wait'
      }
    },

    data() {
      return {
        index: -1,
        style: {},
        lineStyle: {},
        mainOffset: 0,
        isLast: false,
        currentStatus: this.status,
        isFinish: false
      };
    },

    computed:{
      type(){
        return this.$parent.type;
      }
    },

    beforeCreate() {
      this.$parent.steps.push(this);
    },

    methods: {
      updateStatus(val) {
        const prevChild = this.$parent.$children[this.index];

        if (val > this.index) {
          this.currentStatus = this.$parent.finishStatus;
          this.isFinish = true;
        } else if (val === this.index) {
          this.currentStatus = this.$parent.processStatus;
          this.isFinish = false;
        } else {
          this.currentStatus = 'wait';
          this.isFinish = false;
        }

        if (prevChild) prevChild.calcProgress(this.currentStatus);
      },

      calcProgress(status) {
        let step = 100;
        const style = {};

        style.transitionDelay = 150 * this.index + 'ms';
        if (status === this.$parent.processStatus) {
          step = 50;
        } else if (status === 'wait') {
          step = 0;
          style.transitionDelay = (-150 * this.index) + 'ms';
        }

        this.$parent.direction === 'vertical'
          ? style.height = step + '%'
          : style.width = step + '%';

        this.lineStyle = style;
      },

      adjustPosition() {
        this.style = {};
        this.$parent.stepOffset = this.$el.getBoundingClientRect().width / (this.$parent.steps.length - 1);
      }
    },

    mounted() {
      const parent = this.$parent;
      const isCenter = parent.center;
      const len = parent.steps.length;
      const isLast = this.isLast = parent.steps[parent.steps.length - 1] === this;
      const space = typeof parent.space === 'number'
        ? parent.space + 'px'
        : parent.space
          ? parent.space
          : 100 / (isCenter ? len - 1 : len) + '%';

      if (parent.direction === 'horizontal') {
        this.style = { width: space };
        if (parent.alignCenter) {
          this.mainOffset = -this.$refs.title.getBoundingClientRect().width / 2 + 16 + 'px';
        }
        isCenter && isLast && this.adjustPosition();
      } else {
        if (!isLast) {
          this.style = { height: space };
        }
      }

      const unwatch = this.$watch('index', val => {
        this.$watch('$parent.current', this.updateStatus, { immediate: true });
        unwatch();
      });
    }
  };
</script>
