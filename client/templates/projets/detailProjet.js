/**
 * Created by wael on 24/03/2016.
 */
Meteor.subscribe('MesProjets')
Template.projetDetail.helpers({
   desc: function(){

        return Test.findOne({_id: this._id});
    },
    commentaires: function() {
        return Comments.find({projetId: this._id});
    }
});
Template.projetDetail.events({
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
});