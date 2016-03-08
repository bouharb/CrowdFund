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
Router.route('/testP', {name: 'testP'});

//Router.route('/up', {name: 'imageUploader'});

Router.map(function () {
    this.route('demarrerProjet', {
        path: '/demarrer',
        waitOn: function() {
            return [
                Meteor.subscribe('items'),
                Meteor.subscribe('uploads')
            ];
        },
        data: function() {
            return {
                item: Items.findOne(),
                uploads: Uploads.find()
            }
        }
    });
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
