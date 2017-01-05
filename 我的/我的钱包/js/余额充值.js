/**
 * Created by wy on 2016/12/15.
 */
var utils=(function () {
    var $select=$('.select'),
        $agree=$('.agree'),
        $value=$('.value'),
        $footer=$('.foot'),
        $bomb=$('.bomb'),
        $sure=$('.sure');



    /*点击选择支付的方式*/
    function pay() {
        $select.tap(function () {
            for(var i=0;i<$select.length;i++){
                $select.eq(i).removeClass('mark')
            }
            $(this).addClass('mark');

        })
    }
    /*点击同意商城规则条款*/
    function agree() {
        var flag=true;
        var $a=$agree.children('i');
        $a.tap(function () {
            console.log(12456);
            if(flag===true){
                $(this).addClass('icon');
                return flag=false;
            }else{
                $(this).removeClass('icon');
                return flag=true;
            }

        });
    }
    /*点击充值 实现的操作*/
    function reCharge() {
         $footer.flag=true
        $footer.tap(function () {
                $bomb.css('display','block');
                return $footer.flag=false;
        })
    }
    /*点击页面其他部分，取消弹框*/
    function clearBomb() {
        $bomb.tap(function () {
            if($footer.flag===false){
                $(this).css('display','none');
                return $footer.flag=true;
            }
        })
    }
    /*点击确定按钮，跳转页面到账单详情页*/
    function sure() {
        $sure.tap(function (e) {
            e.preventDefault();
            window.location.href='./账单详情.html'
        })
    }
    /*点击按钮*/
    return{
        init:function(){
            pay();
            agree();
            reCharge();
            clearBomb();
            sure();

        }
    }

})();
utils.init();
