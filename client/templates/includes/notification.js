/**
 * Created by wael on 25/03/2016.
 */
Template.notifications.helpers({
    notifications: function() {
        return Notifications.find({userId: Meteor.userId(), read: false});
    },
    notificationCount: function(){
        return Notifications.find({userId: Meteor.userId(), read: false}).count();
    }
});

Template.notificationItem.helpers({
    notificationPostPath: function() {
        return Router.routes.projetDetail.path({_id: this.projetId});
    },
    contenuNotif:function(){
        Notifications.find({userId: Meteor.userId(), read: false});
    }
});

Template.notificationItem.events({
    'click a': function() {
        Notifications.update(this._id, {$set: {read: true}});
    }
});