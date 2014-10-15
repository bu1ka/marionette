define(['marionette', 'NavBar'], function(Marionette, NavBar) {


    function App() {
        this.init();
    }

    App.prototype.init = function() {
        var bookmarksManager = new Marionette.Application();

        bookmarksManager.addRegions({
            navbar: "#navigation-bar"
        });

        bookmarksManager.on("initialize:after", function() {
            var navBar = new NavBar();

            bookmarksManager.navbar.show(navBar);
        });

        bookmarksManager.start();
    };

    return App;

});
