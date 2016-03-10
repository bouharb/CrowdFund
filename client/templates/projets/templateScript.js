/**
 * Created by wael on 10/03/2016.
 */
Template.temp.onRendered(function() {

    $(document).ready(function() {

        var script = document.createElement("script");

        script.type="text/javascript";

        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpeynhXl0nsyNxzBL4aNPjQq9ekG4Za4&libraries=places&callback=initAutocomplete";

        $("#script_div").append(script);

    });

});
