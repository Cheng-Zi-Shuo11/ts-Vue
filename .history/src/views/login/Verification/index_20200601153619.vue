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
  private fontSizeMin: number = 160;
              private fontSizeMax= 40,
              private backgroundColorMin= 180,
              private backgroundColorMax=240,
              private colorMin= 50,
              private colorMax= 160,
              private lineColorMin=40,
              private lineColorMax= 180,
              private dotColorMin= 0,
              private dotColorMax= 255,
              private contentWidth= 112,
              private contentHeight= 38

  private mounted() {
    this.canvasInit();
  }
  // 生成一个随机数
  private randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  // 生成一个随机的颜色
  private randomColor(min: number, max: number) {
    let r = this.randomNum(min, max);
    let g = this.randomNum(min, max);
    let b = this.randomNum(min, max);
    return `rgb(${r},${g},${b})`;
  }
  private canvasInit() {
    let canvas = this.$refs.tutorial as HTMLCanvasElement,
      ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    // ctx.fillStyle = this.randomColor(this.backgroundColor)
  }
}
</script>

<style lang="less" scope></style>
