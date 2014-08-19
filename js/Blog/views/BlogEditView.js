var 
    Backbone = require('app/library/BackboneShim'),
    Marionette = require('app/library/MarionetteShim'),
    $ = require('jquery');

var BlogEditView = Marionette.ItemView.extend({
    template: "#BlogEdit",
    className: 'blog-edit',
    events: {
        "click .blog-submit":           "submit",
        "submit #blog-form":            "submit",
        "focus .blog-title":            "clear"
    },
    submit: function (e) {
        e.preventDefault();
        $('#blog-form').addClass('loading');
        var model = this.model;
        var data = $('#blog-form').serializeObject();
        if (data.id === '') {
            delete data.id;
        }
        model.set(data);
        model.save().done(function () {
            window.location.hash = '#blog/' + model.get('id');
        });
    },
    clear: function (e) {
        var $title = $('.blog-title');
        if ($title.val() == 'New Post') {
            $title.val('');
        }
    }
});

module.exports = BlogEditView;