<!-- @format -->

<template>
  <div id="git">
    <!-- <h2>一. 配置</h2>
    <div class="page">
      # 查看配置列表 git config -l # 查看已设置的用户名 <br />
      git config --global --get user.name <br />

      # 设置用户名 <br />
      git config --global user.name "xiaoming" <br />

      # 查看已设置的邮箱 <br />
      git config --global --get user.email <br />

      # 设置邮箱 <br />
      git config --global user.email "example@example.com" <br />
    </div>
    <h2>二. 初始化本地仓库</h2>
    <div class="page">
      # 会在当前目录生成.git <br />
      git init <br />
    </div> -->
    <div class="git_cmd"></div>
    <h3>
      <a
        href="https://www.cnblogs.com/wangjingguan/p/12827482.html"
        target="_blank"
        >Git常用命令参考手册</a
      >
    </h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {}
</script>

<style lang="scss" scope>
#git {
  .git_cmd {
    h3 {
      a:hover {
        color: blue !important;
      }
    }
  }
}
</style>
