<!-- @format -->

<template>
  <div class="dashboard-container">
    <template v-if="loading === true">
      <Loading />
    </template>

    <template v-else-if="loading === false">
      <el-backtop></el-backtop>

      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        router
      >
        <navMenu :navMenu="menuData" :PropCollapase="isCollapse" />
      </el-menu>

      <main>
        <Admin @isCollpase="handleCollpase" />
        <Tabs :PropMenuName="MenuName" />
      </main>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { navMenuModule } from "@/store/modules/navMenu";

@Component({
  name: "dashboard",
  components: {
    Admin: () => import("./admin/index.vue"),
    Tabs: () => import("./admin/Tabs.vue"),
    navMenu: () => import("./navMenu/index.vue"),
    Loading: () => import("../loading/index.vue"),
  },
})
export default class dashboard extends Vue {
  private isCollapse: boolean = false;
  private MenuName: string = "";
  private menuData = [
    {
      //一级
      entity: {
        id: 0,
        name: "dashboard",
        icon: "el-icon-message",
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
            id: 4,
            name: "vue",
            icon: "el-icon-tickets",
            alias: "Vue",
            value: "/note/vue",
          },
        },
        {
          entity: {
            id: 5,
            name: "react",
            icon: "el-icon-tickets",
            alias: "React",
            value: "/note/react",
          },
        },
        {
          entity: {
            id: 6,
            name: "typescript",
            icon: "el-icon-tickets",
            alias: "Typescript",
            value: "/note/typescript",
          },
        },
        {
          entity: {
            id: 7,
            name: "javascript",
            icon: "el-icon-tickets",
            alias: "Javascript",
            value: "/note/javascript",
          },
        },
        {
          entity: {
            id: 8,
            name: "canvas",
            icon: "el-icon-tickets",
            alias: "Canvas",
            value: "/note/canvas",
          },
        },
        {
          entity: {
            id: 9,
            name: "Git",
            icon: "el-icon-tickets",
            alias: "Git命令",
            value: "/note/git",
          },
        },
        {
          entity: {
            id: 10,
            name: "Webpack",
            icon: "el-icon-tickets",
            alias: "Webpack",
            value: "/note/Webpack",
          },
        },
      ],
    },
    {
      // 一级
      entity: {
        id: 3,
        name: "uiLibrary",
        icon: "el-icon-message",
        alias: "ui库",
      },
      childs: [
        {
          // 二级
          entity: {
            id: 100,
            name: "element-ui",
            icon: "el-icon-s-tools",
            alias: "element-ui",
            value: "/uiLibrary/element-ui",
          },
        },
      ],
    },
    {
      entity: {
        id: 4,
        name: "component",
        icon: "el-icon-s-goods",
        alias: "组件",
        childs: [
          {
            entity: {
              id: 40,
              name: "RichText",
              icon: "el-icon-plus ",
            },
          },
        ],
      },
    },
    {
      // 一级
      entity: {
        id: 9,
        name: "setting",
        icon: "el-icon-s-tools",
        alias: "设置",
      },
      childs: [
        {
          // 二级
          entity: {
            id: 10,
            name: "setting",
            icon: "el-icon-s-tools",
            alias: "个人中心",
            value: "/setting/userSetting",
          },
        },
      ],
    },
  ];
  private loading: boolean = true;

  created() {
    this.$router.push("/dashboard");
  }

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  private handleCollpase(val: boolean) {
    this.isCollapse = val;
  }

  private menuSelect(index: string, indexPath: string[]) {
    // console.log(indexPath);
  }

  private handleOpen(item: any) {
    // 把点击的对象传到标签页
    this.MenuName = item.entity;
    navMenuModule.SET_NAV_NAME(item.entity);
  }
}
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
<style lang="scss" scope>
.dashboard-container {
  width: 100%;
  height: 100%;
  display: flex;
  > main {
    flex: 1;
  }
}
</style>
