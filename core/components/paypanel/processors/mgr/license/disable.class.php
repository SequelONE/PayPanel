<?php

class PayPanelLicenseDisableProcessor extends modObjectProcessor
{
    public $objectType = 'PayPanelLicense';
    public $classKey = 'PayPanelLicense';
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
            return $this->failure($this->modx->lexicon('paypanel_license_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var PayPanelLicense $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('paypanel_license_err_nf'));
            }

            $object->set('active', false);
            $object->save();
        }

        return $this->success();
    }

}

return 'PayPanelLicenseDisableProcessor';
