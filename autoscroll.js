function autoScroll() {
    var counter = 1;
    if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight){
        scrollBack = setTimeout(upScroll, 5000)
        counter = 0;
    }
    if (counter == 0){
        return;
    }
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        window.scrollBy(0,1000)
       }
    else{
        window.scrollBy(0,2);
    }
    scrolldelay = setTimeout(autoScroll,2);  
    
}
function upScroll() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
