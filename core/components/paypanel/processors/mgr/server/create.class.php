<?php

class PayPanelServerCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'PayPanelServer';
    public $classKey = 'PayPanelServer';
    public $languageTopics = ['paypanel'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('paypanel_server_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('paypanel_server_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'PayPanelServerCreateProcessor';