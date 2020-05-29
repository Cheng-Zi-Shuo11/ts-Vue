<!-- @format -->

<template>
  <div id="login-container">
    <loginConvas />
    <section></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form as ElForm } from "element-ui";
import { UserModule } from "@/store/modules/user";
import loginConvas from "./login-convas.vue";
import axios from "axios";

@Component({
  name: "login",
  components: {
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

  .login-form {
    padding: 30px 20px 20px 20px;
    position: relative;
    width: 300px;
    max-width: 300px;
    margin: 0 auto;
    overflow: hidden;
    > footer {
      text-align: center;
      width: 100%;
      > button {
        width: 100%;
      }
    }
  }
}
</style>
