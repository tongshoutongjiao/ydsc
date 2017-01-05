/**
 * Created by ww on 2016/12/2.
 */
//跳转链接用
// function Xtouch(obj){
//     if (typeof obj == 'string') {
//         obj = document.querySelectorAll(obj);
//     }
//     if (typeof obj.length == 'number') {
//         return new TouchEvent(obj);
//     };
//     return new TouchEvent([obj]);
// }
// var els = document.querySelectorAll("div[data-href]");
// Xtouch(els).tap(function(){
//     window.location.href = this.dataset.href;
// });


//点击左侧栏切换对应右侧页面
window.onload = function () {
    var lis = $('.goodsclassify li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        $(lis[i]).tap(function () {
            //点击左侧时颜色改变
            $(this).addClass('selected').siblings().removeClass('selected');
        });
    }
};

//点击分类页搜索部分网页跳转
var $search = $('.search');
$search.tap(function () {
    window.location.href = '../首页/search.html'
});


//获取第一个主类别的商品分类列表
$.ajax({
    type: 'get',
    url: 'http://www.yindianmall.com/api/v2/mobile/goodscat/list/app/first.do',
    dataType: 'jsonp',
    success: function (data) {
        console.log(data);
        //左侧li
        var str = '';
        for (var i = 0; i < data.data.length; i++) {
            str += "<li class='allClassify' cat_id=" + data.data[i].cat_id + ">" + data.data[i].name + "</li>";
        }
        $('.goodsclassify').html(str);

        var _str = '';
        _str += "<div class='all selectThings0' style='display:block;'>";//显示部分加载即显示
        for (var j = 0; j < data.data[0].children.length; j++) {
            _str += "<div class='selectHead'>";
            _str += "<div class='candy'>" + data.data[0].children[j].name + "</div>";
            _str += "</div>";
            _str += "<div class='selectLast'>";
            for (var k = 0; k < data.data[0].children[j].children.length; k++) {
                _str += "<div class='lastList'>";
                _str += "<div class='sailList'><img src=" + data.data[0].children[j].children[k].image + "></div>";
                _str += "<a href='javascript:;'>" + data.data[0].children[j].children[k].name + "</a>";
                _str += "</div>";
            }
            _str += "</div>";
        }
        _str += "</div>";
        $('.goodsall').html(_str);
    }
});


//获取某个cat_id主类别的商品分类列表接口
setTimeout(function () {
    $('.allClassify').tap(function () {
        var cat_id = $(this).attr('cat_id');
        $.ajax({
            url: 'http://www.yindianmall.com/api/v2/mobile/goodscat/list/app/catId.do',
            dataType: 'jsonp',
            data: {
                catId: cat_id
            },
            success: function (data) {
                console.log(data);
                $('.goodsall').html('');
                var str = '';
                str += "<div class='all selectThings0' style='display:block;'>";
                for (var i = 0; i < data.data.length; i++) {
                        str += "<div class='selectHead'>";
                        str += "<div class='candy'>" + data.data[i].name + "</div>";
                        str += "</div>";
                        str += "<div class='selectLast'>";
                        for (var j = 0; j < data.data[i].children.length; j++) {
                            str += "<div class='lastList'>";
                            str += "<div class='sailList'><img src=" + data.data[i].children[j].image + "></div>";
                            str += "<a href='javascript:;'>" + data.data[i].children[j].name + "</a>";
                            str += "</div>";
                        }
                        str += "</div>";

                    str += "</div>";
                }
                $('.goodsall').html(str);
            }
        });

    })
}, 300);


//获取第三层商品分类 首次 商品分类列表
// $.ajax({
//     url: 'http://www.yindianmall.com/api/v2/mobile/goodscat/list/app/last.do',
//     dataType: 'jsonp',
//     data:{
//         secondCatId:''
//     },
//     success:function (data) {
//         console.log(data);
//     }
// });














