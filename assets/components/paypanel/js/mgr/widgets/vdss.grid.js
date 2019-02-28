PayPanel.grid.Vdss = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'paypanel-grid-vdss';
    }
    Ext.applyIf(config, {
        url: PayPanel.config.connector_url,
        fields: this.getFields(config),
        columns: this.getColumns(config),
        tbar: this.getTopBar(config),
        sm: new Ext.grid.CheckboxSelectionModel(),
        baseParams: {
            action: 'mgr/vds/getlist'
        },
        listeners: {
            rowDblClick: function (grid, rowIndex, e) {
                var row = grid.store.getAt(rowIndex);
                this.updateVds(grid, e, row);
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
    PayPanel.grid.Vdss.superclass.constructor.call(this, config);

    // Clear selection on grid refresh
    this.store.on('load', function () {
        if (this._getSelectedIds().length) {
            this.getSelectionModel().clearSelections();
        }
    }, this);
};
Ext.extend(PayPanel.grid.Vdss, MODx.grid.Grid, {
    windows: {},

    getMenu: function (grid, rowIndex) {
        var ids = this._getSelectedIds();

        var row = grid.getStore().getAt(rowIndex);
        var menu = PayPanel.utils.getMenu(row.data['actions'], this, ids);

        this.addContextMenuVds(menu);
    },

    createVds: function (btn, e) {
        var w = MODx.load({
            xtype: 'paypanel-vds-window-create',
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

    updateVds: function (btn, e, row) {
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
                action: 'mgr/vds/get',
                id: id
            },
            listeners: {
                success: {
                    fn: function (r) {
                        var w = MODx.load({
                            xtype: 'paypanel-vds-window-update',
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

    removeVds: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.msg.confirm({
            title: ids.length > 1
                ? _('paypanel_vdss_remove')
                : _('paypanel_vds_remove'),
            text: ids.length > 1
                ? _('paypanel_vdss_remove_confirm')
                : _('paypanel_vds_remove_confirm'),
            url: this.config.url,
            params: {
                action: 'mgr/vds/remove',
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

    disableVds: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/vds/disable',
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

    enableVds: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/vds/enable',
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

    getFields: function () {
        return ['id', 'name', 'price', 'price_partner', 'percent', 'advance', 'active', 'actions'];
    },

    getColumns: function () {
        return [{
            header: _('paypanel_vds_id'),
            dataIndex: 'id',
            sortable: true,
            width: 70
        }, {
            header: _('paypanel_vds_name'),
            dataIndex: 'name',
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_vds_price'),
            dataIndex: 'price',
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_vds_price_partner'),
            dataIndex: 'price_partner',
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_vds_percent'),
            dataIndex: 'percent',
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_vds_advance'),
            dataIndex: 'advance',
            sortable: true,
            width: 100,
        }, {
            header: _('paypanel_vds_active'),
            dataIndex: 'active',
            renderer: PayPanel.utils.renderBoolean,
            sortable: true,
            width: 100,
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
                handler: this.createVds,
                scope: this
            }, {
                text: '<i class="icon icon-upload"></i> ' + _('paypanel_domain_update_prices'),
                cls: 'paypanel-cogs',
                handler: this.createVds,
                scope: this
            }, '-', {
                text: '<i class="icon icon-download"></i> ' + _('paypanel_domain_import_shop'),
                cls: 'paypanel-cogs',
                handler: this.createVds,
                scope: this
            }, {
                text: '<i class="icon icon-upload"></i> ' + _('paypanel_domain_update_minishop'),
                cls: 'paypanel-cogs',
                handler: this.createVds,
                scope: this
            }, '-', {
                text: '<i class="icon icon-plus"></i> ' + _('paypanel_domain_create'),
                cls: 'paypanel-cogs',
                handler: this.createVds,
                scope: this
            }, {
                text: '<i class="icon icon-trash-o red"></i> ' + _('paypanel_domain_remove'),
                cls: 'paypanel-cogs',
                handler: this.removeVds,
                scope: this
            }, {
                text: '<i class="icon icon-toggle-on green"></i> ' + _('paypanel_domain_active'),
                cls: 'paypanel-cogs',
                handler: this.enableVds,
                scope: this
            }, {
                text: '<i class="icon icon-toggle-off red"></i> ' + _('paypanel_domain_inactive'),
                cls: 'paypanel-cogs',
                handler: this.disableVds,
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
Ext.reg('paypanel-grid-vdss', PayPanel.grid.Vdss);
