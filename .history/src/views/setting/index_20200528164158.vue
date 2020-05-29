<!-- @format -->

<template>
  <div id="setting">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>设置</span>
      </div>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        label-position="left"
        class="demo-ruleForm"
      >
        <el-form-item label="头像" prop="imageUrl">
          <img
            v-if="!progressFlag"
            :src="imageUrl ? imageUrl : defaultImage"
            class="avatar"
          />
          <div class="hear-img" v-show="progressFlag">
            <el-progress
              type="circle"
              :percentage="progressPercent"
              :width="100"
            ></el-progress>
          </div>

          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :before-upload="beforeAvatarUpload"
            :http-request="uploadImg"
            v-show="!disabled"
          >
            <el-button type="success" round width="120" size="medium"
              >更换头像</el-button
            >
          </el-upload>
        </el-form-item>

        <el-form-item label="昵称" prop="name">
          <el-input
            v-model="ruleForm.name"
            placeholder="请输入昵称"
            :disabled="disabled"
          ></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="ruleForm.email"
            placeholder="请输入邮箱"
            :disabled="disabled"
          ></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="gender">
          <el-radio
            v-model="ruleForm.gender"
            label="1"
            border
            size="medium"
            :disabled="disabled"
            >男性前端
          </el-radio>
          <el-radio
            v-model="ruleForm.gender"
            label="2"
            border
            size="medium"
            :disabled="disabled"
            >女性前端
          </el-radio>
        </el-form-item>

        <el-form-item label="地址" prop="address">
          <template>
            <el-select
              v-model="ruleForm.address.province"
              placeholder="省份"
              size="small"
              :disabled="disabled"
              @change="changeProvince"
            >
              <el-option
                v-for="(item, index) in province"
                :key="index"
                :value="item.name"
                :label="item.name"
              >
              </el-option>
            </el-select>

            <el-select
              v-model="ruleForm.address.city"
              placeholder="城市"
              size="small"
              :disabled="disabled"
            >
              <el-option
                v-for="item in city"
                :label="item"
                :value="item"
                :key="item"
              >
              </el-option>
            </el-select>

            <el-input
              v-model="ruleForm.address.detailed"
              placeholder="详细地址"
              :disabled="disabled"
            ></el-input>
          </template>
        </el-form-item>

        <el-form-item label="简介" prop="">
          <el-input
            type="textarea"
            v-model="ruleForm.textarea"
            :disabled="disabled"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="success" @click="submitForm('ruleForm')"
            >保存</el-button
          >
          <el-button @click="disabled = false">修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import axios from "axios";
import { navMenuModule } from "@/store/modules/navMenu";
import { ChianProvinceModule } from "@/store/modules/ChinaProvince";

@Component({
  name: "setting",
})
export default class ClassName extends Vue {
  private imageUrl: any = "";
  private defaultImage: any = require("../../assets/images/mainBg.jpg");
  private progressFlag: boolean = false;
  private progressPercent: number = 25;
  private disabled: boolean = true;
  private ruleForm = {
    imageUrl: "",
    name: "",
    email: "",
    gender: "",
    address: {
      province: [],
      city: [],
      county: "",
      detailed: "",
    },
  };
  private province = "";
  private city = "";
  private rules = {
    name: [
      { required: true, message: "请输入昵称", trigger: "blur" },
      { min: 3, max: 7, message: "长度在 3 到 7 个字符", trigger: "blur" },
    ],
    email: [
      { required: true, message: "请输入邮箱地址", trigger: "blur" },
      {
        type: "email",
        message: "请输入正确的邮箱地址",
        trigger: ["blur", "change"],
      },
    ],
    // gender: [
    //   {
    //     type: "array",
    //     required: true,
    //     message: "请选择性别",
    //     trigger: "blur",
    //   },
    // ],
  };

  private created() {
    this.getProvince();
    this.judgeUserInformation();
  }

