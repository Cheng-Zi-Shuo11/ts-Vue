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
  PCTechicalItem: any; // 技术bug
  ArticalItem: any; // 笔记内容
  InterViewItem: any; // 面试题
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
      name: "typescript",
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
      name: "git",
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
  ];

  public ArticalItem = [
    {
      title: `为什么使用vue`,
      content: `1、 与angular相比优点:
      a) api简单，快速上手，学习成本低；
      b) Angular 使用双向绑定，Vue 也支持双向绑定，不过为单向数据流，数据从父组件单向传给子组件；
      c) Vue.js 中指令和组件分得更清晰。指令只封装 DOM 操作，而组件代表一个自给自足的独立单元 —— 有自己的视图和数据逻辑。在 Angular 中两者有不少相混的地方
      d) Angular的脏检查机制，造成了如果项目庞大之后性能降低问题；每一次更新数据，都导致所有的数据绑定，进行一次遍历；
      Vue的数据变化更新是根据依赖追踪的观察系统并且异步列队去更新，数据变化都是独立的触发队列中相应的事件；
      e) 渲染层创建了虚拟dom（轻量级，2.0），减少了内存开销和加快了渲染速度；
      f) 组件式开发，每个组件都具有生命周期，便于自己状态的维护；实现了代码的高复用性；
      
      2、 与react相比：
      λ 共同点：
      a) 使用 Virtual DOM
      b) 提供了响应式（Reactive）和组件化（Composable）的视图组件
      c) 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库
      λ 优势：
      ″ 性能：
      a) vue的更新渲染过程是自动追踪的，而react如果想要提高更新的性能需要通过shouldComponentUpdate钩子函数对数据进行对比；
      b) 对于组件的语法，在vue中既可以支持jsx语法，将css和html都写入js文件中，又可以使用template模板进行编译，在vue中推荐使用template模板进行编译，减少学习成本，更加符合前端开发语法；而react仅仅支持jsx语法，jsx的优点：一、开发工具对jsx的支持比其他的vue模板更先进；
      c) 对于css的支持：
      vue中可以直接在style中写css语法，可以支持媒体查询，等等一切css属性，并且可以通过scoped进行组件作用域的封闭；
      react的组件中如果进行css样式的隔离，只能写入js文件中，比较简单的样式可以进行支持，但是如果比较复杂的则无法支持；
      ″ 规模：
      共同点：
      都提供了路由和状态管理机制；
      都有自己的自动化构建工具；
      不同点：
      react的学习成本比较高，需要掌握jsx语法和es2015；虽然支持前端babel进行编译，但是不适合生产环境；
      vue向下扩展可以像jq那样使用在前端项目中，向上扩展可以像react一样进行前端的自动化构建；
      ″ 本地渲染：(跨平台)
      reactNative
      weex
      
      3、 总结vue：
      优点：
      a) MVVM的开发模式，从dom中解脱出来，双向数据绑定；
      b) 数据更新采用异步事件机制；
      c) 采用单向数据流；
      d) 组件式开发；
      e) 采用虚拟dom
      f) 支持模板和jsx两种开发模式；
      g) 可以进行服务端渲染；
      h) 扩展性强，既可以向上又可以向下扩展
      缺点：
      a) 不兼容IE8以下版本
      b) 生态圈不繁荣，开源社区不活跃；`,
    },
  ];

  public InterViewItem = {
    vue: [],
    javascript: [
      {
        problem: `css3 渐进增强和优雅降级之间的不同 ?`,
        solve: `渐进增强：专注于内容本身，一开始针对低版本浏览器开发页面，满足最基本的功能，在针对高级浏览器进行效果，交互，达到更好的用户体验，以最低要求，实现基础功能为基准，向上兼容 br 
          优雅降级：一开始针对一个高版本的浏览器构建页面，先完善所有功能，然后针对各个浏览器进行测试，修复，保证低级浏览器有基础功能。 以高要求，高版本为基准，向下兼容  br
          二者区别：渐进增强前期投入资金大，周期长，但是提供了较好的平台稳定性，维护起来资金小，长期以来降低开发成本，优雅降级在短期内开发出一个只用于一个浏览器的完整功能，就可以拿去测试，市场试水，为一种节约成本的方法 br
    `,
      },
      {
        problem: `JavaScript中this是如何工作的 ?`,
        solve: `哪个对象调用函数, 函数里面的this指向哪个对象 br
        1. 普通函数调用 br
        这种函数没特殊意外,指向全局对象-window br
        2. 对象函数调用 br
        哪个函数调用, this指向哪里 br
        3. 构造函数调用 br
        使用new调用的函数,其中this将会绑定到新构造的函数 br
        4. apply和call调用 br
        apply和call会改变传入函数的this指向 br
        5. 箭头函数的调用 br
        在箭头函数里面，没有 this ，箭头函数里面的 this 是继承外面的环境 br
        代码请查看 views/pc/interview/code/this/ 文件夹下 ...... br
        `,
      },
      {
        problem: "JavaScript数据类型判断有哪些?",
        solve: `
        1. typeof  br
        2. instanceof  br
        3. constructor br
        4. Object.prototype.toString.call()  br
        代码请查看 views/pc/interview/code/数据类型检测/ 文件夹下
        `,
        icon: "el-icon-edit",
      },
    ],
  };

  @Mutation
  public addArticalItem(args: any) {
    this.ArticalItem.push(args);
  }
}

export const MobileDataModule = getModule(MobileData);
