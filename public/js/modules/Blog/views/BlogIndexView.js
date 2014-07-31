var BlogIndexView = Backbone.Marionette.ItemView.extend({
    template: "#BlogIndex",
    events: {
        "click .blog-show":          "show",
        "click .blog-add-button":    "add"
    },
    show: function (e) {
        var id = $(e.currentTarget).attr('data-id');
        window.location.hash = 'blog/' + id;
    },
    add: function (e) {
        window.location.hash = 'blog';
    }
});

var BlogIndexListView = Backbone.Marionette.CollectionView.extend({
    className: 'blog-list',
    childView: BlogIndexView
});