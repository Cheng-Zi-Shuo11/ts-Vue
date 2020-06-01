<!-- @format -->

<template>
  <div id="Rich_Text">
    富文本编辑框
    <tinymce></tinymce>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tinymce from "./tinymsc-editor/index.vue";

@Component({
  components: {
    Tinymce,
  },
})
export default class ClassName extends Vue {}
</script>

<style lang="scss" scope></style>
