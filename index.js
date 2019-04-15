import MyBtn from './src/plugin/btn/btn';
import ElementUI from 'element-ui';

const install = function (Vue) {
  Vue.component(MyBtn.name, MyBtn)
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  MyBtn,
  ElementUI
}