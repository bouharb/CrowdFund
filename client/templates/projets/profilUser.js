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

Template.profilUser.helpers({
    fichiersProfil: function() {
        var photo = Images.find({utilisateurId :Meteor.userId()});
        Session.set('urlPhoto',photo.urlFichier);
        console.log(photo)

        return photo;
    },
    Photo:function()
    {     var ph = Images.find({utilisateurId:Meteor.userId()});
      console.log(ph.utilisateurId)
        if(ph.utilisateurId==Meteor.userId())
            return true;
        return false;
    },
});
Template.profilUser.events({
    "change #photoProfil": function(event,template) {
        FS.Utility.eachFile(event, function(file) {
         // clik(1);
              countt=countt+1;
            this._someVariable=1;
            Images.insert(file, function (err, fileObj) {
                Session.set('photo',Session.get('photo')+1)  ;
               // UI._globalHelpers.cv(1);

                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;
                var urlPh = fileObj.collectionName + '/' + fileObj._id + '/' + fileObj.original.name;
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'urlPho':fileName}});

                fileObj.update({$set: {'utilisateurId':Meteor.userId()}});

                if (err){

                } else {
              /*      var userId = Meteor.userId();

                    var photoURL = {
                        "profile.photo": "/cfs/files/images/" + fileObj._id
                      //  "profile.photo": "/uploads/" + fileObj._id
                    };
                    Meteor.users.update(userId, {$set: photoURL});*/

                }
            });
        });
    },
    "click .deletePhotoProfil": function () {
        console.log(this._id);
        Meteor.call('removePhotoProfil',this._id);
        countt=countt-1;
        this._someVariable=0;
        UI._globalHelpers.cvc(1)
        Session.set('photo',Session.get('photo')-1);
    },
});