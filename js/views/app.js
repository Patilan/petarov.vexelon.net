
define(['vm', 'text!tpl/home/main.html'], function(Vm, layoutTemplate) {
    
    var AppView = Backbone.View.extend({
        el: '#container',
        initialize: function() {
            // Leer
        },
        render: function() {
            var model = this;
            
            $(this.el).html(layoutTemplate);
//            require(['views/header/menu'], function(HeaderMenuView) {
//                var headerMenuView = Vm.create(model, 'HeaderMenuView', HeaderMenuView);
//                headerMenuView.render();
//            });
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