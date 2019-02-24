<?php
/** @var xPDOTransport $transport */
/** @var array $options */
/** @var modX $modx */
if ($transport->xpdo) {
    $modx =& $transport->xpdo;

    $dev = MODX_BASE_PATH . 'Extras/PayPanel/';
    /** @var xPDOCacheManager $cache */
    $cache = $modx->getCacheManager();
    if (file_exists($dev) && $cache) {
        if (!is_link($dev . 'assets/components/paypanel')) {
            $cache->deleteTree(
                $dev . 'assets/components/paypanel/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_ASSETS_PATH . 'components/paypanel/', $dev . 'assets/components/paypanel');
        }
        if (!is_link($dev . 'core/components/paypanel')) {
            $cache->deleteTree(
                $dev . 'core/components/paypanel/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_CORE_PATH . 'components/paypanel/', $dev . 'core/components/paypanel');
        }
    }
}

return true;