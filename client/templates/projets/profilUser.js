/**
 * Created by wael on 18/03/2016.
 */
countt=0;

Meteor.subscribe('images')
Template.profilUser.rendered = function() {
   // SessionStore.clear('photo');
    Session.setDefault('photo',0);
    this._someVariable=0;
    abc = new ReactiveVar(0);
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
    "click #enregistrermodifuser":function(){
        nom = $('#nomuser').val();
        prenom = $('#prenomuser').val();
        ville= $('#villeuser').val();
        var userid=Meteor.userId()
        Meteor.users.update(userid,{$set:{"profile.name":nom,"profile.prenom":prenom,"profile.ville":ville}})
    },
    "change #photoProfil": function(event,template) {
        FS.Utility.eachFile(event, function(file) {
         // clik(1);
            var newFile = new FS.File(file);
            newFile.once("uploaded", function (ok) {
                console.log("Done uploading!");
                var o = Images.findOne({_id: xx._id});
                console.log("ooooo", o.url)
                console.log(xx._id)
                var userid = Meteor.userId()
                var photoURL = {
                    "profile.avatar": xx._id
                    //  "profile.photo": "/uploads/" + fileObj._id
                };
                Meteor.users.update(userid, {$set: photoURL});
            });
              countt=countt+1;
            this._someVariable=1;
          xx=  Images.insert(newFile, function (err, fileObj) {
                console.log("xxxxxxxxxx",fileObj.url({brokenIsFine: true}))

                Session.set('photo',Session.get('photo')+1)  ;
               // UI._globalHelpers.cv(1);
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
                        console.log(uploadedurl);
                  //  fileObj.on("stored", function() {
                        console.log('good');
                        var photoURL = {
                            "profile.photo": fileObj.url()
                            //  "profile.photo": "/uploads/" + fileObj._id
                        };
                        console.log("okok",fileObj.url())
                        Meteor.users.update(Meteor.userId(), {$set: photoURL});
                   });}



             /*   res=    Test.findOne({createurProjet:Meteor.userId()});
                if (err){

                }else

                if(res!=null)
                {
                    setTimeout(function() {
                        var userId = Meteor.userId();


                        var photo= fileObj.url();


                       // Test.update({createurProjet:userId},{$set:{photoProfil:photo}});
                        Meteor.call('updateTest',{createurProjet:userId}, {'photoProfil':photo});
                        console.log(Meteor.call('updateTest',{createurProjet:userId}, {'photoProfil':photo}))
                    },4000);


                }*/



          /*    else {
                    setTimeout(function() {
                        var userId = Meteor.userId();

                      var   photoURL = {
                            "profile.photo": fileObj.url()
                            //  "profile.photo": "/uploads/" + fileObj._id
                        };
                        Meteor.users.update(userId, {$set: photoURL});
                    },3000);

                }*/
            });
        });


    },
    "click .deletePhotoProfil": function () {
        Meteor.call('removePhotoProfil',this._id);
       // Box.update( {_id: this._id} , {$unset: { deleteresult : "" } } );
        Meteor.users.update(Meteor.userId(),{$unset:{"profile.avatar":""}})
        countt=countt-1;
        this._someVariable=0;
        UI._globalHelpers.cvc(1)
        Session.set('photo',Session.get('photo')-1);
    },
});