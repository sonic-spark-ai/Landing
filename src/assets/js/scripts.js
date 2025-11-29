$(document).ready(function () {
    // Navbar Scroll Effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar-sonic').addClass('scrolled');
        } else {
            $('.navbar-sonic').removeClass('scrolled');
        }
    });

    // Mobile Menu Toggle
    $('.mobile-toggle').click(function () {
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        $('body').toggleClass('no-scroll'); // Optional: prevent body scrolling
    });

    // Close Mobile Menu on Link Click
    $('.mobile-link, .btn-cta').click(function () {
        $('.mobile-toggle').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('body').removeClass('no-scroll');
    });

    // Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                $(element).removeClass('ready-to-reveal').addClass('fade-in-up');
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Initialize animations
    $('.fade-in-up').each(function () {
        const element = this;
        $(element).removeClass('fade-in-up').addClass('ready-to-reveal');
        observer.observe(element);
    });

    // Back to Top Button
    const backToTopBtn = $('#backToTop');
    const whatWeOfferSection = $('#what-we-offer');

    $(window).scroll(function () {
        if (whatWeOfferSection.length) {
            const sectionBottom = whatWeOfferSection.offset().top + whatWeOfferSection.outerHeight();
            const scrollPosition = $(window).scrollTop();

            if (scrollPosition > sectionBottom) {
                backToTopBtn.addClass('show');
            } else {
                backToTopBtn.removeClass('show');
            }
        }
    });

    backToTopBtn.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600, 'swing');
    });
});