
Template.demarrerProjet.rendered = function() {
    $('head').append('<script type="text/javascript" src="dist/lang/summernote-fr-FR.js">');
    $('head').append('<script type="text/javascript" src="dist/summernote.min.js">');
    $('head').append('<script type="text/javascript" src="dist/summernote.js">');


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

    submit : function (event) {
      //  e.preventDefault();
        event.preventDefault();
       // event.stopPropagation();
        var source = $('#summernote').summernote('code');

        projets = {};
        projets.titre = "aaa";
        projets.description = source;
      //  projet.nom="aazazaz";
        Meteor.call('creer',projets);
        event.stopPropagation();
       // console.log("aaaaaaaa",Meteor.call('creer',projets));
        alert(source);

        //return false;
    }

});