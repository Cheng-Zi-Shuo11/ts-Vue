<!-- @format -->

<template>
  <div id="bug">
    <el-card class="box-card" shadow="hover">
      <span>常见bug处理</span>
      <!-- <el-button type="primary">fdfdfd</el-button> -->
      <ul>
        <li v-for="(item, index) in TechicalItem" :key="'bug' + index">
          <el-popover
            placement="right"
            width="400"
            trigger="click"
            transition="fade-in-linear"
          >
            <el-button slot="reference" class="button-bug">
              {{ item.name }}
            </el-button>

            <div class="progress">
              <ul>
                <li
                  v-for="(item, index) in item.progress"
                  :key="'progress' + index"
                >
                  <span class="problem">
                    <i class="el-icon-warning Icon-problem"></i>
                    {{ index++ }}
                    {{ item.problem }}:
                    {{ item.problemImg ? item.problemImg : "" }}
                  </span>
                  <br />
                  <span class="solve">
                    <i class="el-icon-success Icon-solve"></i>
                    {{ item.solve }}
                    {{ item.problemImg ? item.problemImg : "" }}
                  </span>
                </li>
              </ul>
            </div>
          </el-popover>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {
  @Prop() public TechicalItem!: any;
}
</script>
<style lang="scss">
.Icon-problem {
  font-size: 20px !important;
  color: red !important;
}
.Icon-solve {
  font-size: 20px !important;
  color: green !important;
}
</style>
<style lang="scss" scope>
#bug {
  margin-top: 20px;
  margin-left: 10px;
  width: 1000px;
  height: 100%;
  .box-card {
    width: 100%;
    height: 100%;
    span {
      display: block;
      text-align: left;
    }

    ul {
      li {
        width: 100%;
        text-align: left;
        .button-bug {
          width: 100%;
        }
        .progress {
          ul {
            li {
            }
          }
        }
      }
    }
  }
}
</style>
