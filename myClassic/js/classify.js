/**
 * Created by ww on 2016/12/2.
 */

var classic=(function () {
        //点击左侧栏切换对应右侧页面
    function leftBar() {
        window.onload = function () {
            var lis = $('.goodsclassify li');
           lis.eq(0).addClass('selected');
           var defaultId=lis.eq(0).attr('cat_id');
           getClickEvent(defaultId);
            for (var i = 0; i < lis.length; i++) {
                lis[i].index = i;
                $(lis[i]).tap(function () {
                    //点击左侧时颜色改变
                    $(this).addClass('selected').siblings().removeClass('selected');
                    var carId=$(this).attr('cat_id');
                    getClickEvent(carId)
                });
            }
        };
    }
    function searchFunc() {
        //点击分类页搜索部分网页跳转search
        var $search = $('.search');
        $search.tap(function () {
            window.location.href = '../../firstIndex/search.html'
        });
    }
    //点击相应的分类商品，通过它的id值跳转到相应的分类详情页面
    function clickClass() {
             var  $lastList=$('.lastList');
             console.log($lastList);
        $lastList.tap(function () {
            console.log(123456);
            var id=$(this).attr('catid');
            console.log(id);
            window.location.href='./classDetail.html?id='+2;
        })
    }
    /*ajax功能代码的实现*/
    function getClickEvent(carId) {
        $.ajax({
                    url: 'http://www.yindianmall.com/api/v2/mobile/goodscat/list/app/catId.do',
                    dataType: 'jsonp',
                    data: {
                        catId: carId
                    },
                    success: function (data) {
                        $('.goodsall').html('');
                        var str = '';
                        str += "<div class='all selectThings0' style='display:block;'>";
                        for (var i = 0; i < data.data.length; i++) {
                            str += "<div class='selectHead'>";
                            str += "<div class='candy'>" + data.data[i].name + "</div>";
                            str += "</div>";
                            str += "<div class='selectLast'>";
                            for (var j = 0; j < data.data[i].children.length; j++) {
                                str += "<div class='lastList' catId="+data.data[i].children[j].cat_id+">";
                                str += "<div class='sailList'><img src=" + data.data[i].children[j].image + "></div>";
                                str += "<a href='javascript:;'>" + data.data[i].children[j].name + "</a>";
                                str += "</div>";
                            }
                            str += "</div>";
                            str += "</div>";
                        }
                        $('.goodsall').html(str);
                        clickClass();


                    }
                });
    }
    //获取第一个主类别的商品分类列表
    function getList() {
        //获取第一个主类别的商品分类列表
        $.ajax({
            url:'http://www.yindianmall.com/api/v2/mobile/goodscat/list/app/first.do',
            dataType: 'jsonp',
            success: function (data) {
                var str = '';
                for (var i = 0; i < data.data.length; i++) {
                    str += "<li class='allClassify' cat_id=" + data.data[i].cat_id + ">" + data.data[i].name + "</li>";
                }
                $('.goodsclassify').html(str);
            }
        });
    }
    return{
        init:function(){
            leftBar();
            searchFunc();
            getList();
          }
    }
})();

classic.init();
















