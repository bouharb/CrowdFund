/**
 * Created by wael on 02/03/2016.
 */
Router.configure({
   layoutTemplate: 'index',
   loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn : function (){
        return [ Meteor.subscribe('comments'),Meteor.subscribe('notifications'),Meteor.subscribe("paiment")];
    }
});
Router.route('/', {name: 'home'});
Router.route('/img',{name:'imageView'});
Router.route('/listProjets', {name: 'listProjets'});
Router.route('/profileEdit', {name: '_loginButtonsAdditionalLoggedInDropdownActions'});
Router.route('/profile', {name: 'profile',


    action:function(){

        if(Meteor.userId())
            return this.render('profile');
        return this.render('interdit');
    }


});
Router.route('/b', {name: 'addBook'});
Router.route('/recap',{name:'recap'});
Router.route('/test',{name:'test'});
Router.route('/strip',{name:'strip'})
Router.route('/header',{name:'header'})



Router.route('/recape/:_id',{name: 'recape',
    template:'recape',

    data: function() {

        return Test.findOne(this.params._id);

    },


});


Router.route('/paypal',{name:'paypalTest'});
//Router.route('/contrePartie',{name:'contrePartie'});

Router.route('/projetDetail/:_id',{name: 'projetDetail',
    template:'projetDetail',
    waitOn: function() {
        Session.set("pp",this.params._id)

        return Meteor.subscribe('comments', this.params._id);
    },

    data: function() {
        var cp = Test.findOne(this.params._id);

        var cp_id = this.params._id;
        return cp;
        //{"cp": cp, "cpp" : cp_id }
        }
});

Router.route('/modificationProjetuser/:_id',{name: 'modificationProjetuser',
    waitOn: function() {
        Session.set("pp",this.params._id)

        return Meteor.subscribe('comments', this.params._id);
    },

    data: function() {
        cpmpu = Test.findOne(this.params._id);

        var cp_id = this.params._id;
        return cpmpu;
        //{"cp": cp, "cpp" : cp_id }
    },
    action:function(){

        if(cpmpu.createurProjet==Meteor.userId())
            return this.render('modificationProjetuser');
        return this.render('interdit');
    }
});

Router.route('/actu/:_id',{name: 'actu',
    waitOn: function() {

        return Meteor.subscribe('actualiter');
    },

    data: function() {
         cpactu = Test.findOne(this.params._id);
        return cpactu;
    },
   action:function(){

        if(cpactu.createurProjet==Meteor.userId())
            return this.render('actu');
        return this.render('actu');
    }
});

Router.route('/listActu/:_id',{name: 'listActu',
    waitOn: function() {

        return Meteor.subscribe('actualiter');
    },
    data: function() {
        cplActu = Test.findOne(this.params._id);
        return cplActu;
    },
    action:function(){

        if(cplActu.createurProjet==Meteor.userId())
            return this.render('listActu');
        return this.render('interdit');
    }
});
Router.route('/modifActu/:_id',{name: 'modifActu',

    waitOn: function() {

        return Meteor.subscribe('actualiter');
    },

    data: function() {
         cpuser = Test.findOne(this.params._id);


        return cpuser;
    },
     action:function(){

     if(cpuser.createurProjet==Meteor.userId())
     return this.render('modifActu');
         return this.render('interdit');
     }
});


Router.route('/modifierContrePartie/:_id',{name: 'modifierContrePartie',

    waitOn: function() {

        return Meteor.subscribe('CP');
    },

    data: function() {
         cpmuser = Test.findOne(this.params._id);
        return cpmuser;
    },
    action:function(){
        if(cpmuser.createurProjet==Meteor.userId())
            return this.render('modifierContrePartie');
        return this.render('interdit');
    }
});

Router.route('/modifierInfoPersonnel/:_id',{name: 'modifierInfoPersonnel',
    data: function() {
        cpip = Test.findOne(this.params._id);
        return cpip;
    },
    action:function(){
        if(cpip.createurProjet==Meteor.userId())
            return this.render('modifierInfoPersonnel');
        return this.render('interdit');
    }
});

Router.route('/modifierEtapeOne/:_id',{name: 'modifierEtapeOne',
    waitOn: function() {

        return Meteor.subscribe('CP');
    },

    data: function() {
         cpOne = Test.findOne(this.params._id);


        return cpOne;
    },
    action:function(){
        if(cpOne.createurProjet==Meteor.userId())
            return this.render('modifierEtapeOne');
        return this.render('interdit');
    }
});

Router.route('/modifierEtapeTrois/:_id',{name: 'modifierEtapeTrois',
    data: function() {
         cpTrois = Test.findOne(this.params._id);
        return cpTrois;
    },
    action:function(){
        if(cpTrois.createurProjet==Meteor.userId())
            return this.render('modifierEtapeTrois');
        return this.render('interdit');
    }

});


Router.route('/contrePartie/:_id',{name: 'contrePartie',
    template:'contrePartie',
   waitOn :function(){
   return Meteor.subscribe('CP');
    },

  data: function() {
     Session.set("p",this.params._id)
        return Test.findOne(this.params._id);
     // Meteor.subscribe('CP', this.params._id);
    },

   // data: function() { return Test.findOne(this.params._id); }
});

