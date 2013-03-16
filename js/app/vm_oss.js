/*
 * Open Source VM 
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define(['knockout', 'underscore'], function(ko, _) {
	
	function OSSViewModel(parent) {
		var self = this;
		parent.pg_oss = ko.observable(self);
		
		// Data
		self.originURL = 'http://' + window.location.hostname + window.location.pathname;
		//location; //.protocol + window.location.hostname + ;
		self.ossprojects = ko.observableArray();
		
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
				
				callback(that);
			});
			
		};
		
		self.render = function(to) {
			ko.applyBindings(self, $(to)[0]);
		};			
		
		/*
		 * Fetch OSS JSON
		 */
		self.fetchOSS = function(callback) {
			var that = this;
			
			$.ajax({dataType: 'jsonp',
				jsonp: 'callback',
				url: that.originURL + 'data/oss', 
				crossDomain: 'false'
		  	}).done(function(data) {
		  		_.each(data.oss, function(item) {
		  			that.ossprojects.push(item);
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