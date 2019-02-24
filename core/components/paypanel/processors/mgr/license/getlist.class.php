<?php

class PayPanelLicenseGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'PayPanelLicense';
    public $classKey = 'PayPanelLicense';
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
                'OR:period:LIKE' => '%'.$query.'%',
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
            'title' => $this->modx->lexicon('paypanel_license_update'),
            //'multiple' => $this->modx->lexicon('paypanel_licenses_update'),
            'action' => 'updateLicense',
            'button' => true,
            'menu' => true,
        ];

        if (!$array['active']) {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-green',
                'title' => $this->modx->lexicon('paypanel_license_enable'),
                'multiple' => $this->modx->lexicon('paypanel_licenses_enable'),
                'action' => 'enableLicense',
                'button' => true,
                'menu' => true,
            ];
        } else {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-gray',
                'title' => $this->modx->lexicon('paypanel_license_disable'),
                'multiple' => $this->modx->lexicon('paypanel_licenses_disable'),
                'action' => 'disableLicense',
                'button' => true,
                'menu' => true,
            ];
        }

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('paypanel_license_remove'),
            'multiple' => $this->modx->lexicon('paypanel_licenses_remove'),
            'action' => 'removeLicense',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'PayPanelLicenseGetListProcessor';