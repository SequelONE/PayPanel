<?php

class PayPanelServerGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'PayPanelServer';
    public $classKey = 'PayPanelServer';
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
                'OR:virtualisation:LIKE' => '%'.$query.'%',
                'OR:os:LIKE' => '%'.$query.'%',
                'OR:comments:LIKE' => '%'.$query.'%',
                'OR:price:LIKE' => '%'.$query.'%',
                'OR:price_partner:LIKE' => '%'.$query.'%',
                'OR:perсent:LIKE' => '%'.$query.'%',
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
            'title' => $this->modx->lexicon('paypanel_server_update'),
            //'multiple' => $this->modx->lexicon('paypanel_servers_update'),
            'action' => 'updateServer',
            'button' => true,
            'menu' => true,
        ];

        if (!$array['active']) {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-green',
                'title' => $this->modx->lexicon('paypanel_server_enable'),
                'multiple' => $this->modx->lexicon('paypanel_servers_enable'),
                'action' => 'enableServer',
                'button' => true,
                'menu' => true,
            ];
        } else {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-gray',
                'title' => $this->modx->lexicon('paypanel_server_disable'),
                'multiple' => $this->modx->lexicon('paypanel_servers_disable'),
                'action' => 'disableServer',
                'button' => true,
                'menu' => true,
            ];
        }

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('paypanel_server_remove'),
            'multiple' => $this->modx->lexicon('paypanel_servers_remove'),
            'action' => 'removeServer',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'PayPanelServerGetListProcessor';