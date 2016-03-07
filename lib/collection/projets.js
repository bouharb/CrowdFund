/**
 * Created by wael on 05/03/2016.
 */

Projets = new Mongo.Collection("projets");
Posts = new Mongo.Collection('posts');
var Schemas = {};

Schemas.Projet = new SimpleSchema({
    titre: {
        type: String,
        label: "Title",
        max: 200
    },
    description: {
        type : String
    }
});
Projets.attachSchema(Schemas.Projet);