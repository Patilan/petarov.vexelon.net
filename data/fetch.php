<?php
$who = $_GET['w'];

switch($who) {
	case 'games':
		echo $_GET['callback'] . '(' . file_get_contents('games.json') . ')';
		break;
	case 'oss':
		echo $_GET['callback'] . '(' . file_get_contents('oss.json') . ')';
		break;		
	default:
		//header("HTTP/1.0 404 Not Found");
		die("not found $who");
		break;
}
?>