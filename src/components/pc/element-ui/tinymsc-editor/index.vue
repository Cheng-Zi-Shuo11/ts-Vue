<!-- @format -->

<template>
  <div>
    <editor api-key="no-api-key" :init="init" v-model="value" />

    <editor :init="inlineInit" v-model="value1"></editor>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Editor from "@tinymce/tinymce-vue";

@Component({ components: { Editor } })
export default class extends Vue {
  @Prop({ default: "vue-tinymce-" + +new Date() }) id!: string;
  //富文本框
  private value = "hello, welcome to Beijing";
  private value1 = "hello, welcome to Beijing";

  private init = {
    height: 500,
    menubar: `file edit`,
    plugins: ["image"], // 指定需加载的插件(为TinyMCE指定要加载的插件，此插件必须已存在plugins目录内，多个插件用空格分隔。默认TinyMCE不会加载任何插件。)
    language: "zh_CN",
    toolbar: `undo redo | styleselect | bold italic | link image`, //自定义工具栏
    // image_caption: true,
    toolbar_mode: "sliding", // 工具栏模式
    // toolbar_groups: {
    //   formatting: {
    //     text: "文字格式",
    //     tooltip: "Formatting",
    //     items: "bold italic underline | superscript subscript",
    //   },
    //   alignment: {
    //     icon: "align-left",
    //     tooltip: "alignment",
    //     items: "alignleft aligncenter alignright alignjustify",
    //   },
    // }, // 工具栏分组
    image_upload_url: "",
    toolbar_sticky: true, // 粘性工具栏
    auto_focus: true, // 自动获取焦点
    cache_suffix: "?v=5.0.0", // 缓存请求后缀: 该参数可在TinyMCE加载js和css文件时，在URL请求后面自动加上指定的后缀，多用于解决缓存问题。

    branding: false, // 隐藏右下角技术支持
    draggable_modal: true, // 模态窗口允许拖动,默认(false)
  };

  private inlineInit = {
    inline: true,
    menubar: false,
    language: "zh_CN",
  };
}
</script>
<style lang="scss" scoped></style>
