$( document ).ready(function() {
    // menu-toggle
    $(".submenu__item").click(function () {
        $(this).next(".submenu-list").slideToggle("slow");
        $(this).toggleClass("submenu__open");
    });
    //submenu-toggle
    $(".list-item").click(function(){
        $(this).next(".list-inside").slideToggle("slow");
        $(this).toggleClass("list-item__open");
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
        //hide
        $(document).on('click', function(e){
            if(!$(e.target).closest(".header-content__logo").length){
                $(".header-content__country-description").hide();
            }
            e.stopPropagation();
        });
        //search
        $(".search__button").click(function(){
            $(".search__input").show();
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
        //qurency
        $(".form-control._select").click(function(){
            var currency = $(this).val();
            $(".country__currency").text(currency);
        });
        //country curency
        $(".country-item").click(function(){
            var text = $(this).find("span").text();
            var src_img = $(this).find("img").attr("src");
            var alt_img = $(this).find("img").attr("alt");

            var text_active = $(".country__name").html();
            var src_img_active = $(".country__img").attr("src");
            var alt_img_active = $(".country__img").attr("alt");

            $(this).find("span").text(text_active);
            $(this).find("img").attr({"src": src_img_active, "alt": alt_img_active});
            $(".country-list").append($(this).hide().show("slow"));

            $(".country__name").text(text);
            $(".country__img").attr({"src": src_img, "alt": alt_img});
            $(".header-content__country>img").attr({"src": src_img, "alt": alt_img});

        });

        //question
        $(".question").click(function(){
            $(".question-arrow").toggle("slow");
        });
        $(".question-arrow").click(function(){
            $(".livechat").show("slow");
            $(".livechat__header--close").click(function(){
                $(".livechat").hide();
            });
        });
        $(".livechat").draggable();

        //validate
        $(function(){
            $(".rf").each(function(){
                var form = $(this);
                var btn = form.find(".btn_submit");

                form.find(".rfield").addClass("empty_field");

                function checkInput(){
                    form.find(".rfield").each(function(){
                        if ($(this).val() != ''){
                            $(this).removeClass("empty_field");
                        } else {
                            $(this).addClass("empty_field");
                        }
                    });
                }

                function lightEmpty(){
                    form.find(".empty_field").css({"border-color": "#d8512d"});
                    $(".validate_form._please").show();
                    setTimeout(function(){
                        form.find(".empty_field").removeAttr("style");
                        $(".validate_form._please").hide();
                    }, 2000);
                }

                setInterval( function(){
                    checkInput();
                    var sizeEmpty = form.find(".empty_field").size();
                    if (sizeEmpty > 0) {
                        if (btn.hasClass("dis")){
                            return false;
                        } else{
                            btn.addClass("dis")
                        }
                    } else {
                        btn.removeClass("dis");
                    }
                }, 1000);

                btn.click(function(){
                    if ($(this).hasClass("dis")){
                        lightEmpty();
                        return false;
                    } else {
                            $(".validate_form._thanks").show();
                        setTimeout(function(){
                            $(".validate_form._thanks").hide();
                            form.submit();
                        }, 1000);
                        
                    }
                });
            });
        });
});