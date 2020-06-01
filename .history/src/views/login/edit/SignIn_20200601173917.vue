<!-- @format -->
<!-- 登录页面 -->

<template>
  <div id="SignIn">
    <div>
      <span>
        <el-avatar :size="75" :src="UserImage"></el-avatar>
      </span>
      <!-- <lang-select class="set-language"></lang-select> -->
    </div>
    <el-form
      status-icon
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      class="login-form"
    >
      <el-form-item prop="mobilePhone">
        <el-input
          type="phone"
          placeholder="请输入手机号"
          autocomplete="off"
          v-model="loginForm.mobilePhone"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-input
          v-model="VerificationVal"
          class="VerificationVal_input"
        ></el-input>
        <div @click="clickRandom" class="VerificationVal_div">
          <Verification :identifyCode="identifyCode" />
        </div>
      </el-form-item>

      <footer>
        <el-button type="primary" @click.native.prevent="handleLogin">
          登录</el-button
        >
      </footer>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form as ElForm } from "element-ui";
import { UserModule } from "@/store/modules/user";
import axios from "axios";
import Verification from "../Verification/index.vue";
let identifyCode = (): string => {
  let Str = "qwertyuiopasdfghjklzxcvbnm";
  for (let i = 0; i < 4; i++) {
    let a = Math.floor(Math.random() * Str.length);
    console.log(a);
    return Str.substring(a, a + 1);
  }
};

@Component({
  name: "SignIn",
  components: {
    Verification,
  },
})
export default class ClassName extends Vue {
  private VerificationVal = ""; // 验证码输入框
  // private identifyCode = () => {
  //   let Str = "qwertyuiopasdfghjklzxcvbnm";
  //   for (let i = 0; i < 4; i++) {
  //     let a = Math.floor(Math.random() * Str.length);
  //     console.log(a);
  //     return Str.substring(a, a + 1);
  //   }
  // };

  private validateMobilePhone = (
    rule: any,
    value: string,
    callback: Function
  ) => {
    if (!value.trim()) {
      callback(new Error("请输入手机号"));
    } else {
      callback();
    }
  };

  private validatePassword = (rule: any, value: string, callback: Function) => {
    if (value.length < 6) {
      callback(new Error("密码长度不能小于6位"));
    } else {
      callback();
    }
  };

  private loginForm = {
    mobilePhone: "18536599049",
    password: "a12345",
  };

  private loginRules = {
    mobilePhone: [{ validator: this.validateMobilePhone, trigger: "blur" }],
    password: [{ validator: this.validatePassword, trigger: "blur" }],
  };

  private UserImage = require("@/assets/images/mainBg.jpg");

  private handleLogin() {
    if (this.VerificationVal === identifyCode) {
      // TODO: 特别提醒： 登录事件是(this.$refs.loginForm as ElForm).validate() => {}，而非this.$refs.loginForm.validate() => {}， 与原始有着明显的差别， 直接用后者是会报错的
      // 要先引用element-ui的Form组件，然后再使用this.$refs.loginForm as ElForm，这样你就有Form组件的validate方法了，自此登录页表单校验就搭建完成了
      (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
        if (valid) {
          // 调用vuex的action方法，即原始的this.$store.commit('action')，在vuex+ts项目中，调用异步函数Action，引用模块之后直接调用里面的Action方法就好了，这些都要归功于vuex-module-decorators类库的封装
          // await UserModule.Login(this.loginForm);
          // console.log(this.$router);
          axios.post("/api/login").then((res) => {
            if (
              this.loginForm.mobilePhone === res.data.mobilephone &&
              this.loginForm.password === res.data.password
            ) {
              this.$router.push("/dashboard");
            } else {
              this.$message({
                message: "请输入正确的号码",
              });
            }
          });
        }
      });
    } else {
      this.$message.error("验证码输入错误");
      this.clickRandom();
    }
  }

  private clickRandom() {
    let Str = "qwertyuiopasdfghjklzxcvbnm";
    this.identifyCode = "";
    for (let i = 0; i < 4; i++) {
      let a = Math.floor(Math.random() * Str.length);
      this.identifyCode += Str.substring(a, a + 1);
    }
  }
}
</script>

<style lang="scss" scope>
$height: 80px;
#SignIn {
  > div {
    width: 300px;
    position: relative;
    height: $height;
    text-align: center;
    > span {
      line-height: $height;
      display: inline-block;
      text-align: center;
      margin-top: 15px;
      &:hover {
        transform: scale(1.2);
      }
    }
    .international {
      position: absolute;
      right: 0;
      top: 33px;
      right: 20px;
      cursor: pointer;
    }
  }
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
.VerificationVal_input {
  width: 100px !important;
  margin-right: 10px;
}
.VerificationVal_div {
  display: inline-block;
  width: 100px;
}
</style>
