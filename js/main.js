
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


$("a[href='.top']").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "300");
     return false;
  });