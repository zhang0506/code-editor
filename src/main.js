// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from '../node_modules/vue/dist/vue.esm.browser.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"

import "element-ui/lib/theme-chalk/index.css"
import jshint from "jshint";
import { codemirror } from "vue-codemirror";

import "codemirror/lib/codemirror.css";

window.JSHINT = jshint.JSHINT;

Vue.config.productionTip = false
//引入样式

Vue.use(ElementUI);

Vue.use(codemirror);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
