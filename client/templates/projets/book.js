/**
 * Created by wael on 19/03/2016.
 */
Template.addBook.events({
        'submit form': function( event )  {
        event.preventDefault();
}
});
Template.addBook.onRendered( function() {
    $( "#add-book" ).validate();
});
Template.addBook.onCreated(function() {
    Session.set('postSubmitErrors', {});
});
Template.addBook.helpers({
    errorMessage: function(field) {
        return Session.get('postSubmitErrors')[field];
    },
    errorClass: function (field) {
        return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
    }
});