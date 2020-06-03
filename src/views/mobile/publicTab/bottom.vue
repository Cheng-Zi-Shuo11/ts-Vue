<!-- @format -->

<template>
  <div id="bottom">
    <van-tabbar v-model="defaultActive" route>
      <van-tabbar-item
        v-for="(item, index) in tabbar"
        :key="index"
        :icon="item.icon"
        :to="item.path"
        :name="item.name"
      >
        {{ item.text }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
@Component({
  name: "bottomTab",
})
export default class ClassName extends Vue {
  private defaultActive = "home";
  private tabbar = [
    {
      text: "主页",
      icon: "wap-home-o",
      path: "/mobile",
      name: "home",
    },
    {
      text: "我",
      icon: "manager-o",
      path: "/mobile/setting",
      name: "user",
    },
  ];
}
</script>

<style lang="less" scope></style>
