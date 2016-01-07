$( document ).ready(function() {
    // menu-toggle
    $(".submenu").find(".submenu__item").click(function () {
        $(this).next(".submenu-list").slideToggle("slow");
        $(this).toggleClass("submenu__open");
    });
    //submenu-toggle
    $(".submenu-list__item").click(function(){
        $(this).find(".list-inside").slideToggle("slow");
        $(this).find(".list-item").toggleClass("list-item__open");
    });
    $(".navbar-toggle").click(function(){
        $(this).toggleClass("navbar-toggle__open");
    })
});