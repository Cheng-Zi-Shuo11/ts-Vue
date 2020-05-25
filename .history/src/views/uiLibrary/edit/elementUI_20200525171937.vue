<!-- @format -->

<template>
  <div id="elementUI">
    <div
      class="element-problem"
      v-for="(item, index) in elementProblem"
      :key="'problem' + index"
    >
      <el-card class="element-card" shadow="hover">
        <i class="el-icon-warning element-problem"> {{ index++ }}</i>

        <br />
        <span class="programme"> {{ item.problem }} </span>
        <br />
        <i class="el-icon-success element-solve"></i>
        <br />
        <span class="programme">{{ item.solve }} </span>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {
  private elementProblem = [
    {
      problem: "在el-row 或者 el-col 上使用@click失效?",
      solve:
        "要使用@click.native=”aaa()”才行    该修饰符的作用就是把一个vue组件转化为一个普通的HTML标签，并且该修饰符对普通HTML标签是没有任何作用的。",
    },
  ];
}
</script>
<style lang="scss">
.element-problem {
  color: red;
}
.element-solve {
  color: green;
}
</style>
<style lang="scss" scope>
#elementUI {
  .element-problem {
    .programme {
      display: inline-block;
      color: #000;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      padding: 5px;
    }
  }
}
</style>
