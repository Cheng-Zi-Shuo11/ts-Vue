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
// TODO: 
// FIXME:
// 测试： sourceTree 管理代码
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
    console.log("触发")
  }
}
</script>
<style lang="scss"></style>
