!function(){var e=require("mod/tools"),t=e.apiUrl(),i={init:function(){i.getImgCode(),i.onEvent(),i.getParams()},getParams:function(){var e=location.search,t={};if(-1!=e.indexOf("?")){var i=e.substr(1);strs=i.split("&");for(var s=0;s<strs.length;s++)t[strs[s].split("=")[0]]=unescape(strs[s].split("=")[1])}$(".InvitePeople ").val(t.invitecode)},getImgCode:function(){var i=$(".main-section .register-box");e.fetchAjax(t.data+"/message/image_code").done(function(e){if(0===e.status||"0"===e.status){var t="data:image/png;base64,"+(e.result&&e.result.imgVal);i.find(".img-code").attr("src",t),i.find(".img-code").attr("data-imei",e.result&&e.result.imei)}})},getSmsCode:function(i,s,n,a){var o=$(".main-section .register-box"),d={type:i,cellphone:s,imgCode:n};e.fetchAjax(t.data+"/message/sms_code",d,"post",{imei:a}).done(function(e){if(0===e.status||"0"===e.status){o.find(".tips-register").text("验证码发送成功!").fadeIn(),setTimeout(function(){o.find(".tips-register").text("").hide()},2500);var t=o.find(".get-sms-code"),i=60;t.addClass("disabled");var s=function(e,i){t.html("再次获取("+e+"s)");var n=setTimeout(function(){e--,s(e,i)},i);0==e&&(clearTimeout(n),n=null,t.removeClass("disabled").html("获取验证码"))};s(i,1e3)}else o.find(".tips-register").text(e.error||e.msg).fadeIn()})},onEvent:function(){var s=$("#InvitePeoplefont"),n=$(".main-section .register-box");s.on("click",function(){$(".triangle_border_down").toggleClass("animate-down"),$(this).siblings(".hideInput").toggleClass("hide")}),n.find('input[data-must != "false"]').blur(function(){$(this).val()?($(this).removeClass("input-tips"),n.find(".tips-register").text("").hide()):($(this).addClass("input-tips"),n.find(".tips-register").text($(this).attr("placeholder")).fadeIn())}),n.find(".img-code").on("click",function(){i.getImgCode()}),n.find(".get-sms-code").on("click",function(){var e=$(this),t=n.find(".phone").val(),s=n.find(".code-input").val(),a=n.find(".img-code").attr("data-imei");e.hasClass("disabled")||(t?s?i.getSmsCode(1,t,s,a):(n.find(".code-input").addClass("input-tips"),n.find(".tips-register").text("请填写图片验证码").fadeIn()):(n.find(".phone").addClass("input-tips"),n.find(".tips-register").text("手机号不能为空").fadeIn()))}),n.on("click",".register-btn",function(){var s,a=$(this),o=n.find(".phone").val(),d=(n.find(".imageCode").val(),n.find(".phone-code-input").val()),r=n.find(".password").val(),l=(n.find(".password-again").val(),n.find(".invite-code").val()),f=e.formVerification(".register-box");if(a.hasClass("disabled"))return!1;if(f){if(!$(".checkbox-box").prop("checked"))return alert("您未同意服务协议，无法完成注册"),!1;a.addClass("disabled"),s=$(".InvitePeople ").val()?$(".InvitePeople ").val():"none";var c={register:DES3.encrypt("b8a5483ed47744f7b4978104afdcc075",JSON.stringify({cellphone:o,password:r,code:d,referrer:l,inviteCode:s}))};e.fetchAjax(t.data+"/user/register",c).done(function(e){0===e.status||"0"===e.status?(console.log("注册成功，跳转中..."),Cookies.set("token",e.result&&e.result.token),Cookies.set("name",e.result&&e.result.name||o),Cookies.set("phone",o),Cookies.set("headImg",e.result&&e.result.headImg||""),location.href="/"):(i.getImgCode(),n.find(".code-input, .phone-code-input").val(""),n.find(".tips-register").text(e.msg).fadeIn(),setTimeout(function(){n.find(".tips-register").text("").hide()},3500),a.removeClass("disabled"))}).fail(function(e){a.removeClass("disabled"),console.log(e)})}}),$("body").keydown(function(e){"13"==e.keyCode&&$(".register-btn").click()})}};i.init()}();