/**
 * Created by wy on 2016/11/30.
 */
//计算总共的钱
var cartJs = (function () {
    var $mark = $('.mark'),
        $markStore = $('.markStore'),
        $allSelect = $('.allSelect');
        $icon = $allSelect.children('.icon'),
        $add = $('.add'),
        $plus = $('.plus'),
        $editor = $('.editor'),
        $show = $('.show'),
        $standard = $('.standard'),
        $main = $('.main');
        $bounced = $('.bounced'),
        $part = $('.part'),
        $delete=$('.delete');
    /*点击相应的选择框，改变选择框中商品为选中状态*/
    function brand(className) {
        className.tap(function () {
            var $null = $(this).find('.null'),
                flag = $(this).find('.null').css('display');
            if(flag==='none'){
                $null.show();
            }else{
                $null.hide()
            }
            goodsnum();
            addmoney();
        });

    };
    /*点击店铺的按钮，选择该店，并同时选择店里面的所有的产品*/
    function brandStore(className) {
        var flag = 'none';
        className.tap(function () {
            var sib = $(this).parent().parent().find('.listContent').find('.mark');
            flag = $(this).children('.null').css('display');
            if (flag == 'block') {
                for (var i = 0; i < sib.length; i++) {
                    (function (i) {
                        var $null = $(sib[i]).children('.null');
                        $null.show();
                    })(i)
                }
                return flag = 'none';
            } else {
                for (i = 0; i < sib.length; i++) {
                    (function (i) {
                        var $null = $(sib[i]).children('.null');
                        $null.hide();

                    })(i)
                }
            };
            goodsnum();
            addmoney();

           // 判断添加删除类名pick
           //  console.log($(this).parent().next());
           //  console.log($(this).parent().next().hasClass('.pick'));
           //  if($(this).parent().next().hasClass('pick')==false){
           //      $(this).parent().next().addClass('pick')
           //  }else{
           //
           //  }




        })
    };
    /*点击全选按钮，选中购物车中的所有的产品。再次点击，取消所有选择*/
    function selectAll() {
       $icon.flag = 'none';
        brand($icon);
        $icon.tap(function () {
            $icon.flag = $(this).children('.null').css('display');
            if ($icon.flag == 'block') {
                for (var i = 0; i < $mark.length; i++) {
                    (function (i) {
                        var $null = $($mark[i]).children('.null');
                        $null.show();
                    })(i);
                }
                return $icon.flag= 'none';
            } else {
                for (i = 0; i < $mark.length; i++) {
                    (function (i) {
                        var $null = $($mark[i]).children('.null');
                        $null.hide();
                    })(i);
                }

                return $icon.flag= 'block';
            }
            goodsnum();
        })


    }
    /*增加购物车中商品的数量*/
    function add(num) {
        var count = Number(num.prev().html());
        count++;
        num.prev('.num').html(count);
    }
    /*减少购物车中商品的数量*/
    function plus(num) {
        var count = Number(num.next().html());
        if (count > 0) {
            count--;
        } else {
            count = 0;
        }
        num.next('.num').html(count);
    }



    /*计算总价格*/
    //计算总共的钱。。。。。。。。。。。。。。。。。。。。。。。。。
    function addmoney() {
        //判断是否选中商品就是红钩钩
        // for (var i = 0; i < $('.mark .xuan').length; i++) {
        //     if ($('.mark .xuan').eq(i).css('display')=='none') {
        //         $('.mark .xuan').eq(i).parent().parent().addClass('pick')
        //     } else {
        //         $('.mark .xuan').eq(i).parent().parent().removeClass('pick')
        //     }
        // }
        var allmoney = 0;
        for (var i = 0; i < $('.pick .price-num').length; i++) {
            allmoney += (parseFloat($('.pick .price-num').eq(i).html())) * (parseFloat($('.pick .count .num').eq(i).html()));
        }
        $('.addup').html(allmoney.toFixed(2));
    }
    /*结算选中商品的个数*/
    function goodsnum(){
        var goodsnum=0;
        //给有红钩钩商品添加类名，方便下一步操作  有问题
        // for (var j = 0; j < $('.markStore .null').length; j++) {
        //     if ($('.markStore .null').eq(j).css('display')=='none') {
        //         $('.markStore .null').eq(j).parent().parent().next().addClass('pick')
        //     } else {
        //         $('.markStore .null').eq(j).parent().parent().next().removeClass('pick')
        //     }
        // }
        for (var i = 0; i < $('.mark .xuan').length; i++) {
            if ($('.mark .xuan').eq(i).css('display')=='none') {
                $('.mark .xuan').eq(i).parent().parent().addClass('pick')
            } else {
                $('.mark .xuan').eq(i).parent().parent().removeClass('pick')
            }
        }

        for (var i = 0; i < $('.pick .num').length; i++) {
            goodsnum+=parseFloat($('.pick .num').eq(i).html())
        }
        $('.countL').html("结算("+goodsnum+")");
    }
    /*点击“+”号，调用函数add()实现增加购物车中商品的数量操作*/




    function addBrand() {
        $add.tap(function () {
            add($(this));
            addmoney();
            goodsnum();
        });
    }
    /*点击“-”号，调用函数add()实现减少购物车中商品的数量操作*/
    function plusBrand() {
        $plus.tap(function () {
            plus($(this));
            addmoney();
            goodsnum();
        });
    }
    /*点击按钮实现完成和编辑的切换，同时出现弹框，实现相应的收藏，删除等功能*/
    function complete() {
       $editor.flag = true;
        $editor.tap(function () {
            $show.toggle().siblings('.hide').toggle();
            if ($editor.flag== true) {
                $(this).html('完成');
                return $editor.flag = false;
            } else {
                $(this).html('编辑');
                return $editor.flag = true;
            }
        })
    }
    /*点击商品规格区域，使其显示出选择商品颜色或者尺寸的弹框*/
    function showSize(tar) {
          tar.flag= true;
        tar.tap(function (event) {
            event.stopPropagation();
            if (tar.flag) {
               $bounced.css('display', 'block');
                $main.css('opacity', '0.5');
                setTimeout(function () {
                    $bounced.css({display:'block',
                        transform:'translateY(-5.98rem)'
                    });
                }, 500);
                return tar.flag= false;
            }
            else {
                $bounced.css('display', 'none');
                $main.css('opacity', '1');
                setTimeout(function () {
                    $bounced.css('display', 'none')
                        .css('transition', 'all 1s')
                        .css('transform', 'translateY(5.98rem)')
                }, 500);
                return tar.flag = true;
            }
        });

    }
    /*选择完成后，点击section区域的任何部分，使弹框逐渐消失*/
    function clearEvent() {
        $('section').tap(function () {
            $bounced.hide();
            $main.css('opacity', '1');
        })}
    /*给点击的按钮，选择相应的样式*/
    function selectStyle() {
        $Ul = $part.children('ul'),
            $Li = $Ul.children('li');
        $Li.tap(function () {
            if (!$(this).hasClass('disabled')) {
                $(this).addClass('select').siblings().removeClass('select');
            }
        })
    }
    /*点击删除按钮，删除选中的某一项商品*/
    function deleteBrand() {
        $delete.tap(function () {
            var $null=$mark.children('.null');
            for(var i=0;i<$mark.length;i++){
                var flag=$($mark[i]).children('.null').css('display');
                if(flag==='none'){
                    $($mark[i]).parent().remove();
                }
            }
        })


    }

    return {
        init: function () {
            brand($mark);
            brandStore($markStore);
            selectAll();
            addBrand();
            plusBrand();
            complete();
            showSize($standard);
            selectStyle();
            clearEvent();
            deleteBrand();
            addmoney();
            goodsnum();
        }
    }
})();
cartJs.init();









