<!-- @format -->
<!-- 1. npm安装编辑器组件  npm install vue-quill-editor –save -->
<template>
  <div id="Rich-Text">
    富文本编辑器
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "RichText",
})
export default class RichText extends Vue {}
</script>

<style lang="less" scope></style>
