/*
 * Open Source VM 
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define(['knockout', 'underscore'], function(ko, _) {
	
	function OSSViewModel(parent, conf) {
		var self = this;
		
		// Data
		self.conf = conf;
		self.ossprojects = ko.observableArray();
		self.appsprojects = ko.observableArray();
		
		// Behaviours
		
		self.init = function(callback) {
			var that = this;
			
			that.fetchOSS(function(err) {
				if (err) {
					console.log('fetchOSS failed!');
					console.log(err);
					
					callback(err);
					return;
				}
				
				callback(null);
			});
			
		};
		
		self.render = function(to) {
			if (!to)  {
				to = '#page-oss';
			}			
			ko.applyBindings(self, $(to)[0]);
		};			
		
		/*
		 * Fetch OSS JSON
		 */
		self.fetchOSS = function(callback) {
			var that = this;
			
			$.ajax({dataType: 'jsonp',
				jsonp: 'callback',
				url: that.conf.server.baseUrl + 'data/oss', 
				crossDomain: 'false'
		  	}).done(function(data) {
		  		_.each(data.oss, function(item) {
		  			if (item.app) {
		  				that.appsprojects.push(item);
		  			} else {
		  				that.ossprojects.push(item);	
		  			}
		  		});		  		
				// notify
				callback(null);
		  	}).fail(function(error) {
		  		callback(error);
		  	});				
		};
		
	};
	
	return OSSViewModel;	
	
});