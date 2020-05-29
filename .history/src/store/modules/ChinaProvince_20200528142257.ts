/** @format */

import store from "@/store";
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from "vuex-module-decorators";

export interface IChia {}

@Module({ dynamic: true, store, name: "ChianProvince" })
class ChianProvince extends VuexModule implements IChia {
  public province = [
    【华北】、天津市、河北省、山西省、内蒙古自治区

　　【东北】辽宁省、吉林省、黑龙江省

　　【华东】上海市、江苏省、浙江省、安徽省、福建省、江西省、山东省

　　【中南】河南省、湖北省、湖南省、广东省、广西壮族自治区、海南省

　　【西南】重庆市、四川省、贵州省、云南省、西藏自治区

　　【西北】陕西省、甘肃省、青海省、宁夏回族自治区、新疆维吾尔自治区

　　【港澳台】香港特别行政区、澳门特别行政区、台湾省

    {name: '北京市'},{}
  ]
}

export const ChianProvinceModule = getModule(ChianProvince);
