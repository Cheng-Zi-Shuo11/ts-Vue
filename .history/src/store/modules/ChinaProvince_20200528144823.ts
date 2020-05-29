/** @format */

import store from "@/store";
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from "vuex-module-decorators";

export interface IChia {
  province: any;
}

@Module({ dynamic: true, store, name: "ChianProvince" })
class ChianProvince extends VuexModule implements IChia {
  public province = [
    {
      name: "北京市",
      city: [
        "东城区",
        "西城区",
        "崇文区",
        "宣武区",
        "朝阳区",
        "海淀区",
        "丰台区",
        "石景山",
      ],
    },
    {
      name: "天津市",
      city: [
        "和平",
        "河北",
        "河西",
        "河东",
        "南开",
        "红桥",
        "塘沽",
        "汉沽",
        "大港",
        "东丽",
        "西青",
        "津南",
        "北辰",
        "武清",
        "滨海",
      ],
    },
    {
      name: "河北省",
      city: [
        "石家庄",
        "唐山",
        "秦皇岛",
        "邯郸",
        "邢台",
        "张家口",
        "承德",
        "廊坊",
        "沧州",
        "保定",
        "衡水",
      ],
    },
    { name: "山西省" },
    { name: "内蒙古自治区" },
    { name: "辽宁省" },
    { name: "吉林省" },
    { name: "黑龙江省" },
    { name: "上海市" },
    { name: "江苏省" },
    { name: "浙江省" },
    { name: "安徽省" },
    { name: "福建省" },
    { name: "江西省" },
    { name: "山东省" },
    { name: "河南省" },
    { name: "湖北省" },
    { name: "湖南省" },
    { name: "广东省" },
    { name: "广西壮族自治区" },
    { name: "海南省" },
    { name: "重庆市" },
    { name: "四川省" },
    { name: "贵州省" },
    { name: "云南省" },
    { name: "西藏自治区" },
    { name: "陕西省" },
    { name: "甘肃省" },
    { name: "青海省" },
    { name: "宁夏回族自治区" },
    { name: "新疆维吾尔自治区" },
    { name: "香港特别行政区" },
    { name: "澳门特别行政区" },
    { name: "台湾省" },
  ];
}

export const ChianProvinceModule = getModule(ChianProvince);
