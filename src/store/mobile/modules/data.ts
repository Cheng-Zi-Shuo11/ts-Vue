/** @format */

import store from "@/store";
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from "vuex-module-decorators";

export interface IDATA {
  PCTechicalItem: any;
}

// 参数一：module名称，开启命名空间后会以name为命名空间
// 参数二：是否使用动态加载，简而言之只有在用到当前的module才会加载，详细可以看vuex官网。本篇博客必须选择true，
//        这也是为什么index.ts一直不用修改的原因，如果设置为false会有很大的变动，如果您真的需要这么做，可以自己研究一下，
//        或者私信我。
// 参数三：是否开启命名空间，如果你的模块很多，强烈建议开启
// 参数四：挂载的store目标
@Module({ dynamic: true, store, name: "MobileData" })
class MobileData extends VuexModule implements IDATA {
  public PCTechicalItem = [
    {
      name: "vue",
      route: "/note/vue",
      data: 50,
      imageUrl: require("@/assets/images/Technical-Logo/vue.jpg"),
      progress: [
        {
          problem: "Declaration or statement expected.",
          solve: "编译错误，这种错误一般都是缺少了花括号",
        },
        {
          problem: "Cannot set property 'XXXX' of undefined",
          solve: "最终原因是赋值的对象未定义",
        },
        {
          problem: `[Vue warn]: Do not use built-in or reserved HTML elements as component id: header`,
          solve:
            "原因是vue里面不允许用特殊的标签来做自定义的标签比如你不能用a来接收一个组件的注册然后在以自定义标签的方式引用会被限制,,在component里面注册组件的时候避免用html已有的标签来接收组件；",
        },
      ],
    },
    {
      name: "React",
      route: "/note/react",
      data: 0,
      imageUrl: require("@/assets/images/Technical-Logo/React.jpg"),
      progress: [
        {
          problem: "出现的问题",
          solve: "解决的方案",
        },
      ],
    },
    {
      name: "Angular",
      route: "/note/angular",
      data: 0,
      imageUrl: require("@/assets/images/Technical-Logo/Angular.jpg"),
      progress: [
        {
          problem: "出现的问题",
          solve: "解决的方案",
        },
      ],
    },
    {
      name: "typeScript",
      route: "/note/typeScript",
      data: 30,
      imageUrl: require("@/assets/images/Technical-Logo/typescript.jpg"),
      progress: [
        {
          problem: "出现的问题",
          solve: "解决的方案",
        },
      ],
    },
    {
      name: "canvas",
      route: "/note/vue",
      data: 50,
      imageUrl: require("@/assets/images/Technical-Logo/jquery.jpg"),
      progress: [
        {
          problem: "出现的问题",
          solve: "解决的方案",
        },
      ],
    },
    {
      name: "Git",
      route: "/note/git",
      data: 20,
      imageUrl: require("@/assets/images/Technical-Logo/git.jpg"),
      progress: [
        {
          problem: "出现的问题",
          solve: "解决的方案",
        },
      ],
    },
    {
      name: "typeScript",
      route: "/note/vue",
      data: 43,
      imageUrl: require("@/assets/images/Technical-Logo/node.jpg"),
      progress: [
        {
          problem: "出现的问题",
          solve: "解决的方案",
        },
      ],
    },
    {
      name: "typeScript",
      route: "/note/vue",
      data: 20,
      imageUrl: require("@/assets/images/Technical-Logo/vue.jpg"),
      progress: [
        {
          problem: "出现的问题",
          solve: "解决的方案",
        },
      ],
    },
  ];

  @Mutation
  public GET_PC_TEACHICALITEM(item: any) {}
}

export const MobileDataModule = getModule(MobileData);
