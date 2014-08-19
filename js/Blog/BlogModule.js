var
    Backbone = require('app/library/BackboneShim'),
    BlogController = require('app/Blog/BlogController'),
    BlogRouter = require('app/Blog/BlogRouter'),
    App = require('app/App');

App.module("BlogModule", {
    define: function(BlogModule, App, Backbone, Marionette, $, _) {
        
        BlogModule.addInitializer(function(options) {
            new BlogRouter();
        });

        BlogModule.on("start", function() {
            if (App.getCurrentRoute() === ""){
                window.location.hash = 'blogs';
            }
        });
    }
});