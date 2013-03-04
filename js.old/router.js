
/**
 * App. Router
 */
// 
//define(['jquery','underscore', 'backbone', 'vm'], function (
//    $, _, Backbone, Vm) {
    
SiteRouter = Backbone.Router.extend({
    routes: {
        // Pages
        'home': 'home',
        'games': 'games',
        'opensource': 'opensource',
        'about/:page': 'about',
        'about/:page': 'about',
        
        // Default - catch all
        '*actions': 'defaultAction'
    },
    initialize: function(options) {
        // Leer
        Backbone.history.start();
        
    },
    home: function() {
        // Home page - latest posts, commits
      require(['views/dashboard/page'], function(homePage) {
          var page = Vm.create(appView, 'HomePage', homePage);
          page.render();
      });            
    },
    games: function() {
        // Games page
    },
    opensource: function() {
        // Projects
    },
    about: function(page) {
        // About - Bio & Contact
        
    }
});

//    
//    return AppRouter;
//    
//  });