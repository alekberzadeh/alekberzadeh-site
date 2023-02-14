
var language = '#language';

$(language).on('click', function () {
    $(language).removeClass('active');
    $(this).addClass('active');
});




function toggleTheme() {
    if (localStorage.getItem("Huseyn-theme") !== null) {
        if (localStorage.getItem("Huseyn-theme") === "dark") {
            $("body").addClass("dark");
        } else {
            $("body").removeClass("dark");
        }
    }
    updateIcon();
}
toggleTheme();

$(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
        localStorage.setItem("Huseyn-theme", "dark");
    } else {
        localStorage.setItem("Huseyn-theme", "light");
    }
    updateIcon();
})

function updateIcon() {
    if ($("body").hasClass("dark")) {
        $(".toggle-theme i").removeClass("fa-moon");
        $(".toggle-theme i").addClass("fa-sun");
    } else {
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
    }
}
AOS.init({
    once: true,
});





var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})