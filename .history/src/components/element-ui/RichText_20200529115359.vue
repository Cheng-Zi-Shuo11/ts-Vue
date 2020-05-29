<!-- @format -->

<template>
  <div>
    {{ msg }}
    <tinymce-editor
      ref="editor"
      v-model="msg"
      :disabled="disabled"
      :base-url="baseUrl"
      :language="language"
      :skin="skin"
      @onClick="onClick"
    >
    </tinymce-editor>
    <button @click="clear">清空内容</button>
    <button @click="disabled = true">禁用</button>
    <button @click="disabled = false">启用</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TinymscEditor from "./tinymsc-editor/index.vue";

@Component({
  name: "RichText",
  components: { TinymscEditor },
})
export default class RichText extends Vue {
  private msg = "Welcome to Use Tinymce Editor-liubing.me";
  private disabled = false;
  private baseUrl =
    process.env.NODE_ENV === "production" ? "/vue-use-tinymce" : "";
  private language = "zh_CN";
  private skin = "oxide";

  // 鼠标单击的事件
  private onClick(e, editor) {
    console.log("Element clicked");
    console.log(e);
    console.log(editor);
  }
  // 清空内容
  private clear() {
    this.$refs.editor.clear();
  }
}
</script>

<style lang="less" scope></style>
