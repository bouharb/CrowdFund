/**
 * Created by wael on 05/03/2016.
 */
if (Projet.find().count() === 0) {
    Projet.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    });

    Projet.insert({
        title: 'Meteor',
        url: 'http://meteor.com'
    });

    Projet.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    });
}