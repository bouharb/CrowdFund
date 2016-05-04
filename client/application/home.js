/**
 * Created by wael on 28/03/2016.
 */

Template.home.rendered = function() {

/*
        $('head').append('<script type="text/javascript" src="assets/js/pieprogress/scripts/rainbow.min.js">');
        $('head').append('<script type="text/javascript" src="assets/js/pieprogress/scripts/jquery-asPieProgress.js">');
        $('head').append('<script type="text/javascript" src="assets/js/slider-revolution/rs-plugin/js/jquery.themepunch.plugins.min.js">');
        $('head').append('<script type="text/javascript" src="assets/js/slider-revolution/rs-plugin/js/jquery.themepunch.revolution.min.js">');
        $('head').append('<script type="text/javascript" src="assets/js/bxslider/jquery.bxslider.min.js">');
        $('head').append('<script type="text/javascript" src="assets/js/jquery.scroll.js">');
        $('head').append('<script type="text/javascript" src="assets/js/jquery.hoverizr.min.js">');
      //  $('head').append('<script type="text/javascript" src="assets/js/custom.js">');
        $('head').append('<script type="text/javascript" src="assets/js/plugin.js">');
        $('head').append('<script type="text/javascript" src="assets/js/countdown.js">');
        $('head').append('<script type="text/javascript" src="assets/js/retina.min.js">');
*/


    /***********************************************************
     Revolution Slider Initialization
     ************************************************************/
    if (jQuery(".tp-banner")[0]) {
        var revSlider = jQuery('.tp-banner').show().revolution(
            {
                dottedOverlay:"none",
                delay:16000,
                startwidth:1170,
                startheight:632,
                hideThumbs:200,

                thumbWidth:100,
                thumbHeight:50,
                thumbAmount:5,

                navigationType:"bullet",
                navigationArrows:"solo",
                navigationStyle:"round",

                touchenabled:"on",
                onHoverStop:"on",

                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,

                parallax:"mouse",
                parallaxBgFreeze:"on",
                parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

                keyboardNavigation:"off",

                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,

                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,

                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,

                shadow:0,
                fullWidth:"on",
                fullScreen:"off",

                spinner:"spinner4",

                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,

                shuffle:"off",

                autoHeight:"off",
                forceFullWidth:"off",



                hideThumbsOnMobile:"off",
                hideNavDelayOnMobile:1500,
                hideBulletsOnMobile:"off",
                hideArrowsOnMobile:"off",
                hideThumbsUnderResolution:0,

                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                startWithSlide:0,
                videoJsPath:"rs-plugin/videojs/",
                fullScreenOffsetContainer: ""
            });
        revSlider.bind('revolution.slide.onloaded', function() {
            jQuery(".main-slider .btn").css("display","block");
            jQuery(".main-slider .tp-banner .progress-section").css("display","block");
        });
    }
    if (jQuery(".pie_progress")[0]) {
        jQuery('.pie_progress').asPieProgress({
            'namespace': 'pie_progress'
        });
        jQuery(window).on("load scroll", function (d, h) {
            jQuery(".pie_progress").each(function (i) {
                a = jQuery(this).offset().top + jQuery(this).height();
                b = jQuery(window).scrollTop() + (jQuery(window).height() + 250);
                if (a < b) {
                    jQuery(this).asPieProgress('start');
                }
            });
        });
    }

}
Template.home.helpers({
    popularProjets: function(){
        return Test.find({},{limit:4},{sort: {'contributeur': 1}});
    },
    listsProjets:function(){
        return Test.find({verifier:true})
    }
})