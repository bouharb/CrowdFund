/**
 * Created by wael on 02/03/2016.
 */
Router.configure({
    layoutTemplate: 'index',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn : function (){
        return [ Meteor.subscribe('comments'),Meteor.subscribe('notifications')];
    }
});
Router.route('/', {name: 'home'});
Router.route('/img',{name:'imageView'});
Router.route('/listProjets', {name: 'listProjets'});
Router.route('/profileEdit', {name: '_loginButtonsAdditionalLoggedInDropdownActions'});
Router.route('/profile', {name: 'profile'});
Router.route('/b', {name: 'addBook'});
Router.route('/recap',{name:'recap'});
Router.route('/test',{name:'test'});
Router.route('/strip',{name:'strip'})

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

Router.route('/contrePartie/:_id',{name: 'contrePartie',
    template:'contrePartie',
  /* waitOn :function(){
   return Meteor.subscribe('CP',Session.get("pp"));
    },*/

  data: function() {
     Session.set("p",this.params._id)
      console.log(this.params._id)
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
    this.route('/payment/:invoice_no/:amount/', {
        where: 'server',
        action: function() {
            var amount = parseInt(this.params.amount);
            var url = generate_URL_for_payment_authorization(this.params.invoice_no,this.params.amount);

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
    this.route('/payment_return/:invoice_no/:amount/', {
        where: 'server',
        onBeforeAction: function() {
            console.log("result");
            result = paypal_return(this.params.invoice_no,this.params.amount,this.params.query.token,this.params.query.PayerID);
            console.log(result);
            card={};
            if (result)
            {
                this.response.end("Payment captured successfully");
                console.log(this.params.invoice_no,this.params.amount,this.params.query.token,this.params.query.PayerID);
                card.num=this.params.invoice_no;
                Test.insert(card);


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