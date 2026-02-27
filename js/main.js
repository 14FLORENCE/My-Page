// Faster preloader - hide when DOM is ready instead of waiting for all images
$(document).ready(function () {
    // Add a small delay to ensure smooth transition
    setTimeout(function () {
        $('#preloader').fadeOut('slow', function () { $(this).remove(); });
    }, 500);
    // Scroll Progress Bar
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height() - $(window).height();
        var scrollPercent = (scrollTop / docHeight) * 100;
        $('#scroll-progress-bar').css('width', scrollPercent + '%');
    });
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/
(function () {

    var bodyEl = document.body,
        //content = document.querySelector( '.content-wrap' ),
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = false;

    function init() {
        initEvents();
    }

    function initEvents() {
        openbtn.addEventListener('click', toggleMenu);
        if (closebtn) {
            closebtn.addEventListener('click', toggleMenu);
        }

        /* close the menu element if the target it´s not the menu element or one of its descendants..
        content.addEventListener( 'click', function(ev) {
            var target = ev.target;
            if( isOpen && target !== openbtn ) {
                toggleMenu();
            }
        } );
        */
    }

    function toggleMenu() {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
        }
        else {
            classie.add(bodyEl, 'show-menu');
        }
        isOpen = !isOpen;
    }

    init();

})();

/******************************************************************************************************************************
Contact Form Enhancement
*******************************************************************************************************************************/
$(document).ready(function () {
    const contactForm = $('#contactForm');
    const submitBtn = $('#submitBtn');
    const formMessage = $('#formMessage');

    contactForm.on('submit', function (e) {
        e.preventDefault();

        // Show loading state
        submitBtn.addClass('loading').prop('disabled', true);
        submitBtn.html('<i class="fa fa-spinner fa-spin"></i> Sending...');

        // Hide any previous messages
        formMessage.hide();

        // Submit the form
        const formData = new FormData(this);

        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    // Success
                    formMessage.removeClass('error').addClass('success')
                        .html('<i class="fa fa-check-circle"></i> Thank you! Your message has been sent successfully.')
                        .fadeIn();
                    contactForm[0].reset();

                    // Scroll to message
                    $('html, body').animate({
                        scrollTop: formMessage.offset().top - 100
                    }, 500);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                // Error
                formMessage.removeClass('success').addClass('error')
                    .html('<i class="fa fa-exclamation-triangle"></i> Oops! There was a problem sending your message. Please try again.')
                    .fadeIn();
            })
            .finally(() => {
                // Reset button state
                submitBtn.removeClass('loading').prop('disabled', false);
                submitBtn.html('<i class="fa fa-paper-plane"></i> Send Message');
            });
    });

    // Enhanced form validation feedback
    contactForm.find('input, textarea').on('blur', function () {
        const $field = $(this);
        const $group = $field.closest('.form-group');

        if ($field.val().trim() !== '') {
            $group.addClass('has-value');
        } else {
            $group.removeClass('has-value');
        }
    });

    // Auto-resize textarea
    $('#contact-message').on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});


