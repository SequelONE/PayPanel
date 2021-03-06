PayPanel.grid.Domains = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-grid-domains';
    }
    Ext.applyIf(config, {
        url: PayPanel.config.connector_url,
        fields: this.getFields(config),
        columns: this.getColumns(config),
        tbar: this.getTopBar(config),
        sm: new Ext.grid.CheckboxSelectionModel(),
        baseParams: {
            action: 'mgr/domain/getlist'
        },
        save_action: 'mgr/domain/importapi',
        autosave: true,
        listeners: {
            rowDblClick: function (grid, rowIndex, e) {
                var row = grid.store.getAt(rowIndex);
                this.updateDomain(grid, e, row);
            }
        },
        viewConfig: {
            forceFit: true,
            enableRowBody: true,
            autoFill: true,
            showPreview: true,
            scrollOffset: 0,
            getRowClass: function (rec) {
                return !rec.data.active
                    ? 'paypanel-grid-row-disabled'
                    : '';
            }
        },
        paging: true,
        remoteSort: true,
        autoHeight: true,
    });
    PayPanel.grid.Domains.superclass.constructor.call(this, config);

    // Clear selection on grid refresh
    this.store.on('load', function () {
        if (this._getSelectedIds().length) {
            this.getSelectionModel().clearSelections();
        }
    }, this);
};
Ext.extend(PayPanel.grid.Domains, MODx.grid.Grid, {
    windows: {},

    getMenu: function (grid, rowIndex) {
        var ids = this._getSelectedIds();

        var row = grid.getStore().getAt(rowIndex);
        var menu = PayPanel.utils.getMenu(row.data['actions'], this, ids);

        this.addContextMenuDomain(menu);
    },

    createDomain: function (btn, e) {
        var w = MODx.load({
            xtype: 'paypanel-domain-window-create',
            id: Ext.id(),
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        w.reset();
        w.setValues({active: true});
        w.show(e.target);
    },

    updateDomain: function (btn, e, row) {
        if (typeof(row) != 'undefined') {
            this.menu.record = row.data;
        }
        else if (!this.menu.record) {
            return false;
        }
        var id = this.menu.record.id;

        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/domain/get',
                id: id
            },
            listeners: {
                success: {
                    fn: function (r) {
                        var w = MODx.load({
                            xtype: 'paypanel-domain-window-update',
                            id: Ext.id(),
                            record: r,
                            listeners: {
                                success: {
                                    fn: function () {
                                        this.refresh();
                                    }, scope: this
                                }
                            }
                        });
                        w.reset();
                        w.setValues(r.object);
                        w.show(e.target);
                    }, scope: this
                }
            }
        });
    },

    removeDomain: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.msg.confirm({
            title: ids.length > 1
                ? _('paypanel_domains_remove')
                : _('paypanel_domain_remove'),
            text: ids.length > 1
                ? _('paypanel_domains_remove_confirm')
                : _('paypanel_domain_remove_confirm'),
            url: this.config.url,
            params: {
                action: 'mgr/domain/remove',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        return true;
    },

    disableDomain: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/domain/disable',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    enableDomain: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/domain/enable',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    importApiDomain: function(response) {
        Ext.Msg.confirm(
            _('paypanel_action_download') || _('warning'),
            _('paypanel_confirm_download'),
            function(e) {
                if (e == 'yes') {
                    this.setAction('download', 'false', 0);
                } else {
                    this.fireEvent('cancel');
                }
            },this);
    },

    getFields: function () {
        return ['id', 'zone', 'domain', 'idn', 'popular', 'category', 'price', 'price_retail', 'price_partner', 'percent', 'advance', 'active', 'actions'];
    },

    getColumns: function () {
        return [{
            header: _('paypanel_domain_id'),
            dataIndex: 'id',
            sortable: true,
            width: 70
        }, {
            header: _('paypanel_domain_zone'),
            dataIndex: 'zone',
            editor: { xtype: 'textfield' },
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_domain'),
            dataIndex: 'domain',
            editor: { xtype: 'textfield' },
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_domain_groups'),
            dataIndex: 'category',
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_domain_price'),
            dataIndex: 'price',
            editor: { xtype: 'textfield' },
            sortable: true,
            width: 50,
        }, {
            header: _('paypanel_domain_price_retail'),
            dataIndex: 'price_retail',
            editor: { xtype: 'textfield' },
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_domain_price_partner'),
            dataIndex: 'price_partner',
            editor: { xtype: 'textfield' },
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_domain_percent'),
            dataIndex: 'percent',
            editor: { xtype: 'textfield' },
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_domain_advance'),
            dataIndex: 'advance',
            editor: { xtype: 'textfield' },
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_domain_idn'),
            dataIndex: 'idn',
            renderer: PayPanel.utils.renderBoolean,
            sortable: true,
            width: 50,
        }, {
            header: _('paypanel_domain_popular'),
            dataIndex: 'popular',
            renderer: PayPanel.utils.renderBoolean,
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_domain_active'),
            dataIndex: 'active',
            renderer: PayPanel.utils.renderBoolean,
            sortable: true,
            width: 50,
        }, {
            header: _('paypanel_grid_actions'),
            dataIndex: 'actions',
            renderer: PayPanel.utils.renderActions,
            sortable: false,
            width: 100,
            id: 'actions'
        }];
    },

    getTopBar: function () {
        return [{
            text: '<i class="icon icon-cogs"></i> ',
            menu: [{
                text: '<i class="icon icon-download"></i> ' + _('paypanel_domain_import'),
                cls: 'paypanel-cogs',
                handler: this.importApiDomain,
                scope: this
            }, {
                text: '<i class="icon icon-upload"></i> ' + _('paypanel_domain_update_prices'),
                cls: 'paypanel-cogs',
                handler: this.createDomain,
                scope: this
            }, '-', {
                text: '<i class="icon icon-download"></i> ' + _('paypanel_domain_import_shop'),
                cls: 'paypanel-cogs',
                handler: this.createDomain,
                scope: this
            }, {
                text: '<i class="icon icon-upload"></i> ' + _('paypanel_domain_update_minishop'),
                cls: 'paypanel-cogs',
                handler: this.createDomain,
                scope: this
            }, '-', {
                text: '<i class="icon icon-plus"></i> ' + _('paypanel_domain_create'),
                cls: 'paypanel-cogs',
                handler: this.createDomain,
                scope: this
            }, {
                text: '<i class="icon icon-trash-o red"></i> ' + _('paypanel_domain_remove'),
                cls: 'paypanel-cogs',
                handler: this.removeDomain,
                scope: this
            }, {
                text: '<i class="icon icon-toggle-on green"></i> ' + _('paypanel_domain_active'),
                cls: 'paypanel-cogs',
                handler: this.enableDomain,
                scope: this
            }, {
                text: '<i class="icon icon-toggle-off red"></i> ' + _('paypanel_domain_inactive'),
                cls: 'paypanel-cogs',
                handler: this.disableDomain,
                scope: this
            }]
        }, '->', {
            xtype: 'paypanel-field-search',
            width: 250,
            listeners: {
                search: {
                    fn: function (field) {
                        this._doSearch(field);
                    }, scope: this
                },
                clear: {
                    fn: function (field) {
                        field.setValue('');
                        this._clearSearch();
                    }, scope: this
                },
            }
        }];
    },

    onClick: function (e) {
        var elem = e.getTarget();
        if (elem.nodeName == 'BUTTON') {
            var row = this.getSelectionModel().getSelected();
            if (typeof(row) != 'undefined') {
                var action = elem.getAttribute('action');
                if (action == 'showMenu') {
                    var ri = this.getStore().find('id', row.id);
                    return this._showMenu(this, ri, e);
                }
                else if (typeof this[action] === 'function') {
                    this.menu.record = row.data;
                    return this[action](this, e);
                }
            }
        }
        return this.processEvent('click', e);
    },
    setAction: function(method, field, value) {
        MODx.Ajax.request({
            url: PayPanel.config.connector_url,
            params: {
                action: 'mgr/domain/importapi',
                method: method,
                field_name: field,
                field_value: value
            },
            listeners: {
                success: {
                    fn: function() {
                        this.refresh();
                    },
                    scope: this
                },
                failure: {
                    fn: function(response) {
                        MODx.msg.alert(_('error'), response.message);
                    },
                    scope: this
                }
            }
        })
    },

    _getSelectedIds: function () {
        var ids = [];
        var selected = this.getSelectionModel().getSelections();

        for (var i in selected) {
            if (!selected.hasOwnProperty(i)) {
                continue;
            }
            ids.push(selected[i]['id']);
        }

        return ids;
    },

    _doSearch: function (tf) {
        this.getStore().baseParams.query = tf.getValue();
        this.getBottomToolbar().changePage(1);
    },

    _clearSearch: function () {
        this.getStore().baseParams.query = '';
        this.getBottomToolbar().changePage(1);
    },
});
Ext.reg('paypanel-grid-domains', PayPanel.grid.Domains);