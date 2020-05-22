<!-- @format -->

<template>
  <div id="bug">
    <el-card class="box-card" shadow="hover">
      <span>常见bug处理</span>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {
  @Prop() public TechicalItem!: any;
}
</script>

<style lang="scss" scope>
#bug {
  margin-top: 20px;
  margin-left: 10px;
  width: 1000px;
  height: 500px;
  .box-card {
    width: 100%;
    height: 100%;
    span {
      display: block;
      text-align: left;
    }
  }
}
</style>
