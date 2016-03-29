/**
 * Created by wael on 26/03/2016.
 */

Template.listProjets.rendered = function() {

  /*  var lib = 'assets/js/pieprogress/scripts/rainbow.min';

    function isLoadedScript(lib) {
        return document.querySelectorAll('[src="' + lib + '"]').length > 0
    }
    if (!isLoadedScript(lib)) {
*/
        $('head').append('<script type="text/javascript" id="al" src="assets/js/pieprogress/scripts/rainbow.min.js">');
        $('head').append('<script type="text/javascript" id="bl" src="assets/js/pieprogress/scripts/jquery-asPieProgress.js">');
        $('head').append('<script type="text/javascript" id="bl" src="Multi-Column-Select.js">');
        $('head').append('<script type="text/javascript" id="bl" src="Multi-Column-Select.min.js">');


    // $('head').append('<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">');
     //  $('head').append('<script src="assets/js/jquery.autocomplete.js">');




    //  $('head').append('<script type="text/javascript" id="il" src="assets/js/plugin.js">');
       // $('head').append('<script type="text/javascript" id="jl" src="assets/js/countdown.js">');
       // $('head').append('<script type="text/javascript" id="kl" src="assets/js/retina.min.js">');
        if (jQuery(".pie_progress")[0]) {
            jQuery('.pie_progress').asPieProgress({
                'namespace': 'pie_progress'
            });
            jQuery(window).on("load scroll", function(d,h) {
                jQuery(".pie_progress").each(function(i) {
                    a = jQuery(this).offset().top + jQuery(this).height();
                    b = jQuery(window).scrollTop() + (jQuery(window).height()+250);
                    if (a < b) {
                        jQuery(this).asPieProgress('start');
                    }
                });
            });}
    if (jQuery("#filter-toggle")[0]) {
        jQuery("#filter-toggle").click(function(e){
            if($('section.filter').css('display') == 'none')
            {
                jQuery('section.filter').stop(true,false).slideDown(300);
            }
            else
            {
                jQuery('section.filter').stop(true,false).slideUp(300);
            }
        });
    }
   /* var states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
        'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];*/
  //  }
      //  this.rendered=true;
//
//
   // $('.slider').slider({});



};

Template.projetDetail.onDestroyed(function () {

    $('#al').remove();
    $('#bl').remove();
    $('#il').remove();
    $('#jl').remove();
    $('#kl').remove();


});

Meteor.subscribe('MesProjets');
Template.listProjets.helpers({


    listProjet: function(){
        return Test.find();
    }

});
/*
Template.listProjets.events({
    "click #ajouterCommentaire" : function(event){
        event.preventDefault();
        var photo = Images.findOne({utilisateurId :Meteor.userId()}).url();

        comments={};
        comments.projetId=this._id;
        comments.body = $('#commentaire').val();
        // comments.body=event.target.commentaire.value;
        comments.createdAt = new Date;
        comments.photo=photo;

        Meteor.call('ajouterCommentaire',comments);
    }
});*/