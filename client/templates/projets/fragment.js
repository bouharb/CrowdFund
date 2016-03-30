/**
 * Created by wael on 29/03/2016.
 */

Template.fragment.rendered = function() {


    $('head').append('<script type="text/javascript" id="al" src="assets/js/pieprogress/scripts/rainbow.min.js">');
    $('head').append('<script type="text/javascript" id="bl" src="assets/js/pieprogress/scripts/jquery-asPieProgress.js">');



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