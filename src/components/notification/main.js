import Vue from 'vue';
import {PopupManager} from '../extra/utils/popup';
import {isVNode} from '../extra/utils/vdom';

let NotificationConstructor = Vue.extend(require('./Notification').default);

let instance;
let instances = [];
let seed = 1;

var Notification = function (options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  let userOnClose = options.onClose;
  let id = 'notification-' + seed++;

  options.onClose = function () {
    Notification.close(id, userOnClose);
  };

  instance = new NotificationConstructor({
    data: options
  });

  if (isVNode(options.message)) {
    instance.$slots.default = [options.message];
    options.message = '';
  }
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = PopupManager.nextZIndex();

  let instanceHeight = instance.$el.offsetHeight
  const offset = options.offset || 10;
  instance.$nextTick(function () {
    for (let i = 0, len = instances.length - 1; i < len; i++) {
      if (options.fixed) {
        instances[i].$el.style.bottom = 10 + 'px'
      } else {
        instances[i].$el.style.bottom = instance.$el.offsetHeight + Number.parseInt(instances[i].$el.style.bottom) + 10 + 'px'
      }
    }
  })
  instance.top = offset;
  instances.push(instance);
  return instance.vm;
};

['success', 'warning', 'info', 'error'].forEach(type => {
  Notification[type] = options => {
    if (typeof options === 'string' || isVNode(options)) {
      options = {
        message: options
      };
    }
    options.type = type;
    return Notification(options);
  };
});

Notification.close = function (id, userOnClose) {
  let index;
  let removedHeight;
  for (var i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      index = i;
      removedHeight = instances[i].dom.offsetHeight;
      instances.splice(i, 1);
      break;
    }
  }
  if (len > 1) {
    for (i = index - 1; i >= 0; i--) {
      instances[i].dom.style.bottom = parseInt(instances[i].dom.style.bottom, 10) - removedHeight - 10 + 'px';
    }
  }
};

export default Notification;
