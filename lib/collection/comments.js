/**
 * Created by wael on 24/03/2016.
 */
Comments = new Mongo.Collection('comments');
Meteor.methods({
ajouterCommentaire: function (comments) {
    check(this.userId, String);
    /*check(comments, {
        projetId: String,
        body: String,
        photo: String
    });*/
    //var user = Meteor.user();
   var user = Meteor.users.findOne({_id:this.userId});
    var useri = Meteor.users.findOne({_id:this.userId,'profile.avatar': {$exists: true}});
    console.log(useri)

    var post = Test.findOne(comments.projetId);
    if(useri==null||useri==''||useri==undefined){
        idimage="profile.png"
       }
    else{
        idimage=useri.profile.avatar;
    }
    if (!post)
        throw new Meteor.Error('invalid-comment', 'Vous devez commenter sur un projet');
    commentaire = _.extend(comments, {
        image:idimage,
        userId: this.userId,
        author: user.profile.name,
        submitted: new Date()

    });
    Test.update(commentaire.projetId, {$inc: {commentsCount: 1}});
    commentaire._id =  Comments.insert(commentaire);

    createCommentNotification(commentaire);
    return commentaire._id;
}});