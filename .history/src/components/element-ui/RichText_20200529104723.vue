<!-- @format -->
<!-- https://liubing.me/vue-tinymce-5.html -->
<template>
  <div id="Rich-Text">
    富文本编辑器

    <Editor id="tinymce" v-model="tinymceVal"></Editor>
  </div>
</template>

<script lang="ts">
// 没有ts编译， 怎么将js项目引入到ts项目中？？？
import { Component, Vue } from "vue-property-decorator";
import tinymce from "tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";

@Component({
  name: "RichText",
  components: { Editor },
})
export default class RichText extends Vue {
  private init = {
    language_url: "/tinymce/langs/zh_CN.js", // 语言包的路径
    language: "zh_CN", //语言
    skin_url: "/tinymce/skins/ui/oxide", // skin路径
    height: 300, //编辑器高度
    branding: false, //是否禁用“Powered by TinyMCE”
    menubar: false, //顶部菜单栏显示
  };
  private tinymceVal: any;
}
</script>

<style lang="less" scope></style>
