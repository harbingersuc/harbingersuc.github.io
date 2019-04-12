(function($) {
  $(document).ready(function() {

// SMOOTH SCROLLING

var arrow = $(".arrow__link");
var benefitSection = $(".benefit");
var benefitOffset = benefitSection.offset().top;

$(arrow).click(function(e) {
  e.preventDefault();
  $("html, body").animate({scrollTop: benefitOffset}, 500, "swing");
});


// OWL CAROUSEL INITIALIZATION
    var owl = $("#sliderM");
    owl.owlCarousel({
      items: 4,
      pagination: false,
      dots: false,
      loop: true,
      nav: false,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      autoplay: true,
      autoplayHoverPause:true,
      autoplayTimeout: 2000,
      responsive: {
        0: {
            items: 1,
            nav: true,
        },

        600: {
            items: 2,
        },

        992: {
            items: 4,
        }
      }
    });

// TESTIMONIALS CAROUSEL

  var owl2 = $("#sliderTest");
  owl2.owlCarousel({
    items: 1,
    pagination: false,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause:true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000
  });


// MATERIALIZE MODAL INITIALIZATION

  $('#modal1').modal();

  }); 
}(jQuery));