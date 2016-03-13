/**
 * Created by wael on 09/03/2016.
 */
Fichiers = new FS.Collection("fichier", {
    stores: [new FS.Store.FileSystem("fichier", {path: "~/uploads"})]
});
Fichiers.allow({
    download: function() {
        return true
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
