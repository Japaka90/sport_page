function scrollUp() {
    let interval;
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0, -100);
        interval = setTimeout('scrollUp()', 50);
    } else clearTimeout(interval);
}