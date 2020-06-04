<!-- @format -->

<template>
  <div id="userAccout">
    <van-nav-bar :left-text="navTitle" left-arrow @click-left="onClickLeft">
    </van-nav-bar>

    <van-cell-group>
      <van-field v-model="value" readonly />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class userAccout extends Vue {
  private navTitle = "账号";
  private value = "CC555-666";

  private onClickLeft() {
    this.$router.go(-1);
  }
}
</script>

<style lang="less" scope></style>
