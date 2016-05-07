/**
 * Created by wael on 08/03/2016.
 */
    CP= new Mongo.Collection('cp');
Soumission= new Mongo.Collection('soumission');
DemandeSuppression= new Mongo.Collection('demande');

Chatt=new Mongo.Collection('chatt');
PhotoCouverture= new Mongo.Collection('photoCouverture');

Test= new Mongo.Collection('test');
Test.allow({
    update: function(userId,doc) {
        return true
    }

});
