<!-- @format -->

<template>
  <div class="Tabs">
    <div class="Tabs_tag">
      <!-- <el-tabs
        v-model="editableTabsValue"
        type="border-card"
        @tab-remove="removeTab"
        @tab-click="tabClick($event)"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          <router-view />
        </el-tab-pane>
      </el-tabs> -->
    </div>

    <div class="Tabs_breadcrumb">
      <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="list in BreadcrumbName"
          :key="'breadcrumb' + list"
          :to="{ path: list.path }"
          >{{ list.name }}</el-breadcrumb-item
        >
      </el-breadcrumb> -->
    </div>
    <div class="content">
      <!-- 一级路由 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from "vue-property-decorator";
import { navMenuModule } from "@/store/modules/navMenu";

declare module "vue/types/vue" {
  interface Vue {
    [key: string]: any;
  }
}
@Component({
  name: "Tabs",
})
export default class Tabs extends Vue {
  @Prop({ default: "首页" }) public PropMenuName!: any;

  @Watch("$route")
  private route(val: any) {
    // this.getBeradcrumb();
    // this.addTab();
  }

  private editableTabsValue: string = "";
  private editableTabs = [
    {
      title: "首页",
      name: "/dashboard",
    },
  ];
  private tabIndex: number = 2;
  private BreadcrumbName: any = [];

  private tabClick(tag: any) {
    // console.log(tag);
    this.$router.push(tag.name);
  }

  // private addTab() {
  //   // if (navMenuModule.nav_name.alias === "首页") {
  //   //   return;
  //   // }

  //   let newTabName = navMenuModule.nav_name.value;

  //   this.editableTabs.push({
  //     title: navMenuModule.nav_name.alias,
  //     name: navMenuModule.nav_name.value,
  //   });

  //   // this.editableTabs.forEach((item, index) => {
  //   //   if (item.title !== this.editableTabs[index].title) {
  //   //     // console.log(this.editableTabs[index].title);
  //   //     // return;
  //   //     // console.log("111");
  //   //   } else {
  //   //   }
  //   // });

  //   this.editableTabsValue = newTabName;
  // }

  private removeTab(targetName: string) {
    let tabs = this.editableTabs;
    let activeNames = this.editableTabsValue;
    if (activeNames === targetName) {
      tabs.forEach((item, index) => {
        if (item.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index + 2];
          if (nextTab) {
            activeNames = nextTab.name;
          }
        }
      });
    }
    this.editableTabsValue = activeNames;
    this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
  }

  private getBeradcrumb() {
    // console.log(navMenuModule);
    let arrName: any[] = [];
    let matched = this.$route.matched.filter((item) => {
      arrName.push({ name: item.name, path: item.path });
    });
    this.BreadcrumbName = arrName;
  }
}
</script>
<style lang="scss"></style>
<style lang="scss" scope>
.Tabs {
  width: 100%;
  // margin-top: 20px;

  .Tabs_tag {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
    background: url(../../../assets/images/adminBg.jpg) 100% 59%;
    background-size: 100%;
    box-shadow: 0px 10px 14px #333333;
    .el-tabs__header {
      // border-bottom: 0px !important;
      margin: 0 !important;
    }
  }

  .el-breadcrumb {
    display: inline-block;
    margin-left: 20px;
    margin-bottom: 6px;
    cursor: pointer;
    .el-breadcrumb__item {
      font-size: 14px;
    }
    i {
      font-size: 14px;
    }
  }
}
</style>
