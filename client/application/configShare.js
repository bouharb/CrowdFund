/**
 * Created by wael on 04/04/2016.
 */
ShareIt.configure({
    siteOrder: ['facebook', 'twitter','googleplus','pinterest'],
    sites: {
        'facebook': {
            'appId': '489429101240974',
            'version': 'v2.5',
            'buttonText': 'Partager sur facebook'
        },
        'twitter':{

        },
        'googleplus': {
        },
        'pinterest': {
        }
    },
    classes: "large btn", // string (default: 'large btn')
                          // The classes that will be placed on the sharing buttons, bootstrap by default.
    iconOnly: false,      // boolean (default: false)
                          // Don't put text on the sharing buttons
    applyColors: true,     // boolean (default: true)
    // apply classes to inherit each social networks background color
    faSize: '',            // font awesome size
    faClass: ''
});