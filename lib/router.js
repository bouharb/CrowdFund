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
//profileEdit _loginButtonsAdditionalLoggedInDropdownActions