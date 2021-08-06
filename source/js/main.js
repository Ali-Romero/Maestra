$(document).ready(function () {
  // menu
  $('.menu-burger').click(function () {
    $(this).toggleClass('active')
  });
  $('.menu-burger').click(function () {
    $('.header__mobile-menu').toggleClass('open-menu');
  });
  $('.menu-burger').click(function () {
      $('.menu-burger__mobile').toggleClass('d-block');
    });
  // slider
  $('.js-portfolio-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
  })

  // modal slider
  $(document).on('opening', '.js-projects-modal', function () {
    $('.js-projects-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
    })
  });

  $(document).on('closed', '.remodal', function (e) {
    $('.js-projects-slider').slick('unslick')
  });
})

$(document).ready(function() {
  $('.works-modal-form').submit(function(e) {
    e.preventDefault();
    var name = $('.contact-form__input-name').val();
    var phone = $('.contact-form__input-phone').val();
    var regex = /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g;
 
    $(".error").remove();
 
    if (name.length< 1) {
      $('.contact-form__input-name').after('<span class="error">Заполните поле,для связи с Вами</span>');
    }
    if (phone.length < 13 && /^\+380\(\d{2}\)\s\d{3}\-\d{2}\-\d{2}$/) {
      $('.contact-form__input-phone').after('<span class="error">Заполните поле,для связи с Вами</span>');
    }
  });
});

