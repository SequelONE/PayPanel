PayPanel.window.CreateSsl = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-ssl-window-create';
    }
    Ext.applyIf(config, {
        title: _('paypanel_ssl_create'),
        width: 550,
        autoHeight: true,
        url: PayPanel.config.connector_url,
        action: 'mgr/ssl/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    PayPanel.window.CreateSsl.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.CreateSsl, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'modx-combo-browser',
            fieldLabel: _('paypanel_ssl_logo'),
            name: 'logo',
            id: config.id + '-logo',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_options'),
            name: 'options',
            id: config.id + '-options',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_company'),
            name: 'company',
            id: config.id + '-company',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_period'),
            name: 'period',
            id: config.id + '-period',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_price_partner'),
            name: 'price_partner',
            id: config.id + '-price_partner',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_percent'),
            name: 'percent',
            id: config.id + '-percent',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_advance'),
            name: 'advance',
            id: config.id + '-advance',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel_ssl_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('paypanel-ssl-window-create', PayPanel.window.CreateSsl);


PayPanel.window.UpdateSsl = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-ssl-window-update';
    }
    Ext.applyIf(config, {
        title: _('paypanel_ssl_update'),
        width: 550,
        autoHeight: true,
        url: PayPanel.config.connector_url,
        action: 'mgr/ssl/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    PayPanel.window.UpdateSsl.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.UpdateSsl, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'modx-combo-browser',
            fieldLabel: _('paypanel_ssl_logo'),
            name: 'logo',
            id: config.id + '-logo',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_options'),
            name: 'options',
            id: config.id + '-options',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_company'),
            name: 'company',
            id: config.id + '-company',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_period'),
            name: 'period',
            id: config.id + '-period',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_price_partner'),
            name: 'price_partner',
            id: config.id + '-price_partner',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_percent'),
            name: 'percent',
            id: config.id + '-percent',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_ssl_advance'),
            name: 'advance',
            id: config.id + '-advance',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel_ssl_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('paypanel-ssl-window-update', PayPanel.window.UpdateSsl);