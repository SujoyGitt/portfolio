(function($) {
    'use strict';

    var imJs = {
        m: function(e) {
            imJs.d();
            imJs.methods();
        },
        d: function(e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')

        },

        methods: function(e) {
            imJs.featherAtcivation();
            imJs.backToTopInit();
            imJs.mobileMenuActive();
            imJs.vedioActivation();
            imJs.stickyHeader();
            imJs.smothScroll();
            imJs.smothScroll_Two();
            imJs.stickyAdjust();
            imJs.testimonialActivation();
            imJs.wowActive();
            imJs.awsActivation();
            imJs.demoActive();
            imJs.onePageNav();
        },


        demoActive: function(e) {
            $('.rn-right-demo').on('click', function(e) {
                $('.demo-modal-area').addClass('open');
            })
            $('.demo-close-btn').on('click', function(e) {
                $('.demo-modal-area').removeClass('open');
            })
        },

       


        wowActive: function() {
            new WOW().init();
        },

        smothScroll: function() {
            $(document).on('click', '.smoth-animation', function(event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 50
                }, 300);
            });
        },
        // two scroll spy
        smothScroll_Two: function() {
            $(document).on('click', '.smoth-animation-two', function(event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 0
                }, 300);
            });
        },


        stickyAdjust: function(e) {
            // Sticky Top Adjust..,
            $('.rbt-sticky-top-adjust').css({
                top: 120
            });

            $('.rbt-sticky-top-adjust-two').css({
                top: 200
            });
            $('.rbt-sticky-top-adjust-three').css({
                top: 25
            });
        },

        testimonialActivation: function() {
            $('.testimonial-activation').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });

            $('.testimonial-item-one').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                    }
                }]
            });


            $('.portfolio-slick-activation').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                        }
                    }
                ]
            });


            $('.blog-slick-activation').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                        }
                    }
                ]
            });

            $('.testimonial-activation-item-3').slick({
                arrows: true,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    }
                ]
            });

            $('.brand-activation-item-5').slick({
                arrows: true,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        },

        featherAtcivation: function() {
            feather.replace()
        },


        backToTopInit: function() {
            // declare variable
            var scrollTop = $('.backto-top');
            $(window).scroll(function() {
                // declare variable
                var topPos = $(this).scrollTop();
                // if user scrolls down - show scroll to top button
                if (topPos > 100) {
                    $(scrollTop).css('opacity', '1');

                } else {
                    $(scrollTop).css('opacity', '0');
                }
            });

            //Click event to scroll to top
            $(scrollTop).on('click', function() {
                $('html, body').animate({
                    scrollTop: 0,
                    easingType: 'linear',
                }, 500);
                return false;
            });

        },

        stickyHeader: function(e) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 250) {
                    $('.header--sticky').addClass('sticky')
                } else {
                    $('.header--sticky').removeClass('sticky')
                }
            })
        },

        vedioActivation: function(e) {
            $('#play-video, .play-video').on('click', function(e) {
                e.preventDefault();
                $('#video-overlay, .video-overlay').addClass('open');
                $("#video-overlay, .video-overlay").append('<iframe width="80%" height="80%" src="https://www.youtube.com/embed/7e90gBu4pas" frameborder="0" allowfullscreen></iframe>');
            });

            $('.video-overlay, .video-overlay-close').on('click', function(e) {
                e.preventDefault();
                close_video();
            });

            $(document).keyup(function(e) {
                if (e.keyCode === 27) {
                    close_video();
                }
            });

            function close_video() {
                $('.video-overlay.open').removeClass('open').find('iframe').remove();
            };
        },

        mobileMenuActive: function(e) {

            $('.humberger-menu').on('click', function(e) {
                e.preventDefault();
                $('.popup-mobile-menu').addClass('menu-open');
                imJs._html.css({
                    overflow: 'hidden'
                })
            });

            $('.close-menu-activation, .popup-mobile-menu .primary-menu .nav-item a').on('click', function(e) {
                e.preventDefault();
                $('.popup-mobile-menu').removeClass('menu-open');
                $('.popup-mobile-menu .has-droupdown > a').removeClass('open').siblings('.submenu').removeClass('active').slideUp('400');
                imJs._html.css({
                    overflow: ''
                })
            });

            $('.popup-mobile-menu').on('click', function(e) {
                e.target === this && $('.popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({
                    overflow: ''
                })
            });

            $('.popup-mobile-menu .has-droupdown > a').on('click', function(e) {
                e.preventDefault();
                $(this).siblings('.submenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open');
                imJs._html.css({
                    overflow: ''
                })
            });


            $('.nav-pills .nav-link').on('click', function(e) {
                $('.rn-popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({
                    overflow: ''
                })
            })

        },

        awsActivation: function(e) {
            AOS.init();
        },

        onePageNav: function() {
            $('.onepagenav').onePageNav({
                currentClass: 'current',
                changeHash: true,
                scrollSpeed: 500,
                scrollThreshold: 0.2,
                filter: ':not(.external)',
                easing: 'swing',
                scrollChange: function($currentListItem) {
                    console.log(this);
                }
            });
        },

    }
    imJs.m();


})(jQuery, window)




