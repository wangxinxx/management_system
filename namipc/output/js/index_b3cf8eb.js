!function(){var e=require("mod/tools"),t=e.apiUrl(),n={init:function(){n.getIndexData(),n.getcooperationData(),n.onload(),n.scroll()},scroll:function(){setInterval(n.AutoScroll,5e3)},AutoScroll:function(){$(".notice_active").find("ul").animate({marginTop:"-116px"},1e3,function(){$(this).css({marginTop:"-58px"}).find("li:first").appendTo(this)})},onload:function(){var e=Cookies.get("token")||"";if(e){var t=Cookies.get("count");$(".login-fast").css("display","none"),$(".logged").css("display","flex"),$(".logged .nub").text(t)}else $(".login-fast").css("display","flex"),$(".logged").css("display","none")},getIndexData:function(){var n=$(".notice-info"),r={useEasing:!0,useGrouping:!0,separator:",",decimal:"."};e.fetchAjax(t.data+"/index/index_data").done(function(t){if("0"===t.status||0===t.status){var o=t.result&&t.result.bannerList||[],i=$.extend(t.result&&t.result.helpList,t.result&&t.result.iconStatistics);i.title=i.title||i.titile;var s=(t.result&&t.result.projectList_tj,t.result&&t.result.projectList_st),a=t.result&&t.result.projectList_ft,l=$(".notice-section"),c=$(".recommend-section");try{var p=new CountUp("money1",0,i.invest,0,1.5,r),m=new CountUp("money2",0,i.profit,0,1.5,r);money3=new CountUp("money3",0,i.register,0,1.5,r),money4=new CountUp("money4",0,i.sccumulative,0,1.5,r),p.start(),m.start(),money3.start(),money4.start(),n.find(".invest-money").text(i.invest),n.find(".profit-money").text(i.profit),n.find(".register-money").text(i.register),n.find(".sccumulative-money").text(i.sccumulative)}catch(u){}e.renderTpl($(".banner"),$("#banner-template"),{bannerList:o}),e.renderTpl(l.find(".notice-info .notice_active ul"),$("#notice-info-template"),{noticeList:i}),e.renderTpl(c.find(".recommend-plat"),$("#recommend-plat-template"),{projectList_st:s}),e.renderTpl(c.find(".recommend-super"),$("#recommend-super-template"),{projectList_ft:a});try{$(".banner").lubo({})}catch(u){}$(".bigger .b-more").attr("src","/img/more_b84ea1e.png")}}).fail(function(e){console.log(e)})},getcooperationData:function(){e.fetchAjax(t.data+"/help/cooperation_list",{pageNum:"1",type:"1"}).done(function(t){if(!("0"!==t.status&&0!==t.status||"0"!==t.status&&0!==t.status)){var n=t.result&&t.result.list;e.renderTpl($(".partner-section .partner-hbs"),$("#partner-template"),{cooperationList:n})}})}};n.init()}();var myTemplate=Handlebars.compile($("#recommend-plat-template").html());Handlebars.registerHelper("compare",function(e,t,n){return e==t?n.fn(this):n.inverse(this)}),$(".recommend-plat").html(myTemplate());var myTemplate=Handlebars.compile($("#recommend-super-template").html());Handlebars.registerHelper("compares",function(e,t,n){return e==t?n.fn(this):n.inverse(this)}),$(".recommend-super").html(myTemplate());