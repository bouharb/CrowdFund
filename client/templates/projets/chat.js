/**
 * Created by wael on 04/05/2016.
 */
Meteor.subscribe("tchat");
Meteor.subscribe("tchatt");
Meteor.subscribe("MesProjets");
Template.chat.helpers({
    msgs:function(){
        var result=Chatt.findOne({_id:Session.get('chatid')});
        if(result){
            return result.messages;
        }
    },
    msg:function (){
        var result=Chatt.findOne({_id:Session.get("chatidd")});
        if(result)
        {
            return result.messages;
        }
    },
chat:function(){
    var x = Session.get("idpcontributeur");
    var id=Test.findOne({_id:x})._id;
    var iduserp=Test.findOne({_id:x}).createurProjet;
    return Chat.find({projetId:id});
},
    chatCont:function() {
        var x = Session.get("idpcontributeur");
        var id = Test.findOne({_id: x})._id;
        var iduserp = Test.findOne({_id: x}).createurProjet;
        if(iduserp!=undefined)
        return Chat.find({$and: [{projetId: id},{userId:Meteor.userId()},{to: iduserp}]});
    },
    contributeursC:function() {
       var x = Contributeur.find({IdProjet: this._id}).map(function (elem) {

            return elem.Idcontributeur;
        });
        return Meteor.users.find({_id: {$in: x}})
    },
    propP:function(){
        var x = Session.get("idpcontributeur");
        var iduserp = Test.findOne({_id: x}).createurProjet;
            //
       if(iduserp!=undefined)
        return Meteor.users.find({_id:iduserp});
    }
});

Template.chat.events({
    "click #sendmsg":function(){
     /*    chat={}
        var too = $("#uchat").attr("idd");
        console.log(too);
        var element=$('input:radio[name=idutilisateur]:checked').val();
        console.log(element)
        var x = Session.get("idpcontributeur");
        var iduserp=Test.findOne({_id:x}).createurProjet;
        var idp=Test.findOne({_id:x})._id;
        var m=$('#message').val();
        if(iduserp!=Meteor.userId()){
            if(m=='')
            {
                Bert.alert( 'S\'il vous plait , écrivez quelque chose', 'danger' );
            }
            chat.projetId=idp;
            chat.body = $('#message').val();
           // chat.from=Meteor.userId();
            chat.to=iduserp;
           // console.log(chat)
            Meteor.call("ajouterMessage",chat);
        }
        if(iduserp==Meteor.userId()){
                 if(element==''||element==undefined||element==null){

                    Bert.alert( 'Vous devez selectionner un utilisateur ', 'danger' );
                 }
                     else if(m=='')
                 {
                     Bert.alert( 'S\'il vous plait , écrivez quelque chose', 'danger' );
                 }
            else{
                chat.projetId=idp;
                chat.body = $('#message').val();
                // chat.from=Meteor.userId();
                chat.to=too;
                     Meteor.call("ajouterMessage",chat);
            }
        }*/
        var x = Session.get("idpcontributeur");
        var iduserp=Test.findOne({_id:x}).createurProjet;
        var idp=Test.findOne({_id:x})._id;
        var user = Meteor.users.findOne({_id:Meteor.userId()});

        var useri = Meteor.users.findOne({_id:Meteor.userId(),'profile.avatar': {$exists: true}});
        var fb= Meteor.users.findOne({_id:Meteor.userId(),'services.facebook': {$exists: true}});
        if(fb!=null||fb!=undefined)
        {
            autoritaireMessageChat=fb.profile.name;
        }
        else{
            autoritaireMessageChat=user.profile.prenom;
        }
        if(useri==null||useri==''||useri==undefined){
            idimage="profile.png"
        }
        else{
            idimage=useri.profile.avatar;
        }
        var name = autoritaireMessageChat;
        var messagee = $('#message').val();
        if (messagee !== '') {

            var de=Meteor.call("updateMSG",{"_id":Session.get("chatid")},{$push:{messages:{
                name: name,
                text: messagee,
                createdAt: new Date(),
                projetId:idp,
                image:idimage,
                userId:Meteor.userId(),
                author:autoritaireMessageChat
            }}},Meteor.userId(),idp,autoritaireMessageChat);



            document.getElementById('message').value = '';
            messagee = '';
        }

    else
    {
        alert("login to chat");
}
    },
    "click #userchat":function(e){
        e.preventDefault();
        var too = $("#userchat").attr("use");

       Session.set("currentIdChat",too);

      var res=   Chatt.findOne({chatIds:{$all:[this._id,Meteor.userId()]}})
    if(res){
        Session.set("chatid",res._id);
    }
        else {
        var newChat = Meteor.call("ajouterMessageC",{chatIds:[too,Meteor.userId()],messages:[]});
        Session.set("chatid",newChat);
    }
    }
});
