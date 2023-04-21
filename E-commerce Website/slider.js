$(document).ready(function() {
    var slideIndex = 0;
    showSlides();
  
    function showSlides() {
      var i;
      var slides = $(".slideshow-image");
      for (i = 0; i < slides.length; i++) {
        slides.eq(i).css("opacity", "0");
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      slides.eq(slideIndex - 1).css("opacity", "1");
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
  });
  