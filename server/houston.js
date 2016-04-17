

Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
Houston.methods("test", {
    "Publier": function (post) {
        Test.update(post._id, {$set: {verifer: true}});
        return post.name + " published successfully.";
    }
});
Houston.methods("admins", {
    "Publier": function (post) {
        Houston._admins.update(post._id, {$set: {verifer: true}});
        return post.name + " published successfully.";
    }
});

/*
Houston.menu({
    'type': 'template',
    'use': 'home',
    'title': 'Analytics'
});*/
/*
Houston.menu({
   'type': 'link',
    'use': 'http://google.com',
    'title': 'Google',
    'target': 'blank'
});
/*
AdminConfig = {
    collections: {
        Test: {}
    }
};*/