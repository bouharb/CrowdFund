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
