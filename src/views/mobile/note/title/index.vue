<!-- @format -->

<template>
  <div id="addArticle">
    <van-cell-group>
      <van-field
        v-model="titleVal"
        label="标题"
        placeholder="请输入文章标题"
        :style="{ fontWeight: 700, fontSize: '18px' }"
      />

      <div class="textArea">
        <textarea
          name=""
          id=""
          v-model="text"
          placeholder="请输入内容"
        ></textarea>
      </div>

      <div class="addArtical-bottom">
        <van-button icon="records">存入草稿</van-button>
        <van-button type="primary" icon="description" @click.native="Publish"
          >发表</van-button
        >
      </div>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { MobileDataModule } from "@/store/mobile/modules/data";

@Component
export default class addArticle extends Vue {
  private titleVal = "";
  private text = "";

  // 发表文章功能
  private Publish() {
    if (this.titleVal && this.text) {
      MobileDataModule.addArticalItem({
        title: this.titleVal,
        content: this.text,
      });
      this.$emit("closePopup", false);
    } else {
      this.$message({
        type: "warning",
        message: "请输入",
      });
    }
  }

  @Watch("text")
  private getText(val: any) {
    // console.log(val);
  }
}
</script>

<style lang="less" scope>
#addArticle {
  width: 100%;
  .textArea {
    height: 400px;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 0 15px;
    textarea {
      width: 100%;
      height: 100%;
      // border: none;
      outline: none;
    }
  }
  .addArtical-bottom {
    // height: 300px;
    display: flex;
    padding: 0 15px;
    .van-button:nth-child(1) {
      flex: 1;
      margin-right: 10px;
    }
    .van-button:nth-child(2) {
      flex: 2;
      margin-right: 10px;
    }
  }
}
</style>
