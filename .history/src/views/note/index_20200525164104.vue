<!-- @format -->

<template>
  <div id="note">
    <!-- <component :is="noteName"></component> -->
    <!-- <vueComponetns /> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "note",
  components: {},
})
export default class ClassName extends Vue {
  private noteName: string = "vueComponetns";
}
</script>

<style lang="less" scope></style>
