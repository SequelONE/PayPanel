<?php

class PayPanelSslEnableProcessor extends modObjectProcessor
{
    public $objectType = 'PayPanelSsl';
    public $classKey = 'PayPanelSsl';
    public $languageTopics = ['paypanel'];
    //public $permission = 'save';


    /**
     * @return array|string
     */
    public function process()
    {
        if (!$this->checkPermissions()) {
            return $this->failure($this->modx->lexicon('access_denied'));
        }

        $ids = $this->modx->fromJSON($this->getProperty('ids'));
        if (empty($ids)) {
            return $this->failure($this->modx->lexicon('paypanel_ssl_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var PayPanelSsl $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('paypanel_ssl_err_nf'));
            }

            $object->set('active', true);
            $object->save();
        }

        return $this->success();
    }

}

return 'PayPanelSslEnableProcessor';
