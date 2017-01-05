 var lis=$('section ul li');

 for(var i=0;i<lis.length;i++){
     lis[i].index=i;
     lis[i].flag = true;
     //左滑出现取消收藏
     $(lis[i]).swipeLeft(function () {
         if(!this.flag){
             return
         }
         this.style.transform = this.style.WebkitTransform ='translateX(-3.2rem) translateZ(0)';
         this.flag = false;
     });
     //右滑回到原来状态
     $(lis[i]).swipeRight(function () {
        if(this.flag){
            return
        }
         this.style.transform = this.style.WebkitTransform ='translateX(0) translateZ(0)';
         this.flag = true;
     });
     //点击取消收藏
     $(lis[i]).tap(function(e){
         if(e.target.className === 'canclestore'){
             this.parentNode.removeChild(this);
         }
     })
 }
