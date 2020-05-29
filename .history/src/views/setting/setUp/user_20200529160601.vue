<!-- @format -->

<template>
  <div>
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
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {}
</script>

<style lang="less" scope></style>
