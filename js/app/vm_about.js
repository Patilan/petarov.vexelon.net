/*
 * About VM 
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define(['knockout', 'underscore', 'Markdown.Converter'], function(ko, _) {
	
	function AboutViewModel(parent, conf) {
		var self = this;
		
		// Data
		self.conf = conf;
		self.markdown = ko.observable();
		
		// Behaviours
		
		self.init = function(callback) {
			var that = this;
			
			that.fetchREADME(function(err) {
				if (err) {
					console.log('fetchREADME failed!');
					console.log(err);
					
					callback(err);
					return;
				}
				// OK
				callback(null);
			});
			
		};
		
		self.render = function(to) {
			if (!to)  {
				to = '#pane-contact';
			}			
			ko.applyBindings(self, $(to)[0]);
		};			
		/*
		 * Fetch OSS JSON
		 */
		self.fetchREADME = function(callback) {
			var that = this;
			
	        $.ajax({
	            url: that.conf.server.baseUrl + 'data/about.md',
	            async: false,
		  	}).done(function(data) {
		  		
				var converter = new Markdown.Converter();
				that.markdown(converter.makeHtml(data));
				
				// notify
				callback(null);
		  	}).fail(function(error) {
		  		callback(error);
		  	});		
		};
		
	};
	
	return AboutViewModel;		
});