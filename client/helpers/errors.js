/**
 * Created by wael on 19/03/2016.
 */
Errors = new Meteor.Collection(null);
throwError = function(message) {
    Errors.insert({message: message});
};