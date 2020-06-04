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
            children: [
              {
                path: "userName",
                name: "修改昵称",
                component: () =>
                  import(
                    /* webpackChunkName: "user" */ "@/views/mobile/setting/edit/users/userName.vue"
                  ),
              },
              {
                path: "userAccout",
                name: "修改账号",
                component: () =>
                  import(
                    /* webpackChunkName: "user" */ "@/views/mobile/setting/edit/users/userAccout.vue"
                  ),
              },
              {
                path: "userQR",
                name: "二维码",
                component: () =>
                  import(
                    /* webpackChunkName: "user" */ "@/views/mobile/setting/edit/users/userQR.vue"
                  ),
              },
              {
                path: "userMore",
                name: "修改更多",
                component: () =>
                  import(
                    /* webpackChunkName: "user" */ "@/views/mobile/setting/edit/users/userMore.vue"
                  ),
              },
              {
                path: "userAddress",
                name: "修改地址",
                component: () =>
                  import(
                    /* webpackChunkName: "user" */ "@/views/mobile/setting/edit/users/userAddress.vue"
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
];
