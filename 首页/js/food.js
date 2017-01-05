/**
 * Created by wy on 2016/12/16.
 */
/**
 * Created by wy on 2016/11/25.
 */

window.onload=function () {
    //点击综合销量价格下面页面切换
    lis=$('.tabli li');
    lis.tap(function () {
        $(this).addClass('selected').siblings().removeClass('selected')
    });



    //点击小三角旋转
    var count=180;
    $('.xsjtwo').tap(function () {
        this.style.transform="rotate("+count+"deg)";
        return count+=180;
    });


    //酒水饮料休闲食品冲饮品那行点击对应页面
    //1、获取li的样式及对应得页面
    $('.divide li').tap(function () {
        var i=$(this).index();
        $(this).addClass('select').siblings().removeClass('select');
        // console.log($(this).index());获取索引

        $('.specific').eq(i).css('display','block').siblings().css('display','none')


    });







    //2、实现li的左右滑动
    var list = document.querySelector('.divide');
    var lis = list.getElementsByTagName('li');

    list.style.width = lis.length * lis[0].offsetWidth + 'px';
    var maxX = list.offsetWidth - document.body.offsetWidth;
    var startX;
    var _x;
    list.addEventListener('touchstart',function(e){
        startX = e.changedTouches[0].pageX;
        _x = css(this, 'translateX');
    },false);
    list.addEventListener('touchmove',function(e){
        var moveX = e.changedTouches[0].pageX;
        var disX = moveX - startX + _x;
        if(Math.abs(css(this, 'translateX')) > maxX) {
            return
        }
        if(css(this, 'translateX') > 0) {
            return
        }
        css(this, 'translateX',disX) ;
    },false);
    list.addEventListener('touchend',function(e){
        startX = e.changedTouches[0].pageX;
        if(Math.abs(css(list, 'translateX')) > maxX) {
            css(list, 'translateX',-maxX)
        }
        if(css(this, 'translateX') > 0) {
            css(list, 'translateX',0)
        }
    },false)

};

