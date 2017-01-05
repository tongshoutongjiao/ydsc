/**
 * Created by ww on 2016/11/28.
 */
//商品详情评价的tab栏切换section
var lists=document.querySelectorAll('header #toptab li');
var sections=document.querySelectorAll('section');
for(var j=0;j<lists.length;j++){
    console.log(j);
    lists[j].index=j;
    lists[j].onclick=function () {
      for(var k=0;k<sections.length;k++){
       sections[k].style.display='none';
          lists[k].className='';
      }
      sections[this.index].style.display='block';
        lists[this.index].className='active'
    }
}





//基本信息商品属性商家承诺的tab栏切换
var lis=document.querySelectorAll('section ul li');
for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onclick=function () {
        var changepic=document.querySelector('.changepic');
        console.log(this.index)

        changepic.src="./img/picture"+this.index+".PNG";

    }
}


