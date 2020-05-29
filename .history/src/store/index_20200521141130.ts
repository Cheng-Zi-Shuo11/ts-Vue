/** @format */

import Vue from "vue";
import Vuex from "vuex";
import { IAppState } from "./modules/app";
import { IUserState } from "./modules/user";
import { INavMenu } from "./modules/navMenu";

Vue.use(Vuex);

export interface IRootState {
  app: IAppState;
  user: IUserState;
  navMenu: INavMenu;
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
