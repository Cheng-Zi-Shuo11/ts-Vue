<!-- @format -->

<template>
  <div id="content">
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <van-search
        v-model="value"
        shape="round"
        background="#fff"
        placeholder="请输入搜索关键词"
      />

      <van-swipe :autoplay="3000" width="auto" height="200">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" height="200" width="100%" />
        </van-swipe-item>
      </van-swipe>

      <div id="myEcharts" ref="myEcharts"></div>

      <div class="bug">
        <van-switch
          v-model="checked"
          active-color="#07c160"
          inactive-color="rgba(255,255,255,.8)"
          size="20px"
          @change="changeSwich"
        />
      </div>
      <van-skeleton title :row="3" :loading="!loading">
        <span class="solve">常见错误处理:</span>

        <van-button
          color="linear-gradient(to right, #4bb0ff, #6149f6)"
          block
          icon="star-o"
          v-for="(item, index) in TeachilalBug"
          :key="index"
          @click="showPopup(item)"
        >
          {{ item.text }}
        </van-button>

        <van-popup
          v-model="showPage"
          position="right"
          :style="{ width: '100%', height: '100%' }"
        >
          <van-nav-bar :title="navTitle" left-arrow @click-left="onClickLeft" />
          <!-- 弹出框页面 -->
          <van-collapse v-model="activeName" accordion>
            <div v-for="(item, index) in VueItem" :key="'if' + index">
              <div v-if="item.name === ItemNameFlag">
                <van-collapse-item
                  v-for="(item2, index2) in item.progress"
                  :key="index2"
                  :title="item2.problem"
                  :name="index2"
                  icon="bulb-o"
                >
                  {{ item2.solve }}
                </van-collapse-item>
              </div>
            </div>
          </van-collapse>
          <!-- 弹出框页面 -->
        </van-popup>
      </van-skeleton>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Toast } from "vant";
import { MobileDataModule } from "@/store/mobile/modules/data";

let dfColor = {
  // type: "linear",
  x: 0,
  y: 0,
  x2: 1,
  y2: 0,
  // colorStops: [
  //   {
  //     offset: 1,
  //     color: "#0489f0", // 0% 处的颜色
  //   },
  //   {
  //     offset: 0,
  //     color: "#28d9e8", // 100% 处的颜色
  //   },
  // ],
  // global: false, // 缺省为 false
};

let provRank = [
  "Vue",
  "React",
  "Angular",
  "git",
  "jquery",
  "canvas",
  "typescript",
];

@Component({
  name: "ContentPage",
})
export default class ContentPage extends Vue {
  private isLoading = false; // 下滑刷新

  private VueItem = MobileDataModule.PCTechicalItem; // 数据列表
  private activeName = ""; // 折叠面板参数
  private ItemNameFlag = ""; // 显示列表数据 判断

  private value = "";
  private images = [
    require("../../../assets/images/Technical-Logo/vue.jpg"),
    require("../../../assets/images/Technical-Logo/React.jpg"),
    require("../../../assets/images/Technical-Logo/Angular.jpg"),
    require("../../../assets/images/Technical-Logo/git.jpg"),
    require("../../../assets/images/Technical-Logo/jquery.jpg"),
    require("../../../assets/images/Technical-Logo/node.jpg"),
    require("../../../assets/images/Technical-Logo/typescript.jpg"),
  ];

  private myEcharts: any = null; // echarts对象
  private option: any = {
    // tooltip: {
    //   trigger: "axis",
    //   axisPointer: {
    //     type: "shadow",
    //   },
    //   formatter: function(objs: any, index: any) {
    //     let obj = objs[0];
    //     return `${obj.name}<br/>${obj.marker}${obj.seriesName} : ${obj.value} %`;
    //   },
    // },
    grid: {
      top: "3%",
      left: "3%",
      right: "2%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "category",
      boundaryGap: true,
      inverse: true, //反向
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        margin: 18,
        formatter: function(value, index) {
          var ind = index + 1;
          if (ind == 1) {
            return "{a|" + value + "}";
          } else if (ind == 2) {
            return "{b|" + value + "}";
          } else if (ind == 3) {
            return "{c|" + value + "}";
          } else {
            return "{d|" + value + "}";
          }
        },
        rich: {
          a: {
            color: "#fb4d4b",
          },
          b: {
            color: "#f39c12",
          },
          c: {
            color: "#00a65a",
          },
          d: {
            color: "#000",
          },
        },
      },
      data: provRank,
    },
    series: [
      {
        name: "学习进度",
        barMaxWidth: "20%",
        type: "bar",

        label: {
          normal: {
            show: true,
            formatter: "{c}",
            textStyle: {
              color: "#fff",
              fontSize: 10,
            },
          },
        },
        data: [
          {
            value: 110,
            itemStyle: {
              color: "#fb4d4b",
            },
          },
          {
            value: 20,
            itemStyle: {
              color: "#f39c12",
            },
          },
          {
            value: 40,
            itemStyle: {
              color: "#00a65a",
            },
          },
          {
            value: 30,
            itemStyle: {
              color: "#ccc",
            },
          },
          {
            value: 40,
            itemStyle: {
              color: "#ccc",
            },
          },
          {
            value: 50,
            itemStyle: {
              color: "#ccc",
            },
          },
          {
            value: 60,
            itemStyle: {
              color: "#ccc",
            },
          },
        ],
      },
    ],
  };

  private checked = false; // swich开关
  private loading = false; // 骨架屏显示
  private showPage = false; // 弹出层

  private TeachilalBug = [
    { text: "vue", path: "/mobile/vue" },
    { text: "React", path: "/mobile/React" },
    { text: "Angular", path: "/mobile/Angular" },
  ]; // button按钮

  private navTitle = "";

  // 下滑刷新的方法
  private onRefresh() {
    setTimeout(() => {
      Toast("刷新成功");
      this.isLoading = false;
    }, 1000);
  }

  private mounted() {
    this.initEchars();
    this.DataEcharts();
  }
  // 初始化echarts
  private initEchars() {
    this.myEcharts = this.$echarts.init(this.$refs.myEcharts as HTMLElement);
  }
  // echats数据处理方法
  private DataEcharts() {
    this.myEcharts.setOption(this.option);
  }
  // bug: 骨架屏开关
  private changeSwich() {
    this.checked === true ? (this.loading = true) : (this.loading = false);
  }
  // bug： van-button点击事件
  private showPopup(list: any) {
    this.showPage = true;
    this.navTitle = list.text;
    this.ItemNameFlag = list.text;
  }
  // 弹出层页面 退出按钮
  private onClickLeft() {
    this.showPage = false;
  }
}
</script>

<style lang="less" scope>
#content {
  #myEcharts {
    width: 100%;
    height: 300px;
    margin-top: 10px;
    margin-bottom: 10px;
    // background-color: #ccc;
  }

  .bug {
    margin-bottom: 20px;
    margin-left: 15px;
  }

  .solve {
    display: inline-block;
    margin-left: 15px;
    margin-bottom: 20px;
  }

  .van-button {
    margin-bottom: 2px !important;
  }
}
</style>
