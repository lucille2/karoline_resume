
$("#top").click(function() {
    $('html, body').animate({
        scrollTop: $("top").offset().top
    }, 2000);
});




<button onclick="$('html, body').animate({scrollTop: $('#mydiv').offset().top}, 2000);" type="button"  placeholder="" />CLICK ME</button>

<div id="mydiv"></div>
