<?php

class PayPanelVdsCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'PayPanelVds';
    public $classKey = 'PayPanelVds';
    public $languageTopics = ['paypanel'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('paypanel_vds_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('paypanel_vds_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'PayPanelVdsCreateProcessor';