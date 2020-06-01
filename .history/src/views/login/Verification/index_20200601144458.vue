<!-- @format -->
<!-- 验证码页面  (图形验证码)  -->
<template>
  <div id="Verification">
    <canvas id="tutorial" ref="tutorial" width="150" height="150"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Verification",
})
export default class Verification extends Vue {
  private created() {
    this.canvasInit();
  }
  private canvasInit() {
    let canvas = this.$refs.tutorial;
    console.log(canvas);
  }
}
</script>

<style lang="less" scope></style>
