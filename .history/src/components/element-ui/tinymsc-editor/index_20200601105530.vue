<!-- @format -->

<template>
  <div>
    <editor api-key="no-api-key" :init="init" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Editor from "@tinymce/tinymce-vue";

@Component({ components: { Editor } })
export default class extends Vue {
  @Prop({ default: "vue-tinymce-" + +new Date() }) id!: string;
  //富文本框
  private value = "";

  private init = {
    height: 500,
    menubar: false,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste code help wordcount",
    ], // 指定需加载的插件(为TinyMCE指定要加载的插件，此插件必须已存在plugins目录内，多个插件用空格分隔。默认TinyMCE不会加载任何插件。)
    toolbar:
      "undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help",
    auto_focus: true, // 自动获取焦点
    cache_suffix: "?v=5.0.0", // 缓存请求后缀: 该参数可在TinyMCE加载js和css文件时，在URL请求后面自动加上指定的后缀，多用于解决缓存问题。

    branding: false, // 隐藏右下角技术支持
    draggable_modal: true, // 模态窗口允许拖动
  };
}
</script>
<style lang="scss" scoped></style>
