document.addEventListener('DOMContentLoaded', () => {
    const headerElem = document.querySelector('header');
    const logo = document.querySelector('#logo');
    const navMenu = document.querySelector('#nav-menu');
    const navToggle = document.querySelector('#nav-toggle');
    const closeFlyout = document.querySelector('#close-flyout');
    
    // Slick slider initialization for properties
    const propertiesSlider = document.querySelector('#properties-slider');
    if (propertiesSlider) {
        $(propertiesSlider).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
            nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }
            ]
        });
    }

    // Slick slider initialization for testimonials
    const testimonialsSlider = document.querySelector('#testimonials-slider');
    if (testimonialsSlider) {
        $(testimonialsSlider).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
            nextArrow: '<a href="#" class="slick-arrow slick-next">></a>'
        });
    }

    // Toggle navigation menu
    navToggle.addEventListener('click', () => {
        navMenu.style.right = '0';
    });

    closeFlyout.addEventListener('click', () => {
        navMenu.style.right = '-100%';
    });

    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.style.right = '-100%';
        }
    });

    // Sticky header and scroll effects
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 0) {
            navMenu.classList.add('is-sticky');
            logo.style.color = '#000';
            headerElem.style.background = '#fff';
            navToggle.style.borderColor = '#000';
            Array.from(navToggle.querySelectorAll('.strip')).forEach(strip => strip.style.backgroundColor = '#000');
        } else {
            navMenu.classList.remove('is-sticky');
            logo.style.color = '#fff';
            headerElem.style.background = 'transparent';
            navToggle.style.borderColor = '#fff';
            Array.from(navToggle.querySelectorAll('.strip')).forEach(strip => strip.style.backgroundColor = '#fff');
        }

        if (scrollTop >= 200) {
            headerElem.style.padding = '0.5rem';
            headerElem.style.boxShadow = '0 -4px 10px 1px #999';
        } else {
            headerElem.style.padding = '1rem 0';
            headerElem.style.boxShadow = 'none';
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set the correct state on page load
});
