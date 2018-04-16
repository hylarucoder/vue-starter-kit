import FedBreadcumbs from './src/breadcumbs';

/* istanbul ignore next */
FedBreadcumbs.install = function(Vue) {
  Vue.component(FedBreadcumbs.name, FedBreadcumbs);
};

export default FedBreadcumbs;
