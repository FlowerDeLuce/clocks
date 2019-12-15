

$(window).on('resize', function () {

});

$(window).on('load', function () {
  initCollectionSlider();
});


function initCollectionSlider(){
  $('.js-collectionSlider').each(function () {
    $(this).slick({
      prevArrow: '<span class="b-collection__arrow -prev"> <i class="fa fa-chevron-left"></i> </span>',
      nextArrow: '<span class="b-collection__arrow -next"> <i class="fa fa-chevron-right"></i> </span>',
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,

      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1

          }
        }
      ]
    });
  });
}

