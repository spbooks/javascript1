<?php




header("Content-type: text/xml");

$city = $_REQUEST["city"];

if ($city == "Melbourne")
{
	$fileName = "melbourne.xml";
}
else if ($city == "London")
{
	$fileName = "london.xml";
}
if ($city == "New York")
{
	$fileName = "new_york.xml";
}

$filePointer = fopen($fileName, "r");
$xmlData = fread($filePointer, filesize($fileName));
fclose($filePointer);

print($xmlData);

return true;




?>