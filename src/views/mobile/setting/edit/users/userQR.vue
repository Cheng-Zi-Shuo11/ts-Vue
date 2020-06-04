<!-- @format -->

<template>
  <div id="userQR">
    <van-nav-bar :left-text="navTitle" left-arrow @click-left="onClickLeft">
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class userQR extends Vue {
  private navTitle = "二维码";

  private onClickLeft() {
    this.$router.go(-1);
  }
}
</script>

<style lang="less" scope></style>
