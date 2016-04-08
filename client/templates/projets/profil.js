/**
 * Created by wael on 17/03/2016.
 */


Template.profile.helpers({

id: function(){
    return Session.get('templateUser');
},
    templateUser: function(){
        return Session.get('templateUser')
    }
});

Template.profile.events({
    'click #profil': function(){
        Session.set('templateUser', 'profilUser');

    },
    'click #projets': function() {
        Session.set('templateUser', 'projets');
    } ,
    'click #projetSoutenus': function() {
        Session.set('templateUser', 'projetSoutenus');
    },
    'click #projetSuivis': function() {
        Session.set('templateUser', 'projetSuivis');
    }

});