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
        <span class="programme pointer" @click="isLink(item.solve)" ref="solve"
          >{{ item.solve }}
        </span>
      </el-card>
    </div>
    <el-card class="RichText-card" shdadow="hover">
      <RichText />
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "element-ui",
  components: {
    RichText: () => import("@/components/element-ui/RichText.vue"),
  },
})
export default class elementUI extends Vue {
  private elementProblem = [
    {
      problem: "在el-row 或者 el-col 上使用@click失效?",
      solve:
        "要使用@click.native=”aaa()”才行,--------该修饰符的作用就是把一个vue组件转化为一个普通的HTML标签，并且该修饰符对普通HTML标签是没有任何作用的。",
    },
    {
      problem: "el-select下拉列表 设置默认值",
      solve:
        "需要把el-select绑定的v-model='' 和 el-option中的 :value='' 的值 设置成一样 --------注意： 类型也要保持一致",
    },
    {
      problem: "给页面上的DOM元素加loading效果",
      solve: "https://blog.csdn.net/cofecode/article/details/78539975",
    },
    {
      problem: `element-ui upload组件上传`,
      solve: "https://www.cnblogs.com/SimonHu1993/p/8257075.html",
    },
    {
      problem: "element-ui中upload组件如何传递文件及其他参数",
      solve: "https://www.cnblogs.com/liuruolin/p/7517470.html",
    },
    {
      problem: `使用element UI el-upload组件实现视频文件上传及上传进度显示方法总结`,
      solve: `https://blog.csdn.net/jerrica/article/details/80854506`,
    },
    {
      problem: `回到顶部组件  target is not existed: .page-component__scroll .el-scrollbar__wrap`,
      solve: `组件都有默认参数，可以直接使用组件，不用传参数。  <el-backtop></el-backtop>`,
    },
    {
      problem: `表单校验功能`,
      solve: `1. 在el-form标签中定义:rules="rules" ref="referce" ----
      2. 在el-form-item 定义prop="name" -----
      3. 在选项data中定义rules校验规则  ------
      4. 在提交方法中检查用户行为  --------
      注意： 定义prop的时候，值要求是属于form绑定的model数据对象里面，同时名字一样 ------
            data中定义rules要在定义表单的数据之后(一般放在data的最后面)`,
    },
  ];

  private isLink(item: any) {
    if (item.includes("https")) {
      // window.location.href = item;  本页面打开外部链接
      window.open(item, "_blank");
    } else {
      this.$message({
        message: item,
        type: "success",
        duration: 5000,
        showClose: true,
        offset: 100,
      });
    }
  }
}
</script>
<style lang="scss">
.element-problem {
  color: red;
}
.element-solve {
  color: green;
}
.element-card {
  margin: 0 10px 5px 10px;
}
</style>
<style lang="scss" scope>
#elementUI {
  margin-bottom: 200px;
  .element-problem {
    .programme {
      display: inline-block;
      color: #000;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      padding: 5px;
    }
    .pointer {
      cursor: pointer;
    }
  }
}
</style>
