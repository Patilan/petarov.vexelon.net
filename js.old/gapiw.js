// Google Plus API
define(['conf', 'underscore', 'backbone'], function(config) {
     
    // http://dailyjs.com/2012/12/06/backbone-tutorial-2/
    
    function ApiManager() {
        this.loadGapi();
    }
    
    _.extend(ApiManager.prototype, Backbone.Events);
    
    ApiManager.prototype.init = function() {
        var self = this;
        console.log('initing')
        gapi.client.load('plus', 'v1', function() { 
            /* Loaded */ 
        });
        
        function handleClientLoad() {
            //gapi.client.setApiKey(config.apiKey);
            //window.setTimeout(checkAuth, 100);
        }
        
        function checkAuth() {
            //gapi.auth.authorize({ client_id: config.clientId, scope: config.scopes, immediate: true }, handleAuthResult);
        }
        
        function handleAuthResult(authResult) {
        }
        
        handleClientLoad();
    };
    
    ApiManager.prototype.loadGapi = function() {
        var self = this;
        
        // Don't load gapi if it's already present
        if (typeof gapi !== 'undefined') {
            return this.init();
        }
        
        require(['https://apis.google.com/js/client.js?onload=define'], function() {
            // Poll until gapi is ready
            function checkGAPI() {
                if (gapi && gapi.client) {
                    self.init();
                } else {
                    setTimeout(checkGAPI, 100);
                }
            }
        
            checkGAPI();
        });        
    };
    
    ApiManager.prototype.readActivities = function(callback) {
        var request = gapi.client.plus.activities.list({
            'userId': config.clientId, 
            'maxResults': 10,
            'collection': 'public'});
            
        request.execute(function(resp) { 
            if (callback) 
                callback(resp);
        });    
    }
    
    Backbone.sync = function(method, model, options) {
        options || (options = {});
        
        switch (method) {
            case 'create':
            break;
            
            case 'update':
            break;
            
            case 'delete':
            break;
            
            case 'read':
            break;
        }
    };
    
    return ApiManager;
});
//
//define(['async!https://apis.google.com/js/client.js'], function() {
//
//    var GApi = Backbone.Model.extend({
//        defaults: {},
//        initialize: function() {
//            // Leer
//        },
//        load: function(apiKey, callback) {
//            if (typeof gapi != 'undefined') {
//                // no need to load > 1
//               // return;
//            }
//            
//            if (gapi && gapi.client) {
//                gapi.client.load('plus', 'v1', function() {
//                    gapi.client.setApiKey(apiKey);    
//                    
//                    if (callback)
//                        callback();
//                });                
//            } else {
//                console.log('not yet loded')
//            }
//            
//
//        },
//        readActivities: function(userId, callback) {
//            var request = gapi.client.plus.activities.list({
//                'userId': userId, 
//                'maxResults': 10,
//                'collection': 'public'});
//                
//            request.execute(function(resp) { 
//                if (callback) 
//                    callback(resp);
//            });    
//        }
//    });
//    
//    return GApi;
//});