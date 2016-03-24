/**
 * Created by wael on 22/03/2016.
 */
Template.recap.rendered = function() {
    Session.get('template');
    $('head').append('<script type="text/javascript" src="dist/lang/summernote-fr-FR.js">');
    $('head').append('<script type="text/javascript" src="dist/summernote.min.js">');
    $('head').append('<script type="text/javascript" src="dist/summernote.js">');
    $(document).ready(function() {
        $('#summernoteRecap').summernote({
            height: 200,
            focus: true  ,
            lang :'fr-FR'
        });
    });


}

Template.recap.helpers({

    basicinf  : function(){
        return JSON.parse(sessionStorage.getItem('projet'));
    }

});