/**
 * Created by wael on 01/04/2016.
 */


//Meteor.subscribe('cp');
Template.contrePartie.rendered = function() {
    Session.set("dd",this.contreparties);


}

Template.contrePartie.helpers({
    contreP: function () {
        var m= Session.get("mc");
        if(!Session.get("mc"))
       return CP.find({idprojet:this._id}).fetch();
        return CP.find({$and:[{idprojet:this._id},{'cp.montant':  {$lte: m } }]}).fetch()
    }
}

);
Template.contrePartie.events({
    'click #a' : function(){
        console.log(this._id);
        console.log(this.contreparties)
    },
    'change #montantC' :function(){
        Session.set("mc",Number($('#montantC').val()));
        console.log(this._id)
        console.log(CP.findOne({idprojet:this._id}))
    var    x=        Session.get("mc");

    console.log(CP.find({$and:[{idprojet:this._id},{'cp.montant':  {$lte: x } }]}).fetch())

    },
    'click #payer':function(event,template){
        var element=   $('input:radio[name=cpm]:checked').val();
        console.log(element)
      //  var element = template.find('input:radio[name=cpm]:checked');

       var res= CP.findOne({_id:element});
      var montancp=parseFloat(res.cp.montant);

        Session.set("idcontre",element);
        Session.set("montantcp",montancp)

    }

});