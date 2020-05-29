<!-- @format -->

<template>
  <div class="tinymce-editor">
    <editor :id="id" v-model="value" :init="init"></editor>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
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
  name: "TinymceEditer",
  components: {
    Editor,
  },
})
export default class tinymscEditor extends Vue {
  //设置prop id
  @Prop({ default: "vue-tinymce-" + +new Date() }) id!: string;

  //富文本框值
  private value: string = "";

  //富文本框init配置
  private get init() {
    return {
      selector: "#" + this.id, //富文本编辑器的id
      language: "zh_CN", //语言
      language_url: "/tinymce/zh_CN.js", //语言包
      skin_url: "/tinymce/skins/ui/oxide", //编辑器需要一个skin才能正常工作，所以要设置一个skin_url指向之前复制出来的skin文件
      menubar: false, //菜单条
      plugins:
        "link lists image code table colorpicker textcolor wordcount contextmenu  media table fullscreen preview pagebreak insertdatetime hr paste", //插件
      toolbar:
        "bold italic underline strikethrough  | fontselect | fontsizeselect | formatselect  | forecolor backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | removeformat| undo redo | link unlink image media insertdatetime table  hr pagebreak | code fullscreen preview", //工具条
      font_formats:
        "Arial=arial,helvetica,sans-serif; 宋体=SimSun;  微软雅黑=Microsoft Yahei; Impact=impact,chicago;", //字体
      fontsize_formats: "11px 12px 14px 16px 18px 24px 36px 48px 64px 72px", //文字大小
      height: 300, //高度
      branding: false, //水印
      elementpath: false, //底部元素路径
      paste_data_images: true, //允许粘贴图片
      video_template_callback: (data: any) => {
        //视频设置回调
        return `<video width="
                    ${data.width} " height="${data.height}"
                    ${data.poster ? 'poster="' + data.poster + '"' : ""}
                    controls="controls">
                    <source src="${data.source}"/>
                </video>`;
      },
    };
  }
}
</script>

<style lang="less" scope></style>
