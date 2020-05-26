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

      <el-card class="setting-userName" shadow="hover">
        <span>昵称</span>
        <el-input v-model="userName" placeholder="请输入内容"></el-input>
      </el-card>

      <el-card class="setting-jianjie" shadow="hover">
        <span>简介</span>
      </el-card>

      <el-button type="primary" class="submit-button">保存</el-button>
    </el-card>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="选择时间"
              v-model="ruleForm.date2"
              style="width: 100%;"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
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
  private userName: string = "";

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
    .setting-userName {
      margin-bottom: 20px;
    }
    .submit-button {
      // text-align: center;
      margin-top: 20px;
      margin-left: 45%;
    }
  }
}
</style>
