/**
 * Created by wael on 20/03/2016.
 */
Success = new Meteor.Collection(null);
throwSucces = function(message) {
    Success.insert({message: message});
};