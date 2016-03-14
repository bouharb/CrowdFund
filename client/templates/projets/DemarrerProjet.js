Meteor.subscribe("fichier");
Meteor.subscribe("uploads");


Uploader.finished = function(index, fileInfo, templateContext) {
    console.log('File: ');
    console.log(fileInfo);
    console.log('Context:');
    console.log(templateContext);
}
Template.demarrerProjet.helpers({
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
fichiers: function() {
  var result= Fichiers.find();
      // Meteor.call('findFiles');
    console.log("ccc",this.userId);
    return result;
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



Template.demarrerProjet.rendered = function() {
    Session.get('template');
    $('head').append('<script type="text/javascript" src="dist/lang/summernote-fr-FR.js">');
    $('head').append('<script type="text/javascript" src="dist/summernote.min.js">');
    $('head').append('<script type="text/javascript" src="dist/summernote.js">');
   // $('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpeynhXl0nsyNxzBL4aNPjQq9ekG4Za4&libraries=places&callback=initAutocomplete" async defer></script>');

    // $('head').append('<script type="text/javascript" src="js/custom.js">');

    Accounts.onLogin(function(user){
       // console.log(user.user._id)
        var routeName = Router.current().route.getName();
        if(routeName=='demarrerProjet')
        Router.go('/log');
    });

    $(document).ready(function() {
    $('#summernote').summernote({
        height: 200,   // set editable area's height
        focus: true  ,  // set focus editable area after Initialize summernote
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
  //  Fichiers.remove(this._id);
    Meteor.call('removefile',this._id);
    console.log(this._id)
  },


    'change #in': function(event, template) {
        console.log("aaaa",this._id);
        FS.Utility.eachFile(event, function(file) {
                Fichiers.insert(file, function (err, fileObj) {
                    if (err){
                        // handle error
                    } else {
                        // handle success depending what you need to do
                        var userId = Meteor.userId();
                        console.log("aaaa",userId);
                        var fichiersURL = {
                            ///  "profile.image": "/cfs/files/images/" + fileObj._id
                            "profile.fichier": "/uploads/" + fileObj._id
                        };
                        Meteor.users.update(userId, {$set: fichiersURL});
                    }
                });
    })},
    'change .file':function(){

    },



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
            console.log(session.get('file'));
        },

   fichierss: function() {
        var result= Uploads.find({extraData : {createurId: Session.get('utilisateurCourant'),categorie:'media'}}).fetch();
        // Meteor.call('findFiles');
        console.log("ccc",Meteor.userId());
        return result;
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