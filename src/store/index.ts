/** @format */

import Vue from "vue";
import Vuex from "vuex";

import { IPC } from "./pc/index";
import { IMOBILE } from "./mobile/index";

Vue.use(Vuex);

export interface IRootState {
  pc: IPC;
  mobile: IMOBILE;
}

export default new Vuex.Store<IRootState>({});

// 等同于
// import Vue from 'vue'
// import Vuex from 'vuex'
// import app from './modules/app'
// import user from './modules/user'
// Vue.use(Vuex)

// const store = new Vuex.Store({
//   modules: {
//     app,
//     user
//   }
// })

// export default store
