/**
 * Created by wy on 2016/12/13.
 */
var myMoney=(function () {
    $cash=$('.cash'),
        $editor=$('.editor'),
        $recharge=$('.recharge'),
        $value=$('.value'),
        $story=$('.history');
    function turn() {
        $cash.tap(function () {
            window.location.href='./申请提现.html'
        });
    }
    function bill() {
        $editor.tap(function () {
            window.location.href='./账单.html'
        })
    }
    function  recharge() {
        $recharge.tap(function () {
            window.location.href='./余额充值.html'
        })
    }
    function recharge() {
        $value.tap(function () {
            window.location.href='./余额充值.html'
        })
    }
    function  history() {
        $story.tap(function () {
            window.location.href='./历史收入.html';
            console.log(1245789)
        })

    }

    return{
        init:function () {
            turn();
            bill();
            recharge();
            history();
        }
    }

})();
myMoney.init();
