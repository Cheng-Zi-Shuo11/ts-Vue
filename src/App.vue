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
      this.$router.replace("/mobile");
      this.$util.routerFlag = true;
    } else {
      this.$router.replace("/dashboard");
      this.$util.routerFlag = false;
    }
    console.log(this.$util);
  }
}
</script>
<style lang="scss"></style>
