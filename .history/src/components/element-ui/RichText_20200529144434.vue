<!-- @format -->

<template>
  <div>
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

<style lang="less" scope></style>
