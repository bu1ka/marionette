require.config({
    baseUrl: '/js/',
    paths: {
        jquery: 'vendor/jquery/src/jquery',
        _: 'vendor/underscore/underscore',
        backbone: 'vendor/backbone/backbone',
        marionette: 'vendor/marionette/lib/backbone.marionette',
        NavBar: 'app/NavBar',
        App: 'app/App'
    },
    shim: {
        'backbone': {
            deps: ['_', 'jquery'],
            exports: 'Backbone'
        },
        'marionette': {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        '_': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        }
    }
});
