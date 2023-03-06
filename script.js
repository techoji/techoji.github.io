var mobileSize = 970;

$(document).ready(function () {
  $(".navForPC").css("display", "flex");
  $(".tabsheader").css("display", "flex");

  $(".tabsheader").hide();
  $(".navForPC").hide();

  $('a[href^="#"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 300);
  });

  $(".menuNavBtn").click(function () {
    $(".navigationBlock").css("display", "block");
    if ($(".navigationBlock").css("left") != "0px") {
      $(".navigationBlock").addClass("show");
      $(".menuNavBtn").addClass("invert");
    } else {
      $(".navigationBlock").removeClass("show");
      $(".menuNavBtn").removeClass("invert");
    }
  });

  $(".nestedList").click(function () {
    if ($(this).parent().children("ul").css("display") == "none") {
      $(this).parent().children("ul").css("display", "flex");
      $(this).addClass("rotate");
    } else {
      $(this).parent().children("ul").css("display", "none");
      $(this).removeClass("rotate");
    }
  });

  $("#mainPage").ready(function () {
    $(".grid").css("background", "url(../img/mainback.gif)");
    $(".grid").css("background-attachment", "fixed");
    $(".grid").css("background-position", "700px 0px");
    $(".grid").css("background-size", "1200px");
  });

  // Automatic footer year set
  const lang = $('html').attr('lang');
  const year = new Date().getFullYear();
  if (lang === 'ru') {
    $('footer').html(`<p>Copyright © ${year} techoji. Все права защищены.</p>`)
  }
  else {
    $('footer').html(`<p>Copyright © ${year} techoji. All rights reserved.</p>`)
  }
});

window.addEventListener("scroll", () => {
  if ($("#mainPage").length) return;

  var btnUp = document.querySelector("#btnUp");
  // var headerLogoText = document.querySelector("#logoText");

  if (window.scrollY > 75) {
    if (btnUp) btnUp.style.display = "block";

    if (window.innerWidth > mobileSize) {
      // for desktop
      // headerLogoText.style.display = "none";
    } else {
      // for mobile
      // headerLogoText.style.display = "none";
    }

    if (window.innerWidth > mobileSize) {
      $(".navForPC").show();
      $(".tabsheader").show();
    } else {
      $(".navForPC").hide();
      $(".tabsheader").hide();
    }
  } else {
    if (window.innerWidth > mobileSize) {
      // for desktop
      // headerLogoText.style.display = "block";
    } else {
      // for mobile
      // header.style.height = "30px";
      // headerLogoText.style.display = "none";
    }

    if (btnUp) btnUp.style.display = "none";

    $(".navForPC").hide();
    $(".tabsheader").hide();
  }
});

window.onresize = function (event) {
  $("#mainPage").ready(function () {
    $(".grid").css("background", "url(../img/mainback.gif)");
    $(".grid").css("background-attachment", "fixed");
    $(".grid").css("background-position", "700px 50px");
  });

  if (window.scrollY > 75) {
    if (window.innerWidth > mobileSize) {
      $(".navForPC").show();
      $(".tabsheader").show();
    } else {
      $(".navForPC").hide();
      $(".tabsheader").hide();
    }
  } else {
    $(".navForPC").hide();
    $(".tabsheader").hide();
  }
};

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $(".navigationBlock");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".navigationBlock").removeClass("show");
      $(".menuNavBtn").removeClass("invert");
    }
  });
});

function sendMail() {
  window.open("mailto:darkmitiy555@gmail.com");
}
