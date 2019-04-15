import MyBtn from './src/plugin/btn/btn';

const install = function (Vue) {
  Vue.component(MyBtn.name, MyBtn)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const version = '1.0.5';
export {
  install,
  version,
  MyBtn
}
export default {
  install,
  version
}