<!-- @format -->

<template>
  <div id="conponent">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class components extends Vue {}
</script>

<style lang="less" scope></style>
