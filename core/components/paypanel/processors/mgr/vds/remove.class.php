<?php

class PayPanelVdsRemoveProcessor extends modObjectProcessor
{
    public $objectType = 'PayPanelVds';
    public $classKey = 'PayPanelVds';
    public $languageTopics = ['paypanel'];
    //public $permission = 'remove';


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
            return $this->failure($this->modx->lexicon('paypanel_vds_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var PayPanelVds $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('paypanel_vds_err_nf'));
            }

            $object->remove();
        }

        return $this->success();
    }

}

return 'PayPanelVdsRemoveProcessor';