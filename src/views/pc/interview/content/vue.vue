<!-- @format -->

<template>
  <div id="Interview-vue">
    <div class="tag">
      <el-card class="box-card" shadow="hover">
        <el-tag type="danger">标签五</el-tag>
        <br />
        <el-tag type="success">标签二</el-tag>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {}
</script>

<style lang="less" scope></style>
