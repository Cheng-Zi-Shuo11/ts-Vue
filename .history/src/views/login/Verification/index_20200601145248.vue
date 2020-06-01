<!-- @format -->
<!-- 验证码页面  (图形验证码)  -->
<template>
  <div id="Verification">
    <canvas id="tutorial" ref="tutorial" width="150" height="150"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "Verification",
})
export default class Verification extends Vue {
  @Prop({ default: "asdf" }) public identifyCode!: string;
  private mounted() {
    this.canvasInit();
  }
  private canvasInit() {
    let canvas = this.$refs.tutorial as HTMLCanvasElement,
      ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  }
}
</script>

<style lang="less" scope></style>
