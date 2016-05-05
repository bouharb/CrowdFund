/**
 * Created by wael on 24/03/2016.
 */
Comments = new Mongo.Collection('comments');
Chat= new Mongo.Collection('chat');

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
    var fb= Meteor.users.findOne({_id:this.userId,'services.facebook': {$exists: true}});
   if(fb!=null||fb!=undefined)
    {
        autoritaireComment=fb.profile.name;
    }
    else{
       autoritaireComment=user.profile.prenom;
   }
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
        author: autoritaireComment,
        submitted: new Date()

    });
    Test.update(commentaire.projetId, {$inc: {commentsCount: 1}});
    commentaire._id =  Comments.insert(commentaire);

    createCommentNotification(commentaire);
    return commentaire._id;
},

    updateMessageC: function (x,y,z) {
        check(this.userId, String);
        /*check(comments, {
         projetId: String,
         body: String,
         photo: String
         });*/
        //var user = Meteor.user();
        var user = Meteor.users.findOne({_id:this.userId});

        var useri = Meteor.users.findOne({_id:this.userId,'profile.avatar': {$exists: true}});
        var fb= Meteor.users.findOne({_id:this.userId,'services.facebook': {$exists: true}});
        if(fb!=null||fb!=undefined)
        {
            autoritaireMessageChat=fb.profile.name;
        }
        else{
            autoritaireMessageChat=user.profile.prenom;
        }

        var post = Test.findOne(z.projetId);
        if(useri==null||useri==''||useri==undefined){
            idimage="profile.png"
        }
        else{
            idimage=useri.profile.avatar;
        }
        if (!post)
            throw new Meteor.Error('invalid-comment', 'Vous devez commenter sur un projet');
        messageChat = _.extend(x,y,z, {
            image:idimage,
            userId: this.userId,
            author: autoritaireMessageChat

        });
       // Test.update(commentaire.projetId, {$inc: {commentsCount: 1}});
        messageChat._id =  Chatt.update(x,y,messageChat);

        createChatNotification(messageChat);
        return messageChat._id;
    },

});