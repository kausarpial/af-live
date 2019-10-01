$(document).ready(function() {
  "use strict";
  $('.main-nav').headroom();
  // Scroll to top
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Smooth scroll
  $('a.scroll-to').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1000);
    event.preventDefault();
  });

  $(".faq-accordion-item").on("show.bs.collapse hide.bs.collapse", function(e) {
    if (e.type=='show'){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });

  // Match Height
  $('.service-item').matchHeight({
    byRow: 0
  });

  // Follower UI slider
  var followerSlider = document.getElementById('followerSlider');
  noUiSlider.create(followerSlider, {
    start: [3000],
    step: 100,
    connect: [true, false],
    range: {
      'min': [1000],
      'max': [10000]
    }
  });

  var followerSliderValueElement = document.getElementById('pricing-table-item-count-follower');
  var followerSliderValueElement2 = document.getElementById('pricing-table-item-slider-inner-count');
  var followerSliderValuePrice = document.getElementById('pricing-table-item-price-follower');
  followerSlider.noUiSlider.on('update', function (values, handle) {
    followerSliderValueElement.innerHTML = values[handle]*1;
    followerSliderValueElement2.innerHTML = values[handle]*1;
    followerSliderValuePrice.innerHTML = values[handle]*0.005;
    $('.slider-count-follower').css("left", values[handle]*0.01+'%');
  });
  
  // Automatic Follower Slider
  var automaticFollowerSlider = document.getElementById('automaticFollowerSlider');
  noUiSlider.create(automaticFollowerSlider, {
    start: [3000],
    step: 100,
    connect: [true, false],
    range: {
      'min': [1000],
      'max': [10000]
    }
  });

  var automaticFollowerSliderValueElement = document.getElementById('pricing-table-item-count-afollower-day');
  var automaticFollowerSliderValueElementMonth = document.getElementById('pricing-table-item-count-afollower-month');
  var automaticFollowerSliderValueElement2 = document.getElementById('pricing-table-item-slider-inner-count2');
  var automaticFollowerSliderValuePrice = document.getElementById('pricing-table-item-price-afollower');
  automaticFollowerSlider.noUiSlider.on('update', function (values, handle) {
    automaticFollowerSliderValueElement.innerHTML = values[handle]*1;
    automaticFollowerSliderValueElement2.innerHTML = values[handle]*1;
    automaticFollowerSliderValueElementMonth.innerHTML = values[handle]*30;
    automaticFollowerSliderValuePrice.innerHTML = values[handle]*0.005;
    $('.slider-count-afollower').css("left", values[handle]*0.01+'%');
  });

  // Testimonial Slider
  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            centerMode: false,
            autoplay: false,
            infinite: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: false,
            infinite: false
        }
      }
    ]
  });

  // Testimonial Slider
  $('.blog-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            centerMode: false,
            autoplay: false,
            infinite: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: false,
            infinite: false
        }
      }
    ]
  });

  // AOS initialize
  AOS.init({disable: 'mobile'});

  // Promotional Ad close
  $('.promotional-ad-close').on('click', function() {
    $('.promotional-ad').css('display', 'none');
    $('.main-nav').addClass('promo-close');
  });
});

$(window).on('scroll', function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $('.main-nav').addClass('nav-bg');
  } else {
    $('.main-nav').removeClass('nav-bg');
  }
});