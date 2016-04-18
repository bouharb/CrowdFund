/**
 * Created by wael on 04/04/2016.
 */
ShareIt.configure({
    siteOrder: ['facebook', 'twitter','googleplus','pinterest'],
    sites: {
        'facebook': {
            'appId': '489429101240974',
            'version': 'v2.5',
            'buttonText': 'Partager sur facebook'
        },
        'twitter':{

        },
        'googleplus': {
        },
        'pinterest': {
        }
    },
    classes: "large btn", // string (default: 'large btn')
                          // The classes that will be placed on the sharing buttons, bootstrap by default.
    iconOnly: false,      // boolean (default: false)
                          // Don't put text on the sharing buttons
    applyColors: true,     // boolean (default: true)
    // apply classes to inherit each social networks background color
    faSize: '',            // font awesome size
    faClass: ''
});
/*
AdminConfig = {
    name: 'My App',
    adminEmails: ['adminn@example.com'],
    collections: {
        Test: {
            icon: 'pencil',
            tableColumns: [
                {label: 'Title', name: 'title'},
                {label: 'Published', name: 'published'},
                {label: 'User', name: 'owner', template: 'profil'}
            ]
        }}
};*/
//Roles.addUsersToRoles("zZJ7c3xWsrkMGDwWK", ['admin']);
//var x = Houston._admins.findOne({user_id:"zZJ7c3xWsrkMGDwWK"})
if(Meteor.userId()=="zZJ7c3xWsrkMGDwWK") {
    Houston.menu({
        'type': 'link',
        'use': 'https://mixpanel.com/login/',
        'title': 'Analytics',
        'target': 'blank'
    });
}

/*
Accounts.createUser( function(user, error )  {


    analytics.identify( Meteor.userId(), {
        email: Meteor.user().emails[0].address,
        name: Meteor.user().profile.name

    });
    return user;
});*/