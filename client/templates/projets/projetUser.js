/**
 * Created by wael on 23/03/2016.
 */
Meteor.subscribe('MesProjets')
Meteor.subscribe('uploads')
Meteor.subscribe('images')
Template.projets.helpers({
    mesProjets : function(){
        return Test.find({createurProjet:Meteor.userId()}).fetch();

    },
    img:function()
    {
          return Images.findOne({utilisateurId:Meteor.userId()});
    }
});

Template.projets.rendered = function() {
 /*  $(".progress").asPieProgress({
        namespace: 'pieProgress'
    });
*/
}
Template.projets.events({


});


