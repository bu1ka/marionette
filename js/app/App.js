define(['marionette', 'NavBar'], function(Marionette, NavBar) {

    var BookmarksManager = new Marionette.Application();

    BookmarksManager.addRegions({
        navbar: "#navigation-bar"
    });

    BookmarksManager.on("initialize:after", function() {
        var navBar = new NavBar.Menu();

        BookmarksManager.navbar.show(navBar);
    });

    return BookmarksManager;

});
