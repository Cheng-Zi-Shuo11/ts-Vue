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
        <el-form-item label="头像" prop="name">
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
          >
            <el-button type="success" round width="120" size="medium"
              >更换头像</el-button
            >
          </el-upload>
        </el-form-item>

        <el-form-item label="活动区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({
  name: "setting",
})
export default class ClassName extends Vue {
  private imageUrl: any = "";
  private defaultImage: any = require("../../assets/images/mainBg.jpg");
  private progressFlag: boolean = false;
  private progressPercent: number = 25;

  private ruleForm = {
    name: "",
    region: "",
    date1: "",
    date2: "",
    delivery: false,
    type: [],
    resource: "",
    desc: "",
  };
  private rules = {
    name: [
      { required: true, message: "请输入活动名称", trigger: "blur" },
      { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
    ],
    region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
    date1: [
      {
        type: "date",
        required: true,
        message: "请选择日期",
        trigger: "change",
      },
    ],
    date2: [
      {
        type: "date",
        required: true,
        message: "请选择时间",
        trigger: "change",
      },
    ],
    type: [
      {
        type: "array",
        required: true,
        message: "请至少选择一个活动性质",
        trigger: "change",
      },
    ],
    resource: [
      { required: true, message: "请选择活动资源", trigger: "change" },
    ],
    desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
  };

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
    console.log(res);
    this.progressFlag = true;
    let formdata = new FormData();
    formdata.append("image", res.file);
    axios({
      url: baseURL + "/image",
      method: "get",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        // progressEvent.loaded: 已上传文件的大小
        // progressEvent.total 被上传文件的总大小
        this.progressPercent =
          (progressEvent.loaded / progressEvent.total) * 100;
      },
    })
      .then((res) => {
        this.imageUrl = res.data.data;

        if (this.progressPercent === 100) {
          this.progressFlag = false;
          this.progressPercent = 0;
        }
      })
      .catch((error) => {
        console.log("error:" + error);
      });
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
</style>
