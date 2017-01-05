/**
 * Created by wy on 2016/12/10.
 */
var applySale=(function () {
    function  turnTo() {
        $('.quitGoods').tap(function () {
            window.location.href='./申请退款.html'
        });
        $('.onlyMoney').tap(function () {
            window.location.href='./仅退款.html'
        });

    }

    return{
        init:function(){
            turnTo();
        }
    }

})();
applySale.init();
