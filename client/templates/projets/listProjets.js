/**
 * Created by wael on 26/03/2016.
 */
if(Meteor.isClient){
    Session.set("projetLimit",2);
    lastScrolTop=0;
    $(window).scroll(function(event){

       if($(window).scrollTop()+$(window).height()>$(document).height()-300)
       {
           var scrollTop=$(this).scrollTop()+300;
           if(scrollTop>lastScrolTop){

               Session.set("projetLimit",Session.get("projetLimit")+2)
console.log("aaaaaaaaaaaaokfaofkaokf")
           }
           lastScrolTop=scrollTop;
       }
    })
}
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
         if((Session.get("rechercheParCateg")!='')&&(Session.get("rechercheParCateg")!=undefined)&&(Session.get("rechercheParCateg")!=null)){
             var x=Session.get("rechercheParCateg")
             console.log(x)
             return Test.find({$and:[{verifier:false},{categ: x}]});
        }
         else if(!Session.get("rechecher"))
        return Test.find({verifier:false},{sort:{pourcentage: 1},limit:Session.get("projetLimit")});
    },
   recherche :function() {
       // if(Session.get("recherche")=="ParCategorie")

       if (((Session.get("f") != null) && (Session.get("ville") != null)&&(Session.get("pourcentage")==null))) {
          Session.set("recherche", "ParVilleCateg");
           return Session.get("recherche");
       } else  if (((Session.get("f") != null) && (Session.get("ville") != null)&&(Session.get("pourcentage") != null))) {
           Session.set("recherche", "ParVilleCategPourcent")
           return Session.get("recherche");
       }
       else  if (((Session.get("f") != null) && (Session.get("ville") == null)&&(Session.get("pourcentage") != null))) {
           Session.set("recherche", "ParCategPourcent")
           return Session.get("recherche");
       }
       else  if (((Session.get("f") == null) && (Session.get("ville") != null)&&(Session.get("pourcentage") != null))) {
           Session.set("recherche", "ParVillePourcent")
           return Session.get("recherche");
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
        Tracker.autorun(function() {
            vvt=Session.get("ville");
        });
        Tracker.autorun(function() {
            pc=Session.get("pourcentage");
        });
        if((t.length==0)&&(r==null)) {
            Session.set("recherche", null)
            Session.set("f",null);
        }
        if((t.length==0)&&(vvt!=null)&&(pc!=null)) {
            Session.set("f",null);
        }
            else if ((t.length==0)&&(r!=null)&&(vvt!=null)&&(pc==null)){
            Session.set("recherche","ParVille");
            Session.set("f",null); }
        else if ((t.length==0)&&(r!=null)&&(vvt==null)&&(pc!=null)){
            Session.set("recherche","ParPourcentage");
            Session.set("f",null); }

         else if ((t.length==0)&&(r==null)&&(vvt==null)) {
            Session.set("recherche",null);
            Session.set("f",null);
        }
        else if ((t.length==0)&&(r!=null)&&(vvt==null)&&(pc==null)) {
            Session.set("recherche",null);
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
            tt=Session.get("f");
        });
        Tracker.autorun(function() {
            rr=Session.get("recherche");
        });
        Tracker.autorun(function() {
            pv=Session.get("pourcentage");
        });

        if(( vil.length==0)&&(rr==null)){
            Session.set("f",null);
            Session.set("recherche", null);
            }
        if(( vil.length==0)&&(tt!=null)&&(pv!=null)){
            Session.set("f",null);
        }
        else if ((vil.length==0)&&(rr!=null)&&(tt!=null)&&(pv==null)){
            Session.set("recherche","ParCategorie");
            Session.set("ville",null);
        }
        else if ((vil.length==0)&&(rr!=null)&&(tt==null)&&(pv!=null)){
            Session.set("recherche","ParPourcentage");
            Session.set("ville",null); }
       /* else if ((vil.length==0)&&(rr!=null)&&(tt!=null)&&(pv!=null)){
            Session.set("recherche",null);
            Session.set("ville",null); }*/

        else if ((vil.length==0)&&(rr==null)&&(tt==null)) {
            Session.set("recherche",null);
            Session.set("ville",null);
        }
        else if ((vil.length==0)&&(rr==null)&&(pv==null)) {
            Session.set("recherche",null);
            Session.set("ville",null);
        }
        else if ((vil.length==0)&&(rr!=null)&&(tt==null)&&(pv==null)) {
            Session.set("recherche",null);
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
         Tracker.autorun(function() {
              //  pourcent=Session.get("pourcentage");
             if(Session.get("pourcentage")!=null) {
                 var index = Session.get("pourcentage").indexOf(",");
                 first = parseInt(Session.get("pourcentage").substr(0, index));
                 last = parseInt(Session.get("pourcentage").substr(index + 1));
             }
            });

            Session.set("first",first);
            Session.set("last",last);
            Tracker.autorun(function() {
                vilp=Session.get("ville");
            });
            Tracker.autorun(function() {
                tp=Session.get("f");
            });
            Tracker.autorun(function() {
                rrp=Session.get("recherche");
            });
            Tracker.autorun(function() {
                f=Session.get("first");
            });
            Tracker.autorun(function() {
                l=Session.get("last");
            });
            Tracker.autorun(function() {
                l=Session.get("last");
            });
            if((( f==0)&&(l==100)&&(rrp==null))){
                Session.set("pourcentage",null);
                Session.set("recherche", null);
            }
            if((( f==0)&&(l==100)&&(tp!=null)&&(vilp!=null))){
                Session.set("pourcentage",null);
            }
           else if (( f==0)&&(l==100)&&(rrp!=null)&&(tp!=null)&&(vilp==null)){
                Session.set("recherche","ParCategorie");
                Session.set("pourcentage",null);
            }
            else if (( f==0)&&(l==100)&&(rrp!=null)&&(tp==null)&&(vilp!=null)){
                Session.set("recherche","ParVille");
                Session.set("pourcentage",null);
            }
            else if (( f==0)&&(l==100)&&(rrp==null)&&(vilp==null)){
                Session.set("recherche",null);
                Session.set("pourcentage",null);
            }
            else if (( f==0)&&(l==100)&&(rrp==null)&&(tp==null)){
                Session.set("recherche",null);
                Session.set("pourcentage",null);
            }
            else if (( f==0)&&(l==100)&&(rrp!=null)&&(tp==null)&&(vilp==null)){
                Session.set("recherche",null);
                Session.set("pourcentage",null);
            }
            else {
                Session.set("recherche", "ParPourcentage")
                //
            }

        });

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
        return Test.find({$and:[{'addresse': {$in: Session.get('ville')}},{'basicInfo.categorie': {$in: Session.get('f')}}]}) }

});

