/*
 * Games VM 
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define(['knockout', 'underscore'], function(ko, _) {
	
	function GamesViewModel(parent, conf) {
		var self = this;
		
		// Data
		self.conf = conf;
		self.gamedesignslist = ko.observableArray();
		self.gameslist = ko.observableArray();
		self.gameslist_unreleased = ko.observableArray();
		
		// Behaviors
		
		self.init = function(callback) {
			var that = this;
			
			that.fetchGameDesigns(function(err) {
				if (err) {
					console.log('fetchGameDesigns failed!');
					console.log(err);
					// TODO
					return;
				}
				
				that.fetchGames(function(err) {
					if (err) {
						console.log('fetchGames failed!');
						console.log(err);
						// TODO
						return;
					}
					
					callback(null);
				}); // eof that.fetchGames
			}); // eof fetchGameDesigns
		};
		
		self.render = function(to) {
			if (!to)  {
				to = '#page-games';
			}				
			ko.applyBindings(self, $(to)[0]);
		};			
		
		/*
		 * Fetch Games JSON
		 */
		self.fetchGames = function(callback) {
			var that = this;
			
			$.ajax({dataType: 'jsonp',
				jsonp: 'callback',
				url: that.conf.server.baseUrl + 'data/games', 
				crossDomain: 'false'
		  	}).done(function(data) {
		  		_.each(data.games, function(item) {
		  			if (item.released) {
		  				that.gameslist.push(item);
		  			} else {
		  				that.gameslist_unreleased.push(item);
		  			}
		  		});
				// notify
				callback(null);
		  	}).fail(function(error) {
		  		callback(error);
		  	});				
		};
		
		/*
		 * Fetch GameDesigns JSON
		 */
		self.fetchGameDesigns = function(callback) {
			var that = this;
			
			$.ajax({dataType: 'jsonp',
				jsonp: 'callback',
				url: that.conf.server.baseUrl + 'data/articles', 
				crossDomain: 'false'
		  	}).done(function(data) {
		  		_.each(data.articles, function(item) {
		  			if (item.gamedesign) {
		  				that.gamedesignslist.push(item);
		  			}
		  		});
				// notify
				callback(null);
		  	}).fail(function(error) {
		  		callback(error);
		  	});				
		};		
		
	};
	
	return GamesViewModel;
});