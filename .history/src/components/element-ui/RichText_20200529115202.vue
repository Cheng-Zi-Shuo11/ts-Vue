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
export default class RichText extends Vue {
  private msg= 'Welcome to Use Tinymce Editor-liubing.me',
  private     disabled= false,
  private     baseUrl= process.env.NODE_ENV === 'production' ? '/vue-use-tinymce' : '',
  private     language= 'zh_CN',
  private     skin= 'oxide'
}
</script>

<style lang="less" scope></style>
