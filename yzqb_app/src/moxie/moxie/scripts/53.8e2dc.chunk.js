webpackJsonp([53],{235:function(e,t,a){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),l=n(r),o=a(53),s=n(o),i=a(8),d=a(14),u=n(d),m=a(1),p=a(4),c=n(p),f=a(10),g=n(f),h=a(13),y=n(h),P=a(5),v=n(P),E=a(11),b=(n(E),a(40)),T=a(85).Base64,k=l.default.createClass({displayName:"index",propTypes:{pageConfig:r.PropTypes.object.isRequired,inMemoryLogin:r.PropTypes.object,platformId:r.PropTypes.string.isRequired},getInitialState:function(){return{loginTypeIndex:0,isStart:!1,preGetImgCode:!1}},getDefaultProps:function(){return{auto:0,inMemoryLogin:null}},componentDidMount:function(){var e=this,t=this.props.pageConfig,a=(0,b.getParams)("loginParams");if(a){var n=!1;t.fields.map(function(e,r){a[t.login_type]&&a[t.login_type][e.name]||(n=!0)}),n||(this.timer=setInterval(function(){var a=!1;t.fields.map(function(t,n){e.refs[t.name]||(a=!0)}),a||(clearInterval(e.timer),e.handleImport())},100))}var r=this.autoImport,l=this.props.inMemoryLogin;if(this.isMounted=!0,l&&l.loginType){for(var o=0,s=0;s<1;s++)if(t.login_type===l.loginType){o=s;break}this.setState({loginTypeIndex:o},r)}},componentWillUnmount:function(){this.isMounted=!1},render:function(){var e=this.handleImport,t=this.handleProtocol,a=this.renderInputs,n=this.state.isStart,r=this.props,o=r.pageConfig,s=r.preGetImgCode,i=r.imgCode,d=r.getVcodeAgain,u=void 0!=m.qsParams.agreementEntryText?m.qsParams.agreementEntryText:"同意《用户使用协议》",p=a(),c=({backgroundColor:"#"+m.qsParams.themeColor},l.default.createElement("div",{className:"config-import-page"},p.length>0?l.default.createElement("div",{className:"form common-form"},p,1==s?l.default.createElement("div",{className:"input-item"},l.default.createElement(y.default,{key:"img",type:"text",ref:"imgCode",placeholder:"点击图片可刷新",label:"图片验证码"}),l.default.createElement("span",{onClick:d,style:{position:"absolute",right:0,top:"1px",width:"100px",height:"49px",background:"#f1f1f1"}},l.default.createElement("img",{style:{width:"100%",height:"100%"},src:"data:image/png;base64,"+i,alt:""}))):null):null,l.default.createElement("div",{style:{display:"NO"==m.qsParams.showAgreement||0==m.qsParams.showAgreement?"none":"block"},className:"protocol"},l.default.createElement("input",{id:"protocol"+o.login_type,ref:"protocol"+o.login_type,type:"checkbox",defaultChecked:!0}),l.default.createElement("label",{htmlFor:"protocol"+o.login_type},l.default.createElement("span",{style:{background:m.qsParams.themeColor?"#"+m.qsParams.themeColor:"rgb(126, 195, 235)"}})),l.default.createElement(g.default,{onTap:t},l.default.createElement("a",null,u))),m.qsParams.tenantAgreementUrl?l.default.createElement("div",{className:"protocol"},l.default.createElement("input",{id:"tanent_protocol"+o.login_type,ref:"tanent_protocol"+o.login_type,type:"checkbox",defaultChecked:!0}),l.default.createElement("label",{htmlFor:"tanent_protocol"+o.login_type},l.default.createElement("span",{style:{background:m.qsParams.themeColor?"#"+m.qsParams.themeColor:"rgb(126, 195, 235)"}})),l.default.createElement(g.default,{onTap:this.handleTanentProtocol},l.default.createElement("a",null,m.qsParams.tenantAgreementEntryText||"同意《用户使用协议》"))):null,l.default.createElement("div",{className:"page-wrapper"},l.default.createElement(g.default,{onTap:e},l.default.createElement(v.default,{types:"full",onTap:function(){},disable:n,state:n,getState:function(e){switch(e){case!1:return"提交";case!0:return"登录中...";default:return"提交"}}})))));return l.default.createElement("div",null,c)},showPwd:function(e,t){var n=s.default.findDOMNode(this.refs[e]).querySelector("input");"password"==n.type?(n.type="text",this.refs[e+"-span"].style.backgroundImage="url("+a(36)+")"):(n.type="password",this.refs[e+"-span"].style.backgroundImage="url("+a(20)+")")},clearVal:function(e){this.refs[e].setValue("")},renderInputs:function(){var e=this,t=this.tryGetCachedValue,a=(this.wrapValidator,this.state.loginTypeIndex,this.props.pageConfig),n=a,r=!1,o=void 0;try{o=(0,b.getParams)("loginParams")?(0,b.getParams)("loginParams"):{},o[a.login_type]&&(r=!0)}catch(e){console.log(e)}return n.fields.map(function(n,s){var i=t(n.name);if("select"==n.type){for(var d=[],u=0;u<n.list.length;u++)d.push(l.default.createElement("option",{key:u,value:n.list[u].value},n.list[u].key));var m=l.default.createElement("select",{ref:""+n.name,defaultValue:n.list[0].value},d);return l.default.createElement("div",{className:"input-item",key:n.fieldId},n.label,l.default.createElement("span",{className:"input-select"},m),l.default.createElement("p",{className:"input-tip"},n.des))}return l.default.createElement("div",{className:"input-item",key:n.fieldId},l.default.createElement(y.default,{key:a.login_type+"-"+n.label,type:""+n.type,ref:""+n.name,id:"inp"+s,defaultValue:r&&o[a.login_type][n.name]?o[a.login_type][n.name]:i,name:n.label,placeholder:"请输入"+n.label,label:n.label}),l.default.createElement("p",{className:"input-tip"},n.des),l.default.createElement("div",{className:"tex_box"},l.default.createElement("span",{ref:n.name+"-span",onClick:"password"==n.name?function(){return e.showPwd(n.name)}:function(){return e.clearVal(n.name)},className:"password"==n.name?n.name:"textt"})))})},handleImport:function(){function e(){u.default.set("sametrade",r,n.loginModel,n.login_type,{loginParam:d,loginFail:!0})}var t=this,a=(this.doneLogin,this.props),n=a.pageConfig,r=a.platformId,l=a.onSubmitTaskDone,o=a.preTaskId,s=(this.state.loginTypeIndex,n);if(!document.getElementById("protocol"+n.login_type).checked)return void setTimeout(function(){return c.default.alert("请勾选同意《用户使用协议》","")});if(this.refs["tanent_protocol"+n.login_type]&&!this.refs["tanent_protocol"+n.login_type].checked)return void setTimeout(function(){return c.default.alert("请勾选同意《用户使用协议》","")});var d=s.fields.reduce(function(e,a){if("select"==a.type){var n=t.refs[""+a.name].value;0==a.required&&""==n||(e[""+a.name]=n)}else{var n=t.refs[""+a.name].getValue();0==a.required&&""==n||(e[""+a.name]=n)}return e},{});for(var p in d)if(""==d[p])return void setTimeout(function(){return c.default.alert("请填写完整的信息!","")});var f=this.refs.imgCode&&this.refs.imgCode.getValue()||"";if(this.refs.imgCode&&!f)return alert("请输入图片验证码！"),null;this.setState({isStart:!0});var g=(0,b.getParams)("loginParams"),h=g&&g.phone?g.phone:m.qsParams.loginParamsEncode?JSON.parse(T.decode(m.qsParams.loginParamsEncode)).phone:null,y=g&&g.idcard?g.idcard:m.qsParams.loginParamsEncode?JSON.parse(T.decode(m.qsParams.loginParamsEncode)).idcard:null,P=g&&g.name?g.name:m.qsParams.loginParamsEncode?JSON.parse(T.decode(m.qsParams.loginParamsEncode)).name:null;(0,i.submitTaskHelper)({taskType:"sametrade",taskSubType:"",username:d.account,password:d.password,loginType:n.login_type,platformId:r,mobile:h,idCard:y,realName:P,creatTaskType:o?"preTask":null,preTaskId:o,captcha:f}).then(function(e){if(e.body.task_id){t.setState({isStart:!1}),c.default.refreshStatus("2","创建任务成功"),c.default.mxSaveTaskId(e.body.task_id);var a={taskId:e.body.task_id,platformId:r,username:d.account,loginModel:n.loginModel,loginType:n.login_type,taskType:"sametrade",loginParam:{account:d.account,idCard:d.idCard,realName:d.realName}};l(a)}}).catch(function(a){t.setState({isStart:!1}),console.log(a),c.default.refreshStatus("-3","服务异常，创建任务失败"),console.log("登录失败，标记失败"),e(),t.handleError(a)})},getLastLogin:function(){var e=this.props,t=e.pageConfig,a=e.platformId;return u.default.get("sametrade",a,t.loginModel,t.login_type)},handleError:function(e){try{defaultMessage=e&&e.body&&e.body.detail||defaultMessage}catch(t){c.default.alert("网络异常，请稍后再试!\n"+ +e,"")}this.setState({isStart:!1})},handleTanentProtocol:function(){var e=m.qsParams.tenantAgreementUrl&&"undefined"!=m.qsParams.tenantAgreementUrl?m.qsParams.tenantAgreementUrl:"";c.default.openWebView("用户使用协议",e,"","agreement")},handleProtocol:function(){var e=c.default.Device.SDK?0:m.qsParams.showTitleBar,t=m.qsParams.themeColor,a=m.qsParams.agreementUrl&&"undefined"!=m.qsParams.agreementUrl?m.qsParams.agreementUrl:"https://api.51datakey.com/h5/agreement.html?showTitleBar="+e+"&themeColor="+t;c.default.openWebView("用户使用协议",a,"","agreement")},selectLoginType:function(e){this.state.isStart||this.setState({loginTypeIndex:e})},doneLogin:function(e){return e.importResult={},this.props.setTaskStore(e),this.props.onLoginDone(),!0},autoImport:function(){this.props.auto&&this.handleImport()},tryGetCachedValue:function(e){var t=this.props.inMemoryLogin,a=this.getLastLogin(),n="";return a&&a.loginParam&&(n=(0,m.testPassword)(e)?a.loginFail?null:"":a.loginParam[e]),t&&t.loginParam&&t.loginParam[e]&&(n=t.loginParam[e]),n},wrapValidator:function(e){return function(t){return""===t||new RegExp(e).test(t)}}});t.default=k,e.exports=t.default}).call(this)}finally{}}});