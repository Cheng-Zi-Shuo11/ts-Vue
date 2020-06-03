<!-- @format -->

<template>
  <div id="publicTab">
    <van-nav-bar title="学习系统" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NavBar } from "vant";

Vue.use(NavBar);

@Component({
  name: "top",
})
export default class navMenu extends Vue {
  private onClickLeft() {
    this.$router.go(-1);
  }

  private onClickRight() {
    console.log("选择");
  }
}
</script>

<style lang="less" scope>
#publicTab {
}
</style>
