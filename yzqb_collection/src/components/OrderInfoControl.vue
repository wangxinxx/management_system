/**
* Created by alan on 17-6-1.
*/
<template>
  <section class="orderBox">
    <!--订单详情 -->
    <el-row>
      <h1 class="one-title">订单详情</h1>
      <!-- <h1><span>催收标签:{{cuishouTag || ''}}</span></h1> -->
      <el-col :span="15" class="grid-content">
        <div><span>催收标签:</span><span><el-tag type="danger">{{cuishouTag || ''}}</el-tag></span></div>
        <div><span>订单状态:</span><span>{{getOrderType(orderDetail.status)}}</span></div>
      </el-col>
      <el-col :span="9" class="grid-content">
        <div><span>订单编号:</span><span>{{orderDetail.uuid}}</span></div>
        <div><span>下单时间:</span><span>{{formatUnixTime(orderDetail.createTime)}}</span></div>
      </el-col>
    </el-row>
    <div class="divid-line"></div>

    <!--借款信息-->
    <template>
      <el-row>
        <h1 class="one-title">借款信息 </h1>
        <el-col :span="8" class="grid-content">
          <span>借款金额:</span><span>{{ orderDetail.amountApply }}</span>
        </el-col>
        <el-col :span="8" class="grid-content">
          <span>借款期限:</span><span>{{ orderDetail.borrowingTerm }} 天</span>
        </el-col>
      </el-row>
      <div>
        <el-table :data="loanInfoData" highlight-current-row v-loading="gridLoading" class="loanDetail">
          <el-table-column label="应还款日">
            <template scope="scope">
              <span>{{formatUnixTime(scope.row.refundTime)}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="totalRepayment" label="应还款总金额(元)"></el-table-column>
          <el-table-column prop="amountApply" label="本金(元)"></el-table-column>
          <el-table-column prop="interest" label="利息"></el-table-column>
          <el-table-column label="审核服务费">
            <template scope="scope">
              <span>{{(parseFloat(scope.row.reviewFee).toFixed(2))}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="infoFee" label="征信服务费"></el-table-column>
          <el-table-column prop="accountFee" label="账户管理费"></el-table-column>
          <el-table-column prop="overdueManageFee" label="逾期账户管理费" ></el-table-column>
          <el-table-column prop="overdueLateFee" label="逾期账户滞纳金"></el-table-column>
        </el-table>
      </div>
      <div class="divid-line"></div>
    </template>

    <template>
      <!-- 订单备注 -->
      <el-row>
        <h1 class="one-title">订单备注</h1>
        <div style="margin-bottom: 10px"></div>
        <el-table :data="orderRemarkList" style="width:100%;" v-loading="orderRemarkLoading" max-height="200">
          <el-table-column type="index" label="序号" width="100">
          </el-table-column>
          <el-table-column prop="createTime" label="添加时间" width="220">
          <template scope="scope">{{formatUnixTime(scope.row.createTime)}}</template>
          </el-table-column>
        <el-table-column prop="recordUserName" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="contactTag" label="关系" width="100">
          <template slot-scope="scope">{{getContactTag(scope.row.contactTag)}}</template>
        </el-table-column>
        <el-table-column prop="recordUserPhone" label="手机号" width="200">
        </el-table-column>
           <el-table-column prop="remark" label="备注">
          </el-table-column>
           <el-table-column prop="orderTag" label="标签" width="100">
           <template scope="scope">{{getOrderTag(scope.row.orderTag)}}</template>
          </el-table-column>
           <el-table-column prop="collecterName" label="催收人员" width="120">
          </el-table-column>
           <el-table-column prop="alertTime" label="下次提醒时间" width="200">
            <template scope="scope">{{formatUnixTime(scope.row.alertTime)}}</template>
          </el-table-column>
        </el-table>
      </el-row>
      <div class="divid-line"></div>

      <!-- 添加备注 -->
      <el-row>
        <h1 class="one-title">添加订单标签及备注</h1>
      <el-form :inline="true" :model="tagForm" :rule="addRemarkRule" label-width="100px">
        
        <el-form-item label="手机号" prop="recordUserPhone">
          <el-input v-model="tagForm.recordUserPhone" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="recordUserName"  label-width="100px">
          <el-input v-model="tagForm.recordUserName" maxlength="10" style="display:inline-block;width:150px;"></el-input><span>(非必填)</span>
        </el-form-item>
      </el-form>
        <el-form :model="addRemarkForm" :rule="addRemarkRule" ref="addRemarkForm" label-width="100px">
          <el-form-item label="填写备注" prop="remark">
            <el-input type="textarea" v-model="addRemarkForm.remark" :maxlength="300" :rows="5"></el-input>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="tagForm" :rule="addRemarkRule" label-width="100px" ref="addRemarkForm">
          <el-form-item label="选择标签" prop="remark">
            <el-select v-model="tagForm.orderTag" placeholder="请选择" clearable>
              <el-option v-for="item in tagList" :label="item.name" :key="item.code" :value="item.code"></el-option>
            </el-select>
          </el-form-item><br>
          <el-form-item label="添加提醒时间" prop="remindTime">
               <el-date-picker v-model="tagForm.remindDate" type="date" placeholder="请选择日期" :picker-options="pickerOptions"></el-date-picker>
                 <el-time-select placeholder="请选择时间" v-model="tagForm.remindTime" :picker-options="pickerTimeOptions"></el-time-select>
                 （非必填）
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveTagForm" :loading="tagFormLoading">打个标签</el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <div class="divid-line"></div>
    </template>

    <!--客户信息-->
    <template>
      <el-row>
        <h1 class="one-title">客户信息 <span class="subtitle"> (下单时)</span></h1>
        <el-col :span="5" class="grid-content">
          <div><span>客户姓名:</span><span>{{ customerInfo.realName }}</span></div>
          <div><span>客户性别:</span><span>{{ getSex(customerInfo.sex)}}</span></div>
          <div><span>社交账号:</span><span>{{ idAddressInfo.socialAccount }}</span></div>
          <div><span>公司电话:</span><span>{{idAddressInfo.companyPhone}}</span></div>
        </el-col>
        <el-col :span="7" class="grid-content">
          <div><span>身份证号:</span><span>{{ customerInfo.idCardNo }}</span></div>
          <div><span>手机号:</span><span>{{ customerInfo.mobileNumber }}</span></div>
          <div><span>公司名称:</span><span>{{ idAddressInfo.companyName }}</span></div>
        </el-col>
        <el-col :span="12" class="grid-content">
          <div><span>现居住地址:</span><span>{{ idAddressInfo.inhabit }} {{ idAddressInfo.detailed }}</span></div>
          <div><span>下单位置:</span><span>{{ idAddressInfo.actualInhabit}}</span></div>
          <div><span>公司地址:</span><span>{{ idAddressInfo.companyAdress}} {{idAddressInfo.companyDetailAdress }}</span></div>
        </el-col>
      </el-row>
      <div class="divid-line"></div>
    </template>

    <!--联系人信息-->
    <div>
      <el-row>
        <h1 class="one-title">联系人信息
          <el-badge :value="totalLinkMan" v-if="isshow">
            <el-button type="primary" size="small" @click="addressBook" >通讯录信息</el-button>
            <el-dialog title="通讯录信息" v-model="dialogTableVisible">
              <el-table :data="linkData" v-loading="linkLoading" height="260" size="large">
                <el-table-column property="name" label="姓名"></el-table-column>
                <el-table-column property="mobile" label="手机号"></el-table-column>
                <el-table-column property="flag" label="标签">
                  <template scope="scope">
                    <span>{{getFlag(scope.row.flag)}}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-dialog>
          </el-badge>
          <el-button style="margin-left: 20px" :disabled="isTrueMXCall" type="primary" size="small" @click="moxieCallLog" v-if="isshow">通话记录</el-button>
          <el-dialog v-model="moxieCallLogDialog" title="通话记录" size="large">
            <el-table border :data="moxieCallLogData" v-loading="moxieCallLogLoading" max-height="500">
              <el-table-column property="peer_number" label="电话号码"></el-table-column>
              <el-table-column property="name" label="通讯录名称"></el-table-column>
              <el-table-column property="duration" label="通话时长（秒）"></el-table-column>
              <el-table-column property="time" label="通话时间"></el-table-column>
              <el-table-column property="location" label="通话地点"></el-table-column>
              <el-table-column property="location_type" label="通话类型"></el-table-column>
              <el-table-column property="dial_type" label="呼叫类型">
                <template scope="scope">
                  <span>{{scope.row.dial_type == 'DIALED'?'被叫':'主叫'}}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-dialog>
        </h1>
        <el-col :span="7">
          <span>联系人姓名:</span><span>{{ decodeURI(linkManInfo.immediateRelativesName || '') }}</span>
        </el-col>
        <el-col :span="9">
          <span>联系人电话:</span><span>{{ linkManInfo.immediateRelativesMobile }}</span>
        </el-col>
        <el-col :span="8">
          <span>与借款人关系:</span><span>{{ linkManInfo.kinship }}</span>
        </el-col>
        <el-col :span="7">
          <span>联系人姓名:</span><span>{{ decodeURI(linkManInfo.secondRelativesName || '') }}</span>
        </el-col>
        <el-col :span="9">
          <span>联系人电话:</span><span>{{ linkManInfo.secondRelativesMobile }}</span>
        </el-col>
        <el-col :span="8">
          <span>与借款人关系:</span><span>{{ linkManInfo.secondKinship }}</span>
        </el-col>
      </el-row>
      <div class="divid-line"></div>
    </div>


    <!--依图识别-->
    <div v-if="seen">
      <el-row>
        <h1 class="one-title">依图识别 <span class="subtitle">（水印VS活体相似度{{ yituRecog.yituVsLivesimilarity }}%，水印VS身份证相似度{{yituRecog.yituVsIdcardsimilarity}}）</span></h1>
        <el-row style="margin-bottom: 20px;">
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
              <ml-photo-box ref='photoBox'></ml-photo-box>
              <div style="padding: 14px;">
                <img :src="yituRecog.IDImgSrc" class="imgCss" @click.stop="checkImgID">
                <span class="yituInfo">身份证正面照</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8" :offset="3">
            <el-card :body-style="{ padding: '0px' }">
              <ml-photo-box ref='photoBox'></ml-photo-box>
              <div style="padding: 14px;">
                <img :src="yituRecog.liveImgSrc" class="imgCss" @click.stop="checkImg">
                <span class="yituInfo">活体识别截图</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-row>
      <div class="divid-line"></div>
    </div>

    <!-- 订单进度 -->
    <template>
      <el-row>
        <h1 class="one-title">订单进度</h1>
        <div style="margin-bottom:20px">
          <span>最近授信时间:</span><span>{{ allAuthInfo.creditLastTime }}</span>
        </div>
        <el-row>
          <el-steps :data="orderProData" :active="active" :align-center="true" finish-status="success">
            <el-step v-for="item in orderProData" :key="item.status" :title="getOrderPro(item.status)">
              <div slot="description">
                {{getOrderPro(item.status)}}<br>{{formatUnixTime(item.createTime)}}</div>
            </el-step>
          </el-steps>
        </el-row>
      </el-row>
      <div class="divid-line"></div>
    </template>

    <!-- 历史订单 -->
    <template>
      <el-row>
        <h1 class="one-title">历史订单</h1>
        <div style="margin-bottom: 10px">
        </div>
        <el-table :data="historyData" v-loading="historyLoading" max-height="300">
          <el-table-column prop="uuid" label="订单编号">
          </el-table-column>
          <el-table-column prop="status" label="订单状态">
            <template scope="scope">
              <span>{{getOrderType(scope.row.status)}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="amountApply" label="申请金额">
          </el-table-column>
          <el-table-column prop="borrowingTerm" label="期限">
          </el-table-column>
        </el-table>
      </el-row>
      <div class="divid-line"></div>
    </template>
  </section>
</template>
<script>
  import mlPhotoBox from '../components/_photoBox.vue'
  import enums from '../common/Enum'
  import DataUtil from '../common/dataUtil'
  import Config from '../common/config'
  export default {
    props:['seen','uuid','userUuid'],
    components: {
      mlPhotoBox
    },
    data () {
      let compareDate = (time) => {
        let _time = time.setDate(time.getDate()+1);
        return time.getTime() <= Date.now();
      }
      return {
        isshow:false,
        pageIndex: 1,
        pageIndexMX: 1,
        pageSize: 10,
        pageSizeMX: 10,
        dataTotal: 0,
        flag: [],
        // seen: false,//区别订单详情
        createUser: '',
        userId: '',
        orderNo: '',
        orderId: '',
        // uuid: '',
        // userUuid:'',
        cuishouTag:'',    //催收标签
        tagList:[{
          name:'完全失联',code:1
        },{
          name:'暂时失联',code:2
        },{
          name:'可联跳票',code:3
        },{
          name:'可联承诺',code:4
        }],
        userHistoryId: '',
        juxinliData: '',//聚信立
        tianxingData: '',//天行
        moxieData: '',//魔蝎
        form: {
          mobileLike: '',
          nameLike: '',
          flag: ''
        },
        dialogTableVisible: false,
        IVSRiskDialog: false,
        IVSLoading: false,
        industryRiskDialog: false,
        callLogDialog: false,
        moxieCallLogDialog: false,
        reportDialog: false,
        moxieReportDialog: false,
        JxlLoading: false,
        TdLoading: false,
        MxLoading: false,
        industryLoading: false,
        formLoadnig: false,
        linkLoading: false,
        reLoadingZM: false,
        reLoadingJXL: false,
        historyLoading: false,
        tongdunLoading: false,
        callLogLoading: false,
        moxieCallLogLoading: false,
        refundingButton:false,
        JXLtoken: '',//
        MXtoken: '',//
        isTrueMX: true,//
        isTrueMXCall:false,//
        isTrueJXL: true,//
        reportLoading: false,
        gridLoading:false,
        totalLinkMan: 0,//通讯录个数
        linkData: [],//通讯录
        dicFlag: [],//通讯录标签
        callLogData: [],//通话记录
        moxieCallLogData: [],//通话记录
        detailInfo: [],//聚信立显示
        reportData1: [],//三方平台数据核对
        reportData2: [],//数据推断分析
        reportData3: [],//数据来源
        collectionContact: [],//联系人数据
        contactRegion: [],//联系人所在地区分析
        basicCheckItems:{
          info1:[],
          infoRisk1:[],
          infoRisk2:[]
        },//信息校验
        callRiskAnalysis:[],//风险联系
        callRisk:[],//风险联系
        activeDegree: {
          active1_6:[],
          active1_7:[],
          active1_72:[],
          active4_1:[],
          active2_1:[]
        },//活跃程度
        friendCircle: [],//朋友圈
        friendCircle1: {},//朋友圈
        friendCircle2: {},//朋友圈
        friendCircle3: {},//朋友圈
        friendCircle4: {},//朋友圈
        friendCircle5: {},//朋友圈
        consumptionDetail: [],//消费情况
        callTimeDetail: [],//3通话时间详细统计
        durationList3m: [],//通话时段（近3月通话次数降序）
        durationList6m: [],//通话时段（近6月通话次数降序）
        peerNumTopList3m: [],//联系人Top3（近3月通话次数降序）
        peerNumTopList6m: [],//联系人Top3（近6月通话次数降序）
        locationTopList3m: [],//联系人号码归属地Top3（近3月通话次数降序）
        locationTopList6m: [],//联系人号码归属地Top3（近6月通话次数降序）
        contact_region_3m: [],//联系人号码归属地（近3月通话次数降序）
        contact_region_6m: [],//联系人号码归属地（近6月通话次数降序）
        callContactDetail:[],
        callContactDetail1:[],
        mainService: [],//
        serviceDetails: [],//
        callFamilyDetail: [],//稳定性
        roamAnalysis: [],//漫游分析摘要
        roamDetail: [],//漫游详情统计
        orderProData: [],//订单进度
        loanInfoData:[],//借款信息表格
        IVSRiskData:[],//IVS风险详情表格
        industryRiskData:[],//行业关注风险详情表格
        tongdunData:[],//同盾表格
        historyData:[],//历史订单表格
        orderDetail: {},//订单详情
        orderAuthState:{},//订单认证状态
        customerInfo: {},//客户信息
        idAddressInfo:{},//客户身份地址信息
        linkManInfo: {},//联系人信息
        userBasic:{},
        refuseReason:'',//审核拒绝原因
        moxieInfo: {
          dataSource:[]

        },//魔蝎报告
        callLogMobile: {
          contacts:''
        },
        creditInfo: {
          final_score:'',
          zmScore:'',
          zhima_Ivs:'',
          zhimaFocus:'',
          isRealName:''
        },//征信信息
        allAuthInfo:{},//授权信息
        yituRecog: {
          yituVsLivesimilarity:'',
          yituVsIdcardsimilarity:''
        },//依图识别
        orderRemarkList:[], //订单备注
        orderRemarkLoading:false,
        addRemarkForm:{},  //订单备注
        tagForm:{
          orderTag:'',
          remindTime: '',
          remindDate: ''
        },       //订单标签
        pickerOptions: {
          disabledDate(time) {
            return compareDate(time)
          }
        },
        pickerTimeOptions: {
          start: '00:00',
          end: '23:00',
          step: '01:00'
        },
        addRemarkRule:{},
        saveRemarkFormLoading:false,
        tagFormLoading:false,
        active:0
      }
    },
    methods: {
      countOverdueHanding(row){
        //let count = parseFloat(row.amountApply) * 0.01 * ;
      },
      judgeDay0Collection() {       //判断是否是D0人员
          this.$http.post('manage/judgeDay0CollectionByUserId',{id: DataUtil.id()}).then(response=>{
            let {body} = response;
            if(body.code == 1){
              body.data.day0Collection == true ? this.isshow=false : this.isshow = true;
            }
          },response=>{});
        },
      getOrderType(type){
        return enums.getOrderPro(type);
      },
      getOrderTag(type){
        return enums.getOrderTagList(type);
      },
      getContactTag(type){
        return enums.getContactTagList(type);
      },
      formatUnixTime(time){
        return DataUtil.formatUnixTime(time);
      },
      pageSizeChange(val) {
        console.log(val);
        this.pageSize = val;
        this.pageIndex = 1;
        this.callLog()
      },
      pageIndexChange(val) {
        this.pageIndex = val;
        this.callLog()
      },
      pageSizeChangeMX(val) {
        console.log(val);
        this.pageSizeMX = val;
        this.pageIndexMX = 1;
      },
      pageIndexChangeMX(val) {
        console.log(val)
        this.pageIndexMX = val;
      },
      getInfoCheck(val) {//检查项
        return enums.getInfoCheck(val)
      },
      getRiskCount(val) {//风险统计
        return enums.getRiskCount(val)
      },
      getRiskTime(val) {//
        return enums.getRiskTime(val)
      },
      getCallRisk(val) {//风险联系
        return enums.getCallRisk(val)
      },
      getServiceTypeTime(val){
        return enums.getServiceTypeTime(val)
      },
      getServiceType(val){
        return enums.getServiceType(val)
      },
      getFocus(val) {//芝麻分行业关注
        return enums.getFocus(val)
      },
      getObjectState(val) {//行业关注异议状态
        return enums.getObjectState(val)
      },
      getDatatype(val) {//行业关注数据状态
        return enums.getDatatype(val)
      },
      getExtendInfo(val) {//补充信息
        if(val){
          return val.description
        }
      },
      getOrderPro(val) {//订单进度
        return enums.getOrderPro(val)
      },
      getSex(val) {//性别
        return enums.getSex(val)
      },
      getIdentity(val){//身份
        return enums.getIdentity(val)
      },
      getFlagByDicItem() {
        this.$http.post('manage/dicItemListByDicCode', {dicCode:'CONTACT_HIGH_RISK'}).then(response => {
          if (1 == response.body.code) {
            let _data = response.body.data;
            this.flag = _data;
            if(_data){
              for(let i=0;i<_data.length;i++){
                this.dicFlag.push({'code':_data[i].dicItemValue,'value':_data[i].dicItemName});
              }
            }
          } else {
            this.$message.error(response.body.message);
          }
        }, response => {
        });
      },
      getFlag(val){
        let re = '';
        this.dicFlag.forEach(function(obj) {
          if (obj.code == val) {
            re = obj.value;
            return
          }
        });
        return re
      },
      checkImgID() {
        let _photoList = [
          this.yituRecog.IDImgSrc
        ];
        this.$refs.photoBox.show(_photoList)
      },
      checkImg() {
        let _photoList = [
          this.yituRecog.liveImgSrc
        ];
        this.$refs.photoBox.show(_photoList)
      },

      checkImgPolice() {
        let _photoList = [
          this.yituRecog.policeImgSrc
        ];
        this.$refs.photoBox.show(_photoList)
      },
      tableRowClassName(row,index) {
        if (row.score == 0) {
          return 'info-row';
        }else if(row.score == 2){
          return 'red-row';
        }
        return '';
      },
      // 通讯录信息按钮
      addressBook(){
        this.dialogTableVisible = true;
      },
      search() {
        this.addreBook();
      },
      isTrueFn(){
        if(this.MXtoken){
          this.isTrueMX = false;
        }else {}
        if(this.JXLtoken){
          this.isTrueJXL = false
        }else {}
      },
      //聚信立通话记录
      callLog(){
        this.callLogDialog = true;
        this.callLogLoading = true;
        let _data = {
          page:this.pageIndex,
          count:this.pageSize,
//          uuid:this.uuid,
          token:this.JXLtoken,
          userId:this.userId,
          mobile:this.callLogMobile.contacts||''
        };
        this.$http.post('jxl/fetchJXLMobileCallsDataByToken.json',_data).then(response => {
          if (0 == response.body.code) {
            this.callLogData = response.body.result.data;
            this.dataTotal = response.body.result.resultCount*this.pageSize;
            this.callLogLoading = false;
          } else {
            this.$message.error(response.body.message);
            this.callLogLoading = false;
          }
        }, response => {
          this.callLogLoading = false;
        });
      },
      //魔蝎通话记录
      moxieCallLog(){
        this.moxieCallLogDialog = true;
      },
      key2vaule(obj,key){
        for(let i=0;i<obj.length;i++){
          if(obj[i].key == key){
            return obj[i].value
          }
        }
      },
      //报告
      reportInfo(){
        this.JxlLoading = true;
      },
      //同盾全部信息
      tongDunInfo(){
        this.TdLoading = true;
      },
      reSearchJXL(){//聚信立重新查询
        this.reLoadingJXL = true;
      },
      reSearchZM(){//芝麻分重新查询
        this.reLoadingZM = true;
        this.$http.post('honor/ZMScore.json', {userId: this.userId}).then(response => {
          if (0 == response.body.code) {
            this.reLoadingZM = false;
            this.creditInfo.zmScore = response.body.result.data.zmScore;
          } else {
            this.$message.error(response.body.message);
          }
        }, response => {
          this.reLoadingZM = false
        });
      },
      focusDetail(){
        this.industryRiskDialog = true;
      },
      IVSDetail(){
        this.IVSRiskDialog = true;
      },
      /*
       * 订单详情
       * */
      orderDataDetail(tag){
        this.gridLoading = true;
        this.$http.post('manage/orderInfoByUuid', { uuid:this.uuid}).then(response => {
          let {body} = response;
          if (1 == body.code) {
            if(body.data){
              this.orderDetail = body.data;
              if(body.data.status == 7){    //查询订单背拒绝原因
                this.$http.post('manage/orderBlackListByOrderNo',{uuid:this.uuid}).then(response =>{
                  let {body} = response;
                  if(1 == body.code && body.data[0]){
                    if(body.data[0].type == 90){
                      this.refuseReason = '业务异常';
                    }else {
                      this.refuseReason = body.data[0].responseMessage;
                    }
                  }
                })
              }
              if(tag){
                this.addreBook(body.data.channel);        //通讯录信息兼容360渠道
                this.getTop20ContactList(body.data.channel);  //通话记录兼容360
              }
            }
          }
        });

        //借款信息
        this.$http.post('manage/orderLoanInfoByUuid', { uuid:this.uuid}).then(response => {
          let {body} = response;
          if (1 == body.code) {
            if(body.data){
              let arr = [];
              arr.push(body.data);
              this.loanInfoData = arr;
              this.gridLoading = false;
            }
          } else {
            this.gridLoading = false;
          }
        });
        this.$http.post('manage/userAuthStateMon',{uuid:this.userUuid,orderNo:this.uuid}).then(response => {
          let {body} = response;
          if(1 == body.code && body.data){
            this.orderAuthState = body.data;
          }
        })
        /*催收标签*/
        this.$http.post('manage/orderTagInfo',{orderNo:this.uuid,systemSource:'2'}).then(response => {
          let {body} = response;
          if(1 == body.code && body.data){
            for(let i = 0;i < this.tagList.length;i++){
              if(this.tagList[i].code == body.data.orderTag){
                this.cuishouTag = this.tagList[i].name;
              }
            }
          }
        })
      },
      /*
       * 客户和联系人信息
       * */
      customerDataInfo(){
        this.$http.post('manage/userBaseInfo', { uuid:this.userUuid}).then(response => {
          if (1 == response.body.code) {
            if(response.body.data && response.body.data[0]){
              this.customerInfo = response.body.data[0];
            }
          }
        })
        this.$http.post('manage/orderUserByUser', { userUuid:this.userUuid}).then(response => {
          let {body} = response;
          if (1 == body.code) {
            if(body.data){
              this.idAddressInfo = body.data;
              this.linkManInfo = body.data;
            }
          }
        });
      },
      /**
       * 依图识别*/
      yituDataInfo(){
        /*依图识别(三张照片)*/
        this.$http.post('manage/yituImgUrl',{uuid:this.userUuid}).then(response =>{
          let {body} = response;
          if(1 == body.code && body.data){
            this.yituRecog.IDImgSrc = Config.imageUrl+"IDCard/"+body.data[0].userIdentityUrl;
            this.yituRecog.liveImgSrc = Config.imageUrl+"grepImage/"+body.data[0].yituImageUrl;
            this.yituRecog.policeImgSrc = Config.imageUrl+body.data[0].originImageUrl;
          }
        })
      },
      thirdDataInfo(){
        this.getUserThirdData({uuid:this.userUuid,dataType:3},(data) =>{
          try{
            let result = JSON.parse(data.data);
            this.yituRecog.yituVsLivesimilarity = parseFloat(result.pair_verify_similarity).toFixed(2);
          }catch (e){}
        });

        this.getUserThirdData({uuid:this.userUuid,dataType:9},(data) =>{
          try{
            let result = JSON.parse(data.data);
            this.yituRecog.yituVsIdcardsimilarity = parseFloat(result.pair_verify_similarity).toFixed(2);
          }catch (e){}
        });
      },
      getOrderThirdDataInfo(postData,callback){
        this.$http.post('manage/thirdDataByOrderNoMon',postData).then((response) =>{
          let {body} = response;
          if(1 == body.code && body.data){
            callback(body.data);
          }
        })
      },
      /*通过用户的uuid查询第三方信息*/
      getUserThirdData(postData,callback){
        this.$http.post('manage/userThirdDataMon',postData).then(response =>{
          if(1 == response.body.code){
            if(response.body.data){
              callback(response.body.data);
            }
          }
        }).catch((e) =>{});
      },
            /**
       * 通话记录
       */
      getTop20ContactList(channel) {
         let _url = 'manage/getTopMoXieContactDataMon';
        //(channel == 11 || channel == 50) ? _url = 'manage/getTop20Rong360ContactList' : _url = 'manage/getTopMoXieContactDataMon';
         this.$http.post(_url,{uuid:this.userUuid,dataType:1,orderNo:this.uuid,channel:channel}).then((response) =>{   //通话记录
          let {body} = response;
          if(1 == body.code && body.data){
            try{
              let result = body.data;
              if(result){
                this.isTrueMXCall = false;
              }
              this.moxieCallLogData = result;
            }catch (e){}
          }
      })
      },
      /**
       * 通讯录信息
       * @return {[type]} [description]
       */
      addreBook(channel){
        this.linkLoading = true;
        let _url = '';
        let _data = {};
        // (channel == 11 || channel == 50 || channel == 51 || channel == 60 || channel == 61) ? _url = 'manage/rong360UserContactByUserUuidMongo' : _url = 'manage/orderUserContactMongoByOrderNo';
        // (channel == 11 || channel == 50 || channel == 51 || channel == 60 || channel == 61) ? _data = {uuid: this.userUuid,channel:channel} : _data = {uuid: this.uuid, userUuid:this.userUuid};
        _url = 'manage/rong360UserContactByUserUuidMongo';
        _data = {uuid: this.userUuid,channel:channel};
        this.$http.post(_url, _data).then(response => {
          this.linkLoading = false;
          if (1 == response.body.code) {
            let {body} = response;
            if(1 == body.code && body.data){
              this.totalLinkMan = body.data.length;
              this.linkData = body.data;
            }
          }
        })
      },
      /*
       * 订单进度
       * */
      orderSchedule(){
        this.$http.post('manage/orderSchedule', {uuid:this.uuid}).then(response => {
          let {body} = response;
          if (1 == body.code) {
            if(body.data){
              this.active = body.data.length;
              this.orderProData = body.data;
            }
          } else {
            this.$message.error(response.body.message);
          }
        }, response => {
        });
      },
      /*
       * 历史订单
       * */
      orderHistory(){
        this.historyLoading = true;
        this.$http.post('manage/userOrderList', {uuid:this.userUuid}).then(response => {
          if (1 == response.body.code) {
            this.historyLoading = false;
            if(response.body.data){
              this.historyData = response.body.data;
            }
          }
        }, response => {
          this.historyLoading = false
        });
        this.orderRemarkLoading = true;
        this.$http.post("manage/orderRemarkList",{uuid:this.uuid,sessionId:DataUtil.sid(),systemSource:'2'}).then(response =>{
          let {body} = response;
          if(1 == body.code && body.data){
            this.orderRemarkList= body.data;
          }
          this.orderRemarkLoading = false;
        }).catch(e =>{this.orderRemarkLoading = false})
      },
      saveTagForm(){
        if(!this.tagForm.recordUserPhone){
          this.$message.error("请填写手机号");
          return false;
        }else if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.tagForm.recordUserPhone))){
          this.$message.error("手机号格式错误");
          return false;
        }
        if(!this.tagForm.orderTag){
          this.$message.error("请选择标签");
          return false;
        }
        if(!this.addRemarkForm.remark || this.addRemarkForm.remark.length > 300){
          this.$message.error("请正确填写备注");
          return false;
        }
        if(!this.tagForm.remindDate && this.tagForm.remindTime){
          this.$message.error('请先选择日期');
          return false;
        }
        if(this.tagForm.remindDate && !this.tagForm.remindTime){
          this.$message.error('请选择具体时间');
          return false;
        }
        let _data = {
          recordUserName:this.tagForm.recordUserName,
          recordUserPhone:this.tagForm.recordUserPhone,
          systemSource:'2',
          orderNo:this.uuid,
          orderTag:this.tagForm.orderTag,
          userUuid:this.userUuid,
          remark:this.addRemarkForm.remark + ' ['+DataUtil.userName()+'|'+DataUtil.formatUnixTime(new Date())+']',
          operateId: DataUtil.id(),
          alertTime: this.tagForm.remindDate ? (this.tagForm.remindDate.setHours(this.tagForm.remindTime.split(':')[0])) : ''
        };
        this.tagFormLoading = true;
        this.$http.post("manage/tagToOrder",_data).then(response =>{
          let {body} = response;
          if(1 == body.code){
            this.$message.info('打标签成功！');
            this.tagForm={
                    orderTag:'',
                    remindTime: '',
                    remindDate: ''
                  }
            this.addRemarkForm={};
            // window.location.reload();
            this.orderDataDetail();//订单详情
            this.yituDataInfo();//依图信息
            this.thirdDataInfo()//征信信息
            this.customerDataInfo();//客户和联系人信息
            this.orderSchedule();//订单进度
            this.orderHistory();//历史订单
            this.getFlagByDicItem();//通讯录字典
            this.judgeDay0Collection();
          }
          this.tagFormLoading = false;
        }).catch(e =>{
            this.$message.info('打标签失败！');
          this.saveRemarkFormLoading = false;
        })
      },
      historyDetail(row){
        this.$router.push({ path:'/OrderDetail',query: {
          seen:this.$route.query['seen'],
          userUuid: row.userUuid,
          uuid:row.uuid||''
        }});
        // window.location.reload()
        
            this.orderDataDetail();//订单详情
            this.yituDataInfo();//依图信息
            this.thirdDataInfo()//征信信息
            this.customerDataInfo();//客户和联系人信息
            this.orderSchedule();//订单进度
            this.orderHistory();//历史订单
            this.getFlagByDicItem();//通讯录字典
            this.judgeDay0Collection();
      }
    },
    mounted: function () {
      // this.seen = this.$route.query['seen'];
      this.createUser = this.$route.query['createUser'];
      this.orderId = this.$route.query['id'];
      this.userId = this.$route.query['userId'];
      this.userHistoryId = this.$route.query['userHistoryId'];
      this.orderNo = this.$route.query['orderNo'];
      // this.uuid = this.$route.query['uuid']||'';
      // this.userUuid = this.$route.query['userUuid']||'';
      this.orderDataDetail(1);//订单详情
      this.yituDataInfo();//依图信息
      this.thirdDataInfo()//征信信息
      this.customerDataInfo();//客户和联系人信息
      this.orderSchedule();//订单进度
      this.orderHistory();//历史订单
      this.getFlagByDicItem();//通讯录字典
      this.judgeDay0Collection();
    }
  }
