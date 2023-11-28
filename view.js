$(document).ready(function(){
    $(".veen .rgstr-btn button").click(function(){
        $('.veen .wrapper').addClass('move');
        $('.body').css('background','rgb(90, 165, 240)');
        $(".veen .login-btn button").removeClass('active');
        $(this).addClass('active');

    });
    $(".veen .login-btn button").click(function(){
        $('.veen .wrapper').removeClass('move');
        $('.body').css('background','rgb(82, 53, 187)');
        $(".veen .rgstr-btn button").removeClass('active');
        $(this).addClass('active');
    });
});