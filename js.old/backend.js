// start it up


//$(document).ready(function() {

    // Configure shortcuts and includes
    require.config({
        //appDir: '.',
        //baseUrl: 'js',
        paths: {
            // Major libraries
            jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min',
            bootstrap: '../libs/bootstrap.min',            

            //            // Require.js plugins
            text: '../libs/text',
            async: '../libs/async',
            propertyParser: '../libs/propertyParser',
            goog: '../libs/goog',
            //            order: 'libs/require/order',

            // Just a short cut so we can put our html outside the js dir
            // When you have HTML/CSS designers this aids in keeping them out of the js directory
            tpl: '../tpl'
        },
        shim: {
            '../libs/underscore-min': {
                exports: '_'
            },
            '../libs/backbone-min': {
                deps: ['../libs/underscore-min'], exports: 'Backbone'
            },            
            'bootstrap': ['jquery'],
        },
        //urlArgs: "bust=" + (new Date()).getTime()
    });
    
    // Insert coin to continue ...
    require(['views/app', 'vm', 'gapiw'], function(AppView, vm, GApi) {
        
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
    
//});