// open modal
let btn = $('.question .block .button-wrap .button-text'),
    modal = $('.cover, .hidden-form'),
    close = $('.close'),
    state = {
        "close": 0
    };

btn.on('click', function() {
    modal.fadeIn();
});


close.on('click', function() {
    modal.fadeOut();
    state.close = 1;
});