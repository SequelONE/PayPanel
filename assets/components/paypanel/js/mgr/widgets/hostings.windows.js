PayPanel.window.CreateHosting = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-hosting-window-create';
    }
    Ext.applyIf(config, {
        title: _('paypanel_hosting_create'),
        width: 550,
        autoHeight: true,
        url: PayPanel.config.connector_url,
        action: 'mgr/hosting/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    PayPanel.window.CreateHosting.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.CreateHosting, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_hdd'),
            name: 'hdd',
            id: config.id + '-hdd',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_domains'),
            name: 'domains',
            id: config.id + '-domains',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_db'),
            name: 'db',
            id: config.id + '-db',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_ftp'),
            name: 'ftp',
            id: config.id + '-ftp',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_price_partner'),
            name: 'price_partner',
            id: config.id + '-price_partner',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_percent'),
            name: 'percent',
            id: config.id + '-percent',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_advance'),
            name: 'advance',
            id: config.id + '-advance',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel_hosting_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('paypanel-hosting-window-create', PayPanel.window.CreateHosting);


PayPanel.window.UpdateHosting = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-hosting-window-update';
    }
    Ext.applyIf(config, {
        title: _('paypanel_hosting_update'),
        width: 550,
        autoHeight: true,
        url: PayPanel.config.connector_url,
        action: 'mgr/hosting/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    PayPanel.window.UpdateHosting.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.UpdateHosting, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_hdd'),
            name: 'hdd',
            id: config.id + '-hdd',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_domains'),
            name: 'domains',
            id: config.id + '-domains',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_db'),
            name: 'db',
            id: config.id + '-db',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_ftp'),
            name: 'ftp',
            id: config.id + '-ftp',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_price_partner'),
            name: 'price_partner',
            id: config.id + '-price_partner',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_percent'),
            name: 'percent',
            id: config.id + '-percent',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_hosting_advance'),
            name: 'advance',
            id: config.id + '-advance',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel_hosting_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('paypanel-hosting-window-update', PayPanel.window.UpdateHosting);