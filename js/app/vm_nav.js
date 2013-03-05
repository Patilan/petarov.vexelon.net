/*
 * Navigation VM
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define(['knockout', 'underscore'], function(ko, _) {
	
	function NavigationViewModel() {
		var self = this;
		
		self.navanchors = ko.observableArray(
				[
				 {lid: 'nav-home', name: 'Home'}, 
				 {lid: 'nav-games', name: 'Games'}, 
				 {lid: 'nav-oss', name: 'Open Source'},
				 {lid: 'nav-about', name: 'About'}
				 ]
				);
		
		self.gotoAnchor = function(to) {
			$('#' + to.lid).toggleClass('active');
			$('#' + to.lid).siblings().removeClass('active');
		};
		
		// Constructor
		self.init = function() {
			
		};
		
		self.render = function(to) {
			ko.applyBindings(self, $(to)[0]);
			
			$('#nav-home').toggleClass('active'); // hack
		};		
	}
	
	return NavigationViewModel;
});