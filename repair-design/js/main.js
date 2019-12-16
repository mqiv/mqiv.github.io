$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
  });
      
    $('.scrollup').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500);
      return false;
    });
    //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
     loop: true,
     pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
   });

   var next = $('.swiper-button-next');
   var prev = $('.swiper-button-prev');
   var bullets = $('.swiper-pagination');

   next.css('left', prev.width() + 25 + bullets.width() + 25)
   bullets.css('left', prev.width() + 25)

});



$(document).mouseup(function (e){ // событие клика по веб-документу
  var modalctr = $("#mod"); // тут указываем ID элемента
  var modall = $('#mud')
  if (modall.is(e.target) && modall.has(e.target).length === 0){
    modalctr.hide();
    modall.hide();
  }
  
  // if (div.is(e.target) // если клик был по нашему блоку
  //     && div.has(e.target).length === 0) { // и не по его дочерним элементам
  //   div.hide(); // скрываем его
  // }
});

$(function() {
  var first = $(".swiper-container-first");
  var second = $(".swiper-container-second");
  $(window).resize(function() {
      var i = $(".swiper-container-first, .swiper-container-second").index(first);
      if ($(window).width() <= "820" && !i) {
          var a = $("<abracadabra/>");
          a.insertAfter(first);
          first.insertAfter(second);
          second.insertAfter(a);
          a.remove()
      } else if ($(window).width() > "820" && i) {
          var a = $("<abracadabra/>");
          a.insertAfter(first);
          first.insertAfter(second);
          second.insertAfter(a);
          a.remove()
      }
  }).resize()
});