
/**
 * microblogWidget.js
 * 
 * Widget that displays Google Plus posts.
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'gapi',
  "text!tpl/gplus.tpl.html"
], function($, _, Backbone, GAPI) {
    
    var News = Backbone.Model.extend({
            defaults: {
                title: "Not specified",
                content: "Not specified"
            },
            initialize: function() {
            }
    });
    var newsCol = Backbone.Collection.extend({
        model: News
    });          
    
    microblogWidget = Backbone.View.extend({
        el: '#micros-widget',
    
        initialize: function() {
            this.isLoading = false;
            
        },
        render: function() {
            this.loadResults();
        },
        loadResults: function() {
            var model = this;
            var userId = '101695111306977669026';
            // mark now loading
            this.isLoading = true;
            // get gplus posts
            gapi_activities_read(userId, function(resp) {
                console.log(resp);
                
                var col = new newsCol;
                
                _.each(resp.items, function(item) {
//                          $(model.el).append(
//                            _.template('#micros-widget', { news: [{title: 'bla', content: 'contenta'}] })
//                            );  
                    col.add(new News({title: item.title, content: item.updated}));
                });
                
                $(model.el).html(
                    _.template($('#micros-widget').html(), { news: col })
                    );                      
                
                $('#micros-real').append($(model.el).html());
                
                model.isLoading = false;
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


