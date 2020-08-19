<template>
  <transition-group
          tag="ul"
          :class="[
      's-upload-list',
      's-upload-list--' + listType,
      { 'is-disabled': disabled }
    ]"
          name="s-list"
  >
    <li
            v-for="(file, index) in files"
            :class="['s-upload-list__item', 'is-' + file.status, focusing ? 'focusing' : '']"
            :key="index"
            tabindex="0"
            @focus="focusing = true"
            @blur="focusing = false"
            @click="focusing = false"
    >
      <img
              class="s-upload-list__item-thumbnail"
              v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
              :src="file.url" alt=""
      >
      <a class="s-upload-list__item-name" @click="handleClick(file)">
        <i class="iconfont icon-file"></i>{{file.name}}
      </a>
      <label class="s-upload-list__item-status-label">
        <i :class="[{
          's-icon-upload-success': true,
          'iconfont icon-correct-bold': listType === 'text',
          'iconfont icon-correct': ['picture-card', 'picture'].indexOf(listType) > -1
        }]"></i>
      </label>
      <i class="iconfont icon-error-bold" v-if="!disabled" @click="$emit('remove', file)"></i>
      <i class="s-icon-close-tip" v-if="!disabled"></i> <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
      <s-progress
              v-if="file.status === 'uploading'"
              :type="listType === 'picture-card' ? 'circle' : 'line'"
              :stroke-width="listType === 'picture-card' ? 6 : 2"
              :percentage="parsePercentage(file.percentage)">
      </s-progress>
      <span class="s-upload-list__item-actions" v-if="listType === 'picture-card'">
        <span
                class="s-upload-list__item-preview"
                v-if="handlePreview && listType === 'picture-card'"
                @click="handlePreview(file)"
        >
          <i class="iconfont icon-enlarge"></i>
        </span>
        <span
                v-if="!disabled"
                class="s-upload-list__item-delete"
                @click="$emit('remove', file)"
        >
          <i class="iconfont icon-delete"></i>
        </span>
      </span>
    </li>
  </transition-group>
</template>
<script>
  import Locale from '../extra/mixins/locale';
  import sProgress from '../progress';

  export default {
    mixins: [Locale],

    data() {
      return {
        focusing: false
      };
    },
    components: { sProgress },

    props: {
      files: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      handlePreview: Function,
      listType: String
    },
    methods: {
      parsePercentage(val) {
        return parseInt(val, 10);
      },
      handleClick(file) {
        this.handlePreview && this.handlePreview(file);
      }
    }
  };
</script>
