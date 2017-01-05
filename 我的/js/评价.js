/**
 * Created by wy on 2016/12/9.
 */
var comment=(function () {
    var $chooseStar=$('.chooseStar'),
        $ul=$chooseStar.children('ul'),
        $li=$ul.children('li'),
        $delete=$('.delete'),
        $select=$delete.parent('.select'),
        $firstComment=$('.firstComment'),
        $mark=$('.mark');
    /*点击对应的star，让他有相应的样式*/
    function addStar() {
        $li.tap(function () {
         $(this).addClass('select').siblings().removeClass('select');
       })
    }
    /*点击相应的元素，使他的哥哥元素也有相应的样式*/
    function prev() {
        $li.tap(function () {
            var index=$(this).index();
            for(var i=0;i<=$li.length;i++){
               if(i<=index){
                   $li.eq(i).addClass('select');
               }
            }
        })
    }
    /*点击相应的图片，实现删除操作*/
    function removeEle() {
       $delete.tap(function () {
           console.log($(this).parent());
           $(this).parent().remove();
       })
    }
    /*点击对应的区域*/
    function comment() {
        $firstComment.tap(function () {
            $mark.toggle();
        })
    }
    return {
        init:function () {
            addStar();
            prev();
            removeEle();
            comment();

        }
    }
    
})();
comment.init();