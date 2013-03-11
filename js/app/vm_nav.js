/*
 * Navigation VM
 * 
 * (c) 2013 Petar Petrov
 * http://petarov.vexelon.net/
 * 
 */
define(['knockout', 'underscore'], function(ko, _) {
	
	function NavigationViewModel(pager) {
		var self = this;
		self.pager = pager;

		// Data
		self.chosenPane = ko.observable();
		self.navanchors = ko.observableArray(
				[
				 {lid: 'nav-home', name: 'Home', paneid: 'pane-home', link: 'home'}, 
				 {lid: 'nav-games', name: 'Games', paneid: 'pane-games', link: 'games'}, 
				 {lid: 'nav-oss', name: 'Open Source', paneid: 'pane-oss', link: 'oss'},
				 {lid: 'nav-about', name: 'About', paneid: 'pane-about', link: 'about'}
				 ]
				);
		
		// Behaviours
		self.gotoAnchor = function(to) {
			var that = this;
			
			$('#' + to.lid).toggleClass('active');
			$('#' + to.lid).siblings().removeClass('active');
			
//			that.pager.showPage(to.link);
			location.href = to.link;
//			console.log(location);
			
			//$('#container').children().hide();
			//$('#' + to.paneid).show();
		};
		
		// Constructor
		self.init = function() {
			//this.gotoAnchor(this.navanchors()[0]);
		};
		
		self.render = function(to) {
			ko.applyBindings(self, $(to)[0]);
		};		
	}
	
	return NavigationViewModel;
});