/** @format */

import store from "@/store";
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from "vuex-module-decorators";

export interface IChia {
  
}

@Module({ dynamic: true, store, name: "ChianProvince" })