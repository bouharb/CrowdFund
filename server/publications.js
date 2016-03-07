/**
 * Created by wael on 04/03/2016.
 */
Meteor.publish("images", function(){ return Images.find(); });
Meteor.publish('items', function() {
    return Items.find();
});

Meteor.publish('uploads', function() {
    return Uploads.find();
})