  private getProvince() {
    let arr: any[] = [];

    ChianProvinceModule.province.forEach((item, index) => {
      arr.push({
        name: item.name,
        index: index,
      });
    });

    (this.province as any) = arr;
  }
  // 文件上传成功时的钩子
  private handleAvatarSuccess(res: any, file: any) {
    this.imageUrl = URL.createObjectURL(file.raw);
  }

  // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
  private beforeAvatarUpload(file: any) {
    const isJGP = file.type === "image/jpeg";
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJGP) {
      this.$message.error("上传头像图片只能是jpg格式");
    }

    if (!isLt2M) {
      this.$message.error("上传头像图片大小不能超过 2MB!");
    }

    return isJGP && isLt2M;
  }

  private uploadImg(res: any) {
    let resA = res;

    this.progressFlag = true;
    let formdata = new FormData();
    formdata.append("image", res.file);
    // axios({
    //   url: baseURL + "/image",
    //   method: "get",
    //   data: formdata,
    //   headers: { "Content-Type": "multipart/form-data" },
    //   onUploadProgress: (progressEvent) => {
    //     // progressEvent.loaded: 已上传文件的大小
    //     // progressEvent.total 被上传文件的总大小
    //     this.progressPercent =
    //       (progressEvent.loaded / progressEvent.total) * 100;
    //   },
    // })
    //   .then((res) => {
    //     this.imageUrl = res.data.data;

    //     if (this.progressPercent === 100) {
    //       this.progressFlag = false;
    //       this.progressPercent = 0;
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error:" + error);
    //   });
    let vm = this;
    setTimeout(function() {
      console.log(res);
      vm.progressPercent = 100;
      // console.log(resA);
      vm.imageUrl = URL.createObjectURL(resA.file);
      navMenuModule.SET_IMAGE_URL(vm.imageUrl);
    }, 2000);

    setTimeout(() => {
      if (vm.progressPercent === 100) {
        vm.progressFlag = false;
      }
    }, 2000);
  }

  // 地址，下拉框选中值发生变化时触发
  private changeProvince(val: any) {
    ChianProvinceModule.province.forEach((item) => {
      if (val === item.name) {
        (this.city as any) = item.city;
      }
    });
  }

  @Watch("ruleForm.address.province", { deep: true })
  private listenProvince() {
    (this.ruleForm.address.city as any) = "";
  }

  // 表单验证
  private submitForm(formName: any) {
    (this.$refs[formName] as any).validate((valid: boolean) => {
      if (valid) {
        this.$message.success("保存成功");
        this.disabled = true;
        if (window.localStorage) {
          window.localStorage.setItem(
            "用户信息",
            JSON.stringify(this.ruleForm)
          );
        }
      } else {
        this.$message.error("error submit");
        this.disabled = false;
        return false;
      }
    });
  }

  //
  private judgeUserInformation() {
    let form = window.localStorage.getItem("用户信息");
    form = JSON.parse(form as any);
    console.log(form);
  }
}
</script>

<style lang="scss" scope>
#setting {
  .box-card {
    .setting-photo {
      margin-bottom: 20px;
      .el-card__body {
        span {
          display: inline-block;
          line-height: 80px;
        }
      }
    }
  }
  .avatar-uploader {
    width: 0;
    display: inline-block;
    line-height: 100px;
    margin-left: 30px;
  }
  .avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader {
    text-align: center !important;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 24px;
    color: #8c939d;
    line-height: 80px;
    text-align: center;
  }
}
// 头像样式
.avatar {
  width: 100px;
  height: 100px;
  display: block;
  display: inline-block;
  transition: all 0.5s linear;
}
.avatar:hover {
  transform: scale(1.5);
  box-shadow: 1px 1px 10px 1px #ccc;
}
.hear-img {
  display: inline-block;
}

.el-form-item__label::before {
  content: "" !important;
  margin-right: 0px !important;
}
</style>
