/**
 * Created by wael on 10/03/2016.
 */
Meteor.subscribe('CP');
Meteor.subscribe('Images');
Meteor.subscribe('MesContributions');
Meteor.subscribe('photoCouverture');
Meteor.subscribe("fichier");
Meteor.subscribe("actualiter");





Template.registerHelper( 'ver', function(id) {
   if(Test.findOne({_id:id}).etat=="verifier")
        return true;
    return false;
});
Template.registerHelper( 'v', function() {
    var routeName = Router.current().route.getName();
    if(routeName=='demarrerProjet')

        return false;
    return true;
});
Template.registerHelper( 'cv', function(a) {
    return a;
});
Template.registerHelper( 'cvc', function() {
    switch (Session.get("recherche"))
    {
        case 'ParCategorie' :
            return "ParCategorie";
            Session.set("recherche",null);
        break;
        case 'ParVille' :
            return "ParVille";
            Session.set("recherche",null);
        break;
    }

});
Template.registerHelper( 'cvcv', function() {
    return b;
});

Template.registerHelper('pluralize', function(n, thing) {
    // pluraliser assez simpliste
    if (n === 1) {
        return thing;
    } else {
        return thing + 's';
    }
});

Template.registerHelper('pluralizeParticiapant', function(id, thing) {
    // pluraliser assez simpliste
   var n= Contributeur.find({IdProjet:id}).count();
    if (n === 1) {
        return thing;
    } else {
        return thing + 's';
    }
});

Template.registerHelper('pluralizeFont', function(n, thing) {
    // pluraliser assez simpliste

    if (n <= 1) {
        return thing;
    } else {
        return thing + 's';
    }
});

Template.registerHelper('pourcent', function(montantcollecter,montant) {
    // pluraliser assez simpliste
    if(montant==0)
        return 0;
    if(((montantcollecter/montant)*100)>=100)
        return 100;
    return (montantcollecter/montant)*100;
});
Template.registerHelper('rechercheC', function() {
    // pluraliser assez simpliste
    if(Session.get("rechercheParCateg")!=''||Session.get("rechercheParCateg")!=null||Session.get("rechercheParCateg")!=undefined)
        return Session.get("rechercheParCateg");
});


Template.registerHelper('pourcentAff', function(montantcollecter,montant) {
    // pluraliser assez simpliste
    if(montant==0)
        return 0;
    return parseInt((montantcollecter/montant)*100);
});

Template.registerHelper('iduserchat', function() {


    return Meteor.userId();
});

Template.registerHelper('couleur', function(montantcollecter,montant) {
    // pluraliser assez simpliste
    if(((montantcollecter/montant)*100)>=100)
        return "#0066ff";
    return "#cc0000";
});

Template.registerHelper('propProjet', function() {
    // pluraliser assez simpliste
    var x = Session.get("idpcontributeur");
    var iduserp=Test.findOne({_id:x}).createurProjet;
    if(iduserp==Meteor.userId())
        return true;
    return false;
});

Template.registerHelper('nomcrea', function() {
    // pluraliser assez simpliste
    var x = Session.get("idpcontributeur");
   var ex=Test.findOne({_id:x,'NomTitulaire': {$exists: true}});
    if(ex!=undefined || ex!=null)
        return Test.findOne({_id:x}).NomTitulaire;
});

Template.registerHelper('finished', function(id) {
    // pluraliser assez simpliste
    var res=  Test.findOne({_id:id,'finishedSucces': {$exists: true}});
    var ress=  Test.findOne({_id:id,'finishedIncomplete': {$exists: true}});
    if((res!=undefined||res!=null)||(ress!=undefined||ress!=null))
{
    return true;
}
    else {
        return false;
    }
});
Template.registerHelper('reussie', function(montant,montantcollecter,id,dure,dateverif) {
    // pluraliser assez simpliste
    var d= moment(dateverif).add(dure,'days');


    var date= new Date();
    var dat=moment(date);
    if(dateverif!=undefined||dateverif!=null||dateverif!='')
    {
        var restant= d.diff(dat, 'days');

    }





    resin=  Test.findOne({_id:id,'finishedSucces': {$exists: true}});
    ressin=  Test.findOne({_id:id,'finishedIncomplete': {$exists: true}});

    if(((montantcollecter>=montant))&&((resin==null)||(resin==undefined))&&(restant<=0)) {
        if(Test.findOne({$and:[{_id:id},{verifier:true}]})!=undefined) {
            Test.update({_id: id}, {$set: {"finishedSucces": date}});
        }
    }
    if((montantcollecter<montant)&&(restant<=0)&&((ressin==null)||(ressin==undefined))){
        if(Test.findOne({$and:[{_id:id},{verifier:true}]})!=undefined) {
            Test.update({_id: id}, {verifier: true}, {$set: {"finishedIncomplete": date}});
        }
    }
    if(resin!=null||resin!=undefined){
        return true;
    }
    else if(ressin!=null||ressin!=undefined)
    {
      return  false;
    }
    else {
        return false;
    }

});

