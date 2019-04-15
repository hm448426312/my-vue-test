import MyBtn from './src/plugin/btn/btn';

export function install(Vue) {
  Vue.component(MyBtn.name, MyBtn)
}
export {
  MyBtn
}