PayPanel.window.CreateServer = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-server-window-create';
    }
    Ext.applyIf(config, {
        title: _('paypanel_server_create'),
        width: 550,
        autoHeight: true,
        url: PayPanel.config.connector_url,
        action: 'mgr/server/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    PayPanel.window.CreateServer.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.CreateServer, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_processor'),
            name: 'processor',
            id: config.id + '-processor',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_memory'),
            name: 'memory',
            id: config.id + '-memory',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_hdd'),
            name: 'hdd',
            id: config.id + '-hdd',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_virtualisation'),
            name: 'virtualisation',
            id: config.id + '-virtualisation',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_os'),
            name: 'os',
            id: config.id + '-os',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_price_partner'),
            name: 'price_partner',
            id: config.id + '-price_partner',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_percent'),
            name: 'percent',
            id: config.id + '-percent',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_advance'),
            name: 'advance',
            id: config.id + '-advance',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel_server_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('paypanel-server-window-create', PayPanel.window.CreateServer);


PayPanel.window.UpdateServer = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-server-window-update';
    }
    Ext.applyIf(config, {
        title: _('paypanel_server_update'),
        width: 550,
        autoHeight: true,
        url: PayPanel.config.connector_url,
        action: 'mgr/server/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    PayPanel.window.UpdateServer.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.UpdateServer, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_processor'),
            name: 'processor',
            id: config.id + '-processor',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_memory'),
            name: 'memory',
            id: config.id + '-memory',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_hdd'),
            name: 'hdd',
            id: config.id + '-hdd',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_virtualisation'),
            name: 'virtualisation',
            id: config.id + '-virtualisation',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_os'),
            name: 'os',
            id: config.id + '-os',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_price_partner'),
            name: 'price_partner',
            id: config.id + '-price_partner',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_percent'),
            name: 'percent',
            id: config.id + '-percent',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_server_advance'),
            name: 'advance',
            id: config.id + '-advance',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel_server_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('paypanel-server-window-update', PayPanel.window.UpdateServer);