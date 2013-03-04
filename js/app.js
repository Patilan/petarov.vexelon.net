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
        // Require JS plugins
        goog: '../plugins/goog',
        async: '../plugins/async',
        propertyParser: '../plugins/propertyParser',
    },
    waitSeconds: 10,
    shim: {
    	 'bootstrap': ['jquery'],
    	 'gh3': ['underscore-min'],
    }
  });
    
require(['knockout', 'bootstrap', 'googleplusapi.compressed', 'gh3', 'plugin/domReady!'], function(ko, goog) {
	
    var apiKey = 'AIzaSyCpdmuyNHOGzOvLCsN2OmtZ7w_z-3wxnn8';
    var userId = '101695111306977669026';	
	var GoogleAPI = new GooglePlusAPI(apiKey);
	
	var myViewModel = {
		    personName: 'Bob',
		    personAge: 123
		};
	
//	GoogleAPI.getPerson(userId, {}, function(error, result) {
//		console.log(result);
//		myViewModel.personName = result.displayName;
//		ko.applyBindings(myViewModel);
//	});
	
	GoogleAPI.listActivities(userId, {'maxResults': 3}, function(error, result) {
		console.log(result);
		
		var posts1 = [];
		
		for (var i = 0; i < result.items.length; i++) {
			posts1.push( {content: result.items[i].object.content, link: result.items[i].url } );
		}
		
		// GitHub
		$.ajax({dataType: 'jsonp',
			jsonp: 'callback',
			url: 'https://api.github.com/users/petarov/repos', 
			data: { 'type': 'public', 'sort': 'pushed', 'direction': 'desc' },
			crossDomain: 'true'
	  	}).done(function(data) {
//				console.log(data);
	  			
				var commits1 = [];
				
				for (var i = 0; i < data.data.length; i++) {
					commits1.push( {content: data.data[i].name, link: data.data[i].html_url } );
				}
				
				ko.applyBindings({
					posts: ko.observableArray(posts1),
					clickr: function(url) {
						window.location.href = url.link;
					},
					commits: ko.observableArray(commits1),
					clickr1: function(url) {
						window.location.href = url.link;
					}				
			});
				
				
	  	}).fail(function(err) {
	  		console.log('fail');
	  		console.log(err);
	  	});		
		
		
	});	
	

});
