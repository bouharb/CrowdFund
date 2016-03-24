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


Meteor.publish('projetDetail',function(id){
    return Test.find({_id:id});
});