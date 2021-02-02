window.addEventListener('DOMContentLoaded', function() {
    // Navigation menu scroll
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 600);
        });
    });

    // Header Menu
    document.querySelector('.header-menu__burger').addEventListener('click', function() {
        document.querySelector('.header-menu__mobile').classList.toggle('burger-active');
    });

    // Navigation mobile menu scroll
    $(document).ready(function(){
        $("#mobile").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 600);
        });
    });

    // Spoiler header-submenu
    jQuery(document).ready(function(){
        jQuery('.header-submenu__list-button').click(function(){
            $('.header-submenu__list-button').not(this).parents('.header-submenu__list-item').removeClass("header-submenu__list-item_active").find('.header-submenu__dropdown-menu').slideUp();
            $(this).parents('.header-submenu__list-item').toggleClass("header-submenu__list-item_active").find('.header-submenu__dropdown-menu').slideToggle();
        });

        $(document).mouseup(function (e){
            if (!$('.header-submenu__list-item').is(e.target)
                && $('.header-submenu__list-item').has(e.target).length === 0) {
                $('.header-submenu__list-button').parents('.header-submenu__list-item').removeClass("header-submenu__list-item_active").find('.header-submenu__dropdown-menu').slideUp();
            }
        });
    });

    // Simple Bar
    document.querySelectorAll('.header-submenu__dropdown-list').forEach(el => {
        new SimpleBar(el, {autoHide: false, scrollbarMaxSize: 28}) 
    });

    // Swiper Hero slider parameters
    var heroSwiper = new Swiper('.hero-swiper', {
        // Optional parameters
        loop: true,

        // Autoplay slider
        autoplay: {
          delay: 9000,
        },
    });

    // Navigation Hero Block
    $(document).ready(function(){
        $("#hero-block").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 900);
        });
    });

    // Choices Select Gallery
    const element = document.getElementById('select');
    const choices = new Choices(element, {
        searchEnabled: false,
        position: 'bottom',
        sorter: function(a) {
            return a.label;
          },
        itemSelectText: '',
    });

    // Swiper Gallery slider parameters
    var gallerySwiper = new Swiper('.gallery-swiper', {
        // Optional parameters
        slidesPerColumn: 1,
        slidesPerColumnFill: 'row',
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 0,

        // Responsive breakpoints
        breakpoints: {
            1301: {
                slidesPerColumn: 2,
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 50,
            },

            1025: {
                slidesPerColumn: 2,
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 34,
            },

            701: {
                slidesPerColumn: 2,
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 34,
            },
        },

        // If we need pagination
        pagination: {
            el: '.gallery-pagination',
            type: 'fraction',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery-swiper-button-next',
            prevEl: '.gallery-swiper-button-prev',
        },
    });

    // Gallery zoom
    $(".gallery-second__picture").magnificPopup({
        type: 'image',
        image: {
            titleSrc:'title',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });

    // Tabs language
    document.querySelectorAll('.catalog__flag-button').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.catalog__flag-tab').forEach(function(tabContent) {
                tabContent.classList.remove('catalog__flag-tab_active');
            });
            document.querySelector(`[data-path="${path}"]`).parentNode.querySelector('.catalog__flag-tab').classList.add('catalog__flag-tab_active');

            document.querySelectorAll('.catalog-second__list').forEach(function(listRemove) {
                listRemove.classList.remove('catalog-second__list_active');
            });
            document.querySelector(`[data-list="${path}"]`).classList.add('catalog-second__list_active');
        })
    });

    // Accordion parameters
    $( function() {
        $( "#accordion" ).accordion({
            heightStyle: "content"
        });
    });

    // Tabs catalog
    document.querySelectorAll('.catalog-second__list-tab').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.catalog-second__list-tab').forEach(function(tabsHighlight) {
                tabsHighlight.classList.remove('catalog-second__highlight');
            });
            document.querySelector(`[data-path="${path}"]`).classList.add('catalog-second__highlight');

            document.querySelectorAll('.catalog-first__block').forEach(function(tabsRemove) {
                tabsRemove.classList.remove('catalog-first__tab_active');
            });
            document.querySelector(`[data-name="${path}"]`).classList.add('catalog-first__tab_active');
        })
    });

    // Swiper Events slider parameters
    var gallerySwiper = new Swiper('.events__swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.events__pagination',
            clickable: true,
        },
    });

    // Spoiler Editions
    jQuery(document).ready(function(){
        jQuery('.editions-first__spoiler-head').click(function(){
            $(this).parents('.editions-first__spoiler').toggleClass("editions-first__spoiler_active").find('.editions-first__spoiler-item_unchecked').slideToggle();
            $(this).parents('.editions-first__spoiler').toggleClass("editions-first__spoiler_disabled");
        });

        jQuery('.editions-first__spoiler-item').click(function(e){
            e.preventDefault();
            $(this).toggleClass("editions-first__spoiler-item_unchecked");
            $(this).toggleClass("editions-first__spoiler-item_checked");
        });

        jQuery('.editions-first__spoiler-item-close').click(function(){
            $(this).parents('.editions-first__spoiler-item').slideUp();
        });
    });

    // Tab events
    document.querySelector('.events__button').addEventListener('click', function(event) {
        document.querySelector('.events__blocks-extra').classList.add('events__blocks-active');
        document.querySelector('.events__button-content').classList.add('events__button-content-none');
    });

    // Swiper Editions slider parameters 
    var editionsSwiper = new Swiper('.editions-swiper', {
        // Optional parameters
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34,

        // Responsive breakpoints
        breakpoints: {
            1301: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 50,
            },

            1025: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 25,
            },

            769: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 49,
            },
        },

        // If we need pagination
        pagination: {
            el: '.editions-pagination',
            type: 'fraction',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.editions-swiper-button-next',
            prevEl: '.editions-swiper-button-prev',
        },
    });

    // Swiper Projects slider parameters
    var projectsSwiper = new Swiper('.projects-swiper', {
        // Optional parameters
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 0,

        // Responsive breakpoints
        breakpoints: {
            1551: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 50,
            },

            1025: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 34,
            },

            769: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 50,
            },

            701: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 34,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.projects-swiper-button-next',
            prevEl: '.projects-swiper-button-prev',
        },
    });

    // Input Mask
    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999) - 999 - 99 - 99");

    im.mask(selector);

    // Just Validate
    new JustValidate('.contacts-first__form', {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 20
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue();
                    return phone.toString().length === 10;
                }
            },
        },
        messages: {
            name: {
                required: 'Поле обязательно для заполнения',
                minLength: 'Необходимо ввести минимум 2 символа'
            },
            tel: {
                required: 'Поле обязательно для заполнения',
                function: 'Укажите корректный номер'
            },
        },
    });

    // Yandex Map
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [55.7585, 37.606],
            // от 0 (весь мир) до 19.
            zoom: 15,
            // Элементы управления (выкл).
            controls: []
        });

        myMap.controls.add('zoomControl', {
            size: 'default',
            float: 'none',
            position: {
                bottom: '380px',
                right: '10px'
            }
        });

        myMap.controls.add('geolocationControl', {
            size: 'default',
            float: 'none',
            position: {
                bottom: '340px',
                right: '10px'
            }
        });
        // Создание кастомной метки на карте.
        var myPlacemark = new ymaps.Placemark([55.7585, 37.6011], {},
            {
               iconLayout: 'default#image', // обозначаем что будет использоваться пользовательское изображение
               iconImageHref: 'images/9-contacts/point.svg',  // указываем путь к метке
               iconImageSize: [20, 20], // указываем размер изображения
               iconImageOffset: [-10, -10] // обозначаем сдвиг от левого верхнего угла к точке изображения метки .
             });

           myMap.geoObjects.add(myPlacemark) // добавляем метку на карту
    };
});