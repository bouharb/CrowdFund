/**
 * Created by wael on 12/04/2016.
 */
/**
 * Created by wael on 24/03/2016.
 */

Template.modificationProjet.rendered = function() {
       sessionStorage.setItem('idprojett',this._id);

    /* var lib = '../assets/js/migrate.js';

     function isLoadedScript(lib) {
     return document.querySelectorAll('[src="' + lib + '"]').length > 0
     }
     if (!isLoadedScript(lib)) {*/
    $('head').append('<script type="text/javascript" id="r" src="../assets/js/pieprogress/scripts/rainbow.min.js">');
    $('head').append('<script type="text/javascript" id="pie" src="../assets/js/pieprogress/scripts/jquery-asPieProgress.js">');
    $('head').append('<script type="text/javascript" id="the" src="../assets/js/slider-revolution/rs-plugin/js/jquery.themepunch.plugins.min.js">');
    $('head').append('<script type="text/javascript" id="ther" src="../assets/js/slider-revolution/rs-plugin/js/jquery.themepunch.revolution.min.js">');
    $('head').append('<script type="text/javascript" id="bx" src="../assets/js/bxslider/jquery.bxslider.min.js">');
    $('head').append('<script type="text/javascript" id="s" src="../assets/js/jquery.scroll.js">');
    $('head').append('<script type="text/javascript" id="jq" src="../assets/js/jquery.hoverizr.min.js">');
    // $('head').append('<script type="text/javascript" id="pl" src="../assets/js/plugin.js">');
    // $('head').append('<script type="text/javascript" id="cou" src="../assets/js/countdown.js">');
    // $('head').append('<script type="text/javascript" id="ret" src="../assets/js/retina.min.js">');
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
        });
    }
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
    if (jQuery(".project-slider-cnt")[0]) {
        jQuery('.project-slider-cnt').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideMargin: 15,
            infiniteLoop: true,
            pager: false,
            auto: false,
            nextSelector: '#slider-next',
            prevSelector: '#slider-prev',
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>'
        });
    }

    if (jQuery(".project-images")[0]) {
        jQuery('.project-images').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideMargin: 15,
            mode: 'fade',
            autoHover: true,
            infiniteLoop: true,
            pager: false,
            auto: true
        });
    }




    if (jQuery(".pslider")[0]) {
        jQuery('.pslider').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideMargin: 15,
            mode: 'fade',
            autoHover: true,
            infiniteLoop: true,
            pager: false,
            auto: true
        });
    }




    //}


    /*
     if (!$("link[href='../style.css']").length) {
     $('<link href="../style.css" rel="stylesheet">').appendTo("head");
     $('<link href="../assets/css/custom-style.css" rel="stylesheet">').appendTo("head");
     $('<link href="../assets/css/responsive.css" rel="stylesheet">').appendTo("head");
     $('<link href="../assets/js/pieprogress/css/rainbow.css">').appendTo("head");
     $('<link href="../assets/js/pieprogress/css/progress.css" rel="stylesheet">').appendTo("head");
     $('<link href="../assets/js/slider-revolution/css/style.css" rel="stylesheet">').appendTo("head");
     $('<link href="../assets/js/slider-revolution/rs-plugin/css/settings.css" rel="stylesheet">').appendTo("head");
     $('<link href="../assets/js/bxslider/jquery.bxslider.css" rel="stylesheet">').appendTo("head");

     }*/
    /* FB.ui({
     method: 'share_open_graph',
     action_type: 'og.likes',
     action_properties: JSON.stringify({
     object:window.location.href,
     })
     }, function(response){});*/
    /*FB.ui({
     method: 'share',
     href: window.location.href,
     }, function(response){});*/
    /* FB.ui(
     {
     method: 'feed'
     }
     );*/
};
/*
 Template.projetDetail.onDestroyed(function () {

 $('#m').remove();
 $('#r').remove();
 $('#pie').remove();
 $('#the').remove();
 $('#ther').remove();
 $('#bx').remove();
 $('#jq').remove();
 $('#cu').remove();
 $('#pl').remove();
 $('#cou').remove();
 $('#ret').remove();
 $('#s').remove();







 });
 */
