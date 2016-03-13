/**
 * Created by wael on 13/03/2016.
 */

Template.header.events({
    "click #demarrer": function () {
       Session.set('utilisateurCourant',Random.id());
       // alert(Session.get('utilisateurCourant'))

    }});
