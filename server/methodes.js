/**
 * Created by wael on 05/03/2016.
 */

Meteor.methods({
    creer: function(an){

        Projet.insert(an);
        console.log("zzz",Projet.insert(an));
    },
    create:function(f){

        for (var i = 0, ln = f.length; i < ln; i++) {
            Images.insert(f[i], function (err, fileObj) {
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            });
        }
    },
    'deleteFile': function(_id) {
        check(_id, String);

        var upload = Uploads.findOne(_id);
        if (upload == null) {
            throw new Meteor.Error(404, 'Upload not found'); // maybe some other code
        }

        UploadServer.delete(upload.path);
        Uploads.remove(_id);
    }

});
