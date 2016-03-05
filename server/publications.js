/**
 * Created by wael on 04/03/2016.
 */
Meteor.publish("images", function(){ return Images.find(); });