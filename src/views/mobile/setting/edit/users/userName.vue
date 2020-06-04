<!-- @format -->
<!-- 修改昵称页面 -->
<template>
  <div id="userName" ref="popup">
    <van-nav-bar :left-text="navTitle" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-button
          type="primary"
          size="mini"
          text="保存"
          @click="saveUser"
        ></van-button>
      </template>
    </van-nav-bar>

    <van-cell-group>
      <van-field v-model="value" placeholder="请输入用户名" />
      <span class="text">好名字可以让别人更容易记住你</span>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MobileUserModule } from "@/store/mobile/modules/user";

@Component({
  name: "userName",
})
export default class userName extends Vue {
  private value = "";
  private navTitle = "修改昵称";

  private mounted() {}
  // 点击返回的箭头
  private onClickLeft() {
    this.$router.go(-1);
  }

  // 保存修改的昵称
  private saveUser() {
    MobileUserModule.SETUSERNAME(this.value);
  }
}
</script>

<style lang="less" scope>
#userName {
  .text {
    color: #ccc;
    font-size: 12px;
    margin-left: 4%;
  }
}
</style>
