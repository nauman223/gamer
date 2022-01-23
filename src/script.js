var swiper = new Swiper(".swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var navItems = document.querySelectorAll(".bottom-nav-item");

navItems.forEach(function (e, i) {
  e.addEventListener("click", function (e) {
    navItems.forEach(function (e2, i2) {
      e2.classList.remove("active");
    });
    this.classList.add("active");
  });
});

var image = document.getElementById("myImage");
let image1=image.src;
switch (image)
​{
    case image1:
      if (image1.match("home pages/promotion icon.png")) {
        image.src = "home pages/home icon.png";
       
      }
      break;

    case constant2:
      // statements
      break;
 
    default:
      // default statements
}



