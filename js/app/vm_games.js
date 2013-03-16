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
		self.parent = parent;
		self.originURL = 'http://' + window.location.hostname + window.location.pathname;
		//location; //.protocol + window.location.hostname + ;
		self.games = ko.observableArray();
		
		// Constructor
		self.init = function(callback) {
			var that = this;
			self.parent.pg_games = ko.observable(self);
			
			that.fetchGames(function(err) {
				if (err) {
					console.log('fetchGames failed!');
					console.log(err);
					// TODO
					return;
				}
				
				callback(that);
			});
		};
		
		// Behaviours
		self.render = function(to) {
			ko.applyBindings(self, $(to)[0]);
		};			
		
		// Client-side routines
		
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
		  		that.games = ko.observableArray(data.games);
				// notify
				callback(null);
		  	}).fail(function(error) {
		  		callback(error);
		  	});				
		};
		
	};
	
	return GamesViewModel;
});