//counter
const time = 1028;
for (let i of document.querySelectorAll(".counter-number")){
   let numberTop = i.getBoundingClientRect().top,
      start = +i.innerHTML,
      end = +i.getAttribute('data-target');  
    // end = +i.dataset.max;
   window.addEventListener("DOMContentLoaded", function onScroll() {
      // if (window.pageYOffset > numberTop - window.innerHeight / 0) {
      // this.removeEventListener("scroll", onScroll);
      let interval = this.setInterval(function () {
         start += (end/time);
         i.innerHTML = Math.floor( start);
         if (start > end) {
            i.innerHTML = end;
            clearInterval(interval);
         }
         }, 1);
      // }
   });
}




//lightgallery
  var imagPop = document.getElementById("license-gallery");
    lightGallery(imagPop);
  var imagPop = document.getElementById("gallery-gallery");
    lightGallery(imagPop);


//jquery
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
    $('html, body').animate({scrollTop : 0},500, 'easeInOutExpo');
    return false;
  });

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('.header-container').css('padding', '0 15px');
      $('.logo-black').css('display', 'initial');
      $('.logo-white').css('display', 'none');
      $('.main-nav a').css('color', '#000');
      $('.active a').css('color', '#00bc50');
      $('.ico-worldwhite').css('display', 'none');
      $('.ico-world').css('display', 'initial');
    } else {
      $('#header').removeClass('header-scrolled');
      $('.header-container').css('padding', '10px 15px');
      $('.logo-black').css('display', 'none');
      $('.logo-white').css('display', 'initial');
      $('.main-nav a').css('color', '#FFF');
      $('.active a').css('color', '#00bc50');
      $('.ico-worldwhite').css('display', 'initial');
      $('.ico-world').css('display', 'none');
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
        }, 300, 'easeInOutExpo');

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
  
// false right click
  $(document). bind("contextmenu",function(e){ return false; });

  //owl carousel
  $(".owl-fullscreen").owlCarousel({
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $('.owl-license').owlCarousel({
    // loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    dots: true,
    responsive:{
        0:{
            items:2
        },
        700:{
          items:3
        },
        1000:{
            items:5
        }
    }
  })

  $('.owl-gallery').owlCarousel({
    // loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    dots: true,
    responsive:{
        0:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })

  $('.owl-partners').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    dots: false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })






})(jQuery);




//change language
var defLang = 'ru';
let cookLang  = getCookie('lang');

if (cookLang){
    // defLang = cookLang;
    changeLang(cookLang);
}else {
    setCookie('lang', defLang);
}
function changeLang(lang){
  console.log('defLang: ', defLang)
  console.log('lang: ', lang)
      // defLang = lang;
      setCookie('lang', lang);
      let elements = document.querySelectorAll('.lang');

      Array.prototype.forEach.call(elements, function(el, i){
          let attr = el.getAttribute('key');
          el.innerHTML = arrLang[lang][attr];
      }); 
      // document.getElementById("activelang").innerHTML = lang;


      let loc = window.location.pathname;
      var blackLogo = document.getElementById ("blacklogo");
      var whiteLogo = document.getElementById ("whitelogo");
      var aboutViewMore = document.getElementById ("aboutviewmorebtn");
      var formName = document.getElementById('formname');
      var formNumber = document.getElementById('formnumber');
      var formMessage = document.getElementById('formmessage');
      if (loc == '/' || loc == '/index.html' || loc == '/emirussa/'){
        if (lang == 'ru'){
            formName.placeholder = '?????? *';
            formNumber.placeholder = '?????????????? ?????????? *';
            formMessage.placeholder = '?????????????????? *';
            blackLogo.setAttribute('src', 'img/logotextblack.png');
            whiteLogo.setAttribute('src', 'img/logotextwhite.png');
            aboutViewMore.setAttribute('href', 'documents/docru.pdf')
        }
          if (lang == 'tm'){
              formName.placeholder = 'At *';
              formNumber.placeholder = 'Telefon nomer *';
              formMessage.placeholder = 'Hat *';
              blackLogo.setAttribute('src', 'img/logotextblacktm.png');
              whiteLogo.setAttribute('src', 'img/logotextwhitetm.png');
              aboutViewMore.setAttribute('href', 'documents/doctm.pdf')
              console.log(loc)
          }
          if (lang == 'en'){
              formName.placeholder = 'Name *';
              formNumber.placeholder = 'Phone Number *';
              formMessage.placeholder = 'Message *';
              blackLogo.setAttribute('src', 'img/logotextblacken.png');
              whiteLogo.setAttribute('src', 'img/logotextwhiteen.png');
              aboutViewMore.setAttribute('href', 'documents/docen.pdf')
          }
      }
}