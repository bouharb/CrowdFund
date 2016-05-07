
//console.log(Meteor.user()._id)



//if(ServerSession.equals("user", "6ei6zBdCpWMkn8ou8", identical = true)){
    Houston.add_collection(Houston._admins);
    Houston.add_collection(Meteor.users);
//}
/*
else {
    Houston.hide_collection(Houston._admins);
    Houston.hide_collection(Meteor.users);
}*/
/*
if(ServerSession.get("user")=="6ei6zBdCpWMkn8ou8")
{
    Houston.add_collection(Houston._admins);

    Houston.add_collection(Meteor.users);
}
else {


    Houston.hide_collection(Meteor.users);

    Houston.hide_collection(Houston._admins);



}
*/
Houston.methods("test", {

    "Publier": function (post) {
        var d=new Date()
        Test.update(post._id, {$set: {verifier: true,dateVerification:d,submitted:d,etat:"verifier"}});
       var projet=  Test.findOne({_id:post._id})
        var user= Meteor.users.findOne({_id:projet.createurProjet})
        var u= Meteor.users.findOne({_id:projet.createurProjet,'services.facebook': {$exists: true}});
        SSR.compileTemplate( 'htmlEmail', Assets.getText( 'html-email.html' ) );



        if(u!=null||u!=undefined)
        {
            var emailData = {
                titulaire: u.profile.name,
                titre: projet.basicInfo.titre,
                etat: "verifier"
            };
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
            var emailData = {
                titulaire: user.profile.prenom,
                titre: projet.basicInfo.titre,
                etat: "verifier"
            };
        }
      //  console.log(user.emails.address)
        Email.send({
            to: mail,
            from: "wael.bouharb@gmail.com",
            subject: "Verification de votre projet "+projet._id,
            html: SSR.render( 'htmlEmail', emailData )
        });

        return post.basicInfo.titre + " publié avec succées.";
    }
});
Houston.methods("houston_admins", {
    "Publier": function (post) {
   /*  hid=Houston._admins.findOne({_id:post._id}).user_id;
        console.log(hid)




            if(hid!=undefined||hid!=null) {*/
                Meteor.users.update(post.user_id, {$set: {"profile.role": "adminn"}});
         //   }
        return post._id + " published successfully.";
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
