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
    
    // SLIDER
        var contentwidth = $(".slider").width();
        var totalcontent = $(".content").size();
        var allcontentwidth = contentwidth * totalcontent;
        $(".contentslider").css({'width' : allcontentwidth});
        // $(".slider-wrapper").removeClass("bgactive")
        // $(".slider-wrapper").addClass("bgactive")
        rotate = function(){
            var slideid = $active.attr("rel") - 1;
            var slidedistance = slideid * contentwidth;
            $(".contentnav a").removeClass("active");
            $active.addClass('active');
            $(".contentslider").animate({
                    left: -slidedistance
                }, 500 );
        }; 
        
        rotation = function(){
            play = setInterval(function(){
                $active = $(".contentnav a.active").next();
                if ( $active.length === 0) {
                    $active = $('.contentnav a:first');
                }
                rotate();
                }, 5000);
        };
        
        rotation();
        
        $(".contentnav a").click(function() {
            $active = $(this);
            clearInterval(play);
            rotate();
            rotation();
            return false;
        });
        // });
});