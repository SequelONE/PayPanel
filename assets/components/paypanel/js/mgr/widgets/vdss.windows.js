PayPanel.window.CreateVds = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-vds-window-create';
    }
    Ext.applyIf(config, {
        title: _('paypanel_vds_create'),
        width: 550,
        autoHeight: true,
        url: PayPanel.config.connector_url,
        action: 'mgr/vds/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    PayPanel.window.CreateVds.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.CreateVds, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_processor'),
            name: 'processor',
            id: config.id + '-processor',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_memory'),
            name: 'memory',
            id: config.id + '-memory',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_hdd'),
            name: 'hdd',
            id: config.id + '-hdd',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_trafic'),
            name: 'trafic',
            id: config.id + '-trafic',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_support'),
            name: 'support',
            id: config.id + '-support',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_ipv4'),
            name: 'ipv4',
            id: config.id + '-ipv4',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_ipv6'),
            name: 'ipv6',
            id: config.id + '-ipv6',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_ipmax'),
            name: 'ipmax',
            id: config.id + '-ipmax',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_dns'),
            name: 'dns',
            id: config.id + '-dns',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_backup'),
            name: 'backup',
            id: config.id + '-backup',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_price_partner'),
            name: 'price_partner',
            id: config.id + '-price_partner',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_percent'),
            name: 'percent',
            id: config.id + '-percent',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_advance'),
            name: 'advance',
            id: config.id + '-advance',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel_item_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('paypanel-vds-window-create', PayPanel.window.CreateVds);


PayPanel.window.UpdateVds = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-vds-window-update';
    }
    Ext.applyIf(config, {
        title: _('paypanel_vds_update'),
        width: 550,
        autoHeight: true,
        url: PayPanel.config.connector_url,
        action: 'mgr/vds/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    PayPanel.window.UpdateVds.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.UpdateVds, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_processor'),
            name: 'processor',
            id: config.id + '-processor',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_memory'),
            name: 'memory',
            id: config.id + '-memory',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_hdd'),
            name: 'hdd',
            id: config.id + '-hdd',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_trafic'),
            name: 'trafic',
            id: config.id + '-trafic',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_support'),
            name: 'support',
            id: config.id + '-support',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_ipv4'),
            name: 'ipv4',
            id: config.id + '-ipv4',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_ipv6'),
            name: 'ipv6',
            id: config.id + '-ipv6',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_ipmax'),
            name: 'ipmax',
            id: config.id + '-ipmax',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_dns'),
            name: 'dns',
            id: config.id + '-dns',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_backup'),
            name: 'backup',
            id: config.id + '-backup',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_price_partner'),
            name: 'price_partner',
            id: config.id + '-price_partner',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_percent'),
            name: 'percent',
            id: config.id + '-percent',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_vds_advance'),
            name: 'advance',
            id: config.id + '-advance',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel_vds_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('paypanel-vds-window-update', PayPanel.window.UpdateVds);