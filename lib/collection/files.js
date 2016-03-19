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
    var createThumb = function(fileObj, readStream, writeStream) {
        // Transform the image into a 10x10px thumbnail
        gm(readStream, fileObj.name()).resize('10', '10').stream().pipe(writeStream);
    };
}
Fichiers = new FS.Collection("fichier", {
    stores: [new FS.Store.FileSystem("fichier", {path:'/Users/wael/IdeaProjects/CrowdFund/.uploads',

        }
    )]
});
FS.debug = true;
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