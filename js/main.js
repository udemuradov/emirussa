//contact form

const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let tel = document.getElementById('tel');
let message = document.getElementById('message');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = {
    name: name.value,
    email: email.value,
    tel: tel.value,
    message: message.value
  }
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert('Сообщение отправлено');
      name.value = '';
      email.value = '';
      tel.value = '';
      message.value = '';
    }
    else{
      alert('Проверьте форму отправки')
    }
  }
  xhr.send(JSON.stringify(formData));
});

  var modal = document.getElementById("myModal");
  
  var btn = document.getElementById("myBtn");
  
  var span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });
  
//     $(document).ready(function(){       
//     var scroll_pos = 0;
//     $(document).scroll(function() { 
//         scroll_pos = $(this).scrollTop();
//         if(scroll_pos > 210) {
//             $('.main-nav_link').css('color', '#000');
//         } else {
//             $('.hvr-reveal').css('color', '#fff');
//         }
//     });
// });

//     $(document).ready(function(){       
//     var scroll_pos = 0;
//     $(document).scroll(function() { 
//         scroll_pos = $(this).scrollTop();
//         if(scroll_pos > 100) {
//             $('.main-nav *').css('display', 'block');
//         } else {
//             $('.main-nav *').css('display', 'none');
//         }
//     });
// });

  // // jQuery counterUp (used in Whu Us section)
  // $('[data-toggle="counter-up"]').counterUp({
  //   delay: 10,
  //   time: 1000
  // });

  // // Porfolio isotope and filter
  // $(window).on('load', function () {
  //   var portfolioIsotope = $('.portfolio-container').isotope({
  //     itemSelector: '.portfolio-item'
  //   });
  //   $('#portfolio-flters li').on( 'click', function() {
  //     $("#portfolio-flters li").removeClass('filter-active');
  //     $(this).addClass('filter-active');
  
  //     portfolioIsotope.isotope({ filter: $(this).data('filter') });
  //   });
  // });

  // // Testimonials carousel (uses the Owl Carousel library)
  // $(".testimonials-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   items: 1
  // });

  // Clients carousel (uses the Owl Carousel library)
//   $(".owl-carousel").owlCarousel({
//     loop: true,
//     autoplay: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 1,
//       },
//       1000: {
//         items: 1,
//       },
//     },
//   });
// })(jQuery);

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  dots:false,
  nav:true,
  mouseDrag:false,
  autoplay:true,
  animateOut: 'slideOutUp',
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

$(function(){
  $('.translate').click(function(){
    var lang = $(this).attr('id');

    $('.lang').each(function(index, element){
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});
$(function(){
  $('#en').click(function(){
    $('#name').attr('placeholder','Name');
    $('#tel').attr('placeholder','Telephone number');
    $('#message').attr('placeholder','Message');
  });
});
$(function(){
  $('#ru').click(function(){
    $('#name').attr('placeholder','Имя');
    $('#tel').attr('placeholder','Номер телефона');
    $('#message').attr('placeholder','Сообщение');
    
  });
});
