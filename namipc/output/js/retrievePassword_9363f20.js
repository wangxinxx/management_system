!function(){var e=require("mod/tools"),t=e.apiUrl(),i={init:function(){i.getImgCode(),i.onEvent()},getImgCode:function(){var i=$(".main-section .register-box");e.fetchAjax(t.data+"/message/image_code").done(function(e){if(0===e.status||"0"===e.status){var t="data:image/png;base64,"+(e.result&&e.result.imgVal);i.find(".img-code").attr("src",t),i.find(".img-code").attr("data-imei",e.result&&e.result.imei)}})},getSmsCode:function(i,n,s,o){var a=$(".main-section .register-box"),d={type:i,cellphone:n,imgCode:s};e.fetchAjax(t.data+"/message/sms_code",d,"post",{imei:o}).done(function(t){if(0===t.status||"0"===t.status){e.tipsAlert("验证码发送成功!"),setTimeout(function(){a.find(".tips-register").text("").hide()},2500);var i=a.find(".get-sms-code"),n=180;i.addClass("disabled");var s=function(e,t){i.html("再次获取("+e+"s)");var n=setTimeout(function(){e--,s(e,t)},t);0==e&&(clearTimeout(n),n=null,i.removeClass("disabled").html("获取验证码"))};s(n,1e3)}else a.find(".tips-register").text(t.error||t.msg).fadeIn()})},onEvent:function(){var n=$(".main-section .register-box");n.find('input[data-must != "false"]').blur(function(){$(this).val()?($(this).removeClass("input-tips"),n.find(".tips-register").text("").hide()):($(this).addClass("input-tips"),n.find(".tips-register").text($(this).attr("placeholder")).fadeIn())}),n.find(".img-code").on("click",function(){i.getImgCode()}),n.find(".get-sms-code").on("click",function(){var e=$(this),t=n.find(".phone").val(),s=n.find(".code-input").val(),o=n.find(".img-code").attr("data-imei");e.hasClass("disabled")||(t?s?i.getSmsCode(2,t,s,o):(n.find(".code-input").addClass("input-tips"),n.find(".tips-register").text("请填写图片验证码").fadeIn()):(n.find(".phone").addClass("input-tips"),n.find(".tips-register").text("手机号不能为空").fadeIn()))}),n.on("click",".findPass-btn",function(){var i=n.find(".phone").val(),s=n.find(".phone-code-input").val(),o=n.find(".password").val(),a=(n.find(".password-again").val(),n.find(".invite-code").val(),e.formVerification(".register-box"));if(a){var d={cellphone:i,code:s,password:DES3.encrypt("b8a5483ed47744f7b4978104afdcc075",o)};e.fetchAjax(t.data+"/user/find_login_pwd",d).done(function(t){console.log(t),0==t.status?(e.tipsAlert("修改成功！"),Cookies.remove("token"),setTimeout(function(){location.href="/login.html"},1500)):e.tipsAlert(t.msg)})}}),$("body").keydown(function(e){"13"==e.keyCode&&$(".register-btn").click()})}};i.init()}();