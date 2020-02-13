$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close'),
    modalSmall = $('.modal-small'),
    closeSmallBtn = $('.modal-small__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeSmallBtn.on('click', function () {
    modalSmall.removeClass('modal-small--visible');
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1500);
    return true;
  });
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
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

  new WOW().init();

  // ВАЛИДАЦИЯ ФОРМЫ
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "label",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 11
      },
      userEmail: {
        required: true,
        email: true
      },
      policy: {
        required: true
      }
    },
    messages: {
      userName: {
        required: "Назовите своё имя",
        minlength: "Имя не должно быть короче двух символов",
        maxlength: "Имя не должно быть длинее 15 символов"
      },
      userPhone: {
        required: "Напишите свой телефон",
        minlength: "Номер должен состоять из 11 цифр"
      },
      userEmail: {
        required: "Укажите свой Email",
        email: "Введите в формате: example@domain.com"
      },
      policy: {
        required: "Для отправки формы нужно согласиться с условиями"
      },
    },
    // Проверка
    errorPlacement: function (error, policy) {
      if (policy.attr("type") == "checkbox") {
        return policy.next('label').append(error);
      }

      error.insertAfter($(policy));
    },
    // ajax
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал: ' + response);
          $(form)[0].reset();
          $(modal).removeClass('modal--visible');
          $(modalSmall).toggleClass('modal-small--visible');
          $(".").text(response);
        },
        error: function (response) {
          console.log('Ajax не сработал: ' + response);
        }
      });
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "label",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 11
      },
      userQuestion: {
        required: true,
        minlength: 6,
        maxlength: 70
      },
      policy: {
        required: true
      }
    },
    messages: {
      userName: {
        required: "Назовите своё имя",
        minlength: "Имя не должно быть короче двух символов",
        maxlength: "Имя не должно быть длинее 15 символов"
      },
      userPhone: {
        required: "Напишите свой телефон",
        minlength: "Номер должен состоять из 11 цифр"
      },
      userQuestion: {
        required: "Напишите свой вопрос",
      },
      policy: {
        required: "Обязательное соглашение"
      },
    },
    // Проверка
    errorPlacement: function (error, policy) {
      if (policy.attr("type") == "checkbox") {
        return policy.next('label').append(error);
      }

      error.insertAfter($(policy));
    },
    // ajax
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал: ' + response);
          $(form)[0].reset();
          $(modalSmall).toggleClass('modal-small--visible');
          $(".").text(response);
        },
        error: function (response) {
          console.log('Ajax не сработал: ' + response);
        }
      });
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "label",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 11
      },
      policy: {
        required: true
      }
    },
    messages: {
      userName: {
        required: "Назовите своё имя",
        minlength: "Имя не должно быть короче двух символов",
        maxlength: "Имя не должно быть длинее 15 символов"
      },
      userPhone: {
        required: "Напишите свой телефон",
        minlength: "Номер должен быть из 11 цифр"
      },
      policy: {
        required: "Для отправки формы нужно согласиться с условиями"
      }
    },
    // Проверка
    errorPlacement: function (error, policy) {
      if (policy.attr("type") == "checkbox") {
        return policy.next('label').append(error);
      }

      error.insertAfter($(policy));
    },
    // ajax
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал: ' + response);
          $(form)[0].reset();
          $(modalSmall).toggleClass('modal-small--visible');
          $(".").text(response);
        },
        error: function (response) {
          console.log('Ajax не сработал: ' + response);
        }
      });
    }
  });
  // Маска для телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', {
  });
  // КАРТА
  // setTimeout(function () {
  //   var elem = document.createElement('script');
  //   elem.type = 'text/javascript';
  //   elem.src = '//api-maps.yandex.ru/2.1/?apikey=907cb069-8f9f-4563-840c-174a9b49f2b6&lang=ru_RU';
  //   document.getElementsByTagName('body')[0].appendChild(elem);
  // }, 2000);

  // ymaps.ready(function () {
  //   var myMap = new ymaps.Map('map', {
  //       center: [47.244734, 39.723227],
  //       zoom: 13
  //     }, {
  //       searchControlProvider: 'yandex#search'
  //     }),
  //     // Создаём макет содержимого.
  //     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //       '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //     ),

  //     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //       hintContent: 'Наш офис',
  //       balloonContent: 'Вход со двора'
  //     }, {
  //       // Опции.
  //       // Необходимо указать данный тип макета.
  //       iconLayout: 'default#image',
  //       // Своё изображение иконки метки.
  //       iconImageHref: 'img/pin.png',
  //       // Размеры метки.
  //       iconImageSize: [32, 32],
  //       // Смещение левого верхнего угла иконки относительно
  //       // её "ножки" (точки привязки).
  //       iconImageOffset: [-5, -38]
  //     }),

  //     myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
  //       hintContent: 'Собственный значок метки с контентом',
  //       balloonContent: 'А эта — новогодняя',
  //       iconContent: '12'
  //     });
  //   myMap.geoObjects
  //     .add(myPlacemark)
  // });
});
// ЗАМЕНА БЛОКОВ
$(function () {
  var first = $(".swiper-container-first");
  var second = $(".swiper-container-second");
  $(window).resize(function () {
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
// ЗАМЕНА БЛОКОВ
$(function () {
  var first = $(".control__button-first");
  var second = $(".control__policy-second");
  $(window).resize(function () {
    var i = $(".control__button-first, .control__policy-second").index(first);
    if ($(window).width() <= "770" && !i) {
      var a = $("<abracadabra/>");
      a.insertAfter(first);
      first.insertAfter(second);
      second.insertAfter(a);
      a.remove()
    } else if ($(window).width() > "770" && i) {
      var a = $("<abracadabra/>");
      a.insertAfter(first);
      first.insertAfter(second);
      second.insertAfter(a);
      a.remove()
    }
  }).resize()
});
// ЗАМЕНА БЛОКОВ
$(function () {
  var first = $(".footer__title--primary");
  var second = $(".footer__map");
  $(window).resize(function () {
    var i = $(".footer__title--primary, .footer__map").index(first);
    if ($(window).width() <= "500" && !i) {
      var a = $("<abracadabra/>");
      a.insertAfter(first);
      first.insertAfter(second);
      second.insertAfter(a);
      a.remove()
    } else if ($(window).width() > "50" && i) {
      var a = $("<abracadabra/>");
      a.insertAfter(first);
      first.insertAfter(second);
      second.insertAfter(a);
      a.remove()
    }
  }).resize()
});
// ПЕРЕХОДЫ ПО НАВИГАЦИИ
$(document).ready(function () {
  $("#mainNav, #scrollDown, #footerNav").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});
// карта
setTimeout(function () {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = '//api-maps.yandex.ru/2.0/?load=package.standard&lang=ru-RU&onload=getYaMap';
  document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);

function getYaMap() {
  var myMap = new ymaps.Map("map", {
    center: [47.244734, 39.723227],
    zoom: 13
  });
  ymaps.geocode("Санкт-Петербург, ул. Невский проспект, 28").then(function (res) {
    var coord = res.geoObjects.get(0).geometry.getCoordinates();
    var myPlacemark = new ymaps.Placemark([55.661574, 37.573856]);
    myMap.geoObjects.add(myPlacemark);
    myMap.setCenter(coord);
  });
}