/**
 * Created by wael on 05/03/2016.
 */

Posts = new Mongo.Collection('posts');
/*var Schemas = {};

Schemas.Projet = new SimpleSchema({
    user:{
        type : String
    },
    titre: {
        type: String,
        label: "Titre",
        max: 200
    }

});
Projets.attachSchema(Schemas.Projet);*/
Projets = new Mongo.Collection("projets");
var Schemas = {};
Schemas.Projet = new SimpleSchema({
    "basicInfo": {
        type: Object
    },
    "basicInfo.titre" : {
       type: String
},
    "basicInfo.montant" : {
        type : Number
    },
    "basicInfo.duree" : {
        type : Number
    },
    "basicInfo.devise" : {
        type : String
    },
    "basicInfo.categorie" : {
        type : String
    },
    "basicInfo.facebook" : {
        type : String,
        optional : true
    },
    "basicInfo.twitter" : {
        type : String,
        optional : true
    },
    "basicInfo.youtube" : {
        type : String,
        optional : true
    },
    "basicInfo.siteWeb" : {
        type : String,
        optional : true
    },
    "basicInfo.description" : {
        type : String,
        optional : true
    },
    "contreparties": {
        type: Object
    },
    "contreparties.$.nom" : {
        type : String,
        optional : true
    },
    "contreparties.$.montant" : {
        type : Number,
    },
    "contreparties.$.quantitee" : {
        type : String ,
        optional : true
    },
    "contreparties.$.dateLivraison" : {
        type : String ,
        optional : true
    },
    "contreparties.$.description" : {
        type : String ,
    },



});
Projets.attachSchema(Schemas.Projet);


validateProjet = function (projet) {
    var errors = {};
    if (!projet.titre)
        errors.titre = "Ce champ est obligatoire,Veuillez indiquer un nom de projet";
    if (!projet.montant)
        errors.montant = "Veuillez indiquer un montant pour votre collecte";
   /* if (!projet.devise)
        errors.devise = "Please fill in a URL";*/
    if (!projet.duree)
        errors.duree = "Veuillez indiquer la durée de votre collecte";
   /* if (!projet.categorie)
        errors.categorie= "Please fill in a URL";*/

    return errors;
}

