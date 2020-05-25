<!-- @format -->

<template>
  <div id="uiLibrary">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {}
</script>

<style lang="less" scope></style>
