Meteor.startup(function() {
  Session.setDefault('compteur', 0);
 // Session.setDefault('compteurM', Session.get("compteurM"));


  Uploader.finished = function(index, file) {
   // if(Session.get('compteur')<3){
    Uploads.insert(file);
      //Uploads.find({})
    Session.set('compteur', Session.get('compteur') + 1);
     Session.set('compteurM',Session.get('compteurM')+1);


  //}
}


  Uploader.localisation = {
    browse: "Fichiers",
    cancelled: "Annuler",
    remove: "Effacer",
    upload: "Uploader",
    done: "valider",
    cancel: "Annuler"
  }
});