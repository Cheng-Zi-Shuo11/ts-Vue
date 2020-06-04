<!-- @format -->

<template>
  <div id="userMore">
    <van-nav-bar :left-text="navTitle" left-arrow @click-left="onClickLeft">
    </van-nav-bar>

    <van-dropdown-menu title="性别">
      <van-dropdown-item v-model="value1" :options="option1" />
      <!-- <van-dropdown-item v-model="value2" :options="option2" /> -->
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class userMore extends Vue {
  private navTitle = "更多";

  private onClickLeft() {
    this.$router.go(-1);
  }
}
</script>

<style lang="less" scope></style>
