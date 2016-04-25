Meteor.subscribe("fichier");
Template.association.rendered = function() {
    $('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpeynhXl0nsyNxzBL4aNPjQq9ekG4Za4&libraries=places&callback=initAutocomplete" async defer></script>');
    $('head').append('<script type="text/javascript" src="assets/js/localisationAPI.js">');
    //$('head').append('<script type="text/javascript" src="assets/js/datepicker.js"></script>');
    // $('head').append('<script type="text/javascript" src="assets/js/datepickerLang.js"></script>');

    // $('head').append('<script type="text/javascript" src="http://jquery-ui.googlecode.com/svn/trunk/ui/i18n/jquery.ui.datepicker-de.js"></script>');


    /* $.getScript( "https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpeynhXl0nsyNxzBL4aNPjQq9ekG4Za4&libraries=places&callback=initAutocomplete", function( data, textStatus, jqxhr ) {
     $.getScript( "assets/js/localisationAPI.js", function( data, textStatus, jqxhr ) {
     return;
     });
     });*/
    $("#infobancaire").validate({
        rules: {
            nomAssociation:{
                required : true
            }
        },

        messages: {

            nomAssociation: {
                required : "Le montant n'est pas un nombre. Veuillez entrer seulement des chiffres."
            }

        }
    });

    $('#picker').datepicker({
        language: 'fr'
    });

    //   $.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );



};

Template.association.helpers({


    fichiers: function() {
        var rib = Fichiers.find({utilisateurRib : Session.get('utilisateurInfo')});
      //
        //  Session.set('urlRib',rib.urlFichier);
        if(rib!=null)
        Session.set('idRib',rib._id);

        return rib;
    },
    Rib:function()
    {
        if(Session.get('rib')<1)
            return true;
        return false;
    },
    fichiersStatuts: function() {
        var statuts = Fichiers.find({utilisateurStatuts : Session.get('utilisateurStatuts')});
        if(statuts!=null)
            Session.set('idStatuts',statuts._id)
        Session.set('urlStatus',statuts.urlFichier);

        return statuts;
    },
    Statuts:function()
    {
        if(Session.get('statuts')<1)
            return true;
        return false;
    },
    fichiersIdentification: function() {
        var identification = Fichiers.find({utilisateurIdentification : Session.get('utilisateurIdentification')});
        Session.set('urlIdentification',identification.urlFichier);

        return identification;
    },
    Identification:function()
    {
        if(Session.get('identification')<1)
            return true;
        return false;
    },

    fichiersImmatricule: function() {
        var immatricule = Fichiers.find({utilisateurImmatricule : Session.get('utilisateurImmatricule')});
        Session.set('urlImmatricule',immatricule.urlFichier);

        return immatricule;
    },
    Immatricule:function()
    {
        if(Session.get('immatricule')<1)
            return true;
        return false;
    },
    fichiersCin: function() {
        var cin = Fichiers.find({utilisateurCin : Session.get('utilisateurCin')});
        Session.set('urlCin',cin.urlFichier);

        return cin;
    },
    Cin:function()
    {
        if(Session.get('cin')<1)
            return true;
        return false;
    },
});


Template.association.events({
    "change #ribb": function(event,template) {
        FS.Utility.eachFile(event, function(file) {
            /*     var objecct = new ActiveXObject("Scripting.FileSystemObject");
             var filee = objecct.GetFile("C:\\Users\\wael\\IdeaProjects\\CrowdFund\\.uploads");
             filee.Move("C:\\Users\\wael\\IdeaProjects\\CrowdFund\\public\\uploads");*/

            Fichiers.insert(file, function (err, fileObj) {
                Session.set('rib',Session.get('rib')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurRib':Session.get('utilisateurInfo')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourant')}});
                fileObj.update({$set: {'nature':'rib'}});

                /*  function moveFile(){
                 var object = new ActiveXObject("Scripting.FileSystemObject");
                 var file = object.GetFile("C:\\wamp\\www\\phptest.php");
                 file.Move("C:\\wamp\\");
                 document.write("File is moved successfully");
                 }*/
                if (err){
                    // handle error
                } else {
                    // handle success depending what you need to do
                    //   var userId = Meteor.userId();
                    //     console.log("aaaa",fileName);

                    /*   var imagesURL = {
                     ///  "profile.image": "/cfs/files/images/" + fileObj._id
                     "userInfo.id": session.get('utilisateurInfo')
                     };
                     Meteor.users.update(userId, {$set: imagesURL});*/
                }
            });
        });
    },


    "click .deleteRib": function () {
        //  Fichiers.remove(this._id);
        Meteor.call('removefile',this._id);
        Session.set('rib',Session.get('rib')-1);
    },
    "change #statuts": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
                Session.set('statuts',Session.get('statuts')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurStatuts':Session.get('utilisateurStatuts')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourant')}});
                fileObj.update({$set: {'nature':'statuts'}});


                if (err){

                } else {

                }
            });
        });
    },
    "click .deleteStatuts": function () {
        //  Fichiers.remove(this._id);
        Meteor.call('removefile',this._id);
        Session.set('statuts',Session.get('statuts')-1);
    },
    "change #formIdent": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
                Session.set('identification',Session.get('identification')+1)  ;


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
    "click .deleteIdent": function () {
        //  Fichiers.remove(this._id);
        Meteor.call('removefile',this._id);
        Session.set('identification',Session.get('identification')-1);
    },

    "change #immatricule": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
                Session.set('immatricule',Session.get('immatricule')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurImmatricule':Session.get('utilisateurImmatricule')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourant')}});
                fileObj.update({$set: {'nature':'immatricule'}});


                if (err){
                    alert('erreur format')

                } else {
                    alert("fichier uploader avec succées")
                }
            });
        });
    },
    "click .deleteImmatricule": function () {
        //  Fichiers.remove(this._id);
        Meteor.call('removefile',this._id);
        Session.set('immatricule',Session.get('immatricule')-1);
    },
    "change #cin": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


            Fichiers.insert(file, function (err, fileObj) {
                Session.set('cin',Session.get('cin')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'utilisateurCin':Session.get('utilisateurCin')}});
                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'utilisateurProjet':Session.get('utilisateurCourant')}});
                fileObj.update({$set: {'nature':'cin'}});


                if (err){
                    alert('erreur format')

                } else {
                    alert("fichier uploader avec succées")
                }
            });
        });
    },
    "click .deleteCin": function () {
        //  Fichiers.remove(this._id);
        Meteor.call('removefile',this._id);
        Session.set('cin',Session.get('cin')-1);
    },
});
