/**
 * Created by wael on 08/03/2016.
 */

Test= new Mongo.Collection('test');
Test.allow({
    update: function(userId,doc) {
        return true
    }

});
