<!-- @format -->

<template>
  <div id="vueNote">
    <!-- <svg
              class="icon"
              aria-hidden="true"
              :style="{ fontSize: '50px', lineHeight: '40px' }"
            >
              <use xlink:href="#icon-vue"></use>
    </svg> -->

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        :clickable="true"
        v-for="(item, index) in list"
        :key="index"
        @click="openPopup(item)"
      >
        <div class="left">
          <van-image
            round
            width="3rem"
            height="3rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          ></van-image>
        </div>
        <div class="right">
          <span class="right-title">{{ item.title }}</span>
          <span class="right-content">{{ item.content }}</span>
        </div>
      </van-cell>
    </van-list>

    <van-popup
      v-model="showArticleContent"
      position="bottom"
      :style="{ height: '80%', width: '100%' }"
    >
      <artical :PropArticalContent="articalContent" />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MobileDataModule } from "@/store/mobile/modules/data";
@Component({
  name: "vue",
  components: {
    artical: () => import("../title/artical.vue"),
  },
})
export default class vue extends Vue {
  private showArticleContent: boolean = false;
  private list = MobileDataModule.ArticalItem;

  private articalContent: any = ""; // 传递的对象

  private loading = false;
  private finished = false;

  private onLoad() {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    setTimeout(() => {
      // for (let i = 0; i < 10; i++) {
      //   this.list.push(this.list.length + 1);
      // }

      // 加载状态结束
      this.loading = true;

      // 数据全部加载完成
      // if (this.list.length >= 40) {
      //   this.finished = true;
      // }
    }, 1000);
  }
  private openPopup(list: any) {
    this.showArticleContent = true;
    let arr = [];
    arr.push(list);

    this.articalContent = arr;
  }
}
</script>

<style lang="less" scope>
#vueNote {
  .van-cell {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
  }
  .van-cell__value {
    display: flex;
    padding: 0px 10px;
  }
  .left {
    flex: 1;
  }
  .right {
    flex: 3;
    .right-title {
      display: block;
      width: 280px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 700;
    }
    .right-content {
      display: block;
      width: 280px;
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
