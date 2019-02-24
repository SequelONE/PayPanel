<?php

class PayPanelServerEnableProcessor extends modObjectProcessor
{
    public $objectType = 'PayPanelServer';
    public $classKey = 'PayPanelServer';
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
            return $this->failure($this->modx->lexicon('paypanel_server_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var PayPanelItem $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('paypanel_server_err_nf'));
            }

            $object->set('active', true);
            $object->save();
        }

        return $this->success();
    }

}

return 'PayPanelServerEnableProcessor';
