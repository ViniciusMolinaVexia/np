var scrollElement = {
  init: function () {
    $(".nav-link").click(function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop:
            $($.attr(this, "href")).offset().top - $("header").outerHeight(),
        },
        1e3
      );
    });
  },
};

var accordeonElement = {
  init: function () {
    $(".accordion-text__item").click(function (e) {
      if (
        $(this).next(".accordion-text__item-data").css("display") != "block"
      ) {
        $(".active").slideUp("fast").removeClass("active");
        $(".accordion-text__item").removeClass("down");
        $(this)
          .next(".accordion-text__item-data")
          .addClass("active")
          .slideDown("slow");
        $(this).addClass("down");
      } else {
        $(".active").slideUp("fast").removeClass("active");
        $(this).removeClass("down");
      }
    });
  },
};


var newaccordeonElement = {
  init: function () {
    $(".accordion-text__novo").click(function (e) {
      if (
        $(this).next(".accordion-text__novo-data").css("display") != "block"
      ) {
        $(".activenovo").slideUp("fast").removeClass("activenovo");
        $(".accordion-text__novo").removeClass("down");
        $(this)
          .next(".accordion-text__novo-data")
          .addClass("activenovo")
          .slideDown("slow");
        $(this).addClass("down");
      } else {
        $(".activenovo").slideUp("fast").removeClass("activenovo");

        $(this).removeClass("down");
      }
    });
  },
};

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler-icon").toggleClass("open");
  });
});

$(function () {
  scrollElement.init();
  accordeonElement.init();
  newaccordeonElement.init();
});
