Meteor.startup(function() {
  Uploader.finished = function(index, file) {
    Uploads.insert(file);
  },
  Uploader.localisation = {
    browse: "Selectionner vos images",
    cancelled: "Annuler",
    remove: "Effacer",
    upload: "Uploader",
    done: "Done",
    cancel: "Annuler"
  }
});