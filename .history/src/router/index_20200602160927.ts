/** @format */

import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import pc from "./modules/pc";
import mobile from "./modules/mobile";

Vue.use(VueRouter);

const routes: RouteConfig[] = import("./modules/pc");

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从那个路径跳转而来
  //next 是一个函数，放行
  //    next() 放行     next('/login) 强制跳转
  if (to.path === "/login") {
    next();
  } else {
    const tokenStr = window.sessionStorage.getItem("tokenId");
    if (!tokenStr) {
      next("/login");
    } else {
      next();
    }
  }
});

export default router;
