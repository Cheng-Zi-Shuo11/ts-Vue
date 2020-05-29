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
import { Component, Vue } from "vue-property-decorator";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";

@Component({
  name: "tinymscEditor",
})
export default class tinymscEditor extends Vue {}
</script>

<style lang="less" scope></style>