Meteor.subscribe('MesProjets')
Meteor.subscribe('abonnementp')
Meteor.subscribe('CP')
Meteor.subscribe('images');
Meteor.subscribe('MesContributions');
Template.modificationProjet.helpers({
    nbrParticipant:function(){
        return  Contributeur.find({IdProjet:this._id}).count();
    },
    categOmoin:function(){
        var id=Test.findOne({_id:this._id});
        var check=id.basicInfo.categorie;
        if(check=='')
            return 'not-ok'
            return 'ok'
    },
    contrepartieOmoin:function(){
        var id=CP.find({idprojet:this._id}).count();
        if(id<3)
            return 'not-ok'
            return 'ok'
    },
    photoProjetOmoin:function(){

        var id=Test.findOne({_id:this._id});
        var check=id.photoCouverture
        if(check.length>=1)
        return 'ok';
        return 'not-ok'

    },
    idprojet:function(){
         var x=this._id;
        return x;
    },
    descriptionCheck:function(){
        var id=Test.findOne({_id:this._id});
        var check=id.basicInfo.description;

        if(check == '')
            return 'not-ok';
        return 'ok'
},
    avatar:function(){
        var idd=Images.findOne({utilisateurId:Meteor.userId()});
        if(idd==undefined||idd==null)
            return 'not-ok'
            return 'ok'
    },
    contributeurs:function(){
        x=  Contributeur.find({IdProjet:this._id}).map(function(elem)
        {
            // console.log("aaa",elem.IdProjet)
            return  elem.Idcontributeur;
        });
        return Meteor.users.find({_id: {$in:x}})

    },


    errorMessage: function(field) {
        return Session.get('commentSubmitErrors')[field];
    },
    commentsCount: function() {
        return Comments.find({projetId: this._id}).count();
    },
    errorClass: function (field) {
        return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
    },
    shareData: function() {
        var resp = {  title: "test" + " en mercadOrganico!",
            excerpt:"a Message",
            description:"a Description",
            summary:"a Summary",
            author:"from MyApp"
        };
        return resp;
    },
    abonnement:function(){
        var verif=   Abonner.findOne({$and:[{idabonner:Meteor.userId()},{idprojet:this._id}]});
        if(verif!=null)
            return true;
        return false;
    },

    /* desc: function(){

     return Test.findOne({_id: this._id});
     },*/
    commentaires: function() {
        return Comments.find({projetId: this._id});
    },
    upvotedClass: function() {
        var userId = Meteor.userId();
        if (userId && !_.include(this.upvoters, userId)) {
            return 'btn-primary upvotable';
        } else {
            return 'disabled';
        }
    }
});
Template.modificationProjet.onCreated(function() {

    Session.set('commentSubmitErrors', {});
});
Template.modificationProjet.events({
    "click .fb-share-button":function(){
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.likes',
            action_properties: JSON.stringify({
                object:window.location.href,
            })
        }, function(response){});
    },
    "click #desabonner":function(){
        Meteor.call("deleteAbonner",Meteor.userId(),this._id);
    },
    "click #sabonner":function(){
        abonnement = {}
        abonnement.idabonner=Meteor.userId();
        abonnement.idprojet=this._id;
        Meteor.call("sabonner",abonnement)
    },
    "click #ajouterCommentaire" : function(event){
        event.preventDefault();
        //  photo=Images.findOne({utilisateurId :Meteor.userId()}).url();

        /* if(!Images.findOne({utilisateurId :Meteor.userId()}).url()){
         var   photoURL = {
         "profile.photo":"file_icon.png"
         //  "profile.photo": "/uploads/" + fileObj._id
         };
         Meteor.users.update(userId, {$set: photoURL});
         photo="file_icon.png"
         }*/

        comments={};
        comments.projetId=this._id;
        comments.body = $('#commentaire').val();
        // comments.body=event.target.commentaire.value;
        //  comments.createdAt = new Date;
        var errors = {};
        if (!comments.body) {
            errors.body = "S'il vous plait , écrivez quelque chose";
            return Session.set('commentSubmitErrors', errors);
        }

        Meteor.call('ajouterCommentaire',comments,function(error, commentId) {
            if (error){
                throwError(error.reason);
            } else {
                $('#commentaire').val('');
            }}
        );
    },
    'click .upvotable': function(e) {
        e.preventDefault();
        Meteor.call('upvote', this._id);
    }
});
Template.modifierContrePartie.helpers({
    modifCP:function(){
    return CP.find({idprojet:this._id}).fetch()},
    verif : function(){
        if(Session.get("edit")=="vrai")
        return true;
        return false;
    },
    notverif : function(){
        if(Session.get("edit")=="faux")
            return true;
        return false;
    },
    contrePartieEdit:function(){
          var idc=sessionStorage.getItem("idContrePartie")
        x=CP.findOne({_id:idc})
        return CP.findOne({_id:idc});
    }
});
Template.modifierContrePartie.events({
    'click #annulermodifCP' :function(){
        Session.set("edit","faux");
    },
    'click #modifCP':function(){
        nom = $('#nomcpm').val();
        montant = Number($('#montantcpm').val());
        quantitee = Number($('#qtcpm').val());
        dateLivraison = $('#pickerCPM').val();
        description= $('#descriptioncpm').val();
       Meteor.call('updateCP',{_id:sessionStorage.getItem("idContrePartie")},{$set:{"cp.nom":nom,"cp.montant":montant,"cp.quantitee":10,"cp.dateLivraison":dateLivraison,"cp.description":description}})
        Session.set("edit","faux");
    },
    'click .edit-link':function(){
        var id=$("#del").attr("name");
        Session.set("edit","vrai");
        sessionStorage.setItem("idContrePartie",id)
        $('.form-control #pickerCP').datepicker({
            language: 'fr',
            format: "mm-yyyy",
            viewMode: "months",
            minViewMode: "months"
        });
    }


});
Template.modifierContrePartie.rendered = function() {
    Session.set("edit","faux")
}
