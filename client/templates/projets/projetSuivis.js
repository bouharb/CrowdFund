/**
 * Created by wael on 08/04/2016.
 */
Meteor.subscribe('MesProjets')
Meteor.subscribe('abonnementp')
Template.projetSuivis.helpers({
    Projetsuivis : function(){

        x=  Abonner.find({idabonner:Meteor.userId()}).map(function(elem)
        {
            // console.log("aaa",elem.IdProjet)
            return  elem.idprojet;
        });
        return Test.find({_id: {$in:x}})
    }

});