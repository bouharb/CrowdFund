/**
 * Created by wael on 04/03/2016.
 */
/*Fichiers.allow({
    'find': function () {
        // add custom authentication code here
        return true;
    }
});*/
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}