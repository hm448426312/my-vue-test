import btn from './src/plugin/btn/btn';

module.exports = {
  install: function (Vue, options = {}) {
    Vue.component(btn.name, btn);
  }
};