<!-- @format -->

<template>
  <div>
    <van-cell-group>
      <!-- <van-uploader :after-read="afterRead"> -->
      <van-cell is-link title="头像" center>
        <!-- <van-uploader v-model="fileList" :max-count="1" :deletable="false"> -->
        <van-image
          round
          width="4rem"
          height="4rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          @click="getImg"
        />
        <!-- </van-uploader> -->
      </van-cell>
      <van-cell
        v-for="(item, index) in userList"
        :key="index"
        :title="item.text"
        is-link
        @click="showPopup(item)"
      >
      </van-cell>
    </van-cell-group>

    <van-popup
      v-model="show"
      position="left"
      :style="{ width: '100%', height: '100%' }"
    >
      <!-- <component :is="componentName"></component> -->
      <router-view></router-view>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { ImagePreview } from "vant";
import { MobileUserModule } from "@/store/mobile/modules/user";

@Component({
  name: "user",
  components: {},
})
export default class user extends Vue {
  private userList = [
    {
      text: "昵称",
      component: "userName",
      path: "/mobile/setting/user/userName",
    },
    {
      text: "账号",
      component: "userAccout",
      path: "/mobile/setting/user/userAccout",
    },
    {
      text: "二维码名片",
      component: "userQR",
      path: "/mobile/setting/user/userQR",
    },
    {
      text: "更多",
      component: "userMore",
      path: "/mobile/setting/user/userMore",
    },
    {
      text: "我的地址",
      component: "userAddress",
      path: "/mobile/setting/user/userAddress",
    },
  ];

  private show: boolean = false;

  private afterRead(file: any) {
    // 此时可以自行将文件上传至服务器
    console.log(file);
  }

  private showPopup(item: any) {
    this.show = true;
    this.$router.push(item.path);
  }

  // private onClickLeft() {
  //   this.show = false;
  // }

  private getImg() {
    // 图片预览功能，使用函数
    ImagePreview({
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    });
  }

  @Watch("$route")
  private route(val: any) {
    if (val.path === "/mobile/setting/user") {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
</script>

<style lang="less" scope></style>
