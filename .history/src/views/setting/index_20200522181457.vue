<!-- @format -->

<template>
  <div id="setting">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>设置</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {}
</script>

<style lang="less" scope></style>
