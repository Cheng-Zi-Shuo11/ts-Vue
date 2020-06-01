<!-- @format -->

<template>
  <div>
    <editor
      api-key="no-api-key"
      :init="{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
        auto_focus: trues,
      }"
    />
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
}
</script>
<style lang="scss" scoped></style>
