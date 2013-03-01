// Google API


function gapi_load(apiKey, callback) {
    gapi.client.load('plus', 'v1', function() {
        gapi.client.setApiKey(apiKey);    
        
        if (callback)
            callback();
    });
}

function gapi_activities_read(userId, callback) {
    var request = gapi.client.plus.activities.list({
        'userId': userId, 
        'maxResults': 10,
        'collection': 'public'});
        
    request.execute(function(resp) { 
        if (callback) 
            callback(resp);
    });    
}