Template.registerHelper('datefin', function(montant,montantcollecter,id) {

  var res=  Test.findOne({_id:id,'finishedSucces': {$exists: true}});
    if(res!=undefined||res!=null)
    {
        return moment(res.finished).format('L');
    }
});

Template.registerHelper('soumission', function() {
 Tracker.autorun(function() {
 a = Session.get("categOmoin");
 b = Session.get("contrepartieOmoin");
 c = Session.get("photoProjetOmoin");
 d = Session.get("descriptionCheck");
 ee = Session.get("facturationCheck");
 f = Session.get("avatar");
 if((a=="true")&&(b=="true")&&(c=="true")&&(d=="true")&&(ee=="true")&&(f=="true")) {
 Session.set("ver",true);

 }
 else {
     Session.set("ver",false);
 }
 });
    return Session.get("ver");
 });

Template.registerHelper('montantContrePartie', function() {
    // pluraliser assez simpliste

    return localStorage.getItem("montantcp");
});

Template.registerHelper('s', function(id) {
    // pluraliser assez simpliste
    if(Test.findOne({_id:id}).etat=="En verification")
        return true;
        return false;

});

Template.registerHelper('desabled', function(id) {
    // pluraliser assez simpliste
    var res=  Test.findOne({_id:id});
    if(res.verifier==true){
        return 'none';
    }
});

Template.registerHelper('descContrePartie', function() {
    // pluraliser assez simpliste

    return localStorage.getItem("montantcp");
});

Template.registerHelper('pourcentc', function(montantcollecter,montant) {
    // pluraliser assez simpliste
    if((montant==0))

        return 0;

    return ((montantcollecter/montant)*100).toFixed(2);
});

Template.registerHelper('participant', function(id) {
    // pluraliser assez simpliste

     return  Contributeur.find({IdProjet:id}).count();

});


Template.registerHelper('photo', function(id) {
    // pluraliser assez simpliste

    var u= Images.find({_id:id});
    if(u!=null||u!=undefined)
        return u;

});

Template.registerHelper('notphoto', function(id) {
    // pluraliser assez simpliste
    var u= Images.findOne({utilisateurId:id});

    if((u==undefined)||(u==null))
        return true;
        return false;

});

Template.registerHelper('photoUserM', function(id) {


    var u= Images.find({utilisateurId:id});
   // if(u!=null||u!=undefined)
        return u;

});

Template.registerHelper('vrai', function() {
    var pro= Session.get("idpcontributeur");

    var x=  Contributeur.find({IdProjet:pro}).map(function(elem)
    {
      if(Meteor.userId()==elem.Idcontributeur)
      {
          Session.set("verif",'true');
      }

        return  elem.Idcontributeur;
    });

    var iduserp = Test.findOne({_id: pro}).createurProjet;
    if(iduserp!=undefined||iduserp!=null)
    {
        var idu=iduserp
    }
    if((Session.get("verif")=="true")||(Meteor.userId()==idu))
    {
        return true;
    }
    else{
        return false;
    }

});

Template.registerHelper('localisationProjet', function(id) {

    return window.location.href;

});

Template.registerHelper('photoProjetModif', function(id) {
    // pluraliser assez simpliste

    var u= Images.find({utilisateurId:id});
    var uu=Images.findOne({utilisateurId:id});
    if(uu!=null||uu!=undefined)
    return u;
});

