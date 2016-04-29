

Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
Houston.methods("test", {

    "Publier": function (post) {
        var d=new Date()
        Test.update(post._id, {$set: {verifier: true,dateVerification:d}});
       var projet=  Test.findOne({_id:post._id})
        var user= Meteor.users.findOne({_id:projet.createurProjet})
        var u= Meteor.users.findOne({_id:projet.createurProjet,'services.facebook': {$exists: true}});
        if(u!=null||u!=undefined)
        {
           // console.log(u.services.facebook.email)
            mail= u.services.facebook.email;
        }
        else {
            Meteor.users.find({_id:projet.createurProjet}).map(function(elem)
            {
               // console.log("aaa",elem.emails[0].address)
                mail =elem.emails[0].address;
               // return  elem.emails[0].address;
            });
        }
      //  console.log(user.emails.address)
        Email.send({
            to: mail,
            from: "wael.bouharb@gmail.com",
            subject: "Example Email",
            text: "The contents of our email in plain text."
        });

        return post.basicInfo.titre + " publié avec succées.";
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
