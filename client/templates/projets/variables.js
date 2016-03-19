/**
 * Created by wael on 10/03/2016.
 */
Template.registerHelper( 'v', function() {
    var routeName = Router.current().route.getName();
    if(routeName=='demarrerProjet')
        return false;
    return true;
});
Template.registerHelper( 'cv', function(a) {
    return a;
});
Template.registerHelper( 'cvc', function() {
    return 0;
});
Template.registerHelper( 'cvcv', function() {
    return b;
});

