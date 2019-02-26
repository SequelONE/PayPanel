<?php
/** @var modX $modx */
/** @var array $scriptProperties */
$pdoTools = $modx->getService('pdoTools');

$domain = $_GET['domain'];
$url = 'https://api.whois.vu/?q='.$domain;

$json = file_get_contents($url);
$result = json_decode($json);

// Do your snippet code here. This demo grabs 5 items from our custom table.
$tpl = $modx->getOption('tpl', $scriptProperties);
$tplForm = $modx->getOption('tplForm', $scriptProperties);

$output = '';
$pls = array(
    'domain' =>$result->domain, 
    'available' => $result->available,
    'type' => $result->type,
    'statuses' => $result->statuses,
    'created' => $result->created,
    'expires' => $result->expires,
    'whois' => $result->whois
);

$output .= $pdoTools->getChunk($tplForm);
$output .= $pdoTools->getChunk($tpl, $pls);

return $output;