$(document).ready(function(){
    //offset top

	function reinit(){
		var heightHeader = $('.top-nav');
		var top = heightHeader.height();
		$('body').offset({top:top});
	};

	reinit();

	$( window ).resize(function() {
		reinit();
    });

    //offset top /

    //slider top

    $('.banner-slick').slick({
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        responsive: [
            {
                breakpoint: 768,
                settings: 'unslick',
                infinite: false,
            }
          ]
    });

    //slider top /

    // slider carousel
    $('.customers-carousel').slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true
              }
            }
          ]
    });
    // slider carousel /

    // validation form


    var form = $("form");

      $(".send-form").click(function(event) {
          validator (event);
          $('#form-woz').addClass('was-validated');

          if ($('#select-form').is(':invalid')) {
            $('.nice-select').addClass('select-is-invalid')
          } else {
            $('.nice-select').addClass('select-is-valid')
          }
      });

      $(".send-email").click(function(event) {
        validator (event);
        $('#footer-form').addClass('was-validated');
      });

    function validator(event) {
      if (form[0].checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    // validation form /

    // custom select

    $('select').niceSelect();
    
});