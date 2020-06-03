<!-- @format -->

<template>
  <div id="mobile">
    <top-Tab></top-Tab>

    <div class="content">
      <router-view></router-view>
    </div>

    <bottom-Tab></bottom-Tab>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import topTab from "./publicTab/top.vue";
import bottomTab from "./publicTab/bottom.vue";
import setting from "./setting/index.vue";

@Component({
  name: "mobile",
  components: {
    topTab,
    bottomTab,
    setting,
  },
})
export default class ClassName extends Vue {}
</script>

<style lang="less" scope></style>
