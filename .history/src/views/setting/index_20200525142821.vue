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
export default class ClassName extends Vue {}
</script>

<style lang="scss" scope>
#setting {
  .box-card {
    .setting-photo {
      span {
        // line-height: 80px;
      }
      .avatar-uploader .el-upload {
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
        // font-size: 28px;
        color: #8c939d;
        width: 80px;
        height: 80px;
        // line-height: 80px;
        text-align: center;
      }
      .avatar {
        // width: 178px;
        // height: 178px;
        display: block;
      }
    }
  }
}
</style>
