define(['text!tpl/home/micros.html'], function(microsTemplate) {
    
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
    
    var MicrosView = Backbone.View.extend({
        el: '#micros-widget',
        initialize: function() {
            this.isLoading = false;
        },
        render: function() {
            this.loadResults();
        },
        loadResults: function() {
            console.log('asz');
            var model = this;
            // mark now loading
            this.isLoading = true;
            
            // get gplus posts
            console.log('z');
                
            ga.readActivities(function(resp) {
                console.log(resp);
                
                var col = new newsCol;
                
                _.each(resp.items, function(item) {
//                          $(model.el).append(
//                            _.template('#micros-widget', { news: [{title: 'bla', content: 'contenta'}] })
//                            );  
                    col.add(new News({title: item.title, content: item.updated}));
                });
                
                console.log(col);
                
                $(model.el).html(
                    _.template(microsTemplate, { news: col })
                    );                      
                
                //$('#micros-real').append($(model.el).html());
                
                model.isLoading = false;
            });                
        },
    })

    return MicrosView;
});