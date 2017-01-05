/**
 * Created by ww on 2016/12/13.
 */
//点击电话时候原号码消失可以重新输入号码....................
$('#telnum').get(0).addEventListener('touchend', function () {
    $(this).css('display', 'none');
    $('#phnum').css('display', 'block').css('border', '0');
});
//点击姓名时候原姓名消失可以重新输入......................
$('.oldname').get(0).addEventListener('touchend', function () {
    $(this).css('display', 'none');
    $('#username').css('display', 'block').css('border', '0');
});

//记录弹出框性别选择被点击的是哪个......................
$('#labelone').click(function () {
    flag = 0;
    console.log(flag);
    // $('.sexshadow').css('display', 'none');
    $('.part1-r').html('<span style="color: #fc3e32;" class="sexch">♀</span><span>女孩</span>')
});
$('#labeltwo').click(function () {
    flag = 1;
    // $('.sexshadow').css('display', 'none');
    console.log(flag);
    $('.part1-r').html('<span style="color: #fc3e32;" class="sexch">♂</span><span>男孩</span>')

});
//点击性别右边出现弹框选择sex....................
$('.part1-r').click(function () {
    $('.sexshadow').css('display', 'block').css('opacity','.8');

});
//点击页面 其他部分 弹框消失...............
$('.sexshadow').click(function () {
    $(this).css('display', 'none');
})




//点击地址出现省市三级选择..................
$('.peopleaddress').click(function () {
    $('.iphone').css('display', 'block');
    $('.main').css('opacity', '.2');
    // 显示文字在插件area里面已标注
});



//点击老邮箱消失添加新邮箱.................
$('#oldemail').click(function () {
    $(this).css('display','none');
    $('#newemail').css('display','block')
});

//点击老签名消失添加新签名...................
$('#oldsignname').click(function () {
    $(this).css('display','none');
    $('#newsignname').css('display','block')
});



//点击修改按钮跳转页面......................
$(".passWord").click(function () {
    window.location.href='changecode.html'
});



//点击左上角跳转页面
$(".greater").click(function () {
    window.location.href='../个人资料设置.html'
});







