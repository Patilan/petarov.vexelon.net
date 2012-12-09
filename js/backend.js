// start it up


$(document).ready(function() {

    // Configure shortcuts and includes
//    require.config({
//        paths: {
////            // Major libraries
////            jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js',
////            underscore: 'libs/underscore-min.js', // https://github.com/amdjs
////            backbone: 'libs/backbone-min.js', // https://github.com/amdjs
////            gapi: '//apis.google.com/js/client.js?onload=load',
//            
////            // Require.js plugins
////            text: 'libs/require/text',
////            order: 'libs/require/order',
//            
//            // Just a short cut so we can put our html outside the js dir
//            // When you have HTML/CSS designers this aids in keeping them out of the js directory
//            templates: '../tpl'
//        },
//        urlArgs: "bust=" +  (new Date()).getTime()
//    });

    var apiKey = 'AIzaSyCpdmuyNHOGzOvLCsN2OmtZ7w_z-3wxnn8';
    var userId = '101695111306977669026';
    
    /**
     * Load required scenes and game data
     */           
    require([
        "js/gapi.js"
    ], function() {  
        
        var News = Backbone.Model.extend({
                defaults: {
                    title: "Not specified",
                    content: "Not specified"
                },
                initialize: function(){
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
        
        var view = new microblogWidget();
        
        gapi_load(apiKey, function() {
            console.log("GAPI loaded.");
//            gapi_activities_read(userId, function(resp) {
//                console.log(resp);
//            });

            
            view.render();
            
        });            
    });        
    
    
});