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
//轮播图1效果
var swiperOne= new Swiper('.test .swiper-container',{
    loop:true,
    observer:true,
    autoplay:3000,
    autoplayDisableOnInteraction:false,
    pagination:'.swiper-pagination',
    passiveListeners: false
});
//轮播图2效果
var swiperTwo= new Swiper('.timeShopping .swiper-container',{
    loop:true,
    autoplay:3000,
    autoplayDisableOnInteraction:false,
    lazyLoading:true,
    lazyLoadingInPrevNext:true,
    passiveListeners: false
});
var utils=(function () {
    var $listHead=$('.listHead');
    var $backTop=$('.backTop');
    /*倒计时效果*/
    function countDown(){
        var count=document.getElementById('count');
        var timer=setInterval(function(){
            formatTime();
        },1000);
        // console.log(formatTime());
        function formatTime(){
            var curtime=new Date(),
                curSpan=curtime.getTime();
            var tarTime=new Date("2017/01/01 00:00:00"),
                tarSpan=tarTime.getTime();
            var differTime=tarSpan-curSpan;
            var h=Math.floor(differTime/(1000*60*60)),
                spanH=differTime-h*(1000*60*60);
            var min=Math.floor(spanH/(1000*60)),
                spanMin=spanH -min*(1000*60);
            var sec=Math.floor(spanMin/1000);
            count.innerHTML=zero(h)+':'+zero(min)+':'+zero(sec);
        }
        function zero(val){
            return val<10?'0'+val:val;
        }

    }
    /*选项卡效果*/
    function listHead() {
        $listHead.tap(function () {
         $(this).addClass('select').siblings().removeClass('select');
         });
    }

    //各个专区的左右滑动
    function slidLeft() {
        var list = document.getElementById('swiperList');
        var lis = list.getElementsByTagName('li');

        list.style.width = lis.length * lis[0].offsetWidth + 'px';
        var maxX = list.offsetWidth - document.body.offsetWidth;
        var startX;
        var _x;
        list.addEventListener('touchstart',function(e){
            startX = e.changedTouches[0].pageX;
            _x = css(this, 'translateX');
        },false)
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
        },false);
    }
    /*吃货专区*/
    function eatSpeal() {
        var $eatSpec=$('#eatSpec'),
            $Li=$eatSpec.find('li');
        $Li.tap(function () {
            var $a=$(this).find('a').html();
            window.location.href='./'+$a+'.html';
        });
        
    }
    /*精品专区*/
    function products() {
        var $subContent=$('#subContent'),
            $subLi=$subContent.children('li');
        $subLi.tap(function () {
            window.location.href='./精选专题.html'
        });
        
    }
    /*查看更多*/
    function more() {
        var $fruitHead=$('.fruitHead'),
            $a=$fruitHead.children('a');
        $a.tap(function () {
            window.location.href='./classDetail.html';
        })
    }
    /*地域风情*/
    function regional() {
        var $specific=$('.specific'),
            $RegionalList=$specific.children('.RegionalList'),
            $Li=$RegionalList.children('li');
        $Li.tap(function () {
            window.location.href='./地域风味.html'
        })
    }
    /*回到顶部*/
    function backTop() {
        $backTop.tap(function(){
            myScroll.scrollTo(0,0)
        })
    }

    //精选专题上面一行各个馆的左右滑动
    function selected() {
        var RegionalList = document.getElementById('RegionalList');
        var liss = RegionalList.getElementsByTagName('li');
        RegionalList.style.width = liss.length * liss[0].offsetWidth + 'px';
        var maxX = RegionalList.offsetWidth - document.body.offsetWidth-document.body.offsetWidth/8;
        var startX;
        var _x;
        RegionalList.addEventListener('touchstart',function(e){
            startX = e.changedTouches[0].pageX;
            _x = css(this, 'translateX');
        },false);
        RegionalList.addEventListener('touchmove',function(e){
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
        RegionalList.addEventListener('touchend',function(e){
            startX = e.changedTouches[0].pageX;
            if(Math.abs(css(RegionalList, 'translateX')) > maxX) {
                css(RegionalList, 'translateX',-maxX)
            }
            if(css(this, 'translateX') > 0) {
                css(RegionalList, 'translateX',0)
            }
        },false);


    }


    /*双击轮播图区域，跳转到商品详情页*/
    function brandList() {
        var $brandList=$('.brandList');
        $brandList.doubleTap(function () {
            window.location.href='./brand/brandList.html'
        });
    }

    return{
        init:function () {
            countDown();
            slidLeft();
            products();
            more();
            regional();
            selected();
          //  backTop();
            brandList();
            listHead();
        }
    }
})();

utils.init();




































