Template.registerHelper('jourrestant', function(dure,dateverif) {
    // pluraliser assez simpliste

    var d= moment(dateverif).add(dure,'days');


    var date= new Date();
    var dat=moment(date);
    if(dateverif!=undefined||dateverif!=null||dateverif!='')
    {
        var restant= d.diff(dat, 'days');

    }
    if(restant<=0)
    {
        return Math.abs(restant)+restant;
    }
    else {
        return restant;
    }



});
/*
Template.registerHelper('verifville', function(id) {
    // pluraliser assez simpliste

    var u= Meteor.users.findOne({_id:id});
    if(u.service.facebook.id==''||u.service.facebook.id==null||u.service.facebook.id==undefined)
        return u.profile.ville;
        return u.service.facebook.locale;
});
*/
Template.registerHelper('notfb', function(id) {

    var u= Meteor.users.findOne({_id:id,'services.facebook': {$exists: true}});


    if((u==null)||(u==undefined))
        return true;
        return false;
});

Template.registerHelper('urlphotofb', function(id) {

    var user=Meteor.users.findOne({_id:id});

    if((user!=null)||(user!=undefined))
    return user.profile.display_picture;
});
Template.registerHelper('projetsoutenus', function(id) {
   return Contributeur.find({Idcontributeur:id}).count()
});



Template.registerHelper('pluralizeProjet', function(id, a,b) {

    if (Contributeur.find({Idcontributeur:id}).count()<=1) {
        return a +' '+b;
    } else {
        return a + 's'+' '+b+'s';
    }
});

Template.registerHelper('montantProjet', function(id) {

   var m= Contributeur.findOne({$and:[{Idcontributeur:id},{IdProjet:Session.get('idpcontributeur')}]})
    if(m!=null||m!=undefined)
    return m.montant;

});


Template.registerHelper('dateContribution', function(id) {

    var m= Contributeur.findOne({$and:[{Idcontributeur:id},{IdProjet:Session.get('idpcontributeur')}]})
    if(m!=null||m!=undefined)
        return moment(m.submitted).format('L');

});


Template.registerHelper('photoCouvert', function(id) {

        var mm=PhotoCouverture.find({idprojet:id}).fetch();
            var x=PhotoCouverture.findOne({idprojet:id});


    if(x==undefined||x==null||x=='')
        return '/profile.png';
        return mm[0].photo;

});

Template.registerHelper('photoCouvertDefillante', function(id) {

    var mm=PhotoCouverture.find({idprojet:id}).fetch();


    return mm;

});

Template.registerHelper('RibMM', function(id) {

    var mm=Test.findOne({_id:id,'association.fichierRIB': {$exists: true}});

if(mm==null||mm==undefined)

    return true;
    return false;


});

Template.registerHelper('RibMME', function(id) {

    var mm=Test.findOne({_id:id,'entreprise.fichierRIB': {$exists: true}});

    if(mm==null||mm==undefined)

        return true;
    return false;


});


Template.registerHelper('RibMMP', function(id) {

    var mm=Test.findOne({_id:id,'particulier.fichierRIB': {$exists: true}});

    if(mm==null||mm==undefined)

        return true;
    return false;


});

Template.registerHelper('JustificatifMMP', function(id) {

    var mm=Test.findOne({_id:id,'particulier.fichierJustificatif': {$exists: true}});

    if(mm==null||mm==undefined)

        return true;
    return false;


});

Template.registerHelper('cinMP', function(id) {

    var mm=Test.findOne({_id:id,'particulier.fichierCIN': {$exists: true}});

    if(mm==null||mm==undefined)

        return true;
    return false;


});


Template.registerHelper('fichierJustificatifMP', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.particulier.fichierJustificatif})
    return m;
});

Template.registerHelper('fichierCinMP', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.particulier.fichierCIN})
    return m;
});

Template.registerHelper('imgprofil', function() {
    var photo = Images.find({utilisateurId :Meteor.userId()});
    if(photo==undefined||photo==null)
    return true;
    return false;
});

Template.registerHelper('fichierRIBMP', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.particulier.fichierRIB})
    return m;
});


Template.registerHelper('fichierRIBM', function(id) {
    var mm=Test.findOne({_id:id});
        var m = Fichiers.find({_id:mm.association.fichierRIB})
    return m;
});


