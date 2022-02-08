/**** NAVIGATION ****/
$(".menu").on("click", function () {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("menu-open");
});
$(".nav a").on("click", function () {
  $(".menu").removeClass("active");
  $(".overlay").removeClass("menu-open");
});

// Owl slider JS

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    navigation: true,
    items: 1,
    loop: true,
    nav: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
  });
});

/**** PAYMENT 

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".paymentModal");
const close = documnt.querySelector(".closeModal");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

****/

/**** PRODUCTS ****/
const products = [
  {
    id: 1,
    title: "Black Peppercorns",
    price: 30,
    colors: [
      {
        code: "black",
        img: "https://res.cloudinary.com/dsx500kcj/image/upload/v1634376150/blossom-001/foxtail_a03vwl.png",
      },
      {
        code: "blue",
        img: "https://res.cloudinary.com/dsx500kcj/image/upload/v1634376149/blossom-001/red-rose_envgcw.png",
      },
    ],
  },
  {
    id: 2,
    title: " Cinnamomum",
    price: 50,
    colors: [
      {
        code: "black",
        img: "https://res.cloudinary.com/dsx500kcj/image/upload/v1634376149/blossom-001/orange-rose_wjm1yl.png",
      },
      {
        code: "blue",
        img: "https://res.cloudinary.com/dsx500kcj/image/upload/v1634376148/blossom-001/daisy2_nnleez.png",
      },
    ],
  },
];

/**** LANDING ANIMATION ****/
$(document).ready(function () {
  if ($(".landing").is(":visible")) {
    $(".wrapper").css({
      opacity: "0",
    });
  }
  $(".splash-arrow").click(function () {
    $(".landing").slideUp("800", function () {
      $(".wrapper").delay(100).animate(
        {
          opacity: "1.0",
        },
        800
      );
    });
  });
});

$(window).scroll(function () {
  $(window).off("scroll");
  $(".landing").slideUp("800", function () {
    $("html, body").animate(
      {
        scrollTop: "0px",
      },
      100
    );
    $(".wrapper").delay(100).animate(
      {
        opacity: "1.0",
      },
      800
    );
  });
});

// label

var fullImg = document.querySelector(".full-img");
var miniImg = document.querySelectorAll(".mini-img");

function changeImg(x) {
  var targetImg = miniImg[x - 1];
  var imgAttr = targetImg.getAttribute("src");

  fullImg.setAttribute("src", imgAttr);
}

var fullImg2 = document.querySelector(".full-img2");
var miniImg2 = document.querySelectorAll(".mini-img2");

function changeImg2(x) {
  var targetImg2 = miniImg2[x - 1];
  var imgAttr2 = targetImg2.getAttribute("src");

  fullImg2.setAttribute("src", imgAttr2);
}
