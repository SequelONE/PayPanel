<?php

/**
 * Update API REG.RU
 */
class PayPanelImportApiProcessor extends modProcessor
{
    public $classKey = 'PayPanelDomain';

    /** @var paypanel $paypanel */
    public $paypanel;

    /** {@inheritDoc} */
    public function initialize()
    {
        /** @var paypanel $paypanel */
        $this->paypanel = $this->modx->getService('paypanel');
        $this->paypanel->initialize($this->getProperty('context', $this->modx->context->key));

        return parent::initialize();
    }

    /** {@inheritDoc} */
    protected function clearTable()
    {
        $this->modx->query("DELETE FROM {$this->modx->getTableName($this->classKey)}");
        $this->modx->query("ALTER TABLE {$this->modx->getTableName($this->classKey)} AUTO_INCREMENT=1");
    }

    /** {@inheritDoc} */
    public function process()
    {
        $content = $this->paypanel->getFileContent($this->classKey);
        if ($content == false) {
            return $this->failure($this->paypanel->lexicon('err_file_ns'));
        }

        $this->clearTable();
        $this->paypanel->createDefault();

        $api_url = $modx->getOption('paypanel_api_regru_url');
        $api_login = $modx->getOption('paypanel_api_regru_username');
        $api_password = $modx->getOption('paypanel_api_regru_password');
        $api_format = $modx->getOption('paypanel_api_regru_format');
        $api_currency = $modx->getOption('paypanel_api_regru_currency');

        $url = $api_url.'domain/get_prices?output_format='.$api_format.'&currency='.$api_currency.'&show_renew_data=1&show_update_data=1&password='.$api_password.'&username='.$api_login;

        $json = file_get_contents($url);
        $api_price = json_decode($json);
        $prices = $api_price->answer->prices;

        $modx->addPackage('paypanel', $modx->getOption('core_path').'components/paypanel/model/');

        foreach ($prices as $zone => $data) {

            $extcreate_price_eq_renew = $data->extcreate_price_eq_renew;
            $idn = $data->idn;
            $reg_max_period = $data->reg_max_period;
            $reg_min_period = $data->reg_min_period;
            $reg_price = $data->reg_price;
            $retail_reg_price = $data->retail_reg_price;

            $domain = str_replace(array('_', '-', '—', '  ', 'idn.'), '', trim($zone));
            $domain = '.'.$domain;

            $procent = $modx->getOption('paypanel_api_regru_percent');
            $price_procent = $reg_price / 100 * $procent;
            $price_procent = preg_replace('/(\..{2}).*/', '$1', $price_procent);
            $price = $reg_price + $price_procent;
            $price = preg_replace('/(\..{2}).*/', '$1', $price);

            if (!$object = $modx->getObject('PayPanelDomain', ['zone' => $zone])) {

                $object = $modx->newObject('PayPanelDomain');
                $object->set('zone', $zone);

            }

            $object->set('domain', $domain);
            $object->set('whois', '');
            $object->set('idn', $idn);
            //$object->set('groups', '');
            //$object->set('popular', 0);
            $object->set('min', $reg_min_period);
            $object->set('max', $reg_max_period);
            $object->set('price_retail', $retail_reg_price);
            $object->set('price_partner', $reg_price);
            $object->set('percent', $procent);
            $object->set('advance', $price_procent);
            $object->set('price', $price);
            $object->set('active', 1);

            $object->save();

        }

        return $this->success();
    }

}

return 'PayPanelImportApiProcessor';