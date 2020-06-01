<!-- @format -->

<template>
  <div id="Popover">
    我是弹框组件哦！！！

    <canvas
      id="Popover_code"
      ref="Popover_code"
      width="300"
      height="300"
    ></canvas>
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
