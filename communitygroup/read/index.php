
<?php 
//get the month number to direct to the correct page
$today = getdate();
$month = $today[mon];
$URL = "http://www.markmcfadden.net/smallgroup/read/".$month.".html";

//redirect to the $URL
ob_start();  
header("Location:".$URL);  
ob_flush(); 
?>

