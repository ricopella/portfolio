// Intro-Text Fade-In
$(() => {
    $('.intro').textillate();
})

//Code to get a smooth scroll from menu items to section

// slide effects - top
$("#nav-heading").on("click", () => {
    $('html, body').animate({
        scrollTop: $("#heading").offset().top
    }, 1000);
});

// slide effects - portfolio
$("#nav-portfolio").on("click", () => {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});

// slide effects
$("#nav-about-me").on("click", () => {
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top
    }, 1000);
});

// slide effects
$("#nav-contact").on("click", () => {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});