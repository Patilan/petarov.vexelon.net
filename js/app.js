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
    	
    	jquery: "http://code.jquery.com/jquery-1.9.1.min.js",
        knockout: "knockout-2.2.1",
        bootstrap: "boostrap.min",
        
        goog: '../plugins/goog',
        async: '../plugins/async',
        propertyParser: '../plugins/propertyParser',
    },
    waitSeconds: 10,
    shim: {
    	 'bootstrap': ['jquery'],
    }
  });
    
require(['knockout', 'googleplusapi.compressed', 'plugin/domReady!'], function(ko, goog) {
	
    var apiKey = 'AIzaSyCpdmuyNHOGzOvLCsN2OmtZ7w_z-3wxnn8';
    var userId = '101695111306977669026';	
	var GoogleAPI = new GooglePlusAPI(apiKey);
	
	var myViewModel = {
		    personName: 'Bob',
		    personAge: 123
		};
	
	GoogleAPI.getPerson(userId, {}, function(error, result) {
		console.log(result);
		myViewModel.personName = result.displayName;
		ko.applyBindings(myViewModel);
	});

		
	
});
