document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-item");
  
    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
  
    nextBtn.addEventListener("click", function () {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    function updateCarousel() {
      const offset = -currentIndex * slideWidth;
      carousel.style.transform = `translateX(${offset}px)`;
    }
  });
  