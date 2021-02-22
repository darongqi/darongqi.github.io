$(document).ready(function() {
    //navbar scroll functionality based on clicked element
    $('.nav-link').click(function() {
        target = $(this).attr('name');
        if (target == 'home') {
            window.scrollTo(0, 0);
        } else if (target != 'blog') {
            window.scrollTo(0, $('#' + target).offset().top);
        }
    });
    //alert('Hello! I am an alert box!!');
    // Get the current top location of the nav bar.
    var stickyNavTop = $('.wrapper-masthead').offset().top;
    var stickyNavHeight = $('.wrapper-masthead').height();
  
    // If we don't do this, the content will jump suddenly when passing through stickyNavTop. Add margin to content below.
    var introMarginTop = parseInt($('#intro_header').css('margin-top').slice(0,-2),10);
    var newMarginTop = introMarginTop+stickyNavHeight;
  
    $(window).scroll(function(){
        if ($(window).scrollTop() >= stickyNavTop) {
           $('#intro_header').css('margin-top',  newMarginTop +'px');
           $('.wrapper-masthead').addClass('fixed-header');
           $('.wrapper-masthead').addClass('grow');
        } else {
           $('#intro_header').css('margin-top',  introMarginTop +'px');
           $('.wrapper-masthead').removeClass('fixed-header');
           $('.wrapper-masthead').removeClass('grow');
        }
    });
});