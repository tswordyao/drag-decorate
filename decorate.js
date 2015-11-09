(function($){
    'use strict';
    /*检测浏览器,不是chrome直接提示*/
        var isChrome = window.navigator.userAgent.indexOf("Chrome") > -1;
        if(!isChrome){
            document.body.innerHTML='<br><h2>&nbsp;您目前的浏览器不是chrome(谷歌)浏览器，不支持相关操作。 请更换浏览器后再进入本页面。<br><br>&nbsp;<a href="https://www.baidu.com/s?ie=UTF-8&wd=chrome">点击此处下载</a></h2>'
        }else {
            var resp={
                "result": 1,
                "data": [
                    {
                        "Items": [
                            {
                                "cat_id": 1101,
                                "cat_order": 1101,
                                "cat_path": "0|1100|1101|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "爱他美",
                                "parent_id": 1100,
                                "state": "",
                                "type_id": 28,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1102,
                                "cat_order": 1102,
                                "cat_path": "0|1100|1102|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "牛栏",
                                "parent_id": 1100,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1103,
                                "cat_order": 1103,
                                "cat_path": "0|1100|1103|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "喜宝",
                                "parent_id": 1100,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1104,
                                "cat_order": 1104,
                                "cat_path": "0|1100|1104|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "美素",
                                "parent_id": 1100,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1105,
                                "cat_order": 1105,
                                "cat_path": "0|1100|1105|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "可瑞康",
                                "parent_id": 1100,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1106,
                                "cat_order": 1106,
                                "cat_path": "0|1100|1106|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "特福芬",
                                "parent_id": 1100,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1107,
                                "cat_order": 1107,
                                "cat_path": "0|1100|1107|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "贝拉米",
                                "parent_id": 1100,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1108,
                                "cat_order": 1108,
                                "cat_path": "0|1100|1108|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "惠氏",
                                "parent_id": 1100,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1109,
                                "cat_order": 1109,
                                "cat_path": "0|1100|1109|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "智多健",
                                "parent_id": 1100,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1110,
                                "cat_order": 1110,
                                "cat_path": "0|1100|1110|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "其他品牌",
                                "parent_id": 1100,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1111,
                                "cat_order": 1111,
                                "cat_path": "0|1100|1111|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "成人奶粉",
                                "parent_id": 1100,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            }
                        ],
                        "cat_id": 1100,
                        "cat_order": 1100,
                        "cat_path": "0|1100|",
                        "children": [ ],
                        "goods_count": 0,
                        "hasChildren": false,
                        "image": "",
                        "list_show": "1",
                        "name": "奶粉",
                        "parent_id": 0,
                        "state": "",
                        "type_id": 0,
                        "type_name": ""
                    },
                    {
                        "Items": [
                            {
                                "cat_id": 1201,
                                "cat_order": 1201,
                                "cat_path": "0|1200|1201|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "花王纸尿裤",
                                "parent_id": 1200,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1202,
                                "cat_order": 1202,
                                "cat_path": "0|1200|1202|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "花王拉拉裤",
                                "parent_id": 1200,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1203,
                                "cat_order": 1203,
                                "cat_path": "0|1200|1203|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "尤妮佳纸尿裤",
                                "parent_id": 1200,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1204,
                                "cat_order": 1204,
                                "cat_path": "0|1200|1204|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "尤妮佳拉拉裤",
                                "parent_id": 1200,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1205,
                                "cat_order": 1205,
                                "cat_path": "0|1200|1205|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "大王纸尿裤",
                                "parent_id": 1200,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1206,
                                "cat_order": 1206,
                                "cat_path": "0|1200|1206|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "大王拉拉裤",
                                "parent_id": 1200,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1207,
                                "cat_order": 1207,
                                "cat_path": "0|1200|1207|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "帮宝适纸尿裤",
                                "parent_id": 1200,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1208,
                                "cat_order": 1208,
                                "cat_path": "0|1200|1208|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "帮宝适拉拉裤",
                                "parent_id": 1200,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1209,
                                "cat_order": 1209,
                                "cat_path": "0|1200|1209|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "其他品牌尿裤",
                                "parent_id": 1200,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1210,
                                "cat_order": 1210,
                                "cat_path": "0|1200|1210|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "婴儿湿巾",
                                "parent_id": 1200,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            }
                        ],
                        "cat_id": 1200,
                        "cat_order": 1200,
                        "cat_path": "0|1200|",
                        "children": [ ],
                        "goods_count": 0,
                        "hasChildren": false,
                        "image": "",
                        "list_show": "1",
                        "name": "尿裤湿巾",
                        "parent_id": 0,
                        "state": "",
                        "type_id": 0,
                        "type_name": ""
                    },
                    {
                        "Items": [
                            {
                                "cat_id": 1301,
                                "cat_order": 1301,
                                "cat_path": "0|1300|1301|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "粉/糊",
                                "parent_id": 1300,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1302,
                                "cat_order": 1302,
                                "cat_path": "0|1300|1302|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "果汁果茶",
                                "parent_id": 1300,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1303,
                                "cat_order": 1303,
                                "cat_path": "0|1300|1303|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "面条",
                                "parent_id": 1300,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1304,
                                "cat_order": 1304,
                                "cat_path": "0|1300|1304|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "饼干/磨牙",
                                "parent_id": 1300,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1305,
                                "cat_order": 1305,
                                "cat_path": "0|1300|1305|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "调味品",
                                "parent_id": 1300,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1306,
                                "cat_order": 1306,
                                "cat_path": "0|1300|1306|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "果蔬泥",
                                "parent_id": 1300,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1307,
                                "cat_order": 1307,
                                "cat_path": "0|1300|1307|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "泡芙",
                                "parent_id": 1300,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1308,
                                "cat_order": 1308,
                                "cat_path": "0|1300|1308|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "溶豆",
                                "parent_id": 1300,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1309,
                                "cat_order": 1309,
                                "cat_path": "0|1300|1309|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "肉鱼松",
                                "parent_id": 1300,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            }
                        ],
                        "cat_id": 1300,
                        "cat_order": 1300,
                        "cat_path": "0|1300|",
                        "children": [ ],
                        "goods_count": 0,
                        "hasChildren": false,
                        "image": "",
                        "list_show": "1",
                        "name": "营养辅食",
                        "parent_id": 0,
                        "state": "",
                        "type_id": 0,
                        "type_name": ""
                    },
                    {
                        "Items": [
                            {
                                "cat_id": 1401,
                                "cat_order": 1401,
                                "cat_path": "0|1400|1401|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "奶瓶奶嘴",
                                "parent_id": 1400,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1402,
                                "cat_order": 1402,
                                "cat_path": "0|1400|1402|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "餐具",
                                "parent_id": 1400,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1403,
                                "cat_order": 1403,
                                "cat_path": "0|1400|1403|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "杯子",
                                "parent_id": 1400,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1404,
                                "cat_order": 1404,
                                "cat_path": "0|1400|1404|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "牙胶",
                                "parent_id": 1400,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            }
                        ],
                        "cat_id": 1400,
                        "cat_order": 1400,
                        "cat_path": "0|1400|",
                        "children": [ ],
                        "goods_count": 0,
                        "hasChildren": false,
                        "image": "",
                        "list_show": "1",
                        "name": "喂养用品",
                        "parent_id": 0,
                        "state": "",
                        "type_id": 0,
                        "type_name": ""
                    },
                    {
                        "Items": [
                            {
                                "cat_id": 1501,
                                "cat_order": 1501,
                                "cat_path": "0|1500|1501|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "宝宝洗浴",
                                "parent_id": 1500,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1502,
                                "cat_order": 1502,
                                "cat_path": "0|1500|1502|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "宝宝护肤",
                                "parent_id": 1500,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1503,
                                "cat_order": 1503,
                                "cat_path": "0|1500|1503|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "牙膏",
                                "parent_id": 1500,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1504,
                                "cat_order": 1504,
                                "cat_path": "0|1500|1504|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "牙刷",
                                "parent_id": 1500,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1505,
                                "cat_order": 1505,
                                "cat_path": "0|1500|1505|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "驱蚊",
                                "parent_id": 1500,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1506,
                                "cat_order": 1506,
                                "cat_path": "0|1500|1506|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "退烧/感冒贴",
                                "parent_id": 1500,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1507,
                                "cat_order": 1507,
                                "cat_path": "0|1500|1507|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "耳温枪",
                                "parent_id": 1500,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1508,
                                "cat_order": 1508,
                                "cat_path": "0|1500|1508|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "口罩",
                                "parent_id": 1500,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1509,
                                "cat_order": 1509,
                                "cat_path": "0|1500|1509|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "清洁/消毒",
                                "parent_id": 1500,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            }
                        ],
                        "cat_id": 1500,
                        "cat_order": 1500,
                        "cat_path": "0|1500|",
                        "children": [ ],
                        "goods_count": 0,
                        "hasChildren": false,
                        "image": "",
                        "list_show": "1",
                        "name": "宝宝护理",
                        "parent_id": 0,
                        "state": "",
                        "type_id": 0,
                        "type_name": ""
                    },
                    {
                        "Items": [
                            {
                                "cat_id": 1601,
                                "cat_order": 1601,
                                "cat_path": "0|1600|1601|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "玩具/童车",
                                "parent_id": 1600,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            }
                        ],
                        "cat_id": 1600,
                        "cat_order": 1600,
                        "cat_path": "0|1600|",
                        "children": [ ],
                        "goods_count": 0,
                        "hasChildren": false,
                        "image": "",
                        "list_show": "1",
                        "name": "玩具/童车",
                        "parent_id": 0,
                        "state": "",
                        "type_id": 0,
                        "type_name": ""
                    },
                    {
                        "Items": [
                            {
                                "cat_id": 1701,
                                "cat_order": 1701,
                                "cat_path": "0|1700|1701|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "澳佳宝",
                                "parent_id": 1700,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1702,
                                "cat_order": 1702,
                                "cat_path": "0|1700|1702|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "Salus",
                                "parent_id": 1700,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1703,
                                "cat_order": 1703,
                                "cat_path": "0|1700|1703|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "Swisse",
                                "parent_id": 1700,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1704,
                                "cat_order": 1704,
                                "cat_path": "0|1700|1704|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "童年时光",
                                "parent_id": 1700,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1705,
                                "cat_order": 1705,
                                "cat_path": "0|1700|1705|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "Femibion",
                                "parent_id": 1700,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1706,
                                "cat_order": 1706,
                                "cat_path": "0|1700|1706|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "Osteocare",
                                "parent_id": 1700,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1707,
                                "cat_order": 1707,
                                "cat_path": "0|1700|1707|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "其他品牌",
                                "parent_id": 1700,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            }
                        ],
                        "cat_id": 1700,
                        "cat_order": 1700,
                        "cat_path": "0|1700|",
                        "children": [ ],
                        "goods_count": 0,
                        "hasChildren": false,
                        "image": "",
                        "list_show": "1",
                        "name": "保健品",
                        "parent_id": 0,
                        "state": "",
                        "type_id": 0,
                        "type_name": ""
                    },
                    {
                        "Items": [
                            {
                                "cat_id": 1801,
                                "cat_order": 1801,
                                "cat_path": "0|1800|1801|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "休闲零食",
                                "parent_id": 1800,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1802,
                                "cat_order": 1802,
                                "cat_path": "0|1800|1802|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "饮品",
                                "parent_id": 1800,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            }
                        ],
                        "cat_id": 1800,
                        "cat_order": 1800,
                        "cat_path": "0|1800|",
                        "children": [ ],
                        "goods_count": 0,
                        "hasChildren": false,
                        "image": "",
                        "list_show": "1",
                        "name": "进口食品",
                        "parent_id": 0,
                        "state": "",
                        "type_id": 0,
                        "type_name": ""
                    },
                    {
                        "Items": [
                            {
                                "cat_id": 1901,
                                "cat_order": 1901,
                                "cat_path": "0|1900|1901|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "孕妇护肤品",
                                "parent_id": 1900,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1902,
                                "cat_order": 1902,
                                "cat_path": "0|1900|1902|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "授乳枕",
                                "parent_id": 1900,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1903,
                                "cat_order": 1903,
                                "cat_path": "0|1900|1903|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "面部护肤",
                                "parent_id": 1900,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1904,
                                "cat_order": 1904,
                                "cat_path": "0|1900|1904|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "美发",
                                "parent_id": 1900,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1905,
                                "cat_order": 1905,
                                "cat_path": "0|1900|1905|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "卫生巾",
                                "parent_id": 1900,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            },
                            {
                                "cat_id": 1906,
                                "cat_order": 1906,
                                "cat_path": "0|1900|1906|",
                                "children": [ ],
                                "goods_count": 0,
                                "hasChildren": false,
                                "image": "",
                                "list_show": "1",
                                "name": "身体护理",
                                "parent_id": 1900,
                                "state": "",
                                "type_id": 0,
                                "type_name": ""
                            }
                        ],
                        "cat_id": 1900,
                        "cat_order": 1900,
                        "cat_path": "0|1900|",
                        "children": [ ],
                        "goods_count": 0,
                        "hasChildren": false,
                        "image": "",
                        "list_show": "1",
                        "name": "成人日化",
                        "parent_id": 0,
                        "state": "",
                        "type_id": 0,
                        "type_name": ""
                    }
                ]
            }

            var imgRoot='';
            // 后台接口,获取宝贝数据
            if(typeof getContextPath =='function'){
                imgRoot='../../';
            }else{
                window.getContextPath=function(){
                    return 'http://localhost:3000';
                }
            }
            var actionSearch = getContextPath() + '/goods/appGoodsList';
            var decorateSaveAction = getContextPath() + '/goods/appSaveDecoration';
            var decorateUploadAction = getContextPath() + '/goods/appUploadShopPic';
            var decorateUploadAction2 = getContextPath() + '/uploadImg'//'/multerUpload';
            var decorateContentAction = getContextPath() + '/goods/appShopDecoration';

            // 模块映射
            var get_mol = function (molid) {
                return document.getElementById('temp-' + molid).innerHTML;
            }
            // 编辑模块映射
            var get_mol_ctrl = function (molid) {
                return document.getElementById('temp-ctrl-' + molid).innerHTML;
            }
            // 模板说明映射
            var mol_tip_dic = {
                'tb-features': '品牌优势<hr>四个LOGO,醒目展现亲小店的优势',
                'hd-features': '品牌优势<hr>四个LOGO,醒目展现亲小店的优势',
                'bb-features': '品牌优势<hr>四个LOGO,醒目展现亲小店的优势',
                'hd-brands': '各大品牌LOGO陈列<hr>一个品牌一个贴图,琳琅满目,快拖进手机里看看吧~',
                'tb-category': '商品分类<hr>列出宝贝的几大类,供顾客挑选哦~',
                'bb-category': '商品分类<hr>列出宝贝的几大类,供顾客挑选哦~',
                'hd-category': '商品分类<hr>列出宝贝的几大类,供顾客挑选哦~',
                'singleGood': '这是单宝贝模块<hr>拖入手机 ,然后点击,可以在右侧自定义宝贝的信息',
                'doubleGood': '这是双宝贝模块<hr>两个宝贝并列, 拖入手机后点击,在右侧自定义宝贝的信息',
                'singlePic': '单图片模块<hr>一般选择一张宣传热图, 或者,可以一张装饰性的图片.<br>如果是纯装饰性的 ,可以不要文字和链接',
                'slideBox': '轮播图片模块<hr>也称幻灯片,可以选择多张图片(直接输入链接或上传),将在首页自动切换轮播',
                'doublePic': '并列图片<hr>一般用来做品牌区域,块状LOGO图',
                'wordPic': '图文并茂<hr> 做图需要美工在左侧纯色或留白',
                'bannerPic': '横幅图片<hr>醒目的广告宣传横图,独占一行,可以放入多幅',
                'titleOnly': '纯文字的标题<hr>用于分段标注',
                'wordOnly': '纯粹的文字<hr>说一些你想跟卖家说的话吧',
                'contract': '您的联系方式<hr>写上电话卖家更容易联系到你',
                'singleGoodList': '宝贝列表模块<hr>多行, 每行展示一个宝贝,包括图片,文字介绍和价格.<br>具体设置请拖入手机后, 单击手机内该模块',
                'doubleGoodList': '宝贝列表模块<hr>多行, 每行展示两个宝贝,包括图片,文字介绍和价格.<br>具体设置请拖入手机后, 单击手机内该模块',
            }
            // 模块默认值映射设定
            var mol_val_dic = {
                "val-singleGood": {
                    href: '#',
                    picPath: imgRoot+'img/decorate/re-good.jpg',//   真实目录为../../img/   CSS真实图片目录为../img
                    name: '宝乐滋3罐超值特价装!',
                    price: 92.00
                },
                "val-doubleGood": {
                    href: '#',
                    picPath: imgRoot+'img/decorate/good17.jpg',
                    name: '漂亮的女童裤子 纯棉',
                    price: 56.00,
                    href2: '#',
                    picPath2: imgRoot+'img/decorate/good13.jpg',
                    name2: '小脚裤子批发 颜色多',
                    price2: 52.00
                },
                "val-wordPic": {
                    href: '#',
                    imgsrc: imgRoot+'img/decorate/word-pic.jpg',
                    desc: '图片描述文字,一些文字,怕怕拉拉,什么的<br>或者,图片可以做成100%<br>文字遮罩在图片左上角<br>这需要图片设计配合<br>左上角统一色调或留白',
                },
                "val-slideBox": [{href: '#', imgsrc: imgRoot+'img/decorate/slide.jpg'}, {href: '#', imgsrc: imgRoot+'img/decorate/slide2.jpg'}, {
                    href: '#',
                    imgsrc: imgRoot+'img/decorate/slide3.jpg'
                }],
                "val-singlePic": {
                    href: '#',
                    imgsrc: imgRoot+'img/decorate/baby-house.jpg',
                    desc: '婴童夏装换季清仓中! 点击进入专区!',
                },
                "val-doublePic": {
                    href: '#',
                    imgsrc: imgRoot+'img/decorate/baby-joy01.jpg',
                    desc: '童车特价中! 点击进入专区!',
                    href2: '#',
                    imgsrc2: imgRoot+'img/decorate/baby-joy02.jpg',
                    desc2: '玩具特价! 点击进入专区!',
                },
                "val-tb-category": {
                    href: '#',
                    imgsrc: imgRoot+'img/decorate/area-logo-01.jpg',
                    desc: 'LOGO AREA<br>奶粉专区',
                    href2: '#',
                    imgsrc2: imgRoot+'img/decorate/area-logo-02.jpg',
                    desc2: 'LOGO AREA<br>日用品专区',
                    href3: '#',
                    imgsrc3: imgRoot+'img/decorate/area-logo-03.jpg',
                    desc3: 'LOGO AREA<br>尿不湿专区',
                    href4: '#',
                    imgsrc4: imgRoot+'img/decorate/area-logo-04.jpg',
                    desc4: 'LOGO AREA<br>妈妈专区',
                },
                "val-bannerPic": {imgsrc: imgRoot+"img/decorate/banner.jpg", href: '#'},
                "val-bb-category": null,//{imgsrc: imgRoot+"img/decorate/masonry.png"},
                "val-bb-features": {imgsrc: imgRoot+"img/decorate/hdnew-features.png"},
                "val-titleOnly": {title: '推荐宝贝'},
                "val-wordOnly": {desc: '欢迎光临小店!<br>本店的所有商品都是真宗境外海淘<br>海关保税仓发货, 优惠多多, 还有包邮<br>欢迎亲多多选购~~~ '},
                "val-contract": {tel: window.telphoneAccount||'1381396655', wechat: window.wechatAccount||'weixina2017006'},
                "val-hd-category": {
                    href: '1100',
                    imgsrc: imgRoot+'img/decorate/category/hd-category01.jpg',
                    title: '奶粉',
                    desc:'全球奶粉跨境购',

                    href2: '1200',
                    imgsrc2: imgRoot+'img/decorate/category/hd-category02.jpg',
                    title2: '尿不湿',
                    desc2:'轻松透气一整天',

                    href3: '1300',
                    imgsrc3: imgRoot+'img/decorate/category/hd-category03.jpg',
                    title3: '辅食',
                    desc3:'肠胃健康妈妈放心',

                    href4: '1700',
                    imgsrc4: imgRoot+'img/decorate/category/hd-category04.jpg',
                    title4: '保健品',
                    desc4:'全球保健品一站购',
                }
            };
            // 模块使用数限制状态机
            var mol_count_dic = {
                'tb-features': 2,
                'bb-features': 2,
                'hd-features': 2,
                'tb-category': 2,
                'bb-category': 2,
                'hd-category': 2,
                'hd-brands': 2,
                'singleGood': 8,
                'doubleGood': 8,
                'slideBox': 1,
                'singlePic': 6,
                'bannerPic': 6,
                'doublePic': 2,
                'wordPic': 3,
                'wordOnly': 3,
                'titleOnly': 12,
                'contract': 2,
                'singleGoodList': 2,
                'doubleGoodList': 2
            };
            // 模板组合映射
            var templates = {
                'tempDefault': ['singlePic', 'wordOnly', 'hd-brands', 'titleOnly', 'singleGoodList', 'contract'],
                tbstyle: [{name: 'singlePic'},
                    {name: 'wordOnly'},
                    {name: 'tb-features'},
                    {name: 'titleOnly', data: {title: '热门品类'}},
                    {name: 'tb-category'},
                    {name: 'titleOnly'},
                    {name: 'doubleGoodList'},
                    {name: 'contract'}],
                bbstyle: [{name: 'slideBox'},
                    {name: 'bb-features'},
                    {name: 'bb-category'},
                    {name: 'titleOnly', data: {title: '热门推荐'}},
                    {name: 'bannerPic'},
                    //{name: 'bannerPic', data: {imgsrc: "img/decorate/banner2.jpg", href: '#'}},
                    //{name: 'bannerPic', data: {imgsrc: "img/decorate/banner3.jpg", href: '#'}},
                    //{name: 'bannerPic', data: {imgsrc: "img/decorate/banner4.jpg", href: '#'}},
                    //{name: 'bannerPic', data: {imgsrc: "img/decorate/banner5.jpg", href: '#'}},
                    {name: 'titleOnly', data: {title: '热销宝贝'}},
                    //{name: 'singleGood'},
                    //{
                    //    name: 'singleGood', data: {
                    //    href: '#',
                    //    picPath: imgRoot+'img/decorate/re-good2.jpg',
                    //    name: '秋装新款 童装毛衣 外贸出口!',
                    //    price: 52.00
                    //}
                    //},
                    //{
                    //    name: 'singleGood', data: {
                    //    href: '#',
                    //    picPath: imgRoot+'img/decorate/re-good3.jpg',
                    //    name: '宝宝的小屁屁最好的呵护~~~ 金装尿不湿!',
                    //    price: 168.00
                    //}
                    //},
                    //http://120.26.112.178/statics/attachment/adv/201508251149578842.jpg
                    //http://120.26.112.178/statics/attachment/adv/201508251149362020.jpg
                    //http://120.26.112.178/statics/attachment/adv/201508251149126985.jpg

                    {
                        name: 'singleGood', data: {
                        href: '#',
                        picPath: 'http://120.26.112.178/statics/attachment/adv/201508251150129137.jpg',//imgRoot+'img/decorate/re-good2.jpg',
                        name: '德国 碧然德 滤水壶,给健康的限时特价!',
                        price: 168.00
                    }
                    },
                    {
                        name: 'singleGood', data: {
                        href: '#',
                        picPath: 'http://120.26.112.178/statics/attachment/adv/201508251150511809.jpg',//imgRoot+'img/decorate/re-good2.jpg',
                        name: '荷兰牛栏三段,市场优选!',
                        price: 252.00
                    }
                    },
                    {
                        name: 'singleGood', data: {
                        href: '#',
                        picPath: 'http://120.26.112.178/statics/attachment/adv/201508251150338462.jpg',//imgRoot+'img/decorate/re-good3.jpg',
                        name: '宝宝的小屁屁最好的呵护~~~ 金装尿不湿!',
                        price: 268.00
                    }
                    },
                    {name: 'titleOnly'},
                    {name: 'doubleGoodList'},
                    {name: 'contract'}],
                hdstyle: [{name: 'slideBox', data: [{href: '#', imgsrc: imgRoot+'img/decorate/hot.jpg'}, {href: '#', imgsrc: imgRoot+'img/decorate/hot2.jpg'}]},
                    {name: 'hd-features'},
                    {name: 'titleOnly', data: {title: '品牌馆'}},
                    {name: 'hd-brands'},
                    {name: 'titleOnly', data: {title: '热门分类'}},
                    {name: 'hd-category'},
                    {name: 'titleOnly'},
                    {name: 'singleGoodList'},
                    {name: 'contract'}]
            };


            // 先打开宝贝选择页面, 然后选择想要赋值给宝贝列表的宝贝们, 假设这些是后台选取的宝贝数据
            var gotGoods = [];
            // 选中的宝贝
            var checkedGoods = [];
            // 临时选中的宝贝
            var tempCheckedGoods=[];
            // 装载默认宝贝
            $.ajax(actionSearch).always(function (res) {
                if (res.result) {
                    gotGoods = res.data;
                    mol_val_dic['val-singleGoodList']=mol_val_dic['val-doubleGoodList']=gotGoods.slice(0,6);
                }
            });


            // 选择器预备
            var molsModal=$('#mols-modal')
             ,  linksModal=$('#links-modal')
             ,  molTip=$('.mol-tip')
             ,  tempGoodSell=$('#temp-good-cell').html()
             ,  showMobile= $('#show-mobile')
             ,  moveBtnHtml='<a class="go-recycle">删除</a><a class="go-up">移上</a><a class="go-down">移下</a>'
             ,  submitResetWrap=$('.submit-reset-wrap')
             ,  ctrlArea=$('#ctrl-area')
             ,  ctrlWrap=$('#ctrl-wrap')
             ,  molCtrlWrap
             ,  goodsCheckedDone=$('#goods-checked-done')
             ,  goodsListCls=$('#goods-list-cls')
             ,  allGoodsHref = '<a class="all-goods-href">查看所有宝贝&nbsp;&gt;&gt;</a>'
             ,  goodsCheckedList=$('#goods-checked-list')
             ,  goodsList=$('#goods-list')
             ,  keywordForSearch=$('#keyword-for-search')
             ,  linksKeywordForSearch=$('#links-keyword-for-search')
             ,  maskMain=$('.mask-main')
             ,  mainDiv=$('#main')
             ,  helps=$('#helps')
             ,  btnHelp=$('#btn-help')
             ,  neverAgain=$('#never-again')
             ,  confirmMain=$('#confirm-main')
             ,  confirmContent=$('#confirm-content')
             ,  confirmCancel=$('#confirm-cancel')
             ,  confirmOk=$('#confirm-ok')
             ,  confirmEvent={str:'',handleEvent:function(){}}
             ,  alertAssertive=$('.alert-assertive')
             ,  linksGoodsList=$('#links-goods-list')
             ,  linkSelectBtn='[data-target=#links-modal]'
             ,  category1=$('#category1')
             ,  category2=$('#category2')
             ,  categoryList1=$('#category1-list')
             ,  categoryList2=$('#category2-list')
             ,  linkCheck1Btn= $('#link-check1-btn')
             ,  linkCheck2Btn= $('#link-check2-btn')
             ,  goCategory1Btn=$('#go-category1-btn')
             ,  goCategory2Btn=$('#go-category2-btn')
             ,  category1CtrlWrap=$('#category1-ctrl-wrap')
             ,  category2CtrlWrap=$('#category2-ctrl-wrap')


            // 写一个通用的alert提示,bootstrap样式
            var bootAlert=function(str, holdTime) {
                alertAssertive.fadeIn(300, function () {
                    setTimeout((function () {
                        $(this).fadeOut(600);
                    }).bind(this), holdTime || 2400);
                }).html(function (i, old) {
                    return str;
                });
                return false;
            };
            alertAssertive.click(function(){
                $(this).hide();
            });
            //$('.main-help>.close').click(function(){
            //    $(this).parent().after('<hr>').hide();
            //});

            // confirm提示
            confirmCancel.click(function(){confirmMain.hide() && maskMain.hide();})
            /* DOM2 eventHandle
            var bootConfirm=function(str,fn){
                confirmContent.html(str.replace(/\n/gm,'<br>'));
                maskMain.show() && confirmMain.show();
                confirmEvent.handleEvent=function(){confirmMain.hide();maskMain.hide();fn()};
                confirmOk[0].addEventListener('click',confirmEvent,false)
            }
            */
            /*IE8 confirm
            var bootConfirm=function(str,fn){
                var maskMain=$('<div>').css({width: '100%', height: '100%', background: '#222', position: 'fixed', top: 0, left: 0, opacity: 0.7, 'z-index': 18881}).appendTo('body')
                confirmContent.html(str.replace(/\n/gm,'<br>'));
                maskMain.show() && confirmMain.show();
                var callback=function(){
                    confirmMain.hide() && maskMain.hide();
                    fn();
                    confirmOk[0].removeEventListener('click',callback,false);
                };
                confirmOk[0].addEventListener('click',callback,false)
            }
            */
            /*jquery one*/
            var bootConfirm=function(str,fn){
                confirmContent.html(str.replace(/\n/gm,'<br>'));
                maskMain.show() && confirmMain.show();
                confirmOk.one('click',function(){
                    confirmMain.hide() && maskMain.hide();
                    fn();
                });
            }

            // 定时变色
            $.fn.pinkFlash=function(hold){
                var the=$(this);
                var old=the.css('background')
                the.css('background','#fbb');
                setTimeout(function(){
                    the.css('background',old||'#fff')
                },hold||1800)
            }

            // 关闭帮助 与 显示帮助
            $('#helps .btn').on('click',function() {
                closeHelp(true);
                toggle();
            });
            $('document').ready(function(){
                (localStorage.hdDecorateHelpKnew==1) ? toggle(): showHelp(true);
            });

            // 显示二维码
            //$('#goto-shop').on('mouseenter',function(){maskMain.show();}).on('mouseleave',function(){maskMain.hide()})

            // ajax promise
            var ajaxFactory=function(action,param){
                    return $.ajax({
                        url: action,
                        data: param,
                        type: 'post'
                    })
            }
            var goodsQuery=function(pageSize,pageNum,keyword){
                return ajaxFactory(actionSearch,{pageSize: pageSize||20, pageNum: pageNum || 1, keyword: keyword||''})
            }

            // 检测当前宝贝列表各个宝贝有效性
            var indexCheckedGoodsDic={};
            window.indexCheckedGoods=window.indexCheckedGoods||[{"goods_id":1002,"picPath":"img/decorate/goods/good32.jpg","href":"","mktprice":110,"price":20,"name":"童装男童男孩小孩纯棉夏天好用"},{"goods_id":1003,"picPath":"img/decorate/goods/good33.jpg","href":"","mktprice":158,"price":99,"name":"碧然德滤水壶测试促销商品纯棉夏天好用"}];
            window.indexCheckedGoods.forEach(function(v,i){
                indexCheckedGoodsDic[v.goods_id || v.goodsId]=v;
            })

            // cell实例工厂
            var cellFactory=function(htmlTempId,initData,mapDic){
                var html=document.getElementById('temp-'+htmlTempId).innerHTML;
                if(mapDic){
                    for(var n in mapDic){
                        html=html.replace( new RegExp('\{'+n+'\}','gm'), String( initData[mapDic[n]] ) )
                    }
                }else{
                    html=html.replace(/\{[^\}]+\}/gm,function(m){
                        return initData[ m.replace(/\{|\}/gm,'') ]
                    })
                    //html.replace(/\{\w+\}/gm,function(m){console.info(m);})
                }
                return $(html).data('initData',initData);
            }

            // 装载链接分类列表
            var linkFillItems=function(grade){
                if(grade==1){
                    categoryList1.empty()
                    var $fg=$(document.createDocumentFragment());
                    //var mapDic={name:'name',imgsrc:'picPath',price:'price'}
                    resp.data.forEach(function(item){
                        item.picPath=imgRoot+'img/decorate/categories/'+  (item.cat_id+1) +'.png';
                        $fg.append(cellFactory('link-item-cell',item).addClass('category1-cell'))
                    })
                    categoryList1.append($fg)
                }else{
                    categoryList2.empty()
                    var checkedItem=category1CtrlWrap.data('checkedItem')
                    var $fg=$(document.createDocumentFragment());
                    //var mapDic={name:'name',imgsrc:'picPath',price:'price'}
                    checkedItem.Items.forEach(function(item){
                        item.picPath=imgRoot+'img/decorate/categories/'+item.cat_id+'.png';
                        $fg.append(cellFactory('link-item-cell',item).addClass('category2-cell'))
                    })
                    categoryList2.append($fg)
                }

            }

            linksModal.on('click','.category1-cell',function(){
                category1CtrlWrap.show().data('checkedItem',$(this).data('initData'));
            })
                .on('click','.category2-cell',function(){
                    category2CtrlWrap.show().data('checkedItem',$(this).data('initData'));
                })

            linkCheck1Btn.on('click',function(){
                var checkedItem=$(this).parent().data('checkedItem')
                var href='#/tab/search/'+checkedItem.cat_id;
                var imgsrc=checkedItem.picPath;
                var desc=checkedItem.name;
                var target=ctrlWrap.data('linkFor');
                target.find('[mapid^=href]').val(href).pinkFlash();
                target.find('[mapid^=desc]').val(desc).pinkFlash();
                category1CtrlWrap.hide();
                linksModal.modal('hide');
                bootAlert('链接选取成功, 已经自动填入',980)
            })
            linkCheck2Btn.on('click',function(){
                var checkedItem=$(this).parent().data('checkedItem')
                var href='#/categories/'+checkedItem.cat_id;
                var imgsrc=checkedItem.picPath;
                var desc=checkedItem.name;
                var target=ctrlWrap.data('linkFor');
                target.find('[mapid^=href]').val(href).pinkFlash();
                target.find('[mapid^=desc]').val(desc).pinkFlash();
                category2CtrlWrap.hide();
                category2.hide(),category1.show();
                linksModal.modal('hide');
                bootAlert('链接选取成功, 已经自动填入',980)
            })
            goCategory2Btn.on('click',function(){
                category1CtrlWrap.hide();
                category1.hide();
                category2.fadeIn();
                linkFillItems(2);
            })
            goCategory1Btn.on('click',function(){
                category2CtrlWrap.hide();
                category2.hide();
                category1.fadeIn();
            })

            category1CtrlWrap[0].onclick=category2CtrlWrap[0].onclick=function(){$(this).hide()}

            //模态窗中上传图片
            var uploadImgCrop=function(){
                var data = new FormData();
                var files=document.querySelector('#crop-up-img').files;
                var i=files.length;
                while (i--) {
                    data.append('cropUpImg', files[i]);
                }
                $.ajax({
                    url: decorateUploadAction,
                    type: 'POST',
                    data: data,
                    dataType: 'JSON',
                    cache: false,
                    processData: false,
                    contentType: false,
                    success: function (res) {
                        if (res.result == 1) {
                            $('#img-up-result img')[0].src = $('#img-up-result p')[0].innerHTML = res.data[0];
                        } else {
                            console.info(res);
                        }
                    }
                });
                return false;
            }

            // 装载链接宝贝列表
            var linksFillGoods=function(pageSize){
                linksGoodsList.empty();
                var fn=function(gotGoods){
                    var $fg=$(document.createDocumentFragment());
                    var mapDic={name:'name',imgsrc:'picPath',price:'price'}
                    gotGoods.slice(0,5).forEach(function(g){
                        $fg.append(cellFactory('link-good-cell',g,mapDic))
                    });
                    linksGoodsList.append($fg)
                }

                var keyword = linksKeywordForSearch.val();
                goodsQuery(5,pageSize,keyword).always(function (resp) {
                    //console.info(resp)
                    if (resp.result == 1) {
                        fn(resp.data);
                        //更新页码显示
                        $('#links-now-pagenum').text(resp.page.pageNum);
                        $('#links-total-pagenum').text(resp.page.pageCount);
                    } else {
                        console.info(resp);
                        //$('#total-pagenum,#now-pagenum').text('0');
                    }
                })
            }

            // 打开选取链接模态窗
            ctrlWrap.on('click',linkSelectBtn,function(){
                linksFillGoods(1);
                ctrlWrap.data('linkFor', $(this).parent() );
                linkFillItems(1);
            })

            // 链接宝贝搜索
            $('#links-goods-search-btn').click(function () {
                linksFillGoods(1);
            });

            //链接下一页
            $('.links-go-next').click(function () {
                var nowPageNum = +$('#links-now-pagenum').text();
                if (nowPageNum == $('#links-total-pagenum').text()) {
                    return false;
                }
                linksFillGoods(nowPageNum + 1);
            })

            //链接上一页
            $('.links-go-prev').click(function () {
                var nowPageNum = +$('#links-now-pagenum').text();
                if (nowPageNum < 2) {
                    return false;
                }
                linksFillGoods(nowPageNum - 1);
            })

            //链接第一页
            $('.links-go-first').click(function () {
                var nowPageNum = +$('#links-now-pagenum').text();
                if (nowPageNum == 1 || nowPageNum == 0) {
                    return false;
                }
                linksFillGoods(1);
            })

            //链接最后一页
            $('.links-go-last').click(function () {
                var nowPageNum = +$('#links-now-pagenum').text();
                var totalCount = +$('#links-total-pagenum').text();
                if (nowPageNum == totalCount) {
                    return false;
                }
                linksFillGoods(totalCount);
            })

            // 选中宝贝链接
            $('#links-goods-list').on('click','.link-check-goods',function(){
                var initData=$(this).parent().data('initData')
                var href='#/goods/'+initData.goods_id;
                var target=ctrlWrap.data('linkFor');

                //for(var n in initData){
                //    target.find('[mapid='+n+']').val(initData[n])
                //}
                target.find('[mapid^=name]').val(initData.name);
                target.find('[mapid^=price]').val(initData.price);
                target.find('[mapid^=href]').val(href).focus();

                linksModal.modal('hide');
                bootAlert('链接选取成功, 已经自动填入',980)
            })

            /* 以下是交互方法 */
            // 装载宝贝到编辑区宝贝列表----------------------------------------------------------------------------------------------------------------------------
            var fillCtrlWrapGoodsList=function (){
                // 准备一个片段
                var fg = $(document.createDocumentFragment());
                // 准备一个good个例
                var good;
                checkedGoods.forEach(function(obj,i){
                    good = $(tempGoodSell.replace(/\{name\}/gm, obj['name'])
                        .replace('{picPath}', obj['thumbnail'] || obj['picPath'])
                        .replace('{href}', '#/tab/goods/' + obj['goods_id']||obj['goodsId'])
                        .replace('{price}', obj['price']))

                    good.data('good-info', obj).html(function(i,old){return old+'<i>×</i>'});


                    //indexCheckedGoodsDic[ obj['goods_id']||obj['goodsId'] ] || good.addClass('disabled');


                    fg.append(good);
                })
                $('.ctrlArea-goodsChecked-wrap').empty().append(fg);
            }

            // 装载宝贝到模态窗
            var fillGoods=function(pageNum) {
                var keyword = keywordForSearch.val();
                goodsQuery(20,pageNum,keyword).always(function (resp) {
                    //console.info(resp)
                    if (resp.result == 1) {
                        var good;
                        //先置空
                        goodsList.empty();
                        //准备一个片段
                        var fg = $(document.createDocumentFragment());
                        //载入宝贝数组
                        resp.data.forEach(function (obj, i) {
                            good = $(tempGoodSell.replace(/\{name\}/gm, obj['name'])
                                .replace('{picPath}', obj['thumbnail'] || obj['picPath'])
                                .replace('{href}', '#/tab/goods/' + obj['goodsId'])
                                .replace('{price}', obj['price']));
                            good.data('good-info', obj);
                            fg.append(good);
                        });
                        goodsList.append(fg)
                        //更新页码显示
                        $('#now-pagenum').text(resp.page.pageNum);
                        $('#total-pagenum').text(resp.page.pageCount);
                    } else {
                        console.info(resp);
                        //$('#total-pagenum,#now-pagenum').text('0');
                    }
                })
            }

            // 装载宝贝到模态窗下方已选区
            var addCheckedGoods =function (goodsArr,hasPushed,isTemped){
                var good_tag,src,img;

                goodsArr.every(function(goodInfo,i){
                    if (goodsCheckedList.children().length < 12) {

                        // 实例化单个elelment
                        src = goodInfo['picPath'] || goodInfo['thumbnail'];
                        img=$('<img>').prop('src',src);
                        good_tag= $('<div class="good-tag">')
                            .append(img)
                            .append('<i>&times;</i>')
                            .data('good-info', goodInfo);

                        /* 失效标记?
                         if(!indexCheckedGoodsDic[ goodInfo['goods_id']||goodInfo['goodsId'] ]){
                         good_tag.addClass('disabled');
                         }
                         */

                        if(!hasPushed){
                            // 登记到队列
                            isTemped ? tempCheckedGoods.push(goodInfo): checkedGoods.push(goodInfo) ;
                            // 加入下方显示区
                            goodsCheckedList.append(good_tag);
                        }

                        return true;

                    } else {
                        bootAlert('首页推荐宝贝列表最多装载12个, 其余的可点击[全部宝贝]查看');
                        return false;
                    }
                })

            }

            // 单个删除
            var delSingleGoodChecked=function(eve,isTemp){
                var index=$(this).parent().index();
                isTemp ? tempCheckedGoods.splice(index, 1) : checkedGoods.splice(index, 1);
                $(this).parent().remove();
            }

            // 装载宝贝到宝贝列表模块
            var goods_list_instance=function (datas, rowCount) {
                var html_wrap, html_good, div = $('<div>');

                if (rowCount == 1) {
                    html_wrap = '<div class="" molid="singleGood"></div>';
                    html_good = '<a class="singleGood-wrap-one"  > <img src="{picPath}" ><p>{name}</p><i>￥{price}</i></a>';
                } else {
                    html_wrap = '<div class="" molid="doubleGood"></div>';
                    html_good = '<a class="doubleGood-wrap-one"  > <img src="{picPath}" ><p>{name}</p><i>￥{price}</i></a>';
                }

                var html, node_good, node_wrap = $(html_wrap)[0];

                datas.forEach(function (obj, i) {
                    html = html_good.replace('{name}', obj['name'])
                        .replace('{picPath}', obj['thumbnail'] || obj['picPath'])
                        .replace('{href}', obj['href'])
                        .replace('{price}', obj['price']);
                    node_good = $(html)[0];
                    if (rowCount == 1) {
                        div[0].appendChild(node_good);
                    } else {
                        //每两个good重生成一个包裹
                        if (i % 2 == 0) {
                            node_wrap = $(html_wrap)[0];
                        }
                        node_wrap.appendChild(node_good);
                        //每装两个good,一个包裹饱和,插入到div
                        if (i % 2 != 0 || i == datas.length - 1) {
                            div[0].appendChild(node_wrap);
                        }
                    }
                });

                return div.html() + allGoodsHref;
            }

            // 清空选择的宝贝
            var goods_list_cls=function(isCancel) {
                goodsCheckedList.empty();
                goodsList.empty();
                //checkedGoods = [];  // 这里不置空,每次点击模块的时候置空
                tempCheckedGoods=[];
                !isCancel && fillCtrlWrapGoodsList();
            }

            // 自动装载模板组合中的各模块, 此函数为模板载入的关键依赖
            var autoAppendNodes=function(mols) {
                mols = mols || [];
                var html, defaultVals, div, i, k, name, data, mobile = $('#show-mobile')[0];

                // 获取模板HTML和默认数据, 并实例化
                for (i = 0; i < mols.length; i++) {
                    name = mols[i].name;
                    data = mols[i].data || mol_val_dic['val-' + name];//这里最好保存mol_val_dic[key]的拷贝
                    html = get_mol(name);
                    if (name == 'slideBox') {
                        html = html.replace('{imgsrc}', data[0]['imgsrc']).replace('{href}', data[0]['href']);
                    } else if(name.lastIndexOf('GoodList')>-1){
                        data=data||gotGoods.slice(0, 8);
                        html=html.replace('{content}',goods_list_instance(data, name.indexOf('single')==0?1:2));
                    } else {
                        for (k in data) {
                            html = html.replace('{' + k + '}', data[k]);
                        }
                    }
                    // 转为节点, 加上按钮, 插入
                    div = $(html)[0];
                    div.innerHTML += moveBtnHtml;
                    mobile.appendChild(div);
                    $(div).data('native', data);
                    mol_count_dic[div.getAttribute('molid')] -= 1;
                }

                // 默认隐藏上下调整小按钮
                $('.go-recycle,.go-up,.go-down').hide();
            }

            //图片上传
            var uploadImg=function () {
                // 图片检测
                var files = $('.img-up-file')[0].files;
                if (!files.length) {
                    return false;
                } else if (files.length > 3) {
                    bootAlert('最多上传3张图片');
                    return false;
                }
                for (var i = 0; i < files.length; i++) {
                    //alert(files[i].size)
                    if (files[i].size > 200 * 1024) {
                        bootAlert('单张图片大小不能超过200k,请压缩后重新上传');
                        return false;
                    }
                }
                // h5表单多文件上传
                var data = new FormData(document.querySelector('.img-up-form'));
                $.ajax({
                    url: decorateUploadAction,
                    type: 'POST',
                    data: data,
                    dataType: 'JSON',
                    cache: false,
                    processData: false,
                    contentType: false,
                    success: function (res) {
                        if (res.result == 1) {
                            res.srcs = res.data;
                        } else {
                            console.info(res);
                            res.srcs = [];
                        }
                        //把回传过来的img-src地址,显示在下方,并保存到该模块对应的data中
                        if (res.srcs) {
                            var molobj = $('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index')),
                                m = document.querySelector('.mol-ctrl-wrap'),
                                fg = document.createDocumentFragment(),
                                p, arr;
                            /*
                             res.srcs.forEach(function(v,i){
                             p=document.createElement('p');
                             p.className='uploaded-info';
                             p.innerHTML=v;
                             fg.appendChild(p);
                             })
                             p=document.createElement('p');
                             p.className='upload-ok-tip';
                             p.innerHTML='上传成功,图片地址如上,已经自动填入.';
                             fg.appendChild(p);
                             m.appendChild(fg);
                             */
                            molobj.data('native', res.srcs);
                            $('.mol-ctrl-wrap').find('[mapid^=imgsrc]').each(function (i, val) {
                                this.value = res.srcs[i] || this.value;
                                if (i < res.srcs.length) {
                                    $(this).css('background', '#fbb');
                                }
                                //setTimeout(function(){$(this).css('background','');}.bind(this),5600)
                            })
                            molobj.find('img')[0].src = res.srcs[0];
                            bootAlert('上传成功,图片地址已自动依次填入. 也可以手动剪切图片地址, 调整次序.', 2400);
                            document.querySelector('.img-up-file').value = null;
                        }
                    }
                });
                return false;
            }

            // 保存方法(统计当前模块排列组合的信息及其绑定的数据,此函数为操作后的最终步骤. 数据最后直接提供给api,保存成功即PC流程完成)
            var makeJson=function (){
                // goodsid数组
                var goodsIdArr=[];
                var goodsIdObj={};
                var molid;
                var json = [];
                var mols = $('#show-mobile').find('.mol-wrap');
                mols.each(function (v, i) {
                    molid = this.getAttribute('molid');
                    if (molid == "tb-category") {
                        $(this).data('native', null);
                    }else if(molid.lastIndexOf('GoodList')>-1){
                        $(this).data('native',  $(this).data('native') || gotGoods.slice(0, 8));
                        $(this).data('native').forEach(function(goods){
                            goodsIdObj[goods.goods_id+'']='';
                        });
                    }
                    json.push({
                        'name': molid,
                        'data': $(this).data('native') || mol_val_dic['val-' + molid] || null
                    })
                });
                for(var n in goodsIdObj){
                    goodsIdArr.push(n);
                }
                console.log(goodsIdArr);
                console.table(json);
                return {content:JSON.stringify(json),goods_id_arr:goodsIdArr};
            }

            // 关闭帮助 与 显示帮助
            var closeHelp=function(showAnimate){
                var flag=neverAgain[0].checked;
                flag && (localStorage.hdDecorateHelpKnew=1);
                maskMain.hide();
                mainDiv.removeClass('blur');
                if(showAnimate===true){
                    helps.find('p').animate({width:0,height:30},300,function(){
                        $(this).hide(200);
                    })
                }else{
                    helps.find('p').hide();
                }
            }
            var showHelp=function(showMask){
                helps.show();
                helps.find('p').css({width:208,height:118}).show();
                (showMask===true) && maskMain.show();
                mainDiv.addClass('blur');
            }
            var toggle=function(){btnHelp.mouseenter(showHelp).mouseleave(closeHelp);};

            // 载入组合模板
            $('[tempid]').on('click', function () {
                var tempid=$(this).attr('tempid');
                var str;
                if(tempid==''){
                    str='\n确定清空? \n\n将清除页面当前的装修预览.\n ';
                }else{
                    str='确定应用此模版? \n\n替换页面当前的装修预览. '
                }

                bootConfirm(str,function(){
                    // 先清空
                    showMobile.find('.mol-wrap').each(function () {
                        $(this).remove();
                        mol_count_dic[this.getAttribute('molid')]++;
                    });
                    ctrlWrap.empty();
                    //再载入
                    autoAppendNodes(templates[tempid]);
                    submitResetWrap.hide();
                    molsModal.modal('hide');
                    bootAlert('操作成功',600);
                })

            });


            // 拖拽方法(拖入的容器上定义的部分)
            showMobile.on('drop', function (e) {
                // 拖放完成,先取消默认事件
                event.preventDefault();
                // 再提取传递的信息
                var tagName = event.dataTransfer.getData("Text");
                var molid = tagName.replace('tag-', '');
                // 找到蓝顶标记的参照元素
                var target = $('.mol-wrap').filter('.blue-top')[0];
                // 超限控制及提示
                if (!mol_count_dic[molid] && tagName.indexOf('tag') == 0) { //防止内部拖动出现提示
                    bootAlert('该组件的使用次数已达上限。');
                    return false;
                }
                // 获取模板HTML和默认数据, 将其实例化
                var html = get_mol(molid);
                var defaultVals = mol_val_dic['val-' + molid] || gotGoods.slice(0, 8);
                if (molid == 'slideBox') {
                    html = html.replace('{imgsrc}', defaultVals[0]['imgsrc']).replace('{href}', defaultVals[0]['href']);
                } else if(molid.lastIndexOf('GoodList')>-1){
                    html=html.replace('{content}',goods_list_instance(defaultVals, molid.indexOf('single')==0?1:2));
                } else {
                    for (var k in defaultVals) {
                        html = html.replace('{' + k + '}', defaultVals[k]);
                    }
                }
                // 转为节点, 加上按钮, 插入
                var div = $(html)[0]; //因为是根据tag上传来的molid来取的html,因此并不支持内部拖动
                div.innerHTML += moveBtnHtml;
                // 判断参照元素是否存在,不存在就直接插入最后面
                target ? this.insertBefore(div, target) : this.appendChild(div);
                //更新计数器, 去除插入位置蓝顶标记, 重置右侧编辑区
                mol_count_dic[div.getAttribute('molid')]--;
                $('.mol-wrap').removeClass('blue-top');
                ctrlWrap[0].innerHTML = '';
                //把默认数据先挂上去
                $(div).data('native',defaultVals);
            })
                .on('dragenter', function (e) {
                    //console.info('dragenter!');
                })
                .on('dragover', function (e) {
                    // 拖入区域,准备放置...
                    event.preventDefault();
                    // 先清空上次的标记
                    $('.mol-wrap').removeClass('assertive blue-top');
                    //鼠标所处的已有模块打上蓝顶标记,表示松手即放置其上
                    $(event.target).parents('.mol-wrap').eq(0).addClass('blue-top');
                });

            // 拖拽方法(被拖动控件上定义的部分)
            $('.mol-tag').on('selectstart', function (e) {
                return false;
            })
                .on('dragstart', function (e) {
                    // 绑定传入值
                    event.dataTransfer.setData("Text", this.id);
                })
                .on('dragend', function (e) {
                    // 取消默认事件
                    event.preventDefault();
                    // 默认先隐藏编辑按钮
                    submitResetWrap.hide();
                })
                .on('mouseover', function () {
                    molTip.html('<div class="arrow"></div>');
                    // 显示提示框,设置内容
                    var the = this;
                    molTip.show().css('opacity', 0).animate({
                        top: $(the).offset().top-80,
                        opacity: 0.9
                    },'fast', function () {
                        $(this).html(function (i, old) {
                            return '<div class="arrow"></div>' + mol_tip_dic[this.id.replace('tag-', '')]
                        }.bind(the));
                    });
                })
                .on('mouseleave', function () {
                    // 隐藏提示框,清空内容
                    molTip.html('<div class="arrow"></div>').hide()
                })
                .on('mousedown', function () {
                    // 隐藏提示框,清空内容
                    molTip.fadeOut(300, function () {
                        $(this).html('<div class="arrow"></div>')
                    });
                })

            // 上下移动,删除,和点击开始编辑模块数据( 模块交互操作的关键方法! )
            showMobile.on('selectstart', '.go-down,.go-up,.go-recycle', function (e) {
                return false;
            })
                .on('click', '.go-recycle', function (e) {
                    event.preventDefault();
                    $(this.parentNode).remove();
                    setTimeout(function(){
                        $('#ctrl-wrap').empty();
                        submitResetWrap.hide();
                    },100)
                    mol_count_dic[this.parentNode.getAttribute('molid')] += 1;
                })
                .on('click', '.go-down', function (e) {
                    event.preventDefault();
                    var parent = this.parentNode;
                    var next = parent.nextSibling;
                    if (next == null) {
                        return false;
                    }
                    var grand = $('#show-mobile')[0];
                    var prev = parent.previousSibling;
                    var next2 = next.cloneNode(true);
                    grand.removeChild(next);
                    grand.insertBefore(next2, parent);
                })
                .on('click', '.go-up', function (e) {
                    event.preventDefault();
                    var parent = $(this).parent();
                    var prev = parent.prev();
                    if (prev.length < 1) {
                        return false;
                    }
                    var prev2 = prev.clone();
                    var next = parent.next();
                    prev.remove();
                    next.length ? next.before(prev2) : $('#show-mobile').append(prev2);
                })
                .on('mouseover', '.mol-wrap', function (e) {
                    $(this).find('.go-down,.go-up,.go-recycle').show();
                })
                .on('mouseleave', '.mol-wrap', function (e) {
                    $(this).find('.go-down,.go-up,.go-recycle').hide();
                })
                // 选中块开始编辑(自定义模块数据的关键依赖)----------------------------------------------------------------------------------------------------------------
                .on('click', '.mol-wrap', function (e) {
                    checkedGoods=[];

                    var molid = this.getAttribute('molid');
                    var obj = $(this).data('native') || mol_val_dic['val-' + molid];
                    var key;

                    // 高亮当前选中块
                    $('.mol-wrap').removeClass('assertive');
                    $(this).addClass('assertive');
                    // 记录下当前编辑节点的索引
                    $('#ctrl-wrap').data('index', $(this).index() - 3)
                        //载入节点对应的编辑模块
                        .html(get_mol_ctrl(molid));
                    // mol-ctrl-wrap有了
                    molCtrlWrap=$('.mol-ctrl-wrap');
                    // 编辑模块再载入节点当前数据
                    if (molid == 'slideBox') {
                        var arr = obj;
                        molCtrlWrap.find('[mapid^=imgsrc]').each(function (i, val) {
                            arr[i] ? this.value = arr[i].imgsrc || '' : void(0);
                        })
                        molCtrlWrap.find('[mapid^=href]').each(function (i, val) {
                            arr[i] ? this.value = arr[i].href || '' : void(0);
                        })
                    }else if(molid.indexOf('GoodList')>-1){
                        // 正式列表对应当前宝贝列表的数据
                        checkedGoods=$(this).data('native').slice(0);
                        // 再显示到编辑区列表
                        fillCtrlWrapGoodsList();
                    } else {
                        molCtrlWrap.find('input,textarea').each(function () {
                            key = this.getAttribute('mapid') || 'none';
                            if (obj && obj[key])
                                this.value = (obj[key] + '').replace(/\<br\>/gm, '\n');
                        });
                    }
                    (molid.indexOf('GoodList')>-1 || molid.indexOf('ategory')>-1 || mol_val_dic['val-'+molid]) ? submitResetWrap.show() : submitResetWrap.hide() ;
                })


            // 右侧编辑确定后处理数据( 自定义数据的关键方法! )--------------------------------------------------------------------------------------------------------------
            ctrlArea
                // 编辑完成
                .on('click', '.submit', function (e) {
                    var molid = $('.mol-ctrl-wrap').attr('ctrlid'),
                        html = get_mol(molid),
                        key,
                        obj = {},
                        molobj = showMobile.find('.mol-wrap').eq(+$('#ctrl-wrap').data('index'));
                    //获取并用键值对保存编辑区数据
                    if (molid.indexOf('GoodList')>-1){
                        html=html.replace('{content}',goods_list_instance(checkedGoods, molid.indexOf('single')==0?1:2));
                        obj=checkedGoods;
                    } else if (molid == 'slideBox') {
                        obj = [];
                        $('.mol-ctrl-wrap').find('[mapid^=imgsrc]').each(function (i, val) {
                            if(this.value.length>4){
                                obj[i] = {imgsrc: this.value};
                            }else{
                                obj[i] ={};
                            }
                        })
                        .end().find('[mapid^=href]').each(function (i, val) {
                            (typeof(obj[i]) == 'object' && obj[i].imgsrc) ? (obj[i].href = this.value || '') : void(0);
                        });
                        //实例化HTML内容
                        html = html.replace('{imgsrc}', obj[0]['imgsrc']).replace('{href}', obj[0]['href']);
                    } else {
                        $(this.parentNode).prev().find('input,textarea').each(function () {
                            key = this.getAttribute('mapid') || 'none';
                            obj[key] = this.value.replace(/\n/gm, '<br>')||'';
                        });
                        //实例化HTML内容
                        for (var k in obj) {
                            html = html.replace('{' + k + '}', obj[k]);
                        }
                    }
                    //保存原始数据
                    molobj.data('native', obj);
                    //别忘了加上按钮
                    molobj.html($(html)[0].innerHTML + moveBtnHtml);
                    //提示完成
                    bootAlert('编辑完成!')
                    // 关闭编辑区
                    ctrlWrap.empty(),submitResetWrap.hide();
                })
                // 重置编辑区数据
                .on('click', '.reset', function (e) {
                    var molCtrlWrap=$('.mol-ctrl-wrap');
                    var molid = molCtrlWrap.attr('ctrlid');
                    if (molid.indexOf('GoodList')>-1){
                        $('.ctrlArea-goodsChecked-wrap').empty();
                        checkedGoods=[];
                    }
                    molCtrlWrap.find('[type=text],[type=number],textarea,[type=file],[type=color]').each(function () {
                        this.value = '';
                    })
                    molCtrlWrap.find('p.uploaded-info,p.upload-ok-tip').remove();
                    //$('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index')).data('native',null)
                })


            /*
             *  宝贝列表 选择宝贝
             *  先打开模态页面,列出供选
             *  然后点击一个选中一个,加入checkedGoods数组-------------------------------------------------------------------------------------------------------------------
             *  最后点确定,直接应用到选中的宝贝列表上
             */

            // 选择宝贝按钮,弹出模态窗
            ctrlWrap.on('click','.show-goods-list',function(){
                // 传递给宝贝选择页面,告诉确定按钮, 选中的宝贝应用于singleList还是doubleList模块
                var ctrlid=$(this).parent().attr('ctrlid');
                goodsCheckedDone.data('for-ctrlid',ctrlid);
                // 装载新内容
                fillGoods();
                // 临时选中列表清空
                tempCheckedGoods=[];
                // 装载当前宝贝列表的内容
                addCheckedGoods(checkedGoods,false,true);
                //临时置为当前(经过上面2步,已经同步了)
                //tempCheckedGoods=checkedGoods.slice();
            })


            // 单个选中-------------------------------------------------------------------------------------------------------------------------------------------------------
            $('#goods-list').on('click','.good-cell',function(){
                var goodInfo=$(this).data('good-info');

                var checkedIds=tempCheckedGoods.map(function(g){
                    return g.goods_id || g.goodsId ;
                })

                var isChecked=checkedIds.indexOf(+(goodInfo['goods_id']||goodInfo['goodsId']))>-1;

                addCheckedGoods([goodInfo],isChecked,true);
            })


            // 单个删除
            goodsCheckedList.on('click', 'i', function(eve){delSingleGoodChecked.bind(this)(eve,true)}); //方法带入事件中时,注意this绑定和默认参数占位

            // 编辑区单个删除
            ctrlWrap.on('click', '.ctrlArea-goodsChecked-wrap i', delSingleGoodChecked);

            //window.test=function(){console.table(checkedGoods);console.log(JSON.stringify(checkedGoods))}

            // 选择宝贝完毕,实例化数据
            goodsCheckedDone.click(function(){
                var the=this;
                // 找到要应用的元素
                var molobj = $('#show-mobile').find('.mol-wrap').eq(+$('#ctrl-wrap').data('index'));
                var count = ($(the).data('for-ctrlid') == 'doubleGoodList') ? 2 : 1;
                // 更新宝贝列表内容
                molobj.html(goods_list_instance(checkedGoods, count) + moveBtnHtml);
                // 临时列表转正
                checkedGoods=tempCheckedGoods.slice();
                // 同时保存原始数据
                molobj.data('native', checkedGoods);
                goods_list_cls();
                ctrlArea.find('.submit').trigger('click');
                bootAlert('宝贝挑选成功',900);
            })

            // 清空选择的宝贝
            goodsListCls.click(goods_list_cls);

            // 关闭模态窗
            $('#goods-modal .close').click(function(){
                goods_list_cls(true);
            });

            // 宝贝搜索
            $('#goods-search-btn').click(function () {
                fillGoods(1);
            });

            //下一页
            $('.go-next').click(function () {
                var nowPageNum = +$('#now-pagenum').text();
                if (nowPageNum == $('#total-pagenum').text()) {
                    return false;
                }
                fillGoods(nowPageNum + 1);
            })

            //上一页
            $('.go-prev').click(function () {
                var nowPageNum = +$('#now-pagenum').text();
                if (nowPageNum < 2) {
                    return false;
                }
                fillGoods(nowPageNum - 1);
            })

            //第一页
            $('.go-first').click(function () {
                var nowPageNum = +$('#now-pagenum').text();
                if (nowPageNum == 1 || nowPageNum == 0) {
                    return false;
                }
                fillGoods(1);
            })

            //最后一页
            $('.go-last').click(function () {
                var nowPageNum = +$('#now-pagenum').text();
                var totalCount = +$('#total-pagenum').text();
                if (nowPageNum == totalCount) {
                    return false;
                }
                fillGoods(totalCount);
            })

            //图片上传
            $(document).on('submit', '.img-up-form', uploadImg);
            //$(document).on('change', '[type=file]', uploadImg);
            $('#crop-up-img').on('change', uploadImgCrop);

            // 查看次数限制现状
            $('#btn-count').click(function () {
                console.info(mol_count_dic);
            });
			
            // 保存方法(统计当前模块排列组合的信息及其绑定的数据,此函数为操作后的最终步骤. 数据最后直接提供给api,保存成功即PC流程完成)
            $('.btn-save').click(function () {
                var str='确定发布? \n\n将把店铺首页更新为当前页面的布置.'
                bootConfirm(str,function(){
                    var wrap=makeJson();
                    var jsonstr = wrap.content;
                    var shopId = $('#shopId-inp').val();
                    var shopName = $('#shopName-inp').val();
                    $.post(decorateSaveAction, {shopId: shopId||'',shopName: shopName||'' , content: jsonstr , goodsIds:wrap.goods_id_arr.join(',')}).always(function (res) {
                        console.info(res);
                        if(res.result){
                            localStorage.hdDecorateTempSaveData='';
                            bootAlert('<b>发布成功!</b><a href="#" target="_blank">&nbsp;&nbsp;&nbsp;立刻前往我的店铺查看效果</a>'.replace('#',$('#goto-shop')[0].href),1500)
                        }else if(res.resul.msg='session过期'){
                            //暂存一下
                            localStorage.hdDecotateTempSaveData=jsonstr;
                            //提示刷新
                            bootAlert('登陆状态过期,请刷新重新登陆!')
                        }
                    })
                })

            });

            // 暂存
            $('.temp-save').click(function(){
                var jsonstr = makeJson().content;
                localStorage.hdDecorateTempSaveData=jsonstr;
                bootAlert('暂存成功,下次本机打开可以继续编辑.',600)
            })

            /*
            $(function(){
                localStorage.hdDecorateTempSaveData && init_current(JSON.parse(localStorage.hdDecorateTempSaveData)) && bootAlert('载入成功!&nbsp;&nbsp;&nbsp;已经恢复上次暂存的布置,&nbsp;亲可以继续编辑.',1200);
            });
            */

            // 装载目前店铺的装修数据
            window.init_current=function(data){
                //更新装修数据中宝贝信息
                var updated;
                //var deleted=[];
                data.forEach(function(mol){
                    updated=[];
                    if(mol.name.indexOf('GoodList')>-1){
                        mol.data.forEach(function(g){
                            if(indexCheckedGoodsDic[ g.goods_id || g.goodsId]){
                                updated.push(indexCheckedGoodsDic[ g.goods_id || g.goodsId]) ;
                            }else{
                                //(deleted.indexOf(g.goods_id || g.goodsId)<0) && deleted.push(g.goods_id || g.goodsId);
                            }
                        });
                        mol.data=updated;
                    }
                })
                autoAppendNodes(data);
                //deleted.length && bootAlert(deleted.length +'个宝贝已经失效')
            }
            window.bootAlert=bootAlert;
        }
})(window.jQuery)

    
    
    
    
    
    
