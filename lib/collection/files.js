/**
 * Created by wael on 09/03/2016.
 */
/*var FichiersStore = new FS.Store.FileSystem("fichier", {path: process.env.PWD + '/public'});

Fichiers = new FS.Collection("fichier", {
    stores: [FichiersStore]
});*/
var base = "";
if (Meteor.isServer) {
    base = process.env.PWD;
}
Fichiers = new FS.Collection("fichier", {
    stores: [new FS.Store.FileSystem("fichier", {path:'/Users/wael/IdeaProjects/CrowdFund/.uploads'})]
});
//FS.HTTP.setBaseUrl('/uploads');
Fichiers.allow({

    download: function() {
        return true;
    },
    insert: function() {

        return true
    },
    update: function() {
        return true
    },
    remove: function() {
        return true;
    },
});