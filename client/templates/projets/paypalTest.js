/**
 * Created by wael on 31/03/2016.
 */

Template.paypalTest.helpers({
    isCheckingOut:function(){
        debugger
        return Session.equals('isCheckingOut',true);
    }
});


Template.paypalCreditCardForm.events({
    'submit #paypal-payment-form': function(evt, tmp){
        evt.preventDefault();

        var card_data = Template.paypalCreditCardForm.card_data();

        //Probably a good idea to disable the submit button here to prevent multiple submissions.

        Meteor.Paypal.purchase(card_data, {total: '100.50', currency: 'USD'}, function(err, results){
            if (err) console.error(err);
            else console.log(results);
        });
    }
});