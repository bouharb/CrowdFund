/**
 * Created by wael on 13/03/2016.
 */

Template.header.events({
    "click #demarrer": function () {
       //Session.set('utilisateurCourant',Random.id());
       // alert(Session.get('utilisateurCourant'))

    }
});

Template.header.rendered = function() {

    function checkDevice(){if(jQuery(".nav-header-right").hasClass("mobile")){return 1;}else{return 0;}}

    /***********************************************************
     Initialize Custom Scroll Bar
     ************************************************************/
    var screenWidth = jQuery( window ).width();
    if(screenWidth<1024){jQuery(".nav-header-right").niceScroll();}


    /***********************************************************
     Dropdown Menu
     ************************************************************/
    if (jQuery(".main-nav ul li")[0]) {
        jQuery('.main-nav ul li').hover(function (){
            jQuery('ul', this).stop(true,false).slideDown(100);
            jQuery('ul li ul', this).css("display","none");
        },function () {
            if(checkDevice()==0){jQuery('ul', this).stop(true,false).slideUp(100);}
        });
    }


    /***********************************************************
     Responsive Menu
     ************************************************************/
    jQuery("#navbar-toggle").click(function(){
        if(jQuery(this).hasClass("collapsed"))
        {
            jQuery(this).removeClass("collapsed");
            jQuery(".nav-header-right").addClass("mobile");
            jQuery("#navbar-toggle i").removeClass("fa-bars");
            jQuery("#navbar-toggle i").addClass("fa-minus");
        }
        else
        {
            jQuery(this).addClass("collapsed");
            jQuery(".nav-header-right").removeClass("mobile");
            jQuery("#navbar-toggle i").removeClass("fa-minus");
            jQuery("#navbar-toggle i").addClass("fa-bars");
        }
        jQuery(".nav-header-right").toggle("slow");
    });


    /***********************************************************
     Responsive Menu
     ************************************************************/
    jQuery(".login-panel a").click(function(){
        if(jQuery(this).hasClass("open"))
        {
            jQuery(this).removeClass("open");
            jQuery(".dropdown-login").fadeOut("fast");
        }
        else
        {
            jQuery(this).addClass("open");
            jQuery(".dropdown-login").fadeIn("fast");

            /* Hide search box when login panel open */
            jQuery('.search-box input[type="text"]').stop().fadeOut(100);
            jQuery('.search-box .icon').removeClass("open");
            jQuery(".search-box").css("border-right","solid 1px #ebebeb");
        }
        return false;
    });
    jQuery("body").click(function() {
        if(checkDevice()==0){
            jQuery(".login-panel a").removeClass("open");
            jQuery(".dropdown-login").fadeOut("fast");
        }
    });
    jQuery('.dropdown-login').click(function(e) {
        e.stopPropagation();
    });

    jQuery(".dropdown-login form input[type='text']" || ".dropdown-login form input[type='password']").focus(function(){
        if(jQuery(this).val()=="Your email"){jQuery(this).val('');}
        if(jQuery(this).val()=="Your password"){jQuery(this).val(''); jQuery(this).attr("type","password");}
    });

    jQuery(".dropdown-login form input#password").blur(function(){
        if(jQuery(this).val()==""){jQuery(this).attr("type","text"); jQuery(this).val('Your password');}
    });

    jQuery(".dropdown-login form input[type='text']").blur(function(){
        if(jQuery(this).val()==""){jQuery(this).val('Your email');}
    });

    /* Search box */
    jQuery(".search-box .icon").click(function(){
        if(jQuery(this).hasClass("open"))
        {
            jQuery(this).removeClass("open");
            jQuery(this).parent('form').submit();
        }
        else
        {
            jQuery(this).addClass("open");
            jQuery(".search-box").css("border-right","solid 1px transparent");
            jQuery('.search-box input[type="text"]').stop().fadeIn(100, function(){jQuery(this).css("display","block");});

            /* Hide login panel when search box open */
            jQuery(".login-panel a").removeClass("open");
            jQuery(".dropdown-login").fadeOut("fast");
        }
    });
    jQuery("body").click(function() {
        if(checkDevice()==0){
            jQuery('.search-box input[type="text"]').stop().fadeOut(100);
            jQuery('.search-box .icon').removeClass("open");
            jQuery(".search-box").css("border-right","solid 1px #ebebeb");
        }
    });
    jQuery('.search-box').click(function(e) {
        e.stopPropagation();
    });
    jQuery(".search-box input[type='text']").focus(function(){
        if(jQuery(this).val()=="Search Here"){jQuery(this).val('');}
    });
    jQuery(".search-box input[type='text']").blur(function(){
        if(jQuery(this).val()==""){jQuery(this).val('Search Here');}
    });


}

