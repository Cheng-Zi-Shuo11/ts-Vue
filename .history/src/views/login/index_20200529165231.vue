<!-- @format -->

<template>
  <div id="login-container">
    <loginConvas />

    <div class="toggle-edit">
      <el-button
        type="primary"
        v-for="(item, index) in toggleList"
        :key="'toggle' + index"
        @click="toggleEdit(item)"
        width="100%"
      >
        {{ item.text }}
      </el-button>
    </div>

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
export default class login extends Vue {
  private toggleList = [{ text: "登录" }, { text: "注册" }];
  private toggleEdit(item: any) {
    console.log(item);
  }
}
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

  > .toggle-edit {
    width: 300px;
    position: absolute;
    top: 0;
    // left: 50%;
    text-align: center;
  }
}
</style>
