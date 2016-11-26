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
//计算contenter区域的高度，实现局部滚动，首先把做外层容器的高度设定好。
var swiper1=new Swiper('.swiper-container',{
    loop:true,
    autoplay:3000,
    autoplayDisableOnInteraction:false,
    pagination:'.swiper-pagination',
    lazyLoading:true,
    lazyLoadingInPrevNext:true
});
function bannerRender1(idName) {
    var winW=document.documentElement.clientWidth;
    var  $timeList=$(idName);

    var  $listPro=$timeList.children('.listPro'),
        $listImage=$listPro.children('img'),
        step=1,
        minL=0,
        maxL=0;
    //public fn
    console.log($listPro);
    var oSearch=document.getElementById('search');
    oSearch.onfocus=function () {
        window.location.href='./search.html';
    };

    function isSwipe(strX,strY,endX,endY) {
        return Math.abs(endX-strX)||Math.abs(endY-strY);
    }
    function swipeDir(strX,strY,endX,endY) {
        return Math.abs(endX-strX)>=Math.abs(endY-strY)?(endX-strX>0?'right':'left'):(endY-strY>0?'down':'up');
    }
    //touch start
    function dragStart(ev) {
        var point=ev.touches[0];
        $listPro.attr({
            strL:parseFloat($listPro.css('left')),
            strX:point.clientX,
            strY:point.clientY,
            isMove:false,
            dir:null,
            changeX:null
        });
    }
    //touch move
    function dragIng(ev) {
        var point=ev.touches[0];
        var endX=point.clientX,
            endY=point.clientY,
            strX=parseFloat($listPro.attr('strX')),
            strY=parseFloat($listPro.attr('strY')),
            strL=parseFloat($listPro.attr('strL')),
            changeX=endX-strX;
        /*计算出是否滑动及滑动的方向,只有是左右滑动才进行处理*/
        var isMove=isSwipe(strX,strY,endX,endY),
            dir=swipeDir(strX,strY,endX,endY);
        if(isMove&& /(left|right)/i.test(dir)){
            $listPro.attr({
                isMove:true,
                dir:dir,
                changeX:changeX
            });
            var curL=strL+changeX;
            curL=curL>maxL?maxL:(curL<minL?minL:curL);
            $timeList.css('left',curL);
        }
    }
    //touch end
    function dragEnd(ev) {

    }
    function lazyImg() {
        var $cur=$listPro.eq(step);
        var $tar=$cur.add($cur.prev()).add($cur.next());
        $tar.each(function (index,item) {
            var $img=$(item).find('img');
            if($img.attr('isload')==='true'){
                return;
            }
            var oImg=new Image;
            oImg.src=$img.attr('data-src');
            oImg.onload=function () {
                $img.attr({src:this.src,
                    isLoad:true
                }).css('display','block');
                oImg=null;
            }
        })

    }
    function  lazy() {
        var $timeList=$('.listPicture'),
            $listPro=$timeList.children('a'),
            $listImage=$listPro.children('img'),
            step=1,
            minL=0,
            maxL=0;
        var $cur=$listPro.eq(1);
        var $tar=$cur.add($cur.prev()).add($cur.next());
        $tar.each(function (index,item) {
            var $img=$(item).find('img');
            if($img.attr('isload')==='true'){
                return;
            }
            var oImg=new Image;
            oImg.src=$img.attr('data-src');
            oImg.onload=function () {
                $img.attr({src:this.src,
                    isLoad:true
                }).css('display','block');
                oImg=null;
            }
        })
    }
    var $more=$('.more');
    $more.on('tap',function () {
        minL=-($listPro.length-3)*winW/3;
        lazyImg();
        lazy();
        $timeList.on('touchstart',dragStart).on('touchmove',dragIng).on('touchend',dragEnd);
    });
    function init(){
        minL=-($listPro.length-3)*winW/3;
        lazyImg();
        lazy();
        $timeList.on('touchstart',dragStart).on('touchmove',dragIng).on('touchend',dragEnd);
    }
    init();
};
/*
bannerRender1(timeList1);
bannerRender1(listPicture);
bannerRender1(timeList2);
bannerRender1(timeList3);
bannerRender1(timeList4);
var bannerRender5=(
    function () {
        var winW=document.documentElement.clientWidth,

            $timeList=$('.listPicture'),
            $listPro=$timeList.children('a'),
            $listImage=$listPro.children('img'),
            step=1,
            minL=0,
            maxL=0;
        function isSwipe(strX,strY,endX,endY) {
            return Math.abs(endX-strX)||Math.abs(endY-strY);
        }
        function swipeDir(strX,strY,endX,endY) {
            return Math.abs(endX-strX)>=Math.abs(endY-strY)?(endX-strX>0?'right':'left'):(endY-strY>0?'down':'up');
        }
        //touch start
        function dragStart(ev) {
            var point=ev.touches[0];
            $listPro.attr({
                strL:parseFloat($listPro.css('left')),
                strX:point.clientX,
                strY:point.clientY,
                isMove:false,
                dir:null,
                changeX:null
            });
        }
        //touch move
        function dragIng(ev) {
            var point=ev.touches[0];
            var endX=point.clientX,
                endY=point.clientY,
                strX=parseFloat($listPro.attr('strX')),
                strY=parseFloat($listPro.attr('strY')),
                strL=parseFloat($listPro.attr('strL')),
                changeX=endX-strX;
            //  console.log(strL);
            /!*计算出是否滑动及滑动的方向,只有是左右滑动才进行处理*!/
            var isMove=isSwipe(strX,strY,endX,endY),
                dir=swipeDir(strX,strY,endX,endY);
            if(isMove&& /(left|right)/i.test(dir)){
                $listPro.attr({
                    isMove:true,
                    dir:dir,
                    changeX:changeX
                });
                var curL=strL+changeX;

                curL=curL>maxL?maxL:(curL<minL?minL:curL);
                $timeList.css('left',curL);
            }
        }
        //touch end
        function dragEnd(ev) {

        }
        function lazyImg() {
            var $cur=$listPro.eq(step);
            var $tar=$cur.add($cur.prev()).add($cur.next());
            $tar.each(function (index,item) {
                var $img=$(item).find('img');
                if($img.attr('isload')==='true'){
                    return;
                }
                var oImg=new Image;
                oImg.src=$img.attr('data-src');
                oImg.onload=function () {
                    $img.attr({src:this.src,
                        isLoad:true
                    }).css('display','block');
                    oImg=null;
                }
            })

        }
        function  lazy() {
            var $timeList=$('.listPicture'),
                $listPro=$timeList.children('a'),
                $listImage=$listPro.children('img'),
                step=1,
                minL=0,
                maxL=0;
            var $cur=$listPro.eq(1);
            var $tar=$cur.add($cur.prev()).add($cur.next());
            $tar.each(function (index,item) {
                var $img=$(item).find('img');
                if($img.attr('isload')==='true'){
                    return;
                }
                var oImg=new Image;
                oImg.src=$img.attr('data-src');
                oImg.onload=function () {
                    $img.attr({src:this.src,
                        isLoad:true
                    }).css('display','block');
                    oImg=null;
                }
            })
        }
        return {
            init:function () {
                minL=-($listPro.length-3)*winW/3;
                lazyImg();
                $timeList.on('touchstart',dragStart).on('touchmove',dragIng).on('touchend',dragEnd);
            }
        }
    })();
bannerRender5.init();
*/







