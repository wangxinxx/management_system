$(document).ready(function(){
    var main= {
        data:{
            
        },
        dom:{
            priDesc:$(".about_con")
        },
        fncs:{
            getPriData(){
                $.getJSON('data.json',function(res){
                    console.log(res)
                    if(res.status == '0'){
                        var resData = res.data.privList[0];
                        main.dom.priDesc.find('.pdname').append('<p>'+resData.pdname.gsname+'</p>'+
                                                                '<p>'+resData.pdname.time+'</p>')
                    }
                })
            }
        },
        init:function(){
            $("header").load("./public/header.html",function(){$(this).find('#privacy').addClass('active')});
            $(".footer").load("./public/footer.html");
            //main.fncs.getPriData();
        }
    };
    main.init();
})