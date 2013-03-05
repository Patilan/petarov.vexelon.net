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
	
	require(['app/vm_nav', 'app/vm_home', 'app/vm_games', 'app/vm_oss'], 
			function(NavViewModel, HomeViewModel, GamesViewModel, OSSViewModel) {
		
		var nav = new NavViewModel();
		nav.init();
		nav.render('#nav-menu');
		
		var home = new HomeViewModel();
		home.render('#pane-home');
//		home.init(function(that) {
//			that.render('#pane-home');
//		});		
		
		var games = new GamesViewModel();
		games.init(function(that) {
			games.render('#pane-games');
		});
		
		var oss = new OSSViewModel();
		oss.init(function(that) {
			oss.render('#pane-oss');
		});		
		
		
	});
});
