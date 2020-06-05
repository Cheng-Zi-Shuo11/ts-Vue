<!-- @format -->

<template>
  <div id="publicTab">
    <van-nav-bar title="学习系统" @click-left="onClickLeft">
      <template #left>
        <div class="left">
          <van-icon name="wap-nav" />
        </div>
      </template>
    </van-nav-bar>

    <van-popup
      v-model="show"
      position="left"
      :style="{ height: '100%', width: '30%' }"
    >
      <van-sidebar v-model="activeKey" route>
        <van-sidebar-item
          v-for="(item, index) in leftSiderBarItem"
          :key="index"
          :title="item.text"
          :to="item.path"
        />
      </van-sidebar>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  name: "top",
})
export default class navMenu extends Vue {
  private show = false;
  private activeKey = 0;
  private onClickLeft() {
    this.show = true;
  }

  private leftSiderBarItem = [
    {
      text: "主页",
      path: "/mobile",
    },
    {
      text: "笔记",
      path: "/mobile/note",
    },
  ];

  @Watch("$route")
  private route(route: any) {
    if (route.name === "默认显示") {
      this.activeKey = 0;
    }
  }
}
</script>

<style lang="less" scope>
#publicTab {
  .left {
    padding: 2px 10px;
  }
}
</style>
