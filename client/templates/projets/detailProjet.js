/**
 * Created by wael on 24/03/2016.
 */
Meteor.subscribe('MesProjets')
Template.projetDetail.helpers({
    errorMessage: function(field) {
        return Session.get('commentSubmitErrors')[field];
    },
    commentsCount: function() {
        return Comments.find({projetId: this._id}).count();
    },
    errorClass: function (field) {
        return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
    },
   desc: function(){

        return Test.findOne({_id: this._id});
    },
    commentaires: function() {
        return Comments.find({projetId: this._id});
    }
});
Template.projetDetail.onCreated(function() {
    Session.set('commentSubmitErrors', {});
});
Template.projetDetail.events({
    "click #ajouterCommentaire" : function(event){
        event.preventDefault();
        var photo = Images.findOne({utilisateurId :Meteor.userId()}).url();

        comments={};
        comments.projetId=this._id;
        comments.body = $('#commentaire').val();
       // comments.body=event.target.commentaire.value;
      //  comments.createdAt = new Date;
       comments.photo=photo;
        var errors = {};
        if (!comments.body) {
            errors.body = "S'il vous plait , écrivez quelque chose";
            return Session.set('commentSubmitErrors', errors);
        }

        Meteor.call('ajouterCommentaire',comments,function(error, commentId) {
            if (error){
                throwError(error.reason);
            } else {
                $('#commentaire').val('');
            }}
        );
    }
});