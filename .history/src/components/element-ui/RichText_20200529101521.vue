<!-- @format -->
<!-- 1. 引入 npm install --save @types/tinymce tinymce-->
<template>
  <div id="Rich-Text">
    富文本编辑器
  </div>
</template>

<script lang="ts">
// 没有ts编译， 怎么将js项目引入到ts项目中？？？
import { Component, Vue } from "vue-property-decorator";
import tinymce from "tinymce";

@Component({
  name: "RichText",
  components: {},
})
export default class RichText extends Vue {
  private created() {
    // console.log(tinymce);
  }
}
</script>

<style lang="less" scope></style>
