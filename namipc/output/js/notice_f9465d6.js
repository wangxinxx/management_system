!function(){var t=require("mod/tools"),e=t.apiUrl(),i={init:function(){i.notice(),i.noticedeta()},notice:function(){t.fetchAjax(e.data+"/message/notice_list").done(function(e){if(0==e.status){var i=e.result.list,n=$(".about-content");t.renderTpl(n.find(".platform-desc"),$("#plat-notice-template"),{iconList:i})}})},noticedeta:function(){var i=t.getUrlParam("id"),n={noticeId:i};t.fetchAjax(e.data+"/message/notice_detail",n).done(function(t){if(0==t.status){console.log(t);var e=t.result,i=$(".main-section");i.find(".notice-body .content").html(e.content),i.find(".notice-header h5").text(e.title),i.find(".notice-header .time").text(e.time),i.find(".notice-body .sign-time").text(e.time)}})}};i.init()}();