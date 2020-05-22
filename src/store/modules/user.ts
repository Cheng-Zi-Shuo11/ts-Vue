/** @format */

import store from "@/store";
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from "vuex-module-decorators";
// import { login } from "@/api/pageA";

export interface IUserState {
  id_token: string;
}

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule implements IUserState {
  // tslint:disable-next-line:variable-name
  public id_token = "";
  /* 等同于 */
  //   mutations: {
  //     SET_TOKEN: (state, token) => {
  //         state.token = token
  //     },
  //     ...
  // }
  /***
   * 说明：
   *
   * 两者的区别在于语法糖，原始的Mutations同步方法都是定义在mutations内，而ts版的每一个@Mutation 都要加上装饰器@Mutation 修饰
   *
   *注意： 一旦使用@Mutation装饰某一函数后, 函数内的this上下文即指向当前的state，所以想引用state的值，可以直接this.token访问即可

    Muation函数不可为async函数, 也不能使用箭头函数来定义, 因为在代码需要在运行重新绑定执行的上下文
   */

  @Action
  public async Login(params: any) {
    // const { mobilePhone, passWord } = params;
    // const { data } = await login({ mobilePhone, passWord });
    // this.SET_TOKEN(`Bearer ${data.id_token}`);
  }
  // public countNum = 2020;

  // get calculatCount() {
  //   return this.countNum / 2;
  // }
  // 等同于
  // state: {
  //   countsNum: 2
  // },
  // getters: {
  //   calculatCount: (state) => state.countsNum / 2
  // }

  @Mutation
  private SET_TOKEN(token: string) {
    this.id_token = token;
  }
  /* 等同于 */
  //   actions: {
  //     async Login({ commit }, data) {
  //         ...
  //         commit('SET_TOKEN', data.accessToken)
  //     }
  // }
  /**
   * 说明
   *
   * 异步函数Action和同步函数Mutation使用方法大同小异，区别就是一个是同步，一个是异步，只要做好区分即可
   *
   * 注意：
   *
   * 如果需要在action函数中运行耗时很长的任务/函数, 建议将该任务定义为异步函数*（async methods）
   * 千万不要使用箭头函数=>来定义action函数, 因为在运行时需要动态绑定this上下文
   */
}

export const UserModule = getModule(User);
