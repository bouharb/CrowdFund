/**
 * Created by wael on 26/03/2016.
 */

Template.listProjets.rendered = function() {
    Session.setDefault("verif","Nactif")
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


    // $('head').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js">');
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

    if (! $('#ex2').data('uiSlider')) {
        $("#ex2").slider({
            slide: function(event,ui){
                alert(ui.value)
            }
        });
    }
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
          if(!Session.get("rechecher"))
        return Test.find();
    },
   recherche :function() {
       // if(Session.get("recherche")=="ParCategorie")

       if (((Session.get("f") != null) && (Session.get("ville") != null))) {
          Session.set("recherche", "ParVilleCateg")
           return Session.get("recherche")
       }
       else {

       return Session.get("recherche");
   }
    }

});

Template.listProjets.events({
    'change #categorie': function(event, template) {
 // if(Session.get("verif")=="Nactif")
            categories = [];
            $('#categorie :selected').each(function (i, selected) {
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
            Session.set("f", categories);
        Tracker.autorun(function() {
            t=Session.get("f");
        });
        Tracker.autorun(function() {
            r=Session.get("recherche");
        });
        if((t.length==0)&&(r==null)) {
            Session.set("recherche", null)
            Session.set("f",null);
        }
            else if ((t.length==0)&&(r!=null)){
            Session.set("recherche","ParVille");
            Session.set("f",null);
        }
        else {
            Session.set("recherche", "ParCategorie");
        }


    },
    'change #ville':function (){

             villes = [];
            $('#ville :selected').each(function (i, selected) {
                villes[i] = $(selected).text();
            });
       /* if(villes==[]){
            Session.set("ville",null)
        }*/
        Session.set("ville", villes);
        Tracker.autorun(function() {
            vil=Session.get("ville");
        });
        Tracker.autorun(function() {
            rr=Session.get("recherche");
        });

        if(( vil.length==0)&&(rr==null)){
            Session.set("ville",null);
            Session.set("recherche", null);
            }
        else if ((vil.length==0)&&(rr!=null)){
            Session.set("recherche","ParCategorie");
            Session.set("ville",null);
        }
        else {
            Session.set("recherche", "ParVille");
        }


    },
   /* 'change #categorie,change #ville':function(){

        Session.set("recherche","ParVilleCateg");
        console.log(Session.get("recherche"))

    },*/

  /*  'change .span2':function(event,ui){
        var  val =$("#ex2").slider('getValue').val(ui.values[0]);
        alert(val);
        console.log(val);
        console.log("aaaaaaaaa")
    }*/
    'slide #ex2': function(event, ui){
        startPos =$("#ex2").slider('getValue').val();




        $('.form-group').children('div').mouseup(function(){


            var str=startPos.toString();
            Session.set("pourcentage",str);
            Session.set("recherche","ParPourcentage")

        });
       /* for (var i=0; i<tableau.length; i++) {
            console.log(tableau[i])
        }*/
    }

});

Template['ParCategorie'].helpers({

listProjetCateg: function () {
         if(Session.get("f")!=null)
    return Test.find({'basicInfo.categorie': {$in: Session.get('f')}});
}

});

Template['ParVille'].helpers({

    listProjetVille:function(){
        if(Session.get("ville")!=null)
        return Test.find({'addresse': {$in: Session.get('ville')}});
    }
});

Template['ParVilleCateg'].helpers({

    listProjetVilleCateg:function(){
        if (((Session.get("f") != null) && (Session.get("ville") != null)))
        return Test.find({$and:[{'addresse': {$in: Session.get('ville')}},{'basicInfo.categorie': {$in: Session.get('f')}}]});
    }
});

Template['ParPourcentage'].helpers({

    listProjetPourcentage:function(){

        var index=Session.get("pourcentage").indexOf(",");
        var first=parseInt(Session.get("pourcentage").substr(0,index));
        var last=parseInt(Session.get("pourcentage").substr(index + 1));
        console.log(first);
        console.log(last);

        return Test.find({"pourcentage": {"$gte": first, "$lte": last}});
    }
});
