define(['text!tpl/footer/footer.html'], function(footerTemplate) {
    
    var FooterView = Backbone.View.extend({
        el: '#footer',
        initialize: function() {},
        render: function() {
            $(this.el).html(footerTemplate);
            //$('a[href="' + window.location.hash + '"]').addClass('active');
        },
        events: {
            //'click a': 'highlightMenuItem'
        },
        highlightMenuItem: function(ev) {
            //$('.active').removeClass('active');
            //$(ev.currentTarget).addClass('active');
        }
    })

    return FooterView;
});