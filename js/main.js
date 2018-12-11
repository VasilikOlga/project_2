
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 210,
    itemMargin: 5,
    slideshowSpeed: 3000, 
    minItems: 2,
    maxItems: 4
  });
});


$('.top').click(function() {
     $("html, body").animate({ scrollTop: 0 }, "300");
     return false;
  });

jQuery(document).ready(function() {
  jQuery('.toggle-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.menu ul').toggleClass('active');

    e.preventDefault();
  });
});

