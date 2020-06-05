<!-- @format -->

<template>
  <div id="Visualization">
    <div class="Technical">
      <el-carousel
        :interval="3000"
        type="card"
        trigger="click"
        style="margin-left: 30px"
      >
        <el-carousel-item
          v-for="(item, index) in TechicalItem"
          :key="index"
          @click.native="carouselClick(item, index)"
        >
          <img :src="item.imageUrl" style=" width: 100%;height:100% " />
        </el-carousel-item>
      </el-carousel>
    </div>
    <TechnicalCharts :TechicalItem="TechicalItem" />
    <Bug :TechicalItem="TechicalItem" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MobileDataModule } from "@/store/mobile/modules/data";
@Component({
  name: "Visualization",
  components: {
    TechnicalCharts: () => import("./echarts/Technical_charts.vue"),
    Bug: () => import("./echarts/bug.vue"),
  },
})
export default class Visualization extends Vue {
  private TechicalItem = MobileDataModule.PCTechicalItem;

  mounted() {}

  private TeachicalClick(item: any, index: number) {
    console.log(item, index);
  }

  private carouselClick(item: any, index: number) {
    this.$router.push(item.route);
  }
}
</script>
<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
</style>
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
