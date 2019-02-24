var PayPanel = function (config) {
    config = config || {};
    PayPanel.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('paypanel', PayPanel);

PayPanel = new PayPanel();