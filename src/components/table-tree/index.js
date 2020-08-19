/**
 * Created by licong on 2017/4/24.
 */
import TableTree from './main';

/* istanbul ignore next */
TableTree.install = function(Vue) {
  Vue.component(TableTree.name, TableTree);
};

export default TableTree;