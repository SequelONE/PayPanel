<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
    /** @noinspection PhpIncludeInspection */
    require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
} else {
    require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var PayPanel $PayPanel */
$PayPanel = $modx->getService('PayPanel', 'PayPanel', MODX_CORE_PATH . 'components/paypanel/model/');
$modx->lexicon->load('paypanel:default');

// handle request
$corePath = $modx->getOption('paypanel_core_path', null, $modx->getOption('core_path') . 'components/paypanel/');
$path = $modx->getOption('processorsPath', $PayPanel->config, $corePath . 'processors/');
$modx->getRequest();

/** @var modConnectorRequest $request */
$request = $modx->request;
$request->handleRequest([
    'processors_path' => $path,
    'location' => '',
]);