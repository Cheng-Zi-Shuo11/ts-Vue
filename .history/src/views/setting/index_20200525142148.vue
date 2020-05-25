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

<style lang="less" scope></style>
