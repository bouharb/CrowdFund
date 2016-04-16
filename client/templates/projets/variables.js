/**
 * Created by wael on 10/03/2016.
 */
Meteor.subscribe('CP');
Meteor.subscribe('Images');
Meteor.subscribe('MesContributions');
Meteor.subscribe('photoCouverture');
Meteor.subscribe("fichier");




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
            Session.set("recherche",null)
        break;
        case 'ParVille' :
            return "ParVille";
            Session.set("recherche",null)
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

Template.registerHelper('couleur', function(montantcollecter,montant) {
    // pluraliser assez simpliste
    if(((montantcollecter/montant)*100)>=100)
        return "#0066ff";
    return "#cc0000";
});

Template.registerHelper('montantContrePartie', function() {
    // pluraliser assez simpliste

    return localStorage.getItem("montantcp");
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
    console.log(u)
    if((u==undefined)||(u==null))
        return true;
        return false;

});

Template.registerHelper('photoUserM', function(id) {
    // pluraliser assez simpliste

    var u= Images.find({utilisateurId:id});
   // if(u!=null||u!=undefined)
        return u;

});

Template.registerHelper('photoProjetModif', function(id) {
    // pluraliser assez simpliste

    var u= Images.find({utilisateurId:id});
    if(u!=null||u!=undefined)
    return u;
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
    // pluraliser assez simpliste
   console.log("notfb",id)
    var u= Meteor.users.findOne({_id:id,'services.facebook': {$exists: true}});

  //  if(u.services.facebook.id!=undefined)
    if((u==null)||(u==undefined))
        return true;
        return false;
});

Template.registerHelper('urlphotofb', function(id) {
    // pluraliser assez simpliste
    var user=Meteor.users.findOne({_id:id});
   // if(user.profile.display_pi)
    if((user!=null)||(user!=undefined))
      //  return "../profile.png"
    return user.profile.display_picture;
});
Template.registerHelper('projetsoutenus', function(id) {
    // pluraliser assez simpliste
   return Contributeur.find({Idcontributeur:id}).count()
});



Template.registerHelper('pluralizeProjet', function(id, a,b) {
    // pluraliser assez simpliste

    if (Contributeur.find({Idcontributeur:id}).count()<=1) {
        return a +' '+b;
    } else {
        return a + 's'+' '+b+'s';
    }
});

Template.registerHelper('montantProjet', function(idp,id) {
    // pluraliser assez simpliste
  console.log("p",idp);
    console.log("c",id);
   var m= Contributeur.findOne({$and:[{Idcontributeur:id},{IdProjet:idp}]})
    if(m!=null||m!=undefined)
    return m.montant;

});

Template.registerHelper('photoCouvert', function(id) {
    // pluraliser assez simpliste
    console.log(id)
        var mm=PhotoCouverture.find({idprojet:id});

    var m= mm.fetch()[0].photo
    console.log(m)
        return m

});

Template.registerHelper('photoCouvertDefillante', function(id) {
    // pluraliser assez simpliste
    console.log(id)
    var mm=PhotoCouverture.find({idprojet:id}).fetch();

   // var m= mm.fetch()[0].photo
    console.log(mm)
    return mm

});

Template.registerHelper('RibMM', function(id) {
    // pluraliser assez simpliste
    console.log(id)
    var mm=Test.findOne({_id:id,'association.fichierRIB': {$exists: true}});
    console.log(mm)
if(mm==null||mm==undefined)

    return true;
    return false;


});

Template.registerHelper('fichierRIBM', function(id) {
    var mm=Test.findOne({_id:id});
        var m = Fichiers.find({_id:mm.association.fichierRIB})
    return m;
});

Template.registerHelper('StatusMM', function(id) {
    // pluraliser assez simpliste
    console.log(id)
    var mm=Test.findOne({_id:id,'association.fichierStatuts': {$exists: true}});
    console.log(mm)
    if(mm==null||mm==undefined)

        return true;
    return false;


});

Template.registerHelper('fichierStatusMM', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.association.fichierStatuts})
    return m;
});

Template.registerHelper('IdentificationMM', function(id) {
    // pluraliser assez simpliste
    console.log(id)
    var mm=Test.findOne({_id:id,'association.fichierIdentification': {$exists: true}});
    console.log(mm)
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
    // pluraliser assez simpliste
    console.log(id)
    var mm=Test.findOne({_id:id,'association.fichierImmatriculation': {$exists: true}});
    console.log(mm)
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
    // pluraliser assez simpliste
    console.log(id)
    var mm=Test.findOne({_id:id,'association.fichierCin': {$exists: true}});
    console.log(mm)
    if(mm==null||mm==undefined)

        return true;
    return false;


});

Template.registerHelper('fichierCinMM', function(id) {
    var mm=Test.findOne({_id:id});
    var m = Fichiers.find({_id:mm.association.fichierCin})
    return m;
});