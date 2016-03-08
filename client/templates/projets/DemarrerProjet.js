
Template.demarrerProjet.rendered = function() {
    $('head').append('<script type="text/javascript" src="dist/lang/summernote-fr-FR.js">');
    $('head').append('<script type="text/javascript" src="dist/summernote.min.js">');
    $('head').append('<script type="text/javascript" src="dist/summernote.js">');
   // $('head').append('<script type="text/javascript" src="js/custom.js">');



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
        projets = {};
        projets.user=Meteor.user()._id;
        projets.titre = $('#titre').val();
       // projets.perker = $('#perker').val();
        projets.description = source;
      //  projet.nom="aazazaz";
      //  console.log(Meteor.user()._id);
      //  result = {}
     // result= Meteor.call('rechercher',Meteor.user()._id);
      // console.log(result);
      //  if(!result)
        Meteor.call('creerProjet',projets);
       // else
         //   return false ;
     //  event.stopImmediatePropagation();
        //event.stopPropagation();
       console.log(event.bubbles) ;

      //  event.preventDefault();



       // console.log("aaaaaaaa",Meteor.call('creer',projets));


  //  return false;
    }

});
