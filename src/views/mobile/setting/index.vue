<!-- @format -->

<template>
  <div id="setting">
    <van-cell-group>
      <van-cell
        is-link
        to="/mobile/setting/user"
        @click="showPopup({ text: '个人信息' })"
      >
        <UserImage></UserImage>
      </van-cell>
      <van-cell
        is-link
        v-for="(item, index) in cellList"
        :key="index"
        :icon="item.icon"
        :to="item.path"
        :title="item.text"
        :color="item.color"
        @click="showPopup(item)"
      />
    </van-cell-group>

    <van-popup
      v-model="show"
      position="right"
      :style="{ width: '100%', height: '100%' }"
    >
      <!-- 不直接引用top组件，没有使用vuex状态管理，启用状态管理 -->
      <van-nav-bar :left-text="navTitle" left-arrow @click-left="onClickLeft" />
      <router-view></router-view>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  name: "setting",
  components: {
    UserImage: () => import("./UserImage.vue"),
  },
})
export default class setting extends Vue {
  private cellList = [
    {
      text: "设置",
      icon: "setting",
      path: "/mobile/setting/setUp",
      color: "yellow",
    },
  ];
  private navTitle = "";

  private show: boolean = false;

  private showPopup(item: any) {
    this.show = true;
    this.navTitle = item.text;
  }

  private onClickLeft() {
    this.show = false;
    this.$router.go(-1);
  }
}
</script>

<style lang="less" scope>
#setting {
  background-color: pink;
}
</style>
