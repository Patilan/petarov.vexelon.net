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
//				},
	};
	
	window.viewModel = viewModel;
	
	// define view models loader
	window.vms = {};
	
    window.requireVM = function(module) {
	    return function (callback) {
	    	if (!window.vms[module]) {
	    		
		    	require(['app/' + module], function(VModel) {
					var vm = new VModel(window.viewModel, conf);
					vm.init(function(err) {
						vm.render();
//							callback(vm);
					});
					window.vms[module] = vm;
					callback(vm);
		    	});
		    	
	    	}
	    };
	};
	
	// setup pager
	pager.extendWithPage(viewModel);
	ko.applyBindings(viewModel);
	pager.startHashChange();	
	
});
