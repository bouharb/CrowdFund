/**
 * Created by wael on 01/04/2016.
 */


//Meteor.subscribe('CP');
Template.contrePartie.rendered = function() {
    Session.set("dd",this.contreparties);


}

Template.contrePartie.helpers({
    contreP: function () {
        var m= Session.get("mc");
        if(!Session.get("mc"))
       return Test.find({_id:this._id}).fetch();
        return Test.find({_id:this._id,contreparties: { $elemMatch:{montant: {$lte: m } }}})
    }
}

);
Template.contrePartie.events({
    'click #a' : function(){
        console.log(this._id);
        console.log(this.contreparties)
    },
    'change #montantC' :function(){
        console.log(Number($('#montantC').val()))
        Session.set("mc",Number($('#montantC').val()));
        console.log(this.contreparties)
    },
    'click #payer':function(event,template){

        var element = template.find('input:radio[name=cpm]:checked');
        console.log($(element).val());
        Session.set("icdp",element);

    }

});