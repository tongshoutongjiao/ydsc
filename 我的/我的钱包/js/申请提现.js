/**
 * Created by wy on 2016/12/13.
 */
var cash=(function () {
    var $chooseBank=$('.chooseBank'),
        $foot=$('footer');
    function turnTo() {
        $chooseBank.tap(function () {
            window.location.href='./bank.html'
        })
    }
    /*点击申请提现按钮，页面跳转到提交成功界面*/
    function cash () {
        $foot.tap(function () {
            window.location.href='./提交成功.html'
        })
    }
    return{
        init:function () {
            turnTo();
            cash();
        }
    }
})();
cash.init();
