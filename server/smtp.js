/**
 * Created by wael on 02/03/2016.
 */
Meteor.startup(function () {
    smtp = {
        username: 'wael.bouharb@gmail.com',   // eg: server@gentlenode.com
        password: 'killer1991*',   // eg: 3eeP1gtizk5eziohfervU
        server:   'smtp.gmail.com',  // eg: mail.gandi.net
        port: 465
    }


    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    Accounts.config({
        sendVerificationEmail: true,
        forbidClientAccountCreation: false
    });





     /*   Accounts.emailTemplates.resetPassword.text = function (user, url) {
            url = url.replace('#/', '')
            return " To reset your password, simply click the link below:\n\n"
                + url;
        };*/

});
