<?php

return [
    'PayPanel' => [
        'file' => 'paypanel',
        'description' => 'PayPanel snippet to list items',
        'properties' => [
            'tpl' => [
                'type' => 'textfield',
                'value' => 'tpl.PayPanel.item',
            ],
            'sortby' => [
                'type' => 'textfield',
                'value' => 'name',
            ],
            'sortdir' => [
                'type' => 'list',
                'options' => [
                    ['text' => 'ASC', 'value' => 'ASC'],
                    ['text' => 'DESC', 'value' => 'DESC'],
                ],
                'value' => 'ASC',
            ],
            'limit' => [
                'type' => 'numberfield',
                'value' => 10,
            ],
            'outputSeparator' => [
                'type' => 'textfield',
                'value' => "\n",
            ],
            'toPlaceholder' => [
                'type' => 'combo-boolean',
                'value' => false,
            ],
        ],
    ],
    'PayPanelWhois' => [
        'file' => 'paypanelwhois',
        'description' => 'Whois service for PayPanel.',
        'properties' => [
            'tplForm' => [
                'type' => 'textfield',
                'value' => 'tpl.PayPanel.Whois.form',
            ],
            'tpl' => [
                'type' => 'textfield',
                'value' => 'tpl.PayPanel.Whois.item',
            ],
        ],
    ],
];