Router.route('/payement/:_id',{name: 'payement',
    template:'payement',

    data: function() {

        return Test.findOne(this.params._id);

    },


});

/*
Router.route('contrePartie', {
    path: 'contrePartie/:id',
    data :function(){
    var currentContrepartie=this.params._id;
     return Test.findOne({_id:currentContrepartie})
    },
    waitOn: function(){
        return Meteor.subscribe('CP',this.params.id);
    }
});*/
//Router.route('/pro',{name : 'projetDetail'});


/*Router.route('/demarrer', {
        name: 'demarrerProjet',

});*/

//profileEdit _loginButtonsAdditionalLoggedInDropdownActions
/*
Router.route '#/reset_password/:token',
    name: 'reset_password'
onBeforeAction: function()
if Meteor.userId() then this.redirect('/')
else this.next()
Accounts._resetPasswordToken = this.params.token
    */
/*
Router.route('/reset-password', {name: 'resetPassword'});

Router.route('/reset-password/:token', function () {
    this.render('resetPassword');
});*/
Router.route('/summer', {name: 'summer'});


Router.map(function () {
    this.route('demarrerProjet', {
        path: '/demarrer',
        waitOn: function () {
            return [

                Meteor.subscribe('uploads'),

            ];
        },
        data: function () {
            return {

                uploads: Uploads.find()
            }
        }
    });
});



Router.map(function() {
    this.route('/google/', {
        where: 'server',
        action: function() {

            this.response.writeHead(301, { 'Location': "http://www.google.com"});
            this.response.end();
        }
    });
});

Router.map(function() {
    this.route('/payment/:invoice_no/:amount/:numb', {
        where: 'server',
        action: function() {
          //  var invoice_no = parseInt(this.params.invoice_no);
            var amount = parseFloat(this.params.amount);
            var url = generate_URL_for_payment_authorization(this.params.invoice_no,this.params.amount,this.params.numb);

            if (url == null)
            {
                this.response.end("error");
            }
            this.response.writeHead(301, { 'Location': url});
            this.response.end();
        }
    });
});
Router.map(function() {
    this.route('/payment_return/:invoice_no/:amount/:numb', {
        where: 'server',
        waitOne: function(){
            return [Meteor.subscribe("MesProjets"),Meteor.subscribe("MesContributions")]
        },
       /* 'subscriptions':function(){
            return Meteor.subscribe("paiment")
        },*/
        onBeforeAction: function() {

            result = paypal_return(this.params.invoice_no,this.params.amount,this.params.numb,this.params.query.token,this.params.query.PayerID);
            card={};
            if (result)
            {
                this.response.end("Payment captured successfully");
                console.log(this.params.invoice_no,this.params.amount,this.params.numb,this.params.query.token,this.params.query.PayerID);
                card.idcontrepartie=this.params.numb;
                card.num=this.params.amount;
                card.invoice_no=this.params.invoice_no
             /*   analytics.track( 'Made a purchase', {
                    revenue: this.params.amount
                });*/

                Meteor.call("insertPayment",card);
             ///  card.idutilisateur=this.userId;
             //   console.log(Meteor.user())
                var x =this.params.numb;
               var id= Payement.findOne({$and:[{idcontrepartie:x},{invoice_no:this.params.invoice_no}]})
                var idcp=CP.findOne({_id:id.idcontrepartie})
             //   console.log(id)
               var idp= Test.findOne({_id:idcp.idprojet})
                console.log(idp._id)
                var userId = CurrentUserId;
                amountc=parseFloat(this.params.amount);

                Test.update(idp._id, {$inc: {montantcollecter: amountc}});
                //var xxx=Test.find({$and:[{_id:idp._id, idcontributeur:{$elemMatch:{$eq:"ookafokofo"}}}]})
               // console.log(xxx)
                pourcent=(idp.montantcollecter/idp.basicInfo.montant)*100;
                Test.update(idp._id, {$set: {pourcentage: pourcent}});
                Test.update(idp._id, {$inc: {nbrcontributeur: 1}});
                contribution={}
                contribution.Idcontributeur=userId;
                contribution.IdProjet=idp._id;
                contribution.montant=parseFloat(this.params.amount);
               var cont=Contributeur.findOne({$and:[{Idcontributeur:userId},{IdProjet:idp._id}]})
                console.log(CurrentUserId)
               if((cont==null)||(cont==undefined)) {
                    Contributeur.insert(contribution);
               }
                else {
                   Contributeur.update({$and:[{IdProjet:idp._id},{Idcontributeur:userId}]}, {$inc: {montant: amountc}});
                   console.log(amountc)
               }


                // Payement.insert(card);


                //Session.set("resultat",this.params.invoice_no,this.params.amount,this.params.query.token,this.params.query.PayerID);
            }
            else
            {
                this.response.end("Error in processing payment");
            }


        }
    });
});
Router.map(function() {
    this.route('/payment_cancel/', {
        where: 'server',
        onBeforeAction: function() {
            this.response.end("Payment Cancelled");
        }
    });
});
/*
Router.route('/payement', function () {
    this.render('payement');
});
*/