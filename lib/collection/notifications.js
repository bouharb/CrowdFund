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
            notifierName: comment.author,
            sujet : "a commenté votre projet",
            read: false
        });
    }
};

createSuivisNotification = function(abonnement) {
    var projeta = Test.findOne(abonnement.idprojet);
    if (abonnement.userId !== projeta.createurProjet) {
        Notifications.insert({
            userId: projeta.createurProjet,
            projetId: projeta._id,
            abonnerId: abonnement._id,
            notifierName: abonnement.author,
            sujet : "s'est abonné à votre projet",
            read: false
        });
    }
};

createVoteNotification = function(vote) {
    var projetv = Test.findOne(vote.idprojet);
    if (vote.userId !== projetv.createurProjet) {
        Notifications.insert({
            userId: projetv.createurProjet,
            projetId: projetv._id,
            voterId: vote.userId,
            notifierName: vote.author,
            sujet : "a voté pour votre projet",
            read: false
        });
    }
};