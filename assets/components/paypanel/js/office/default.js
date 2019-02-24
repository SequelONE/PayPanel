Ext.onReady(function () {
    PayPanel.config.connector_url = OfficeConfig.actionUrl;

    var grid = new PayPanel.panel.Home();
    grid.render('office-paypanel-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});