export function nextSlide() {
    let slides = document.querySelectorAll(".slider img");
    let activeSlide = document.querySelector(".slider .active");
    activeSlide.classList.remove("active");
  
    if (activeSlide.nextElementSibling) {
      activeSlide.nextElementSibling.classList.add("active");
    } else {
      slides[0].classList.add("active");
    }
  }
  
export function prevSlide() {
    let slides = document.querySelectorAll(".slider img");
    let activeSlide = document.querySelector(".slider .active");
    activeSlide.classList.remove("active");
  
    if (activeSlide.previousElementSibling) {
      activeSlide.previousElementSibling.classList.add("active");
    } else {
      slides[slides.length - 1].classList.add("active");
    }
  }