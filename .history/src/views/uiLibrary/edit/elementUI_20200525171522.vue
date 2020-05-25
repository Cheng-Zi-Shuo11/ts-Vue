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
        <span class="problem"> {{ item.problem }} </span>
        <br />
        <i class="el-icon-success element-solve"></i>
        <br />
        <span class="solve">{{ item.solve }} </span>
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
      solve: "要使用@click.native=”aaa()”才行",
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
    mb20px .problem {
      display: inline-block;
      color: #000;
      margin-bottom: 10px;
    }
    .solve {
      color: #000;
    }
  }
}
</style>
