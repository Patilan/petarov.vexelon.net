<?php
$who = $_GET['w'];
if (empty($_GET['callback'])) {
	header("HTTP/1.0 500 Internal Server Error");
	die("Missing jsonp parameter!");
}
$callback = $_GET['callback'];
$file = '';
switch($who) {
	case 'games':
		$file = 'games.json';
		break;
	case 'oss':
		$file = 'oss.json';
		break;		
	default:
		header("HTTP/1.0 404 Not Found");
		die("not found $who");
		break;
}
// spit it
echo $_GET['callback'] . '(' . file_get_contents($file) . ')';
?>