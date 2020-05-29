<!-- @format -->

<template>
  <div id="Register">
    <span>注册信息</span>

    <el-form
      status-icon
      :model="RegisterForm"
      :rules="RegisterRule"
      ref="RegisterForm"
      class="Register-form"
    >
      <el-form-item prop="name">
        <el-input
          placeholder="请输入昵称"
          v-model="RegisterForm.name"
        ></el-input>
      </el-form-item>

      <el-form-item prop="mobilephone">
        <el-input
          placeholder="请输入手机号"
          v-model="RegisterForm.account"
        ></el-input>
      </el-form-item>

      <el-form-item prop="mobilephone">
        <el-input
          placeholder="请输入新密码"
          v-model="RegisterForm.passworld"
        ></el-input>
      </el-form-item>

      <footer>
        <el-button type="primary">
          注册
        </el-button>
      </footer>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Register",
})
export default class ClassName extends Vue {
  private RegisterForm = {
    name: "",
    account: "",
    mobilephone: "",
    passworld: "",
  };
}
</script>

<style lang="scss" scope>
#Register {
  width: 300px;
  position: relative;
  // height: 80px;
  text-align: center;
  padding: 0 20px;
  > span {
    // line-height: 80px;
    display: inline-block;
    // text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
footer {
  margin-bottom: 20px;
  .el-button {
    width: 100% !important;
  }
}
</style>
