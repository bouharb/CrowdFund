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
        if(jQuery(".nav-header-right").hasClass("mobile")){
            jQuery("#navbar-toggle").addClass("collapsed");
            jQuery(".nav-header-right").removeClass("mobile");
            jQuery(".nav-header-right").css("display", "none");
            jQuery("#navbar-toggle i").removeClass("fa-minus");
            jQuery("#navbar-toggle i").addClass("fa-bars");
        }

    },
    "click #navbar-toggle":function(){
        jQuery(".dropdown-menu").css("left", 0);
    },
    'click #pathhh': function() {
        console.log(this._id);
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
        if(jQuery(".nav-header-right").hasClass("mobile")){
            jQuery("#navbar-toggle").addClass("collapsed");
            jQuery(".nav-header-right").removeClass("mobile");
            jQuery(".nav-header-right").css("display", "none");
            jQuery("#navbar-toggle i").removeClass("fa-minus");
            jQuery("#navbar-toggle i").addClass("fa-bars");
        }

    },
    "click #faqq":function(){

            if(jQuery(".nav-header-right").hasClass("mobile")){
                jQuery("#navbar-toggle").addClass("collapsed");
                jQuery(".nav-header-right").removeClass("mobile");
                jQuery(".nav-header-right").css("display", "none");
                jQuery("#navbar-toggle i").removeClass("fa-minus");
                jQuery("#navbar-toggle i").addClass("fa-bars");
            }

        }




});

Template.header.rendered = function() {


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

