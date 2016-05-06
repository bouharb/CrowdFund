/**
 * Created by wael on 05/03/2016.
 */

Meteor.methods({
    creer: function(an){

        Projets.insert(an);
    },
    upvote: function(projetId) {
        check(this.userId, String);
        check(projetId, String);
        var user = Meteor.users.findOne({_id:this.userId});
        var fb= Meteor.users.findOne({_id:this.userId,'services.facebook': {$exists: true}});
        if(fb!=null||fb!=undefined)
        {
            autoritaireComment=fb.profile.name;
        }
        else{
            autoritaireComment=user.profile.prenom;
        }

        vote =  {}

            vote.userId=this.userId;
            vote.author=autoritaireComment;
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
            throw new Meteor.Error('invalid', "Vous n'avez pas pu voter pour ce projet.");}
        else{
            createVoteNotification(vote);
        }

    },
    insertTest : function(t){
       // Test.insert(t);
        var user = Meteor.users.findOne({_id:this.userId});
        var projetExtension = _.extend(t, {
            NomTitulaire: user.profile.prenom,
            submitted: new Date(),
            commentsCount: 0,
            suiviesCount :0,
            pourcentage :0,
            montantcollecter :0,
            upvoters: [],
            idcontributeur: [],
            votes: 0,
            submitted: new Date(),
            nbrcontributeur : 0,
            verifier : false,
            etat:"Nouveau"
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
        var fb= Meteor.users.findOne({_id:this.userId,'services.facebook': {$exists: true}});
        if(fb!=null||fb!=undefined)
        {
            autoritaireComment=fb.profile.name;
        }
        else{
            autoritaireComment=user.profile.prenom;
        }
        if (!post)
            throw new Meteor.Error('invalid-comment', 'Vous devez commenter sur un projet');
        suivie = _.extend(abonnement, {

            userId: this.userId,
            author: autoritaireComment,
            submitted: new Date()

        });
        Test.update(suivie.idprojet, {$inc: {suiviesCount: 1}});
        suivie._id =  Abonner.insert(suivie);

        createSuivisNotification(suivie);
        return suivie._id;
    },
    insertPayment:function(paiment){

        var paimentExtension = _.extend(paiment, {
            idUtilisateur: this.userId,

        });
        Payement.insert(paimentExtension)
    },

    insertCP : function(cp) {
    CP.insert(cp)
    },

    ajouterMessageC: function(x,y) {
        Chatt.insert(x,y)
    },
    deletecp:function(id){
        CP.remove({_id:id})
    },
    deleteProjet:function(id){
        Test.remove({_id:id})
    },
    deleteac:function(id){
        Actu.remove({_id:id})
    },

    insertPHC : function(phc) {
        PhotoCouverture.insert(phc)
    },
    insertActu: function(act){
        Actu.insert(act);
    },
    rechercher: function(id){
        Projets.findOne({user:id});
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

    updateMSG: function(id, field,xu,yy,zz){
        Chatt.update(id,field);
      //  var res=Chatt.findOne({_id:id});
     //var ui  =res.messages[0].userId;
      //  var idp=res.messages.projetId;
       // var autoritaireMessageChat = res.messages.author;
      // var de=id;
     //   console.log(xu,yy,zz,res._id)
        var r= createChatNotification(xu,yy,zz,id);
      //  console.log(r)
    },
    updateAct:function(id, field){
        Actu.update(id,field);
    },
    removeAssociationFile:function(id){
        Test.update({_id:id},{$unset:{"association.fichierRIB":""}})
    },

    removeAllAssociation:function(id){
        Test.update({_id:id},{$unset:{"association":""}})
    },

    removeAllEntreprise:function(id){
        Test.update({_id:id},{$unset:{"entreprise":""}})
    },

    removeAllParticulier:function(id){
        Test.update({_id:id},{$unset:{"particulier":""}})
    },
    removeEntrepriseFile:function(id){
        Test.update({_id:id},{$unset:{"entreprise.fichierRIB":""}})
    },

    removeParticulierFile:function(id){
        Test.update({_id:id},{$unset:{"particulier.fichierRIB":""}})
    },
    removeAssociationFileStatuts:function(id){
        Test.update({_id:id},{$unset:{"association.fichierStatuts":""}})
    },
    removeEntrepriseFileStatuts:function(id){
        Test.update({_id:id},{$unset:{"entreprise.fichierStatuts":""}})
    },
    removeAssociationFileIdentification:function(id){
        Test.update({_id:id},{$unset:{"association.fichierIdentification":""}})
    },
    removeAssociationFileImmatriculation:function(id){
        Test.update({_id:id},{$unset:{"association.fichierImmatriculation":""}})
    },
    removeEntrepriseFileImmatriculation:function(id){
        Test.update({_id:id},{$unset:{"entreprise.fichierImmatriculation":""}})
    },

    removeParticulierFileJustification:function(id){
        Test.update({_id:id},{$unset:{"particulier.fichierJustificatif":""}})
    },

    removeAssociationFileCIN:function(id){
        Test.update({_id:id},{$unset:{"association.fichierCIN":""}})
    },

    removeParticulierFileCinP:function(id){
        Test.update({_id:id},{$unset:{"particulier.fichierCIN":""}})
    },
    removeEntrepriseFileCIN:function(id){
        Test.update({_id:id},{$unset:{"entreprise.fichierCIN":""}})
    },
    TestUpdateRib:function(id,field) {
        Test.update(id,field)
    },
    TestUpdateRibE:function(id,field) {
        Test.update(id,field)
    },

    TestUpdateCinP:function(id,field) {
        Test.update(id,field)
    },

    TestUpdateRibP:function(id,field) {
        Test.update(id,field)
    },


    TestUpdateJustificatifP:function(id,field) {
        Test.update(id,field)
    },
    TestUpdateStatuts:function(id,field) {
        Test.update(id,field)
    },

    TestUpdateStatutsE:function(id,field) {
        Test.update(id,field)
    },
    TestUpdateIdentification:function(id,field) {
        Test.update(id,field)
    },
    TestUpdateImmatriculation:function(id,field) {
        Test.update(id,field)
    },
    TestUpdateImmatriculationE:function(id,field) {
        Test.update(id,field)
    },
    TestUpdateCIN:function(id,field) {
        Test.update(id,{$set:field})
    },
    TestUpdateCINE:function(id,field) {
        Test.update(id,field)
    },
    updateAssociation: function(id, field){
        Test.update(id,field);
    },
    updateEntreprise: function(id, field){
        Test.update(id,field);
    },
    updateParticulier: function(id, field){
        Test.update(id,field);
    },
    updateAdr: function(id, field){
        Test.update(id,field);
    },
    updateTest: function(id, field){
        Test.update(id,field);
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
    deletePhotoCouverture: function (id,field) {
        PhotoCouverture.remove({_id:id})

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