Template['ParPourcentage'].helpers({

    listProjetPourcentage:function(){

       x=Session.get("first");
        xx=Session.get("last");

        return Test.find({"pourcentage": {"$gte": x, "$lte": xx}});
    }
});

Template['ParVilleCategPourcent'].helpers({

    listProjetCVP:function(){

        if (((Session.get("f") != null) && (Session.get("ville") != null)&&(Session.get("pourcentage") != null)))
            return Test.find({$and:[{'addresse': {$in: Session.get('ville')}},{'basicInfo.categorie': {$in: Session.get('f')}},{"pourcentage": {"$gte": first, "$lte": last}}]}) }



});


Template['ParCategPourcent'].helpers({

    listProjetCP:function(){

        if (((Session.get("f") != null) && (Session.get("ville") == null)&&(Session.get("pourcentage") != null)))
            return Test.find({$and:[{'basicInfo.categorie': {$in: Session.get('f')}},{"pourcentage": {"$gte": Session.get("first"), "$lte": Session.get("last")}}]}) }



});


Template['ParVillePourcent'].helpers({

    listProjetVP:function(){

        if (((Session.get("f") == null) && (Session.get("ville") != null)&&(Session.get("pourcentage") != null)))
            return Test.find({$and:[{'addresse': {$in: Session.get('ville')}},{"pourcentage": {"$gte": Session.get("first"), "$lte": Session.get("last")}}]}) }



});

