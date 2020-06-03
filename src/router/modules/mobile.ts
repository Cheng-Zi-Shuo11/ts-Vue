/** @format */

export default [
  {
    path: "/mobile",
    name: "主页",
    component: () =>
      import(/* webpackChuunkName: "mobile" */ "@/views/mobile/index.vue"),
    children: [
      {
        path: "",
        name: "默认显示",
        component: () =>
          import(
            /* webpackChunkName: "content" */ "@/views/mobile/content/index.vue"
          ),
      },
      {
        path: "setting",
        name: "设置",
        component: () =>
          import(
            /* webpackChunkName: "setting" */ "@/views/mobile/setting/index.vue"
          ),
        children: [
          {
            path: "setUp",
            name: "个人中心",
            component: () =>
              import(
                /* webpackChunName: "setUp" */ "@/views/mobile/setting/edit/setUp.vue"
              ),
          },
          {
            path: "user",
            name: "用户",
            component: () =>
              import(
                /* webpackChunkName: "user" */ "@/views/mobile/setting/edit/user.vue"
              ),
          },
        ],
      },
    ],
  },
];

// export const mobile = [
//   {
//     path: "/mobile",
//     component: () =>
//       import(/* webpackChuunkName: "mobile" */ "@/views/mobile/index.vue"),
//   },
//   {
//     path: "/content",
//     component: () =>
//       import(
//         /* webpackChunkName: "content" */ "@/views/mobile/content/index.vue"
//       ),
//   },
//   {
//     path: "/setting",
//     component: () =>
//       import(
//         /* webpackChunkName: "setting" */ "@/views/mobile/setting/index.vue"
//       ),
//   },
// ];
