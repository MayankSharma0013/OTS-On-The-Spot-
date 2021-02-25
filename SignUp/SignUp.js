  $(document).ready(function(){
  $('.signup-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $("img").height($(".main-box").height());

  $(".to-signin").on("click", function () {
    $(this)
      .addClass("top-active-button")
      .siblings()
      .removeClass("top-active-button");
    $(".form-signup").slideUp(500);
    $(".form-signin").slideDown(500);
  });

  $(".to-signup").on("click", function () {
    $(this)
      .addClass("top-active-button")
      .siblings()
      .removeClass("top-active-button");
    $(".form-signin").slideUp(500);
    $(".form-signup").slideDown(500);
  });

  $(".to-signin-link").on("click", function () {
    $(".to-signin")
      .addClass("top-active-button")
      .siblings()
      .removeClass("top-active-button");
    $(".form-signup").slideUp(200);
    $(".form-signin").slideDown(200);
  });

  $(".to-signup-link").on("click", function () {
    $(".to-signup")
      .addClass("top-active-button")
      .siblings()
      .removeClass("top-active-button");
    $(".form-signin").slideUp(200);
    $(".form-signup").slideDown(200);
  });
});

function f() {
  if ($(".show-pwd i").hasClass("fas fa-eye")) {
      document.getElementById("pwd").type = "text";
      document.getElementById("show-pwd").className = "fas fa-eye-slash";
  } else if ($(".show-pwd i").hasClass("fas fa-eye-slash")) {
      document.getElementById("pwd").type = "password";
      document.getElementById("show-pwd").className = "fas fa-eye"; 
  }
}

function f1() {
  if ($(".show-pwd1 i").hasClass("fas fa-eye")) {
      document.getElementById("pwd1").type = "text";
      document.getElementById("show-pwd1").className = "fas fa-eye-slash";
  } else if ($(".show-pwd1 i").hasClass("fas fa-eye-slash")) {
      document.getElementById("pwd1").type = "password";
      document.getElementById("show-pwd1").className = "fas fa-eye"; 
  }
}