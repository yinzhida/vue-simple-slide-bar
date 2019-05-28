import { VueSimpleSlideBar } from './src/js/index';

let VueSimpleSlideBarPlugin = {
  install (Vue) {
    Vue.component('VueSimpleSlideBar', VueSimpleSlideBar);
  }
};

export {
  VueSimpleSlideBarPlugin,
  VueSimpleSlideBar
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueSimpleSlideBar);
}
