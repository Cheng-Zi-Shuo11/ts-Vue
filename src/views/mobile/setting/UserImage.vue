<!-- @format -->

<template>
  <div id="UserImage">
    <div class="left">
      <van-image
        round
        width="5rem"
        height="5rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <div class="right">
      <span class="userName"> {{ userName }} </span>
      <span class="account">账户名</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { MobileUserModule } from "@/store/mobile/modules/user";

@Component({
  name: "UserImage",
})
export default class UserImage extends Vue {
  private userName = MobileUserModule.userName;

  private created() {}

  @Watch("MobileUserModule.userName")
  private getName(val) {
    console.log(val);
  }
}
</script>

<style lang="less" scope>
#UserImage {
  display: flex;
  .left {
    flex: 1;
  }
  .right {
    flex: 3;
    .userName {
      display: block;
      margin-bottom: 1.25rem;
      margin-top: 0.625rem;
    }
    .account {
      display: block;
    }
  }
}
</style>
