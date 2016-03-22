Meteor.subscribe("uploads");
Uploader.finished = function(index, fileInfo, templateContext) {
    console.log('File: ');
    console.log(fileInfo);
    console.log('Context:');
    console.log(templateContext);
}
Template.demarrerProjet.helpers({
    errorMessage: function(field) {
        return Session.get('projetSubmitErrors')[field];
    },
    count: function(){
        if(Session.get('countCP')<1)
        return true;
        return false;
    },
    countf:function(){
        if(Session.get('countCP')>=1 && Session.get('countCP')<=5)
        return true;
        return false;
    },

    errorClass: function (field) {
        return !!Session.get('projetSubmitErrors')[field] ? 'has-error' : '';
    },
    compteur : function(){
       if(Session.get('compteur') ==3)
           return false;
           return true;
    },
    compteurCP : function(){
        return Session.get('countCP');
    },
    myFormData: function() {
        return { directoryName: 'images', prefix: this._id, _id: this._id }
    },
    filesToUpload: function() {
        return Uploader.info.get();
    },
          menu: function() {
              var navItems = ['Association', 'Particulier', 'Entreprise'];

      return navItems;
  },
    template: function()
    {
        return  Session.get('template');
    },

    dat: function() {
        return {
            id: this._id,
            other: this.other,
            hard: 'ffffff'
        }
    },

    myCallbacks: function() {
        return {

            formData: function () {
                return {
                    createurId: Session.get('utilisateurCourant'),
                    categorie: 'media'
                }
            }
        }},


});
/*Template.demarrerProjet.onRendered( function() {



});*/
Template.demarrerProjet.onCreated(function() {
    Session.set('projetSubmitErrors', {});


});
Template.demarrerProjet.rendered = function() {
    Session.get('template');
    $('head').append('<script type="text/javascript" src="dist/lang/summernote-fr-FR.js">');
    $('head').append('<script type="text/javascript" src="dist/summernote.min.js">');
    $('head').append('<script type="text/javascript" src="dist/summernote.js">');
   // $('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpeynhXl0nsyNxzBL4aNPjQq9ekG4Za4&libraries=places&callback=initAutocomplete" async defer></script>');

    // $('head').append('<script type="text/javascript" src="js/custom.js">');
    Session.setDefault('countCP',0)
    Session.set('utilisateurCourant',Random.id());
    Session.set('utilisateurInfo',Random.id());
    Session.set('utilisateurStatuts',Random.id());
    Session.set('utilisateurIdentification',Random.id());
    Session.set('utilisateurImmatricule',Random.id());
    Session.set('utilisateurCin',Random.id());
    Session.setDefault('rib',0);
    Session.setDefault('statuts',0);
    Session.setDefault('identification',0);
    Session.setDefault('immatricule',0);
    Session.setDefault('cin',0);


    Session.set('utilisateurInfop',Random.id());
    Session.set('utilisateurJustificatif',Random.id());
    Session.set('utilisateurCinp',Random.id());
    Session.setDefault('ribp',0);
    Session.setDefault('justificatif',0);
    Session.setDefault('cinp',0);


    Session.set('utilisateurInfoe',Random.id());
    Session.set('utilisateurStatutse',Random.id());
    Session.set('utilisateurImmatriculee',Random.id());
    Session.set('utilisateurCine',Random.id());
    Session.setDefault('ribe',0);
    Session.setDefault('statutse',0);
    Session.setDefault('immatriculee',0);
    Session.setDefault('cine',0);
    jQuery.extend(jQuery.validator.messages, {
        url : "entrer une url valide"
    });

   /*$( "#inforBasic" ).validate({
        rules: {
            titre: {
                required: true
            },
            montant:{
                required : true
            },
            duree:{
                required : true
            },
            categorie : {
                required : true
            }

        },

        messages: {
            titre: {
                required: "le titre du projet est obligatoire!"
            },
            montant: {
                required : "Veuillez indiquer un montant pour votre collecte"
            },
            duree : {
                required : "Veuillez indiquer une durée pour votre collecte"
            },
            categorie : {
                required : "Veuillez choisir une categorie"
            }
        }
    });*/

    /* $( "#inforBasic" ).validate({
     rules: {
     montantcp:{
     required : true
     },
     description : {
     required : true
     },


     },

     messages: {

     montant: {
     required : "Le montant n'est pas un nombre. Veuillez entrer seulement des chiffres."
     },

     description : {
     required : "Le Description doit être rempli(e)"
     }
     }
     });*/

    $('#pickerCP').datepicker({
        language: 'fr',
        format: "mm-yyyy",
        viewMode: "months",
        minViewMode: "months"
    });



    Accounts.onLogin(function(user){
        var routeName = Router.current().route.getName();
        if(routeName=='demarrerProjet')
        Router.go('/log');
    });

    $(document).ready(function() {
    $('#summernote').summernote({
        height: 200,
        focus: true  ,
        lang :'fr-FR'
    });
});
},


