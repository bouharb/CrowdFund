Template.demarrerProjet.events({
   /* 'change .myFileInput': function(event, template) {
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

    }*/
'change .myFileInput': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
            if (err){
                // handle error
            } else {
                // handle success depending what you need to do
                var userId = Meteor.userId();
                console.log("aaaa",userId);
                var imagesURL = {
              "profile.image": "/cfs/files/images/" + fileObj._id
            };
                Meteor.users.update(userId, {$set: imagesURL});
            }
        });
    });
},
});