/**
 * Created by wael on 19/03/2016.
 */
Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});
Template.error.onRendered(function() {
    var error = this.data;
    Meteor.setTimeout(function () {
        Errors.remove(error._id);
    }, 5000);
});