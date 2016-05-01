/**
 * Created by wael on 01/04/2016.
 */


//Meteor.subscribe('cp');
Template.contrePartie.rendered = function() {
    Session.set("dd",this.contreparties);


    $("#formcp").validate({
        rules: {
            montantC:{
                required : true,
                montantInteger:true,
                zero : true

            },

        },

        messages: {

            montantC: {
                required : "Le montant est obligatoire.",
                montantInteger : "Le montant doit étre un entier",
                zero : "Le montant doit être supérieur à zéro et ne doit pas être un nombre négatif aussi "
            },

        }
    });


}

Template.contrePartie.helpers({
    contreP: function () {
        var m= Session.get("mc");
        if(!Session.get("mc"))
       return CP.find({idprojet:this._id}).fetch();
        console.log(CP.find({idprojet:this._id}).fetch())
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
    'submit #formcp':function(event,template){
        Bert.defaults.hideDelay = 7000;
        event.preventDefault();
        var element=   $('input:radio[name=cpm]:checked').val();
        var mcont=Number($('#montantC').val());
        console.log(element);
        if(element==undefined||element==null)
        {
            Bert.alert( 'Vous devez choisir une contrepartie', 'danger' );
        }
        else if (!Meteor.userId())
        {
            Bert.alert( 'Vous devez vous connecter d\'abord', 'danger' );
        }
        else {
            var chemain=Router.routes.recape.path({_id:this._id });
            Router.go(chemain);
        }
      //  var element = template.find('input:radio[name=cpm]:checked');

       var res= CP.findOne({_id:element});
        localStorage.setItem("idcontre",element);
        localStorage.setItem("montantcp",mcont)

    }

});