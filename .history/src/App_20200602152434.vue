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
  private mounted() {
    if (document.body.clientWidth < 787) {
      this.$router.push("/mobile");
    } else {
      this.$router.push("/mobile");
    }
  }
}
</script>
<style lang="scss"></style>
