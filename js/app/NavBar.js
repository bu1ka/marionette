define(['marionette', 'text!app/templates/navigation-bar.html', 'text!app/templates/navigation-bar-item.html'], function(Marionette) {

    var NavBar = Marionette.ItemView.extend({
        template: "#navigation-bar-template"
    });

    return NavBar;
});
