/**
 * Created by ww on 2016/12/10.
 */
//点击分享出现几个分享按钮
$(".share").tap(function () {
    setTimeout(function () {
        $('.takeshare').css('display','block')
            .css('bottom','0');
    },400)
});