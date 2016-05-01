/**
 * Created by wael on 18/04/2016.
 */
/**
 * Created by wael on 17/03/2016.
 */
Meteor.subscribe("fichier");
Template.particulierModif.rendered = function() {

    $('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpeynhXl0nsyNxzBL4aNPjQq9ekG4Za4&libraries=places&callback=initAutocomplete" async defer></script>');
    $('head').append('<script type="text/javascript" src="../assets/js/localisationAPI.js">');


    $('#pickerrP').datepicker({
        language: 'fr'
    });



};


Template.particulierModif.events({
    "change #ribpMP": function(event,template) {
        FS.Utility.eachFile(event, function(file) {
            /*     var objecct = new ActiveXObject("Scripting.FileSystemObject");
             var filee = objecct.GetFile("C:\\Users\\wael\\IdeaProjects\\CrowdFund\\.uploads");
             filee.Move("C:\\Users\\wael\\IdeaProjects\\CrowdFund\\public\\uploads");*/

       par=     Fichiers.insert(file, function (err, fileObj) {
                Session.set('ribpMP',Session.get('ribpMP')+1)  ;


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
        Meteor.call('TestUpdateRibP',{_id:Session.get('idpf')},{$set:{"particulier.fichierRIB": par._id}})

    },


    "click .deleteRibpMP": function () {
        Meteor.call('removeParticulierFile',Session.get("idpf"))


        Session.set('ribp',Session.get('ribp')-1);
    },
    "change #justificatifMP": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


      just=  Fichiers.insert(file, function (err, fileObj) {
                Session.set('justificatifMP',Session.get('justificatifMP')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'nature':'justificatif'}});


                if (err){

                } else {
                    alert('uploader avec succées');
                }
            });
        });
        Meteor.call('TestUpdateJustificatifP',{_id:Session.get('idpf')},{$set:{"particulier.fichierJustificatif": just._id}})


    },
    "click .deleteJustificatifMP": function () {
        Meteor.call('removeParticulierFileJustification',Session.get("idpf"))

        Session.set('justificatifMP',Session.get('justificatifMP')-1);

    },
    "change #cinpMP": function(event,template) {
        FS.Utility.eachFile(event, function(file) {


         cipp=   Fichiers.insert(file, function (err, fileObj) {
                Session.set('cinpMP',Session.get('cinpMP')+1)  ;


                var fileName = fileObj.collectionName + '-' + fileObj._id + '-' + fileObj.original.name;

                fileObj.update({$set: {'urlFichier':fileName}});
                fileObj.update({$set: {'nature':'cinp'}});


                if (err){
                    alert('erreur format')

                } else {
                    alert("fichier uploader avec succées")
                }
            });
        });
        Meteor.call('TestUpdateCinP',{_id:Session.get('idpf')},{$set:{"particulier.fichierCIN": cipp._id}})

    },
    "click .deleteCinpMP": function () {
        Meteor.call('removeParticulierFileCinP',Session.get("idpf"))

        Session.set('cinpMP',Session.get('cinpMP')-1);
    },
});
