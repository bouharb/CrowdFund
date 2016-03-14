/**
 * Created by wael on 06/03/2016.
 */
Uploads = new Mongo.Collection('uploads');

Uploads.allow({
    insert: function (userId, doc) {

        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true
    }
});