/*
 * About VM 
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define(['knockout', 'underscore', 'js-markdown-extra'], function(ko, _) {
	
	function AboutViewModel(parent, conf) {
		var self = this;
		
		// Data
		self.conf = conf;
		self.markdown = ko.observable();
		self.email = ko.observable();
		self.emailhref = ko.observable();
		
		// Behaviours
		
		self.init = function(callback) {
			var that = this;
			
			that.email(conf.site.email.first + conf.site.email.second + '@' + conf.site.email.domain);
			that.emailhref('mailto:' + that.email() + '?subject=I saw your website');
			
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
	            url: that.conf.server.baseUrl + 'data/aboutthispage',
	            async: false,
		  	}).done(function(data) {
		  		var html = Markdown(data);
		  		that.markdown(html);
				
				// notify
				callback(null);
		  	}).fail(function(error) {
		  		callback(error);
		  	});		
		};
		
	};
	
	return AboutViewModel;		
});