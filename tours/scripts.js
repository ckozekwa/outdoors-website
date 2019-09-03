// Hamburger Menu

$(document).ready(function () {
    $(".open").on("click", function () {
        $(".nav-list").addClass("active");
    });

    $(".close").on("click", function () {
        $(".nav-list").removeClass("active");
    });
});