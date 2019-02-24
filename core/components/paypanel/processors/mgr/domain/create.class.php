<?php

class PayPanelDomainCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'PayPanelDomain';
    public $classKey = 'PayPanelDomain';
    public $languageTopics = ['paypanel'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('zone'));
        if (empty($name)) {
            $this->modx->error->addField('zone', $this->modx->lexicon('paypanel_domain_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['zone' => $name])) {
            $this->modx->error->addField('zone', $this->modx->lexicon('paypanel_domain_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'PayPanelDomainCreateProcessor';