<!-- @format -->

<template>
  <div id="setting">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>设置</span>
      </div>

      <el-card class="setting-photo" shadow="hover">
        <span>头像</span>

        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          style="text-align:right"
        >
          <img :src="imageUrl ? imageUrl : defaultImage" class="avatar" />
        </el-upload>
      </el-card>
      <el-card class="setting-jianjie" shadow="hover">
        <span>简介</span>
      </el-card>

      <el-button type="primary" class="submit-button" style="text-aligin:center"
        >保存</el-button
      >
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "setting",
})
export default class ClassName extends Vue {
  private imageUrl: any = "";
  private defaultImage: any = require("../../assets/images/mainBg.jpg");

  // 文件上传成功时的钩子
  private handleAvatarSuccess(res: any, file: any) {
    this.imageUrl = URL.createObjectURL(file.raw);
    window.localStorage.setItem("imageUrl", JSON.stringify(file.raw));
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
}
</script>

<style lang="scss" scope>
#setting {
  .box-card {
    .setting-photo {
      margin-bottom: 20px;
      .el-card__body {
        display: flex;
      }
      span {
        display: inline-block;
        line-height: 80px;
        flex: 1;
      }
      .avatar-uploader .el-upload {
        width: 80px;
        flex: 1;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 24px;
        color: #8c939d;
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
      }
      .avatar {
        width: 80px;
        height: 80px;
        display: block;
      }
    }
  }
}
</style>
