Meteor.startup(function() {
  Session.setDefault('compteur', 0);

  Uploader.finished = function(index, file) {
    if(Session.get('compteur')<3){
    Uploads.insert(file);
    Session.set('compteur', Session.get('compteur') + 1);
  }}


  Uploader.localisation = {
    browse: "Selectionner vos images",
    cancelled: "Annuler",
    remove: "Effacer",
    upload: "Uploader",
    done: "Done",
    cancel: "Annuler"
  }
});