$(document).ready(function() {
    if (window.outerWidth <= 800) {
        $("#navBar .nav-container .list-dark ul li a").click(function() {
            $("#navBar .nav-container .list-dark ul").css('right', '-100%');
        });
    };
    $("#navBar .nav-container .list-dark .fa-moon").click(function() {
        $(this).css('display', 'none');
        $("#navBar .nav-container .list-dark .fa-sun").css('display', 'inline-block');
        $('body').addClass('dark-theme');
    });
    $("#navBar .nav-container .list-dark .fa-sun").click(function() {
        $(this).css('display', 'none');
        $("#navBar .nav-container .list-dark .fa-moon").css('display', 'inline-block');
        $('body').removeClass('dark-theme');
    });
    $("#navBar .nav-container .list-dark .fa-bars").click(function() {
        $("#navBar .nav-container .list-dark ul").css('right', '0');
        $("#navBar .nav-container .list-dark ul .fa-times").css('right', '42%');
    });
    $("#navBar .nav-container .list-dark ul .fa-times").click(function() {
        $("#navBar .nav-container .list-dark ul").css('right', '-100%');
        $("#navBar .nav-container .list-dark ul .fa-times").css('right', '-100%');
    });
    $("#navBar .nav-container .list-dark ul li a").click(function() {
        $("#navBar .nav-container .list-dark ul li a").removeClass("active");
        $(this).addClass("active");
    });
    $(window).on('load scroll', function() {
        if ($(window).scrollTop() > 5) {
            $("#navBar").addClass('navActive');
        } else {
            $("#navBar").removeClass('navActive');
        }
    });
});