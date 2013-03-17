/*
 * Games VM 
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define(['knockout', 'underscore'], function(ko, _) {
	
	function GamesViewModel(parent) {
		var self = this;
		
		// Data
		self.originURL = 'http://' + window.location.hostname + window.location.pathname;
		//location; //.protocol + window.location.hostname + ;
		self.gameslist = ko.observableArray();
		self.gameslist_unreleased = ko.observableArray();
		
		// Behaviors
		
		self.init = function(callback) {
			var that = this;
			
			that.fetchGames(function(err) {
				if (err) {
					console.log('fetchGames failed!');
					console.log(err);
					// TODO
					return;
				}
				
				callback(null);
			});
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
				url: that.originURL + 'data/games', 
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
		
	};
	
	return GamesViewModel;
});