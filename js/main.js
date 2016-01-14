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
    });

    // SLIDER
        var contentwidth = $(".contentslider").width();
        $(".contentslider").css({'width' : "100%"});
        rotate = function(){
            var slideid = $active.attr("rel") - 1;
            $(".contentnav a").removeClass("active");
            $active.addClass('active');
            if (slideid == 1){
                 slidedistance = "-100%";
            } else{
                 slidedistance = "0%";
            }
            $(".contentslider").animate({
                    left: slidedistance
                }, 500 );
                
            if (slideid == 0){
                 $(".slider-wrapper").removeClass("bgactive");
                 $(".contentnav-side").removeClass("_color");

            } else{
                $(".slider-wrapper").addClass("bgactive");
                $(".contentnav-side").addClass("_color");
            }
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

        //money-select
        $(".country__currency").click(function(){
            $(".header-content__country-description").toggle();
            $(".country-desription__close").click(function(){
                $(".header-content__country-description").hide();
            });
        });
        $(document).on('click', function(e){
            if(!$(e.target).closest(".header-content__logo").length){
                $(".header-content__country-description").hide();
            }
            e.stopPropagation();
        });
        //search
        $(".search__button").click(function(){
            $(".search__input").toggle();
        });
        
        //radius dimension
        $(".radius-plus").click(function(){
            $(".radius-dimension").text(function(index,text){
                var plus = parseInt(text.replace(/\D+/g,""));
                plus += 1;
                 return plus + " Miles";
            });
        });
        $(".radius-minus").click(function(){
            $(".radius-dimension").text(function(index,text){
                var plus = parseInt(text.replace(/\D+/g,""));
                plus -= 1;
                 return plus + " Miles";
            });
        });

        // var currency = $(".form-control._select").val();
        // $(".country__currency").text(currency);
        //question
        $(".question").click(function(){
            $(".question-arrow").toggle("slow");
        });
        $(".question-arrow").click(function(){
            $(".livechat").show("slow");
            $(".livechat__header--close").click(function(){
                $(".livechat").hide();
            });
        })
});