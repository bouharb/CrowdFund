/**
 * Created by wael on 10/03/2016.
 */
Template.tempp.onRendered(function() {

    $(document).ready(function() {

        var script = document.createElement("script");

        script.type="text/javascript";

        script.src = "assets/js/localisationAPI.js";

        $("#script_div").append(script);

    });

});
