<!-- @format -->

<template>
  <div id="setting">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>设置</span>
      </div>

      <el-card class="box-card">
        <span>头像</span>
      </el-card>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "setting",
})
export default class ClassName extends Vue {}
</script>

<style lang="less" scope></style>
