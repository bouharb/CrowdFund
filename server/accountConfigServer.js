/**
 * Created by wael on 02/03/2016.
 */
Accounts.onLogin(function() {

    if (Meteor.user().services.facebook) {
        var facebookId = Meteor.user().services.facebook.id;
        Meteor.users.update({
            _id: Meteor.userId()
        }, {
            $set: {
                "profile.display_picture": "http://graph.facebook.com/" + facebookId + "/picture?type=square"
            }
        });
      /*  analytics.identify( Meteor.userId(), {
            email: Meteor.user().emails[0].address,
            name: Meteor.user().profile.name
        });*/
    }
    return true;
});

Accounts.onCreateUser(function(options, user) {
    user.profile = options.profile || {};
    user.profile.avatar = "profile.png";

    return user;
});
/*
var users = [
    {name:"Admin",email:"adminn@example.com",roles:['admin']}
];


_.each(users, function (user) {
    var id;

    id = Accounts.createUser({
        email: user.email,
        password: "apple1",
        profile: { name: user.name }
    });

    if (user.roles.length > 0) {
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`
        Roles.addUsersToRoles(id, user.roles);
    }

});*/
