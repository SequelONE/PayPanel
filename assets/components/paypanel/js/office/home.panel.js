PayPanel.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'paypanel-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: false,
            hideMode: 'offsets',
            items: [{
                title: _('paypanel_items'),
                layout: 'anchor',
                items: [{
                    html: _('paypanel_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'paypanel-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    PayPanel.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.panel.Home, MODx.Panel);
Ext.reg('paypanel-panel-home', PayPanel.panel.Home);
