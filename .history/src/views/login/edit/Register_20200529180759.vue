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
      <el-form-item prop="name">
        <el-input
          placeholder="请输入账号"
          v-model="RegisterForm.account"
        ></el-input>
      </el-form-item>
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
</style>
