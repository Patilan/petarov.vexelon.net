"use strict"; // jshint ;_;

require.config({
	//By default load any module IDs from js/lib
	baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.	
    paths: {
    	app: '../app',
    	plugin: '../plugins',
    	
    	jquery: "http://code.jquery.com/jquery-1.9.1.min",
        knockout: 'knockout-2.2.1',
        bootstrap: 'bootstrap.min',
        underscore: 'underscore-min',
        // Require JS plugins
        goog: '../plugins/goog',
        async: '../plugins/async',
        propertyParser: '../plugins/propertyParser',
    },
    waitSeconds: 10,
    shim: {
    	'bootstrap': ['jquery'],
    	'underscore': {
    		exports: '_'
    	}
    }
});
    
require(['knockout', 'bootstrap', 'googleplusapi.compressed', 'plugin/domReady!'], function(ko, goog) {
	
//    var apiKey = 'AIzaSyCpdmuyNHOGzOvLCsN2OmtZ7w_z-3wxnn8';
//    var userId = '101695111306977669026';	
//	var GoogleAPI = new GooglePlusAPI(apiKey);
	
	require(['app/vm_nav', 'app/vm_games'], function(NavViewModel, GamesViewModel) {
		var nav = new NavViewModel();
		nav.render('#nav-menu');
		
		var games = new GamesViewModel();
		games.init(function(that) {
			games.render('#pane-games');
		});
		
		
	});
	
//	require(['app/vm_home'], function(HomeViewModel) {
////		var home = new HomeViewModel();
////		home.render('#pane-home');
//		
////		home.init(function(that) {
////			that.render('#pane-home');
////		});
//	});
	
});