</script>
<style>
  /* 标题 */
  .main-title{
    font-size: 22px;
    margin-top: -15px;
    margin-bottom: 15px;
  }
  .one-title{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 7px;
  }
  .two-title{
    font-size: 13px;
    color: #888;
    margin: 10px 0
  }
  .subtitle{
    font-size: 13px;
    color: #888;
  }
  .orderBox .el-row {
    margin: 15px 30px;
  }
  .orderBox .el-col span{
    margin-right: 10px;
  }
  .orderBox .el-button span,.orderBox .el-tag span{
    margin-right: 0;
  }
  .orderBox .box-card .el-button{
    margin-right: 5px;
  }
  .orderBox .grid-content {
    line-height: 28px;
  }

  .divid-line{
    height: 10px;
    background: #f1f2f7;
  }
  /*借款信息*/
  .loanDetail{
    margin: 0 30px 15px;
    width: 94%;
    max-height:250px;
  }
  /*依图识别*/
  .yituInfo{
    display: block;
    text-align: center;
    margin-top: 10px;
  }
  /*征信*/
  .orderBox .box-card{
    height: 225px;
  }
  .JXLBox{
    border: 1px solid #ccc;
    padding: 10px
  }
  .JXLBox div{
    padding: 5px;
  }
  .imgCss{
    display:block;
    width: 100%;
    height: 250px;
  }
  .orderBox .el-table .info-row {
    background: #e2f0e4;
  }

  .orderBox .el-table .red-row{
    background: #F33;
  }
  .redInfo{
    color: #F33;
  }

</style>
