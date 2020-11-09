$(function () {

// Timer
  var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

  var countDownFunction = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById('timer').innerHTML = hours + ":" + minutes + ":" + seconds;

    if (distance < 0) {
      clearInterval(countDownFunction);
      document.getElementById('timer').innerHTML = "Время истекло"
    }
  }, 1000)

// Parallax effects
  $(window).on('mousemove', function(e) {
    var w = $(window).width();
    var h = $(window).height();

    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;

    $('.parallax').each(function (i, el) {
      var offset = parseInt($(el).data('offset'))

      var translate = 'translate3d(' + Math.round(offsetX * offset)
      + 'px,' + Math.round(offsetY * offset) + 'px, 0px';

      $(el).css({
        'transform':translate
      });
    });
  });

  // Burger menu
  (function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');

    burgerItem.addEventListener('click', () => {
      menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
    });
    if (window.innerWidth <= 992) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () => {
          menu.classList.remove('header__nav_active');
        });
      }
    }
  }());

// Fixed scroll header
  window.onscroll = () => {

    var header = $('.header__top');

    if (window.pageYOffset > 300) {
      header.addClass('header__top-fixes');
    } else {
      header.removeClass('header__top-fixes');
    };
  };

	// Slider slick
	$('.slider').slick({
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: true,
        arrows : false
      }
    }, ]
  });

	// Modal windows
	$('.work__btn').click(function (event) {
    event.preventDefault();
    $('.modal__overlay').fadeIn(150, function () {
      $('.modal__feedback')
      .css('display', 'block')
      .animate({opacity: 1}, 300);
    });
  });

  $('.modal__close, .modal__overlay').click(function () {
    $('.modal__feedback').animate({opacity: 0}, 100, function () {
      $(this).css('display', 'none');
      $('.modal__overlay').fadeOut(300);
    });
  });

  // Scroll to anchors
  $('a[href^="#"]').on('click', function(event) {

    event.preventDefault();

    var sectionAddress = $(this).attr("href"),
        sectionPosition = $(sectionAddress).offset().top;

    heightHeader = $('.header__top').innerHeight();
    
    $('html, body').animate({scrollTop: sectionPosition - heightHeader}, 800);
  });

});