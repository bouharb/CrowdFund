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

    $(document).ready(function() {
        $('.button').on('click', function() {
            $('.button').removeClass('active');
            $(this).toggleClass('active');
        });
    });
}