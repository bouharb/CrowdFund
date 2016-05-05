/**
 * Created by wael on 04/05/2016.
 */
Meteor.subscribe("tchat");
Meteor.subscribe("MesProjets");
Template.chat.helpers({
chat:function(){
    var x = Session.get("idpcontributeur");
    var id=Test.findOne({_id:x})._id;
    var iduserp=Test.findOne({_id:x}).createurProjet;
    return Chat.find({$and:[{projetId:id},{to:iduserp}]});
},
    chatCont:function() {
        var x = Session.get("idpcontributeur");
        var id = Test.findOne({_id: x})._id;
        var iduserp = Test.findOne({_id: x}).createurProjet;
        return Chat.find({$and: [{projetId: id},{userId:Meteor.userId()},{to: iduserp}]});
    }
});

Template.projetDetail.events({
    "click #sendmsg":function(){
         chat={}
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
        }
    }
});
