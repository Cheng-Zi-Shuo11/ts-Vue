<!-- @format -->

<template>
  <div id="note">
    <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
      vue移动端 事件都有哪些？？？？ 笔记都要记录哪一些？？？星期一完善这一块
    </van-notice-bar>

    <van-button
      color="linear-gradient(to right, #4bb0ff, #6149f6)"
      block
      icon="star-o"
      v-for="(item, index) in noteitem"
      :key="index"
    >
      {{ item.name }}
    </van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MobileDataModule } from "@/store/mobile/modules/data";

@Component
export default class ClassName extends Vue {
  private noteitem = MobileDataModule.PCTechicalItem;
}
</script>

<style lang="less" scope>
#note {
  .van-button {
    margin-bottom: 5px;
  }
}
</style>
