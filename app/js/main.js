$('.b-about__img').click(function() {
  $('.b-about__person-item,.b-about__link').toggleClass("active-animate");
  $(".b-about__box-img").toggleClass("remove").removeClass("animate");
});
$('.b-about__img-1').click(function() {
  $('.b-about__person-card').toggleClass("active-card");
  $(".b-about__box-img1").toggleClass("remove")
});
$('.b-about__close1').click(function() {
  $('.b-about__person-item,.b-about__link').removeClass("active-animate");
  $(".b-about__box-img").toggleClass("animate").removeClass("remove");
  $('.b-about__person-card').removeClass("active-animate");
});
$('.b-about__close').click(function() {
  $('.b-about__person-item,.b-about__link').removeClass("active-card");
  $(".b-about__box-img-1").toggleClass("animate").removeClass("remove");
  $('.b-about__person-card').removeClass("active-card");
});
//animate header-text

var totaldiv = 0;
var clickcount = 0;
var clickcountdown = 0;
var lastdiv = "";

var colors = ["#757D75","#6C7A89"];

$(".b-header__title-main,.b-header__title-head").each(function() {
  var self = $(this);
  let titleSplit = $(this).text();
  let chararray = titleSplit.split("");
  $(this).text("");

  $.each(chararray, function(index) {
    let spanAppend = "<span>" + chararray[index] + "</span>";
    self.append(spanAppend);
  });
  totaldiv++;
});

function tweenlettersup() {
  var def = new $.Deferred();
  var titlespans = $(".section.active .b-header__title-main span");
  var titlespans1 = $(".section.active .b-header__title-head span");
  TweenMax.staggerTo(
    titlespans,
    0,
    { y: -100, x: -95, autoAlpha: 1, ease: Power3.linear },
    0.1 - 0.03,
    resolve
  );
  TweenMax.staggerTo(
    titlespans1,
    0,
    { y: 100, x: -55, autoAlpha: 1, ease: Power3.linear },
    0.1 - 0.03,
    resolve
  );
  function resolve() {
    def.resolve();
  }
  return def.promise();
}

function tweenlettersdown() {
  var def = new $.Deferred();
  var titlespans = $(".section.active .b-header__title-main span");
  var titlespans1 = $(".section.active .b-header__title-head span");
  TweenMax.staggerTo(
    titlespans,
    0,
    { y: 0, x: 0, opacity: 0, ease: Power3.linear },
    0,
    resolve
  );
  TweenMax.staggerTo(
    titlespans1,
    0,
    { y: 0, x: 0, opacity: 0, ease: Power3.linear },
    0,
    resolve
  );
  function resolve() {
    def.resolve();
  }
  return def.promise();
}


function tweenletterfromup() {
  var titlespans = $(".section.active .b-header__title-main span");
  var titlespans1 = $(".section.active .b-header__title-head span");
  TweenMax.staggerFromTo(
    titlespans,
    0.4,
    { y: -100, x: 0, autoAlpha: 0, ease: Power3.linear},
    { y: 0, x: 0, autoAlpha: 1, ease: Power3.linear},
    0.1 - 0.01
  );
  TweenMax.staggerFromTo(
    titlespans1,
    0.4,
    { y: 50, x: 0, autoAlpha: 0, ease: Power3.linear},
    { y: 0, x: 0, autoAlpha: 1, ease: Power3.linear},
    0.1 - 0.03
  );
}

$(".btn-prev").on("click", function(e) {
  weenletterfromup().then(function() {
    let indexNumber = parseInt(
      $($(".section.active").next()).attr("data-slide")
    );

    if (isNaN(indexNumber)) {
      var nextsection = $(".section");
      clickcount = 0;
    } else {
      var nextsection = $(".section.active").next();
    }

    $(".section.active").removeClass("active");
    $(nextsection).addClass("active");
    tweenletterfromup();
  });
  clickcount++;
});

$(".btn-next").on("click", function(e) {
  tweenlettersdown().then(function() {
    let indexNumber = parseInt(
      $($(".section.active").next()).attr("data-slide")
    );

    if (isNaN(indexNumber)) {
      var nextsection = $(".section");
      clickcountdown = 0;
    } else {
      var nextsection = $(".section.active").next();
    }

    $(".section.active").removeClass("active");
    $(nextsection).addClass("active");
    tweenletterfromup();
  });
  clickcountdown++;
});

