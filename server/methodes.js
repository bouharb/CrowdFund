/**
 * Created by wael on 05/03/2016.
 */

Meteor.methods({
    creer: function(an){

        Projets.insert(an);
        console.log("zzz",Projets.insert(an));
    },
    insertTest : function(t){
        Test.insert({photoCouverture:t});
    },
    rechercher: function(id){
        Projets.findOne({user:id});
        console.log(Projets.findOne({user:id}));
    },
    creerPost: function(c){
        Posts.insert(c);
    },
    creerProjet : function(p){


    var projet=    Projets.insert(p);
        return {
            _id: projet
        };
    },
    createProject : function(p){


        var projet=    Projets.insert({basicInfo:p});
        return {
            _id: projet
        };
    },
    findFiles : function(id){
      return  Uploads.find({_id:id})
    },
    removefile: function(id){
        Fichiers.remove({_id:id});
    },
    removePhotoProfil: function(id){
        Images.remove({_id:id});
    },
    deleteRib : function(id){
        Fichier.remove({_id:id});
    },
    /*
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
*/
    'deleteFile': function(_id) {


        var upload = Uploads.findOne(_id);
        if (upload == null) {
            throw new Meteor.Error(404, 'Upload not found'); // maybe some other code
        }

        UploadServer.delete(upload.path);
        Uploads.remove(_id);
    }
});
