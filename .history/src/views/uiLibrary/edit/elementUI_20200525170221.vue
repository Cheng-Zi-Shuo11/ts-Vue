<!-- @format -->

<template>
  <div id="elementUI">
    <div
      class="element-problem"
      v-for="(item, index) in problem"
      :key="'problem' + index"
    >
      <i class="el-icon-warning element-problem"></i>
      <span class="problem">问题:</span>
    </div>
    <div class="solve"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {}
</script>
<style lang="scss">
.element-problem {
  color: red;
}
</style>
<style lang="scss" scope>
#elementUI {
  .element-problem {
    .problem {
      color: #000;
    }
  }
}
</style>
