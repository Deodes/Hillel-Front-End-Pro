$(document).ready(function () {
    const slides = $('.item');
    const leftButton = $('<button class="button--left">←</button>');
    const rightButton = $('<button class="button--right">→</button>');
    const sliderRow = $('<div class="slider__row"></div>');

    currentIndex = 0;


    $('.container').prepend(leftButton);
    $('.container').append(rightButton);
    $('body').append(sliderRow);

    for (let i = 0; i < slides.length; i++) {

        const sliderItem = $(`<div class="slider__item" data-index=${i}></div>`);

        if (i === 0) {
            $(sliderItem).addClass('slider__item--active');
        }

        sliderRow.append(sliderItem);
    }

    $('.button--left').click(function () {
        currentIndex--;
        if (currentIndex <= 3 && currentIndex >= 0) {

            $('.slider__item').removeClass('slider__item--active');
            $(`[data-index = ${currentIndex}]`).addClass('slider__item--active');
            $('.item').hide();

            $(`[data-number = ${currentIndex}]`).show();
        } else {
            currentIndex = 3;
            $('.slider__item').removeClass('slider__item--active');
            $(`[data-index = ${currentIndex}]`).addClass('slider__item--active');
            $('.item').hide();
            $(`[data-number = ${currentIndex}]`).show();
        }
    })

    $('.button--right').click(function () {
        currentIndex++;

        if (currentIndex >= 0 && currentIndex <= 3) {

            $('.slider__item').removeClass('slider__item--active');
            $(`[data-index = ${currentIndex}]`).addClass('slider__item--active');
            $('.item').hide();
            $(`[data-number = ${currentIndex}]`).show();
        } else {
            currentIndex = 0;
            $('.slider__item').removeClass('slider__item--active');
            $(`[data-index = ${currentIndex}]`).addClass('slider__item--active');
            $('.item').hide();
            $(`[data-number = ${currentIndex}]`).show();
        }

    })

    $('.slider__row').click(function (event) {

        const item = event.target;
        const indexOfItem = $(item).attr('data-index');

        if ($(item).hasClass('slider__row')) {
            return;
        }

        $('.slider__item').removeClass('slider__item--active');

        $(item).addClass('slider__item--active');


        $('.item').hide();

        $(`[data-number = ${indexOfItem}]`).show();

        currentIndex = $(`[data-number = ${indexOfItem}]`).attr('data-number');
    });
});