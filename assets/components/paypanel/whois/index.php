<?php
$domain = 'sequel.one';
$url = 'https://api.whois.vu/?q='.$domain;

$json = file_get_contents($url);
$whois = json_decode($json);

var_dump($whois);

