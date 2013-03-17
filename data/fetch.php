<?php
$who = $_GET['w'];
if (empty($_GET['callback'])) {
	header("HTTP/1.0 500 Internal Server Error");
	die("Missing jsonp parameter!");
}

$callback = $_GET['callback'];
$file = '';
header('Content-type: application/javascript');

switch($who) {
	case 'games':
		$file = 'games.json';
		break;
	case 'oss':
		$file = 'oss.json';
		break;
	case 'atom':
		$url = $_GET['url'];
		
		$curl = curl_init($url);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
		$xml_output = curl_exec($curl);
		curl_close($curl);
		
		if (FALSE  === $xml_output) {
			header("HTTP/1.0 500 Internal Server Error");
			die(curl_error($curl));			
		}
		
		echo $_GET['callback'] . '(' . json_encode(array('xml' => $xml_output)) . ')';
		exit;
	default:
		header("HTTP/1.0 404 Not Found");
		die("$who not found!");
		break;
}
// spit it out
echo $_GET['callback'] . '(' . file_get_contents($file) . ')';
?>