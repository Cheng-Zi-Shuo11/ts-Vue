<!-- @format -->

<template>
  <div id="admin-container">
    <header>
      <div id="left">
        <i
          class="el-icon-s-unfold icon-collpase Icon-i"
          @click="Collpase"
          v-if="isCollpase === true"
        ></i>
        <i
          class="el-icon-s-fold icon-collpase Icon-i"
          @click="Collpase"
          v-else
        ></i>
      </div>
      <div id="right">
        <span class="search">
          <i class="el-icon-search Icon-i" @click="searchClick"></i>
          <transition>
            <el-autocomplete
              v-show="searchFlag"
              v-model="searchVal"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              @select="handleSelect"
            ></el-autocomplete>
          </transition>
        </span>
        <i class="el-icon-s-release icon-task Icon-i" title="任务"></i>
        <span class="user">
          <el-dropdown>
            <img src="" alt="" />
            <i class="el-icon-caret-bottom Icon-i"></i>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="item in dropdownList"
                :key="item.text"
                :icon="item.icon"
                @click.native="handleDropdown(item)"
                >{{ item.text }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class admin extends Vue {
  private isCollpase: boolean = false;
  private searchVal: string = "";
  private searchFlag: boolean = false;
  private dropdownList = [
    {
      text: "个人中心",
      route: "/setting",
      icon: "el-icon-s-custom",
    },
    {
      text: "我的学习情况",
      route: "/myStudy",
      icon: "el-icon-s-data",
    },
  ];

  @Emit("isCollpase")
  private Collpase() {
    this.isCollpase = !this.isCollpase;
    return this.isCollpase;
  }

  private handleSelect(item: any) {
    // console.log(item);
  }

  private searchClick() {
    this.searchFlag = !this.searchFlag;
  }

  private querySearchAsync(queryString: string, cb: () => any) {
    // 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它
    // console.log(queryString);
  }

  private handleDropdown(item: any) {
    this.$router.push(item.route);
  }
}
</script>

<style lang="scss" scope>
$color: #f3f3f3;
$height: 80px;
$iconBg: rgba(0, 0, 0, 0.1);
#admin-container {
  width: 100%;
  height: $height;
  background: url(../../../assets/images/adminBg.jpg) 100% no-repeat;
  background-size: 100%;
  > header {
    display: flex;
    > #left {
      flex: 1;
      > .icon-collpase {
        line-height: $height;
        display: inline-block;
        padding: 0 20px;
        cursor: pointer;
        &:hover {
          background-color: $iconBg;
        }
      }
    }
    > #right {
      flex: 1;
      color: $color;
      text-align: right;
      .search {
        flex: 1;
        line-height: $height;
        position: relative;
        .el-icon-search {
          line-height: $height;
          cursor: pointer;
          &:hover {
            background-color: $iconBg;
          }
        }
      }
      > .icon-task {
        line-height: $height;
        padding: 0 20px;
        cursor: pointer;
        &:hover {
          background-color: $iconBg;
        }
      }
      .user {
        flex: 1;
        display: inline-block;
        margin-right: 40px;
        img {
          display: inline-block;
          width: 40px;
          height: 40px;
          vertical-align: inherit;
          border-radius: 50%;
          cursor: pointer;
          &:hover {
            background-color: $iconBg;
          }
        }
        .el-icon-caret-bottom {
          font-size: 20px;
        }
      }
    }
  }
}
.Icon-i {
  display: inline-block;
  font-size: 40px;
  color: $color;
}
</style>
