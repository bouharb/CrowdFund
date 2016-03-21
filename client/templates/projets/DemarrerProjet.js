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

   $( "#inforBasic" ).validate({
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
    "click #addcontrepartie" :function(){

        var perkelEments = $("#perk-elements").html();
        $("#add-more-perks").append("<div class='moreperks'>" + perkelEments + "</div>");

        Session.set('countCP',Session.get('countCP')+1);
    },
    "click #suppcontrepartie" :function(){
        $("#add-more-perks").children("div:first").remove();
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
    "submit #contrePartie": function( event ) {
        event.preventDefault();
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

    "submit #inforBasic": function( event ) {
        event.preventDefault();
     /*   var projet = {
            titre: $(event.target).find('[name=titre]').val(),
           montant : $(event.target).find('[name=montant]').val(),
            duree: $(event.target).find('[name=url]').val(),


        };*/
        projets = {};
          // projets.user=Meteor.user()._id;
        projets.categorie= $( "#categorie option:selected" ).text();
           projets.titre = $('#titre').val();
         projets.montant = $('#montant').val();
            projets.duree = $('#duree').val();

     /*   var errors = validateProjet(projets);
        if (errors.titre || errors.montant || errors.duree) {
            return Session.set('projetSubmitErrors', errors);
            console.log(Session.get('projetSubmitErrors'));*/
      //  } else {
            Meteor.call('creerProjet', projets, function (error, result) {
                // affiche l'erreur à l'utilisateur et s'interrompt
                if (error)
                    return throwError(error.reason);
                console.log(result)
                if (result)
                    throwSucces('succées de la premiere étape');

                // affiche ce résultat mais route quand même
            });
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
        Router.go('/log')
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