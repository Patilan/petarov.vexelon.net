// start it up


//$(document).ready(function() {

    // Configure shortcuts and includes
    require.config({
        //appDir: '.',
        //baseUrl: 'js',
        paths: {
            // Major libraries
            jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min',
            underscore: '../libs/underscore-min', // https://github.com/amdjs
            backbone: '../libs/backbone-min', // https://github.com/amdjs
            bootstrap: '../libs/bootstrap.min',            
            gapi: '//apis.google.com/js/client.js?onload=load',
            
//    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
//    <script type="text/javascript" src="//apis.google.com/js/client.js?onload=load"></script>
//    <script type="text/javascript" src="libs/bootstrap.min.js"></script>
//    <script type="text/javascript" src="libs/underscore-min.js"></script>
//    <script type="text/javascript" src="libs/backbone-min.js"></script>
            

            //            // Require.js plugins
            text: '../libs/text',
            //            order: 'libs/require/order',

            // Just a short cut so we can put our html outside the js dir
            // When you have HTML/CSS designers this aids in keeping them out of the js directory
            tpl: '../tpl'
        },
        shim: {
            'bootstrap': ['jquery'],
            'backbone': ['underscore']
        },
        //urlArgs: "bust=" + (new Date()).getTime()
    });
    
    var apiKey = 'AIzaSyCpdmuyNHOGzOvLCsN2OmtZ7w_z-3wxnn8';
    var userId = '101695111306977669026';
    
    // Insert coin to continue ...
    require(['views/app', 'vm'], function(AppView, vm) {
        
        var appView = vm.create({}, 'AppView', AppView);
        appView.render();
        
        var SiteRouter = Backbone.Router.extend({
            routes: {
                // Pages
                'home': 'home',
                'games': 'games',
                'opensource': 'opensource',
                'about/:page': 'about',
                'about/:page': 'about',
                
                // Default - catch all
                '*actions': 'defaultAction'
            },
            initialize: function(options) {
                // Leer
                Backbone.history.start();
                
            },
            home: function() {
                // Home page - latest posts, commits
              require(['views/app'], function(homePage) {
                  var page = Vm.create(appView, 'HomePage', homePage);
                  page.render();
              });            
            },
            games: function() {
                // Games page
            },
            opensource: function() {
                // Projects
            },
            about: function(page) {
                // About - Bio & Contact
                
            }
        });        
        
//        Router.initialize({
//            appView: appView
//        }); // The router now has a copy of all main appview
    }); 
    
    /**
     * Load required scenes and game data
     */
//    require([
//        "js/gapi.js"
//    ], function() {  
//        
//        
//        
//        var view = new microblogWidget();
//        
//        gapi_load(apiKey, function() {
//            console.log("GAPI loaded.");
////            gapi_activities_read(userId, function(resp) {
////                console.log(resp);
////            });
//
//            
//            view.render();
//            
//        });            
//    });        
    
    
//});