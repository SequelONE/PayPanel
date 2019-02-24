PayPanel.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'paypanel-panel-home',
            renderTo: 'paypanel-panel-home-div'
        }]
    });
    PayPanel.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.page.Home, MODx.Component);
Ext.reg('paypanel-page-home', PayPanel.page.Home);