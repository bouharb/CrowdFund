/**
 * Created by wael on 04/03/2016.
 */
Meteor.publish("images", function(){ return Images.find(); });
Meteor.publish('items', function() {
    return Items.find();
});

Meteor.publish('uploads', function() {
    return Uploads.find({});
});
Meteor.publish('fichier',function(){
return Fichiers.find({});

});

Meteor.publish('fichier',function(){
    return Posts.find({});

});
Meteor.publish('profil',function(){
    return Meteor.users.find({});
});

Meteor.publish('MesProjets',function(){
    return Test.find({});
});

Meteor.publish('CP',function(){
    return CP.find({});
});

Meteor.publish('paiment',function(){
    return Payement.find({});
});

Meteor.publish('MesContributions',function(){
    return Contributeur.find({});
});

/*
Meteor.publish('projetDetail',function(){
    return Test.find({});
});*/
Meteor.publish('comments', function() {
    return Comments.find();
});
Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId, read: false});
});
CurrentUserId = null;
Meteor.publish(null, function() {
    CurrentUserId = this.userId;
});