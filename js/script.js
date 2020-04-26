$(document).ready(function() {

    //ready

    //nojs
    $('body').removeClass('no-js');

    //------------------------------------------------------------------------//

    //fakelink
    $('a[href="#"]').on('click', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------------------------//

    //navigation
    $('.navigation-toggle').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 150);
        $('html').toggleClass('navigation-open');
    });

    //------------------------------------------------------------------------//

    //slider
    $('.slider-block').slick({
        dots: true,
        arrows: false,
        draggable: true,
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.slider-item',
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //------------------------------------------------------------------------//

    //about projects slider
    $('.about-projects-slider').slick({
        dots: false,
        arrows: true,
        draggable: true,
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.slider-item',
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //------------------------------------------------------------------------//

    //phone mask
    $('.phone-mask').mask('+7 (999) 999-99-99', {autoclear: false});

    //------------------------------------------------------------------------//

    //input label
    var inputFields = $('.input-wrapper .input-text, .input-wrapper .textarea');

    inputFields.each(function(index, el) {
        if ( $(el).val() != '' ) {
            $(this).parents('.input-wrapper').addClass('active');
            if ( $(el).hasClass('textarea') ) {
                $(this).height(0).height(this.scrollHeight);
            }
        }
    });

    inputFields.on('keydown keyup', function(event) {
        var thisElement = $(this),
            thisParent = thisElement.parents('.input-wrapper'),
            thisValue = thisElement.val();
        if ( thisValue &&  thisValue != '+7 (___) ___-__-__' ) {
            thisParent.addClass('active');
        } else {
            thisParent.removeClass('active');
        }
    });

    $.fn.setCursorPosition = function(pos) {
      this.each(function(index, elem) {
        if (elem.setSelectionRange) {
          elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      });
      return this;
    };

    inputFields.on('focusin', function(event) {
        $(this).parents('.input-wrapper').addClass('focus');
        if ( $(this).hasClass('phone-mask') ) {
            $(this).setCursorPosition(1);
        }
    });
    inputFields.on('focusout', function(event) {
        $(this).parents('.input-wrapper').removeClass('focus');
    });

    //------------------------------------------------------------------------//

    //input file
    $('.input-wrapper .input-file').on('change', function(event) {
        var thisElement = $(this),
            thisParent = thisElement.parents('.input-wrapper'),
            thisValue = thisElement.val();
        if ( thisValue ) {
            thisParent.addClass('active');
        } else {
            thisParent.removeClass('active');
        }

        var thisFiles = event.target.files,
            thisFilesArr = [];

        for (var i = thisFiles.length - 1; i >= 0; i--) {
            thisFilesArr.push(thisFiles[i].name);
        }
        thisFilesArr = thisFilesArr.toString().replace(/,/g, ', ');

        thisParent.find('.feedback-file-value').text(thisFilesArr);
    });

    $('#feedback-file').on('dragenter dragover', function(event) {
        $(this).parents('.input-wrapper').addClass('dragover');
    });
    $('#feedback-file').on('dragleave change drop', function(event) {
        $(this).parents('.input-wrapper').removeClass('dragover');
    });

    //------------------------------------------------------------------------//

    //map city
    $('.map-city-link').on('click', function(event) {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //------------------------------------------------------------------------//

    //textarea auto resize
    $('.textarea').on('change keyup keydown paste cut', function(event) {
        $(this).height(0).height(this.scrollHeight);
    });

    //------------------------------------------------------------------------//

    //vacancy mobile more
    $('.vacancy-decription-mobile-more').on('click', function(event) {
        event.preventDefault();
        $(this).hide();
        $('.vacancy-decription-mobile-hidden').addClass('show');
    });

    //------------------------------------------------------------------------//

    //project tasks slider
    $('.project-tasks-slider').slick({
        dots: true,
        arrows: true,
        draggable: true,
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.slider-item',
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    //------------------------------------------------------------------------//

    //project gallery slider
    $('.project-gallery-slider').slick({
        dots: true,
        arrows: true,
        draggable: true,
        infinite: true,
        centerMode: true,
        centerPadding: '13%',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 300,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.slider-item',
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0'
                }
            }
        ]
    });

    //------------------------------------------------------------------------//

    //animation
    $('.test').waypoint(function(direction) {
        $(this.element).addClass('animated275').addClass('fadeInDown').addClass('visibility-visible');
    }, {
        offset: "90%"
    });

    $('.header-caption h1 > span, .caption-number, .caption-title, .advantages-slider, .about-achievement, .about-advantage, .about-projects-title, .about-project, .client-screens, .client-description, .clients-more, .feedback-form, .feedback-contact, .jobs-caption, .jobs-list li, .vacancy-info-block, .vacancy-back, .vacancy-caption, .vacancy-city, .vacancy-decription > *, .vacancy-conditions-title, .vacancy-conditions-col, .feedback-caption, .project-hero-back, .project-hero-text h1, .project-hero-text p, .project-feature, .project-goal, .project-description-text > *, .project-comment-person, .project-comment-text, .project-tasks-caption, .project-task, .project-gallery-caption, .project-result-item, .project-result-caption, .project-result-info > *, .feedback-success-icon, .feedback-success-title, .feedback-success-block > p').waypoint(function(direction) {
        $(this.element).addClass('animated275').addClass('fadeInUp').addClass('visibility-visible');
    }, {
        offset: "90%"
    });

    $('.logo, .menu, .header-phone, .project-gallery-slider').waypoint(function(direction) {
        $(this.element).addClass('animated275').addClass('fadeIn').addClass('visibility-visible');
    }, {
        offset: "90%"
    });

    $('.footer-global').waypoint(function(direction) {
        $(this.element).addClass('animated275').addClass('fadeIn').addClass('visibility-visible');
    }, {
        offset: "100%"
    });

    //------------------------------------------------------------------------//

}); //document ready