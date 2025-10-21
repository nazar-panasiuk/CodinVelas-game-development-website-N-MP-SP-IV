
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const menuToggle = document.getElementById('burger');
burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle('active_menu');
    
});



document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove("active");
        menuToggle.classList.remove('active_menu');
    }
});

if (localStorage.getItem('cookiePopupClosed') === 'true') {
    document.getElementById('cookie-popup').classList.add('hidden');
}

document.getElementById('cookie-close-btn').addEventListener('click', function() {
    document.getElementById('cookie-popup').classList.add('hidden');
    localStorage.setItem('cookiePopupClosed', 'true');
});


/*

let modal2 = document.getElementById("myModal");
let modal__btn = document.querySelector(".modal__btn")

window.addEventListener("DOMContentLoaded", function() {
    modal2.style.display = "flex";
})


modal__btn.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal2.style.display = "none";
    }
}


*/




$(document).ready(function () {
    // Функция для инициализации слайдера
    function initSlick() {
        const windowWidth = $(window).width();
        const slickElement = $('.affiliatesphere_team__slider'); // замените на ваш класс слайдера

        if (windowWidth <= 575 && !slickElement.hasClass('slick-initialized')) {
            slickElement.slick({
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        } else if (windowWidth > 575 && slickElement.hasClass('slick-initialized')) {
            slickElement.slick('unslick'); // Убираем слайдер, если размер экрана больше 575px
        }
    }

    // Вызов функции инициализации при загрузке страницы
    initSlick();

    // Вызов функции при изменении размера экрана
    $(window).resize(function () {
        initSlick();
    });
});



$(document).ready(function () {
    // Функция для инициализации слайдера
    function initSlick() {
        const windowWidth = $(window).width();
        const slickElement = $('.affiliatesphere_customers__slider'); // замените на ваш класс слайдера

        if (windowWidth <= 575 && !slickElement.hasClass('slick-initialized')) {
            slickElement.slick({
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        } else if (windowWidth > 575 && slickElement.hasClass('slick-initialized')) {
            slickElement.slick('unslick'); // Убираем слайдер, если размер экрана больше 575px
        }
    }

    // Вызов функции инициализации при загрузке страницы
    initSlick();

    // Вызов функции при изменении размера экрана
    $(window).resize(function () {
        initSlick();
    });
});



$(document).ready(function () {
    // Функция для инициализации слайдера
    function initSlick() {
        const windowWidth = $(window).width();
        const slickElement = $('.affiliatesphere_product__slider'); // замените на ваш класс слайдера

        if (windowWidth <= 575 && !slickElement.hasClass('slick-initialized')) {
            slickElement.slick({
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        } else if (windowWidth > 575 && slickElement.hasClass('slick-initialized')) {
            slickElement.slick('unslick'); // Убираем слайдер, если размер экрана больше 575px
        }
    }

    // Вызов функции инициализации при загрузке страницы
    initSlick();

    // Вызов функции при изменении размера экрана
    $(window).resize(function () {
        initSlick();
    });
});


// Ensure the script runs after the page has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm3');
    const popup = document.getElementById('myPopup');
    const confirmButton = document.getElementById('confirmButton');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            const formData = new FormData(form);

            // Send the form data (you can replace this with an actual AJAX request)
            formSend(formData)
                .then((response) => {
                    // Show the popup after form is successfully submitted
                    if (popup) {
                        popup.classList.add("active__block");
                    }

                    // Optionally reset the form
                    form.reset();
                })
                .catch((err) => {
                    console.error('Error:', err);
                });
        });
    }

    // Close the popup when 'OK' button is clicked
    if (confirmButton) {
        confirmButton.addEventListener('click', function () {
            if (popup) {
                popup.classList.remove("active__block");
            }
        });
    }

    // Simulate sending the form data (this can be replaced with actual API logic)
    function formSend(formData) {
        return new Promise((resolve, reject) => {
            // Mocking an API request with setTimeout
            setTimeout(() => {
                resolve('Form submitted successfully'); // Simulating a successful submission
            }, 100); // Simulate 1 second delay
        });
    }
});
