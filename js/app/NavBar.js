define([
        'marionette',
        'text!app/templates/navigation-bar.html',
        'text!app/templates/navigation-bar-item.html'
    ], function(Marionette) {

        var NavBar = Marionette.Module.extend({

            define: function() {

                var MenuItem = Marionette.ItemView.extend({
                    template: "#navigation-bar-template"
                });

                var Menu = Marionette.CollectionView.extend({
                    itemView: MenuItem
                });

            }

        });

        return NavBar;
});
