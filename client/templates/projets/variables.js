/**
 * Created by wael on 10/03/2016.
 */
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
    if(montant==0)
        return 0;
    return parseInt((montantcollecter/montant)*100);
});

