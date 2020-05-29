<!-- @format -->

<template>
  <div id="login-container">
    <loginConvas />

    <div class="toggle-edit"></div>

    <section>
      <SignIn></SignIn>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignIn from "./edit/SignIn.vue";
import axios from "axios";
import loginConvas from "./login-convas.vue";

@Component({
  name: "login",
  components: {
    SignIn,
    loginConvas,
  },
})
export default class login extends Vue {}
</script>

<style lang="scss" scope>
#login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: $loginBg;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  > section {
    position: absolute;
    background-color: rgba(250, 250, 250, 0.8);
    border-radius: 5px;
  }
}
</style>
