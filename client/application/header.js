/**
 * Created by wael on 13/03/2016.
 */

Template.header.events({
    "click #demarrer": function () {
       //Session.set('utilisateurCourant',Random.id());
       // alert(Session.get('utilisateurCourant'))


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
    },
    'keyup .search-box input#chercherCateg':function(){

        var categorie = $('#chercherCateg').val();
        if(categorie=='') {
            Session.set("rechercheParCateg", categorie);
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
    var routeName = Router.current().route.getName();
    console.log(routeName)
}

