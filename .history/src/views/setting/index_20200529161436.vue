<!-- @format -->

<template>
  <div id="setting">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  name: "setting",
})
export default class ClassName extends Vue {}
</script>

<style lang="scss" scope>
#setting {
}
</style>