//menu 
  $('.open-overlay').click(function() {
  var overlay_navigation = $('.overlay-navigation'),
    nav_item_1 = $('nav li:nth-of-type(1)'),
    nav_item_2 = $('nav li:nth-of-type(2)'),
    nav_item_3 = $('nav li:nth-of-type(3)'),
    nav_item_4 = $('nav li:nth-of-type(4)'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');

  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {
    top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
    middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
    bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
    nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
    nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
    nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
  } else {
    $("wrapper").addClass("wrapper-remove");
    top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
    middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
    bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
    nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
    nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
    nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
  }
})


function loaderSpinner() {
    $(window).on("load",function() {
        var loader = $('.loader');
var wHeight = $(window).height();
var wWidth = $(window).width();
var i = 0;
/*Center loader on half screen */
loader.css({
    top: wHeight / 2 - 2.5,
    left: wWidth / 2 - 200
 })
      
  do{
    loader.animate({
      width: i
    },14)
    i+=3;
  } while(i <= 400)
  if(i === 402){
    loader.animate({
      left: 0,
      width: '100%'
      
    })
    loader.animate({
      top: '0',
      height: '100%'

    })
  }
      
    setTimeout(function(){
        $('.content').css("display","block");
        $(".loading").css("display","none");
     /*Set time in milisec */  
     },3090);
    });

}
loaderSpinner();

// //wow animate
// $(document).ready(function() { if ($.fn.init) { new WOW().init(); } });
//     $( document ).ready(function() {
//       $('#animate').addClass('animated fadeInUp');
//       $('#animate1').addClass('animated fadeInUp');
//       $('#animate2').addClass('animated fadeInRight');
//       $('#animate3').addClass('animated fadeInLeft');
//       $('#animate4').addClass('animated fadeInUp');
//       $('#animate5').addClass('animated fadeInDown');
//       $('#animate6').addClass('animated fadeInDown');
//       $('#animate7').addClass('animated fadeInLeft');
//       $('#animate8').addClass('animated fadeInRight');
//       $('#animate9').addClass('animated fadeInRight');
//       $('#animate10').addClass('animated fadeInLeft');
// });
//scroll top
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
    $('body,html').animate({scrollTop:0},1600);
 
});
});

//click full screen
    window.launchFullScreen = function () {
        var element = $('html')[0];
        if (element.requestFullScreen) {
            element.requestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    }

    window.cancelFullscreen = function () {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }

    window.checkFullscreen = function () {
        if (document.fullscreenElement ||
            document.mozFullscreenElement ||
            document.webkitFullscreenElement) {
            return true;
        }
        return false;
    };
 $(document).on('click', '.fullscreenTrigger', function (e) {
        e.preventDefault();
        if (checkFullscreen()) {
            cancelFullscreen();
        } else {
            launchFullScreen();
        }
        return false;
    });

  $(document).on('click', '.fullscreenTrigger-open', function (e) {
      e.preventDefault();
      $('.fullscreenTrigger-open').css("display","none");
      $('.fullscreenTrigger-close').css("display","block");
    });

   $(document).on('click', '.fullscreenTrigger-close', function (e) {
      e.preventDefault();
      $('.fullscreenTrigger-open').css("display","block");
      $('.fullscrPeenTrigger-close').css("display","none");
    });

jQuery.fn.load = function(callback){ $(window).on("load", callback) 
};

var $gallery1 = $('#slider-1 .slides').flickity({
    pageDots: false,
    prevNextButtons: false,
    initialIndex: 1,
    wrapAround: true,
    draggable: false
    
  });

  var $gallery2 = $('#slider-2 .slides').flickity({
    pageDots: false,
    prevNextButtons: false,
    initialIndex: 1,
    wrapAround: true,
    draggable: false
  });
  var $gallery3 = $('#slider-3 .slides').flickity({
    pageDots: false,
    prevNextButtons: false,
    initialIndex: 100,
    wrapAround: true,
    freeScroll: true,
    draggable: false,
    setGallerySize: false
  });

  $('.btn-next').on( 'click', function() {
    $gallery1.flickity('next');
    $gallery2.flickity('next');
  });
   
  $('.btn-prev').on( 'click', function() {
    $gallery1.flickity('previous');
    $gallery2.flickity('previous');
  });
  $('.btn-prev__arrow').on( 'click', function() {
    $gallery3.flickity('next');
  });
   
  $('.btn-next__arrow').on( 'click', function() {
    $gallery3.flickity('previous');
  });
   

  $(function() {
  
    $("#menu-wrapper").click(function(event) {
      event.stopPropagation();
    
      $("#menu-container .menu-list").toggleClass("active");
      slideMenu();
  
      $("body").toggleClass("overflow-hidden");
    });
  
    $(".menu-list").find(".accordion-toggle").click(function() {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
  
      $(".menu-list .accordion-content")
        .not($(this).next())
        .slideUp("fast")
        .removeClass("open");
      $(".menu-list .accordion-toggle")
        .not(jQuery(this))
        .removeClass("active-tab")
        .find(".menu-link")
        .removeClass("active");
    });
  }); // jQuery load
  
    var btn = document.getElementById("btn-contact");
    btn.addEventListener("click",function(){
        swal("Successful!", "Your message has been sent", "success");
});

$('#toTop').click(function() {
 
    $('body,html').animate({scrollTop:0},1600);
 
});