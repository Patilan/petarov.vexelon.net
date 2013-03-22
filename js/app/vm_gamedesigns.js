/*
 * Games Designs VM 
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define(['knockout', 'underscore', 'js-markdown-extra'], function(ko, _) {
	
	function GameDesignsViewModel(parent, conf) {
		var self = this;
		
		// Data
		self.conf = conf;
		self.markdown = ko.observable();
		self.designs = ko.observableArray();
		self.designs.loading = ko.observable(false);
		self.designs.loaded = ko.observable(false);
		
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
				
				callback(null);
			}); // eof fetchGameDesigns
		};
		
		self.render = function(to) {
			if (!to)  {
				to = '#pane-gamedesigns';
			}				
			ko.applyBindings(self, $(to)[0]);
		};
		
		self.showDesign = function(entry) {
			var that = self;
			
			that.designs.loading(true);
			
	        $.ajax({
	            url: that.conf.server.baseUrl + 'data/page/' + entry.entry,
	            async: true,
		  	}).done(function(data) {
		  		var html = Markdown(data);
		  		that.markdown(html);
		  		that.designs.loaded(true);
		  		that.designs.loading(false);
		  	}).fail(function(error) {
		  		console.log(error);
		  		that.markdown(error.statusText);
		  		that.designs.loaded(true);
		  		that.designs.loading(false);
		  	});			
		},
		
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
		  				that.designs.push(item);
		  			}
		  		});
				// notify
				callback(null);
		  	}).fail(function(error) {
		  		callback(error);
		  	});				
		};		
		
	};
	
	return GameDesignsViewModel;
});