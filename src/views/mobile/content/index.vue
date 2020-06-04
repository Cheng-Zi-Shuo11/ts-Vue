<!-- @format -->

<template>
  <div id="content">
    <van-search
      v-model="value"
      shape="round"
      background="#fff"
      placeholder="请输入搜索关键词"
    />

    <van-swipe :autoplay="3000" width="auto" height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" height="200" width="100%" />
      </van-swipe-item>
    </van-swipe>

    这儿是echarts的柱状图
    <br />
    <br />
    常见错误处理 <br />
    [Vue warn]: Do not use built-in or reserved HTML elements as component id:
    content
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "content",
})
export default class ClassName extends Vue {
  private value = "";
  private images = [
    require("../../../assets/images/Technical-Logo/vue.jpg"),
    require("../../../assets/images/Technical-Logo/React.jpg"),
    require("../../../assets/images/Technical-Logo/Angular.jpg"),
    require("../../../assets/images/Technical-Logo/git.jpg"),
    require("../../../assets/images/Technical-Logo/jquery.jpg"),
    require("../../../assets/images/Technical-Logo/node.jpg"),
    require("../../../assets/images/Technical-Logo/typescript.jpg"),
  ];
}
</script>

<style lang="less" scope></style>
