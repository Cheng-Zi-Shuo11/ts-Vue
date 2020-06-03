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
      <span class="userName">用户名</span>
      <span class="account">账户名</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Image as VanImage } from "vant";

Vue.use(VanImage);
@Component({
  name: "UserImage",
})
export default class UserImage extends Vue {}
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
