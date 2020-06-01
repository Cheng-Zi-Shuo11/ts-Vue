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
}
</script>
<style lang="scss" scoped></style>
