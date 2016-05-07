/**
 * Created by wael on 13/03/2016.
 */
Template.header.helpers({
    notifications: function() {
        return Notifications.find({userId: Meteor.userId(), read: false});
    },
    notificationCount: function(){
        return Notifications.find({userId: Meteor.userId(), read: false}).count();
    },
    notificationPostPath: function() {
        return Router.routes.projetDetail.path({_id: this.projetId});
    },

});

Template.header.events({
    "click #demarrer": function () {
       //Session.set('utilisateurCourant',Random.id());
       // alert(Session.get('utilisateurCourant'))

    },
    'click a': function() {
        Notifications.update(this._id, {$set: {read: true}});
    },
    'keyup input#chercherCateg': function () {
        AutoCompletion.autocomplete({
            element: 'input#chercherCateg',       // DOM identifier for the element
            collection: Test,              // MeteorJS collection object
            field: 'categ',                    // Document field name to search for
            limit: 0,                      // Max number of elements to show
           // sort: { name: 1 }

            }

            );              // Sort object to filter results with
        //filter: { 'gender': 'female' }}); // Additional filtering



    },
    'click .search-box .icon':function(e){
        e.preventDefault()
        var categorie = $('#chercherCateg').val();
        Session.set("rechercheParCateg",categorie);
        Router.go("/listProjets");
    },
    'keyup .search-box input#chercherCateg':function(){

        var categorie = $('#chercherCateg').val();
        if(categorie=='') {
            Session.set("rechercheParCateg", categorie);
        }

    },
    "click #list":function(){
        Session.set("rechercheParCateg");

    }

});

Template.header.rendered = function() {
    //$('head').append('<script type="text/javascript" src="/assets/js/custom.js">');

    AutoCompletion.init("input#chercherCateg");
    jQuery(".search-box").addClass("open")
    jQuery(".search-box").css("border-right","solid 1px transparent");
    jQuery('.search-box input[type="text"]').stop().fadeIn(100, function(){jQuery(this).css("display","block");});

    jQuery(".search-box input[type='text']").focus(function(){
        if(jQuery(this).val()=="Recherche par categorie"){jQuery(this).val('');}
    });
    jQuery(".search-box input[type='text']").blur(function(){
        if(jQuery(this).val()==""){jQuery(this).val('Recherche par categorie');}
    });
    //  AutoCompletion.enableLogging = true;

}

