<?php
$data = file_get_contents('php://input');

$superheroes = json_decode($data, true);

$superheroes_json = json_encode($superheroes, JSON_PRETTY_PRINT);

$file = fopen('superheroes.json', 'w');
fwrite($file, $superheroes_json);
fclose($file);
?>
