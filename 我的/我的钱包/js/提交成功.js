/**
 * Created by wy on 2016/12/15.
 */
var utils=(function () {
    var $progress=$('.progress');
    function progress() {
        $progress.tap(function () {
            window.location.href='./提现进度.html';
        })

    }
    return{
        init:function () {
            progress();
        }
    }

})();
utils.init();