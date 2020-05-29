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
    {
      name: "山西省",
      city: ["太原", "大同", "阳泉", "朔州", "长治", "临汾", "晋城"],
    },
    {
      name: "内蒙古自治区",
      city: [
        "呼和浩特",
        "包头",
        "乌海",
        "临河",
        "东胜",
        "集宁",
        "锡林浩特",
        "通辽",
        "赤峰",
        "海拉尔",
        "乌兰浩特",
      ],
    },
    {
      name: "辽宁省",
      city: [
        "沈阳",
        "大连",
        "鞍山",
        "锦州",
        "丹东",
        "盘锦",
        "铁岭",
        "抚顺",
        "营口",
        "辽阳",
        "阜新",
        "本溪",
        "朝阳",
        "葫芦岛",
      ],
    },
    {
      name: "吉林省",
      city: [
        "长春",
        "吉林",
        "四平",
        "辽源",
        "通化",
        "白山",
        "松原",
        "白城",
        "延边",
      ],
    },
    {
      name: "黑龙江省",
      city: [
        "哈尔滨",
        "齐齐哈尔",
        "牡丹江",
        "佳木斯",
        "大庆",
        "伊春",
        "黑河",
        "鸡西",
        "鹤岗",
        "双鸭山",
        "七台河",
        "绥化",
        "大兴安岭",
      ],
    },
    {
      name: "上海市",
      city: [
        "宝山",
        "金山",
        "南市",
        "长宁",
        "静安",
        "青浦",
        "崇明",
        "卢湾",
        "松江",
        "奉贤",
        "浦东",
        "杨浦",
        "虹口",
        "普陀",
        "闸北",
        "黄浦",
        "闵行",
        "徐汇",
        "嘉定",
        "南汇",
      ],
    },
    {
      name: "江苏省",
      city: [
        "南京",
        "苏州",
        "无锡",
        "常州",
        "镇江",
        "连云港 ",
        "扬州",
        "徐州 ",
        "南通",
        "盐城",
        "淮阴",
        "泰州",
        "宿迁",
      ],
    },
    {
      name: "浙江省",
      city: [
        "杭州",
        "湖州",
        "丽水",
        "温州",
        "绍兴",
        "舟山",
        "嘉兴",
        "金华",
        "台州",
        "衢州",
        "宁波",
      ],
    },
    {
      name: "安徽省",
      city: [
        "合肥 ",
        "芜湖 ",
        "蚌埠 ",
        "滁州 ",
        "安庆 ",
        "六安 ",
        "黄山 ",
        "宣城 ",
        "淮南 ",
        "宿州 ",
        "马鞍山 ",
        "铜陵",
        "淮北 ",
        "阜阳 ",
        "池州 ",
        "巢湖 ",
        "亳州",
      ],
    },
    {
      name: "福建省",
      city: [
        "福州 ",
        "厦门 ",
        "泉州 ",
        "漳州 ",
        "龙岩 ",
        "南平 ",
        "宁德 ",
        "莆田 ",
        "三明",
      ],
    },
    {
      name: "江西省",
      city: [
        "南昌",
        "景德镇",
        "九江",
        "萍乡",
        "新余",
        "鹰潭",
        "赣州",
        "宜春",
        "吉安",
        "上饶",
        "抚州",
      ],
    },
    {
      name: "山东省",
      city: [
        "济南",
        "青岛",
        "淄博",
        "德州",
        "烟台",
        "潍坊",
        "济宁",
        "泰安",
        "临沂",
        "菏泽",
        "威海",
        "枣庄",
        "日照",
        "莱芜",
        "聊城",
        "滨州",
        "东营",
      ],
    },
    {
      name: "河南省",
      city: [
        "郑州",
        "开封",
        "洛阳",
        "平顶山",
        "安阳",
        "鹤壁",
        "新乡",
        "焦作",
        "濮阳",
        "许昌",
        "漯河",
        "三门峡",
        "南阳",
        "商丘",
        "周口",
        "驻马店",
        "信阳",
        "济源",
      ],
    },
    {
      name: "湖北省",
      city: [
        "武汉",
        "黄石",
        "十堰",
        "荆州",
        "宜昌",
        "襄樊",
        "鄂州",
        "荆门",
        "孝感",
        "黄冈",
        "咸宁",
        "恩施",
        "随州",
        "仙桃",
        "天门",
        "潜江",
        "神农架",
      ],
    },
    {
      name: "湖南省",
      city: [
        "长沙",
        "株州",
        "湘潭",
        "衡阳",
        "邵阳",
        "岳阳",
        "常德",
        "郴州",
        "益阳",
        "永州",
        "怀化",
        "娄底",
        "湘西 ",
      ],
    },
    { name: "广东省", city: [] },
    {
      name: "广西壮族自治区",
      city: [
        "南宁",
        "柳州",
        "桂林",
        "梧州",
        "北海",
        "防城港",
        "钦州",
        "贵港",
        "玉林",
        "贺州",
        "百色",
        "河池",
      ],
    },
    {
      name: "海南省",
      city: [
        "海口 ",
        "三亚",
        "通什",
        "琼海",
        "琼山",
        "文昌",
        "万宁",
        "东方",
        "儋州",
      ],
    },
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
