<!-- @format -->

<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TinymscEditor from "./tinymsc-editor/index.vue";

@Component({
  name: "RichText",
  components: { TinymscEditor },
})
export default class RichText extends Vue {}
</script>

<style lang="less" scope></style>
