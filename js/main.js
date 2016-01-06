$( document ).ready(function() {
    // Navigation
    $(".submenu").find("a").click(function () {
        $(this).next(".submenu-list").slideToggle("slow");
        $(this).toggleClass("submenu__open");
    });
    $(".submenu-list__item").click(function(){
        
    });
});