<?php

class PayPanelVdsGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'PayPanelVds';
    public $classKey = 'PayPanelVds';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'DESC';
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
        if ($query) {
            $c->where([
                'name:LIKE' => '%'.$query.'%',
                'OR:processor:LIKE' => '%'.$query.'%',
                'OR:memory:LIKE' => '%'.$query.'%',
                'OR:hdd:LIKE' => '%'.$query.'%',
                'OR:trafic:LIKE' => '%'.$query.'%',
                'OR:support:LIKE' => '%'.$query.'%',
                'OR:ipv4:LIKE' => '%'.$query.'%',
                'OR:ipv6:LIKE' => '%'.$query.'%',
                'OR:ipmax:LIKE' => '%'.$query.'%',
                'OR:dns:LIKE' => '%'.$query.'%',
                'OR:backup:LIKE' => '%'.$query.'%',
                'OR:price:LIKE' => '%'.$query.'%',
                'OR:price_partner:LIKE' => '%'.$query.'%',
                'OR:percent:LIKE' => '%'.$query.'%',
                'OR:advance:LIKE' => '%'.$query.'%',
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

        // Edit
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-edit',
            'title' => $this->modx->lexicon('paypanel_vds_update'),
            //'multiple' => $this->modx->lexicon('paypanel_vdss_update'),
            'action' => 'updateVds',
            'button' => true,
            'menu' => true,
        ];

        if (!$array['active']) {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-green',
                'title' => $this->modx->lexicon('paypanel_vds_enable'),
                'multiple' => $this->modx->lexicon('paypanel_vdss_enable'),
                'action' => 'enableVds',
                'button' => true,
                'menu' => true,
            ];
        } else {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-gray',
                'title' => $this->modx->lexicon('paypanel_vds_disable'),
                'multiple' => $this->modx->lexicon('paypanel_vdss_disable'),
                'action' => 'disableVds',
                'button' => true,
                'menu' => true,
            ];
        }

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('paypanel_vds_remove'),
            'multiple' => $this->modx->lexicon('paypanel_vdss_remove'),
            'action' => 'removeVds',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'PayPanelVdsGetListProcessor';