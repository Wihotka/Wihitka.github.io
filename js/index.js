window.addEventListener('DOMContentLoaded', function() {
    // Mobile Detect hovers
    var md = new MobileDetect(navigator.userAgent),grade = md.mobileGrade();window.mobileDetect = md;

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
    document.querySelector('.header-burger').addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.toggle('burger-is-active');
    });

    // Navigation mobile menu scroll
    $(document).ready(function(){
        $("#mobile-menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 600);
        });
    });

    // Select Multiple Header
    new MultipleSelect('#select-multiple-first', {
        placeholder: 'Реализм'
    });

    new MultipleSelect('#select-multiple-second', {
        placeholder: 'Импрессионизм'
    });

    new MultipleSelect('#select-multiple-third', {
        placeholder: 'Постимпрессионизм'
    });

    new MultipleSelect('#select-multiple-fourth', {
        placeholder: 'Авангард'
    });

    new MultipleSelect('#select-multiple-fifth', {
        placeholder: 'Футуризм'
    });

    // Simple Bar
    document.querySelectorAll('.dropdown-select').forEach(el => {
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
        loop: true,

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
    $(".gallery-second-image").magnificPopup({
        type: 'image',
        image: {
            titleSrc:'title',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });

    // Tabs language
    document.querySelectorAll('.catalog-flags-button').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.tab').forEach(function(tabContent) {
                tabContent.classList.remove('tab-active');
            });
            document.querySelector(`[data-path="${path}"]`).parentNode.querySelector('.tab').classList.add('tab-active');
        })
    });

    // Accordion parameters
    $( function() {
        $( "#accordion" ).accordion({
            heightStyle: "content"
        });
    });

    // Tabs catalog
    document.querySelectorAll('.catalog-second-list-tab').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.catalog-second-list-tab').forEach(function(tabsHighlight) {
                tabsHighlight.classList.remove('catalog-highlight');
            });
            document.querySelector(`[data-path="${path}"]`).classList.add('catalog-highlight');

            document.querySelectorAll('.catalog-first-block').forEach(function(tabsRemove) {
                tabsRemove.classList.remove('catalog-tab-active');
            });
            document.querySelector(`[data-name="${path}"]`).classList.add('catalog-tab-active');
        })
    });

    // Swiper Events slider parameters
    var gallerySwiper = new Swiper('.events-swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.events-pagination',
            clickable: true,
        },
    });

    // Spoiler Editions
    jQuery(document).ready(function(){
        jQuery('.spoiler-head').click(function(){
            $(this).parents('.spoiler-wrap').toggleClass("active").find('.unchecked').slideToggle();
            $(this).parents('.spoiler-wrap').toggleClass("disabled");
        });

        jQuery('.spoiler-item').click(function(e){
            e.preventDefault();
            $(this).toggleClass("unchecked");
            $(this).toggleClass("checked");
        });

        jQuery('.spoiler-item-close').click(function(){
            $(this).parents('.spoiler-item').slideUp();
        });
    });

    // Tab events
    document.querySelector('.events-button').addEventListener('click', function(event) {
        document.querySelector('.events-blocks-extra').classList.add('events-blocks-active');
        document.querySelector('.events-forbutton').classList.add('events-forbutton-none');
    });

    // Swiper Editions slider parameters 
    var editionsSwiper = new Swiper('.editions-swiper', {
        // Optional parameters
        loop: true,

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
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.projects-swiper-button-next',
            prevEl: '.projects-swiper-button-prev',
        },

        // Autoplay slider
        autoplay: {
            delay: 4000,
        },
    });

    // Input Mask
    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999) - 999 - 99 - 99");

    im.mask(selector);

    // Just Validate
    new JustValidate('.contacts-first-form', {
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