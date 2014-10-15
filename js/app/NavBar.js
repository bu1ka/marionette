define(['marionette', 'text!templates/navigation-bar.html', 'text!templates/navigation-bar-item.html'], function(Marionette) {

    var NavBar = Marionette.ItemView.extend({
        template: "#navigation-bar-template"
    });

    return NavBar;
});
