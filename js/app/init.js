require(['require.config'], function() {
    require(['App'], function(App) {
        console.log("%c3: init", "color:orange; background:blue; font-size: 16pt");
        App.start();
    });
});
