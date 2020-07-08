<!-- @format -->

<template>
  <div id="javaScript">
    <div
      class="tag"
      v-for="(item, index) in InterViewJsList"
      :key="'InterViewJsList' + index"
    >
      <el-card class="box-card" shadow="hover">
        <div type="danger" class="danger">
          {{ item.problem }}
        </div>
        <div type="success" class="success">
          <ul>
            <li
              v-for="(item, i) in InterViewJSListSolve[index]"
              :key="'Solve' + i"
            >
              {{ item }}
            </li>
            <!-- i标签是否显示 -->
            <li v-if="InterViewJsList[index].icon">
              <template
                v-if="InterViewJsList[index].icon.constructor === Array"
              >
                <i
                  v-for="(item, index) in InterViewJsList[index].icon"
                  :key="'i' + index"
                  :class="item"
                >
                </i>
              </template>
              <div v-else>
                <!-- <img :class="InterViewJsList[index].icon"></img> -->
              </div>
            </li>
            <!-- 图片是否显示 -->
            <li v-if="InterViewJsList[index].img">
              <template v-if="InterViewJsList[index].img.constructor === Array">
                <i
                  v-for="(item, index) in InterViewJsList[index].img"
                  :key="'i' + index"
                  :class="item"
                >
                </i>
              </template>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MobileDataModule } from "@/store/mobile/modules/data";

@Component
export default class ClassName extends Vue {
  private InterViewJsList: any = MobileDataModule.InterViewItem.javascript;

  get InterViewJSListSolve() {
    let arr: any[] = [];
    this.InterViewJsList.forEach((item: any, index: number) => {
      console.log(item.icon instanceof Array);
      arr.push(this.InterViewJsList[index].solve.split("br"));
    });
    return arr;
  }
}
</script>

<style lang="less" scope>
#javaScript {
  .tag {
    font-size: 14px;
    .box-card {
      margin-bottom: 10px;
      .danger {
        margin-bottom: 20px;
        border: 1px solid #fde2e2;
        background-color: #fef0f0;
        color: #f56c6c;
        padding: 10px;
        border-radius: 4px;
      }
      .success {
        background-color: #f0f9eb;
        border: 1px solid #e1f3d8;
        color: #67c23a;
        padding: 10px;
        border-radius: 4px;
        ul {
          li {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
