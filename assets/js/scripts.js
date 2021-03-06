jQuery(document).ready(function() {

    /*
        Fullscreen background
    */
    // $.backstretch("assets/img/backgrounds/1.jpg");

    /*
        Wow
    */
    new WOW().init();

    /*
        Countdown initializer
    */
    var now = new Date(2020, 8, 27, 16, 05, 30, 0);

    var countTo = now.valueOf();
    $('.timer').countdown(countTo, function(event) {
        $(this).find('.days').text(event.offset.totalDays);
        $(this).find('.hours').text(event.offset.hours);
        $(this).find('.minutes').text(event.offset.minutes);
        $(this).find('.seconds').text(event.offset.seconds);
    });

    /*
        Subscription form
    */
    $('.success-message').hide();
    $('.error-message').hide();

});