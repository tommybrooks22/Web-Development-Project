document.addEventListener("DOMContentLoaded", function() {
    var prevButtons = document.getElementsByClassName("prev");
    var nextButtons = document.getElementsByClassName("next");
  
    for (var i = 0; i < prevButtons.length; i++) {
      prevButtons[i].addEventListener("click", function() {
        changeSlide(-1, this.dataset.slideshow);
      });
    }
  
    for (var j = 0; j < nextButtons.length; j++) {
      nextButtons[j].addEventListener("click", function() {
        changeSlide(1, this.dataset.slideshow);
      });
    }
  });
  
  function changeSlide(n, slideshowId) {
    var slideshow = document.getElementById(slideshowId);
    var images = slideshow.getElementsByTagName("img");
    var currentSlide;
  
    for (var i = 0; i < images.length; i++) {
      if (window.getComputedStyle(images[i]).display !== "none") {
        currentSlide = i;
        break;
      }
    }
  
    var nextSlide = currentSlide + n;
  
    if (nextSlide >= images.length) {
      nextSlide = 0;
    } else if (nextSlide < 0) {
      nextSlide = images.length - 1;
    }
  
    images[currentSlide].style.display = "none";
    images[nextSlide].style.display = "block";
  }
  
  