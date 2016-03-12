/**
 * Created by wael on 02/03/2016.
 */
Router.configure({
    layoutTemplate: 'index',
    loadingTemplate: 'loading'
});
Router.route('/', {name: 'home'});
Router.route('/listProjets', {name: 'listProjets'});
Router.route('/profileEdit', {name: '_loginButtonsAdditionalLoggedInDropdownActions'});
Router.route('/adresse', {name: 'adresse'});
Router.route('/log', {name: 'login'});
Router.route('/logi', {name: 'logini'});



/*Router.route('/demarrer', {
        name: 'demarrerProjet',

});*/
Router.route('/ass', {
    name: 'testt',
});

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

                Meteor.subscribe('uploads')
            ];
        },
        data: function () {
            return {

                uploads: Uploads.find()
            }
        }
    });
});