/**
 * Created by wael on 16/04/2016.
 */
Meteor.subscribe("fichier");


Template.associationModif.helpers({


    fichiersM: function() {
        var rib = Fichiers.find({utilisateurRib : Session.get('utilisateurInfoM')});

        if(rib!=null)
            Session.set('idRibM',rib._id);

        return rib;
    },
    RibM:function()
    {
        if(Session.get('ribM')<1)
            return true;
        return false;
    },
    fichiersStatutsM: function() {
        var statuts = Fichiers.find({utilisateurStatuts : Session.get('utilisateurStatutsM')});
        if(statuts!=null)
            Session.set('idStatutsM',statuts._id)
        Session.set('urlStatusM',statuts.urlFichier);

        return statuts;
    },
    StatutsM:function()
    {
        if(Session.get('statutsM')<1)
            return true;
        return false;
    },
    fichiersIdentificationM: function() {
        var identification = Fichiers.find({utilisateurIdentification : Session.get('utilisateurIdentificationM')});
        Session.set('urlIdentificationM',identification.urlFichier);

        return identification;
    },
    IdentificationM:function()
    {
        if(Session.get('identificationM')<1)
            return true;
        return false;
    },

    fichiersImmatricule: function() {
        var immatricule = Fichiers.find({utilisateurImmatricule : Session.get('utilisateurImmatriculeM')});
        Session.set('urlImmatriculeM',immatricule.urlFichier);

        return immatricule;
    },
    ImmatriculeM:function()
    {
        if(Session.get('immatriculeM')<1)
            return true;
        return false;
    },
    fichiersCinM: function() {
        var cin = Fichiers.find({utilisateurCin : Session.get('utilisateurCin')});
        Session.set('urlCinM',cin.urlFichier);

        return cin;
    },
    CinM:function()
    {
        if(Session.get('cinM')<1)
            return true;
        return false;
    },
});


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
        console.log(this._id)
        Meteor.call('removeAssociationFile',Session.get("idpf"))
        console.log(Session.get("idpf"))
        Session.set('ribM',Session.get('ribM')-1);
    },
    "change #statutsM": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
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
    },
    "click .deleteStatutsM": function () {
       // Meteor.call('removefileM',this._id);
        Session.set('statutsM',Session.get('statutsM')-1);
    },
    "change #formIdentM": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
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
    },
    "click .deleteIdentM": function () {
        //  Fichiers.remove(this._id);
        //Meteor.call('removefileM',this._id);
        Session.set('identificationM',Session.get('identificationM')-1);
    },

    "change #immatriculeM": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
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
    },
    "click .deleteImmatriculeM": function () {
        //Meteor.call('removefileM',this._id);
        Session.set('immatriculeM',Session.get('immatriculeM')-1);
    },
    "change #cinM": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
                Session.set('cinM',Session.get('cinM')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurCin':Session.get('utilisateurCinM')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourantM')}});
                fileObj.update({$set: {'nature':'cin'}});


                if (err){
                    alert('erreur format')

                } else {
                    alert("fichier uploader avec succées")
                }
            });
        });
    },
    "click .deleteCinM": function () {
      //  Meteor.call('removefileM',this._id);
        Session.set('cinM',Session.get('cinM')-1);
    },
});

Template.associationModif.rendered = function() {
    $('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpeynhXl0nsyNxzBL4aNPjQq9ekG4Za4&libraries=places&callback=initAutocomplete" async defer></script>');
    $('head').append('<script type="text/javascript" src="assets/js/localisationAPI.js">');


    $('#pickerM').datepicker({
        language: 'fr'
    });



};