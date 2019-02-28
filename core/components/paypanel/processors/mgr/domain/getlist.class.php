<?php

class PayPanelDomainGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'PayPanelDomain';
    public $classKey = 'PayPanelDomain';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'ASC';
    //public $permission = 'list';


    /**
     * We do a special check of permissions
     * because our objects is not an instances of modAccessibleObject
     *
     * @return boolean|string
     */
    public function beforeQuery()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @param xPDOQuery $c
     *
     * @return xPDOQuery
     */
    public function prepareQueryBeforeCount(xPDOQuery $c)
    {
        $query = trim($this->getProperty('query'));

        $c->leftJoin('msCategory', 'msCategory', 'msCategory.id = PayPanelDomain.groups');
        $c->select(array($this->modx->getSelectColumns('PayPanelDomain', 'PayPanelDomain')));
        $c->select(array('msCategory.pagetitle as category'));

        if ($query) {
            $c->where([
                'zone:LIKE' => '%'.$query.'%',
                'OR:domain:LIKE' => '%'.$query.'%',
            ]);
        }

        return $c;
    }


    /**
     * @param xPDOObject $object
     *
     * @return array
     */
    public function prepareRow(xPDOObject $object)
    {
        $array = $object->toArray();
        $array['actions'] = [];

        // Import API REG.RU
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-download',
            'title' => $this->modx->lexicon('paypanel_domain_update'),
            //'multiple' => $this->modx->lexicon('paypanel_domains_update'),
            'action' => 'importApiDomain',
            'button' => true,
            'menu' => true,
        ];

        // Edit
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-edit',
            'title' => $this->modx->lexicon('paypanel_domain_update'),
            //'multiple' => $this->modx->lexicon('paypanel_domains_update'),
            'action' => 'updateDomain',
            'button' => true,
            'menu' => true,
        ];

        if (!$array['active']) {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-green',
                'title' => $this->modx->lexicon('paypanel_domain_enable'),
                'multiple' => $this->modx->lexicon('paypanel_domains_enable'),
                'action' => 'enableDomain',
                'button' => true,
                'menu' => true,
            ];
        } else {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-gray',
                'title' => $this->modx->lexicon('paypanel_domain_disable'),
                'multiple' => $this->modx->lexicon('paypanel_domains_disable'),
                'action' => 'disableDomain',
                'button' => true,
                'menu' => true,
            ];
        }

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('paypanel_domain_remove'),
            'multiple' => $this->modx->lexicon('paypanel_domains_remove'),
            'action' => 'removeDomain',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'PayPanelDomainGetListProcessor';