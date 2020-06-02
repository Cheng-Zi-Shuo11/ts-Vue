<!-- @format -->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "app",
})
export default class App extends Vue {
  private mounted() {}
}
</script>
<style lang="scss"></style>
