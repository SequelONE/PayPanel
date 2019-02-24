<?php

class PayPanelDomainUpdateProcessor extends modObjectUpdateProcessor
{
    public $objectType = 'PayPanelDomain';
    public $classKey = 'PayPanelDomain';
    public $languageTopics = ['paypanel'];
    //public $permission = 'save';


    /**
     * We doing special check of permission
     * because of our objects is not an instances of modAccessibleObject
     *
     * @return bool|string
     */
    public function beforeSave()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $id = (int)$this->getProperty('id');
        $name = trim($this->getProperty('zone'));
        if (empty($id)) {
            return $this->modx->lexicon('paypanel_domain_err_ns');
        }

        if (empty($name)) {
            $this->modx->error->addField('zone', $this->modx->lexicon('paypanel_domain_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['zone' => $name, 'id:!=' => $id])) {
            $this->modx->error->addField('zone', $this->modx->lexicon('paypanel_domain_err_ae'));
        }

        return parent::beforeSet();
    }
}

return 'PayPanelDomainUpdateProcessor';
