<?php

class PayPanelLicenseCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'PayPanelLicense';
    public $classKey = 'PayPanelLicense';
    public $languageTopics = ['paypanel'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('paypanel_license_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('paypanel_license_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'PayPanelLicenseCreateProcessor';