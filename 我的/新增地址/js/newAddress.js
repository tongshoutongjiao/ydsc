/**
 * Created by wy on 2016/12/10.
 */
var newAddress=(function () {
    var $delete=$('.delete'),
        $switch=$('.switch'),
        $save=$('.save');

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
    function rmv(){
        $delete.tap(function () {
            $(this).parent().children('input')[0].value='';
        })
    }
    function  save() {
        $save.tap(function () {
            window.location.href='../我的地址薄.html'
        })
    }
    return {
      init:function () {
          makeChange();
          rmv();
          save();
      }
    }
    
    
})();
newAddress.init();
