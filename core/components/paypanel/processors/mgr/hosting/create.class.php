<?php

class PayPanelHostingCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'PayPanelHosting';
    public $classKey = 'PayPanelHosting';
    public $languageTopics = ['paypanel'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('paypanel_hosting_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('paypanel_hosting_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'PayPanelHostingCreateProcessor';