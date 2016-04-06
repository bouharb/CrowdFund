/**
 * Created by wael on 05/04/2016.
 */


cred=  {
    username  : 'wael.bouharb-facilitator-1_api1.gmail.com',   //'limjohn75-facilitator_api1.gmail.com',
    password  : 'TZWJJMFBPG7NXE98',                      //'YLUADKL5592MUGWD',
    signature : 'AwWA9CBJE78PmhQUsRfgqHvD6LXnAmQGoiZe4kxnyPNgECOmGydmVC-y'                             //'A61U8Amg8DVOOQbM3dhS46toycjRAOfHRiEjlU-lhQfbuCfLUWidLo1Q'
};
/*
 cred =  {
 'host': 'api.sandbox.paypal.com',
 'port': '',
 'client_id': 'ARcdtQvaccdW-qfoNIJp_PhKOQ6P_BSxoVBUtm_iGBO8LRmDGhRUIXszKZWOS6r2LCd4xgHjTlIH4oL6',
 'client_secret': 'EMSHkpueXi4p2pjm2M4nQJyKybyS4AOLNkU5yTqnRANVHZP1UH4oeNYaLbrTypecNGgQxZvMZFqkAxWC'
 }
 */
opts= {
    sandbox : true,
    version : '78.0'
};
//this function is an internal function
function EC_url_request_payment_authorization(transaction, callback){

    PayPalEC = Meteor.npmRequire('paypal-ec');
    var ec = new PayPalEC(cred, opts );

    var params = {
        returnUrl : process.env.ROOT_URL + "payment_return/" + transaction.invoice_no + "/" + transaction.total + "/",
        cancelUrl : process.env.ROOT_URL + "payment_cancel/",
        SOLUTIONTYPE : 'sole' ,
        PAYMENTREQUEST_0_PAYMENTACTION :'Sale',
        PAYMENTREQUEST_0_CURRENCYCODE :transaction.currency,
        PAYMENTREQUEST_0_AMT : transaction.total,
        PAYMENTREQUEST_0_DESC : transaction.description,
        PAYMENTREQUEST_0_ITEMAMT :transaction.total,
        L_PAYMENTREQUEST_0_QTY0 : transaction.quantity,
        L_PAYMENTREQUEST_0_AMT0 :transaction.total,
        L_PAYMENTREQUEST_0_NAME0 :transaction.description,
        PAYMENTREQUEST_0_INVNUM : transaction.invoice_no
    };

    ec.set( params, function ( err, data ){

        if(err) {
            console.log("Error inside EC_process_payment");
            console.log(err);
            callback(err, "");
        }
        else {
            var url = data['PAYMENTURL'];
            callback(null, url);
        }

    });


}


// this function is an internal function
function EC_do_actual_payment(params, callback){

    PayPalEC = Meteor.npmRequire('paypal-ec');
    var ec = new PayPalEC(cred, opts );

    ec.do_payment( params, function ( err, data ){

        // really charge the user for the payment
        if(err) {
            console.log("Error inside EC_do_payment" + err);
        }
        else {
            callback(err, data);
        }
    });
}


generate_URL_for_payment_authorization = function (invoice_no, amount) {

    var transaction =
    {
        "invoice_no" : invoice_no,
        "currency": "EUR",
        "total": amount,
        "description": "Meteor demo for paypal payment",
        "quantity": 1,
        "itemprice": amount
    };

    var gists = Async.runSync(function (done) {
        EC_url_request_payment_authorization(transaction, function (error, url) {
            done(null, url);
        });
    });

    return gists.result;
};


paypal_return = function(invoice_no,amount, token, payerID){

    var params={
        "TOKEN" : token,
        "PAYERID" : payerID,
        SOLUTIONTYPE                   : 'sole' ,
        PAYMENTREQUEST_0_PAYMENTACTION :'Sale',
        PAYMENTREQUEST_0_CURRENCYCODE :'EUR',
        PAYMENTREQUEST_0_AMT :amount,
        PAYMENTREQUEST_0_DESC : "Meteor demo for paypal payment",
        PAYMENTREQUEST_0_INVNUM :invoice_no

    };


    var gists = Async.runSync(function (done) {
        EC_do_actual_payment( params, function ( err, data ) {
            if (err) {
                done(err,null);
            }
            else {
                done(null, data);
            }

        });
    });

    if (gists.error != null)
    {
        console.log(gists.error);
        return false;
    }

    return true;
};





