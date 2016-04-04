/**
 * Created by wael on 04/04/2016.
 */
if (Meteor.isClient) {
    ShareIt.init({
        siteOrder: ['facebook', 'twitter','googleplus','pinterest'],
        sites: {
            'facebook': {
                'appId': '489429101240974',
                'version': 'v2.5',
                'buttonText': 'Partager sur facebook'
            },

        },

    });
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '489429101240974',
            status     : true,
            version    : 'v2.5',
            xfbml      : true
        });
    };
}