/**
 * Created by wael on 07/04/2016.
 */
Meteor.subscribe('MesProjets')
Meteor.subscribe('MesContributions')

Template.projetSoutenus.helpers({
    Projetsoutenus : function(){

  x=  Contributeur.find({Idcontributeur:Meteor.userId()}).map(function(elem)
     {
            // console.log("aaa",elem.IdProjet)
            return  elem.IdProjet;
       });
 return Test.find({_id: {$in:x}})
    }

});