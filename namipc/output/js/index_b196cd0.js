!function(){var t=require("mod/tools"),e=t.apiUrl(),n={init:function(){n.getIndexData(),n.getcooperationData(),n.onload(),n.scroll()},scroll:function(){setInterval(n.AutoScroll,5e3)},AutoScroll:function(){$(".notice_active").find("ul").animate({marginTop:"-116px"},1e3,function(){$(this).css({marginTop:"-58px"}).find("li:first").appendTo(this)})},onload:function(){var t=Cookies.get("token")||"";if(t){var e=Cookies.get("count");$(".login-fast").css("display","none"),$(".logged").css("display","flex"),$(".logged .nub").text(e)}else $(".login-fast").css("display","flex"),$(".logged").css("display","none")},getIndexData:function(){t.fetchAjax(e.data+"/index/index_data").done(function(e){if("0"===e.status||0===e.status){console.log(e);var n=e.result&&e.result.bannerList||[],o=$.extend(e.result&&e.result.helpList,e.result&&e.result.iconStatistics);o.title=o.title||o.titile;var i=(e.result&&e.result.projectList_tj,e.result&&e.result.projectList_st),s=e.result&&e.result.projectList_ft,r=$(".notice-section"),a=$(".recommend-section");t.renderTpl($(".banner"),$("#banner-template"),{bannerList:n}),t.renderTpl(r.find(".notice-info"),$("#notice-info-template"),{noticeList:o}),t.renderTpl(a.find(".recommend-plat"),$("#recommend-plat-template"),{projectList_st:i}),t.renderTpl(a.find(".recommend-super"),$("#recommend-super-template"),{projectList_ft:s}),$(".banner").lubo({}),$(".bigger .b-more").attr("src","/img/more_b84ea1e.png")}}).fail(function(t){console.log(t)})},getcooperationData:function(){t.fetchAjax(e.data+"/help/cooperation_list",{pageNum:"1",type:"1"}).done(function(e){if(!("0"!==e.status&&0!==e.status||"0"!==e.status&&0!==e.status)){var n=e.result&&e.result.list;t.renderTpl($(".partner-section .partner-hbs"),$("#partner-template"),{cooperationList:n})}})}};n.init()}();