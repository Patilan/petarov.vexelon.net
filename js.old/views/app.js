
define(['vm', 'text!tpl/home/main.html'], function(Vm, layoutTemplate) {
    
    var AppView = Backbone.View.extend({
        el: '#container',
        initialize: function() {
            // Leer
        },
        render: function() {
            var model = this;
            
            $(this.el).html(layoutTemplate);
            
            require(['views/micros'], function(MicrosView) {
                var microsView = Vm.create(model, 'MicrosView', MicrosView, {
                    appView: model
                });
                microsView.render();
            });
            require(['views/footer'], function(FooterView) {
                // Pass the appView down into the footer so we can render the visualisation
                var footerView = Vm.create(model, 'FooterView', FooterView, {
                    appView: model
                });
                footerView.render();
            });

        }
    });
    
    return AppView;
});