<!-- @format -->
<!-- 验证码页面  (图形验证码)  -->
<template>
  <div id="Verification">
    <canvas
      id="tutorial"
      ref="tutorial"
      :width="contentWidth"
      :height="contentHeight"
    ></canvas>
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
  private fontSizeMax: number = 40;
  private backgroundColorMin: number = 180;
  private backgroundColorMax: number = 240;
  private colorMin: number = 50;
  private colorMax: number = 160;
  private lineColorMin: number = 40;
  private lineColorMax: number = 180;
  private dotColorMin: number = 0;
  private dotColorMax: number = 255;
  private contentWidth: number = 112;
  private contentHeight: number = 38;

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

    ctx.fillStyle = this.randomColor(
      this.backgroundColorMin,
      this.backgroundColorMax
    );

    ctx.strokeStyle = this.randomColor(
      this.backgroundColorMin,
      this.backgroundColorMax
    );

    ctx.fillRect(0, 0, this.contentWidth, this.contentHeight); //绘制一个填充的矩形 0 0 width height x起点 y起点  宽 高
    ctx.strokeRect(0, 0, this.contentWidth, this.contentHeight); // 绘制一个矩形边框 0 0 width height x起点 y起点  宽 高
    // ctx.clearRect(50, 0, this.contentWidth, this.contentHeight); //清除指定矩形区域，清除部分完全透明
    // 绘制文字
    // for (let i = 0; i < this.identifyCode.lenght; i++) {

    // }
  }

  private drawText(ctx, txt, i) {
    ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax);
  }
}
</script>

<style lang="less" scope></style>
