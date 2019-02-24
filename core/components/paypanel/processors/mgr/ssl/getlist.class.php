<?php

class PayPanelSslGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'PayPanelSsl';
    public $classKey = 'PayPanelSsl';
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
                'OR:logo:LIKE' => '%'.$query.'%',
                'OR:options:LIKE' => '%'.$query.'%',
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
            'title' => $this->modx->lexicon('paypanel_ssl_update'),
            //'multiple' => $this->modx->lexicon('paypanel_ssls_update'),
            'action' => 'updateSsl',
            'button' => true,
            'menu' => true,
        ];

        if (!$array['active']) {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-green',
                'title' => $this->modx->lexicon('paypanel_ssl_enable'),
                'multiple' => $this->modx->lexicon('paypanel_ssls_enable'),
                'action' => 'enableSsl',
                'button' => true,
                'menu' => true,
            ];
        } else {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-gray',
                'title' => $this->modx->lexicon('paypanel_ssl_disable'),
                'multiple' => $this->modx->lexicon('paypanel_ssls_disable'),
                'action' => 'disableSsl',
                'button' => true,
                'menu' => true,
            ];
        }

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('paypanel_ssl_remove'),
            'multiple' => $this->modx->lexicon('paypanel_ssls_remove'),
            'action' => 'removeSsl',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'PayPanelSslGetListProcessor';