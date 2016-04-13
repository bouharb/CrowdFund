/**
 * Created by wael on 23/03/2016.
 */
Meteor.subscribe('MesProjets')
Meteor.subscribe('uploads')
Meteor.subscribe('images')
Template.projets.helpers({
    mesProjets : function(){
        return Test.find({createurProjet:Meteor.userId()}).fetch();

    },
    img:function()
    {
          return Images.findOne({utilisateurId:Meteor.userId()});
    }
});

Template.projets.rendered = function() {
 /*  $(".progress").asPieProgress({
        namespace: 'pieProgress'
    });
*/

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
Template.projets.events({


});