//  send mail logic start here -->

$(document).ready(function () {
    // Initialize validation on form submit
    $("#contact-form").on('submit', function (event) {
        event.preventDefault();
        
        // Clear previous error messages
        $(".form-control").removeClass('is-invalid');
        $(".invalid-feedback").text('');
        $("#form-feedback").hide();

        // Get form values
        let fullname = $("#contact-name").val().trim();
        let phone = $("#contact-phone").val().trim();
        let email = $("#contact-email").val().trim();
        let subject = $("#subject").val().trim();
        let message = $("#contact-message").val().trim();

        let isValid = true;

        // Validate name field
        if (!fullname) {
            $("#contact-name").addClass('is-invalid');
            $("#name-error").text("Please enter your name.");
            isValid = false;
        }

        // Validate phone number field (allow only digits)
        if (!phone) {
            $("#contact-phone").addClass('is-invalid');
            $("#phone-error").text("Please enter your phone number.");
            isValid = false;
        } else if (!/^\d+$/.test(phone)) {
            $("#contact-phone").addClass('is-invalid');
            $("#phone-error").text("Phone number must only contain digits.");
            isValid = false;
        }

        // Validate email field
        if (!email) {
            $("#contact-email").addClass('is-invalid');
            $("#email-error").text("Please enter a valid email address.");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            $("#contact-email").addClass('is-invalid');
            $("#email-error").text("Please enter a valid email address.");
            isValid = false;
        }

        // Validate subject field
        if (!subject) {
            $("#subject").addClass('is-invalid');
            $("#subject-error").text("Please enter a subject.");
            isValid = false;
        }

        // Validate message field
        if (!message) {
            $("#contact-message").addClass('is-invalid');
            $("#message-error").text("Please enter your message.");
            isValid = false;
        }

        // If form is valid, submit the form
        if (isValid) {
            sendEmail(fullname, phone, email, subject, message);
        } else {
            $("#form-feedback").text("Please fix the errors above.").addClass('error').show();
        }
    });
});

// Function to send email
function sendEmail(fullname, phone, email, subject, message) {
    let body = `
        New Message From Your Portfolio <br/><br/>
        User Name: ${fullname} <br/>
        Email: ${email} <br/>
        Phone No: ${phone} <br/>
        Subject: ${subject} <br/>
        Comment: ${message} <br/><br/>
    `;

    // Send email to admin
    Email.send({
        SecureToken: "fc86980c-7a39-4e22-846b-13f42d3a105f",
        To: 'sujoy143656@gmail.com',
        From: "info@steppercode.com",
        Subject: "New Message - From Your Portfolio",
        Body: body
    }).then(() => {
        // Send confirmation email to the user
        Email.send({
            SecureToken: "fc86980c-7a39-4e22-846b-13f42d3a105f",
            To: email,  // Customer's email
            From: "info@steppercode.com",
            Subject: "Thank you for contacting us!",
            Body: `
                <html>
                    <body>
                        <p>Dear ${fullname},</p>
                        <p>Thank you for reaching out to us! We have received your message and will get back to you soon.</p>
                        <p>Your Booking Details:</p>
                        <table>
                            <tr><td><strong>Full Name:</strong></td><td>${fullname}</td></tr>
                            <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
                            <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
                            <tr><td><strong>Subject:</strong></td><td>${subject}</td></tr>
                            <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
                        </table>
                        <p>We will contact you soon.</p>
                        <p>Regards,<br/>London Wheels Limo</p>
                    </body>
                </html>
            `
        }).then(() => {
            // Show success message and reset form
            $("#contact-form")[0].reset();
            $("#form-feedback").text('Your message has been sent successfully!').addClass('success').show();
            alert('Your message has been sent successfully!');
        }).catch(error => {
            console.error("Failed to send confirmation email to customer:", error);
            $("#form-feedback").text("Error sending confirmation email. Please try again.").addClass('error').show();
        });
    }).catch(error => {
        console.error("Failed to send email to admin:", error);
        $("#form-feedback").text("Error sending message. Please try again.").addClass('error').show();
    });
}

// Phone number validation (only allow digits)
function validatePhone(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
