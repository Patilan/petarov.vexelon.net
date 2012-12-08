// start it up


$(document).ready(function() {
    var apiKey = 'AIzaSyCpdmuyNHOGzOvLCsN2OmtZ7w_z-3wxnn8';
    var userId = '101695111306977669026';
    
    /**
     * Load required scenes and game data
     */           
    require([
        "js/gapi.js",
    ], function() {            
        
        gapi_load(apiKey, function() {
            console.log("GAPI loaded.");
            
            gapi_activities_read(userId, function(resp) {
                console.log(resp);
                $('#content').html(resp.items[0].title);
            });
            
        });            
    });        
    
    
});