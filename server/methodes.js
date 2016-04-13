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
        var user = Meteor.users.findOne({_id:this.userId});

        vote =  {}

            vote.userId=this.userId;
            vote.author=user.profile.name;
            vote.submitted=new Date();
            vote.idprojet=projetId



        var affected = Test.update({
            _id: projetId,
            upvoters: {$ne: this.userId}
        }, {
            $addToSet: {upvoters: this.userId},
            $inc: {votes: 1}
        });
        if (! affected)
        {
            throw new Meteor.Error('invalid', "Vous n'avez pas pu voter pour ce post.");}
        else{
            createVoteNotification(vote);
        }

    },
    insertTest : function(t){
       // Test.insert(t);
        var user = Meteor.users.findOne({_id:this.userId});
        var projetExtension = _.extend(t, {
            NomTitulaire: user.profile.nom,
            submitted: new Date(),
            commentsCount: 0,
            suiviesCount :0,
            pourcentage :0,
            montantcollecter :0,
            upvoters: [],
            idcontributeur: [],
            votes: 0,
            submitted: new Date()
        });

        var pExtendId = Test.insert(projetExtension);

        return {
            _id: pExtendId
        };
    },
    sabonner:function(abonnement){
       // Abonner.insert(abonner);
        var user = Meteor.users.findOne({_id:this.userId});
        var post = Test.findOne(abonnement.idprojet);
        if (!post)
            throw new Meteor.Error('invalid-comment', 'Vous devez commenter sur un projet');
        suivie = _.extend(abonnement, {

            userId: this.userId,
            author: user.profile.name,
            submitted: new Date()

        });
        Test.update(suivie.idprojet, {$inc: {suiviesCount: 1}});
        suivie._id =  Abonner.insert(suivie);

        createSuivisNotification(suivie);
        return suivie._id;
    },
    insertPayment:function(paiment){
      //  var user = Meteor.users.findOne({_id:this.userId});
      //  console.log(user._id)
        var paimentExtension = _.extend(paiment, {
            idUtilisateur: this.userId,

        });
        Payement.insert(paimentExtension)
    },

    insertCP : function(cp) {
    CP.insert(cp)
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
    updateCP: function(id, field){
        CP.update(id,field);
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

    deleteAbonner : function(ida,idp){
        Abonner.remove({$and:[{idabonner:ida},{idprojet:idp}]});
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
