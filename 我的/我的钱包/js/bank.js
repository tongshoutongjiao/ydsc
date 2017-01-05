/**
 * Created by wy on 2016/12/13.
 */
var choose=(function () {
    var $bankType=$('.bankType'),
        $mark=$('.mark'),
        $sure=$('.sure'),
        $tip=$('.tip');


/*点击选择银行*/
    function chooseBank() {
            $bankType.tap(function () {

                    $tip.css('display','none');
                    for(var i=0;i<$bankType.length;i++){
                        $($bankType[i]).find('.mark').css('display','none');
                    };
                    $(this).find('.mark').css('display','block')
            })


    }

/*点击确定，返回页面*/
    function forSure() {
         $tip.flag=true;
        $sure.tap(function () {
            if($tip.flag===true){
                for(var i=0;i<$bankType.length;i++){
                    if($($bankType[i]).find('.mark').css('display')==='block'){
                        window.location.href='./申请提现.html';
                        break;
                    }else{
                        if(i===$bankType.length-1){
                            $tip.animate( {
                                left: '2.9rem',
                                display:'block',
                                translate3d: '0,4px,0'},500,'linear'
                            );
                            return $tip.flag=false;
                        }
                    }
                }
            }
            else{
              /*  $tip.css('display','none');*/
                return $tip.flag=true;
            }
        })
    }
    return {
        init:function () {
            chooseBank();
            forSure();
        }
    }

})();
choose.init();
