import MyBtn from './src/plugin/btn/btn';

const install = function (Vue) {
  Vue.component(MyBtn.name, MyBtn)
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  MyBtn,
}