/**
 * Created by wael on 26/03/2016.
 */
Meteor.subscribe('MesProjets');
Template.listProjets.helpers({


    listProjet: function(){
        return Test.find();
    }

});
/*
Template.listProjets.events({
    "click #ajouterCommentaire" : function(event){
        event.preventDefault();
        var photo = Images.findOne({utilisateurId :Meteor.userId()}).url();

        comments={};
        comments.projetId=this._id;
        comments.body = $('#commentaire').val();
        // comments.body=event.target.commentaire.value;
        comments.createdAt = new Date;
        comments.photo=photo;

        Meteor.call('ajouterCommentaire',comments);
    }
});*/