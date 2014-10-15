require.config({
    baseUrl: '../',
    paths: {
        jquery: 'vendor/jquery/src/jquery.js',
        _: 'vendor/underscore/underscore.js',
        backbone: 'vendor/backbone/backbone.js',
        marionette: 'vendor/marionette/lib/backbone.marionette.js',
        App: 'app/App.js'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
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
