/** @format */

import store from "@/store";
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from "vuex-module-decorators";
import axios from "axios";

export interface INavMenu {
  nav_name: string;
  nav_menu: any;
}

interface ISetNavmenu {
  [key: string]: any;
}

@Module({ dynamic: true, store, name: "navMenu" })
class navMenu extends VuexModule implements INavMenu {
  public nav_name: any = "";
  public nav_menu: any = "";

  @Action
  public async getNavMenu() {
    const { data } = await axios.get("/navMenu");

    this.SET_NAV_MENU(data);
  }

  @Mutation
  public SET_NAV_NAME(item: ISetNavmenu) {
    this.nav_name = item;
  }

  @Mutation
  public SET_NAV_MENU(item: any) {
    console.log(item);
    this.nav_menu = item;
  }
}

export const navMenuModule = getModule(navMenu);
