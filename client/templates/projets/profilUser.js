/**
 * Created by wael on 18/03/2016.
 */
countt=0;

Meteor.subscribe('images')
Template.profilUser.rendered = function() {
    Session.setDefault('photo',0);

    $("#formuser").validate({
        rules: {
            prenom:{
                required : true

            },
            nom:{
                required : true
            },
            ville : {
                required : true
            }

        },

        messages: {

            prenom: {
                required : "Ce champ est obligatoire."
            },
            nom:{
                required : "Ce champ est obligatoire."
            },
            ville : {
                required : "Ce champ est obligatoire."
            }

        }
    });
};
/*Template.profilUser.someHelper = function() {
    return this._someVariable
}*/
Meteor.subscribe('profil');
Template.profilUser.helpers({
    fichiersProfil: function() {
        var photo = Images.find({utilisateurId :Meteor.userId()});
        Session.set('urlPhoto',photo.urlFichier);

        return photo;
    },
    infoProfil : function(){

        return Meteor.users.findOne({_id:Meteor.userId()});
    },
    Photo:function()
    {     var ph = Images.find({utilisateurId:Meteor.userId()});
        if(ph.utilisateurId==Meteor.userId())
            return true;
        return false;
    },
});
Template.profilUser.events({
    "submit #formuser":function(e){
        e.preventDefault();
        console.log("form")
        nom = $('#nomuser').val();
        prenom = $('#prenomuser').val();
        ville= $('#villeuser').val();
        var userid=Meteor.userId()
        Meteor.users.update(userid,{$set:{"profile.name":nom,"profile.prenom":prenom,"profile.ville":ville}});
        Bert.alert({
            icon: 'fa-magic',
            title: 'Félicitation !',
            message: 'Vos informations ont été bien modifiées',
            //  type: 'now-playing'
        });
    },
    "change #photoProfil": function(event,template) {
        analytics.track( 'Add profile picture', {
            title: 'Aa ajouter une photo de profil'
        });
        FS.Utility.eachFile(event, function(file) {

            var newFile = new FS.File(file);
            newFile.once("uploaded", function (ok) {

                var userid = Meteor.userId()
                var photoURL = {
                    "profile.avatar": xx._id

                };
                Meteor.users.update(userid, {$set: photoURL});
            });
              countt=countt+1;
            this._someVariable=1;
          xx=  Images.insert(newFile, function (err, fileObj) {

                Session.set('photo',Session.get('photo')+1)  ;
                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;
                var urlPh = fileObj.collectionName + '/' + fileObj._id + '/' + fileObj.original.name;
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'urlPho':fileName}});

                fileObj.update({$set: {'utilisateurId':Meteor.userId()}});
                if (err) {
                    console.log(err);
                } else
                    {fileObj.once("uploaded", function () {
                        uploadedurl=fileObj.url();
                        var photoURL = {
                            "profile.photo": fileObj.url()
                        };
                        Meteor.users.update(Meteor.userId(), {$set: photoURL});
                   });}



            });
        });


    },
    "click .deletePhotoProfil": function () {
        Meteor.call('removePhotoProfil',this._id);
        Meteor.users.update(Meteor.userId(),{$unset:{"profile.avatar":""}});
        analytics.track( 'Delete profile picture', {
            title: 'a supprimer sa photo de profil'
        });
        countt=countt-1;
        UI._globalHelpers.cvc(1)
        Session.set('photo',Session.get('photo')-1);
    },
});