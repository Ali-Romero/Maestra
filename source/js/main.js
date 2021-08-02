$(document).ready(function () {
  // menu
  $('.menu-burger').click(function () {
    $(this).toggleClass('active')
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
