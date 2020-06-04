<!-- @format -->

<!-- 地址 -->
<template>
  <div id="userAddress">
    <van-nav-bar :left-text="navTitle" left-arrow @click-left="onClickLeft">
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {
  private navTitle = "修改地址";

  private onClickLeft() {
    this.$router.go(-1);
  }
}
</script>

<style lang="less" scope></style>
