/**
 * Created by wael on 01/04/2016.
 */


//Meteor.subscribe('CP');
Template.contrePartie.rendered = function() {
    Session.set("dd",this._id);
    console.log(this)
}

Template.contrePartie.helpers({
    contreP: function () {
       Session.set("d",this._id);
       return Test.findOne({_id:this._id});
    }
}

);
Template.contrePartie.events({
    'click #a' : function(){
        console.log(this._id);
    }
});