<!-- @format -->

<template>
  <div id="Technical">
    <!-- 技术掌握程度 -->
    <el-card class="box-card" shadow="hover">
      <div id="Technical-chart"></div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

let lineitemStyle = {
  normal: {
    color: "rgba(202, 205, 205, 0)",
    borderColor: "#fff",
    borderWidth: 2,
    // shadowColor: "rgba(0, 0, 0, .6)",
    shadowBlur: 0,
    shadowOffsetY: 1,
    shadowOffsetX: 1,
  },
};

@Component
export default class Technical_chart extends Vue {
  @Prop() public TechicalItem!: any;

  private Technical: any = null;

  private option: any = {
    title: {
      text: "学习情况统计",
      textStyle: {
        fontWeight: "normal",
        fontSize: 16,
        color: "#000",
      },
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(205,245,245,0.9)",
      formatter: function(prams: any) {
        return "使用率：" + prams[0].data + "%";
      },
    },
    grid: {
      // top: 100,
      left: 10,
      right: 10,
      bottom: 100,
    },
    dataZoom: [
      {
        show: false,
        height: 30,
        xAxisIndex: [0],
        bottom: 0,
        type: "slider",
        start: 1,
        end: 100,
        handleIcon:
          "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
        handleSize: "110%",
        handleStyle: {
          color: "#555",
        },
      },
    ],

    xAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#fff",
          backgroundColor: "skyblue",
          padding: 10,
          // borderColor: "rgba(255, 255, 255, .3)",
          // borderWidth: "10",
        },
      },
      data: [],
    },
    yAxis: {
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        type: "scatter",
        symbolSize: 5,
        itemStyle: {
          color: {
            type: "radial",
            r: 1,
            colorStops: [
              {
                offset: 0,
                color: "black",
              },
              {
                offset: 1,
                color: "#fff",
              },
            ],
            global: false,
          },
        },
        silent: true,
        data: [34, 35, 45, 65, 67, 43, 24, 46, 34, 23, 23, 63],
      },
      {
        name: "拆线",
        type: "line",
        stack: "总量",
        symbolSize: 25,
        symbol: "circle",
        label: {
          normal: {
            show: true,
            position: "top",
            formatter: "{c}%",
            color: "skyblue",
          },
        },

        itemStyle: lineitemStyle,

        lineStyle: {
          normal: {
            color: "black",
            width: 1.5,
            shadowColor: "rgba(255,255,255,.3)",
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        data: [],
      },
      {
        name: "柱子",
        type: "bar",
        barGap: "-100%",
        barWidth: 50,
        label: {
          normal: {
            color: "#00f3fb",
          },
        },
        itemStyle: {
          normal: {
            borderColor: "rgba(0, 0, 0, .3)",
            borderWidth: "1",
            barBorderRadius: 25,
            color: "#fff",
          },
        },
        z: -12,
        data: [],
      },
    ],
  };

  mounted() {
    this.initTechnical();
    this.DataTechnical();
    this.Technical.setOption(this.option);
    // console.log(this.Technical);
  }

  private initTechnical() {
    this.Technical = (this as any).$echarts.init(
      document.getElementById("Technical-chart") as HTMLDivElement
    );
  }

  private DataTechnical() {
    this.option.xAxis.data = this.TechicalItem.map((item: any) => {
      return item.name;
    });
    this.option.series[2].data = this.TechicalItem.map((item: any) => 100);
    this.option.series[0].data = this.TechicalItem.map(
      (item: any) => item.data
    );
    this.option.series[1].data = this.TechicalItem.map(
      (item: any) => item.data
    );
    this.Technical.setOption(this.option);
  }
}
</script>

<style lang="scss" scope>
#Technical {
  width: 1000px;
  height: 500px;
  margin-top: 20px;
  margin-left: 20px;
  .box-card {
    width: 100%;
    height: 100%;
    margin-left: 10px;
    #Technical-chart {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
