/**
 * Created by wael on 17/03/2016.
 */
Meteor.subscribe("fichier");
Template.particulier.rendered = function() {
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

    $('#pickerr').datepicker({
        language: 'fr'
    });

    //   $.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );
    console.log(Session.get('mmmmmm',Session.get('rib')));


};

Template.particulier.helpers({


    fichiersp: function() {
        var ribp = Fichiers.find({utilisateurRibp : Session.get('utilisateurInfop')});
        Session.set('urlRib',ribp.urlFichier);

        return ribp;
    },
    Ribp:function()
    {
        if(Session.get('ribp')<1)
            return true;
        return false;
    },
    fichiersJustificatif: function() {
        var justificatif = Fichiers.find({utilisateurJustificatif : Session.get('utilisateurJustificatif')});
        Session.set('urlJustificatif',justificatif.urlFichier);

        return justificatif;
    },
    Justificatif:function()
    {
        if(Session.get('justificatif')<1)
            return true;
        return false;
    },


    fichiersCinp: function() {
        var cinp = Fichiers.find({utilisateurCinp : Session.get('utilisateurCinp')});
        Session.set('urlCinp',cinp.urlFichier);

        return cinp;
    },
    Cinp:function()
    {
        if(Session.get('cinp')<1)
            return true;
        return false;
    },
});


Template.particulier.events({
    "change #ribp": function(event,template) {
        FS.Utility.eachFile(event, function(file) {
            /*     var objecct = new ActiveXObject("Scripting.FileSystemObject");
             var filee = objecct.GetFile("C:\\Users\\wael\\IdeaProjects\\CrowdFund\\.uploads");
             filee.Move("C:\\Users\\wael\\IdeaProjects\\CrowdFund\\public\\uploads");*/

            Fichiers.insert(file, function (err, fileObj) {
                Session.set('ribp',Session.get('ribp')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurRibp':Session.get('utilisateurInfop')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourant')}});
                fileObj.update({$set: {'nature':'ribp'}});

                /*  function moveFile(){
                 var object = new ActiveXObject("Scripting.FileSystemObject");
                 var file = object.GetFile("C:\\wamp\\www\\phptest.php");
                 file.Move("C:\\wamp\\");
                 document.write("File is moved successfully");
                 }*/
                if (err){
                  alert('erreur')
                } else {
                    alert('fichier uploader avec succées')
                }
            });
        });
    },


    "click .deleteRibp": function () {
        //  Fichiers.remove(this._id);
        Meteor.call('removefile',this._id);
        Session.set('ribp',Session.get('ribp')-1);
    },
    "change #justificatif": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
                Session.set('justificatif',Session.get('justificatif')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurJustificatif':Session.get('utilisateurJustificatif')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourant')}});
                fileObj.update({$set: {'nature':'justificatif'}});


                if (err){

                } else {
                alert('uploader avec succées');
                }
            });
        });
    },
    "click .deleteJustificatif": function () {
        //  Fichiers.remove(this._id);
        Meteor.call('removefile',this._id);
        Session.set('justificatif',Session.get('justificatif')-1);

    },
    "change #cinp": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
                Session.set('cinp',Session.get('cinp')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurCinp':Session.get('utilisateurCinp')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourant')}});
                fileObj.update({$set: {'nature':'cinp'}});


                if (err){
                    alert('erreur format')

                } else {
                    alert("fichier uploader avec succées")
                }
            });
        });
    },
    "click .deleteCinp": function () {
        //  Fichiers.remove(this._id);
        Meteor.call('removefile',this._id);
        Session.set('cinp',Session.get('cinp')-1);
    },
});
