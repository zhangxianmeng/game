(function(win){
    var pageWidth = 6.4; /////设计图宽度640/100
    var docEl = document.documentElement;
    windowScale = function(){
        docEl.style.fontSize = docEl.getBoundingClientRect().width/pageWidth + 'px';
    }
    windowScale();
    window.onresize = windowScale;
})(window);