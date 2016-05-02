/**
 * Created by wael on 11/04/2016.
 */
Meteor.subscribe("CP")
Template.recape.helpers({
        descCP: function () {

            var   idcp=    localStorage.getItem("idcontre");
            return CP.findOne({_id:idcp})

        },
    pourcentCP: function () {
        var  projet=Test.findOne({_id:this._id})
        var montant =projet.basicInfo.montant;
        var mcollecter = projet.montantcollecter;
           var x = parseInt(localStorage.getItem("montantcp"))
        var mcollecterf=mcollecter+x;
        console.log("aaaaaaaa",mcollecter)
        console.log("bbbbbb",mcollecterf)
        return mcollecterf;
    },
        usern:function () {
            var  user=Test.findOne({_id:this._id})

            var uid=Meteor.users.findOne({_id:user.createurProjet});
            return uid.profile.name;
        },

}


);

Template.recape.rendered = function() {
    $('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpeynhXl0nsyNxzBL4aNPjQq9ekG4Za4&libraries=places&callback=initAutocomplete" async defer></script>');
    $('head').append('<script type="text/javascript" src="../assets/js/localisationAPIAdresse.js">');

    $(document).ready(function () {
        $('.button').on('click', function () {
            $('.button').removeClass('active');
            $(this).toggleClass('active');
        });
    });
}
Template.recape.events({
    'click #paypal': function () {
       Session.set('methode','paypal');
    },
    'click #payer':function(){
        var amount = parseFloat(localStorage.getItem("montantcp"));
        var invoice_no = Random.id();
        var numb = localStorage.getItem("idcontre");
        payer ={}
        payer.prenom=$('#prenomrecap').val();
        payer.nom=$('#nomrecap').val();
        payer.adresse1=$('#adresserecap').val();
        payer.adresse2=$('#adressedeurecap').val();
        payer.pays=$('#autocomplete').val();
        payer.ville=$('#administrative_area_level_1').val();
        payer.codePostal = Number($('#postal_code').val());
        payer.num=amount;
        payer.invoice_no=invoice_no;
        payer.idcontrepartie=numb;
        payer.idUtilisateur=Meteor.userId();
        payer.idprojet=this._id;
        payer.statut="EnAttente";


        Meteor.call("insertPayment",payer);





        if(Session.get('methode')=='paypal') {


            Router.go("/payment/" + invoice_no + "/" + amount + "/" + numb + "/");
        }
    }

});