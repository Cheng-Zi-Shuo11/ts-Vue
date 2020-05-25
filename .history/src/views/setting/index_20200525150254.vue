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
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-card>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "setting",
})
export default class ClassName extends Vue {
  private imageUrl: any = require("../../assets/images/mainBg.jpg");

  // 文件上传成功时的钩子
  private handleAvatarSuccess(res: any, file: any) {
    this.imageUrl = URL.createObjectURL(file.raw);
  }
  // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
  private beforeAvatarUpload(file) {
    console.log(file);
  }
}
</script>

<style lang="scss" scope>
#setting {
  .box-card {
    .setting-photo {
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
