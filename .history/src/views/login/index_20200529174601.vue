<!-- @format -->

<template>
  <div id="login-container">
    <loginConvas />
    <div class="toggle-edit">
      <el-button
        v-for="(item, index) in toggleList"
        :key="'toggle' + index"
        @click="toggleEdit(item)"
        width="150px"
      >
        {{ item.text }}
      </el-button>
    </div>

    <section>
      <SignIn v-if="activeScale"></SignIn>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({
  name: "login",
  components: {
    SignIn: () => import("./edit/SignIn.vue"),
    loginConvas: () => import("./login-convas.vue"),
  },
})
export default class login extends Vue {
  private toggleList = [{ text: "登录" }, { text: "注册" }];
  private activeScale: boolean = false;
  private toggleEdit(item: any) {
    item.text === "登录"
      ? (this.activeScale = true)
      : (this.activeScale = false);
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
    top: 28%;
    // left: 50%;
    text-align: center;
    display: flex;
    > .el-button {
      width: 100%;
      background-color: rgba(255, 255, 255, 0.8);
      margin-left: 0;
      margin-right: 2px;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
