<!-- @format -->
<!-- 1. npm安装编辑器组件  npm install vue-quill-editor –save -->
<template>
  <div id="Rich-Text">
    富文本编辑器
  </div>
</template>

<script lang="ts">
// 没有ts编译， 怎么将js项目引入到ts项目中？？？
import { Component, Vue } from "vue-property-decorator";
// import VueQuillEditor from "vue-quill-editor";

@Component({
  name: "RichText",
})
export default class RichText extends Vue {}
</script>

<style lang="less" scope></style>
