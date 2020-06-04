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

// 移动端引入组件
import {
  Button,
  Icon,
  Search,
  Tabbar,
  TabbarItem,
  NavBar,
  Cell,
  CellGroup,
  Popup,
  Image as VanImage,
  Uploader,
  ImagePreview,
  Field,
  DropdownMenu,
  DropdownItem,
  Swipe,
  SwipeItem,
  Lazyload,
} from "vant"; // vant-ui
import "@vant/touch-emulator";

Vue.use(Button);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
Vue.use(VanImage);
Vue.use(Uploader);
Vue.use(ImagePreview);
Vue.use(Field);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

Vue.config.productionTip = false;
Vue.use(ElmentUI, { size: "small", zIndex: 3000 });

Vue.prototype.$echarts = echarts;
Vue.prototype.$ = jquery;
Vue.prototype.$util = util;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
