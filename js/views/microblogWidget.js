
define([
  'jquery',
  'underscore',
  'backbone',
  'gapi',
  "text!tpl/gplus.tpl.html"
], function($, _, Backbone, GAPI) {
    
    var microblogWidget = Backbone.View.extend({
        el: '#micros-widget',
    
        initialize: function() {
            this.isLoading = false;
            
        },
        render: function() {
            this.loadResults();
        },
        loadResults: function() {
            var userId = '101695111306977669026';
            // mark now loading
            this.isLoading = true;
            // get gplus posts
            gapi_activities_read(userId, function(resp) {
                console.log(resp);
                
                _.each(resp.items, function() {
                    $(that.el).append(_.template($('#micros-widget').html(), { news: [{title: 'bla', content: 'contenta'}] }));    
                });
            });
            
        },
        // Events to monitor
        events: {
            'scroll': 'onScroll'
        },
        onScroll: function() {
            alert('somebody scrolled!');
        }
    });    

    return microblogWidget;
});


