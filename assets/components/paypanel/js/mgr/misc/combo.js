PayPanel.combo.Search = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        xtype: 'twintrigger',
        ctCls: 'x-field-search',
        allowBlank: true,
        msgTarget: 'under',
        emptyText: _('search'),
        name: 'query',
        triggerAction: 'all',
        clearBtnCls: 'x-field-search-clear',
        searchBtnCls: 'x-field-search-go',
        onTrigger1Click: this._triggerSearch,
        onTrigger2Click: this._triggerClear,
    });
    PayPanel.combo.Search.superclass.constructor.call(this, config);
    this.on('render', function () {
        this.getEl().addKeyListener(Ext.EventObject.ENTER, function () {
            this._triggerSearch();
        }, this);
    });
    this.addEvents('clear', 'search');
};
Ext.extend(PayPanel.combo.Search, Ext.form.TwinTriggerField, {

    initComponent: function () {
        Ext.form.TwinTriggerField.superclass.initComponent.call(this);
        this.triggerConfig = {
            tag: 'span',
            cls: 'x-field-search-btns',
            cn: [
                {tag: 'div', cls: 'x-form-trigger ' + this.searchBtnCls},
                {tag: 'div', cls: 'x-form-trigger ' + this.clearBtnCls}
            ]
        };
    },

    _triggerSearch: function () {
        this.fireEvent('search', this);
    },

    _triggerClear: function () {
        this.fireEvent('clear', this);
    },

});
PayPanel.combo.Category = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        fieldLabel: _('ms2_category'),
        description: '<b>[[*parent]]</b><br />' + _('ms2_product_parent_help'),
        fields: ['id', 'pagetitle', 'parents'],
        valueField: 'id',
        displayField: 'pagetitle',
        name: 'groups',
        hiddenName: 'groups',
        allowBlank: false,
        url: PayPanel.config['connector_url'],
        baseParams: {
            action: 'mgr/domain/getcats',
            combo: true,
            id: config.value
        },
        tpl: new Ext.XTemplate('\
            <tpl for="."><div class="x-combo-list-item minishop2-category-list-item">\
                <tpl if="parents">\
                    <div class="parents">\
                        <tpl for="parents">\
                            <nobr><small>{pagetitle} / </small></nobr>\
                        </tpl>\
                    </div>\
                </tpl>\
                <span>\
                    <small>({id})</small> <b>{pagetitle}</b>\
                </span>\
            </div></tpl>', {
            compiled: true
        }),
        itemSelector: 'div.minishop2-category-list-item',
        pageSize: 20,
        editable: true
    });
    PayPanel.combo.Category.superclass.constructor.call(this, config);
    this.on('expand', function () {
        if (!!this.pageTb) {
            this.pageTb.show();
        }
    });
};
Ext.extend(PayPanel.combo.Category, MODx.combo.ComboBox);
Ext.reg('paypanel-combo-category', PayPanel.combo.Category);
Ext.reg('paypanel-combo-search', PayPanel.combo.Search);
Ext.reg('paypanel-field-search', PayPanel.combo.Search);