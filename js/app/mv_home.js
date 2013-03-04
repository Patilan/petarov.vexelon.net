/*
 * Home MVVM
 */
define(['knockout', 'googleplusapi.compressed'], function(ko) {
	
	return function HomeViewModel() {
		// Data
		var self = this;
		
		self.posts = ko.observableArray();
		self.commits = ko.observableArray();
		
		// Behaviours
		self.clickr = function(url) {
			window.location.href = url.link;
		};
		self.clickr1 = function(url) {
			window.location.href = url.link;
		};
		
		// Client-side routines
	
		self.init = function(callback) {
			var that = this;
			
		    var apiKey = 'AIzaSyCpdmuyNHOGzOvLCsN2OmtZ7w_z-3wxnn8';
		    var userId = '101695111306977669026';	
			var GoogleAPI = new GooglePlusAPI(apiKey);
			
			GoogleAPI.listActivities(userId, {'maxResults': 3}, function(error, result) {
				console.log(result);
				
				for (var i = 0; i < result.items.length; i++) {
					that.posts.push( {content: result.items[i].object.content, link: result.items[i].url } );
				}
				
				// GitHub
				$.ajax({dataType: 'jsonp',
					jsonp: 'callback',
					url: 'https://api.github.com/users/petarov/repos', 
					data: { 'type': 'public', 'sort': 'pushed', 'direction': 'desc' },
					crossDomain: 'true'
			  	}).done(function(data) {
		//				console.log(data);
			  			
						for (var i = 0; i < data.data.length; i++) {
							that.commits.push( {content: data.data[i].name, link: data.data[i].html_url } );
						}
						
						// apply bindings
						
						callback(that);
						
			  	}).fail(function(err) {
			  		console.log('fail');
			  		console.log(err);
			  	});			
			});
		};
	};
});
