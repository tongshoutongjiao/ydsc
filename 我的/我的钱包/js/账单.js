/**
 * Created by wy on 2016/12/15.
 */
var order=(function () {
    var $listZ=$('.listZ'),
        $chinabank=$('.chinaBank'),
        $shop=$('.shopping');

    /*点击跳转账单详情页面*/
    function turn () {
        $listZ.tap(function () {
            window.location.href='./账单详情.html'
        })
    }
    /*点击跳转提现进度页面*/
    function bank() {
        $chinabank.tap(function () {
            window.location.href='./提现进度.html'
        })
    }
    /*点击跳转购物支出页面*/
    function shopping() {
        $shop.tap(function () {
            window.location.href='./购物支出.html'
        })

    }

    return{
        init:function(){
            turn();
            bank();
            shopping();

        }
    }

})();
order.init();