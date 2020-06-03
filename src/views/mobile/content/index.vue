<!-- @format -->

<template>
  <div id="content">
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Search } from "vant";

Vue.use(Search);
@Component({
  name: "content",
})
export default class ClassName extends Vue {
  private value = "";
}
</script>

<style lang="less" scope></style>
