/*
 * Open Source VM 
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define(['knockout', 'underscore'], function(ko, _) {
	
	function OSSViewModel(pager) {
		var self = this;
		
		// Data
		self.pager = pager;
		self.originURL = 'http://' + window.location.hostname + window.location.pathname;
		//location; //.protocol + window.location.hostname + ;
		self.ossprojects = ko.observableArray();
		
		// Constructor
		self.init = function(callback) {
			var that = this;
			
			that.fetchOSS(function(err) {
				if (err) {
					console.log('fetchOSS failed!');
					console.log(err);
					// TODO
					return;
				}
				
				callback(that);
			});
			
			self.pager.extendWithPage(that);
		};
		
		// Behaviours
		self.render = function(to) {
			ko.applyBindings(self, $(to)[0]);
		};			
		
		// Client-side routines
		
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
		  		that.ossprojects = ko.observableArray(data.oss);
				// notify
				callback(null);
		  	}).fail(function(error) {
		  		callback(error);
		  	});				
		};
		
	};
	
	return OSSViewModel;	
	
});