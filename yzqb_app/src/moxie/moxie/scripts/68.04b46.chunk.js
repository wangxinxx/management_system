webpackJsonp([68],{223:function(c,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=[{province:"北京",city:[{country:"北京","编码":"101010100"},{country:"朝阳","编码":"101010300"},{country:"顺义","编码":"101010400"},{country:"怀柔","编码":"101010500"},{country:"通州","编码":"101010600"},{country:"昌平","编码":"101010700"},{country:"延庆","编码":"101010800"},{country:"丰台","编码":"101010900"},{country:"石景山","编码":"101011000"},{country:"大兴","编码":"101011100"},{country:"房山","编码":"101011200"},{country:"密云","编码":"101011300"},{country:"门头沟","编码":"101011400"},{country:"平谷","编码":"101011500"},{country:"八达岭","编码":"101011600"},{country:"佛爷顶","编码":"101011700"},{country:"汤河口","编码":"101011800"},{country:"密云上甸子","编码":"101011900"},{country:"斋堂","编码":"101012000"},{country:"霞云岭","编码":"101012100"},{country:"北京城区","编码":"101012200"},{country:"海淀","编码":"101010200"}]},{province:"天津市",city:[{country:"天津","编码":"101030100"},{country:"宝坻","编码":"101030300"},{country:"东丽","编码":"101030400"},{country:"西青","编码":"101030500"},{country:"北辰","编码":"101030600"},{country:"蓟县","编码":"101031400"},{country:"汉沽","编码":"101030800"},{country:"静海","编码":"101030900"},{country:"津南","编码":"101031000"},{country:"塘沽","编码":"101031100"},{country:"大港","编码":"101031200"},{country:"武清","编码":"101030200"},{country:"宁河","编码":"101030700"}]},{province:"上海",city:[{country:"上海","编码":"101020100"},{country:"宝山","编码":"101020300"},{country:"嘉定","编码":"101020500"},{country:"南汇","编码":"101020600"},{country:"浦东","编码":"101021300"},{country:"青浦","编码":"101020800"},{country:"松江","编码":"101020900"},{country:"奉贤","编码":"101021000"},{country:"崇明","编码":"101021100"},{country:"徐家汇","编码":"101021200"},{country:"闵行","编码":"101020200"},{country:"金山","编码":"101020700"}]},{province:"河北",city:[{country:"石家庄","编码":"101090101"},{country:"张家口","编码":"101090301"},{country:"承德","编码":"101090402"},{country:"唐山","编码":"101090501"},{country:"秦皇岛","编码":"101091101"},{country:"沧州","编码":"101090701"},{country:"衡水","编码":"101090801"},{country:"邢台","编码":"101090901"},{country:"邯郸","编码":"101091001"},{country:"保定","编码":"101090201"},{country:"廊坊","编码":"101090601"}]},{province:"河南",city:[{country:"郑州","编码":"101180101"},{country:"新乡","编码":"101180301"},{country:"许昌","编码":"101180401"},{country:"平顶山","编码":"101180501"},{country:"信阳","编码":"101180601"},{country:"南阳","编码":"101180701"},{country:"开封","编码":"101180801"},{country:"洛阳","编码":"101180901"},{country:"商丘","编码":"101181001"},{country:"焦作","编码":"101181101"},{country:"鹤壁","编码":"101181201"},{country:"濮阳","编码":"101181301"},{country:"周口","编码":"101181401"},{country:"漯河","编码":"101181501"},{country:"驻马店","编码":"101181601"},{country:"三门峡","编码":"101181701"},{country:"济源","编码":"101181801"},{country:"安阳","编码":"101180201"}]},{province:"安徽",city:[{country:"合肥","编码":"101220101"},{country:"芜湖","编码":"101220301"},{country:"淮南","编码":"101220401"},{country:"马鞍山","编码":"101220501"},{country:"安庆","编码":"101220601"},{country:"宿州","编码":"101220701"},{country:"阜阳","编码":"101220801"},{country:"亳州","编码":"101220901"},{country:"黄山","编码":"101221001"},{country:"滁州","编码":"101221101"},{country:"淮北","编码":"101221201"},{country:"铜陵","编码":"101221301"},{country:"宣城","编码":"101221401"},{country:"六安","编码":"101221501"},{country:"巢湖","编码":"101221601"},{country:"池州","编码":"101221701"},{country:"蚌埠","编码":"101220201"}]},{province:"浙江",city:[{country:"杭州","编码":"101210101"},{country:"舟山","编码":"101211101"},{country:"湖州","编码":"101210201"},{country:"嘉兴","编码":"101210301"},{country:"金华","编码":"101210901"},{country:"绍兴","编码":"101210501"},{country:"台州","编码":"101210601"},{country:"温州","编码":"101210701"},{country:"丽水","编码":"101210801"},{country:"衢州","编码":"101211001"},{country:"宁波","编码":"101210401"}]},{province:"重庆",city:[{country:"重庆","编码":"101040100"},{country:"合川","编码":"101040300"},{country:"南川","编码":"101040400"},{country:"江津","编码":"101040500"},{country:"万盛","编码":"101040600"},{country:"渝北","编码":"101040700"},{country:"北碚","编码":"101040800"},{country:"巴南","编码":"101040900"},{country:"长寿","编码":"101041000"},{country:"黔江","编码":"101041100"},{country:"万州天城","编码":"101041200"},{country:"万州龙宝","编码":"101041300"},{country:"涪陵","编码":"101041400"},{country:"开县","编码":"101041500"},{country:"城口","编码":"101041600"},{country:"云阳","编码":"101041700"},{country:"巫溪","编码":"101041800"},{country:"奉节","编码":"101041900"},{country:"巫山","编码":"101042000"},{country:"潼南","编码":"101042100"},{country:"垫江","编码":"101042200"},{country:"梁平","编码":"101042300"},{country:"忠县","编码":"101042400"},{country:"石柱","编码":"101042500"},{country:"大足","编码":"101042600"},{country:"荣昌","编码":"101042700"},{country:"铜梁","编码":"101042800"},{country:"璧山","编码":"101042900"},{country:"丰都","编码":"101043000"},{country:"武隆","编码":"101043100"},{country:"彭水","编码":"101043200"},{country:"綦江","编码":"101043300"},{country:"酉阳","编码":"101043400"},{country:"秀山","编码":"101043600"},{country:"沙坪坝","编码":"101043700"},{country:"永川","编码":"101040200"}]},{province:"福建",city:[{country:"福州","编码":"101230101"},{country:"泉州","编码":"101230501"},{country:"漳州","编码":"101230601"},{country:"龙岩","编码":"101230701"},{country:"晋江","编码":"101230509"},{country:"南平","编码":"101230901"},{country:"厦门","编码":"101230201"},{country:"宁德","编码":"101230301"},{country:"莆田","编码":"101230401"},{country:"三明","编码":"101230801"}]},{province:"甘肃",city:[{country:"兰州","编码":"101160101"},{country:"平凉","编码":"101160301"},{country:"庆阳","编码":"101160401"},{country:"武威","编码":"101160501"},{country:"金昌","编码":"101160601"},{country:"嘉峪关","编码":"101161401"},{country:"酒泉","编码":"101160801"},{country:"天水","编码":"101160901"},{country:"武都","编码":"101161001"},{country:"临夏","编码":"101161101"},{country:"合作","编码":"101161201"},{country:"白银","编码":"101161301"},{country:"定西","编码":"101160201"},{country:"张掖","编码":"101160701"}]},{province:"广东",city:[{country:"广州","编码":"101280101"},{country:"惠州","编码":"101280301"},{country:"梅州","编码":"101280401"},{country:"汕头","编码":"101280501"},{country:"深圳","编码":"101280601"},{country:"珠海","编码":"101280701"},{country:"佛山","编码":"101280800"},{country:"肇庆","编码":"101280901"},{country:"湛江","编码":"101281001"},{country:"江门","编码":"101281101"},{country:"河源","编码":"101281201"},{country:"清远","编码":"101281301"},{country:"云浮","编码":"101281401"},{country:"潮州","编码":"101281501"},{country:"东莞","编码":"101281601"},{country:"中山","编码":"101281701"},{country:"阳江","编码":"101281801"},{country:"揭阳","编码":"101281901"},{country:"茂名","编码":"101282001"},{country:"汕尾","编码":"101282101"},{country:"韶关","编码":"101280201"}]},{province:"广西",city:[{country:"南宁","编码":"101300101"},{country:"柳州","编码":"101300301"},{country:"来宾","编码":"101300401"},{country:"桂林","编码":"101300501"},{country:"梧州","编码":"101300601"},{country:"防城港","编码":"101301401"},{country:"贵港","编码":"101300801"},{country:"玉林","编码":"101300901"},{country:"百色","编码":"101301001"},{country:"钦州","编码":"101301101"},{country:"河池","编码":"101301201"},{country:"北海","编码":"101301301"},{country:"崇左","编码":"101300201"},{country:"贺州","编码":"101300701"}]},{province:"贵州",city:[{country:"贵阳","编码":"101260101"},{country:"安顺","编码":"101260301"},{country:"都匀","编码":"101260401"},{country:"兴义","编码":"101260906"},{country:"铜仁","编码":"101260601"},{country:"毕节","编码":"101260701"},{country:"六盘水","编码":"101260801"},{country:"遵义","编码":"101260201"},{country:"凯里","编码":"101260501"}]},{province:"云南",city:[{country:"昆明","编码":"101290101"},{country:"红河","编码":"101290301"},{country:"文山","编码":"101290601"},{country:"玉溪","编码":"101290701"},{country:"楚雄","编码":"101290801"},{country:"普洱","编码":"101290901"},{country:"昭通","编码":"101291001"},{country:"临沧","编码":"101291101"},{country:"怒江","编码":"101291201"},{country:"香格里拉","编码":"101291301"},{country:"丽江","编码":"101291401"},{country:"德宏","编码":"101291501"},{country:"景洪","编码":"101291601"},{country:"大理","编码":"101290201"},{country:"曲靖","编码":"101290401"},{country:"保山","编码":"101290501"}]},{province:"内蒙古",city:[{country:"呼和浩特","编码":"101080101"},{country:"乌海","编码":"101080301"},{country:"集宁","编码":"101080401"},{country:"通辽","编码":"101080501"},{country:"阿拉善左旗","编码":"101081201"},{country:"鄂尔多斯","编码":"101080701"},{country:"临河","编码":"101080801"},{country:"锡林浩特","编码":"101080901"},{country:"呼伦贝尔","编码":"101081000"},{country:"乌兰浩特","编码":"101081101"},{country:"包头","编码":"101080201"},{country:"赤峰","编码":"101080601"}]},{province:"江西",city:[{country:"南昌","编码":"101240101"},{country:"上饶","编码":"101240301"},{country:"抚州","编码":"101240401"},{country:"宜春","编码":"101240501"},{country:"鹰潭","编码":"101241101"},{country:"赣州","编码":"101240701"},{country:"景德镇","编码":"101240801"},{country:"萍乡","编码":"101240901"},{country:"新余","编码":"101241001"},{country:"九江","编码":"101240201"},{country:"吉安","编码":"101240601"}]},{province:"湖北",city:[{country:"武汉","编码":"101200101"},{country:"黄冈","编码":"101200501"},{country:"荆州","编码":"101200801"},{country:"宜昌","编码":"101200901"},{country:"恩施","编码":"101201001"},{country:"十堰","编码":"101201101"},{country:"神农架","编码":"101201201"},{country:"随州","编码":"101201301"},{country:"荆门","编码":"101201401"},{country:"天门","编码":"101201501"},{country:"仙桃","编码":"101201601"},{country:"潜江","编码":"101201701"},{country:"襄樊","编码":"101200201"},{country:"鄂州","编码":"101200301"},{country:"孝感","编码":"101200401"},{country:"黄石","编码":"101200601"},{country:"咸宁","编码":"101200701"}]},{province:"四川",city:[{country:"成都","编码":"101270101"},{country:"自贡","编码":"101270301"},{country:"绵阳","编码":"101270401"},{country:"南充","编码":"101270501"},{country:"达州","编码":"101270601"},{country:"遂宁","编码":"101270701"},{country:"广安","编码":"101270801"},{country:"巴中","编码":"101270901"},{country:"泸州","编码":"101271001"},{country:"宜宾","编码":"101271101"},{country:"内江","编码":"101271201"},{country:"资阳","编码":"101271301"},{country:"乐山","编码":"101271401"},{country:"眉山","编码":"101271501"},{country:"凉山","编码":"101271601"},{country:"雅安","编码":"101271701"},{country:"甘孜","编码":"101271801"},{country:"阿坝","编码":"101271901"},{country:"德阳","编码":"101272001"},{country:"广元","编码":"101272101"},{country:"攀枝花","编码":"101270201"}]},{province:"宁夏",city:[{country:"银川","编码":"101170101"},{country:"中卫","编码":"101170501"},{country:"固原","编码":"101170401"},{country:"石嘴山","编码":"101170201"},{country:"吴忠","编码":"101170301"}]},{province:"青海",city:[{country:"西宁","编码":"101150101"},{country:"黄南","编码":"101150301"},{country:"海北","编码":"101150801"},{country:"果洛","编码":"101150501"},{country:"玉树","编码":"101150601"},{country:"海西","编码":"101150701"},{country:"海东","编码":"101150201"},{country:"海南","编码":"101150401"}]},{province:"山东",city:[{country:"济南","编码":"101120101"},{country:"潍坊","编码":"101120601"},{country:"临沂","编码":"101120901"},{country:"菏泽","编码":"101121001"},{country:"滨州","编码":"101121101"},{country:"东营","编码":"101121201"},{country:"威海","编码":"101121301"},{country:"枣庄","编码":"101121401"},{country:"日照","编码":"101121501"},{country:"莱芜","编码":"101121601"},{country:"聊城","编码":"101121701"},{country:"青岛","编码":"101120201"},{country:"淄博","编码":"101120301"},{country:"德州","编码":"101120401"},{country:"烟台","编码":"101120501"},{country:"济宁","编码":"101120701"},{country:"泰安","编码":"101120801"}]},{province:"陕西",city:[{country:"西安","编码":"101110101"},{country:"延安","编码":"101110300"},{country:"榆林","编码":"101110401"},{country:"铜川","编码":"101111001"},{country:"商洛","编码":"101110601"},{country:"安康","编码":"101110701"},{country:"汉中","编码":"101110801"},{country:"宝鸡","编码":"101110901"},{country:"咸阳","编码":"101110200"},{country:"渭南","编码":"101110501"}]},{province:"山西",city:[{country:"太原","编码":"101100101"},{country:"临汾","编码":"101100701"},{country:"运城","编码":"101100801"},{country:"朔州","编码":"101100901"},{country:"忻州","编码":"101101001"},{country:"长治","编码":"101100501"},{country:"大同","编码":"101100201"},{country:"阳泉","编码":"101100301"},{country:"晋中","编码":"101100401"},{country:"晋城","编码":"101100601"},{country:"吕梁","编码":"101101100"}]},{province:"新疆",city:[{country:"乌鲁木齐","编码":"101130101"},{country:"石河子","编码":"101130301"},{country:"昌吉","编码":"101130401"},{country:"吐鲁番","编码":"101130501"},{country:"库尔勒","编码":"101130601"},{country:"阿拉尔","编码":"101130701"},{country:"阿克苏","编码":"101130801"},{country:"喀什","编码":"101130901"},{country:"伊宁","编码":"101131001"},{country:"塔城","编码":"101131101"},{country:"哈密","编码":"101131201"},{country:"和田","编码":"101131301"},{country:"阿勒泰","编码":"101131401"},{country:"阿图什","编码":"101131501"},{country:"博乐","编码":"101131601"},{country:"克拉玛依","编码":"101130201"}]},{province:"西藏",city:[{country:"拉萨","编码":"101140101"},{country:"山南","编码":"101140301"},{country:"阿里","编码":"101140701"},{country:"昌都","编码":"101140501"},{country:"那曲","编码":"101140601"},{country:"日喀则","编码":"101140201"},{country:"林芝","编码":"101140401"}]},{province:"台湾",city:[{country:"台北县","编码":"101340101"},{country:"高雄","编码":"101340201"},{country:"台中","编码":"101340401"}]},{province:"海南",city:[{country:"海口","编码":"101310101"},{country:"三亚","编码":"101310201"},{country:"东方","编码":"101310202"},{country:"临高","编码":"101310203"},{country:"澄迈","编码":"101310204"},{country:"儋州","编码":"101310205"},{country:"昌江","编码":"101310206"},{country:"白沙","编码":"101310207"},{country:"琼中","编码":"101310208"},{country:"定安","编码":"101310209"},{country:"屯昌","编码":"101310210"},{country:"琼海","编码":"101310211"},{country:"文昌","编码":"101310212"},{country:"保亭","编码":"101310214"},{country:"万宁","编码":"101310215"},{country:"陵水","编码":"101310216"},{country:"西沙","编码":"101310217"},{country:"南沙岛","编码":"101310220"},{country:"乐东","编码":"101310221"},{country:"五指山","编码":"101310222"},{country:"琼山","编码":"101310102"}]},{province:"湖南",city:[{country:"长沙","编码":"101250101"},{country:"株洲","编码":"101250301"},{country:"衡阳","编码":"101250401"},{country:"郴州","编码":"101250501"},{country:"常德","编码":"101250601"},{country:"益阳","编码":"101250700"},{country:"娄底","编码":"101250801"},{country:"邵阳","编码":"101250901"},{country:"岳阳","编码":"101251001"},{country:"张家界","编码":"101251101"},{country:"怀化","编码":"101251201"},{country:"黔阳","编码":"101251301"},{country:"永州","编码":"101251401"},{country:"吉首","编码":"101251501"},{country:"湘潭","编码":"101250201"}]},{province:"江苏",city:[{country:"南京","编码":"101190101"},{country:"镇江","编码":"101190301"},{country:"苏州","编码":"101190401"},{country:"南通","编码":"101190501"},{country:"扬州","编码":"101190601"},{country:"宿迁","编码":"101191301"},{country:"徐州","编码":"101190801"},{country:"淮安","编码":"101190901"},{country:"连云港","编码":"101191001"},{country:"常州","编码":"101191101"},{country:"泰州","编码":"101191201"},{country:"无锡","编码":"101190201"},{country:"盐城","编码":"101190701"}]},{province:"黑龙江",city:[{country:"哈尔滨","编码":"101050101"},{country:"牡丹江","编码":"101050301"},{country:"佳木斯","编码":"101050401"},{country:"绥化","编码":"101050501"},{country:"黑河","编码":"101050601"},{country:"双鸭山","编码":"101051301"},{country:"伊春","编码":"101050801"},{country:"大庆","编码":"101050901"},{country:"七台河","编码":"101051002"},{country:"鸡西","编码":"101051101"},{country:"鹤岗","编码":"101051201"},{country:"齐齐哈尔","编码":"101050201"},{country:"大兴安岭","编码":"101050701"}]},{province:"吉林",city:[{country:"长春","编码":"101060101"},{country:"延吉","编码":"101060301"},{country:"四平","编码":"101060401"},{country:"白山","编码":"101060901"},{country:"白城","编码":"101060601"},{country:"辽源","编码":"101060701"},{country:"松原","编码":"101060801"},{country:"吉林","编码":"101060201"},{country:"通化","编码":"101060501"}]},{province:"辽宁",city:[{country:"沈阳","编码":"101070101"},{country:"鞍山","编码":"101070301"},{country:"抚顺","编码":"101070401"},{country:"本溪","编码":"101070501"},{country:"丹东","编码":"101070601"},{country:"葫芦岛","编码":"101071401"},{country:"营口","编码":"101070801"},{country:"阜新","编码":"101070901"},{country:"辽阳","编码":"101071001"},{country:"铁岭","编码":"101071101"},{country:"朝阳","编码":"101071201"},{country:"盘锦","编码":"101071301"},{country:"大连","编码":"101070201"},{country:"锦州","编码":"101070701"}]}];t.citylist=c}).call(this)}finally{}}});