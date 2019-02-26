<?php

/**
 * The home manager controller for PayPanel.
 *
 */
class PayPanelHomeManagerController extends modExtraManagerController
{
    /** @var PayPanel $PayPanel */
    public $PayPanel;


    /**
     *
     */

    public function initialize() {
        $this->PayPanel = $this->modx->getService('PayPanel', 'PayPanel', MODX_CORE_PATH . 'components/paypanel/model/');

        if (!include_once MODX_CORE_PATH . 'components/minishop2/model/minishop2/minishop2.class.php') {
            throw new Exception('You must install miniShop2 first');
        }

        $this->miniShop2 = new miniShop2($this->modx);

        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return ['paypanel:default'];
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('paypanel');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->PayPanel->config['cssUrl'] . 'mgr/main.css');

        $this->addJavascript(MODX_MANAGER_URL . 'assets/modext/util/datetime.js');

        $this->addJavascript($this->miniShop2->config['jsUrl'] . 'mgr/minishop2.js');
        $this->addJavascript($this->miniShop2->config['jsUrl'] . 'mgr/misc/ms2.utils.js');
        $this->addJavascript($this->miniShop2->config['jsUrl'] . 'mgr/misc/ms2.combo.js');

        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/paypanel.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/hostings.grid.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/hostings.windows.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/vdss.grid.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/vdss.windows.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/servers.grid.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/servers.windows.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/domains.grid.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/domains.windows.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/ssls.grid.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/ssls.windows.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/licenses.grid.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/licenses.windows.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        PayPanel.config = ' . json_encode($this->PayPanel->config) . ';
        PayPanel.config.connector_url = "' . $this->PayPanel->config['connectorUrl'] . '";
        Ext.onReady(function() {MODx.load({ xtype: "paypanel-page-home"});});
        </script>');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        $this->content .= '<div id="paypanel-panel-home-div"></div>';

        return '';
    }
}