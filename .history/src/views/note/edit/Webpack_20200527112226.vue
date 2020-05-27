<!-- @format -->

<template>
  <div class="Webpack" :class="item.jsj === 0 ? 'red' : 'black'">
    Webpack
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Webpack",
})
export default class ClassName extends Vue {}
</script>

<style lang="less" scope></style>
