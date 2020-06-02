<!-- @format -->

<template>
  <div id="canvas">
    <h2>绘制矩形</h2>
    <div class="page">
      fillRect(x, y, width, height) 绘制一个填充的矩形 <br />
      strokeRect(x, y, width,height) 绘制一个矩形的边框 <br />
      clearRect(x, y, width, height) 清除指定矩形区域，让清除部分完全透明。
    </div>

    <h2>绘制路径</h2>
    <div class="page">
      beginPath() 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
      <br />
      closePath() 闭合路径之后图形绘制命令又重新指向到上下文中。<br />
      stroke() 通过线条来绘制图形轮廓。<br />
      fill() 通过填充路径的内容区域生成实心的图形。<br />
      moveTo(x, y) 将笔触移动到指定的坐标x以及y上。<br />
      lineTo(x, y) 绘制一条从当前位置到指定x以及y位置的直线。<br />
    </div>

    <h2>圆弧</h2>
    <div class="page">
      arc(x, y, radius, startAngle, endAngle,
      anticlockwise)画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。<br />
      arcTo(x1, y1, x2, y2, radius)
      根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。<br />
    </div>

    <h2>二次贝塞尔曲线及三次贝塞尔曲线</h2>
    <div class="page">
      quadraticCurveTo(cp1x, cp1y, x, y)
      绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。<br />
      bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
      绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。<br />
    </div>

    <h2>色彩 colors</h2>
    <div class="page">
      fillStyle = color 设置图形的填充颜色。<br />
      strokeStyle = color 设置图形轮廓的颜色。<br />
      fillStyle示例(矩形):
      <canvas id="square_colors"></canvas> <br />
      fillStyle示例(圆形):
      <canvas id="arc_colors"></canvas>
    </div>

    <h2>透明度 Transparency</h2>
    <div class="page">
      globalAlpha = transparencyValue 这个属性影响到 canvas
      里所有图形的透明度，有效的值范围是 0.0 （完全透明）到
      1.0（完全不透明），默认是 1.0。<br />
      globalAlpha
      属性在需要绘制大量拥有相同透明度的图形时候相当高效。不过，我认为下面的方法可操作性更强一点。<br />
      globalAlpha 示例:
      <canvas id="globalAlpha"></canvas>
      <canvas id="globalApha1"></canvas>
    </div>

    <h2>线型 Line Styles</h2>
    <div class="page">
      lineWidth = value 设置线条宽度。<br />
      lineCap = type 设置线条末端样式。<br />
      lineJoin = type 设定线条与线条间接合处的样式。 <br />
      miterLimit = value
      限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。<br />
      getLineDash() 返回一个包含当前虚线样式，长度为非负偶数的数组。<br />
      setLineDash(segments) 设置当前虚线样式。<br />
      lineDashOffset = value 设置虚线样式的起始偏移量。<br />
    </div>

    <h2>图案样式 Patterns</h2>
    <div class="page">
      <canvas id="image_canvas"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {
  mounted() {
    this.squareColors();
    this.arcColors();
    this.globalAlpha();
    this.globalAlpha1();
    this.imageCanvas();
  }
  private squareColors() {
    let canvas = document.getElementById("square_colors") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        ctx.fillStyle =
          "rgb(" +
          Math.floor(255 - 42.5 * i) +
          "," +
          Math.floor(255 - 42.5 * j) +
          ",0)";
        ctx.fillRect(j * 25, i * 25, 25, 25);
      }
    }
  }
  private arcColors() {
    let canvas = document.getElementById("arc_colors") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        ctx.strokeStyle =
          "rgb(0," +
          Math.floor(255 - 42.5 * i) +
          "," +
          Math.floor(255 - 42.5 * j) +
          ")";
        ctx.beginPath();
        ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
        ctx.stroke();
      }
    }
  }
  private globalAlpha() {
    let canvas = document.getElementById("globalAlpha") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    // 画背景
    ctx.fillStyle = "#FD0";
    ctx.fillRect(0, 0, 75, 75);
    ctx.fillStyle = "#6C0";
    ctx.fillRect(75, 0, 75, 75);
    ctx.fillStyle = "#09F";
    ctx.fillRect(0, 75, 75, 75);
    ctx.fillStyle = "#F30";
    ctx.fillRect(75, 75, 75, 75);
    ctx.fillStyle = "#FFF";

    // 设置透明度值
    ctx.globalAlpha = 0.2;

    // 画半透明圆
    for (var i = 0; i < 7; i++) {
      ctx.beginPath();
      ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
  private globalAlpha1() {
    let canvas = document.getElementById("globalApha1") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    // 画背景
    ctx.fillStyle = "rgb(255,221,0)";
    ctx.fillRect(0, 0, 150, 37.5);
    ctx.fillStyle = "rgb(102,204,0)";
    ctx.fillRect(0, 37.5, 150, 37.5);
    ctx.fillStyle = "rgb(0,153,255)";
    ctx.fillRect(0, 75, 150, 37.5);
    ctx.fillStyle = "rgb(255,51,0)";
    ctx.fillRect(0, 112.5, 150, 37.5);

    // 画半透明矩形
    for (var i = 0; i < 10; i++) {
      ctx.fillStyle = "rgba(255,255,255," + (i + 1) / 10 + ")";
      for (var j = 0; j < 4; j++) {
        ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
      }
    }
  }
  private imageCanvas() {
    let canvas = document.getElementById("image_canvas") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    let img = new Image();
    // img.src = "https://mdn.mozillademos.org/files/222/Canvas_createpattern.png";
    img.onload = function() {
      // 创建图案
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
          ctx.drawImage(img, j * 50, i * 38, 50, 38);
        }
      }
    };
    img.src = "../../../assets/images/mainBg.jpg";
  }
}
</script>

<style lang="scss" scope>
#canvas {
  .page {
    width: 100%;
    height: 100%;
    border: 1px solid #000;
  }
}
</style>
