let rankingSwiper;
  function initRankingSwiper() {
    const screenWidth = window.innerWidth;
    if (rankingSwiper) {
      rankingSwiper.destroy(true, true);
      rankingSwiper = undefined;
    }
    if (screenWidth < 991) {
      rankingSwiper = new Swiper(".ranking-slider", {
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }
  window.addEventListener("load", initRankingSwiper);
  window.addEventListener("resize", initRankingSwiper);



var linearSwiper = new Swiper(".linear-slider", {
  slidesPerView: 3, 
  spaceBetween: 10,
  loop: true,
  speed: 4000,
  allowTouchMove: false,
  freeMode: {
    enabled: true,
    sticky: false,
    momentum: false,
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 8, 
    },
    480: {
      slidesPerView: 5, 
    },
  },
});
var gallerySwiper = new Swiper(".gallerySwiper", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 12,
    slideShadows: true,
    slideShadows: false,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 800,
});

var scholarshipSwiper = new Swiper(".scholarship-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
      autoHeight: true, 
});

var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-n",
    prevEl: ".swiper-button-prev-n",
  },
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
  }
  ,breakpoints: {
    992: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  }
});

var scholarshipSwiperNN = new Swiper(".video-slider", {
  navigation: {
    nextEl: ".swiper-button-nextt",
    prevEl: ".swiper-button-prevv",
  },
});

function isScrolledIntoView($elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $elem.offset().top;
  return elemTop < docViewBottom;
}

var counted = false;

$(window).on("scroll load", function () {
  if (!counted && isScrolledIntoView($("#milestones"))) {
    counted = true;
    $(".count").each(function () {
      var $this = $(this);
      $this.countTo({
        from: $this.data("from"),
        to: $this.data("to"),
        speed: $this.data("speed"),
        refreshInterval: 50,
        formatter: function (value, options) {
          return (
            ($this.data("prefix") || "") +
            value.toFixed(0) +
            ($this.data("suffix") || "")
          );
        },
      });
    });
  }
});
// var countDownDate = new Date("october 30, 2025 23:59:59").getTime();
// var x = setInterval(function () {
//   var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   document.getElementById("demo").innerHTML =
//     "<div class='demo-timerblock'>" +
//     days +
//     "<span>Days</span> </div><div class='demo-timerblock'>" +
//     hours +
//     "<span>Hrs</span> </div><div class='demo-timerblock'>" +
//     minutes +
//     "<span>Min</span> </div><div class='demo-timerblock'>" +
//     seconds +
//     "<span>Sec</span> " +
//     "</div>";

//   if (distance <= 0) {
//     clearInterval(x);
//     document.getElementById("timerMain").remove();
//   }
// }, 1000);
  
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
      document.body.classList.add("fixed");
  } else {
      document.body.classList.remove("fixed");
  }
});
AOS.init(); 
var swiper = new Swiper(".toprecruiter", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  loopAdditionalSlides: 2,
  autoplay: {
      delay: 500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
  },
  speed: 500,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      640: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
      1024: {
          slidesPerView: 7,
          spaceBetween: 10,
      },
  },
  speed: 800,
});

var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  loopAdditionalSlides: 2,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      640: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 30,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 40,
      },
  },
  speed: 800,
});

var swiper3 = new Swiper(".testimonialstudent", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  loopAdditionalSlides: 2,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".studentbtn-next",
      prevEl: ".studentbtn-prev",
  },
  breakpoints: {
      640: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      1024: {
          slidesPerView: 2,
          spaceBetween: 10,
      },
  },
  speed: 800,
});
