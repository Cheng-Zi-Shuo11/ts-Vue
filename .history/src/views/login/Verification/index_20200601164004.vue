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

    <el-button type="primary" @click="clickRandom"></el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "Verification",
})
export default class Verification extends Vue {
  @Prop({ default: "asdf" }) public identifyCode!: string;
  private fontSizeMin: number = 50;
  private fontSizeMax: number = 30;
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
    for (let i = 0; i < this.identifyCode.length; i++) {
      this.drawText(ctx, this.identifyCode[i], i);
    }
    this.drawLine(ctx);
    this.drawDot(ctx);
  }

  private drawText(ctx: CanvasRenderingContext2D, txt: string, i: number) {
    ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax);
    ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + "px SimHei"; //字体大小
    ctx.textBaseline = "alphabetic"; //基线对齐
    let x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1));
    let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5);
    var deg = this.randomNum(-45, 45);
    // 修改坐标原点和旋转角度
    ctx.translate(x, y); //移动不同位置  参数偏移量
    ctx.rotate((deg * Math.PI) / 180); //旋转 参数角度
    ctx.fillText(txt, 0, 0);
    // 恢复坐标原点和旋转角度
    ctx.rotate((-deg * Math.PI) / 180);
    ctx.translate(-x, -y);
  }

  private drawLine(ctx: CanvasRenderingContext2D) {
    // 绘制干扰线
    for (let i = 0; i < 8; i++) {
      ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax);
      ctx.beginPath(); // 新建一条路径
      ctx.moveTo(
        this.randomNum(0, this.contentWidth),
        this.randomNum(0, this.contentHeight)
      ); // 设置起点x,y
      ctx.lineTo(
        this.randomNum(0, this.contentWidth),
        this.randomNum(0, this.contentHeight)
      ); // 绘制直线， x,y  一条当前位置到x,y点的直线
      ctx.stroke(); // 通过线条绘制图形轮廓
    }
  }

  private drawDot(ctx: CanvasRenderingContext2D) {
    // 绘制干扰点
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = this.randomColor(0, 255);
      ctx.beginPath();
      ctx.arc(
        this.randomNum(0, this.contentWidth),
        this.randomNum(0, this.contentHeight),
        1,
        0,
        2 * Math.PI
      );
      ctx.fill(); // 通过填充路径的内容区域生成实心的图形
    }
  }

  private clickRandom() {
    let Str = "qwertyuiopasdfghjklzxcvbnm";
    for (let i = 0; i < Str.length; i++) {}
  }

  @Watch("identifyCode")
  private clickIdentifyCode() {
    this.canvasInit();
  }
}
</script>

<style lang="less" scope></style>
