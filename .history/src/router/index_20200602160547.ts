/** @format */

import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    redirect: "/login",
  },
  // 登录界面
  {
    path: "/login",
    name: "login",
    // webpackChunkName懒加载后的文件名
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login/index.vue"),
    meta: { hidden: true },
  },
  // 首页
  {
    path: "/dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"),
    children: [
      {
        path: "/",
        name: "首页page",
        component: () =>
          import(
            /* webpackChunkName: "dashboardContent"*/ "@/views/Visualization/index.vue"
          ),
      },
      // 以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
      {
        path: "/note",
        name: "笔记",
        component: () =>
          import(/* webpackChunkName: "Note"*/ "@/views/note/index.vue"),
        children: [
          {
            path: "vue",
            name: "vue",
            component: () =>
              import(/* webpackChunkName: "Vue"*/ "@/views/note/edit/vue.vue"),
          },
          {
            path: "react",
            name: "react",
            component: () =>
              import(
                /* webpackChunkName: "React"*/ "@/views/note/edit/react.vue"
              ),
          },
          {
            path: "typescript",
            name: "typescript",
            component: () =>
              import(
                /* webpackChunkName: "typescript"*/ "@/views/note/edit/typescript.vue"
              ),
          },
          {
            path: "javascript",
            name: "javascript",
            component: () =>
              import(
                /* webpackChunkName: "typescript"*/ "@/views/note/edit/javascript.vue"
              ),
          },
          {
            path: "canvas",
            name: "canvas",
            component: () =>
              import(
                /* webpackChunkName: "canvas"*/ "@/views/note/edit/canvas.vue"
              ),
          },
          {
            path: "git",
            name: "git",
            component: () =>
              import(/* webpackChunkName: "git"*/ "@/views/note/edit/Git.vue"),
          },
          {
            path: "Webpack",
            name: "Webpack",
            component: () =>
              import(
                /* webpackChunkName: "Webpack"*/ "@/views/note/edit/Webpack.vue"
              ),
          },
        ],
      },
      {
        path: "/uiLibrary",
        name: "ui库",
        component: () =>
          import(
            /* webpackChunkName: "uiLibrary"*/ "@/views/uiLibrary/index.vue"
          ),
        children: [
          {
            path: "element-ui",
            name: "element-ui",
            component: () =>
              import(
                /* webpackChunkName: "element-ui"*/ "@/views/uiLibrary/edit/elementUI.vue"
              ),
          },
        ],
      },
      {
        path: "/component",
        name: "组件",
        component: () =>
          import(
            /* webpackChunkName: "component" */ "@/views/component/index.vue"
          ),
        children: [
          {
            path: "RichText",
            name: "富文本",
            component: () =>
              import(
                /* webpackChunkName: "component-RichTetx" */ "@/components/element-ui/RichText.vue"
              ),
          },
        ],
      },
      {
        path: "/setting",
        name: "设置",
        component: () =>
          import(/* webpackChunkName: "Setting"*/ "@/views/setting/index.vue"),
        children: [
          {
            path: "userSetting",
            name: "个人中心",
            component: () =>
              import(
                /* webpackChunkName: "User"*/ "@/views/setting/setUp/user.vue"
              ),
          },
        ],
      },
    ],
  },

  {
    path: "/mobile",
    component: () =>
      import(/* webpackChuunkName: "mobile" */ "@/views/mobile/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
console.log(process.env.BASE_URL);

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
