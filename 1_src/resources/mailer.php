<?php
// ini_set('display_errors',1);
// error_reporting(E_ALL);


var_dump($_POST);

echo '1';
// send an email
$to = 'miiv226@list.ru';

$subject = 'Заявка с сайта flyyy';

$c = true;
foreach ($_POST as $key => $value) {
	if ($value != "" && $key != 'none') {
		$message .= "
    " . (($c = !$c) ? '<div>' : '<div style="background-color: #f8f8f8;">') . "
      <p style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b><i style='padding-left: 10px;'>        $value</i></p>
    </div>
    ";
	}
}

$message = str_replace('_', ' ', $message);

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-Type: text/html; charset=utf-8' . "\r\n";

$headers .= 'From: Flyyy <1ivan.dyadyura226@gmail.com>' . "\r\n";
$headers .= 'Reply-To: Flyyy <1ivan.dyadyura226@gmail.com>' . "\r\n";

// Mail it
mail($to, $subject, $message, $headers);