Template.registerHelper('fichierRIBME', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.entreprise.fichierRIB})
    return m;
});
Template.registerHelper('statu', function(id) {
    var pro= Session.get("idpcontributeur");
    var iduserp = Test.findOne({_id: pro}).createurProjet;
    if(Meteor.users.findOne({ "status.online": true },{_id:iduserp}))
    {return "text-green";
    }
    else {
        return "text-red";
    }
});

Template.registerHelper('StatusMM', function(id) {

    var mm=Test.findOne({_id:id,'association.fichierStatuts': {$exists: true}});
    if(mm==null||mm==undefined)

        return true;
    return false;


});

Template.registerHelper('StatusMME', function(id) {

    var mm=Test.findOne({_id:id,'entreprise.fichierStatuts': {$exists: true}});

    if(mm==null||mm==undefined)

        return true;
    return false;


});

Template.registerHelper('fichierStatusMM', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.association.fichierStatuts})
    return m;
});

Template.registerHelper('fichierStatusMME', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.entreprise.fichierStatuts})
    return m;
});

Template.registerHelper('immatriculationME', function(id) {

    var mm=Test.findOne({_id:id,'entreprise.fichierImmatriculation': {$exists: true}});

    if(mm==null||mm==undefined)

        return true;
    return false;

});

Template.registerHelper('fichierImmatriculationME', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.entreprise.fichierImmatriculation})
    return m;
});

Template.registerHelper('fichierCinME', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.entreprise.fichierCIN})
    return m;
});

Template.registerHelper('cinME', function(id) {

    var mm=Test.findOne({_id:id,'entreprise.fichierCIN': {$exists: true}});

    if(mm==null||mm==undefined)

        return true;
    return false;


});


Template.registerHelper('IdentificationMM', function(id) {

    var mm=Test.findOne({_id:id,'association.fichierIdentification': {$exists: true}});

    if(mm==null||mm==undefined)

        return true;
    return false;


});

Template.registerHelper('fichierIdentificationMM', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.association.fichierIdentification})
    return m;
});

Template.registerHelper('ImmatriculationMM', function(id) {

    var mm=Test.findOne({_id:id,'association.fichierImmatriculation': {$exists: true}});

    if(mm==null||mm==undefined)

        return true;
    return false;


});

Template.registerHelper('fichierImmatriculationMM', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.association.fichierImmatriculation})
    return m;
});

Template.registerHelper('CinMM', function(id) {

    var mm=Test.findOne({_id:id,'association.fichierCIN': {$exists: true}});

    if(mm==null||mm==undefined)

        return true;
    return false;


});

Template.registerHelper('fichierCinMM', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.association.fichierCIN})
    return m;
});


Template.registerHelper('routeActu', function(id) {

    return Router.routes.listActu.path({_id: id});
});

Template.registerHelper('routeactu', function(id) {

    return Router.routes.actu.path({_id: id});
});

Template.registerHelper('routeactum', function(idp,id) {
     localStorage.setItem("idactu",id)
    return Router.routes.modifActu.path({_id: idp});
});

Template.registerHelper('contenuActu', function(idp) {
   var idac= localStorage.getItem("idactu")
    return Actu.findOne({$and:[{_id:idac},{idprojet:idp}]}).contenu
});

Template.registerHelper('contenuActut', function(idp) {
    var idac= localStorage.getItem("idactu")
    return Actu.findOne({$and:[{_id:idac},{idprojet:idp}]}).titre
});
/*
Template.registerHelper('existactu', function(idp) {
    console.log(idp)
   var verif=Actu.find({idprojet:idp}).fetch();
    console.log(verif)
    if(verif!=null||verif!=undefined)
        return true;
            return false;

});


*/

Template.registerHelper('dateCreation', function(sub) {
    Session.get('time');
    //  moment.locale('fr');
        return moment(sub).fromNow();
});
setInterval(function() {
    Session.set("time", new Date())
}, 60000);
Template.registerHelper('dateCreationn', function(sub) {

   return moment(sub).format('L');
});


Template.registerHelper('dateCreationnn', function(sub) {

    return moment(sub).format('LLL');
});
