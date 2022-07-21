function bootstrap() {
  //Sticky Navigation
  $("#js--show-nav").waypoint(function (dir) {
    const nav = $("nav");
    if (dir === "up" && nav.hasClass("nav-sticky")) {
      nav.removeClass("nav-sticky");
    }
    if (dir === "down") {
      nav.addClass("nav-sticky");
    }
  });

  //scrolling
  $('a[href*="#"]:not([href="#"])').on("click", function (ev) {
    ev.preventDefault();
    let target = $($(this).attr("href"));
    $("html").animate(
      {
        scrollTop: target.offset().top,
      },
      700
    );
  });

  $('a[href="#"]').on("click", function (ev) {
    ev.preventDefault();
    $("html").animate(
      {
        scrollTop: $("html").offset().top,
      },
      700
    );
  });

  // Animations
  $(".js--animate , .js--animate-in").map(function () {
    const target = $(this);
    const animation = $(this).data("animation");
    target.waypoint(
      function () {
        target.addClass("animate__animated");
        target.addClass(`animate__${animation}`);
      },
      {
        offset: "60%",
      }
    );
  });

  $(".js--nav-menu").on("click", function (ev) {
    ev.preventDefault();
    const navItems = $(".js--main-nav");
    const icon = $(".js--nav-menu i");
    navItems.slideToggle(200);
    if(icon.hasClass('ion-navicon-round')){
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    }else{
        icon.removeClass('ion-close-round');
        icon.addClass('ion-navicon-round');
    }
  });
}

$(bootstrap);
