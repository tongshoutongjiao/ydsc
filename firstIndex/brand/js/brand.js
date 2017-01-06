/**
 * Created by ww on 2016/12/2.
 */
//轮播
var mySwiper = new Swiper('.swiper-container', {

    loop: true,

    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
});
var brand = (function () {
    var $body=$('body');

    //点击三个圆点出现小弹框.................................................
    function clickDot() {
        var flag = true;
        $('.more').tap(function () {
            //console.log(111);
            if (flag == true) {
                $('.brandList').css('display', 'block');
                return flag = false;
            } else {
                // console.log(222)
                $('.brandList').css("display", "none");
                flag = true;
            }
        });
    }

    //使详情页的基本信息和商品属性和商家承诺部分固定在基本信息页面的头部；
    function tie() {
        var $picWrapper = $('.picWrapper'),
            $detailMsg=$('.detailMsg'),
            $header=$('.header'),
            $lastIndex=$('.lastIndex');
        $picWrapper.css('height', document.documentElement.clientHeight - $header[0].offsetHeight - $detailMsg[0].clientHeight-$lastIndex[0].clientHeight);
        var myScroll = new IScroll('.picWrapper');
    }



    //点击商品详情评价使点击项有选中样式..........................................
    function switchItem() {
        var lis = $('.goods li');
        for (var i = 0; i < lis.length; i++) {
            //console.log(lis[i])
            lis[i].index = i;
            $(lis[i]).tap(function () {
                $(this).addClass('selected').siblings().removeClass('selected');
                $('section').css('display', 'none');
                $('section').get(this.index).style.display = 'block'
            })

        }
    }

    //点击购物车出现选择页面小动画,点击提交按钮关闭.........................................
    function cartFuc() {
        $('.myCart').tap(function () {
            setTimeout(function () {
                $('.selectcolsize').css('display', 'block')
                    .css('transition', 'all 2s')
                    .css('transform', 'translateY(-5rem)')
            }, 500);
        });
        $('section').tap(function () {
            setTimeout(function () {
                $('.selectcolsize').css('display', 'none')
                    .css('transition', 'all 1s')
                    .css('transform', 'translateY(5rem)')
            }, 500);
        });

        $('submit').tap(function () {
            setTimeout(function () {
                $('.selectcolsize').css('display', 'none')
                    .css('transition', 'all 1s')
                    .css('transform', 'translateY(5rem)')
            }, 500);
        });
    }

    //点击详情页对应下面的图
    function brandLis() {
        $('.basenews').tap(function () {
            $('.pic .one').css('display', 'block').siblings().css('display', 'none')
        });
        $('.goodsnature').tap(function () {
            $('.pic .two').css('display', 'block').siblings().css('display', 'none')
        });
        $('.promise').tap(function () {
            $('.pic .thr').css('display', 'block').siblings().css('display', 'none')
        });
    }

    //评价页对应页面。。。。。。。。。。。。。。。。。。。。。。
    function comment() {
        $('.discuss li').tap(function () {
            $(this).addClass('select').siblings().removeClass('select');
            //记录被点击的索引
            // console.log($(this).index());
            var index = $(this).index();

            // 遍历中评差评等对应的页面
            for (var i = 0; i < $('.arr').length; i++) {
                //   console.log( $('.arr').eq(index));
                $('.arr').eq(index).css('display', 'block').siblings().css('display', 'none')

            }
        });
    }



    /*发送ajax请求部分*/


    /*按照一定的规则从url地址中把相应的参数值获取到*/
    String.prototype.queryURLParameter=function(){
        var obj={},
            reg=/([^?=&#]+)=([^?=&#]+)/g;
        this.replace(reg,function(){
            var key=arguments[1],
                value=arguments[2];
            obj[key]=value;
        });
        return obj;
    };


    /*从url地址中获取到某个产品的id值，并将其传递给相应的函数*/
    function defaultMsg(){
        var Id=window.location.href.queryURLParameter()["id"];
        if(typeof Id==="undefined"){
            $body[0].style.display='none';
            alert('请返回上级页面选择商品');
            return;
        }
        //获取商品规格，默认，选取每一个规格的第一个值
        getRegular(Id);
        //获取商品规格，通过点击页面动态获取
        getPage(Id);
        // //获取商品(详情-基本信息)
        getBasic(Id);
        //获取商品(详情-商品属性)
        getBrandAttr(Id);

    }
    //获取商品规格，默认，选取每一个规格的第一个值
    function getRegular(goodsId) {
        $.ajax({
            url: 'http://www.yindianmall.com/api/v2/mobile/goods/spec/default.do',
            dataType: 'jsonp',
            data: {
                id: goodsId
            },
            success: function (data) {
                var str = '';
                str += "<p>已选</p>";
                str += "<p class='standard'>" + data.data.defaultSpec + "</p>";
                str += "<p>&gt</p>";
                $('.hasSelect').html(str)
            }
        });

    }

    //获取商品规格，通过点击页面动态获取
    function getPage(goodsId) {
        $.ajax({
            url: 'http://www.yindianmall.com/api/v2/mobile/goods/spec/app.do',
            dataType: 'jsonp',
            data: {
                id: goodsId
            },
            success: function (data) {
               var oCH=document.getElementById('contentHead');
                var str='';
                str+='<div class="swiper-container">';
                str+='<div class="brandImg swiper-wrapper">';
                str+='<img class="swiper-slide" src='+data.data.original+'>';
                str+='<img class="swiper-slide" src='+data.data.original+'>';
                str+='<img class="swiper-slide" src='+data.data.original+'>';
                str+='</div>';
                str+='</div>';
                str+='<p class="introduce">'+data.data.goodsName+'</p>';
                str+='<p class="price">￥<i>'+data.data.price+'</i></p>';
                str+='<span class="bianhao">编号：'+data.data.sn+'</span>';
                str+='<p class="stock">库存：</p>';
                str+='<p class="sailCount">销量:'+data.data.have_spec+'</p>';
                $(oCH).html(str);
            }
        });
    }


    //根据规格，数量确定规格显示
    function getCount() {
        $.ajax({
            url: 'http://www.yindianmall.com/api/v2/mobile/goods/spec/confirm.do',
            dataType: 'jsonp',
            data: {
                param: '1',
                num: '1'
            },
            success: function (data) {
               //  console.log(data);

            }
        });
    }

    //获取商品(具体信息)
   /* function getBrand() {
        $.ajax({
            url: 'http://www.yindianmall.com/api/v2/mobile/goods/details/get.do',
            dataType: 'jsonp',
            data: {
                id: 358
            },
            success: function (data) {
                // console.log(data);
                var str = '';
                for (var i = 0; i < data.data.gallery.length; i++) {
                    str += "<img class='swiper-slide' src=" + data.data.gallery[i].big + " />";
                }
                $('.brandImg').html(str);
                $('.introduce').html(data.data.goods.name);
                $('.price').html("<span>¥" + data.data.goods.mktprice + "</span>");
                $('.bianhao').html("编号:" + data.data.goods.sn + "");
            }
        });
    }*/
    //获取商品评价，根据评价等级
    function getComment() {
        $.ajax({
            url: 'http://www.yindianmall.com/api/v2/mobile/goods/comment/list.do',
            dataType: 'jsonp',
            data: {
                goodsId: 358,
                type: 1,
                grade: 5,
                pageNo: 1,
                pageSize: 10
            },
            success: function (data) {
             //   console.log(data);

            }
        });
    }
    //商品评价的初步获取，总数，好评率
    function commentRate() {
        $.ajax({
            url: 'http://www.yindianmall.com/api/v2/mobile/goods/comment/count/list.do',
            dataType: 'jsonp',
            data: {
                goodsId: 358,
                showlist: 5
            },
            success: function (data) {
             //   console.log(data);

            }
        });
    }

    // //获取商品(详情-基本信息)
    function getBasic(goodsId) {
        $.ajax({
            url: 'http://www.yindianmall.com/api/v2/mobile/goods/details/base/get.do',
            dataType: 'jsonp',
            data: {
                id: goodsId
            },
            success: function (data) {
                var str = data.data,
                    strContent='';
                    var reg=/([http]\w+(?::\/\/)[.|\w|/|\d]+)/g;
                    var listAry=str.match(reg);
                    for(var i=0;i<listAry.length;i++){
                        var curImg=listAry[i];
                        strContent += "<img class='changepic' src=" +curImg+ ">";
                    }
                $('.pic .one').html(strContent)
            }
        });
    }


    //获取商品(详情-商品属性)
    function getBrandAttr(goodsId) {
        $.ajax({
            url: 'http://www.yindianmall.com/api/v2/mobile/goods/attr-list.do',
            dataType: 'jsonp',
            data: {
                goodsid: goodsId
            },
            success: function (data) {
                console.log(data);
                var str = '';
                for (var i = 0; i < data.data.length; i++) {
                    str += "<p>" + data.data[i].attrName + ":" + data.data[i].attrValue + "</p>";

                }
                $('.pic .two').html(str)
            }
        });
    }
    return {
        init: function () {
            clickDot();
            switchItem();
            cartFuc();
            brandLis();
            comment();
      //      tie();

            /*ajax请求部分*/
            defaultMsg()
         //   getPage();
            getCount();
           /* getBrand();*/
            getComment();
            commentRate();
          //  getBasic();
         //   getBrandAttr()
        }
    }
})();
brand.init();





































