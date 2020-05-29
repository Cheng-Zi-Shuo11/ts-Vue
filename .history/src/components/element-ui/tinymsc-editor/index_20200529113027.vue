<!-- @format -->

<template>
  <div class="tinymce-editor">
    <editor
      v-model="myValue"
      :init="init"
      :disabled="disabled"
      @onClick="onClick"
    >
    </editor>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import tinymce from "tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import "tinymce/plugins/image"; // 插入上传图片插件
import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/wordcount"; // 字数统计插件

@Component({
  name: "tinymscEditor",
  components: {
    Editor,
  },
})
export default class tinymscEditor extends Vue {
  @Prop(String) public value!: string = "";
  @Prop(Boolean) public disabled!: boolean = false;
  @Prop([String, Array]) public plugins = "lists image media table wordcount";
}
</script>

<style lang="less" scope></style>
