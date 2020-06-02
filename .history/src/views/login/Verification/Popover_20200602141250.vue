<!-- @format -->

<template>
  <div id="Popover">
    <div class="vimg">
      <canvas id="sliderBlock" ref="sliderBlock"></canvas>
      <canvas id="codeImg" ref="codeImg"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Popover_Verification",
})
export default class ClassName extends Vue {
  private mounted() {
    this.drawCodeDom();
  }

  private drawCodeDom() {
    let canvas = this.$refs.Popover_code as HTMLCanvasElement,
      ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  }
}
</script>

<style lang="less" scope></style>
