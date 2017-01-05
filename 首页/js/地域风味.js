/**
 * Created by wy on 2016/12/16.
 */
//各个馆的左右滑动效果实现
var list = document.getElementsByTagName('ul')[0];
var lis = list.getElementsByTagName('li');
var fs = document.querySelector('html').getBoundingClientRect().width / 18;

var listW = lis.length * (Math.ceil(lis[0].offsetWidth) + Math.ceil(0.5*fs) );
list.style.width = Math.ceil(listW) + 'px';
var maxX = list.offsetWidth - document.body.offsetWidth;
var startX;
var _x;
list.addEventListener('touchstart', function (e) {
    startX = e.changedTouches[0].pageX;
    _x = css(this, 'translateX');
}, false);
list.addEventListener('touchmove', function (e) {
    var moveX = e.changedTouches[0].pageX;
    var disX = moveX - startX + _x;
    if (Math.abs(css(this, 'translateX')) > maxX) {
        return
    }
    if (css(this, 'translateX') > 0) {
        return
    }
    css(this, 'translateX', disX);
}, false);
list.addEventListener('touchend', function (e) {
    startX = e.changedTouches[0].pageX;
    if (Math.abs(css(list, 'translateX')) > maxX) {
        css(list, 'translateX', -maxX)
    }
    if (css(this, 'translateX') > 0) {
        css(list, 'translateX', 0)
    }
}, false);



//点击各个馆对应页面
//1、点击馆颜色改变
lis = $('.house li');
lis.tap(function () {
    $(this).addClass('select').siblings().removeClass('select');
    //找到点击的索引
    //  console.log( $('.house').find('.select').index());
    var index = $('.house').find('.select').index();
    //索引判断对应的馆切换
    ///console.log($('section ul').eq(index));
    //对应的馆相应切换
    $('section ul').eq(index).show().siblings().hide();
});


//分别左右滑动下面产品，上面的馆也相应改变的实现
//左滑
$('section').swipeLeft(function () {
    //点击左滑获取上面馆的li，li做相应改变
    //console.log($('.house').find('.select').next().addClass('select'));
    indexnum= $('.house').find('.select').index();
    //console.log(indexnum);
    $('.house').find('.select').removeClass('select');
    $('.house li').eq(indexnum+1).addClass('select');
    //对应section里面ul相应改变
    $('section ul').css('display','none');
    $('section ul').eq(indexnum+1).css('display','block');
    if(indexnum==$('.house li').length-1){
        //达到最大索引时默认划不动
        $('.house li').eq(indexnum).addClass('select');
        $('section ul').css('display','none');
        $('section ul').eq(indexnum).css('display','block');
    }
});

//右滑
$('section ul').swipeRight(function () {
    //点击左滑获取上面馆的li，li做相应改变
    //console.log($('.house').find('.select').prev().addClass('select'));
    indexnum= $('.house').find('.select').index();
    //console.log(indexnum);
    $('.house').find('.select').removeClass('select');
    $('.house li').eq(indexnum-1).addClass('select');
    //对应section里面ul相应改变
    $('section ul').css('display','none');
    $('section ul').eq(indexnum-1).css('display','block');

});
/*点击返回按钮，使其返回首页*/
(function () {
    var $cancel=$('.cancel');
    $cancel.tap(function () {
        window.location.href='./index.html'
    })
})();









