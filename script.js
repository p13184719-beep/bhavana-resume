document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});

$(document).ready(function () {
    $("section").hover(
        function () {
            $(this).css("border-left", "4px solid #24558a");
        },
        function () {
            $(this).css("border-left", "none");
        }
    );
});