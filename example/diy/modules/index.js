let AccountStatus = () => import('./AccountStatus');
let AssetsTop = () => import('./AssetsTop');
let EmptyA = () => import('./EmptyA');
let EmptyB = () => import('./EmptyB');
let WorkloadDay = () => import('./WorkloadDay');

const portlets = [
  AccountStatus,
  AssetsTop,
  EmptyA,
  EmptyB,
  WorkloadDay
];

const install = function (Vue) {
  portlets.map(portlet => {
    if (portlet.name) {
      Vue.component(portlet.name, portlet);
    }
  });
};

export default {
  install
};
