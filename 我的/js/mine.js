/**
 * Created by wy on 2016/12/16.
 */
/**
 * Created by wy on 2016/12/5.
 */
var mine=(function () {

    var $header=$('.header'),
        $h2=$header.children('h2'),
        $count=$header.find('.countMsg'),
        $setter=$header.children('.setter'),
        $news=$header.children('.news'),
        $myOrder=$header.children('.myOrder'),
        $content=$('.content'),
        $clear=$content.children('.clear'),
        $clearLi=$clear.find('.clearLi'),
        $myWallet=$('.myWallet'),
        $thisCollect=$('.thisCollect'),
        $recommmendShare=$('.recommmendShare'),
        $outShare=$('.outShare'),
        $main=$('.main'),
        $feedBack=$('.feedBack'),
        $apply=$myWallet.children('.apply');
    function myWallet() {
        var $wallet=$myWallet.children('.wallet'),
            $address=$myWallet.children('.address'),
            $team=$myWallet.children('.team'),
            $comment=$myWallet.children('.comment'),
            $apply=$myWallet.children('.apply');
        $wallet.tap(function () {
            window.location.href='./我的钱包/我的钱包.html'
        });
        $address.tap(function () {
            window.location.href='./我的地址薄.html'
        });
        $team.tap(function () {
            window.location.href='./我的团队/我的团队新版.html'
        });
        $comment.tap(function () {
            window.location.href='./我的评价.html'
        });
        $apply.tap(function () {
            window.location.href='./我的售后/mySale.html';
        });

    }
    function  setMsg() {
        $setter.tap(function () {
            window.location.href='./设置页面android.html'
        })

    }
    function myMessage(msg) {
        msg.tap(function () {
            window.location.href='./个人资料设置.html'
        })
    }
    function  news() {
        $news.tap(function () {
            window.location.href='./系统消息.html'
        })

    }
    function turnTo(val) {
        val.tap(function () {
            window.location.href='./我的订单.html'
        })
    }
    function Collect() {
        $thisCollect.tap(function () {
            window.location.href='./mystore.html'
        })


    }
    function share() {
        var flag=true;
        $recommmendShare.tap(function (event) {
            event.stopPropagation();
            if(flag){
                $header.css('opacity','0.5');
                $main.css('opacity','0.5');
                $main.css('opacity','0.5');
                setTimeout(function () {
                    $outShare.css('display', 'block')
                        .css('transition', 'all 1s')
                        .css('transform', 'translateY(-3rem)')
                }, 500);
                return flag=false;
            }else{
                $outShare.css('display', 'none');
                $header.css('opacity','1');
                $main.css('opacity', '1');
                setTimeout(function () {
                    $outShare.css('display', 'none')
                        .css('transition', 'all 1s')
                        .css('transform', 'translateY(3rem)')
                }, 500);
                return flag = true;
            }
        })
    }
    function clearEvent() {
        $('section').tap(function () {
            $outShare.hide();
            $main.css('opacity', '1');
        })}
    function  feedBack() {
        $feedBack.tap(function(){
            window.location.href='./帮助反馈.html'
        })
    }
    //点击在线客服实现跳转
    function service() {
        $('#custom').tap(function () {
            window.location.href='onlineCustom.html'
        });
    }

    return{
        init:function () {
            myMessage($h2);
            myMessage($count);
            setMsg();
            news();
            turnTo($clearLi);
            turnTo($myOrder);
            myWallet();
            Collect();
            share();
            clearEvent();
            feedBack();
            service();
        }
    }


})();
mine.init();
