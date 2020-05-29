<!-- @format -->

<template>
  <div id="Register">
    <span>注册信息</span>

    <el-form
      status-icon
      :model="RegisterForm"
      :rules="loginRules"
      ref="loginForm"
      class="login-form"
    >
      <el-form-item> </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Register",
})
export default class ClassName extends Vue {}
</script>

<style lang="scss" scope>
#Register {
  width: 300px;
  position: relative;
  height: 80px;
  text-align: center;
  > span {
    // line-height: 80px;
    display: inline-block;
    // text-align: center;
    margin-top: 15px;
  }
}
</style>
