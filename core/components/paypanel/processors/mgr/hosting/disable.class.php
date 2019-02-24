<?php

class PayPanelHostingDisableProcessor extends modObjectProcessor
{
    public $objectType = 'PayPanelHosting';
    public $classKey = 'PayPanelHosting';
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
            return $this->failure($this->modx->lexicon('paypanel_hosting_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var PayPanelHosting $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('paypanel_hosting_err_nf'));
            }

            $object->set('active', false);
            $object->save();
        }

        return $this->success();
    }

}

return 'PayPanelHostingDisableProcessor';
