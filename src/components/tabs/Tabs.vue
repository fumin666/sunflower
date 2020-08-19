<script>
  import TabNav from './Tab-nav';

  export default {
    name: 'STab',

    components: {
      TabNav
    },

    props: {
      type: String,
      activeName: String,
      closable: Boolean,
      addable: Boolean,
      value: {},
      editable: Boolean,
      tabPosition: {
        type: String,
        default: 'top'
      }
    },

    provide() {
      return {
        rootTabs: this
      };
    },

    data() {
      return {
        currentName: this.value || this.activeName,
        panes: []
      };
    },

    watch: {
      activeName(value) {
        this.setCurrentName(value);
      },
      value(value) {
        this.setCurrentName(value);
      },
      currentName(value) {
        if (this.$refs.nav) {
          this.$nextTick(_ => {
            this.$refs.nav.scrollToActiveTab();
          });
        }
      }
    },

    methods: {
      handleTabClick(tab, tabName, event) {
        if (tab.disabled) return;
        this.setCurrentName(tabName);
        this.$emit('tab-click', tab, event);
        /**
         * sunflower向2.0.0版本以下兼容，增加'on-click'事件
         * return tab.name[string] || tab.index[Number], event[Object]
         */
        this.$emit('on-click', tab.name || parseInt(tab.index), event);
      },
      handleTabRemove(pane, ev) {
        if (pane.disabled) return;
        ev.stopPropagation();
        this.$emit('edit', pane.name, 'remove');
        this.$emit('tab-remove', pane.name);
      },
      handleTabAdd() {
        this.$emit('edit', null, 'add');
        this.$emit('tab-add');
      },
      setCurrentName(value) {
        this.currentName = value;
        this.$emit('input', value);
      },
      addPanes(item) {
        const index = this.$slots.default.filter(item => {
          return item.elm.nodeType === 1 && /\bs-tab-pane\b/.test(item.elm.className);
        }).indexOf(item.$vnode);
        this.panes.splice(index, 0, item);
      },
      removePanes(item) {
        const panes = this.panes;
        const index = panes.indexOf(item);
        if (index > -1) {
          panes.splice(index, 1);
        }
      }
    },
    render(h) {
      let {
        type,
        handleTabClick,
        handleTabRemove,
        handleTabAdd,
        currentName,
        panes,
        editable,
        addable,
        tabPosition
      } = this;

      const newButton = editable || addable
        ? (
          <span
            class="s-tabs-new-tab"
            on-click={ handleTabAdd }
            on-keydown={ (ev) => { if (ev.keyCode === 13) { handleTabAdd(); }} }
          >
                <i class="iconfont icon-plus"></i>
            </span>
        )
        : null;

      const navData = {
        props: {
          currentName,
          onTabClick: handleTabClick,
          onTabRemove: handleTabRemove,
          editable,
          type,
          panes
        },
        ref: 'nav'
      };
      const header = (
        <div class="s-tabs-header">
          {newButton}
          <tab-nav { ...navData }></tab-nav>
        </div>
      );
      const panels = (
        <div class="s-tabs-content">
          {this.$slots.default ? this.$slots.default : '暂无内容'}
        </div>
      );

      return (
        <div class={{
          's-tabs': true,
          's-tabs-card': type === 'card',
          [`s-tabs-${tabPosition}`]: true,
          's-tabs-border-card': type === 'border-card'
        }}>
          { tabPosition !== 'bottom' ? [header, panels] : [panels, header] }
        </div>
      );
    },
    created() {
      if (!this.currentName) {
        this.setCurrentName(0);
      }
    }
  };
</script>