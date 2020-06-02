/** @format */

import Mock from "mockjs";

const data = {
  mobilephone: "18536599049",
  password: "a12345",
  id: 123,
};

Mock.mock("/api/login", "post", data);

const navMenu = [
  {
    //一级
    entity: {
      id: 0,
      name: "dashboard",
      icon: "el-icon-menu",
      alias: "首页",
      value: "/dashboard",
    },
  },
  {
    //一级
    entity: {
      id: 1,
      name: "note",
      icon: "el-icon-edit",
      alias: "笔记",
    },
    // 二级
    childs: [
      {
        entity: {
          id: 3,
          name: "authManage",
          icon: "el-icon-s-order",
          alias: "Vue",
          value: "/dashboard/note",
        },
      },
      {
        entity: {
          id: 4,
          name: "roleManage",
          icon: "el-icon-s-order",
          alias: "React",
          value: "/dashboard/sas",
        },
      },
      {
        entity: {
          id: 2,
          name: "menuManage",
          icon: "el-icon-s-order",
          alias: "Angular",
          value: "/dashboard/sasas",
        },
      },
      {
        entity: {
          id: 5,
          name: "groupManage",
          icon: "el-icon-s-order",
          alias: "TypeScript",
          value: "/dashboard/noddwdwte",
        },
      },
    ],
  },
  {
    //一级
    entity: {
      id: 3,
      name: "dashboard",
      icon: "el-icon-s-cooperation",
      alias: "常用库",
      value: "/",
    },
  },
  {
    //一级
    entity: {
      id: 4,
      name: "dashboard",
      icon: "el-icon-s-ticket",
      alias: "插件",
      value: "/",
    },
  },
  {
    //一级
    entity: {
      id: 5,
      name: "setting",
      icon: "el-icon-more",
      alias: "设置",
    },
    // childs: [
    //   {
    //     entity: {
    //       id: 66,
    //       name: "setting-center",
    //       icon: "el-icon-s-order",
    //       alias: "个人中心",
    //       value: "/dashboard/setting",
    //     },
    //   },
    // ],
  },
];

Mock.mock("/navMenu", "get", navMenu);

export default Mock;
