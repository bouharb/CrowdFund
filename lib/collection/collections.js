/**
 * Created by wael on 08/03/2016.
 */
    CP= new Mongo.Collection('cp');

Test= new Mongo.Collection('test');
Test.allow({
    update: function(userId,doc) {
        return true
    }

});
