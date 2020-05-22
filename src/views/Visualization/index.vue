<!-- @format -->

<template>
  <div id="Visualization">
    <div class="Technical">
      <el-card
        shadow="hover"
        v-for="(item, index) in TechicalItem"
        :key="index"
      >
        <div @click="TeachicalClick(item, index)">
          <img :src="item.imageUrl" :alt="item.name" :title="item.name" />
        </div>
      </el-card>
    </div>
    <TechnicalCharts />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TechnicalCharts from "./echarts/Technical_charts.vue";

@Component({
  name: "Visualization",
  components: {
    TechnicalCharts,
  },
})
export default class Visualization extends Vue {
  private TechicalItem = [
    {
      name: "vue",
      imageUrl: require("../../assets/images/Technical-Logo/vue.jpg"),
    },
    {
      name: "React",
      imageUrl: require("../../assets/images/Technical-Logo/React.jpg"),
    },
    {
      name: "Angular",
      imageUrl: require("../../assets/images/Technical-Logo/Angular.jpg"),
    },
    {
      name: "typeScript",
      imageUrl: require("../../assets/images/Technical-Logo/typescript.jpg"),
    },
    {
      name: "typeScript",
      imageUrl: require("../../assets/images/Technical-Logo/typescript.jpg"),
    },
    {
      name: "typeScript",
      imageUrl: require("../../assets/images/Technical-Logo/typescript.jpg"),
    },
    {
      name: "typeScript",
      imageUrl: require("../../assets/images/Technical-Logo/typescript.jpg"),
    },
    {
      name: "typeScript",
      imageUrl: require("../../assets/images/Technical-Logo/typescript.jpg"),
    },
  ];

  private TeachicalClick(item: any, index: number) {
    console.log(item, index);
  }
}
</script>

<style lang="scss" scope>
#Visualization {
  margin-top: 30px;
  .el-card {
    width: 300px;
    height: 150px;
    margin-left: 20px;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    > div {
      width: 100%;
      height: 100%;
      img {
        width: 200px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>
