/**
 * Created by wael on 25/03/2016.
 */
Notifications = new Mongo.Collection('notifications');

Notifications.allow({
    update: function(userId, doc, fieldNames) {
        return ownsDocument(userId, doc) &&
            fieldNames.length === 1 && fieldNames[0] === 'read';
    }
});

createCommentNotification = function(comment) {
    var projet = Test.findOne(comment.projetId);
    if (comment.userId !== projet.createurProjet) {
        Notifications.insert({
            userId: projet.createurProjet,
            projetId: projet._id,
            commentId: comment._id,
            commenterName: comment.author,
            read: false
        });
    }
};