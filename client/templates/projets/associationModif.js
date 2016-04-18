/**
 * Created by wael on 16/04/2016.
 */
Meteor.subscribe("fichier");
Template.associationModif.events({

    "change #ribbM": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


         x=   Fichiers.insert(file, function (err, fileObj) {
                Session.set('ribM',Session.get('ribM')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurRib':Session.get('idpf')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourantM')}});
                fileObj.update({$set: {'nature':'ribM'}});


                if (err){
                } else {

                }
            });
        });

        Meteor.call('TestUpdateRib',{_id:Session.get('idpf')},{$set:{"association.fichierRIB": x._id}})
    },


    "click .deleteRibM": function () {
        Meteor.call('removeAssociationFile',Session.get("idpf"))
        Session.set('ribM',Session.get('ribM')-1);
    },
    "change #statutsM": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


         xss=   Fichiers.insert(file, function (err, fileObj) {
                Session.set('statutsM',Session.get('statutsM')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurStatuts':Session.get('utilisateurStatutsM')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourantM')}});
                fileObj.update({$set: {'nature':'statutsM'}});


                if (err){

                } else {

                }
            });
        });
        Meteor.call('TestUpdateStatuts',{_id:Session.get('idpf')},{$set:{"association.fichierStatuts": xss._id}})

    },
    "click .deleteStatutsM": function () {
       // Meteor.call('removefileM',this._id);
        Meteor.call('removeAssociationFileStatuts',Session.get("idpf"))
        Session.set('statutsM',Session.get('statutsM')-1);
    },
    "change #formIdentM": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


        xsi=    Fichiers.insert(file, function (err, fileObj) {
                Session.set('identificationM',Session.get('identificationM')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurIdentification':Session.get('utilisateurIdentification')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourant')}});
                fileObj.update({$set: {'nature':'identification'}});


                if (err){
                    alert('erreur format')

                } else {
                    alert("fichier uploader avec succées")
                }
            });
        });
        Meteor.call('TestUpdateIdentification',{_id:Session.get('idpf')},{$set:{"association.fichierIdentification": xsi._id}})

    },
    "click .deleteIdentM": function () {
        //  Fichiers.remove(this._id);
        //Meteor.call('removefileM',this._id);
        Meteor.call('removeAssociationFileIdentification',Session.get("idpf"))
        Session.set('identificationM',Session.get('identificationM')-1);
    },

    "change #immatriculeM": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


          xsim=  Fichiers.insert(file, function (err, fileObj) {
                Session.set('immatriculeM',Session.get('immatriculeM')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurImmatricule':Session.get('utilisateurImmatriculeM')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourantM')}});
                fileObj.update({$set: {'nature':'immatriculeM'}});


                if (err){
                    alert('erreur format')

                } else {
                    alert("fichier uploader avec succées")
                }
            });
        });
        Meteor.call('TestUpdateImmatriculation',{_id:Session.get('idpf')},{$set:{"association.fichierImmatriculation": xsim._id}})

    },
    "click .deleteImmatriculeM": function () {
        //Meteor.call('removefileM',this._id);
        Meteor.call('removeAssociationFileImmatriculation',Session.get("idpf"))

        Session.set('immatriculeM',Session.get('immatriculeM')-1);
    },
    "change #cinM": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


         ci=   Fichiers.insert(file, function (err, fileObj) {
                Session.set('cinM',Session.get('cinM')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurCin':Session.get('utilisateurCinM')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourantM')}});
                fileObj.update({$set: {'nature':'cinM'}});


                if (err){
                    alert('erreur format')

                } else {
                    alert("fichier uploader avec succées")
                }
            });
        });
        Meteor.call('TestUpdateCIN',{_id:Session.get('idpf')},{"association.fichierCIN": ci._id})

    },
    "click .deleteCinM": function () {
      //  Meteor.call('removefileM',this._id);
        Meteor.call('removeAssociationFileCIN',Session.get("idpf"))

        Session.set('cinM',Session.get('cinM')-1);
    },
});

Template.associationModif.rendered = function() {
    $('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpeynhXl0nsyNxzBL4aNPjQq9ekG4Za4&libraries=places&callback=initAutocomplete" async defer></script>');
    $('head').append('<script type="text/javascript" src="../assets/js/localisationAPI.js">');


    $('#pickerM').datepicker({
        language: 'fr'
    });



};