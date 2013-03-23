/*
 * Home VM
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define(['knockout', 'underscore', 'googleplusapi.compressed', 'moment'], function(ko, _) {
	
	function HomeViewModel(parent, conf) {
		var self = this;
		
		// Data
		self.config = conf;
		self.posts = ko.observableArray();
		self.posts.loading = ko.observable(true);
		self.posts.nextPageToken = ko.observable();
		self.commits = ko.observableArray();
		self.commits.loading = ko.observable(true);
		self.btnMoreText = ko.observable('Next (' + conf.google.maxPosts + ') &raquo;');
		
		// Behaviours
		
		self.showMore = function() {
			self.posts.loading(true);
			
			// nested fetch
			self.fetchGPlus(function(err) {
				self.posts.loading(false);	
				if (err) {
					console.log('fetchGPlus failed!');
					return;
				}
			}, self.posts.nextPageToken());	
		};
		
		self.init = function(callback) {
			var that = this;
			
			// nested fetch
			that.fetchGPlus(function(err) {
				if (err) {
					console.log('fetchGPlus failed!');
					callback(err);
					return;
				}
				
				// UI loaded
				self.posts.loading(false);				
				
				that.fetchGithubAtom(function(err) {
					if (err) {
						console.log('fetchGithubAtom failed!');
						callback(err);
						return;
					}
					// UI loaded
					self.commits.loading(false);
					callback(null);
				}); // eof fetchGithubAtom
			}); // eof fetchGPlus
			
		};
		
		self.render = function(to) {
			if (!to)  {
				to = '#page-home';
			}
			ko.applyBindings(self, $(to)[0]);
		};	
		
		/*
		 * Fetch GPlus posts
		 */
		self.fetchGPlus = function(callback, nextPageToken) {
			var that = this;
			
		    var apiKey = that.config.google.apiKey;
		    var userId = that.config.google.clientId;
			var GoogleAPI = new GooglePlusAPI(apiKey);
			
			var params = {'maxResults': that.config.google.maxPosts };
			if (nextPageToken) {
				params.pageToken = nextPageToken;
			}
			
			console.log(params);
			
			GoogleAPI.listActivities(userId, params, function(error, result) {
				
				console.log(result);
			
				self.posts.nextPageToken(result.nextPageToken);
				
				_.each(result.items, function(item) {
					that.posts.push({
						content: item.object.content, 
						link: item.url,
						published: moment(item.published).format("dddd, MMMM Do YYYY"),
						});
				});
			
				// notify
				callback(error);
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
				_.each(data.data, function(item) {
					that.commits.push({
						content: item.name, 
						link: item.html_url
						});
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
			
			var srv = '/'; //'http://' + window.location.hostname + window.location.pathname;
			
			// GitHub
			$.ajax({dataType: 'jsonp',
				jsonp: 'callback',
				url: srv + 'data/atom', 
				data: { 'url': that.config.github.atomUrl },
		  	}).done(function(data) {
//				console.log(data);
				
				var xmldoc = $.parseXML(data.xml);
				$xml = $(xmldoc);
				
//				var i = 0;
//				var step = 100 / that.config.github.maxPosts;
				
				$xml.find('entry').find('content').each(function(node) {
					
//					$('#commits-bar').css('width', i + '%');
//					i += step;
					
					// fix links
					var text = $(this).text();
					text = text.replace(/href=\"\//g, 'target=\"_blank\" href=\"' + that.config.github.url);
					// push 2 display
					that.commits.push({content: text});
					// check limit
					if (that.commits().length > that.config.github.maxPosts)
						return false;
				});
				
				// notify
				callback(null);
		  	}).fail(function(error) {
		  		callback(error);
		  	});				
		};		
	};
	
	return HomeViewModel;
});
