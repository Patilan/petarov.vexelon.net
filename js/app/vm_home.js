/*
 * Home VM
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define(['knockout', 'underscore', 'googleplusapi.compressed'], function(ko, _) {
	
	function HomeViewModel(pager, conf) {
		var self = this;
		
		// Data
		self.config = conf;
		self.pager = pager;
		self.posts = ko.observableArray();
		self.commits = ko.observableArray();
		
		// Behaviours
		self.render = function(to) {
			ko.applyBindings(self, $(to)[0]);
		};	
		
		self.clickr = function(url) {
			window.location.href = url.link;
		};
		self.clickr1 = function(url) {
			window.location.href = url.link;
		};
		
		// Constructor
		self.init = function(callback) {
			var that = this;
//			self.pager.extendWithPage(that);
			
			// nested fetch
			that.fetchGPlus(function(err) {
				if (err) {
					console.log('fetchGPlus failed!');
					
					// TODO
					return;
				}
				
				that.fetchGithubAtom(function(err) {
					if (err) {
						console.log('fetchGithubAtom failed!');
						
						// TODO
						return;
					}
					
					callback(that);
				});
			});
			
		};
		
		// Client-side routines
		
		/*
		 * Fetch GPlus posts
		 */
		self.fetchGPlus = function(callback) {
			var that = this;
			
		    var apiKey = 'AIzaSyCpdmuyNHOGzOvLCsN2OmtZ7w_z-3wxnn8';
		    var userId = '101695111306977669026';	
			var GoogleAPI = new GooglePlusAPI(apiKey);
			
			GoogleAPI.listActivities(userId, {'maxResults': that.config.google.maxPosts}, function(error, result) {
//				console.log(result);
				
				_.each(result.items, function(item) {
					that.posts.push( {content: item.object.content, link: item.url } );
				});
				
				// notify
				callback(error);
//				if (error) {
//					callback(error);
//				} else {
//					callback(null);
//				}
			});			
		};
		/*
		 * Fetch GitHub repos
		 */
		self.fetchGithub = function(callback) {
			var that = this;
			
			// GitHub
			$.ajax({dataType: 'jsonp',
				jsonp: 'callback',
				url: that.config.github.apiUrl + '/users/petarov/repos', 
				data: { 'type': 'public', 'sort': 'pushed', 'direction': 'desc' },
		  	}).done(function(data) {
	//				console.log(data);
		  		
				_.each(data.data, function(item) {
					that.commits.push( {content: item.name, link: item.html_url } );
				});		  		
		  			
				// notify
				callback(null);
					
		  	}).fail(function(error) {
		  		callback(error);
		  	});				
		};
		/*
		 * Fetch GitHub Atom/RSS info
		 */
		self.fetchGithubAtom = function(callback) {
			var that = this;
			
			var srv = 'http://' + window.location.hostname + window.location.pathname;
			
			// GitHub
			$.ajax({dataType: 'jsonp',
				jsonp: 'callback',
				url: srv + 'data/atom', 
				data: { 'url': that.config.github.atomUrl },
		  	}).done(function(data) {
				console.log(data);
				
				var xmldoc = $.parseXML(data.xml);
				$xml = $(xmldoc);
				
				$xml.find('entry').find('content').each(function(node) {
					that.commits.push( {content: $(this).text(), link: '' } );
//					console.log($(this).text());
				});
		  		
//				_.each(data.data, function(item) {
//					that.commits.push( {content: item.name, link: item.html_url } );
//				});		  		
		  			
				// notify
				callback(null);
					
		  	}).fail(function(error) {
		  		callback(error);
		  	});				
		};		
	};
	
	return HomeViewModel;
});
