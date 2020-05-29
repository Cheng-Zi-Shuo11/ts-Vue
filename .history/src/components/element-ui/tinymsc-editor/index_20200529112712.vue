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

@Component({
  name: "tinymscEditor",
})
export default class tinymscEditor extends Vue {}
</script>

<style lang="less" scope></style>
