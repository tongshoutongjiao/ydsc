


setSize();
window.addEventListener('resize',setSize,false);
window.addEventListener('orientationchange',setSize,false);



function setSize(){
    var iHtml = document.querySelector('html');
    var w = iHtml.getBoundingClientRect().width;
    w = w>720?720:w;
    iHtml.style.fontSize = w/18 + 'px';
}


// document.addEventListener('touchmove',function(e){
//     e.preventDefault();
// },false)















//    Android 手机下, input 或 textarea 元素聚焦时, 主动滚一把
if (/Android/gi.test(navigator.userAgent)) {
    window.addEventListener('resize', function () {
        if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
            window.setTimeout(function () {
                document.activeElement.scrollIntoViewIfNeeded();
            }, 0);
        }
    })
}
















