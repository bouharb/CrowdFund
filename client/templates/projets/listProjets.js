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
     //   $('head').append('<script type="text/javascript" id="al" src="assets/js/pieprogress/scripts/rainbow.min.js">');
      //  $('head').append('<script type="text/javascript" id="bl" src="assets/js/pieprogress/scripts/jquery-asPieProgress.js">');
        $('head').append('<script type="text/javascript" id="bl" src="assets/js/bootstrap-slider.js">');
        $('head').append('<script type="text/javascript" id="bl" src="assets/js/bootstrap-multiselect.js">');


    // $('head').append('<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">');
     //  $('head').append('<script src="assets/js/jquery.autocomplete.js">');




    //  $('head').append('<script type="text/javascript" id="il" src="assets/js/plugin.js">');
       // $('head').append('<script type="text/javascript" id="jl" src="assets/js/countdown.js">');
       // $('head').append('<script type="text/javascript" id="kl" src="assets/js/retina.min.js">');
   /*     if (jQuery(".pie_progress")[0]) {
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
            });}*/
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

    $("#ex2").slider({});
    $(document).ready(function() {
        $('#categorie').multiselect({
            inheritClass: true,
            nonSelectedText: 'Choisissez une categorie'

        });

    });
    $(document).ready(function() {
        $('#ville').multiselect({
            nonSelectedText: 'Choisissez une ville'
        });
    });
    $(document).ready(function() {
        $('#pays').multiselect({
            nonSelectedText: 'Choisissez un pays'
        });
    });

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
        //Session.set("test",Test.find())

        // Session.get("test");
       /* if(Session.get('f')!=null)
            return Test.find({'basicInfo.categorie': {$in: Session.get('f')}});
          //  Session.set('f',null)*/

        return Test.find();
    },
    recherche :function(){
       // if(Session.get("recherche")=="ParCategorie")
        return Session.get("recherche");
    }

});

Template.listProjets.events({
    'change #categorie': function(event, template) {
        var categories = [];
        $('#categorie :selected').each(function(i, selected){
            categories[i] = $(selected).text();
        });

   /*
        console.log(villes);
        var pays = [];
        $('#pays :selected').each(function(i, selected){
            pays[i] = $(selected).text();
        });
        var  val =$("#ex2").slider('getValue').val();
        console.log(val);

        */

        Session.set("f",categories);
        Session.set("recherche","ParCategorie");

    },
    'change #ville':function (){
        var villes = [];
        $('#ville :selected').each(function(i, selected){
            villes[i] = $(selected).text();
        });
        Session.set("ville",villes);
        Session.set("recherche","ParVille");
    },
    'change #ville,change #categorie':function(){
        var villes = [];
        $('#ville :selected').each(function(i, selected){
            villes[i] = $(selected).text();

        });
        $('#categorie :selected').each(function(i, selected){
            categories[i] = $(selected).text();
            console.log(categories[i]);
        });
        Session.set("recherche","ParVilleCateg");
    },

    'change #ex2':function(event,ui){
        var  val =$("#ex2").slider('getValue').val(ui.values[0]);
        alert(val);
    }

});

Template['ParCategorie'].helpers({

listProjetCateg: function () {

    return Test.find({'basicInfo.categorie': {$in: Session.get('f')}});
}

});

Template['ParVille'].helpers({

    listProjetVille:function(){
        return Test.find({'addresse': {$in: Session.get('ville')}});
    }
});

Template['ParVilleCateg'].helpers({

    listProjetVilleCateg:function(){
        return Test.find({$and:[{'addresse': {$in: Session.get('ville')}},{'basicInfo.categorie': {$in: Session.get('f')}}]});
    }
});

Template['ParPourcentage'].helpers({

    listProjetPourcentage:function(){
        return Test.find({$and:[{'addresse': {$in: Session.get('ville')}},{'basicInfo.categorie': {$in: Session.get('f')}}]});
    }
});
