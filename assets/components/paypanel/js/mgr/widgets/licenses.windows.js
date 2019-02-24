PayPanel.window.CreateLicense = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-license-window-create';
    }
    Ext.applyIf(config, {
        title: _('paypanel_license_create'),
        width: 550,
        autoHeight: true,
        url: PayPanel.config.connector_url,
        action: 'mgr/license/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    PayPanel.window.CreateLicense.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.CreateLicense, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('paypanel_license_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_license_period'),
            name: 'period',
            id: config.id + '-period',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_license_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_license_price_partner'),
            name: 'price_partner',
            id: config.id + '-price_partner',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_license_percent'),
            name: 'percent',
            id: config.id + '-percent',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_license_advance'),
            name: 'advance',
            id: config.id + '-advance',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel_license_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('paypanel-license-window-create', PayPanel.window.CreateLicense);


PayPanel.window.UpdateLicense = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-license-window-update';
    }
    Ext.applyIf(config, {
        title: _('paypanel_license_update'),
        width: 550,
        autoHeight: true,
        url: PayPanel.config.connector_url,
        action: 'mgr/license/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    PayPanel.window.UpdateLicense.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.UpdateLicense, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_license_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_license_period'),
            name: 'period',
            id: config.id + '-period',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_license_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_license_price_partner'),
            name: 'price_partner',
            id: config.id + '-price_partner',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_license_percent'),
            name: 'percent',
            id: config.id + '-percent',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_license_advance'),
            name: 'advance',
            id: config.id + '-advance',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel_license_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('paypanel-license-window-update', PayPanel.window.UpdateLicense);