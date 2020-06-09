<!-- @format -->

<template>
  <div id="note">
    <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
      vue移动端 事件都有哪些？？？？ 笔记都要记录哪一些？？？星期一完善这一块
    </van-notice-bar>

    <van-button
      color="linear-gradient(to right, #4bb0ff, #6149f6)"
      block
      icon="star-o"
      v-for="(item, index) in noteitem"
      :key="index"
      @click="clickPopup(item)"
    >
      {{ item.name }}
    </van-button>

    <van-popup
      v-model="showNote"
      position="bottom"
      :style="{ height: '100%', width: '100%' }"
    >
      <div class="title">
        <span class="title-text">
          <svg
            class="icon"
            aria-hidden="true"
            :style="{ fontSize: '26px', lineHeight: '40px' }"
          >
            <use :xlink:href="iconName"></use>
          </svg>
          {{ popuptext }}
        </span>
      </div>
      <div class="icon-add" @click="addTitle">
        <van-icon name="add-o" size="1.5em" />
      </div>
      <div class="icon-close">
        <van-icon name="close" size="1.5em" @click="closePopup"></van-icon>
      </div>
      <component :is="componentName"></component>
    </van-popup>

    <van-popup
      v-model="showArticle"
      position="bottom"
      :style="{ height: '100%', width: '100%' }"
    >
      <van-nav-bar left-arrow @click-left="onClickLeft" />
      <addArticle @closePopup="closeAddArtical" />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MobileDataModule } from "@/store/mobile/modules/data";

@Component({
  name: "note",
  components: {
    vue: () => import("./edit/vue.vue"),
    React: () => import("./edit/React.vue"),
    Angular: () => import("./edit/Angular.vue"),
    typescript: () => import("./edit/typeScript.vue"),
    Canvas: () => import("./edit/Canvas.vue"),
    Git: () => import("./edit/Git.vue"),
    addArticle: () => import("./title/index.vue"),
  },
})
export default class ClassName extends Vue {
  private noteitem = MobileDataModule.PCTechicalItem;

  private showNote: boolean = false; // 显示/隐藏 弹出框
  private componentName = ""; // 组件名称

  private popuptext: string = ""; // 弹出框标题
  private iconName: string = ""; // iconFont字体图标
  private showArticle: boolean = false;

  // 打开笔记的页面
  private clickPopup(list: any) {
    this.showNote = true;
    if (list.name === "canvas") {
      this.componentName = "Canvas";
    } else {
      this.componentName = list.name;
    }
    this.popuptext = `${list.name}笔记`;
    this.iconName = `#icon-${list.name}`;
  }
  // 关闭弹框
  private closePopup() {
    this.showNote = false;
    this.showArticle = false;
  }

  // 添加文章
  private addTitle() {
    this.showArticle = !this.showArticle;
  }

  // 添加文章页面关闭
  private onClickLeft() {
    this.showArticle = false;
  }
  // 子组件传给父组件的方法
  private closeAddArtical(flag: boolean) {
    console.log(flag);
  }
}
</script>

<style lang="less" scope>
#note {
  .van-button {
    margin-bottom: 5px;
  }
  .title {
    height: 40px;
    background-color: #f8f8ff;
    box-shadow: 0px 0px 20px #ccc;
    margin-bottom: 20px;
    .title-text {
      line-height: 40px;
      margin-left: 10px;
    }
  }
  .icon-close {
    position: absolute;
    right: 2%;
    top: 8px;
    // text-align: right;
    // margin-top: 5px;
    // margin-right: 5px;
  }
  .icon-add {
    position: absolute;
    right: 10%;
    top: 8px;
  }
}
</style>
