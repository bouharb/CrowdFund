/**
 * Created by wael on 05/03/2016.
 */

Meteor.methods({
    creer: function(an){

        Projets.insert(an);
        console.log("zzz",Projets.insert(an));
    },
    upvote: function(projetId) {
        check(this.userId, String);
        check(projetId, String);
        var affected = Test.update({
            _id: projetId,
            upvoters: {$ne: this.userId}
        }, {
            $addToSet: {upvoters: this.userId},
            $inc: {votes: 1}
        });
        if (! affected)
            throw new Meteor.Error('invalid', "Vous n'avez pas pu voter pour ce post.");

    },
    insertTest : function(t){
       // Test.insert(t);
        var user = Meteor.users.findOne({_id:this.userId});
        var projetExtension = _.extend(t, {
            NomTitulaire: user.profile.nom,
            submitted: new Date(),
            commentsCount: 0,
            upvoters: [],
            votes: 0
        });

        var pExtendId = Test.insert(projetExtension);

        return {
            _id: pExtendId
        };
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
    updateTest: function(id, conditions){
            Test.update(id, {$set : conditions});
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
