/**
 * Created by wael on 05/04/2016.
 */



    Template.payement.events({
        'click .paymentButton': function () {
            var amount = parseFloat($('[name="amountInput"]').val());
            if (isNaN(amount)) {
                alert("Please enter a valid amount");
                return;
            }
            var invoice_no = $('[name="invoiceNoInput"]').val();
            if (invoice_no == '') {
                alert("Please enter Invoice No");
                return;
            }

            Router.go("/payment/" + invoice_no + "/" + amount + "/");

        }
    });


if (Meteor.isServer) {
    Meteor.startup(function () {

        //TO DO: Change this to whatever URL you like
        // process.env.ROOT_URL = "http://getfynd.meteor.com/";
        process.env.ROOT_URL = "http://localhost:3000/payement/";
    });
}
