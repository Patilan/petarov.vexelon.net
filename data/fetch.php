<?php

function validateCallback() {
	if (empty($_GET['callback'])) {
		header("HTTP/1.0 500 Internal Server Error");
		die("Missing jsonp parameter!");
	}
}

function outJSON($filename) {
	header('Content-type: application/javascript');
	echo $_GET['callback'] . '(' . file_get_contents($filename) . ')';	
}

function outText($filename) {
	header('Content-type: text/plain');
	echo file_get_contents($filename);
}

$who = strip_tags($_GET['w']);
switch($who) {
	case 'about':
		outText('about.md');
		break;
		
	case 'games':
		validateCallback();
		outJSON('games.json');
		break;
		
	case 'oss':
		validateCallback();
		outJSON('oss.json');		
		break;
		
	case 'atom':
		validateCallback();
		
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
?>