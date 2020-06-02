/** @format */

export default [
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
      import(/* webpackChunkName: "login" */ "@/views/pc/login/index.vue"),
    meta: { hidden: true },
  },
  // 首页
  {
    path: "/dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "@/views/pc/dashboard/index.vue"
      ),
    children: [
      {
        path: "/",
        name: "首页page",
        component: () =>
          import(
            /* webpackChunkName: "dashboardContent"*/ "@/views/pc/Visualization/index.vue"
          ),
      },
      // 以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
      {
        path: "/note",
        name: "笔记",
        component: () =>
          import(/* webpackChunkName: "Note"*/ "@/views/pc/note/index.vue"),
        children: [
          {
            path: "vue",
            name: "vue",
            component: () =>
              import(
                /* webpackChunkName: "Vue"*/ "@/views/pc/note/edit/vue.vue"
              ),
          },
          {
            path: "react",
            name: "react",
            component: () =>
              import(
                /* webpackChunkName: "React"*/ "@/views/pc/note/edit/react.vue"
              ),
          },
          {
            path: "typescript",
            name: "typescript",
            component: () =>
              import(
                /* webpackChunkName: "typescript"*/ "@/views/pc/note/edit/typescript.vue"
              ),
          },
          {
            path: "javascript",
            name: "javascript",
            component: () =>
              import(
                /* webpackChunkName: "typescript"*/ "@/views/pc/note/edit/javascript.vue"
              ),
          },
          {
            path: "canvas",
            name: "canvas",
            component: () =>
              import(
                /* webpackChunkName: "canvas"*/ "@/views/pc/note/edit/canvas.vue"
              ),
          },
          {
            path: "git",
            name: "git",
            component: () =>
              import(
                /* webpackChunkName: "git"*/ "@/views/pc/note/edit/Git.vue"
              ),
          },
          {
            path: "Webpack",
            name: "Webpack",
            component: () =>
              import(
                /* webpackChunkName: "Webpack"*/ "@/views/pc/note/edit/Webpack.vue"
              ),
          },
        ],
      },
      {
        path: "/uiLibrary",
        name: "ui库",
        component: () =>
          import(
            /* webpackChunkName: "uiLibrary"*/ "@/views/pc/uiLibrary/index.vue"
          ),
        children: [
          {
            path: "element-ui",
            name: "element-ui",
            component: () =>
              import(
                /* webpackChunkName: "element-ui"*/ "@/views/pc/uiLibrary/edit/elementUI.vue"
              ),
          },
        ],
      },
      {
        path: "/component",
        name: "组件",
        component: () =>
          import(
            /* webpackChunkName: "component" */ "@/views/pc/component/index.vue"
          ),
        children: [
          {
            path: "RichText",
            name: "富文本",
            component: () =>
              import(
                /* webpackChunkName: "component-RichTetx" */ "@/components/pc/element-ui/RichText.vue"
              ),
          },
        ],
      },
      {
        path: "/setting",
        name: "设置",
        component: () =>
          import(
            /* webpackChunkName: "Setting"*/ "@/views/pc/setting/index.vue"
          ),
        children: [
          {
            path: "userSetting",
            name: "个人中心",
            component: () =>
              import(
                /* webpackChunkName: "User"*/ "@/views/pc/setting/setUp/user.vue"
              ),
          },
        ],
      },
    ],
  },
];
