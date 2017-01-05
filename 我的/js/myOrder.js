/**
 * Created by Administrator on 2016/12/7.
 */
var myOrder=(function(){
    var pageW = document.documentElement.clientWidth;
    var $content=$('.content'),
        $container=$content.children('.container'),
        $contentList=$container.children('.contentList'),
        $Tip=$content.children('.tip'),
        $Li=$Tip.children('li'),
        $immediate=$('.immediate'),
        $checked=$('.check'),
        $applyFor=$('.applyFor'),
        $comment=$('.comment'),
        $plus=$('.plus');
    /*点击标题中的每一项，使该项有对应的选中样式*/
    function addStyle() {
        $Li.tap(function () {
          $(this).addClass('select').siblings().removeClass('select')
        })
    }
    /*点击立即支付，使其跳转到支付界面*/
    function turnPay() {
        $immediate.tap(function () {
         window.location.href='./支付界面.html'
        })
    }
    /*查看物流*/
    function check() {
        $checked.tap(function () {
            window.location.href='./物流跟踪.html'
        })
    }
    /*点击跳转到售后申请*/
    function  applySale() {
        $applyFor.tap(function () {
            window.location.href='./订单售后申请/售后申请.html'
        })

    }
    /*点击按钮，实现跳转到评价页面操作*/
    function  comment() {
        $comment.tap(function () {
            window.location.href='./评价.html'
        })
    }
    /*点击按钮，返回到上一级我的页面*/
    function backMine() {
        $plus.tap(function () {
            window.location.href='./我的.html'
        })
    }

    return{
        init:function () {
            addStyle();
            turnPay();
            check();
            applySale();
            comment();
            backMine();
        }
    }
})();
myOrder.init();


/*页面左右滑动效果，首先清除掉浏览器的默认事件*/
$(document).on('touchmove touchstart touchend',function(ev){
    ev.preventDefault();
});
/*左右运动效果*/
var bannerRender=(
    function(){

    var winW=document.documentElement.clientWidth,
        maxL= 0,
        minL= 0,
        followTimer=null;



    var $banner=$('.content'),
        $wrapper=$banner.children('.container'),
        $slideList=$wrapper.children('.contentList'),
        $tip=$banner.children('.tip'),
        $Li=$tip.children('li');
    var step= 1,
        count=0;
    /*public fn*/
    function isSwipe(strX,strY,endX,endY){
        return Math.abs(endX-strX)>0||Math.abs(endY-strY)>0
    }
    function swipeDir(strX,strY,endX,endY){
        return Math.abs(endX-strX)>=Math.abs(endY-strY)?(endX-strX>0?'right':'left'):(endY-strY>0?'down':'up');
    }
    //->TOUCH START
    function dragStart(ev){
        var point=ev.touches[0];
        $wrapper.attr({
            strL:parseFloat($wrapper.css('left')),
            strX:point.clientX,
            strY:point.clientY,
            isMove:false,
            dir:null,
            changeX:null
        });
    }
    //->TOUCH MOVE
    function dragIng(ev){
        var point=ev.touches[0];
        var endX=point.clientX,
            endY=point.clientY,
            strX=parseFloat($wrapper.attr('strX')),
            strY=parseFloat($wrapper.attr('strY')),
            strL=parseFloat($wrapper.attr('strL')),
            changeX=endX-strX;
        /*计算出是否滑动及滑动的方向,只有是左右滑动才进行处理*/
        var isMove=isSwipe(strX,strY,endX,endY),
            dir=swipeDir(strX,strY,endX,endY);
        if(isMove&&/(left)|(right)/i.test(dir)){
            $wrapper.attr({
                isMove:true,
                dir:dir,
                changeX:changeX
            });
            var curL=strL+changeX;
            curL=curL>maxL?maxL:(curL<minL?minL:curL);
            $wrapper[0].style.webkitTransitionDuration='0s';
            $wrapper.css('left',curL);
        }

    }
    //->TOUCH END
    function dragEnd(ev){
        var isMove=$wrapper.attr('isMove'),
            dir=$wrapper.attr('dir'),
            changeX=parseFloat($wrapper.attr('changeX'));
        if(isMove&&/(left)|(right)/i.test(dir)){
            if(Math.abs(changeX)>=winW/2){
                if(dir==='left'){
                    step++
                }else{
                    step--;
                }
            }
            $wrapper[0].style.webkitTransitionDuration='.2s';
            $wrapper.css('left',-step*winW);
            //    动画运动过程中，我们监听一个定时器：动画运动完成判断当前是否运动到达了边界，如果运动到达了边界，我们立马回到自己真实的位置
            window.clearTimeout(followTimer);
            followTimer=window.setTimeout(function(){
                if(step===0){
                    $wrapper[0].style.webkitTransitionDuration='0s';
                    $wrapper.css('left',-(count-2)*winW);
                    step=count-2;
                }
                if(step===count-1){
                    $wrapper[0].style.webkitTransitionDuration='0s';
                    $wrapper.css('left',-winW);
                    step=1;
                }
                window.clearTimeout(followTimer);
            },200);
        }
        autoLi();
    }
    function autoLi() {
        var step=step--;
        if(step===$Li.length){
            step=0;
            $Li.eq(step).addClass('select').siblings().removeClass('select');
        }else {
            if(step===-1){
                step=$Li.length;
                $Li.eq(step).addClass('select').siblings().removeClass('select');
            }
        }
        $Li.eq(step).addClass('select').siblings().removeClass('select');
    }
    function move() {
        $Li.tap(function () {
            var stepLi=$(this).index();
             stepLi++;
            console.log(stepLi);
            $wrapper[0].style.webkitTransitionDuration='.2s';
            $wrapper.css('left',-stepLi*winW);
            //    动画运动过程中，我们监听一个定时器：动画运动完成判断当前是否运动到达了边界，如果运动到达了边界，我们立马回到自                 己真实的位置
            window.clearTimeout(followTimer);
            followTimer=window.setTimeout(function(){
                if(stepLi===0){
                    $wrapper[0].style.webkitTransitionDuration='0s';
                    $wrapper.css('left',-(count-2)*winW);
                    stepLi=count-2;
                }
                if(stepLi===count-1){
                    $wrapper[0].style.webkitTransitionDuration='0s';
                    $wrapper.css('left',-winW);
                    stepLi=1;
                }
                window.clearTimeout(followTimer);
            },200);

        })
    }
    return{
        init:function(){
            count=$slideList.length;
            minL=-(count-1)*winW;
            $wrapper.css('width',count*winW);
            $slideList.css('width',winW);
            $banner.on('touchstart',dragStart).on('touchmove',dragIng).on('touchend',dragEnd);
            move();
        }
    }

})();
bannerRender.init();




