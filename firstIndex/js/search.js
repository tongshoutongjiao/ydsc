/**
 * Created by wy on 2016/11/30.
 */
~function (desW) {
    var winW = document.documentElement.clientWidth,
        n = winW / desW,
        oMain = document.getElementById("main");
    if (winW > desW) {
        oMain.style.width = desW + "px";
        return;
    }
    document.documentElement.style.fontSize = n * 100 + "px";
}(720);

//点击清空历史搜索按钮清除搜索历史
$('.clearSearch').tap(function () {
    $('.hsearch li').remove();
});


//点击搜索框输入搜索内容按下搜索后搜索历史添加搜索内容 点击取消返回分类页面
    $('.searchbtn').tap(function () {
        if($('.search').val()==''){
            window.location.href='../../myClassic/myClassic.html'
        }else{
            $(".searchbtn").html('搜索');
            var text = $('.search').val();//输入框输入内容
            console.log(text);
            $('.hsearch').append('<li class="historySearch list">' + text + '</li>');
            window.location.href='#';
        }

    });


var bind_name="input";
//定义所要绑定的事件名称
if(navigator.userAgent.indexOf("MSIE")!=-1) bind_name="propertychange";
//判断是否为IE内核 IE内核的事件名称要改为propertychange
/*输入框键盘离开事件绑定*/
$("#search").bind(bind_name,function(){
    if(this.value!=null&&this.value!=""){
        $('.searchbtn').html('搜索')
    }else{
        $('.searchbtn').html('取消')
    }
});