/*
Template.demarrerProjet.events({
   'change .myFileInput': function(event, template) {
    //    Meteor.subscribe('create');
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
       Images.insert(files[i], function (err, fileObj) {
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            });
        }
        projet = {};
        projet.titre = "aaa";
        projet.nom="aazazaz";
     Meteor.call('creer',projet);

          //projet.insert({name : "aaaaa"});

    }
'change .form-group': function(event, template) {
    console.log("aaaa",this._id);
    FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
            if (err){
                // handle error
            } else {
                // handle success depending what you need to do
                var userId = Meteor.userId();
                console.log("aaaa",userId);
                var imagesURL = {
            ///  "profile.image": "/cfs/files/images/" + fileObj._id
                    "profile.image": "/uploads/" + fileObj._id
            };
                Meteor.users.update(userId, {$set: imagesURL});
            }
        });
    });
},
});  */

Template.demarrerProjet.events({
  "click .delete": function () {
    Meteor.call('removefile',this._id);
  },
    "click #datetime" :function(){
        $('#datetime').datepicker({
            language: 'fr',
            format: "mm-yyyy",
            viewMode: "months",
            minViewMode: "months"
        });
    },

   /* "change #nbrCP" :function(){
        longueur= $( "#nbrCP option:selected" ).text();

        var pas;
      if(Session.get('tempo')>longueur){
          for (pas = 0; pas < Session.get('tempo')-longueur; pas++) {
              $("#add-more-perks").children("div").remove();
          }
      }
        else {
          for (pas = 0; pas < longueur; pas++) {
              var perkelEments = $("#perk-elements").html();
              $("#add-more-perks").append("<div class='moreperks'>" + perkelEments + "</div>");
              tempo= tempo + 1;
              Session.set('tempo', tempo);
          }
      }
    },*/
    "click #imgpred" : function(){

        $('.form-wizard').each(function() {
            console.log(this)
            imgpred = $(this).attr('id');


            if(imgpred=='image')
            {$(this).css("display","block");}
            else{$(this).css("display","none");}

        });
        thissImgpred = "image";

        var formstep = 0;

        $('.start-project .title ul li').each(function() {
            if(formstep==0)
            {
                if(thissImgpred==$(this).attr('data-link'))
                {
                    formstep = 1;
                    $(this).addClass("current");
                }
                else
                {
                    $(this).removeClass("current");
                    $(this).addClass("done");
                }
            }
            else
            {
                $(this).removeClass("done");
                $(this).removeClass("current");
                //	b=$(this).attr('data-link');

            }
        });

    },

    "click #predcp":function(){
        $('.form-wizard').each(function() {

            cp = $(this).attr('id');


            if(cp=='contre-parties')
            {$(this).css("display","block");}
            else{$(this).css("display","none");}

        });
        thisCp = "contre-parties";

        var formstep = 0;

        $('.start-project .title ul li').each(function() {
            if(formstep==0)
            {
                if(thisCp==$(this).attr('data-link'))
                {
                    formstep = 1;
                    $(this).addClass("current");
                }
                else
                {
                    $(this).removeClass("current");
                    $(this).addClass("done");
                }
            }
            else
            {
                $(this).removeClass("done");
                $(this).removeClass("current");
                //	b=$(this).attr('data-link');

            }
        });
    },
    "click #addcontrepartie" :function(){

        a = Session.get('countCP')+1;
        $('#add-more-perks').append("<div class='moreperks"+a+"'>" + $("#perk-elements").html() + "</div></div>");
        $('.moreperks'+a+' #pickerCP').datepicker({
            language: 'fr',
            format: "mm-yyyy",
            viewMode: "months",
            minViewMode: "months"
        });
        Session.set('countCP',Session.get('countCP')+1);
    },
    "click #suppcontrepartie" :function(){
        as = Session.get('countCP');
        mores = "#add-more-perks";
        $(mores).children("div:last").remove();
        Session.set('countCP',Session.get('countCP')-1);

    },
"click #precedentbd" : function(){

    $('.form-wizard').each(function() {
        console.log(this)
        thisidd = $(this).attr('id');


        if(thisidd=='basic-data')
        {$(this).css("display","block");}
        else{$(this).css("display","none");}

    });
    thissDataLink = "basic-data";

    var formstep = 0;

    $('.start-project .title ul li').each(function() {
        if(formstep==0)
        {
            if(thissDataLink==$(this).attr('data-link'))
            {
                formstep = 1;
                $(this).addClass("current");
            }
            else
            {
                $(this).removeClass("current");
                $(this).addClass("done");
            }
        }
        else
        {
            $(this).removeClass("done");
            $(this).removeClass("current");
            //	b=$(this).attr('data-link');

        }
    });

},
    "click #ibpred" : function() {

        $('.form-wizard').each(function () {
            console.log(this)
            thisibp = $(this).attr('id');


            if (thisibp == 'info-bancaire') {
                $(this).css("display", "block");
            }
            else {
                $(this).css("display", "none");
            }

        });
        thissIbp = "info-bancaire";

        var formstep = 0;

        $('.start-project .title ul li').each(function () {
            if (formstep == 0) {
                if (thissIbp == $(this).attr('data-link')) {
                    formstep = 1;
                    $(this).addClass("current");
                }
                else {
                    $(this).removeClass("current");
                    $(this).addClass("done");
                }
            }
            else {
                $(this).removeClass("done");
                $(this).removeClass("current");
                //	b=$(this).attr('data-link');

            }
        });
    },
    "submit #contrePartie": function( event ) {
        event.preventDefault();
        a = new Array();
        ab= {}
        contrepartie = {};

        contrepartie.nom = $('#nomcp').val();
        contrepartie.montant = Number($('#montantcp').val());
        contrepartie.quantitee = Number($('#qtcp').val());
        contrepartie.dateLivraison = $('#pickerCP').val();
        contrepartie.description= $('#descriptioncp').val();
        a.push(contrepartie)
      //  ab.push(contrepartie)

   //  var c =   $(this).attr('count');
     //   console.log(c)
              if(Session.get('countCP')>0) {
                   var i;

                   for (i = 0; i < Session.get('countCP'); i++) {
                       cp = i + 1;
                       contrepartie.nom = $('#add-more-perks').children('.moreperks' + cp).children('.form-group').children('.form-left').children('#nomcp').val();
                       contrepartie.montant = $('#add-more-perks').children('.moreperks' + cp).children('.form-group').children('.form-right').children('#montantcp').val();
                       contrepartie.quantitee = $('#add-more-perks').children('.moreperks' + cp).children('.form-group').children('.form-left').children('#qtcp').val();
                       contrepartie.dateLivraison= $('#add-more-perks').children('.moreperks' + cp).children('.form-group').children('.form-right').children('#pickerCP').val();
                       contrepartie.description = $('#add-more-perks').children('.moreperks' + cp).children('.form-group').children('#descriptioncp').val();


                       a.push(contrepartie)

                       console.log(a)
                   }
               };

        var contreparties_json=JSON.stringify(a);
        sessionStorage.setItem("contrepartiee",contreparties_json);
        console.log(sessionStorage.getItem("contrepartiee"));
      /*  var contrepartiess_json=JSON.stringify(ab);
        sessionStorage.setItem("contrepartiees",contrepartiess_json);
        console.log(sessionStorage.getItem("contrepartiees"));*/



        $('.form-wizard').each(function() {
            console.log(this)
            image = $(this).attr('id');


            if(image=='image')
            {$(this).css("display","block");}
            else{$(this).css("display","none");}

        });
        thisImage = "image";

        var formstep = 0;

        $('.start-project .title ul li').each(function() {
            if(formstep==0)
            {
                if(thisImage==$(this).attr('data-link'))
                {
                    formstep = 1;
                    $(this).addClass("current");
                }
                else
                {
                    $(this).removeClass("current");
                    $(this).addClass("done");
                }
            }
            else
            {
                $(this).removeClass("done");
                $(this).removeClass("current");
                //	b=$(this).attr('data-link');

            }
        });
    },

    "submit #infobancaire": function( event ) {
        event.preventDefault();
        switch (Session.get("template")) {
            case 'association' :
                association = {};
                //
                // projets.user=Meteor.user()._id;

                association.nom = $('#nomAssociation').val();
                association.numRue = Number($('#street_number').val());
                association.route=event.target.routeAssociation.value;
                association.localite=event.target.localiteAssociation.value;
                association.ville=event.target.villeAssociation.value;
                association.codePostal=event.target.codePostalAssociation.value;
                association.pays=event.target.paysAssociation.value;
                association.immatriculationSiret=event.target.immatrAssociation.value;
                association.tva=event.target.tvaAssociation.value;
                association.numRNA=event.target.numRnaAssociation.value;
                association.responsableDateNaissance = $('#picker').val();
                association.responsableTel = $('#telAssociation').val();
                association.responsableIBAN = $('#ibanAssociation').val();
                association.responsableBicSwift = $('#bicAssociation').val();
                fichierRib=  Fichiers.findOne({utilisateurRib : Session.get('utilisateurInfo')});
                fichierStat= Fichiers.findOne({utilisateurStatuts : Session.get('utilisateurStatuts')});
                fichierIdent=Fichiers.findOne({utilisateurIdentification : Session.get('utilisateurIdentification')});
                fichierImmat=Fichiers.findOne({utilisateurImmatricule : Session.get('utilisateurImmatricule')});
                fichierCin=Fichiers.findOne({utilisateurCin : Session.get('utilisateurCin')});
                association.fichierRIB=fichierRib._id;
                association.fichierStatuts=fichierStat._id;
                association.fichierIdentification=fichierIdent._id;
                association.fichierImmatriculation=fichierImmat._id;
                association.fichierCin=fichierCin._id;
                console.log(fichierRib._id);
                var associations_json=JSON.stringify(association);
                sessionStorage.setItem("association",associations_json);
                console.log(sessionStorage.getItem("association"));
                console.log(JSON.parse(sessionStorage.getItem("association")));
                break;
            case 'particulier' :
                particulier = {}
                particulier.titulaireCompte=event.target.titulaireParticulier.value;
                particulier.numRue=event.target.numRueParticulier.value;
                particulier.route=event.target.routeParticulier.value;
                particulier.localite=event.target.localiteParticulier.value;
                particulier.numRue=event.target.numRueParticulier.value;
                particulier.ville=event.target.villeParticulier.value;
                particulier.codePostal=event.target.codePostalParticulier.value;
                particulier.pays=event.target.paysParticulier.value;
                particulier.DateNaissance=event.target.dateNaissanceParticulier.value;
                particulier.tel=event.target.telParticulier.value;
                particulier.IBAN=event.target.ibanParticulier.value;
                particulier.BicSwift=event.target.bicParticulier.value;
                fichierRibp=  Fichiers.findOne({utilisateurRibp : Session.get('utilisateurInfop')});
                fichierJustif= Fichiers.findOne({utilisateurJustificatif : Session.get('utilisateurJustificatif')});
                fichierCinp=Fichiers.findOne({utilisateurCinp : Session.get('utilisateurCinp')});
                particulier.fichierRIB=fichierRibp._id;
                particulier.fichierJustificatif=fichierJustif._id;
                particulier.fichierCIN=fichierCinp._id;
                var particuliers_json=JSON.stringify(particulier);
                sessionStorage.setItem("particulier",particuliers_json);
                console.log(sessionStorage.getItem("particulier"));
                break;
            case 'entreprise' :
                entreprise = {}
                entreprise.nom=event.target.nomEntreprise.value;
                entreprise.numRue=event.target.numRueEntreprise.value;
                entreprise.route=event.target.routeEntreprise.value;
                entreprise.localite=event.target.localiteEntreprise.value;
                entreprise.ville=event.target.villeEntreprise.value;
                entreprise.codePostal=event.target.codePostalEntreprise.value;
                entreprise.pays=event.target.paysEntreprise.value;
                entreprise.immatriculationSiret=event.target.immatEntreprise.value;
                entreprise.TVA=event.target.tvaEntreprise.value;
                entreprise.responsablePrenom=event.target.prenomResEntreprise.value;
                entreprise.responsableNom=event.target.nomResEntreprise.value;
                entreprise.responsableTel=event.target.telResEntreprise.value;
                entreprise.responsableIBAN=event.target.ibanEntreprise.value;
                entreprise.responsableBicSwift=event.target.bicEntreprise.value;
                fichierRibe= Fichiers.findOne({utilisateurRibe : Session.get('utilisateurInfoe')});
                fichierStatE=Fichiers.findOne({utilisateurStatutse : Session.get('utilisateurStatutse')});
                fichierImmatE=Fichiers.findOne({utilisateurImmatriculee : Session.get('utilisateurImmatriculee')});
                fichierCinE=Fichiers.findOne({utilisateurCine : Session.get('utilisateurCine')});
                entreprise.fichierRIB=fichierRibe._id;
                entreprise.fichierStatuts=fichierStatE._id;
                entreprise.fichierImmatriculation=fichierImmatE._id;
                entreprise.fichierCIN=fichierCinE._id;
                var entreprises_json=JSON.stringify(entreprise);
                sessionStorage.setItem("entreprise",entreprises_json);
                console.log(sessionStorage.getItem("entreprise"));
        };
        $('.form-wizard').each(function() {
            console.log(this)
            compte = $(this).attr('id');


            if(compte=='compte')
            {$(this).css("display","block");}
            else{$(this).css("display","none");}

        });
        thisCompte = "compte";

        var formstep = 0;

        $('.start-project .title ul li').each(function() {
            if(formstep==0)
            {
                if(thisCompte==$(this).attr('data-link'))
                {
                    formstep = 1;
                    $(this).addClass("current");
                }
                else
                {
                    $(this).removeClass("current");
                    $(this).addClass("done");
                }
            }
            else
            {
                $(this).removeClass("done");
                $(this).removeClass("current");
                //	b=$(this).attr('data-link');

            }
        });
    },
    "submit #photoCouverture": function( event ) {
        event.preventDefault();
        PhotoCouvertur = Uploads.find({extraData : {createurId: Session.get('utilisateurCourant'),categorie:'media'}}).fetch();
    var i;
        photoC= new Array();
        ph=new Array();
        photoCouverture = {};

        for(i=0; i<PhotoCouvertur.length ; i++)
        {
            photoCouverture.idPhoto=PhotoCouvertur[i]._id;
            photoC.push(PhotoCouvertur[i]._id);
        //   console.log(PhotoCouvertur[i]._id);
            /*console.log(PhotoCouvertur.length);
            console.log(photoC);*/
        }
      //  Meteor.call('insertTest',photoC);
        var photoCouvertures_json=JSON.stringify(photoC);
        sessionStorage.setItem("photoCouverture",photoCouvertures_json);
     //   console.log(sessionStorage.getItem("photoCouverture"));
        var j ;
        for(j=0; j<JSON.parse(sessionStorage.getItem('photoCouverture')).length ; j++)
        {
            console.log(JSON.parse(sessionStorage.getItem('photoCouverture'))[j]);
        }



        $('.form-wizard').each(function() {
            console.log(this)
            infoBancaire = $(this).attr('id');


            if(infoBancaire=='info-bancaire')
            {$(this).css("display","block");}
            else{$(this).css("display","none");}

        });
        thisIB = "info-bancaire";

        var formstep = 0;

        $('.start-project .title ul li').each(function() {
            if(formstep==0)
            {
                if(thisIB==$(this).attr('data-link'))
                {
                    formstep = 1;
                    $(this).addClass("current");
                }
                else
                {
                    $(this).removeClass("current");
                    $(this).addClass("done");
                }
            }
            else
            {
                $(this).removeClass("done");
                $(this).removeClass("current");
                //	b=$(this).attr('data-link');

            }
        });
    },

    "submit #inforBasic": function( event ) {
        event.preventDefault();

        var source = $('#summernote').summernote('code');
        projets = {};
          //
        // projets.user=Meteor.user()._id;

        projets.titre = $('#titre').val();
        projets.montant = Number($('#montant').val());
        projets.duree = Number($('#duree').val());
        projets.devise= $( "#devise option:selected" ).text();
        projets.categorie= $( "#categorie option:selected" ).text();
        projets.description=source;
        projets.facebook=$('#fb').val();
        projets.twitter=$('#twitter').val();
        projets.youtube=$('#youtube').val();
        projets.siteWeb=$('#site').val();
        var projets_json=JSON.stringify(projets);
        sessionStorage.setItem("projet",projets_json);
        console.log(sessionStorage.getItem("projet"));
     /*   var errors = validateProjet(projets);
        if (errors.titre || errors.montant || errors.duree) {
            return Session.set('projetSubmitErrors', errors);
            console.log(Session.get('projetSubmitErrors'));*/
      //  } else {
           /* Meteor.call('createProject', projets, function (error, result) {
                // affiche l'erreur à l'utilisateur et s'interrompt
                if (error)
                    return throwError(error.reason);
                console.log(result)
                if (result)
                    throwSucces('succées de la premiere étape');

                // affiche ce résultat mais route quand même
            });*/
            $('.form-wizard').each(function() {
                console.log(this)
                thisid = $(this).attr('id');


                if(thisid=='contre-parties')
                {$(this).css("display","block");}
                else{$(this).css("display","none");}

            });
        thisDataLink = "contre-parties";

        var formstep = 0;

        $('.start-project .title ul li').each(function() {
            if(formstep==0)
            {
                if(thisDataLink==$(this).attr('data-link'))
                {
                    formstep = 1;
                    $(this).addClass("current");
                }
                else
                {
                    $(this).removeClass("current");
                    $(this).addClass("done");
                }
            }
            else
            {
                $(this).removeClass("done");
                $(this).removeClass("current");
                //	b=$(this).attr('data-link');

            }
        });
    //    }

       /* $('.form-wizard').each(function() {
            console.log(this)
            thisid = $(this).attr('id');


            if(thisid=='contre-parties')
            {$(this).css("display","block");}
            else{$(this).css("display","none");}

        });*/


},

    "click #verifLogin": function () {
        if(Meteor.userId())
        Router.go('/profile')
    },
    "click ul.nav-tabs" : function(){
      //  console.log($(this).attr('templat'))
       // choix =$(".active").children("a").attr("templat");
       // alert(choix);
      //  alert(Session.get('template'));
    },
 /*  "click #nextcp" : function(){
       hhh= $("#inforBasic").validate();
      if(hhh){
       $('.form-wizard').each(function() {
           console.log(this)
           thisid = $(this).attr('id');


           if(thisid=='contre-parties')
           {$(this).css("display","block");}
           else{$(this).css("display","none");}

       }); }
    },*/


    'change #in': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
                Fichiers.insert(file, function (err, fileObj) {
                    if (err){
                        // handle error
                    } else {
                        // handle success depending what you need to do
                        var userId = Meteor.userId();

                        var fichiersURL = {
                            ///  "profile.image": "/cfs/files/images/" + fileObj._id
                            "profile.fichier": "/uploads/" + fileObj._id
                        };
                        Meteor.users.update(userId, {$set: fichiersURL});
                    }
                });
    })},




    'click #save' : function (event) {
  //   event.preventDefault();
        //event.stopPropagation();
              // event.stopPropagation();
        event.preventDefault();

        var source = $('#summernote').summernote('code');
     /*   $( "p" ).click(function( event ) {
            event.stopPropagation();
            // Do something
        });
        $( "pp" ).click(function( event ) {
            event.stopPropagation();
            // Do something
        });*/
  //      projets = {};
   //     projets.user=Meteor.user()._id;
    //    projets.titre = $('#titre').val();
       // projets.perker = $('#perker').val();
    //    projets.description = source;
      //  projet.nom="aazazaz";
      //  console.log(Meteor.user()._id);
      //  result = {}
     // result= Meteor.call('rechercher',Meteor.user()._id);
      // console.log(result);
      //  if(!result)
     //   Meteor.call('creerProjet',projets);
       // else
         //   return false ;
     //  event.stopImmediatePropagation();
        //event.stopPropagation();
    //   console.log(event.bubbles) ;

      //  event.preventDefault();



       // console.log("aaaaaaaa",Meteor.call('creer',projets));


  //  return false;
   },
    'click #tt': function(){
        Session.set('template', 'association');

    },
    'click #tt1': function(){
        Session.set('template', 'particulier');
    },
    'click #tt2': function(){
        Session.set('template', 'entreprise');
    },

});

Template['uploadedInfo'].helpers({
        src: function() {
            if (this.type.indexOf('image') >= 0) {
                return 'upload/'+this.path;
            } else return 'file_icon.png';
        },

   fichierss: function() {

        return  Uploads.find({extraData : {createurId: Session.get('utilisateurCourant'),categorie:'media'}}).fetch();

   }
});
/*
Template['imageView'].helpers({

    images: function() {
        var result= Fichiers.find();
        // Meteor.call('findFiles');
        console.log("ccc",this.userId);
        return result;
    },
});*/

Template['uploadedInfo'].events({
    'click .deleteUpload':function() {
        if (confirm('vous etes sure !!?')) {
            Meteor.call('deleteFile', this._id);
            Session.set('compteur', Session.get('compteur') - 1);        }
    }
});