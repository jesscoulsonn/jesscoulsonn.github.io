var header = document.getElementById('header');
var num = header.clientHeight;


$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navbar').addClass('navFixed');
    } else {
        $('.navbar').removeClass('navFixed');
    }
});



$(".carousel").swipe({
    
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    
      },
      allowPageScroll:"vertical"
    
    });

    function imgLarge(i) {
        i.style.height = "200%";
        i.style.width = "200%";
    }
    
    function imgRegular(i) {
        i.style.height = "75%";
        i.style.width = "75%";
    }