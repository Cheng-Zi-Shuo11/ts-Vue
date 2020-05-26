<!-- @format -->

<template>
  <div class="navMenu">
    <template v-for="item in navMenu">
      <!-- 一级菜单没有子节点 -->
      <el-menu-item
        v-if="!item.childs && item.entity"
        :key="item.entity.id"
        :index="item.entity.value"
        :route="item.entity.value"
      >
        <i :class="item.entity.icon"></i>
        <span slot="title">{{ item.entity.alias }}</span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu
        v-if="item.childs && item.entity"
        :key="item.entity.id"
        :data="item"
        :index="item.entity.name"
        :class="{ toggleClass: PropCollapase === true }"
      >
        <template slot="title">
          <i :class="item.entity.icon"></i>
          <span> {{ item.entity.alias }}</span>
        </template>
        <!-- 递归 -->
        <navMenu :navMenu="item.childs"></navMenu>
      </el-submenu>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "navMenu",
})
export default class navMenu extends Vue {
  @Prop() private navMenu: any;
  @Prop(Boolean) private PropCollapase!: boolean;
}
</script>
<style lang="scss">
.toggleClass {
  .el-submenu__icon-arrow {
    display: none !important;
  }
  span {
    display: none;
  }
}
</style>
<style lang="scss" scope>
#navMenu {
  width: 100%;
  height: 100%;
}
</style>
