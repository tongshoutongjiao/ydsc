/**
 * Created by ww on 2016/12/1.
 */
var editAddress=(function () {
    var $switch=$('.Default .circle'),
        $delete=$('.delete'),
        $save=$('.save');

    //点击按钮打开开关
    function makeChange() {
        var flag = true;
        $switch.tap(function () {
            if (flag == true) {
                $(this).css('right', '.23rem');
                $(this).prev().addClass('select');
                return flag = false;

            } else {
                $(this).css('right', '.62rem');
                $(this).prev().removeClass('select');
                return flag=true;
            }
        });

    }
    function rmv() {
        $delete.tap(function () {
            $(this).parent().children('input')[0].value='';
        })
    }
    /*点击保存按钮*/
    function save() {
    $save.tap(function () {
        window.location.href='./我的地址薄.html'
    })
    }
    return{
        init:function () {
            makeChange();
            rmv();
            save();
        }
    }

})();
editAddress.init();





