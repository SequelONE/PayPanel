PayPanel.window.CreateDomain = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-domain-window-create';
    }
    Ext.applyIf(config, {
        title: _('paypanel_domain_create'),
        width: 550,
        autoHeight: true,
        url: PayPanel.config.connector_url,
        action: 'mgr/domain/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    PayPanel.window.CreateDomain.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.CreateDomain, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_zone'),
            name: 'zone',
            id: config.id + '-zone',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain'),
            name: 'domain',
            id: config.id + '-domain',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_whois'),
            name: 'whois',
            id: config.id + '-whois',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'modx-combo-boolean',
            fieldLabel: _('paypanel_domain_idn'),
            name: 'idn',
            id: config.id + '-idn',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'paypanel-combo-category',
            fieldLabel: _('paypanel_domain_groups'),
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'modx-combo-boolean',
            fieldLabel: _('paypanel_domain_popular'),
            name: 'popular',
            id: config.id + '-popular',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_min'),
            name: 'min',
            id: config.id + '-min',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_max'),
            name: 'max',
            id: config.id + '-max',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_price_retail'),
            name: 'price_retail',
            id: config.id + '-price_retail',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_price_partner'),
            name: 'price_partner',
            id: config.id + '-price_partner',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_percent'),
            name: 'percent',
            id: config.id + '-percent',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_advance'),
            name: 'advance',
            id: config.id + '-advance',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel_domain_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('paypanel-domain-window-create', PayPanel.window.CreateDomain);


PayPanel.window.UpdateDomain = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-domain-window-update';
    }
    Ext.applyIf(config, {
        title: _('paypanel_domain_update'),
        width: 550,
        autoHeight: true,
        url: PayPanel.config.connector_url,
        action: 'mgr/domain/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    PayPanel.window.UpdateDomain.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.UpdateDomain, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_zone'),
            name: 'zone',
            id: config.id + '-zone',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain'),
            name: 'domain',
            id: config.id + '-domain',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_whois'),
            name: 'whois',
            id: config.id + '-whois',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'modx-combo-boolean',
            fieldLabel: _('paypanel_domain_idn'),
            name: 'idn',
            id: config.id + '-idn',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'paypanel-combo-category',
            fieldLabel: _('paypanel_domain_groups'),
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'modx-combo-boolean',
            fieldLabel: _('paypanel_domain_popular'),
            name: 'popular',
            id: config.id + '-popular',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_min'),
            name: 'min',
            id: config.id + '-min',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_max'),
            name: 'max',
            id: config.id + '-max',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_price'),
            name: 'price',
            id: config.id + '-price',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_price_retail'),
            name: 'price_retail',
            id: config.id + '-price_retail',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_price_partner'),
            name: 'price_partner',
            id: config.id + '-price_partner',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_percent'),
            name: 'percent',
            id: config.id + '-percent',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('paypanel_domain_advance'),
            name: 'advance',
            id: config.id + '-advance',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel_domain_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('paypanel-domain-window-update', PayPanel.window.UpdateDomain);