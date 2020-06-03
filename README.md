<!-- @format -->

# typescript-vue-project

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

1. typescript 项目目录

├─ public/ # 模板文件
├─ dist/ # build 生成的生产环境下的项目
├─ src/ # 源码目录（开发都在这里进行）
│ ├─ api/ # 服务（SERVICE，统一 Api 管理）
│ ├─ assets/ # 静态资源文件
│ ├─ components/ # 组件
│ ├─ filters/ # 全局过滤器
│ ├─ icons/ # svg 转 ts 格式的 icon
│ ├─ lang/ # 国际化语言
│ ├─ layout/ # 架构布局
│ ├─ router/ # 路由（ROUTE）
│ ├─ store/ # 模块化状态管理 vuex
│ ├─ styles/ # 公共样式
│ ├─ utils/ # 工具库
│ ├─ views/ # 视图页（pages）
│ ├─ App.vue # 启动文件
│ ├─ main.ts # 主入口页
│ ├─ permission.ts # 路由鉴权
│ ├─ shims-tsx.d.ts # 相关 tsx 模块注入
│ ├─ shims-vue.d.ts # Vue 模块注入
│ ├─ .env.development # 开发环境默认 API 属性配置
│ ├─ .env.production # 线上环境默认 API 属性配置
│ ├─ babel.config.js # babel 配置

- shims-tsx.d.ts ，允许你以 .tsx 结尾的文件，在 Vue 项目中编写 jsx 代码
- shims-vue.d.ts 主要用于 TypeScript 识别 .vue 文件， ts 默认并不支持导入 .vue 文件，这个文件告诉 ts 导入 .vue 文件都按 VueConstructor<Vue> 处理。

2. 按需引入 element-ui

- 安装 normallize.css 初始化 css

```
yarn add normallize.css
```

- 安装 element-ui

- 配置 babel.config.js
  运行后报错，需要安装 babel-plugin-component 解析

3. 定制主题
   ├─ src/ # 源码目录（开发都在这里进行）
   │ ├─ styles/
   │ ├─── element-variables.scss  
   │ ├─── element-variables.scss.d.ts

main.ts 引入定制主题的文件配置
定义全局的统一 sass 变量，方便统一规范 css 颜色

全局变量定义好了，直接在 main.ts 文件引用是不生效的，换个思路，放在 style-resources-loader 里面去引入，在整个项目的配置文件里去配置

做法： 根目录建一个 vue.config.js 文件，把统一的 scss 变量引入到插件选项卡中去，需要安装两个类库，否则无法解析

yarn add vue-cli-plugin-style-resources-loader | yarn add style-resources-loader --dev // 开发环境 loader 编译

4. axios api

- 本项目使用 axios api 请求工具库

  \*\*\* 配置以下几点

  - utils/request.ts

    -├─ src/

    - |─ .env.development // 开发环境配置
    - |─ .env.production // 线上环境配置

  在这里配置好 VUE_APP_BASE_API，前提是服务端已经做好跨域处理，如果服务端接口没有做跨域处理，那这里配置 api 的请求头就无效了。你可以在 vue.config.js 里面配置跨域代理属性，本项目接口已做跨域处理，所以这里注释了，需要可以自行打开

  配置完成后，后面所有的接口调用都是 url = VUE_APP_BASE_API + url

  - 定义 api 接口
    ├─ src/ # 源码目录
    │ ├─ api/
    │ ├─── pageA.ts  
    │ ├─── pageB.ts

5.  状态管理 Vuex
    vue 2.0 版本对 ts 的兼容性本身并不是特别友好，所以要达到状态管理的效果，这里要额外引用一个类库 vuex-module-decorators，它是基于 vue-class-component 所做的拓展，它提供了一系列的装饰器，让 vue+ts 结合的项目达到状态管理的作用。

        ---- vue-class-component 主要提供了以下的装饰器，接下来让我们一一的了解一遍吧

        ```
        import { VuexModule, Module, Action, Mutation, getModule, State } from 'vuex-module-decorators'
        ```

        - 改造 index.ts

    ts js
    public State, state
    @Mutations, mutations
    @Action, action
    get, getters

    @ 定义 module
    定义一个 modules，直接使用装饰器@Module
    注意： 原始 vuex 同样有一个 Module 类，但他不是一个装饰器

    定义 modules 不仅仅使用了装饰器，还带了参数，表明通过命名空间的形式来使用 module，这里的 namespaced 的值即为 user
    另外一个参数值为 store，即为主入口页面对应的整个 vuex 模块的 store

    ① state：因为加了 tslint 都会添加上 public 修饰
    ② Getters： 原始的 getters 计算属性，在这里对应的是 get 方法 -- modules/user.ts

6.  Mock.js
    使用 Mock 模拟数据 ./src/mock

7.  npm i @vant/touch-emulator -S 在桌面端使用
    Vant 是一个面向移动端的组件库，因此默认只适配了移动端设备，这意味着组件只监听了移动端的 touch 事件，没有监听桌面端的 mouse 事件。

如果你需要在桌面端使用 Vant，可以引入我们提供的 @vant/touch-emulator，这个库会在桌面端自动将 mouse 事件转换成对应的 touch 事件，使得组件能够在桌面端使用。

# 安装模块

npm i @vant/touch-emulator -S
// 引入模块后自动生效
import '@vant/touch-emulator';
