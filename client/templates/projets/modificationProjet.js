
Template.modificationProjetuser.rendered = function() {
    Session.set('okornotok','')
    var idcontri = $("#idcontpro").attr("name");

    Session.set("idpcontributeur", idcontri);
/*
    $('head').append('<script type="text/javascript" src="/assets/js/pieprogress/scripts/rainbow.min.js">');
    $('head').append('<script type="text/javascript" src="/assets/js/pieprogress/scripts/jquery-asPieProgress.js">');
    $('head').append('<script type="text/javascript" src="/assets/js/slider-revolution/rs-plugin/js/jquery.themepunch.plugins.min.js">');
    $('head').append('<script type="text/javascript" src="/assets/js/slider-revolution/rs-plugin/js/jquery.themepunch.revolution.min.js">');
    $('head').append('<script type="text/javascript" src="/assets/js/bxslider/jquery.bxslider.min.js">');
    $('head').append('<script type="text/javascript" src="/assets/js/jquery.scroll.js">');
    $('head').append('<script type="text/javascript" src="/assets/js/jquery.hoverizr.min.js">');*/
    $('head').append('<script type="text/javascript" src="/assets/js/pieprogress/scripts/rainbow.min.js">');
    $('head').append('<script type="text/javascript" src="/assets/js/pieprogress/scripts/jquery-asPieProgress.js">');
    $('head').append('<script type="text/javascript" src="/assets/js/slider-revolution/rs-plugin/js/jquery.themepunch.plugins.min.js">');
    $('head').append('<script type="text/javascript" src="/assets/js/slider-revolution/rs-plugin/js/jquery.themepunch.revolution.min.js">');
    $('head').append('<script type="text/javascript" src="/assets/js/bxslider/jquery.bxslider.min.js">');


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

Meteor.subscribe('MesProjets')
Meteor.subscribe('abonnementp')
Meteor.subscribe('CP')
Meteor.subscribe('images');
Meteor.subscribe('MesContributions');
Meteor.subscribe('photoCouverture');
Template.modificationProjetuser.helpers({
    nbrParticipant:function(){
        return  Contributeur.find({IdProjet:this._id}).count();
    },
    nombreActualite:function(){
        return Actu.find({idprojet:this._id}).count();
    },
    categOmoin:function(){
        var id=Test.findOne({_id:this._id});
        var check=id.basicInfo.categorie;

        if(check=='') {
            Session.set("categOmoin","false");
            return 'not-ok'
        }
        else {
            Session.set("categOmoin","true");
            return 'ok'
        }
    },
    contrepartieOmoin:function(){
        var id=CP.find({idprojet:this._id}).count();
        if(id<3) {
            Session.set("contrepartieOmoin","false")
            return 'not-ok'
        }
        else {
            Session.set("contrepartieOmoin","true")
            return 'ok'
        }
    },
    photoProjetOmoin:function(){

        var checkPHC=PhotoCouverture.find({idprojet:this._id}).count()
        if(checkPHC>=1) {
            Session.set("photoProjetOmoin","true");
            return 'ok';
        }
        else {
            Session.set("photoProjetOmoin","false");
            return 'not-ok'
        }

    },
    idprojet:function(){
         var x=this._id;
        return x;
    },
    existactu:function(){
        var verif=Actu.findOne({idprojet:this._id});
        if(verif!=null||verif!=undefined)
            return true;
        return false;
    },
    descriptionCheck:function(){
        var id=Test.findOne({_id:this._id});
        var check=id.basicInfo.description;

        if(check == '') {
            Session.set("descriptionCheck","false");
            return 'not-ok';
        }
        else {
            Session.set("descriptionCheck","true");
            return 'ok'
        }
},
    avatar:function(){
        var u=Meteor.users.findOne({_id:Meteor.userId(),'profile.ville': {$exists: true}});

        var idd=Images.findOne({utilisateurId:Meteor.userId()});
        if((idd==undefined||idd==null)||(u==null)||(u==undefined))
        {
            Session.set("avatar","false");

            return 'not-ok'}

        {
            Session.set("avatar","true");
            return 'ok'
        }
    },
    facturationCheck:function(){
        var id=Test.findOne({_id:this._id});
       var  verifexistp=Test.findOne({_id:this._id,'particulier': {$exists: true}});
       var  verifexistprib=Test.findOne({_id:this._id,'particulier.fichierRIB': {$exists: true}});
       var  verifexistpcin=Test.findOne({_id:this._id,'particulier.fichierCIN': {$exists: true}});
       var  verifexistpjust=Test.findOne({_id:this._id,'particulier.fichierJustificatif': {$exists: true}});

      var   verifexista=Test.findOne({_id:this._id,'association': {$exists: true}});
        var  verifexistarib=Test.findOne({_id:this._id,'association.fichierRIB': {$exists: true}});
        var  verifexistacin=Test.findOne({_id:this._id,'association.fichierCIN': {$exists: true}});
        var  verifexistastat=Test.findOne({_id:this._id,'association.fichierStatuts': {$exists: true}});
        var  verifexistaident=Test.findOne({_id:this._id,'association.fichierIdentification': {$exists: true}});
        var  verifexistaimmat=Test.findOne({_id:this._id,'association.fichierImmatriculation': {$exists: true}});
        var  verifexistEn=Test.findOne({_id:this._id,'entreprise': {$exists: true}});
        var  verifexisterib=Test.findOne({_id:this._id,'entreprise.fichierRIB': {$exists: true}});
        var  verifexistecin=Test.findOne({_id:this._id,'entreprise.fichierCIN': {$exists: true}});
        var  verifexisteimmat=Test.findOne({_id:this._id,'entreprise.fichierImmatriculation': {$exists: true}});
        var  verifexistestat=Test.findOne({_id:this._id,'entreprise.fichierStatuts': {$exists: true}});



        verifexiste=Test.findOne({_id:this._id,'entreprise': {$exists: true}});

        if(verifexistp) {
            if ((verifexistprib != undefined || verifexistprib != null) && (verifexistpcin != undefined || verifexistpcin != null) && (verifexistpjust != undefined || verifexistpjust != null)) {
                Session.set('okornotok', 'ok')
                Session.set("facturationCheck","true");

            }
            else {
                Session.set('okornotok', 'not-ok')
                Session.set("facturationCheck","false");
            }
        }
              if(verifexista)
           {
               if((verifexistaimmat!=undefined || verifexistaimmat!=null) &&(verifexistaident!=undefined || verifexistaident!=null) &&(verifexistastat!=undefined || verifexistastat!=null) &&(verifexistarib!=undefined || verifexistarib!=null) && (verifexistacin!=undefined ||verifexistacin!=null)) {
                   Session.set('okornotok','ok')
                   Session.set("facturationCheck","true");

               }
               else {
                   Session.set('okornotok','not-ok')
                   Session.set("facturationCheck","false");
               }

           }
        if(verifexistEn)
        {
            if((verifexisteimmat!=undefined || verifexisteimmat!=null) &&(verifexistestat!=undefined || verifexistestat!=null) &&(verifexisterib!=undefined || verifexisterib!=null) && (verifexistecin!=undefined ||verifexistecin!=null)) {
                Session.set('okornotok','ok')
                Session.set("facturationCheck","true");

            }
            else {
                Session.set('okornotok','not-ok')
                Session.set("facturationCheck","false");
            }

        }


      return Session.get('okornotok');

    },

  /*  soumission:function(){
        Tracker.autorun(function() {
            a = Session.get("categOmoin");
            b = Session.get("contrepartieOmoin");
            c = Session.get("photoProjetOmoin");
            d = Session.get("descriptionCheck");
            ee = Session.get("facturationCheck");
            f = Session.get("avatar");
            if((a=="true")&&(b=="true")&&(c=="true")&&(d=="true")&&(ee=="true")&&(f=="true")) {
             Session.set("ver","ok")

            }
            {
                Session.set("ver","notok")

            }
            if(Session.get("ver")=="ok")
                return true;
            return false;
        });






    },*/
    contributeurs:function(){
        x=  Contributeur.find({IdProjet:this._id}).map(function(elem)
        {
            return  elem.Idcontributeur;
        });
        return Meteor.users.find({_id: {$in:x}})

    },
    contreparties: function () {

        return CP.find({idprojet: this._id}).fetch();
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
Template.modificationProjetuser.onCreated(function() {

    Session.set('commentSubmitErrors', {});
});
Template.modificationProjetuser.events({
    "click #sou":function(){
        analytics.track( 'Submitted project', {
            title: 'Soumission de projet'
        });
       // Bert.alert( 'Votre projet a été bien soumis', 'success' );
      //  Bert.alert( 'Ernie, why did I just step on your rubber duckie?!', 'danger' );
      var d=new Date();
        Meteor.call('updateTest',{_id:this._id},{etat:"En verification",submitted:d});
        Bert.alert({
            icon: 'fa-magic',
            title: 'Félicitation !',
            message: 'Votre projet a été bien soumis',
          //  type: 'now-playing'
        });

    },
    "click #supprojet":function(event)

    {
        event.preventDefault();
        var v=Test.findOne({_id:this._id});
      if(v.verifier==false){

          BootstrapModalPrompt.prompt({
                  title: "Confirmation de suppression",
                  content: "ATTENTION : Cette action est irréversible. Êtes-vous sur de vouloir supprimer ce projet ?",

                  template: Template.myCustomTemplate,
                  templateData: {
                      customKey: 333
                  },
                  btnOkText: 'Confirmer',
                  btnDismissText: 'Annuler'

              },
              // btnOkText: 'Alright, let\'s do it!'

              function(result) {
                  if (result) {
                      analytics.track( 'Delete project', {
                          title: 'Suppression de projet'
                      });
                      Meteor.call("deleteProjet",Session.get("idpcontributeur"));
                      Router.go('/profile');
                      Bert.alert({
                          icon: 'fa-magic',
                          title: 'Confirmation de suppression!',
                          message: 'Votre projet a été bien supprimer'
                          //  type: 'now-playing'
                      });

                  }
                  else {
                  }
              });
      } else{

          BootstrapModalPrompt.prompt({
                  title: "Demande de suppression",
                  content: "ATTENTION : Cette action est irréversible. Êtes-vous sur de vouloir supprimer ce projet ?",

                  template: Template.myCustomTemplate,
                  templateData: {
                      customKey: 333
                  },
                  btnOkText: 'Confirmer',
                  btnDismissText: 'Annuler'

              },
              // btnOkText: 'Alright, let\'s do it!'

              function(result) {
                  if (result) {
                      analytics.track( 'Claim to delete project', {
                          title: 'Demande de suppression'
                      });
                    demande={}
                      demande.idprojet=Session.get("idpcontributeur");
                      demande.dateDemande=new Date();

                   //   Meteor.call("deleteProjet",Session.get("idpcontributeur"));
                      Meteor.call('insertDemandeSupp',demande);
                      Bert.alert({
                          icon: 'fa-magic',
                          title: 'Demande de suppression!',
                          message: 'Votre demande de suppression a été bien envoyé'
                          //  type: 'now-playing'
                      });

                  }
                  else {
                  }
              });
      }
       // Meteor.call("deleteProjet",localStorage.getItem("idpro"));


      //  });


    },
    "click .fb-share-button":function(){
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.likes',
            action_properties: JSON.stringify({
                object:window.location.href,
            })
        }, function(response){});
    },
    "click #idpro":function(){
        localStorage.setItem("idpro",this._id);
    },
    "click #desabonner":function(){
        analytics.track( 'Unsubscribe', {
            title: 'Se désabonner d\'un projet'
        });
        Meteor.call("deleteAbonner",Meteor.userId(),this._id);
    },
    "click #sabonner":function(){
        analytics.track( 'Subscribe project', {
            title: 'S\'est abonné à un projet'
        });
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
        analytics.track( 'Comment project', {
            title: 'a laissé un commentaire sur un projet'
        });

        comments={};
        comments.projetId=this._id;
        comments.body = $('#commentaire').val();

        var errors = {};
        if (!comments.body) {
            errors.body = "S'il vous plait , écrivez quelque chose";
            return Session.set('commentSubmitErrors', errors);
        }
        if(!Meteor.userId()){
            errors.body = "Veuillez vous connectez afin que vous puissiez laisser un commentaire";
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
        analytics.track( 'Voted Project', {
            title: 'a voté pour un projet'
        });
        Meteor.call('upvote', this._id);
    }
});
Template.modifierContrePartie.helpers({
    verifajout:function(){
        if(Session.get("ajoutcp")=="vrai")
            return true;
        return false;
    },
    modifcp:function(){
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
          var idc=Session.get("idContrePartie")
        return CP.findOne({_id:idc});
    }
});
Template.modifierContrePartie.events({
    'click #removecp':function(){
        var id=this._id;

        BootstrapModalPrompt.prompt({
                title: "Confirmation de suppression",
                content: "ATTENTION : Cette action est irréversible. Êtes-vous sur de vouloir supprimer cette contrepartie ?",

                template: Template.myCustomTemplate,
                templateData: {
                    customKey: 333
                },
                btnOkText: 'Confirmer',
                btnDismissText: 'Annuler'

            },
            // btnOkText: 'Alright, let\'s do it!'

            function(result) {
                if (result) {
                    analytics.track( 'Delete contrepartie', {
                        title: 'a supprimer une contrepartie'
                    });
                    Meteor.call("deletecp",id);
                }
                else {
                    console.log("notOK")
                }
            });

    },
    'click #annulermodifCP' :function(){
        Session.set("edit","faux");
    },
    'click #annulerajoutCP' :function(){
        Session.set("ajoutcp","faux");
    },
    'submit #confirmerAjCP' :function(e){
        e.preventDefault();
        analytics.track( 'Add contrepartie', {
            title: 'a ajouté une contrepartie'
        });
        contrp={}
         contrp.nom = $('#nomcpp').val();
         contrp.montant = Number($('#montantcpp').val());
        contrp.quantitee = Number($('#qtcpp').val());
         contrp.dateLivraison = $('#pickerCPP').val();
         contrp.description= $('#descriptioncpp').val();
        cpa={}
        cpa.cp=contrp;
        cpa.idprojet=this._id;
        Meteor.call('insertCP',cpa)
        Session.set("ajoutcp","faux");


    },
    'click #ajoutcp':function(e){
        e.preventDefault();
        Session.set("ajoutcp","vrai");
    },
    "click #pickerCPM":function(){
        $('#pickerCPM').datepicker({
            language: 'fr',
            format: "mm-yyyy",
            viewMode: "months",
            minViewMode: "months"
        });
    },
    "click #pickerCPP":function(){
        $('#pickerCPP').datepicker({
            language: 'fr',
            format: "mm-yyyy",
            viewMode: "months",
            minViewMode: "months"
        });
    },
    'submit #mcp':function(event){
        event.preventDefault();
        analytics.track( 'Edit Contrepartie', {
            title: 'a modifier une contrepartie'
        });
      var  nom = $('#nomcpm').val();
      var  montant = Number($('#montantcpm').val());
       var quantitee = Number($('#qtcpm').val());
       var dateLivraison = $('#pickerCPM').val();
      var  description= $('#descriptioncpm').val();
        var ses=Session.get("idContrePartie")
       Meteor.call('updateCP',{_id:ses},{$set:{"cp.nom":nom,"cp.montant":montant,"cp.quantitee":quantitee,"cp.dateLivraison":dateLivraison,"cp.description":description}})
        Session.set("edit","faux");
    },
    'click .edit-link':function(){
        Session.set("edit","vrai");
        Session.set("idContrePartie",this._id)
    /*    */

    }


});
Template.modifierContrePartie.rendered = function() {
    Session.set("edit","faux")
   Session.set("idContrePartie",'')

    $("#confirmerAjCP").validate({
        rules: {
            montantcpma:{
                required : true,
                montantInteger:true,
                zero : true
            },
            descriptioncpma : {
                required : true,
                minlength: 50,
                maxlength: 110
            },
            nomcpma:{
                required : true,
                minlength:5,
                maxlength:20
            },
            qtcpma : {
                required : true,
                zero:true

            },
            pickerCPPa: {
                required : true
            }



        },

        messages: {

            montantcpma: {
                required : "Le montant est obligatoire.",
                montantInteger : "Le montant doit étre un entier",
                zero : "Le montant doit être supérieur à zéro et ne doit pas être un nombre négatif aussi "
            },

            descriptioncpma : {
                required : "La Description doit être remplie",
                minlength: "Votre description doit contenir au moin 50 caractéres.",
                maxlength: "Votre description ne doit pas dépasser 110 caractéres."

            },
            nomcpma : {
                required : "Le nom de la contrepartie doit être rempli",
                minlength: "Le nom de votre contrepartie doit contenir au moin 5 caractéres.",
                maxlength: "Votre contrepartie ne doit pas dépasser 20 caractéres."
            },
            qtcpma: {
                required : "La quantité doit être remplie",
                zero : "La quantité doit être supérieur à zéro et ne doit pas être un nombre négatif aussi "
            },
            pickerCPPa:{
                required : "La date doit être remplie"
            }


        }
    });
    $("#mcp").validate({
        rules: {
            montantcpm:{
                required : true,
                montantInteger:true,
                zero : true
            },
            descriptioncpm : {
                required : true,
                minlength: 50,
                maxlength: 110
            },
            nomcpm:{
                required : true,
                minlength:5,
                maxlength:20
            },
            qtcpm : {
                required : true,
                zero:true

            },
            pickerCPM: {
                required : true
            }



        },

        messages: {

            montantcpm: {
                required : "Le montant est obligatoire.",
                montantInteger : "Le montant doit étre un entier",
                zero : "Le montant doit être supérieur à zéro et ne doit pas être un nombre négatif aussi "
            },

            descriptioncpm : {
                required : "La Description doit être remplie",
                minlength: "Votre description doit contenir au moin 50 caractéres.",
                maxlength: "Votre description ne doit pas dépasser 110 caractéres."

            },
            nomcpm : {
                required : "Le nom de la contrepartie doit être rempli",
                minlength: "Le nom de votre contrepartie doit contenir au moin 5 caractéres.",
                maxlength: "Votre contrepartie ne doit pas dépasser 20 caractéres."
            },
            qtcpm: {
                required : "La quantité doit être remplie",
                zero : "La quantité doit être supérieur à zéro et ne doit pas être un nombre négatif aussi "
            },
            pickerCPM:{
                required : "La date doit être remplie"
            }


        }
    });
}
Template.modifierEtapeOne.rendered = function() {

    $('head').append('<script type="text/javascript" src="/dist/lang/summernote-fr-FR.js">');
    $('head').append('<script type="text/javascript" src="/dist/summernote.min.js">');
    $('head').append('<script type="text/javascript" src="/dist/summernote.js">');
    $(document).ready(function() {
        $('#summernoteModif').summernote({
            height: 200,
            focus: true  ,
            lang :'fr-FR'
        });
    });
    $("#inforBasicm").validate({
        rules: {
            titrem: {
                required: true,
                projetUnique: true
            },
            montantm:{
                required : true

            },
            dureem:{
                required : true,
                dureeCollecte : true
            },


        },

        messages: {
            titrem: {
                required: "Le titre du projet est obligatoire!",
                projetUnique:"Ce titre du projet existe déjà"
            },
            montantm: {
                required : "Veuillez indiquer un montant pour votre collecte",

            },
            dureem: {
                required : "Veuillez indiquer une durée pour votre collecte",
                dureeCollecte :"La durée de votre collécte ne dois pas dépasser les 60 jours"
            },


        }
    });


}
Template.modifierEtapeOne.helpers({

});
Template.modifierEtapeOne.events({
    'submit #inforBasicm':function(event){
        analytics.track( 'Edit BasicInfo', {
            title: 'a modifié ses informations basiques'
        });
        event.preventDefault();
        var source = $('#summernoteModif').summernote('code');
        Bert.defaults.hideDelay = 7000;

        //
        // projets.user=Meteor.user()._id;

      var  titre = $('#titrem').val();
      var  montant = Number($('#montantm').val());
      var  duree = Number($('#dureem').val());
      var  devise= $( "#devisem option:selected" ).text();
      var  categorie= $( "#categoriem option:selected" ).text();
       var description=source;
      var  facebook=$('#fbm').val();
      var  twitter=$('#twitterm').val();
      var  youtube=$('#youtubem').val();
      var  siteWeb=$('#sitem').val();
        Meteor.call('updateTest',{_id:this._id},{"basicInfo.titre":titre,"basicInfo.montant":montant,"basicInfo.duree":duree, "basicInfo.devise":devise,"basicInfo.categorie":categorie,"basicInfo.description":description,"basicInfo.facebook":facebook,"basicInfo.twitter":twitter,"basicInfo.youtube":youtube,"basicInfo.siteWeb":siteWeb})

        var chemain= Router.routes.modificationProjetuser.path({_id: this._id})
        Router.go(chemain);
        Bert.alert({
            icon: 'fa-magic',
            title: 'Félicitation !',
            message: 'Vos informations basiques ont été bien modifiées',
            //  type: 'now-playing'
        });
    }

});
Session.set("idpf","");

Template.modifierInfoPersonnel.rendered=function() {


    var idd = $("#idmodifpro").attr("name");
    Session.set("idpf", idd);
    var verif=Test.findOne({_id:Session.get("idpf")})
    if(verif.entreprise!=null||verif.entreprise!=undefined) {
        Session.set('templateM', 'entrepriseModif');
    }
    else if (verif.association!=null||verif.association!=undefined){
    Session.set('templateM','associationModif');}
    else {
        Session.set('templateM','particulierModif')
    }


}
Template.modifierInfoPersonnel.helpers({
        templateM: function()
        {
            return  Session.get('templateM');
        },
       clasp:function(){
          if(Session.get('templateM')=='particulierModif')
              return 'active';
       },
    clasa:function(){
        if(Session.get('templateM')=='associationModif')
            return 'active';
    },
    clase:function(){
        if(Session.get('templateM')=='entrepriseModif')
            return 'active';
    }
}
);

Template.modifierInfoPersonnel.events({
    "submit #infoper":function(event){
        event.preventDefault();
        analytics.track( 'Edit personal infos', {
            title: 'a modifier ses information personnelles'
        });
      Bert.defaults.hideDelay = 7000;
        verifexistp=Test.findOne({_id:Session.get('idpf'),'particulier': {$exists: true}});
        verifexista=Test.findOne({_id:Session.get('idpf'),'association': {$exists: true}});
        verifexiste=Test.findOne({_id:Session.get('idpf'),'entreprise': {$exists: true}});

        //   event.preventDefault();
        switch (Session.get("templateM")) {
            case 'associationModif' :

                //
                // projets.user=Meteor.user()._id;



                var nom = $('#nomAssociationM').val();
                var numRue = Number($('#street_number').val());
                var route = $('#route').val();
                var localite = $('#locality').val();
                var ville =$('#administrative_area_level_1').val();
                var codePostal = $('#postal_code').val();
                var pays = $('#country').val();
                var immatriculationSiret = $('#immatrAssociationM').val();
                var tva = $('#tvaAssociationM').val();
                var numRNA = $('#numRnaAssociationM').val();
                var responsableDateNaissance = $('#pickerM').val();
                var responsableTel = $('#telAssociationM').val();
                var responsableIBAN = $('#ibanAssociationM').val();
                var responsableBicSwift = $('#bicAssociationM').val();

                Meteor.call('updateAssociation',{_id:Session.get('idpf')},{$set:{"association.nom": nom,"association.numRue": numRue,"association.route": route,
                    "association.localite": localite,"association.ville": ville,"association.codePostal": codePostal,
                    "association.pays": pays,"association.immatriculationSiret": immatriculationSiret,
                    "association.tva": tva,"association.numRNA": numRNA,"association.responsableDateNaissance": responsableDateNaissance,
                    "association.responsableTel": responsableTel,"association.responsableIBAN": responsableIBAN,
                    "association.responsableBicSwift": responsableBicSwift}})

                Meteor.call('updateAdr',{_id:Session.get('idpf')},{$set:{"addresse": localite}})
                if(verifexistp)
                {
                    Meteor.call('removeAllParticulier',Session.get('idpf'))
                }
                if(verifexiste)
                {
                    Meteor.call('removeAllEntreprise',Session.get('idpf'))
                }

                break;
            case 'particulierModif' :

                var titulaireCompte=$('#titulaireParticulierM').val();
                var numRue = Number($('#street_number').val());
                var route = $('#route').val();
                var localite = $('#locality').val();
                var ville =$('#administrative_area_level_1').val();
                var codePostal = $('#postal_code').val();
                var pays = $('#country').val();
                var DateNaissance=$('#pickerrP').val();
                var tel=$('#telparticulierM').val();
                var IBAN=$('#ibanparticulierM').val();
                var BicSwift=$('#bicswiftparticulierM').val();
                Meteor.call('updateParticulier',{_id:Session.get('idpf')},{$set:{"particulier.titulaireCompte": titulaireCompte,"particulier.numRue": numRue,"particulier.route": route,
                    "particulier.localite": localite,"particulier.ville": ville,"particulier.codePostal": codePostal,
                    "particulier.pays": pays,"particulier.DateNaissance": DateNaissance,
                    "particulier.tel": tel,"particulier.IBAN": IBAN,
                    "particulier.BicSwift": BicSwift,}})

                  if(verifexista)
                  {
                      Meteor.call('removeAllAssociation',Session.get('idpf'))
                  }
                if(verifexiste)
                {
                    Meteor.call('removeAllEntreprise',Session.get('idpf'))
                }
                Meteor.call('updateAdr',{_id:Session.get('idpf')},{$set:{"addresse": localite}})

                break;
            case 'entrepriseModif' :
                var nom = $('#nomEntrepriseM').val();
                var numRue = Number($('#street_number').val());
                var route = $('#route').val();
                var localite = $('#locality').val();
                var ville =$('#administrative_area_level_1').val();
                var codePostal = $('#postal_code').val();
                var pays = $('#country').val();
                var immatriculationSiret = $('#immatrEntrepriseM').val();
                var TVA = $('#tvaEntrepriseM').val();
                var responsablePrenom = $('#prenomEntrepriseM').val();
                var responsableNom = $('#nomEntrepriseM').val();
                var responsableTel = $('#telEntrepriseM').val();
                var responsableIBAN = $('#ibanEntrepriseM').val();
                var responsableBicSwift = $('#bicEntrepriseM').val();
                Meteor.call('updateEntreprise',{_id:Session.get('idpf')},{$set:{"entreprise.nom": nom,"entreprise.numRue": numRue,"entreprise.route": route,
                    "entreprise.localite": localite,"entreprise.ville": ville,"entreprise.codePostal": codePostal,
                    "entreprise.pays": pays,"entreprise.immatriculationSiret": immatriculationSiret,
                    "entreprise.TVA": TVA,"entreprise.responsablePrenom": responsablePrenom,"entreprise.responsableNom": responsableNom,
                    "entreprise.responsableTel": responsableTel,"entreprise.responsableIBAN": responsableIBAN,
                    "entreprise.responsableBicSwift": responsableBicSwift,}})
                Meteor.call('updateAdr',{_id:Session.get('idpf')},{$set:{"addresse": localite}})
                if(verifexista)
                {
                    Meteor.call('removeAllAssociation',Session.get('idpf'))
                }
                if(verifexistp)
                {
                    Meteor.call('removeAllParticulier',Session.get('idpf'))
                }

                break;

        };
        Bert.alert({
            icon: 'fa-magic',
            title: 'Félicitation !',
            message: 'Vos informations de facturation ont été bien modifiées',
            //  type: 'now-playing'
        });
       var chemain= Router.routes.modificationProjetuser.path({_id: Session.get('idpf')})
        Router.go(chemain);
    },
    'click #ttm': function(){
        Session.set('templateM', 'associationModif');

    },
    'click #tt1m': function(){
        Session.set('templateM', 'particulierModif');
    },
    'click #tt2m': function(){
        Session.set('templateM', 'entrepriseModif');
    },
});

Template.modifierEtapeTrois.helpers({
    compteurM : function() {
        var hh=Session.get('compteurf')
        if (Session.get('compteurM') == 3 || hh==3)
            return false;
        return true;
    },
    compteurF:function(){
        var compteurf=PhotoCouverture.find({idprojet:Session.get("proidd")}).count();
        var cont=Uploads.find({extraData : {createurId: Meteor.userId(),idprojet:Session.get('intermediaire')}}).count();
        Session.set('compteurf',cont)

        if(compteurf+cont>3)
            return false;
            return true;
    },
    myCallbacks: function() {
        return {

            formData: function () {
                return {
                    createurId: Meteor.userId(),
                    idprojet: Session.get('intermediaire')
                }
            }
        }},
    src: function() {
        if (this.type.indexOf('image') >= 0) {
            return this.url;
            //'upload/'+this._id+'/'+this.path;
        } else return 'file_icon.png';
    },

    fichierssM: function() {

        return  Uploads.find({extraData : {createurId: Meteor.userId(),idprojet:Session.get('intermediaire')}}).fetch();

    }
});

Template.modifierEtapeTrois.events({

    "click #modifphc": function() {
        analytics.track( 'Edit project pictures', {
            title: 'a modifier ses images de projets'
        });
        Bert.defaults.hideDelay = 7000;
        PhotoCouverturM = Uploads.find({extraData : {createurId: Meteor.userId(),idprojet:Session.get('intermediaire')}}).fetch();
        var i;
        photoCouvertureM = {};
        for(i=0; i<PhotoCouverturM.length ; i++)
        {
            photoCouvertureM.photo=PhotoCouverturM[i].url;
            photoCouvertureM.idprojet=Session.get("proidd");
            Meteor.call('insertPHC',photoCouvertureM);
        }
        Bert.alert({
            icon: 'fa-magic',
            title: 'Félicitation !',
            message: 'Vos images défilantes ainsi que votre image de projet on était bien modifiés',
            //  type: 'now-playing'
        });
    },
    'click .deleteUploadM':function() {
        if (confirm('vous etes sure !!?')) {
            Meteor.call('deleteFile', this._id);
          //  Meteor.call('deletePhotoCouverture', this._id);
            Session.set('compteurM', Session.get('compteurM') - 1);
            Session.set('compteurf', Session.get('compteurf') - 1);
        }
    },
    'click .deleteUploadMM':function() {

      //  var test= Test.findOne({$and:[{_id:localStorage.getItem("idpro")},{"photoCouverture.urll":id}]})




        if (confirm('vous etes sure !!?')) {
            Meteor.call('deletePhotoCouverture', this._id);
            Session.set('compteurM', Session.get('compteurM') - 1);
            Session.set('compteurf', Session.get('compteurf') - 1); }
    },
})
//Session.setDefault('compteurM', 0);
Session.setDefault('proidd', "");
Template.modifierEtapeTrois.rendered=function(){
    var id=$("#idmofidpro").attr("name");
    Session.set('intermediaire',Random.id());
    Session.set('proidd',id)
    var c=  PhotoCouverture.find({idprojet:id}).count()
    Session.set('compteurM', c);

}

Template.modifierEtapeTrois.onCreated(function() {

});

Template.actu.rendered=function(){
    $('head').append('<script type="text/javascript" src="../dist/lang/summernote-fr-FR.js">');
    $('head').append('<script type="text/javascript" src="../dist/summernote.min.js">');
    $('head').append('<script type="text/javascript" src="../dist/summernote.js">')
    $(document).ready(function() {
        $('#summernoteActu').summernote({
            height: 200,
            focus: true  ,
            lang :'fr-FR'
        });
    });
    $("#formActu").validate({
        rules: {
            titreActu:{
                required : true,

            },

        },

        messages: {

            titreActu: {
                required : "Le titre de votre actualité est obligatoire.",
            },

        }
    });

}
Template.actu.events({
    'submit #formActu':function(e){
        e.preventDefault();
        var source = $('#summernoteActu').summernote('code');
        var  titre = $('#titreActu').val();
        actu={}
        actu.contenu=source;
        actu.titre=titre;
        actu.idprojet=this._id;
        actu.submitted=new Date();
        actu.publish="false";
        Meteor.call('insertActu',actu);
        analytics.track( 'Add actuality', {
            title: 'a ajouter une actualité'
        });
       var chemain=Router.routes.listActu.path({_id:this._id });
        Router.go(chemain);


    }
});
Meteor.subscribe('actualiter')
Template.listActu.helpers({

        listActualiter:function(){

            return Actu.find({$and:[{idprojet:this._id},{publish:"false"}]}).fetch();
        },
    listActualiterTrue:function(){

        return Actu.find({$and:[{idprojet:this._id},{publish:"true"}]}).fetch();
    },
    nbract:function(){
        var nb=Actu.find({$and:[{idprojet:this._id},{publish:"false"}]}).count();
        if(nb>=1)
            return true;
            return false;
    },
    nbractt:function(){
        var nbt=Actu.find({$and:[{idprojet:this._id},{publish:"true"}]}).count();
        if(nbt>=1)
            return true;
        return false;
    }



});
Template.listActu.events({
    /*'click #ajoutac':function(e){
        e.preventDefault();
        $('head').append('<script type="text/javascript" src="../dist/lang/summernote-fr-FR.js">');
        $('head').append('<script type="text/javascript" src="../dist/summernote.min.js">');
        $('head').append('<script type="text/javascript" src="../dist/summernote.js">')

        $(document).ready(function() {
            $('#summernoteActua').summernote({
                height: 200,
                focus: true  ,
                lang :'fr-FR'
            });
        });

        Session.set('ajac','vrai')
    },*/
'click #removeac':function(e){
    e.preventDefault();

    var id=this._id;
    BootstrapModalPrompt.prompt({
            title: "Confirmation de suppression",
            content: "ATTENTION : Cette action est irréversible. Êtes-vous sur de vouloir supprimer cette actualité ?",

            template: Template.myCustomTemplate,
            templateData: {
                customKey: 333
            },
            btnOkText: 'Confirmer',
            btnDismissText: 'Annuler'

        },

        function(result) {
            if (result) {
                analytics.track( 'Delete Actuality', {
                    title: 'a supprimer une actualité'
                });

                Meteor.call("deleteac",id);


            }
            else {
            }
        });


},
    "click #publierAct":function(e){
       // e.preventDefault();
        console.log(this._id)
      //  var id=localStorage.getItem("idactu");
        analytics.track( 'Publish Actuality', {
            title: 'a publié une actualité'
        });
       Meteor.call('updateAct',{_id:this._id},{$set:{"publish":"true"}});

    },
    "click #editactu":function(){
        localStorage.setItem("idactu",this._id);
    }


})

Template.modifActu.rendered=function(){
    $('head').append('<script type="text/javascript" src="../dist/lang/summernote-fr-FR.js">');
    $('head').append('<script type="text/javascript" src="../dist/summernote.min.js">');
    $('head').append('<script type="text/javascript" src="../dist/summernote.js">')
    $(document).ready(function() {
        $('#summernoteActum').summernote({
            height: 200,
            focus: true  ,
            lang :'fr-FR'
        });
    });
    $("#formActum").validate({
        rules: {
            titreActum:{
                required : true,

            },

        },

        messages: {

            titreActum: {
                required : "Le titre de votre actualité est obligatoire.",
            },

        }
    });

}
Template.modifActu.events({
    "submit #formActum":function(e){
        e.preventDefault();
        analytics.track( 'Edit Actuality', {
            title: 'a modifier une actualité'
        });

        var source = $('#summernoteActum').summernote('code');
        var  titre = $('#titreActum').val();
        var id=localStorage.getItem("idactu");
        Meteor.call('updateAct',{_id:id},{$set:{"contenu":source,"titre":titre}});
        var chemain=Router.routes.listActu.path({_id:this._id });
        Router.go(chemain);

    }
})
