/**
 * Created by wael on 17/03/2016.
 */
Meteor.subscribe("fichier");
Template.entreprise.rendered = function() {
    // $('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpeynhXl0nsyNxzBL4aNPjQq9ekG4Za4&libraries=places&callback=initAutocomplete" async defer></script>');
    // $('head').append('<script type="text/javascript" src="assets/js/localisationAPI.js">');
    //$('head').append('<script type="text/javascript" src="assets/js/datepicker.js"></script>');
    // $('head').append('<script type="text/javascript" src="assets/js/datepickerLang.js"></script>');

    // $('head').append('<script type="text/javascript" src="http://jquery-ui.googlecode.com/svn/trunk/ui/i18n/jquery.ui.datepicker-de.js"></script>');


    /* $.getScript( "https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpeynhXl0nsyNxzBL4aNPjQq9ekG4Za4&libraries=places&callback=initAutocomplete", function( data, textStatus, jqxhr ) {
     $.getScript( "assets/js/localisationAPI.js", function( data, textStatus, jqxhr ) {
     return;
     });
     });*/




};

Template.entreprise.helpers({


    fichierse: function() {
        var ribe = Fichiers.find({utilisateurRibe : Session.get('utilisateurInfoe')});
        Session.set('urlRibe',ribe.urlFichier);

        return ribe;
    },
    Ribe:function()
    {
        if(Session.get('ribe')<1)
            return true;
        return false;
    },
    fichiersStatutse: function() {
        var statutse = Fichiers.find({utilisateurStatutse : Session.get('utilisateurStatutse')});
        Session.set('urlStatuse',statutse.urlFichier);

        return statutse;
    },
    Statutse:function()
    {
        if(Session.get('statutse')<1)
            return true;
        return false;
    },
    fichiersImmatriculee: function() {
        var immatriculee = Fichiers.find({utilisateurImmatriculee : Session.get('utilisateurImmatriculee')});
        Session.set('urlImmatriculee',immatriculee.urlFichier);

        return immatriculee;
    },
    Immatriculee:function()
    {
        if(Session.get('immatriculee')<1)
            return true;
        return false;
    },
    fichiersCine: function() {
        var cine = Fichiers.find({utilisateurCine : Session.get('utilisateurCine')});
        Session.set('urlCine',cine.urlFichier);

        return cine;
    },
    Cine:function()
    {
        if(Session.get('cine')<1)
            return true;
        return false;
    },
});


Template.entreprise.events({
    "change #ribe": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
                Session.set('ribe',Session.get('ribe')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurRibe':Session.get('utilisateurInfoe')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourant')}});
                fileObj.update({$set: {'nature':'ribe'}});

                if (err){

                } else {

                }
            });
        });
    },


    "click .deleteRibe": function () {

        Meteor.call('removefile',this._id);
        Session.set('ribe',Session.get('ribe')-1);
    },
    "change #statutse": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
                Session.set('statutse',Session.get('statutse')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurStatutse':Session.get('utilisateurStatutse')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourant')}});
                fileObj.update({$set: {'nature':'statutse'}});


                if (err){

                } else {

                }
            });
        });
    },
    "click .deleteStatutse": function () {

        Meteor.call('removefile',this._id);
        Session.set('statutse',Session.get('statutse')-1);
    },

    "change #immatriculee": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
                Session.set('immatriculee',Session.get('immatriculee')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurImmatriculee':Session.get('utilisateurImmatriculee')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourant')}});
                fileObj.update({$set: {'nature':'immatriculee'}});


                if (err){
                    alert('erreur format')

                } else {
                    alert("fichier uploader avec succées")
                }
            });
        });
    },
    "click .deleteImmatriculee": function () {

        Meteor.call('removefile',this._id);
        Session.set('immatriculee',Session.get('immatriculee')-1);
    },
    "change #cine": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
                Session.set('cine',Session.get('cine')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurCine':Session.get('utilisateurCine')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourant')}});
                fileObj.update({$set: {'nature':'cine'}});


                if (err){
                    alert('erreur format')

                } else {
                    alert("fichier uploader avec succées")
                }
            });
        });
    },
    "click .deleteCine": function () {
        Meteor.call('removefile',this._id);
        Session.set('cine',Session.get('cine')-1);
    }
});
