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
    	// libs
    	jquery: "http://code.jquery.com/jquery-1.9.1.min",
        knockout: 'knockout-2.2.1',
        bootstrap: 'bootstrap.min',
        underscore: 'underscore-min',
        jfeed: 'jquery.jfeed.pack',
        hashchange: 'jquery.ba-hashchange.min',
        pager: 'pager.min',
        // require.js plugins
        goog: '../plugins/goog',
        async: '../plugins/async',
        propertyParser: '../plugins/propertyParser',
    },
    shim: {
    	'hashchange': ['jquery'],
    	'bootstrap': ['jquery'],
    	'underscore': {
    		exports: '_'
    	},
    	'pager': ['hashchange']
    },
    waitSeconds: 10,
    urlArgs: "bust=" +  (new Date()).getTime()
});
    
require(['knockout', 'app/conf', 'pager', 'bootstrap', 'plugin/domReady!'], function(ko, conf, pager) {
	
	require(['app/vm_home', 'app/vm_games', 'app/vm_oss'], 
			function(HomeViewModel, GamesViewModel, OSSViewModel) {
		
		// use #!/ instead of the default #
		//pager.Href.hash = '#!/';		
		
		// master view model
		var viewModel = {
				navlis: {
			       'home': 'mhome',
			       'games': 'mgames',
			       'oss': 'moss',
			       'bio': 'mabout',
			       'contact': 'mabout'
				},
				pg_home: ko.observable(),
				pg_games: ko.observable(),
				pg_oss: ko.observable(),
				
				// Routines
				beforePageHide: function(data) {
					// Leer
				},
				beforePageDisplayed: function(data) {
					$('#menu').children('li').removeClass('active');
					$('#' + viewModel.navlis[data.currentId]).addClass('active');
				},
				// Behaviours
//				gotoAnchor: function(to) {
//					var that = this;
//					$(to).closest('li').toggleClass('active');
//					$('#' + to.lid).toggleClass('active');
//					$('#' + to.lid).siblings().removeClass('active');
//					location.href = to.href;
//				}		
		};
		
		// child view-models
		
		var home = new HomeViewModel(viewModel, conf);
		home.init(function(err) {
			home.render('#pane-home');
		});
		
		var games = new GamesViewModel(viewModel);
		games.init(function(err) {
			games.render('#pane-games');
		});
		
		var oss = new OSSViewModel(viewModel);
		oss.init(function(err) {
			oss.render('#pane-oss');
		});
		
		pager.extendWithPage(viewModel);
		ko.applyBindings(viewModel);
		pager.startHashChange('home');			
	});
});
