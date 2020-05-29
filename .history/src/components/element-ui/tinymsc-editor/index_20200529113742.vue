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
  @Prop(String) public value: string = "";
  @Prop(Boolean) public disabled: boolean = false;
  @Prop([String, Array]) public plugins = "lists image media table wordcount";
  @Prop([String, Array]) public toolbar =
    "undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat";

  private init = {
    language_url: `${this.baseUrl}/tinymce/langs/zh_CN.js`,
    language: "zh_CN",
    skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide`,
    content_css: `${this.baseUrl}/tinymce/skins/content/default/content.css`,
    // skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide-dark`, // 暗色系
    // content_css: `${this.baseUrl}/tinymce/skins/content/dark/content.css`, // 暗色系
    height: 300,
    plugins: this.plugins,
    toolbar: this.toolbar,
    branding: false,
    menubar: false,
    // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
    // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
    images_upload_handler: (blobInfo, success, failure) => {
      const img = "data:image/jpeg;base64," + blobInfo.base64();
      success(img);
    },
  };
  private myValue = this.value;

  private mounted() {
    tinymce.init({});
  }

  // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
  // 需要什么事件可以自己增加
  public onClick(e) {
    this.$emit("input", e, tinymce);
  }

  public clear() {
    this.myValue = "";
  }
}
</script>

<style lang="less" scope></style>
