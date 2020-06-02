/** @format */

import Vue from "vue";
import App from "./App.vue";
import "@/styles/index.scss";
import router from "./router";
import store from "./store";
import "normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import ElmentUI from "element-ui";
import "@/styles/element-variables.scss";
import "@/mock";
import echarts from "echarts";
import jquery from "jquery";
import util from "@/util";

Vue.config.productionTip = false;
Vue.use(ElmentUI);
Vue.prototype.$echarts = echarts;
Vue.prototype.$ = jquery;
Vue.prototype.$util = util;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
